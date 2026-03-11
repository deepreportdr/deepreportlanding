// main.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation background effect on scroll
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Fade-In Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const animateOnScrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const elementsToAnimate = document.querySelectorAll('.problem-card, .solution-text, .solution-visual, .roi-card, .section-title, .accordion-item');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-up'); // Ensure class is present
        animateOnScrollObserver.observe(el);
    });

    // 3. Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const accordionBody = accordionItem.querySelector('.accordion-body');
            const icon = header.querySelector('.icon');

            // Close other items
            document.querySelectorAll('.accordion-item').forEach(item => {
                if (item !== accordionItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.accordion-body').style.height = '0px';
                    item.querySelector('.icon').textContent = '+';
                }
            });

            // Toggle current item
            const isActive = accordionItem.classList.contains('active');

            if (!isActive) {
                accordionItem.classList.add('active');
                accordionBody.style.height = accordionBody.scrollHeight + "px";
                icon.innerHTML = '&minus;'; // Minus sign
            } else {
                accordionItem.classList.remove('active');
                accordionBody.style.height = "0px";
                icon.textContent = '+';
            }
        });
    });
    // 4. Multilingual Support Logic
    const translations = {
        es: {
            hero_bubble: "Para clínicas y hospitales",
            hero_title: "Deja de perder dinero por pruebas canceladas",
            hero_subtitle: "Las instrucciones médicas complejas y las barreras de idioma no son solo un problema de atención; son un agujero negro para la rentabilidad de tu clínica.",
            hero_cta_solution: "Descubre ComoMePreparo",
            hero_cta_roi: "Ver retorno de inversión",
            problem_title: "El agujero negro de dinero y tiempo",
            problem_desc: "¿Has calculado el coste real de la falta de claridad en las instrucciones de preparación?",
            problem_1_title: "Tiempo perdido en recepción",
            problem_1_desc: "¿Cuánto tiempo invierte diariamente su personal explicando por teléfono cómo es la dieta para una colonoscopia a un paciente británico o alemán?",
            problem_2_title: "Pérdidas de 100€ a 300€ por hueco de pruebas",
            problem_2_desc: "Un paciente local que se saltó la dieta porque el PDF era técnico y confuso, o un extranjero que no entendió el idioma = box parado.",
            solution_bubble: "La solución literal",
            solution_title: "Presentamos \"ComoMePreparo\"",
            solution_lead: "Una plataforma diseñada específicamente para clínicas que automatiza por completo la información de preparación médica en 16 idiomas en tiempo real.",
            sol_feat_1_title: "Adiós a las llamadas de 15 minutos",
            sol_feat_1_desc: "El paciente recibe un QR o SMS. Selecciona su prueba y lee las instrucciones exactas de SU clínica, en su idioma materno.",
            sol_feat_2_title: "Cronograma paso a paso",
            sol_feat_2_desc: "Saben qué hacer 24h antes, 12h antes y el día de la prueba, asegurando la máxima adherencia al protocolo.",
            sol_feat_3_title: "Guía inteligente integrada",
            sol_feat_3_desc: "Responde al instante dudas como '¿Puedo beber agua ahora?', basándose 100% en los protocolos de su centro.",
            chat_badge: "✨ +16 idiomas 🇪🇸 🇬🇧 🇫🇷 🇩🇪 🇮🇹 🇵🇹 🇺🇦 🇷🇺 🇸🇦 🇨🇳 🇯🇵 🇮🇳 🇮🇷 🇫🇮 🇹🇷 🇵🇱",
            pricing_bubble: "Retorno inmediato de inversión (ROI)",
            pricing_title: "Planes para cada fase de su clínica",
            pricing_desc: "Con evitar la cancelación de tan solo una prueba al mes, la herramienta ya se paga sola.",
            p1_desc: "Ideal para clínicas pequeñas o consultas individuales.",
            tax_suffix: " + IVA",
            period_mo: " / mes",
            or: "o",
            year: "año",
            p1_f1: "<strong>Enlace directo:</strong> Los pacientes van directos a sus instrucciones mediante QR/SMS/mail sin pasar por buscador general.*",
            p1_f2: "<strong>Estética genérica:</strong> Perfil con los colores y logotipo estándar de ComoMePreparo.",
            p1_f3: "<strong>Catálogo base:</strong> Instrucciones estándar de las 91 pruebas médicas pre-cargadas.",
            p1_f4: "<strong>Traducción inmediata:</strong> +16 Idiomas en tiempo real sin recargas.",
            p1_f5: "<strong>PDF en 1 clic:</strong> Generación de PDF traducido con imagen estándar de la plataforma.",
            p1_limit: "No incluye IA, cronogramas paso a paso ni personalización de instrucciones.",
            p1_f6: "<strong>Filtro de pruebas activas:</strong> Oculte pruebas del catálogo global que no realiza su centro.",
            p1_footnote: "*En función de cuál sea el mecanismo por el que la clínica contacta con sus pacientes",
            contact_cta: "Contactar",
            recommended: "Más recomendado",
            p2_desc: "La solución completa para clínicas y centros medianos.",
            p2_f1: "Todo lo del plan Essential.",
            p2_f2: "<strong>Mini-web clínica (adaptada):</strong> Perfil exclusivo con su URL, logotipo y colores corporativos.",
            p2_f4: "<strong>Creación de pruebas a demanda:</strong> Solicite la inclusión exclusiva de procedimientos específicos de su clínica.",
            p2_f5: "<strong>Instrucciones personalizables (overrides):</strong> Sobrescriba protocolos manteniendo traducción automática.",
            p2_f6: "<strong>Cronogramas visuales:</strong> Línea del tiempo interactiva que guía al paciente paso a paso.",
            p2_f7: "<strong>PDF premium:</strong> Documentos con el logotipo oficial de su clínica.",
            p2_f8: "<strong>Guía virtual inteligente (IA):</strong> Resolución de dudas 24/7 con filtros preventivos de seguridad.",
            p2_f9: "<strong>Servicio white-glove:</strong> Configuración y mantenimiento total por nuestro equipo.",
            medical_groups: "/ Grupos médicos",
            p3_desc: "Para hospitales con centros asociados o grandes grupos clínicos.",
            consult_price: "Consultar",
            custom_price: "Precio personalizado",
            p3_f1: "Todo lo del plan Pro.",
            p3_f2: "<strong>Licencia global de grupo:</strong> Uso ilimitado para el hospital principal y todas sus sedes o centros de salud periféricos.",
            p3_f3: "<strong>Estandarización de protocolos:</strong> Control central para asegurar que todas las sedes utilicen las mismas instrucciones y estándares de calidad aprobados por el grupo.",
            p3_f4: "<strong>Dominio y branding corporativo:</strong> Integración total bajo su propia identidad digital (ej. preparacion.su-hospital.es) para reforzar la confianza del paciente.",
            p3_f5: "<strong>Onboarding institucional:</strong> Acompañamiento en el despliegue de la solución en múltiples servicios médicos y personal de recepción simultáneamente.",
            p3_f6: "<strong>Facturación y atención centralizada:</strong> Un solo interlocutor y consolidación administrativa para todo el grupo médico.",
            roi_title: "📊 ¿Cuántas citas necesita recuperar para que se pague solo?",
            roi_col_test: "Prueba médica",
            roi_col_impact: "⚠️ Impacto por cancelación (coste desperdiciado + ingreso perdido)",
            roi_col_essential: "🥉 Essential (69 €/mes) se rentabiliza recuperando…",
            roi_col_pro: "🥈 Pro (149 €/mes) se rentabiliza recuperando…",
            roi_r1_test: "Ecografía",
            roi_r1_ess: "2 citas / mes",
            roi_r1_pro: "4 citas / mes",
            roi_r2_test: "TC (Scanner)",
            roi_r2_ess: "1 cita / mes",
            roi_r2_pro: "2 citas / mes",
            roi_r3_test: "Resonancia (RM)",
            roi_r3_ess: "1 cita / mes",
            roi_r3_pro: "1 cita / mes",
            roi_r4_test: "Endoscopias (Gastro/Colono)",
            roi_r4_ess: "1 cita / mes",
            roi_r4_pro: "1 cita / mes",
            faq_title: "¿Dudas? Resolvemos sus preocupaciones",
            faq_1_q: "Ya les damos un papel a los pacientes, ¿por qué querrían usar una web?",
            faq_1_a: "Porque el papel no les permite añadir recordatorios al calendario para el ayuno, no es interactivo, se pierde y no resuelve dudas en 15 idiomas a las 11 de la noche cuando la clínica cierra. Con nuestra web, cuentan con un cronograma dinámico y el protocolo exacto de su centro.",
            faq_2_q: "¿Puede la IA contradecir lo que el médico le ha dicho al paciente?",
            faq_2_a: "No. La IA tiene instrucciones estrictas de dar prioridad siempre a lo que diga el médico y de remitir al paciente ante cualquier duda con fármacos o síntomas. El sistema está bloqueado (<em>guardrails</em>) para actuar exclusivamente como un asistente de soporte informativo.",
            faq_3_q: "No tenemos tiempo informático para configurar esto.",
            faq_3_a: "Ofrecemos la modalidad de <strong>servicio gestionado (white-glove)</strong>. Nos envían el manual que usan hoy y nuestro equipo lo deja listo en 24 horas. Ustedes solo ponen el código QR en el mostrador.",
            faq_4_q: "¿Dónde se guardan los nombres y citas de los pacientes?",
            faq_4_a: "En ningún sitio. Todo se procesa en el dispositivo del paciente. Cumplimos estrictamente con el RGPD al no solicitar ni almacenar datos identificativos de los pacientes en servidores externos.",
            faq_5_q: "¿Cumple la IA con la normativa europea de protección de datos?",
            faq_5_a: "Sí. Utilizamos modelos de inteligencia artificial en modo Enterprise con infraestructura dentro de la Unión Europea. Los datos no se utilizan para entrenar modelos públicos.",
            faq_6_q: "¿Tengo que registrar a cada paciente en una plataforma?",
            faq_6_a: "No. Solo tiene que poner un código QR en su consulta o enviar un enlace. El paciente accede al instante sin registros, contraseñas ni recolección de datos personales.",
            faq_7_q: "¿Qué pasa si mis instrucciones son diferentes a las estándar?",
            faq_7_a: "La plataforma permite a los profesionales y clínicas sobreescribir cualquier instrucción para que coincida exactamente con su protocolo interno personalizado.",
            faq_8_q: "¿Y si el paciente tiene problemas con la tecnología o no tiene internet?",
            faq_8_a: "La aplicación permite generar un PDF imprimible con el cronograma calculado automáticamente, para que el paciente pueda llevárselo en papel si así lo prefiere.",
            faq_9_q: "¿Es esto un producto sanitario certificado?",
            faq_9_a: "Es una herramienta de soporte informativo y recordatorio. No realiza diagnósticos ni toma decisiones clínicas, por lo que actúa legalmente como un asistente de comunicación médica.",
            cta_title: "Elimine la fricción en la preparación de sus pacientes",
            cta_desc: "Elimine las barreras generadas por instrucciones complejas o el idioma. Téngalo listo mañana con nuestro servicio white-glove.",
            success_title: "¡Solicitud enviada con éxito!",
            success_desc: "Hemos recibido tus datos y nos pondremos en contacto con tu clínica en las próximas 24 horas.",
            benefits_bubble: "Propuesta de valor",
            benefits_title: "¿Por qué ComoMePreparo?",
            benefits_desc: "Resultados tangibles para la dirección de su centro desde el primer mes.",
            ben_1_title: "Eficiencia operativa y reducción de costes",
            ben_1_a: "<strong>Reducción de cancelaciones y repeticiones:</strong> Asegure que el paciente llega preparado a la primera, evitando huecos vacíos en agendas críticas (RM, TAC) y el sobrecoste de repetir pruebas.",
            ben_1_b: "<strong>Liberación de carga administrativa:</strong> El asistente de IA responde dudas frecuentes, reduciendo drásticamente las llamadas a recepción y enfermería.",
            ben_1_c: "<strong>Digitalización del proceso:</strong> Sustituye las hojas de instrucciones en papel por un portal dinámico, accesible y siempre actualizado.",
            ben_1_d: "<strong>Listas de espera y coste de oportunidad:</strong> Optimice el flujo de pacientes para disminuir tiempos de espera y elimine los costes invisibles de una agenda infrautilizada.",
            ben_2_title: "Experiencia y fidelización del paciente",
            ben_2_a: "<strong>Tranquilidad y autonomía:</strong> El paciente se siente guiado mediante pasos sencillos y claros, reduciendo la ansiedad pre-prueba.",
            ben_2_b: "<strong>Accesibilidad multilingüe:</strong> Atienda a pacientes internacionales o de habla no hispana en su propio idioma, mejorando la inclusión y la calidad del servicio.",
            ben_2_c: "<strong>Interfaz moderna:</strong> Proyecta una imagen de innovación y modernidad de su centro ante el paciente.",
            ben_3_title: "Calidad clínica y seguridad",
            ben_3_a: "<strong>Mejor calidad de imagen y resultados:</strong> Una preparación óptima garantiza que los resultados de las pruebas sean de máxima calidad, evitando repeticiones innecesarias.",
            ben_3_b: "<strong>Instrucciones personalizadas:</strong> Los profesionales pueden ajustar los protocolos específicamente para sus equipos o normativas internas del centro.",
            ben_4_title: "Personalización y marca (white label)",
            ben_4_a: "<strong>Portal con marca propia:</strong> Integre su logo y colores corporativos, manteniendo la coherencia visual con su ecosistema digital.",
            ben_4_b: "<strong>Control de catálogo:</strong> Muestre solo las pruebas disponibles en su centro y oculte el resto.",
            copyright: "© 2026 DeepReport B2B Solutions. Todos los derechos reservados."
        },
        en: {
            hero_bubble: "For Clinics and Hospitals",
            hero_title: "Stop losing money due to cancelled tests",
            hero_subtitle: "Complex medical instructions and language barriers aren't just a care issue; they are a black hole for your clinic's profitability.",
            hero_cta_solution: "Discover ComoMePreparo",
            hero_cta_roi: "View ROI",
            problem_title: "The Money and Time Black Hole",
            problem_desc: "Have you calculated the real cost of a lack of clarity in preparation instructions?",
            problem_1_title: "Time lost at reception",
            problem_1_desc: "How much time does your staff spend daily explaining diet instructions for a colonoscopy over the phone to a British or German patient?",
            problem_2_title: "Losses of €100 to €300 per procedure slot",
            problem_2_desc: "A local patient who missed their diet because the PDF was technical and confusing, or an international patient who didn't understand the language = idle procedure room.",
            solution_bubble: "The literal solution",
            solution_title: "Introducing \"ComoMePreparo\"",
            solution_lead: "A platform specifically designed for clinics that completely automates medical preparation information in 16 languages in real-time.",
            sol_feat_1_title: "Goodbye to 15-minute phone calls",
            sol_feat_1_desc: "The patient receives a QR or SMS. They select their test and read the exact instructions from YOUR clinic on their mobile phone, in their native language.",
            sol_feat_2_title: "Step-by-step timeline",
            sol_feat_2_desc: "They know exactly what to do 24h before, 12h before, and on the day of the test, ensuring maximum compliance with the protocol.",
            sol_feat_3_title: "Integrated smart guide",
            sol_feat_3_desc: "Instantly answers questions like 'Can I drink water now?', based 100% on your center's protocols.",
            chat_badge: "✨ +16 languages 🇪🇸 🇬🇧 🇫🇷 🇩🇪 🇮🇹 🇵🇹 🇺🇦 🇷🇺 🇸🇦 🇨🇳 🇯🇵 🇮🇳 🇮🇷 🇫🇮 🇹🇷 🇵🇱",
            pricing_bubble: "Immediate Return on Investment (ROI)",
            pricing_title: "Plans for every stage of your clinic",
            pricing_desc: "By preventing just one test cancellation per month, the tool pays for itself.",
            p1_desc: "Ideal for small clinics or individual practices.",
            tax_suffix: " + VAT",
            period_mo: " / month",
            or: "or",
            year: "year",
            p1_f1: "<strong>Direct link:</strong> Patients go directly to their instructions via QR/SMS/mail without a general search.*",
            p1_f2: "<strong>Generic aesthetic:</strong> Profile with ComoMePreparo standard colors and logo.",
            p1_f3: "<strong>Base catalog:</strong> Standard instructions for 91 pre-loaded medical tests.",
            p1_f4: "<strong>Instant translation:</strong> +16 Languages in real-time without page reloads.",
            p1_f5: "<strong>1-click PDF:</strong> Generation of translated PDF with platform standard branding.",
            p1_limit: "Does not include AI assistant, step-by-step timelines, or custom instructions.",
            p1_f6: "<strong>Active test filter:</strong> Hide tests from the global catalog that your center doesn't perform.",
            p1_footnote: "*Depending on the mechanism the clinic uses to contact patients",
            contact_cta: "Contact us",
            recommended: "Most recommended",
            p2_desc: "The complete solution for clinics and medical centers.",
            p2_f1: "Everything in the Essential plan.",
            p2_f2: "<strong>Clinic mini-web (adapted):</strong> Exclusive profile with your URL, logo, and corporate colors.",
            p2_f4: "<strong>On-demand test creation:</strong> Request inclusion of procedures exclusive to your clinic.",
            p2_f5: "<strong>Customizable instructions (overrides):</strong> Overwrite protocols while maintaining auto-translation.",
            p2_f6: "<strong>Visual timelines:</strong> Interactive timeline guiding the patient step by step.",
            p2_f7: "<strong>Premium PDF:</strong> Documents with your clinic's official logo.",
            p2_f8: "<strong>Smart virtual guide (AI):</strong> 24/7 question resolution with preventive safety filters.",
            p2_f9: "<strong>White-glove service:</strong> Full configuration and maintenance by our team.",
            medical_groups: "/ Medical groups",
            p3_desc: "For hospitals with associated centers or large clinical groups.",
            consult_price: "Contact us",
            custom_price: "Custom pricing",
            p3_f1: "Everything in the Pro plan.",
            p3_f2: "<strong>Global group license:</strong> Unlimited use for the main hospital and all its satellites or peripheral health centers.",
            p3_f3: "<strong>Standardization of protocols:</strong> Central control to ensure all locations use the same instructions and quality standards approved by the group.",
            p3_f4: "<strong>Corporate domain and branding:</strong> Total integration under your own digital identity (e.g. preparation.your-hospital.com) to reinforce patient trust.",
            p3_f5: "<strong>Institutional onboarding:</strong> Implementation support across multiple medical services and reception staff simultaneously.",
            p3_f6: "<strong>Centralized billing and support:</strong> A single point of contact and administrative consolidation for the entire medical group.",
            roi_title: "📊 How many appointments do you need to recover for it to pay for itself?",
            roi_col_test: "Medical test",
            roi_col_impact: "⚠️ Impact per cancellation (wasted cost + lost revenue)",
            roi_col_essential: "🥉 Essential (€69/mo) pays for itself by recovering…",
            roi_col_pro: "🥈 Pro (€149/mo) pays for itself by recovering…",
            roi_r1_test: "Ultrasound",
            roi_r1_ess: "2 appointments / month",
            roi_r1_pro: "4 appointments / month",
            roi_r2_test: "CT (Scanner)",
            roi_r2_ess: "1 appointment / month",
            roi_r2_pro: "2 appointments / month",
            roi_r3_test: "MRI",
            roi_r3_ess: "1 appointment / month",
            roi_r3_pro: "1 appointment / month",
            roi_r4_test: "Endoscopies (Gastro/Colono)",
            roi_r4_ess: "1 appointment / month",
            roi_r4_pro: "1 appointment / month",
            faq_title: "Questions? We solve your concerns",
            faq_1_q: "We already give patients a paper sheet, why would they want to use a web app?",
            faq_1_a: "Because paper doesn't allow them to add calendar reminders for fasting, isn't interactive, gets lost, and doesn't solve doubts in 15 languages at 11 PM when the clinic is closed. With our app, they have a dynamic schedule and your center's exact protocol.",
            faq_2_q: "Can the AI contradict what the doctor has told the patient?",
            faq_2_a: "No. The AI has strict instructions to always prioritize the doctor's word and refer the patient back for any questions regarding medication or symptoms. The system uses <em>guardrails</em> to act purely as an information support assistant.",
            faq_3_q: "We don't have IT time to set this up.",
            faq_3_a: "We offer a <strong>managed white-glove service</strong>. You send us the manual you use today, and our team gets it ready within 24 hours. You just place the QR code on the counter.",
            faq_4_q: "Where are patient names and appointments stored?",
            faq_4_a: "Nowhere. Everything is processed on the patient's device. We comply strictly with GDPR by not requesting or storing any identifying patient data on external servers.",
            faq_5_q: "Does the AI comply with European data protection regulations?",
            faq_5_a: "Yes. We use Enterprise-grade artificial intelligence models with infrastructure within the European Union. Data is protected and not used to train public models.",
            faq_6_q: "Do I have to register each patient in a platform?",
            faq_6_a: "No. You just place a QR code in your office or send a link. The patient accesses it instantly without registration, passwords, or personal data collection.",
            faq_7_q: "What if my instructions are different from the standards?",
            faq_7_a: "The platform allows professionals and clinics to override any instruction to match their exact internal customized protocol.",
            faq_8_q: "What if the patient has technical issues or no internet?",
            faq_8_a: "The app allows generating a printable PDF with the automatically calculated schedule, so the patient can take it on paper if preferred.",
            faq_9_q: "Is this a certified medical product?",
            faq_9_a: "It is an information support and reminder tool. It does not perform diagnoses or clinical decisions, acting legally as a medical communication assistant.",
            cta_title: "Eliminate friction in patient preparation",
            cta_desc: "Eliminate barriers caused by complex instructions or language. Have it ready tomorrow with our white-glove service.",
            success_title: "Request sent successfully!",
            success_desc: "We have received your details and will contact your clinic within the next 24 hours.",
            benefits_bubble: "Value proposition",
            benefits_title: "Why ComoMePreparo?",
            benefits_desc: "Tangible results for your center's management from the first month.",
            ben_1_title: "Operational efficiency and cost reduction",
            ben_1_a: "<strong>Reduced cancellations and repetitions:</strong> Ensure patients arrive prepared the first time, avoiding empty slots in critical schedules (MRI, CT) and the extra cost of repeating tests.",
            ben_1_b: "<strong>Administrative load relief:</strong> The AI assistant handles frequent questions, drastically reducing phone calls to reception and nursing.",
            ben_1_c: "<strong>Process digitalization:</strong> Replaces paper sheets with a dynamic, accessible, and always up-to-date portal.",
            ben_1_d: "<strong>Waiting lists and opportunity cost:</strong> Optimize patient flow to shorten waiting times and eliminate the invisible costs of an underutilized schedule.",
            ben_2_title: "Patient experience and loyalty",
            ben_2_a: "<strong>Peace of mind and autonomy:</strong> Patients feel guided through simple, clear steps, reducing pre-test anxiety.",
            ben_2_b: "<strong>Multilingual accessibility:</strong> Serve international or non-native speaking patients in their own language, improving inclusion and service quality.",
            ben_2_c: "<strong>Modern Interface:</strong> Projects an image of innovation and modernity of your clinic to the patient.",
            ben_3_title: "Clinical quality and safety",
            ben_3_a: "<strong>Better image quality and results:</strong> Optimal preparation ensures test results are of maximum quality, avoiding unnecessary repetitions.",
            ben_3_b: "<strong>Custom instructions:</strong> Professionals can adjust protocols specifically for their equipment or internal clinic regulations.",
            ben_4_title: "Personalization and branding (white label)",
            ben_4_a: "<strong>Branded portal:</strong> Integrate your logo and corporate colors, maintaining visual coherence with your digital ecosystem.",
            ben_4_b: "<strong>Catalog control:</strong> Ability to show only the tests available at your center and hide the rest.",
            copyright: "© 2026 DeepReport B2B Solutions. All rights reserved."
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update active button state
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Update form placeholders
        if (lang === 'en') {
            document.querySelector('input[name="clinic_name"]').placeholder = "Clinic name";
            document.querySelector('input[name="email"]').placeholder = "Contact email";
            document.querySelector('#submit-btn').textContent = "Send and request information";
        } else {
            document.querySelector('input[name="clinic_name"]').placeholder = "Nombre de la clínica";
            document.querySelector('input[name="email"]').placeholder = "Correo de contacto";
            document.querySelector('#submit-btn').textContent = "Enviar y solicitar información";
        }

        localStorage.setItem('preferredLanguage', lang);
    }

    // Event listeners for language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Initialize with preferred or default language
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    setLanguage(savedLang);

    // Contact Form AJAX Handling
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('contact-success');

    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('#submit-btn');
            const originalBtnText = submitBtn.textContent;
            const currentLang = localStorage.getItem('preferredLanguage') || 'es';

            submitBtn.disabled = true;
            submitBtn.textContent = currentLang === 'es' ? 'Enviando...' : 'Sending...';

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    contactForm.style.display = 'none';
                    successMessage.style.display = 'block';
                    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    const data = await response.json();
                    if (data && data.errors) {
                        alert(data.errors.map(error => error.message).join(", "));
                    } else {
                        const errorMsg = currentLang === 'es'
                            ? 'Ups! Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.'
                            : 'Oops! There was a problem submitting the form. Please try again.';
                        alert(errorMsg);
                    }
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalBtnText;
                }
            } catch (error) {
                const errorMsg = currentLang === 'es'
                    ? 'Hubo un error de conexión. Por favor, revisa tu conexión a internet.'
                    : 'A connection error occurred. Please check your internet connection.';
                alert(errorMsg);
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });
    }
});
