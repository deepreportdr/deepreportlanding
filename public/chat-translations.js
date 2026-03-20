(function () {
    const chatTranslations = {
        es: {
            header: "Guía de Preparación IA",
            msg1: "¡Hola! Soy tu guía virtual para la preparación. ¿En qué puedo ayudarte con tus dudas sobre tu próxima prueba?",
            msg2: "Me han pedido una resonancia",
            msg3: "¡Hola! Cuando hablamos de una resonancia, nos referimos a una prueba de imagen muy detallada, pero hay diferentes tipos según la parte del cuerpo que se vaya a estudiar...",
            msg4: "¡Una resonancia cardíaca!",
            msg5: '¡Perfecto! Una <strong>Resonancia Magnética Cardíaca (RMC)</strong> es una prueba muy avanzada que nos permite ver con gran detalle la estructura y el funcionamiento de tu corazón, sin usar radiación.<br><br>Para prepararte, lo más importante es que, por lo general, necesitarás un <strong>ayuno de 4 a 6 horas antes de la prueba</strong>. Además, es crucial que no lleves ningún objeto metálico, como joyas, piercings o ropa con cremalleras, ya que la máquina funciona con un imán muy potente.<br><br>¿Tienes alguna duda sobre cómo prepararte? Puedo explicarte si tienes que ayunar, orientarte con la medicación, qué debes llevar... O puedes ir directamente aquí para ver todas las instrucciones: <a href="#" style="color:#2B8496; font-weight:600; text-decoration: underline;">Resonancia Magnética Cardíaca (RMC)</a>'
        },
        en: {
            header: "AI Preparation Guide",
            msg1: "Hi there! I'm your virtual preparation guide. How can I help you with your upcoming test?",
            msg2: "I've been asked to have an MRI",
            msg3: "Hi! When we talk about an MRI, we're referring to a very detailed imaging test, but there are different types depending on the part of the body being examined...",
            msg4: "A cardiac MRI!",
            msg5: 'Great! A <strong>Cardiac MRI (CMR)</strong> is a highly advanced test that lets us see the structure and function of your heart in great detail, without using radiation.<br><br>To prepare, the most important thing is that you\'ll usually need to <strong>fast for 4 to 6 hours before the test</strong>. Also, it\'s crucial that you don\'t bring any metal objects, such as jewellery, piercings, or clothes with zips, as the machine uses a very powerful magnet.<br><br>Do you have any questions about how to prepare? I can explain fasting requirements, guide you on medication, what to bring... Or you can go directly here for the full instructions: <a href="#" style="color:#2B8496; font-weight:600; text-decoration: underline;">Cardiac MRI (CMR)</a>'
        },
        fr: {
            header: "Guide de Préparation IA",
            msg1: "Bonjour ! Je suis votre guide virtuel de préparation. Comment puis-je vous aider concernant votre prochain examen ?",
            msg2: "On m'a prescrit une IRM",
            msg3: "Bonjour ! Quand on parle d'IRM, il s'agit d'un examen d'imagerie très détaillé, mais il en existe différents types selon la partie du corps à examiner...",
            msg4: "Une IRM cardiaque !",
            msg5: 'Parfait ! Une <strong>IRM Cardiaque</strong> est un examen très avancé qui permet de visualiser en détail la structure et le fonctionnement de votre cœur, sans utiliser de radiation.<br><br>Pour vous préparer, le plus important est que vous devrez généralement être <strong>à jeun pendant 4 à 6 heures avant l\'examen</strong>. De plus, il est essentiel de ne porter aucun objet métallique — bijoux, piercings ou vêtements avec des fermetures éclair — car la machine utilise un aimant très puissant.<br><br>Avez-vous des questions sur la préparation ? Je peux vous expliquer le jeûne, vous orienter sur les médicaments, ce qu\'il faut apporter... Ou consultez directement les instructions complètes ici : <a href="#" style="color:#2B8496; font-weight:600; text-decoration: underline;">IRM Cardiaque</a>'
        },
        de: {
            header: "KI-Vorbereitungsassistent",
            msg1: "Hallo! Ich bin Ihr virtueller Vorbereitungsassistent. Wie kann ich Ihnen bei Ihrer bevorstehenden Untersuchung helfen?",
            msg2: "Mir wurde eine MRT verordnet",
            msg3: "Hallo! Bei einer MRT handelt es sich um eine sehr detaillierte Bildgebungsuntersuchung, aber es gibt verschiedene Arten — je nachdem, welcher Körperbereich untersucht werden soll...",
            msg4: "Eine Herz-MRT!",
            msg5: 'Sehr gut! Eine <strong>Kardiale MRT (Herz-MRT)</strong> ist eine hochmoderne Untersuchung, mit der wir die Struktur und Funktion Ihres Herzens sehr genau sehen können — ganz ohne Strahlung.<br><br>Zur Vorbereitung ist am wichtigsten, dass Sie in der Regel <strong>4 bis 6 Stunden vor der Untersuchung nüchtern</strong> sein müssen. Außerdem ist es wichtig, dass Sie keine metallischen Gegenstände tragen — keinen Schmuck, keine Piercings und keine Kleidung mit Reißverschlüssen — da das Gerät mit einem sehr starken Magneten arbeitet.<br><br>Haben Sie Fragen zur Vorbereitung? Ich kann Ihnen beim Thema Nüchternheit helfen, Sie zu Medikamenten beraten oder erklären, was Sie mitbringen sollten... Oder schauen Sie direkt hier für die vollständigen Anweisungen: <a href="#" style="color:#2B8496; font-weight:600; text-decoration: underline;">Kardiale MRT (Herz-MRT)</a>'
        },
        it: {
            header: "Guida alla Preparazione IA",
            msg1: "Ciao! Sono la tua guida virtuale per la preparazione. Come posso aiutarti con il tuo prossimo esame?",
            msg2: "Mi hanno prescritto una risonanza",
            msg3: "Ciao! Quando parliamo di risonanza magnetica, ci riferiamo a un esame di imaging molto dettagliato, ma ne esistono diversi tipi a seconda della parte del corpo da esaminare...",
            msg4: "Una risonanza cardiaca!",
            msg5: 'Perfetto! Una <strong>Risonanza Magnetica Cardiaca (RMC)</strong> è un esame molto avanzato che ci permette di vedere nel dettaglio la struttura e il funzionamento del tuo cuore, senza utilizzare radiazioni.<br><br>Per prepararti, la cosa più importante è che in genere dovrai restare <strong>a digiuno per 4-6 ore prima dell\'esame</strong>. Inoltre, è fondamentale non indossare oggetti metallici — gioielli, piercing o vestiti con cerniere — perché la macchina utilizza un magnete molto potente.<br><br>Hai qualche domanda sulla preparazione? Posso spiegarti il digiuno, orientarti sui farmaci, cosa portare... Oppure puoi consultare direttamente qui tutte le istruzioni: <a href="#" style="color:#2B8496; font-weight:600; text-decoration: underline;">Risonanza Magnetica Cardiaca (RMC)</a>'
        },
        pt: {
            header: "Guia de Preparação IA",
            msg1: "Olá! Sou o seu guia virtual de preparação. Como posso ajudá-lo com o seu próximo exame?",
            msg2: "Pediram-me uma ressonância",
            msg3: "Olá! Quando falamos de ressonância, referimo-nos a um exame de imagem muito detalhado, mas existem diferentes tipos dependendo da parte do corpo a examinar...",
            msg4: "Uma ressonância cardíaca!",
            msg5: 'Perfeito! Uma <strong>Ressonância Magnética Cardíaca (RMC)</strong> é um exame muito avançado que nos permite ver com grande detalhe a estrutura e o funcionamento do seu coração, sem usar radiação.<br><br>Para se preparar, o mais importante é que, geralmente, precisará de um <strong>jejum de 4 a 6 horas antes do exame</strong>. Além disso, é crucial que não leve objetos metálicos — joias, piercings ou roupa com fechos — pois a máquina funciona com um íman muito potente.<br><br>Tem alguma dúvida sobre como se preparar? Posso explicar-lhe o jejum, orientá-lo com a medicação, o que deve levar... Ou pode consultar diretamente aqui todas as instruções: <a href="#" style="color:#2B8496; font-weight:600; text-decoration: underline;">Ressonância Magnética Cardíaca (RMC)</a>'
        },
        uk: {
            header: "ШІ-помічник підготовки",
            msg1: "Вітаю! Я ваш віртуальний помічник з підготовки. Чим можу допомогти щодо вашого майбутнього обстеження?",
            msg2: "Мені призначили МРТ",
            msg3: "Вітаю! Коли ми говоримо про МРТ, мається на увазі дуже детальне обстеження, але існують різні види залежно від частини тіла, яку потрібно обстежити...",
            msg4: "МРТ серця!",
            msg5: 'Чудово! <strong>МРТ серця (кардіо-МРТ)</strong> — це дуже сучасне обстеження, яке дозволяє детально побачити структуру та роботу вашого серця без використання радіації.<br><br>Для підготовки найважливіше — зазвичай потрібно <strong>не їсти протягом 4–6 годин перед обстеженням</strong>. Також дуже важливо не мати при собі металевих предметів — прикрас, пірсингу чи одягу із блискавками — оскільки апарат працює з дуже потужним магнітом.<br><br>Маєте запитання щодо підготовки? Можу пояснити щодо голодування, прийому ліків, що брати з собою... Або перегляньте повні інструкції тут: <a href="#" style="color:#2B8496; font-weight:600; text-decoration: underline;">МРТ серця (кардіо-МРТ)</a>'
        },
        ru: {
            header: "ИИ-помощник подготовки",
            msg1: "Здравствуйте! Я ваш виртуальный помощник по подготовке. Чем могу помочь с вашим предстоящим обследованием?",
            msg2: "Мне назначили МРТ",
            msg3: "Здравствуйте! Когда мы говорим об МРТ, речь идёт об очень детальном обследовании, но существуют разные виды в зависимости от исследуемой части тела...",
            msg4: "МРТ сердца!",
            msg5: 'Отлично! <strong>МРТ сердца (кардио-МРТ)</strong> — это очень современное обследование, которое позволяет детально увидеть структуру и работу вашего сердца без использования радиации.<br><br>Для подготовки самое важное — обычно необходимо <strong>не есть в течение 4–6 часов перед обследованием</strong>. Также очень важно не иметь при себе металлических предметов — украшений, пирсинга или одежды с молниями — так как аппарат работает с очень мощным магнитом.<br><br>Есть вопросы по подготовке? Могу объяснить про голодание, приём лекарств, что взять с собой... Или посмотрите полные инструкции здесь: <a href="#" style="color:#2B8496; font-weight:600; text-decoration: underline;">МРТ сердца (кардио-МРТ)</a>'
        },
        ar: {
            header: "مساعد التحضير الذكي",
            msg1: "مرحباً! أنا مساعدك الافتراضي للتحضير. كيف يمكنني مساعدتك بخصوص فحصك القادم؟",
            msg2: "طُلب مني إجراء رنين مغناطيسي",
            msg3: "مرحباً! عندما نتحدث عن الرنين المغناطيسي، نقصد فحص تصوير دقيق جداً، لكن هناك أنواع مختلفة حسب الجزء المراد فحصه من الجسم...",
            msg4: "رنين مغناطيسي للقلب!",
            msg5: 'ممتاز! <strong>الرنين المغناطيسي للقلب</strong> هو فحص متقدم جداً يتيح لنا رؤية بنية قلبك ووظيفته بتفصيل كبير، دون استخدام الإشعاع.<br><br>للتحضير، الأهم هو أنك ستحتاج عادةً إلى <strong>صيام لمدة ٤ إلى ٦ ساعات قبل الفحص</strong>. كما أنه من الضروري جداً ألا تحمل أي أجسام معدنية — كالمجوهرات أو الحلي أو الملابس ذات السحّابات — لأن الجهاز يعمل بمغناطيس قوي جداً.<br><br>هل لديك أي أسئلة عن التحضير؟ يمكنني شرح الصيام، أو توجيهك بشأن الأدوية، أو ما يجب إحضاره... أو يمكنك الاطلاع على التعليمات الكاملة هنا: <a href="#" style="color:#2B8496; font-weight:600; text-decoration: underline;">الرنين المغناطيسي للقلب</a>'
        },
        zh: {
            header: "AI 检查准备助手",
            msg1: "您好！我是您的虚拟检查准备助手。关于您即将进行的检查，有什么可以帮您的吗？",
            msg2: "医生让我做一个核磁共振",
            msg3: "您好！核磁共振是一种非常精细的影像检查，但根据检查的身体部位不同，分为多种类型...",
            msg4: "心脏核磁共振！",
            msg5: '好的！<strong>心脏核磁共振（CMR）</strong>是一项非常先进的检查，可以让我们清晰地看到您心脏的结构和功能，而且不使用辐射。<br><br>准备方面，最重要的是您通常需要在检查前<strong>禁食4到6个小时</strong>。此外，请务必不要携带任何金属物品——包括首饰、穿孔饰品或带拉链的衣物——因为设备使用的是非常强大的磁铁。<br><br>关于准备还有什么疑问吗？我可以为您说明禁食要求、用药指导、需要携带的物品等。您也可以直接点击这里查看完整说明：<a href="#" style="color:#2B8496; font-weight:600; text-decoration: underline;">心脏核磁共振（CMR）</a>'
        },
        ja: {
            header: "AI 検査準備ガイド",
            msg1: "こんにちは！検査準備のバーチャルガイドです。次の検査についてご不明な点はありますか？",
            msg2: "MRI検査を受けることになりました",
            msg3: "こんにちは！MRIとは非常に精密な画像検査のことですが、検査する体の部位によっていくつかの種類があります...",
            msg4: "心臓のMRIです！",
            msg5: 'かしこまりました！<strong>心臓MRI（CMR）</strong>は、放射線を使わずに心臓の構造と機能を詳しく見ることができる、非常に高度な検査です。<br><br>準備で最も大切なのは、通常<strong>検査の4～6時間前から絶食</strong>していただくことです。また、アクセサリーやピアス、ファスナー付きの衣服など、金属製のものは身につけないでください。装置は非常に強力な磁石を使用しています。<br><br>準備についてご質問はありますか？絶食のこと、お薬のこと、持ち物についてご説明できます。こちらから全ての説明もご覧いただけます：<a href="#" style="color:#2B8496; font-weight:600; text-decoration: underline;">心臓MRI（CMR）</a>'
        },
        hi: {
            header: "AI तैयारी सहायक",
            msg1: "नमस्ते! मैं आपका वर्चुअल तैयारी सहायक हूँ। आपकी आगामी जाँच के बारे में मैं कैसे मदद कर सकता हूँ?",
            msg2: "मुझे MRI करवाने को कहा गया है",
            msg3: "नमस्ते! MRI एक बहुत विस्तृत इमेजिंग जाँच होती है, लेकिन शरीर के किस हिस्से की जाँच करनी है, उसके अनुसार इसके कई प्रकार होते हैं...",
            msg4: "हृदय की MRI!",
            msg5: 'बहुत अच्छा! <strong>कार्डियक MRI (CMR)</strong> एक बहुत ही उन्नत जाँच है जिससे हम आपके हृदय की संरचना और कार्यप्रणाली को बारीकी से देख सकते हैं, बिना किसी विकिरण के।<br><br>तैयारी के लिए सबसे ज़रूरी बात यह है कि आपको आमतौर पर <strong>जाँच से 4 से 6 घंटे पहले खाली पेट</strong> रहना होगा। साथ ही, कोई भी धातु की वस्तु न पहनें — जैसे गहने, पियर्सिंग या ज़िप वाले कपड़े — क्योंकि मशीन बहुत शक्तिशाली चुंबक का उपयोग करती है।<br><br>तैयारी के बारे में कोई सवाल है? मैं उपवास, दवाइयों या क्या लेकर आना है, इसके बारे में बता सकता हूँ... या पूरी जानकारी यहाँ देखें: <a href="#" style="color:#2B8496; font-weight:600; text-decoration: underline;">कार्डियक MRI (CMR)</a>'
        },
        fa: {
            header: "دستیار هوشمند آماده‌سازی",
            msg1: "سلام! من دستیار مجازی آماده‌سازی شما هستم. چطور می‌توانم در مورد آزمایش بعدی‌تان کمکتان کنم؟",
            msg2: "از من خواسته‌اند که MRI انجام دهم",
            msg3: "سلام! وقتی از MRI صحبت می‌کنیم، منظورمان یک آزمایش تصویربرداری بسیار دقیق است، اما بسته به قسمتی از بدن که باید بررسی شود، انواع مختلفی دارد...",
            msg4: "MRI قلب!",
            msg5: 'عالی! <strong>MRI قلب (CMR)</strong> یک آزمایش بسیار پیشرفته است که به ما امکان می‌دهد ساختار و عملکرد قلب شما را با جزئیات زیاد ببینیم، بدون استفاده از اشعه.<br><br>برای آماده‌سازی، مهم‌ترین نکته این است که معمولاً باید <strong>۴ تا ۶ ساعت قبل از آزمایش ناشتا</strong> باشید. همچنین بسیار مهم است که هیچ شیء فلزی همراه نداشته باشید — مانند جواهرات، پیرسینگ یا لباس‌های دارای زیپ — زیرا دستگاه با آهنربای بسیار قوی کار می‌کند.<br><br>سؤالی درباره آماده‌سازی دارید؟ می‌توانم درباره ناشتا بودن، داروها یا چیزهایی که باید بیاورید توضیح دهم... یا دستورالعمل‌های کامل را اینجا ببینید: <a href="#" style="color:#2B8496; font-weight:600; text-decoration: underline;">MRI قلب (CMR)</a>'
        },
        fi: {
            header: "Tekoäly-valmistautumisopas",
            msg1: "Hei! Olen virtuaalinen valmistautumisoppaasi. Miten voin auttaa sinua tulevan tutkimuksesi kanssa?",
            msg2: "Minulle on määrätty magneettikuvaus",
            msg3: "Hei! Magneettikuvaus on erittäin yksityiskohtainen kuvantamistutkimus, mutta siitä on eri tyyppejä riippuen tutkittavasta kehon osasta...",
            msg4: "Sydämen magneettikuvaus!",
            msg5: 'Hienoa! <strong>Sydämen magneettikuvaus (sydän-MRI)</strong> on erittäin kehittynyt tutkimus, jolla voimme nähdä sydämesi rakenteen ja toiminnan yksityiskohtaisesti ilman säteilyä.<br><br>Valmistautumisessa tärkeintä on, että sinun tulee yleensä olla <strong>syömättä 4–6 tuntia ennen tutkimusta</strong>. Lisäksi on erittäin tärkeää, ettet ota mukaan metalliesineitä — koruja, lävistyksiä tai vetoketjullisia vaatteita — sillä laite käyttää erittäin voimakasta magneettia.<br><br>Onko sinulla kysyttävää valmistautumisesta? Voin selittää paastosta, lääkityksestä tai mitä ottaa mukaan... Tai katso kaikki ohjeet suoraan täältä: <a href="#" style="color:#2B8496; font-weight:600; text-decoration: underline;">Sydämen magneettikuvaus (sydän-MRI)</a>'
        },
        tr: {
            header: "Yapay Zeka Hazırlık Rehberi",
            msg1: "Merhaba! Ben sanal hazırlık rehberinizim. Yaklaşan tetkikiniz hakkında size nasıl yardımcı olabilirim?",
            msg2: "MR çektirmem istendi",
            msg3: "Merhaba! MR dediğimizde, çok ayrıntılı bir görüntüleme tetkikinden bahsediyoruz, ancak incelenecek vücut bölgesine göre farklı türleri vardır...",
            msg4: "Kalp MR'ı!",
            msg5: 'Harika! <strong>Kardiyak MR (Kalp MR)</strong>, radyasyon kullanmadan kalbinizin yapısını ve işleyişini büyük ayrıntıyla görmemizi sağlayan çok gelişmiş bir tetkiktir.<br><br>Hazırlık için en önemli nokta, genellikle <strong>tetkikten 4-6 saat önce aç olmanız</strong> gerektiğidir. Ayrıca üzerinizde hiçbir metal nesne bulunmaması çok önemlidir — takı, piercing veya fermuarlı giysiler — çünkü cihaz çok güçlü bir mıknatıs kullanır.<br><br>Hazırlık hakkında sorularınız var mı? Açlık, ilaçlar veya yanınıza almanız gerekenler konusunda yardımcı olabilirim... Ya da tüm talimatları doğrudan buradan inceleyebilirsiniz: <a href="#" style="color:#2B8496; font-weight:600; text-decoration: underline;">Kardiyak MR (Kalp MR)</a>'
        },
        pl: {
            header: "Asystent przygotowania AI",
            msg1: "Cześć! Jestem Twoim wirtualnym asystentem przygotowania. Jak mogę Ci pomóc w sprawie nadchodzącego badania?",
            msg2: "Mam mieć rezonans magnetyczny",
            msg3: "Cześć! Rezonans magnetyczny to bardzo szczegółowe badanie obrazowe, ale istnieją różne jego rodzaje w zależności od badanej części ciała...",
            msg4: "Rezonans serca!",
            msg5: 'Świetnie! <strong>Rezonans magnetyczny serca (CMR)</strong> to bardzo zaawansowane badanie, które pozwala nam dokładnie zobaczyć strukturę i pracę Twojego serca, bez użycia promieniowania.<br><br>Jeśli chodzi o przygotowanie, najważniejsze jest to, że zazwyczaj trzeba być <strong>na czczo przez 4–6 godzin przed badaniem</strong>. Ponadto bardzo ważne jest, aby nie mieć przy sobie żadnych metalowych przedmiotów — biżuterii, kolczyków ani ubrań z zamkami błyskawicznymi — ponieważ urządzenie wykorzystuje bardzo silny magnes.<br><br>Masz pytania dotyczące przygotowania? Mogę wyjaśnić kwestie postu, leków lub tego, co zabrać ze sobą... Lub zobacz pełne instrukcje tutaj: <a href="#" style="color:#2B8496; font-weight:600; text-decoration: underline;">Rezonans magnetyczny serca (CMR)</a>'
        }
    };

    var animationPlayed = false;
    var animationRunning = false;
    var currentTimeouts = [];

    // Delays in ms: [ai typing, ai show, user typing, user show, ai typing, ai show, user typing, user show, ai typing, ai show]
    // Pattern: show typing -> reveal msg -> pause -> next
    var timings = {
        typingDelay: 1200,   // how long typing indicator shows
        userDelay: 800,      // pause before user message appears
        pauseBetween: 500    // pause between messages
    };

    function clearAnimationTimeouts() {
        currentTimeouts.forEach(function (t) { clearTimeout(t); });
        currentTimeouts = [];
    }

    function showTyping(chatBody) {
        var indicator = document.getElementById('typingIndicator');
        indicator.classList.remove('chat-hidden');
        indicator.classList.add('chat-reveal');
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function hideTyping() {
        var indicator = document.getElementById('typingIndicator');
        indicator.classList.remove('chat-reveal');
        indicator.classList.add('chat-hidden');
    }

    function revealMessage(msg, chatBody) {
        msg.classList.remove('chat-hidden');
        msg.classList.add('chat-reveal');
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    function runChatAnimation() {
        if (animationRunning) return;
        animationRunning = true;

        var chatBody = document.getElementById('chatList');
        var messages = chatBody.querySelectorAll('.chat-msg');
        var delay = 0;

        messages.forEach(function (msg, i) {
            var isAI = msg.classList.contains('ai');
            var isLast = i === messages.length - 1;
            var typingTime = isLast ? 2000 : timings.typingDelay;

            if (isAI) {
                // Show typing indicator, then reveal AI message
                currentTimeouts.push(setTimeout(function () {
                    showTyping(chatBody);
                }, delay));
                delay += typingTime;

                currentTimeouts.push(setTimeout(function () {
                    hideTyping();
                    revealMessage(msg, chatBody);
                }, delay));
                delay += timings.pauseBetween;
            } else {
                // User messages appear after a short pause (no typing indicator)
                delay += timings.userDelay;
                currentTimeouts.push(setTimeout(function () {
                    revealMessage(msg, chatBody);
                }, delay));
                delay += timings.pauseBetween;
            }
        });

        currentTimeouts.push(setTimeout(function () {
            animationRunning = false;
        }, delay));
    }

    function resetAndReplayAnimation() {
        clearAnimationTimeouts();
        animationRunning = false;
        hideTyping();

        var messages = document.querySelectorAll('#chatList .chat-msg');
        messages.forEach(function (msg) {
            msg.classList.remove('chat-reveal');
            msg.classList.add('chat-hidden');
        });

        // Small delay so the reset is visible before replaying
        setTimeout(function () {
            runChatAnimation();
        }, 300);
    }

    function setChatLanguage(lang) {
        var t = chatTranslations[lang];
        if (!t) return;

        // Update header
        var header = document.querySelector('.chat-header');
        if (header) {
            header.innerHTML = DOMPurify.sanitize('<span class="chat-status"></span> ' + t.header);
        }

        // Update messages
        var bubbles = document.querySelectorAll('#chatList .chat-msg .msg-bubble');
        if (bubbles[0]) bubbles[0].innerHTML = DOMPurify.sanitize(t.msg2);
        if (bubbles[1]) bubbles[1].innerHTML = DOMPurify.sanitize(t.msg3);
        if (bubbles[2]) bubbles[2].innerHTML = DOMPurify.sanitize(t.msg4);
        if (bubbles[3]) bubbles[3].innerHTML = DOMPurify.sanitize(t.msg5);

        // Update active button
        document.querySelectorAll('.chat-lang-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-chat-lang') === lang);
        });

        // RTL for Arabic and Farsi
        var chatBody = document.getElementById('chatList');
        if (['ar', 'fa'].includes(lang)) {
            chatBody.setAttribute('dir', 'rtl');
        } else {
            chatBody.removeAttribute('dir');
        }

        // Replay the animation with new language
        resetAndReplayAnimation();
    }

    function init() {
        // Language buttons
        document.querySelectorAll('.chat-lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                setChatLanguage(btn.getAttribute('data-chat-lang'));
            });
        });

        // Trigger animation when chat scrolls into view
        var chatMockup = document.querySelector('.chat-mockup');
        if (chatMockup && 'IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting && !animationPlayed) {
                        animationPlayed = true;
                        runChatAnimation();
                    }
                });
            }, { threshold: 0.05, rootMargin: '0px 0px 100px 0px' });
            observer.observe(chatMockup);
        } else {
            // Fallback: show all messages immediately
            document.querySelectorAll('#chatList .chat-msg').forEach(function (msg) {
                msg.classList.remove('chat-hidden');
                msg.classList.add('chat-reveal');
            });
        }

        // Extra fallback: if after 5s nothing triggered, show messages
        setTimeout(function () {
            if (!animationPlayed) {
                animationPlayed = true;
                runChatAnimation();
            }
        }, 5000);
    }

    // Run init immediately if DOM already ready, otherwise wait
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Re-trigger animation on back/forward navigation (bfcache)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            animationPlayed = false;
            animationRunning = false;
            clearAnimationTimeouts();
            hideTyping();
            document.querySelectorAll('#chatList .chat-msg').forEach(function (msg) {
                msg.classList.remove('chat-reveal');
                msg.classList.add('chat-hidden');
            });
            init();
        }
    });
})();
