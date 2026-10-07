import React from 'react';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 300 }
    }
  };

  return (
    <section className="relative hero-gradient pt-8 pb-20 overflow-hidden" data-purpose="hero-banner" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[580px]">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 pt-4 lg:pt-0"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-2xl sm:rounded-full bg-white border border-sky-100 shadow-sm text-[10px] sm:text-xs font-semibold text-brand-navy max-w-full overflow-hidden text-ellipsis whitespace-normal">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
              <span>{t('hero.badge').split(' | ')[0]}</span>
              <span className="text-slate-300">|</span>
              <span className="text-brand-sky">{t('hero.badge').split(' | ')[1]}</span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy leading-[1.12] tracking-tight">
              {t('hero.title_main')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-sky to-sky-600 block sm:inline">{t('hero.title_highlight')}</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {t('hero.description')}
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <Button asAnchor href="#cita" variant="secondary" icon="fa-arrow-right">
                {t('hero.btn_book')}
              </Button>
              <Button asAnchor href="#sedes" variant="outline" icon="fa-location-dot" className="text-brand-sky">
                {t('hero.btn_locations')}
              </Button>
            </motion.div>
            <motion.div variants={itemVariants} className="pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div className="flex -space-x-2 shrink-0">
                <img alt="Dra. Colaboradora" className="inline-block h-10 w-10 sm:h-12 sm:w-12 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDfgchyfLvlucclR_1cnUMz-atye_ckDhtmrrHgRsKEt_uI8kG4_vrcdg1UU8HB2KqbB4Dtc16-cgYMLoDU_vsNIHB7cD67E9UTdD8QnSq9jOpaZ1KpNPHgjKOpht2uYb_Rxa69HoLRR0Ef3KaixMtOPO3pbF3ltPV3EMglrdPeaRvQHbi7BHICEKM4VWJFv6LskG3gNHpMrCSYzJ4Co_Y3ooboURT6X8Dhiq-HOcu"/>
                <img alt="Dr. Morales Cirujano" className="inline-block h-10 w-10 sm:h-12 sm:w-12 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWLCzg93K0OUVPSWRahJIZQrBe3C__NQrtkYY9SKePKR0AgmZTK1fnOMg54nQyk9ctXrEN5PctY6XsMW8FZ8z0r474Tnvi_qe99hcVy7QppkAYfJbE9Fpd0fbXFIL5Ztb8x8zN0jvgg8mcRJUrjOPGm3bsma4yHpfN93Ynxrrg54rZC7jcyrOjRIZj-4UWAbiywg4nkSJMOaysWhlHmh5-kNAntnJP62RknM7FEnNv"/>
                <img alt="Dr. Anestesiólogo" className="inline-block h-10 w-10 sm:h-12 sm:w-12 rounded-full ring-2 ring-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiayam455Fga_M-Ht-La896KMYRppmsHGg-DDFz_BWf7SqRaU2MVGmeNNCyh8exTM_PzLxg-vuWUOGRQCvQdnSHJIIi87-2addn2FiZw3TD2WoQ3TZ1Y8C0kR3EVvKO8025bJ5B_S-dNQI-ajDPoopiIuHriMdxCb5qMwUHgLWlIgwEd6cQr08tn-2CDGDO0r0mhJ0RwPitYmQXIkkffESl1gnlBLS-oYU_TYR61Xv"/>
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-1 text-amber-400 font-bold">
                  {[...Array(5)].map((_, i) => <i key={i} className="fa-solid fa-star"></i>)}
                  <span className="text-slate-800 ml-1 font-bold text-xs sm:text-sm">{t('hero.reviews_rating')}</span>
                </div>
                <p className="text-slate-500 mt-1 max-w-[260px] sm:max-w-none text-[11px] sm:text-xs">{t('hero.reviews_text')}</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            className="lg:col-span-5 relative flex justify-center items-end"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img alt="Dr. Alejandro Morales en Consulta Quirúrgica" className="w-full h-[480px] object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHaZMHPf6eqeTpj5F00o2H4SLkqBQsSoyYF2trEcDzO5x6yuPTdEtxDHvliK3m0qRPDiOjCKxytkFQEFwZu4lhv64_-Zo5S_1_W6k2HCF1g5Z_wLIOWG01_OoSI1BWw6B23LU07jhrM77MRVXueBgniYkiNua8wXp_rLNY3ZGF6IbiOSrso44b-SgcYMHuB0Ji39ryoEMa0uGmW8F6DRGfvmxPAVmTpWgnkIpjvKSA"/>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="bg-brand-sky/90 backdrop-blur-sm text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md inline-block mb-1">{t('hero.card_badge')}</span>
                  <p className="font-bold text-lg leading-tight">{t('hero.card_name')}</p>
                  <p className="text-xs text-slate-200">{t('hero.card_desc')}</p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-white p-3.5 rounded-2xl shadow-elevated border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-brand-emerald flex items-center justify-center font-bold">
                  <i className="fa-solid fa-shield-virus text-lg"></i>
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{t('hero.eras_protocol')}</div>
                  <div className="text-xs font-bold text-brand-navy">{t('hero.eras_desc')}</div>
                </div>
              </div>
              <div className="absolute bottom-20 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-elevated border border-slate-100 max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-sky"></span>
                  </span>
                  <span className="text-[11px] font-bold text-slate-800">{t('hero.tech_title')}</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-snug">{t('hero.tech_desc')}</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Metrics */}
        <div className="mt-14 -mb-10 relative z-20" data-purpose="metrics-counter-bar">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-brand-navy/5 border border-slate-100 p-6 sm:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
              <div className="text-center pt-3 lg:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">20+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">{t('hero.metrics_years')}</div>
                <p className="text-[11px] text-slate-400 mt-0.5">{t('hero.metrics_years_desc')}</p>
              </div>
              <div className="text-center pt-3 lg:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-sky tracking-tight">4,500+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">{t('hero.metrics_surgeries')}</div>
                <p className="text-[11px] text-slate-400 mt-0.5">{t('hero.metrics_surgeries_desc')}</p>
              </div>
              <div className="text-center pt-3 lg:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-emerald tracking-tight">99.2%</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">{t('hero.metrics_success')}</div>
                <p className="text-[11px] text-slate-400 mt-0.5">{t('hero.metrics_success_desc')}</p>
              </div>
              <div className="text-center pt-3 lg:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">2</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">{t('hero.metrics_locations')}</div>
                <p className="text-[11px] text-slate-400 mt-0.5">{t('hero.metrics_locations_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
