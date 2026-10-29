// ============================================================================
// БАЗА ЗНАНИЙ "МОЙ AI-РЕПЕТИТОР" (АНГЛИЙСКИЙ И ИСПАНСКИЙ ЯЗЫКИ: A1 - C1)
// Как добавлять новые уроки: просто скопируйте блок внутри нужного языка и поменяйте текст!
// ============================================================================

window.KNOWLEDGE_BASE = {
  // --------------------------------------------------------------------------
  // 1. ГРАММАТИКА И БАНК УПРАЖНЕНИЙ (С РАЗБОРОМ ОШИБОК)
  // --------------------------------------------------------------------------
  grammar: {
    en: [
      {
        id: "en_a1_present_simple",
        level: "A1",
        topic: "Present Simple (Настоящее простое время)",
        rule: "Используется для регулярных действий, привычек и фактов. С местоимениями He / She / It к глаголу добавляется окончание -s или -es.",
        examples: [
          "She goes to the gym every morning. — Она ходит в зал каждое утро.",
          "I work from home. — Я работаю из дома.",
          "He doesn't like coffee. — Он не любит кофе."
        ],
        exercises: [
          {
            id: "ex_en_1",
            type: "choice",
            question: "She ___ to the gym every morning.",
            options: ["go", "goes", "going", "gone"],
            correct: "goes",
            explanation: "С местоимением 'She' (она) в Present Simple к глаголу всегда добавляется окончание -es (go -> goes). 'Go' используется с I/you/we/they, а 'going' требует глагола to be (is going)."
          },
          {
            id: "ex_en_2",
            type: "choice",
            question: "___ you speak English?",
            options: ["Do", "Does", "Are", "Is"],
            correct: "Do",
            explanation: "Для вопроса с местоимением 'you' и обычным глаголом действия (speak) используется вспомогательный глагол Do. 'Does' нужен только для he/she/it."
          },
          {
            id: "ex_en_3",
            type: "choice",
            question: "He ___ coffee in the evening.",
            options: ["don't drink", "doesn't drink", "doesn't drinks", "not drink"],
            correct: "doesn't drink",
            explanation: "В отрицании для 'He' используется 'doesn't', и он забирает окончание -s на себя, поэтому основной глагол остается в начальной форме: doesn't drink."
          }
        ]
      },
      {
        id: "en_a1_to_be",
        level: "A1",
        topic: "Глагол To Be (am / is / are)",
        rule: "В русском языке мы говорим «Я счастливый», а в английском обязательно нужна связка «быть»: I am, He/She/It is, You/We/They are.",
        examples: [
          "I am ready. — Я готов.",
          "She is my best friend. — Она моя лучшая подруга.",
          "They are at home. — Они дома."
        ],
        exercises: [
          {
            id: "ex_en_4",
            type: "choice",
            question: "My friends ___ very kind.",
            options: ["is", "am", "are", "be"],
            correct: "are",
            explanation: "'My friends' (мои друзья) — это множественное число (они = they). С множественным числом всегда используется форма 'are'."
          }
        ]
      },
      {
        id: "en_a2_past_simple",
        level: "A2",
        topic: "Past Simple (Прошедшее простое время)",
        rule: "Используется для завершенных действий в прошлом (yesterday, last week, in 2020). К правильным глаголам добавляется -ed, а неправильные меняют форму (go -> went, see -> saw).",
        examples: [
          "I watched a great movie yesterday. — Вчера я посмотрел отличный фильм.",
          "We went to Spain last summer. — Прошлым летом мы ездили в Испанию.",
          "Did you call her? — Ты ей позвонил?"
        ],
        exercises: [
          {
            id: "ex_en_5",
            type: "choice",
            question: "Where ___ you go yesterday?",
            options: ["do", "did", "went", "were"],
            correct: "did",
            explanation: "Слово 'yesterday' указывает на Past Simple. Вопросы в прошедшем времени с глаголами действия строятся при помощи вспомогательного глаголa 'did'."
          },
          {
            id: "ex_en_6",
            type: "choice",
            question: "I ___ him two days ago.",
            options: ["see", "seed", "saw", "have seen"],
            correct: "saw",
            explanation: "'Two days ago' (два дня назад) требует Past Simple. Глагол 'see' неправильный, его вторая форма — 'saw'."
          }
        ]
      },
      {
        id: "en_b1_present_perfect",
        level: "B1",
        topic: "Present Perfect (Связь прошлого с настоящим)",
        rule: "Строится как have/has + 3-я форма глагола (V3). Используется, когда важен результат к текущему моменту или жизненный опыт (без точного указания времени в прошлом).",
        examples: [
          "I haven't seen this movie for a long time. — Я уже давно не видел этого фильма.",
          "She has already finished her project. — Она уже закончила свой проект.",
          "Have you ever been to New York? — Ты когда-нибудь был в Нью-Йорке?"
        ],
        exercises: [
          {
            id: "ex_en_7",
            type: "choice",
            question: "I ___ this movie for a long time.",
            options: ["didn't see", "haven't seen", "don't see", "wasn't seeing"],
            correct: "haven't seen",
            explanation: "Фраза 'for a long time' (уже долгое время вплоть до сегодняшнего момента) связывает прошлое и настоящее, поэтому используется Present Perfect: haven't seen."
          },
          {
            id: "ex_en_8",
            type: "choice",
            question: "She ___ her keys! She can't open the door now.",
            options: ["lost", "has lost", "loses", "is losing"],
            correct: "has lost",
            explanation: "Важен видимый результат в настоящем (сейчас она не может открыть дверь), поэтому выбираем Present Perfect — 'has lost'."
          }
        ]
      },
      {
        id: "en_b2_conditionals",
        level: "B2",
        topic: "Second Conditional (Нереальное условие в настоящем)",
        rule: "Формула: If + Past Simple, would + глагол. Используется для мечты, воображаемых ситуаций и советов («На твоем месте я бы...»).",
        examples: [
          "If I had more time, I would learn Spanish too. — Если бы у меня было больше времени, я бы выучил и испанский.",
          "If I were you, I would take this job. — На твоем месте я бы согласился на эту работу."
        ],
        exercises: [
          {
            id: "ex_en_9",
            type: "choice",
            question: "If I ___ you, I would talk to him.",
            options: ["am", "was", "were", "would be"],
            correct: "were",
            explanation: "В условных предложениях 2-го типа (Second Conditional) после 'If' для всех лиц в литературной и экзаменационной норме используется форма 'were' (конструкция 'If I were you')."
          }
        ]
      },
      {
        id: "en_c1_inversion",
        level: "C1",
        topic: "Inversion (Эмфатическая инверсия)",
        rule: "На уровне C1 для красивого усиления мысли после отрицательных наречий в начале предложения (Never, Rarely, Little, Not only) используется обратный порядок слов — как в вопросе.",
        examples: [
          "Never have I seen such a breathtaking view. — Никогда в жизни я не видел столь захватывающего вида.",
          "Little did she know about the surprise. — Она даже и не подозревала о сюрпризе."
        ],
        exercises: [
          {
            id: "ex_en_10",
            type: "choice",
            question: "Never ___ such a kind person.",
            options: ["I have met", "have I met", "I met", "did I met"],
            correct: "have I met",
            explanation: "Когда предложение начинается с отрицательного наречия 'Never', включается правило инверсии: вспомогательный глагол 'have' ставится перед подлежащим 'I'."
          }
        ]
      }
    ],
    es: [
      {
        id: "es_a1_ser_estar",
        level: "A1",
        topic: "Глаголы SER и ESTAR (Два глагола «быть»)",
        rule: "SER используется для постоянных характеристик (имя, профессия, национальность, характер). ESTAR — для временных состояний, настроения и местоположения.",
        examples: [
          "Yo soy de Madrid. — Я из Мадрида (постоянный факт -> SER).",
          "¡Hola! ¿Cómo estás? — Привет! Как ты? (самочувствие -> ESTAR).",
          "Estoy muy bien, gracias. — У меня всё отлично, спасибо."
        ],
        exercises: [
          {
            id: "ex_es_1",
            type: "choice",
            question: "¡Hola! ¿Cómo ___ (tú)? — Estoy bien, gracias.",
            options: ["eres", "estás", "es", "está"],
            correct: "estás",
            explanation: "Когда мы спрашиваем «Как дела / Как ты себя чувствуешь?», речь идет о состоянии в данный момент, поэтому используется глагол ESTAR в форме для tú — 'estás'."
          },
          {
            id: "ex_es_2",
            type: "choice",
            question: "Ella ___ profesora de español.",
            options: ["es", "está", "soy", "eres"],
            correct: "es",
            explanation: "Профессия — это постоянная характеристика человека, поэтому выбираем глагол SER в форме для ella (она) — 'es'."
          }
        ]
      },
      {
        id: "es_a1_presente",
        level: "A1",
        topic: "Presente de Indicativo (Настоящее время)",
        rule: "В испанском глаголы делятся на 3 спряжения по окончаниям: -AR (hablar), -ER (comer), -IR (vivir). Окончание показывает лицо, поэтому местоимения (yo, tú) часто опускают.",
        examples: [
          "Hablo español un poco. — Я немного говорю по-испански.",
          "¿Dónde vives? — Где ты живешь?",
          "Ellos trabajan juntos. — Они работают вместе."
        ],
        exercises: [
          {
            id: "ex_es_3",
            type: "choice",
            question: "Yo ___ en una empresa grande.",
            options: ["trabajo", "trabajas", "trabaja", "trabajamos"],
            correct: "trabajo",
            explanation: "Для первого лица 'Yo' (я) правильные глаголы в настоящем времени всегда получают окончание -o: trabajar -> trabajo."
          }
        ]
      },
      {
        id: "es_a2_indefinido",
        level: "A2",
        topic: "Pretérito Indefinido (Прошедшее завершенное время)",
        rule: "Используется для действий в прошлом с точной датой (ayer — вчера, el año pasado — в прошлом году).",
        examples: [
          "Ayer hablé con mi amigo. — Вчера я поговорил со своим другом.",
          "El verano pasado fuimos a Barcelona. — Прошлым летом мы ездили в Барселону."
        ],
        exercises: [
          {
            id: "ex_es_4",
            type: "choice",
            question: "Ayer yo ___ una película muy interesante.",
            options: ["veo", "vi", "he visto", "veía"],
            correct: "vi",
            explanation: "Слово 'Ayer' (вчера) указывает на завершенный отрезок прошлого (Pretérito Indefinido). Форма глагола ver для 'yo' — 'vi'."
          }
        ]
      },
      {
        id: "es_b1_subjuntivo",
        level: "B1",
        topic: "Presente de Subjuntivo (Сослагательное наклонение)",
        rule: "Используется после глаголов желания, эмоции, сомнения или совета (Quiero que..., Espero que..., Es importante que...).",
        examples: [
          "Quiero que tengas un buen día. — Я хочу, чтобы у тебя был хороший день.",
          "Espero que todo salga bien. — Надеюсь, всё получится отлично."
        ],
        exercises: [
          {
            id: "ex_es_5",
            type: "choice",
            question: "Espero que ___ (tú) un buen viaje.",
            options: ["tienes", "tengas", "tendrás", "tener"],
            correct: "tengas",
            explanation: "После 'Espero que...' (Надеюсь, что...) выражается пожелание/эмоция, что в испанском обязательно требует формы Subjuntivo: tener -> tengas."
          }
        ]
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 2. СЛОВАРЬ С ПРОИЗНОШЕНИЕМ, КОНТЕКСТОМ И ТИПИЧНЫМИ ОШИБКАМИ
  // --------------------------------------------------------------------------
  vocabulary: {
    en: [
      {
        id: "w_en_1",
        level: "A1",
        word: "today",
        transcription: "[təˈdeɪ]",
        partOfSpeech: "существительное / наречие",
        translation: "сегодня, сегодняшний день",
        example: "I have a lot of things to do today.",
        exampleRu: "У меня сегодня много дел.",
        collocations: "today morning (ошибка!) -> правильно: this morning (сегодня утром)"
      },
      {
        id: "w_en_2",
        level: "A2",
        word: "opportunity",
        transcription: "[ˌɒpəˈtjuːnəti]",
        partOfSpeech: "существительное",
        translation: "благоприятная возможность, шанс",
        example: "This job is a great opportunity for me.",
        exampleRu: "Эта работа — отличная возможность для меня.",
        collocations: "take an opportunity (воспользоваться шансом), miss an opportunity (упустить возможность)"
      },
      {
        id: "w_en_3",
        level: "B1",
        word: "confidence",
        transcription: "[ˈkɒnfɪdəns]",
        partOfSpeech: "существительное",
        translation: "уверенность в себе, доверие",
        example: "Speaking every day builds your confidence.",
        exampleRu: "Ежедневная разговорная практика развивает уверенность в себе.",
        collocations: "gain confidence (обрести уверенность), self-confidence (самоуверенность)"
      },
      {
        id: "w_en_4",
        level: "A2",
        word: "adventure",
        transcription: "[ədˈventʃər]",
        partOfSpeech: "существительное",
        translation: "приключение, авантюра",
        example: "Learning a new language is an exciting adventure.",
        exampleRu: "Изучение нового языка — это увлекательное приключение.",
        collocations: "sense of adventure (дух приключений)"
      },
      {
        id: "w_en_5",
        level: "A1",
        word: "amazing",
        transcription: "[əˈmeɪzɪŋ]",
        partOfSpeech: "прилагательное",
        translation: "удивительный, потрясающий",
        example: "You are doing an amazing job!",
        exampleRu: "Ты проделываешь потрясающую работу!",
        collocations: "amazing view (потрясающий вид)"
      },
      {
        id: "w_en_6",
        level: "B2",
        word: "look forward to",
        transcription: "[lʊk ˈfɔːrwərd tuː]",
        partOfSpeech: "фразовый глагол",
        translation: "с нетерпением ждать чего-либо",
        example: "I look forward to hearing from you.",
        exampleRu: "С нетерпением жду ответа от вас.",
        collocations: "Важно: после 'to' здесь идет глагол с -ing (hearing, meeting), а не обычная форма!"
      }
    ],
    es: [
      {
        id: "w_es_1",
        level: "A1",
        word: "hoy",
        transcription: "[ой]",
        partOfSpeech: "наречие",
        translation: "сегодня",
        example: "Hoy tengo muchas cosas que hacer.",
        exampleRu: "Сегодня у меня много дел.",
        collocations: "hoy en día (в наши дни). Буква 'H' в испанском никогда не произносится!"
      },
      {
        id: "w_es_2",
        level: "A2",
        word: "oportunidad",
        transcription: "[опортунида́д]",
        partOfSpeech: "существительное (жен. род)",
        translation: "возможность, шанс",
        example: "Es una gran oportunidad para aprender.",
        exampleRu: "Это отличная возможность научиться.",
        collocations: "aprovechar la oportunidad (воспользоваться возможностью)"
      },
      {
        id: "w_es_3",
        level: "B1",
        word: "confianza",
        transcription: "[конфья́нса]",
        partOfSpeech: "существительное (жен. род)",
        translation: "уверенность, доверие",
        example: "Hablar cada día te da más confianza.",
        exampleRu: "Разговор каждый день придает тебе больше уверенности.",
        collocations: "tener confianza en sí mismo (быть уверенным в себе)"
      },
      {
        id: "w_es_4",
        level: "A1",
        word: "aventura",
        transcription: "[авенту́ра]",
        partOfSpeech: "существительное (жен. род)",
        translation: "приключение",
        example: "Viajar por España es una aventura increíble.",
        exampleRu: "Путешествие по Испании — невероятное приключение.",
        collocations: "una aventura inolvidable (незабываемое приключение)"
      },
      {
        id: "w_es_5",
        level: "A2",
        word: "increíble",
        transcription: "[инкреи́бле]",
        partOfSpeech: "прилагательное",
        translation: "невероятный, потрясающий",
        example: "¡Haces un trabajo increíble!",
        exampleRu: "Ты делаешь потрясающую работу!",
        collocations: "Подходит и для мужского, и для женского рода без изменения окончания."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 3. РАЗГОВОРНЫЕ ДИАЛОГИ (ДЛЯ КАРТОЧЕК "РАЗГОВОРНЫЙ АНГЛИЙСКИЙ / ИСПАНСКИЙ")
  // --------------------------------------------------------------------------
  dialogs: {
    en: [
      {
        id: "dlg_en_1",
        level: "A1",
        lessonTitle: "Урок 4 · Повседневные диалоги",
        phrase: "Hi! How's your day going?",
        translation: "Привет! Как проходит твой день?",
        options: [
          "A. It's going well, thanks!",
          "B. I'm busy.",
          "C. It's not good.",
          "D. I don't know."
        ],
        correct: "A. It's going well, thanks!",
        explanation: "В американской разговорной культуре на вопрос «How's your day going?» естественнее и вежливее всего ответить позитивно и дружелюбно: «It's going well, thanks!» (Всё идет отлично, спасибо!)."
      },
      {
        id: "dlg_en_2",
        level: "A2",
        lessonTitle: "Урок 5 · В кофейне",
        phrase: "Can I get you anything else?",
        translation: "Могу я предложить вам что-нибудь ещё?",
        options: [
          "A. That'll be all, thank you!",
          "B. Give me coffee.",
          "C. No, I don't want.",
          "D. Yes, I am."
        ],
        correct: "A. That'll be all, thank you!",
        explanation: "Фраза «That'll be all, thank you!» (Это будет всё, спасибо!) — самая естественная и вежливая фраза носителей языка в кафе или магазине."
      }
    ],
    es: [
      {
        id: "dlg_es_1",
        level: "A1",
        lessonTitle: "Урок 2 · Приветствие",
        phrase: "¡Hola! ¿Cómo estás?",
        translation: "Привет! Как ты?",
        options: [
          "A. Estoy bien, gracias.",
          "B. No entiendo.",
          "C. Tengo hambre.",
          "D. Buenos días."
        ],
        correct: "A. Estoy bien, gracias.",
        explanation: "На вопрос «¿Cómo estás?» (Как ты?) правильный и вежливый ответ — «Estoy bien, gracias» (У меня всё хорошо, спасибо). Вариант 'Tengo hambre' переводится как 'Я голоден'."
      },
      {
        id: "dlg_es_2",
        level: "A2",
        lessonTitle: "Урок 3 · В ресторане",
        phrase: "¿Qué le gustaría tomar?",
        translation: "Что бы вы хотели заказать (выпить/съесть)?",
        options: [
          "A. Para mí, un café con leche, por favor.",
          "B. No hablo español.",
          "C. La cuenta, por favor.",
          "D. Estoy cansado."
        ],
        correct: "A. Para mí, un café con leche, por favor.",
        explanation: "В Испании и Латинской Америке при заказе очень естественно сказать «Para mí...» (Для меня...) вместо прямого «Я хочу»."
      }
    ]
  },

  // --------------------------------------------------------------------------
  // 4. ФРАЗЫ ИЗ ФИЛЬМОВ И СЕРИАЛОВ
  // --------------------------------------------------------------------------
  movies: {
    en: [
      {
        id: "mov_en_1",
        title: "The Last of Us",
        genre: "Сериал · Драма · Приключения",
        phrases: [
          {
            original: "I'm not sure about that.",
            translation: "Я не уверен(а) в этом.",
            note: "Мягкий и естественный способ выразить сомнение в разговоре."
          },
          {
            original: "It's not what it looks like.",
            translation: "Это не то, чем кажется.",
            note: "Классическая фраза из кино, когда героя застали в неловкой ситуации."
          },
          {
            original: "We'll be fine.",
            translation: "Мы справимся / С нами всё будет хорошо.",
            note: "Краткое ободрение в трудный момент."
          }
        ]
      },
      {
        id: "mov_en_2",
        title: "Friends (Друзья)",
        genre: "Сериал · Комедия · Повседневная речь",
        phrases: [
          {
            original: "Are you kidding me?",
            translation: "Ты шутишь?! / Да ладно!",
            note: "Выражает сильное удивление, восторг или возмущение."
          },
          {
            original: "I'll be there for you.",
            translation: "Я всегда буду рядом с тобой (поддержу тебя).",
            note: "Идиома о надежной дружбе и поддержке."
          }
        ]
      }
    ],
    es: [
      {
        id: "mov_es_1",
        title: "La Casa de Papel (Бумажный дом)",
        genre: "Сериал · Триллер · Драма",
        phrases: [
          {
            original: "Todo va a salir bien.",
            translation: "Всё пройдет отлично / Всё получится.",
            note: "Очень частая живая фраза для поддержки близких."
          },
          {
            original: "No te preocupes por eso.",
            translation: "Не переживай об этом.",
            note: "Отрицательный императив (Subjuntivo) от глагола preocuparse."
          },
          {
            original: "¿Estás seguro de esto?",
            translation: "Ты в этом уверен?",
            note: "Для девушки окончание меняется на -a: ¿Estás segura?"
          }
        ]
      }
    ]
  }
};
