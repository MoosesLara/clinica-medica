import { Suspense, lazy } from 'react';
import './styles.css';

// Componentes estáticos y críticos (Carga Inmediata)
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { SectionSkeleton } from './components/ui/Skeleton';

// Code-Splitting: Componentes debajo del "pantallazo" inicial
const ClinicsDualSection = lazy(() => import('./components/sections/ClinicsDualSection').then(module => ({ default: module.ClinicsDualSection })));
const SpecialtiesSection = lazy(() => import('./components/sections/SpecialtiesSection').then(module => ({ default: module.SpecialtiesSection })));
const AboutAndCredentials = lazy(() => import('./components/sections/AboutAndCredentials').then(module => ({ default: module.AboutAndCredentials })));
const QuickAppointmentSection = lazy(() => import('./components/sections/QuickAppointmentSection').then(module => ({ default: module.QuickAppointmentSection })));
const PatientTestimonials = lazy(() => import('./components/sections/PatientTestimonials').then(module => ({ default: module.PatientTestimonials })));

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        
        <Suspense fallback={<SectionSkeleton />}>
          <ClinicsDualSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <SpecialtiesSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <AboutAndCredentials />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <QuickAppointmentSection />
        </Suspense>
        
        <Suspense fallback={<SectionSkeleton />}>
          <PatientTestimonials />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
