<?php
return [
    'layout' => [
        'partials' => [
            'header' => [
                'menu' => [
                    'home' => 'Басты бет',
                    'game' => 'Ойын',
                    'winners' => 'Жеңімпаздар',
                    'rules' => 'Ережелер',
                ],
                'menu_item' => 'Мәзір',
                'user' => 'Жеке кабинет',
                'close' => 'Жабу',
            ],
            'footer' => [
                'description' => '«ВБД-ЦА-Алматы» ЖШС. Барлық құқықтар сақталған.',
            ],
        ],
    ],

    'pages' => [
        'age' => [
            'question' => 'Сен 14 жасқа толдың ба?',
            'no_description' => 'Компания саясаты сайтты 14 жастан асқан пайдаланушыларға ғана ашуға мүмкіндік береді. Өкінішке орай, сайттың қалған беттері жабық күйде қалады.',
            'yes' => 'Иә',
            'no' => 'Жоқ',
        ],

        'home' => [
            'certificate_2000' => '10 досын алып келген алғашқы 40 адам электроника дүкеніне бір сертификаттан алады.',
            'certificate_10000' => 'Бәрінен да көп дос алып келген топ-100 арасында электроника дүкеніне үш сертификат ойнатамыз.',
            'certificate_20000' => 'Ең көп досын алып келген топ-5 ішіндегі әрқайсысы электроника дүкеніне осындай бір сертификаттан алады.',
            'invite' => 'Достарды шақыру',
            'prizes' => 'Жүлделер',
            'assured' => 'Кепілді жүлде',
            'more' => 'Толығырақ',
            'registration' => 'Тіркел, әлеуметтік желілерде бөліс те, достарыңды көмекке шақыр!',
            'make' => 'Ең дәмді дооонер жаса!',
            'long' => 'Донерлер рейтингісінде алда болып, жүлделер ал!',
            'top_title' => 'ЕҢ ҰЗЫН <strong>ДОООООНЕРЛЕР</strong>',
            'ninja' => 'ninja донері',
            'game_description' => 'Ойна да, үздіктер тобына ілін',
            'result' => 'Нәтижең неғұрлым көп болса, донерің де соғұрлым ұзын болмақ',
            'game' => 'Ойнау',
            'on_top' => 'Ең ұзындар қатарында бол!',
            'more_friends' => 'Көбірек дос – ұзынырақ дооооонер!',
            'taste_first' => 'Сондай қанық дәм.',
            'taste_second' => 'Нәзік тұздық пен дәмдеуіштер дәмімен.',
            'taste_third' => 'Жас көкөністердің дәмі сезіледі.',
            'taste_fourth' => 'Сенің сүйікті донеріңнің дәміндей.',
            'subscribe_title' => 'Әлеуметтік желілерде бізге жазыл да,',
            'subscribe_description' => 'қосымша сыйлықтар ұтыс ойындарына қатыс!',
            'doner_like' => 'Дөнер күндей',
            'what_will' => 'Мен не істеуім керек?',
        ],

        'history' => [
            'title' => 'БАЛЛДАР АЛУ ТАРИХЫ',
            'invite' => 'Досыңды алып келдің',
            'top' => 'Ойындағы Топ %s',
            'first_time' => 'Алдымен ойнады',
            'more' => 'Көбірек көрсету',
        ],

        'auth' => [
            'title' => 'Кіру',
            'reset_password' => 'Құпиясөзді ұмыттың ба?',
            'button' => 'Кіру',
            'error' => 'Қате логин немесе пароль',
            'fields' => [
                'phone' => 'Тіркелу',
                'password' => 'Құпиясөз',
            ],
        ],

        'registration' => [
            'title' => 'Тіркелу',
            'button' => 'Тіркелу',
            'fields' => [
                'first_name' => 'Атың',
                'last_name' => 'Тегің',
                'phone' => 'Телефон нөмірің',
                'phone_confirmation' => 'Телефон нөмірін қайта жаз',
                'city' => 'Қалаң',
                'email' => 'Email',
                'email_placeholder' => 'Өз e-mail-ді енгіз',
                'password' => 'Құпиясөз',
                'password_confirmation' => 'Құпиясөзді қайта жаз',
            ],
        ],

        'users' => [
            'title' => 'Жеке донер дәмханасы',
            'size' => 'Сенің донеріңнің көлемі',
            'history' => 'Баллдар алу тарихы',
            'invited' => 'Сен %s досыңды шақырдың',
            'invite' => 'Тағы шақыру',
            'share' => 'Нәтижеңмен бөліс',
            'one_friend' => 'дос',
            'five_friends' => 'достар',
            'top_title' => 'ЕҢ ҰЗЫН <strong>ДОООООНЕРЛЕР</strong>',
        ],

        'winners' => [
            'title' => 'Жеңімпаздар',
            'search' => 'Телефон нөмірі бойынша іздеу',
            'button' => 'Іздеу',
            'more' => 'Көбірек көрсету',
        ],

        'game' => [
            'first_description' => 'Ойын ойна, балл жина да, ойын рейтингіндегі топ 10 қатарына ілін',
            'second_description' => 'Үздіктер рейтингінде күннің соңына дейін бол да, донеріңе балл ал',
            'third_description' => 'Донер неғұрлым үлкен болса – жүлделер де соғұрлым көп болады. Талпын.',
            'results' => 'Бір күнгі үздік нәтижелер',
            'question' => 'Күтіп отыра бересің ба? Рекорд жаса да, донеріңе бал жина.',
            'empty' => 'Кесте әлі бос. Бүгін бірінші болып болыңыз!',
        ],
    ],

    'modals' => [
        'invite' => [
            'title' => 'Досыңызды шақыру',
            'first_description' => 'Сілтемені көшіріп ал да, досыңа жібер.',
            'second_description' => 'Донеріңе әр досың үшін +%s.',
            'link' => 'Сілтеме көшірілді',
        ],
    ],

    'shares' => [
        'title' => 'LAY’S ДОНЕР',
        'description' => 'Приглашай друзей, получай призы!',
    ],
];
