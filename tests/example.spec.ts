import { test, expect } from '@playwright/test';

test.describe('Clínica Médica - E2E Funcionality', () => {
  test.beforeEach(async ({ page }) => {
    // Ir a la página local
    await page.goto('http://localhost:5173/');
  });

  test('Validar carga del Hero y Títulos', async ({ page }) => {
    // Verificar el título principal de la pestaña
    await expect(page).toHaveTitle(/Aura Surgical/i);
    
    // Verificar que el brand "AuraSurgical" aparezca en el DOM
    const headerBrand = page.locator('header').getByText('AuraSurgical');
    await expect(headerBrand).toBeVisible();

    // Verificar texto del hero
    const heroTitle = page.locator('text=Cirugía de Alta Precisión');
    await expect(heroTitle).toBeVisible();
  });

  test('Flujo Completo: Agendar Cita y Ver Modal de Éxito', async ({ page }) => {
    // 1. Navegar hasta la sección del formulario
    const formSection = page.locator('[data-purpose="appointment-form"]');
    
    // Scrollear hacia la sección para disparar la animación de framer-motion (whileInView)
    await formSection.scrollIntoViewIfNeeded();

    // 2. Llenar el formulario
    await page.fill('input[name="name"]', 'Paciente de Prueba');
    await page.fill('input[name="phone"]', '+34 600 123 456');
    
    // Seleccionar opciones
    await page.selectOption('select[name="clinic"]', 'sangabriel');
    await page.selectOption('select[name="reason"]', 'segunda_opinion');
    
    // Llenar notas
    await page.fill('textarea[name="notes"]', 'Tengo resultados de una ecografía reciente.');

    // 3. Enviar el formulario
    const submitBtn = formSection.locator('button[type="submit"]');
    await submitBtn.click();

    // 4. Validar que el Modal de Éxito apareció (React Portal)
    const modalDialog = page.locator('div[role="dialog"]');
    await expect(modalDialog).toBeVisible({ timeout: 5000 }); // Esperamos animación

    // 5. Validar textos dentro del modal
    await expect(modalDialog).toContainText('Solicitud Confirmada');
    await expect(modalDialog).toContainText('Paciente de Prueba'); // Se refleja el nombre ingresado
    
    // 6. Cerrar el modal
    const closeBtn = modalDialog.locator('button', { hasText: 'Entendido, volver al inicio' });
    await closeBtn.click();

    // Validar que el modal desapareció
    await expect(modalDialog).not.toBeVisible();
  });
});
