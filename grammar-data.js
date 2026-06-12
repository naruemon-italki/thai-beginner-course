/*
  © 2026 Naruemon Rintha. All rights reserved.
  Original educational work created by Naruemon Rintha (Kroo Apple).
  Unauthorized reproduction, modification, or redistribution is prohibited.

  ---------------------------------------------------------------------------
  GRAMMAR GUIDE DATA
  This file defines one global used by index.html:
    • GRAMMAR_SECTIONS — array of grammar-guide topics shown in the
                          Quick Grammar Guide menu (accordion).
  It MUST be loaded (plain <script src>) BEFORE the main game script in
  index.html, because renderGrammar() reads GRAMMAR_SECTIONS at render time.
  To add or edit grammar topics, edit this file only.

  Each entry: { group, level, id, title, body }
    • group  — category label shown above a run of same-group topics
                (rendered in array order; keep same-group entries adjacent).
    • level  — 1 or 2. In the slim edition (APP_EDITION = 'slim' in
                index.html), level-2 topics are hidden. Level-1 topics always
                show. Default to 1 unless a topic belongs to advanced content.
    • id     — stable unique id (used as the section's data-grammar-id).
    • title  — the header text on the accordion button.
    • body   — the HTML shown when the topic is expanded.
  ---------------------------------------------------------------------------
*/

const GRAMMAR_SECTIONS = [
    {
      group: 'Lessons',
      level: 1,
      id: 'lesson-1',
      title: 'Lesson 1',
      body: `
        <p>In this lesson, you learned two important Thai features that may feel unusual to English speakers: <strong>gender-based pronouns</strong> and <strong>gender-based polite particles</strong>.</p>
        <p>When speaking Thai, the words you use depend on <em>your own gender</em>, not the gender of the person you are talking to.</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ผม pŏm</span> → I / me <em>(commonly used by men)</em><br>
        <span class="th-particle">ฉัน chăn</span> → I / me <em>(commonly used by women)</em><br>
        <span class="th-particle">ครับ kráp</span> → polite particle <em>(used by men)</em><br>
        <span class="th-particle">ค่ะ kâ</span> → polite particle <em>(used by women)</em>
        </p>
        <p>For example:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมทอมครับ pŏm Tom kráp</span> → I am Tom. <em>(male speaker)</em><br>
        <span class="th-particle">ฉันแมรี่ค่ะ chăn Mary kâ</span> → I am Mary. <em>(female speaker)</em>
        </p>
        <p>The polite particles <span class="th-particle">ครับ kráp</span> and <span class="th-particle">ค่ะ kâ</span> appear constantly in everyday Thai. They make your speech sound polite and respectful, especially when speaking to strangers, customers, older people, or anyone you do not know well.</p>
        <p>For simplicity, this course teaches <span class="th-particle">ผม pŏm</span> as the male word for "I" and <span class="th-particle">ฉัน chăn</span> as the female word for "I." In reality, Thai has several ways to say "I," and the usage of <span class="th-particle">ฉัน chăn</span> is more nuanced. For a deeper explanation, see <strong>The Pronoun ฉัน chăn</strong> in the <strong>Language Patterns</strong> category.</p>`
    },
    {
      group: 'Lessons',
      level: 1,
      id: 'lesson-2',
      title: 'Lesson 2',
      body: `
        <p>In this lesson, you learned several important Thai sentence patterns and question structures. One of the biggest differences from English is that Thai often forms questions by adding a question word or question particle at the end of the sentence.</p>

        <p>For example:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">คุณชื่ออะไร kun chûu à-rai</span> → What's your name?<br>
        <span class="th-particle">คุณมาจากที่ไหน kun maa jàak têe năi</span> → Where are you from?
        </p>

        <p>Notice that the question words <span class="th-particle">อะไร à-rai</span> (what?) and <span class="th-particle">ไหน năi</span> (where?) come at the end of the sentence. This is very common in Thai.</p>

        <p>You also learned the question particle <span class="th-particle">ไหม măi</span>, which turns a statement into a yes-or-no question.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">สบายดี sà-baai dee</span> → I am fine.<br>
        <span class="th-particle">สบายดีไหม sà-baai dee măi</span> → Are you fine? / How are you?
        </p>

        <p>Another useful pattern introduced in this lesson is <span class="th-particle">แล้วคุณล่ะ láew kun lâ</span>, which means "What about you?" or "How about you?" It is a simple way to return a question and keep a conversation going.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมมาจากอังกฤษ pŏm maa jàak ang-grìt</span> → I am from England.<br>
        <span class="th-particle">แล้วคุณล่ะ láew kun lâ</span> → What about you?
        </p>

        <p>Finally, you learned that Thai often omits personal pronouns when the meaning is clear from the context. This makes everyday Thai sound shorter and more natural.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมมาจากอเมริกา pŏm maa jàak America</span> → I am from America.<br>
        <span class="th-particle">มาจากอเมริกา maa jàak America</span> → I am from America.
        </p>

        <p style="margin-left:0.8rem">
        Both sentences are correct. ✅
        </p>

        <p style="margin-left:0.8rem">
        Thai speakers often drop words that can be understood from the context, and you will notice this in real-life conversations.
        Don't worry if this feels unusual at first. As you continue learning Thai, you'll quickly get used to it.
        </p>`
    },
    {
      group: 'Particles',
      level: 1,
      id: 'particle-la',
      title: 'The Particle ล่ะ lâ',
      body: `
        <p><span class="th-particle">ล่ะ lâ</span> is a common sentence-ending particle used to shift the focus of a conversation. It often means something like "what about...?", "how about...?", or "as for..." depending on the context.</p>

        <p>You probably remember this sentence from Lesson 2:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">แล้วคุณล่ะ láew kun lâ</span> → What about you? / How about you?
        </p>

        <p>In this sentence, <span class="th-particle">ล่ะ lâ</span> shifts the conversation to the other person. After hearing about someone else's situation, thoughts, or preferences, it is often used to ask about yours.</p>

        <p>For example:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมชอบกาแฟ pŏm chôp kaa-fae</span> → I like coffee.<br>
        <span class="th-particle">แล้วคุณล่ะ láew kun lâ</span> → What about you?
        </p>

        <p><span class="th-particle">ล่ะ lâ</span> is also commonly used when changing the topic or moving the conversation to something else.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">แล้วงานล่ะ láew ngaan lâ</span> → What about work?<br>
        <span class="th-particle">แล้วพรุ่งนี้ล่ะ láew prûng-née lâ</span> → What about tomorrow?
        </p>

        <p>Another very common use is when ending a conversation or announcing what you are about to do.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ไปล่ะนะ bpai lâ ná</span> → I'm off now.<br>
        <span class="th-particle">นอนล่ะนะ non lâ ná</span> → I'm going to sleep now.
        </p>

        <p>A useful way to think about <span class="th-particle">ล่ะ lâ</span> is that it often signals a shift. The speaker is shifting the focus to another person, another topic, or the next thing that is about to happen.</p>`
    },
    {
      group: 'Particles',
      level: 1,
      id: 'particle-loei',
      title: 'The Particle เลย loie',
      body: `
        <p><span class="th-particle">เลย loie</span> is an intensifier that adds extra emphasis to what is being said. It often makes a statement sound stronger, more sincere, or more emotional. Depending on the context, it can be translated as "really," "so," "very," or sometimes left untranslated in natural English.</p>
        <p><span class="th-particle">เลย loie</span> is commonly placed at the end of a sentence or phrase. It is especially common after words such as <span class="th-particle">มาก mâak</span> (very) and <span class="th-particle">จัง jang</span> (so much), where it adds even more emphasis.</p>
        <p>Compare the following:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">คิดถึง kít tĕung</span> → Miss you.<br>
        <span class="th-particle">คิดถึงจัง kít tĕung jang</span> → Miss you so much.<br>
        <span class="th-particle">คิดถึงจังเลย kít tĕung jang loie</span> → Miss you sooo much. / I really, really miss you.
        </p>
        <p><span class="th-particle">เลย loie</span> can also be used with commands and suggestions, where it often means "go ahead," "right away," or "just do it."</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">กินเลย gin loie</span> → Go ahead and eat.<br>
        <span class="th-particle">ไปเลย bpai loie</span> → Go ahead. / Just go.<br>
        <span class="th-particle">เริ่มเลย rêrm loie</span> → Start right away.
        </p>
        <p>In this context, <span class="th-particle">เลย loie</span> is similar to <span class="th-particle">สิ sì</span>, but the two have different focuses. <span class="th-particle">เลย loie</span> signals immediacy — it implies the action is obvious or available, and the person should simply do it now. <span class="th-particle">สิ sì</span>, on the other hand, is more like saying "come on" in English — it nudges or coaxes someone who seems to be hesitating.</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">กินเลย gin loie</span> → Go ahead and eat. <em>(don't wait; eat now)</em><br>
        <span class="th-particle">กินสิ gin sì</span> → Just eat! <em>(come on, stop hesitating)</em>
        </p>
        <p>Unlike particles such as <span class="th-particle">ครับ kráp</span>, <span class="th-particle">ค่ะ kâ</span>, <span class="th-particle">นะ ná</span>, and <span class="th-particle">จ๊ะ já</span>, <span class="th-particle">เลย loie</span> does not express politeness or the speaker's attitude. Instead, its primary role is to strengthen or intensify the meaning of the sentence.</p>`
    },
    {
      group: 'Particles',
      level: 1,
      id: 'particle-ja',
      title: 'The Particle จ๊ะ jà',
      body: `
        <p><span class="th-particle">จ๊ะ já</span> is a warm and friendly sentence-ending particle that adds a gentle, caring, and affectionate tone to what is being said. <span class="th-particle">จ๊ะ já</span> is often combined with <span class="th-particle">นะ ná</span>, which softens the sentence and makes it sound even friendlier and more natural.</p>
        <p>Unlike <span class="th-particle">ครับ kráp</span> and <span class="th-particle">ค่ะ kâ</span>, <span class="th-particle">จ๊ะ já</span> is not tied to the speaker's gender, although it is used much more often by women than men. Because of its sweet and intimate tone, <span class="th-particle">จ๊ะ já</span> is usually used with family, friends, children, or anyone you want to speak to warmly. It is generally not used in formal situations or when speaking to strangers.</p>
        <p>Compare the following:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">โชคดีค่ะ chôhk dee kâ</span> → Good luck. <em>(formal, respectful)</em><br>
        <span class="th-particle">โชคดีนะคะ chôhk dee ná kâ</span> → Good luck. <em>(friendlier, softer)</em><br>
        <span class="th-particle">โชคดีนะจ๊ะ chôhk dee ná já</span> → Good luck, dear. <em>(warm, sweet, caring)</em>
        </p>
        <p>A related particle is <span class="th-particle">จ๋า jăa</span>, which sounds even more affectionate. If someone calls your name, you can reply with <span class="th-particle">จ๋า? jăa</span> meaning something like "Yes?" in a warm, loving way. It is also commonly used when calling loved ones:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">แม่ mâe</span> → Mother!<br>
        <span class="th-particle">แม่จ๋า mâe jăa</span> → Mommy!
        </p>`
    },
    {
      group: 'Particles',
      level: 1,
      id: 'particle-na',
      title: 'The Particle นะ ná',
      body: `
        <p><span class="th-particle">นะ ná</span> is one of the most common Thai sentence-ending particles. It softens what is being said and makes it sound friendlier, warmer, and less direct. Depending on the situation, it can add a sense of politeness, encouragement, persuasion, or emotional connection.</p>
        <p>Thai speakers often use <span class="th-particle">นะ ná</span> when talking to friends, family members, partners, coworkers, and even strangers. It helps make requests, suggestions, and statements sound more natural and pleasant. Without <span class="th-particle">นะ ná</span>, a sentence may sound more neutral, blunt, or matter-of-fact.</p>
        <p>Compare the following:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">รอแป๊บนึง ror bpáep neung</span> → Wait a moment. <em>(neutral)</em><br>
        <span class="th-particle">รอแป๊บนึงนะ ror bpáep neung ná</span> → Wait a moment, okay? <em>(softer, friendlier)</em>
        </p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">กินเยอะๆ gin yúh yúh</span> → Eat a lot. <em>(direct)</em><br>
        <span class="th-particle">กินเยอะๆนะ gin yúh yúh ná</span> → Eat plenty, okay? <em>(caring, encouraging)</em>
        </p>
        <p><span class="th-particle">นะ ná</span> is also commonly combined with polite particles such as <span class="th-particle">ครับ kráp</span> and <span class="th-particle">ค่ะ kâ</span>, making the sentence sound both polite and friendly:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ระวังนะ rá wang ná</span> → Be careful. <em>(friendly warning)</em><br>
        <span class="th-particle">ระวังนะครับ rá wang ná kráp</span> → Be careful. <em>(polite and friendly)</em>
        </p>
        <p>Because it is so versatile, <span class="th-particle">นะ ná</span> appears constantly in everyday Thai. If you are unsure whether to use it, adding <span class="th-particle">นะ ná</span> will often make your Thai sound more natural, approachable, and less abrupt.</p>`
    },
    {
      group: 'Particles',
      level: 1,
      id: 'particle-si',
      title: 'The Particle สิ sì',
      body: `
        <p><span class="th-particle">สิ sì</span> is a sentence-ending particle that adds emphasis and certainty to what is being said. It is often used when giving suggestions, encouragement, instructions, or when pointing out something that seems obvious. Depending on the context, it can sound persuasive, reassuring, or mildly insistent.</p>
        <p>Unlike <span class="th-particle">นะ ná</span>, which softens a sentence, <span class="th-particle">สิ sì</span> usually makes it stronger and more direct. It is very common in everyday conversations between friends, family members, and people who know each other well.</p>
        <p>Compare the following:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ลองดู long doo</span> → Try it. <em>(neutral)</em><br>
        <span class="th-particle">ลองดูสิ long doo sì</span> → Go ahead and try it. <em>(encouraging, persuasive)</em>
        </p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ถามเขา thăam khăo</span> → Ask him. <em>(neutral instruction)</em><br>
        <span class="th-particle">ถามเขาสิ thăam khăo sì</span> → Ask him! <em>(suggesting the obvious solution)</em>
        </p>
        <p><span class="th-particle">สิ sì</span> is also frequently used when reminding someone of something they already know or should know:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">จำได้ไหม jam dâai măi</span> → Do you remember?<br>
        <span class="th-particle">จำได้สิ jam dâai sì</span> → Of course I remember! <em>(certain, emphatic)</em>
        </p>
        <p>Because <span class="th-particle">สิ sì</span> adds emphasis, it can sometimes sound too direct if used with strangers or in formal situations. It is most natural in casual conversations where the speaker wants to encourage, persuade, reassure, or point out what seems like an obvious answer or course of action.</p>`
    },
    {
      group: 'Particles',
      level: 1,
      id: 'particle-di',
      title: 'The Particle ดิ di',
      body: `
        <p><span class="th-particle">ดิ di</span> is a casual version of <span class="th-particle">สิ sì</span>. It has the same meaning and is used in the same situations, but sounds more informal.</p>

        <p>If you have already read <span class="th-particle">The Particle สิ sì</span> topic, you can think of <span class="th-particle">ดิ di</span> as simply the everyday spoken version of <span class="th-particle">สิ sì</span> that many Thais use with friends, family, and people they know well.</p>

        <p>A good example:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ลองดูสิ long doo sì</span> → Go ahead and try it. <em>(encouraging)</em><br>
        <span class="th-particle">ลองดูดิ long doo di</span> → Come on, try it! <em>(same meaning, but more informal)</em>
        </p>

        <p>Because <span class="th-particle">ดิ di</span> is very casual, it is generally used only with friends, family members, and people you are comfortable with. In more polite situations, <span class="th-particle">สิ sì</span> is the safer choice.</p>`
    },
    {
      group: 'Language Patterns',
      level: 1,
      id: 'pronoun-chan',
      title: 'The Pronoun ฉัน chăn',
      body: `
        <p><span class="th-particle">ฉัน chăn</span> is a first-person pronoun meaning "I" or "me." It is mostly used by women in everyday conversation and is one of the first Thai pronouns that beginners learn.</p>
        <p>For simplicity, many beginner lessons, including our Lesson 1, teach <span class="th-particle">ผม pŏm</span> as the male word for "I" and <span class="th-particle">ฉัน chăn</span> as the female word for "I." While this is a useful starting point, the real picture is a bit more nuanced.</p>
        <p>In casual conversation, most men use <span class="th-particle">ผม pŏm</span>, while most women use <span class="th-particle">ฉัน chăn</span>:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมชื่อสมชายครับ pŏm chûu Sŏm-chaai kráp</span> → My name is Somchai. <em>(male speaker)</em><br>
        <span class="th-particle">ฉันชื่อพลอย chăn chûu Ploy kâ</span> → My name is Ploy. <em>(female speaker)</em>
        </p>
        <p>However, <span class="th-particle">ฉัน chăn</span> is not exclusively a female pronoun. Men occasionally use it as well, especially in songs, poetry, romantic language, and other expressive forms of speech. Because of this, you may hear a male singer repeatedly use <span class="th-particle">ฉัน chăn</span> when singing about love, emotions, or relationships.</p>
        <p>Compare the following:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมรักคุณ pŏm rák kun</span> → I love you. <em>(typical male speech)</em><br>
        <span class="th-particle">ฉันรักคุณ chăn rák kun</span> → I love you. <em>(common for women, but also often heard in songs sung by men)</em>
        </p>
        <p>Thai actually has many different ways to say "I," and the choice depends on factors such as gender, age, social status, formality, and the relationship between the speakers. As you continue learning Thai, you will encounter other pronouns such as <span class="th-particle">พี่ pêe</span>, <span class="th-particle">น้อง nóng</span>, <span class="th-particle">หนู nŏo</span>, and several others.</p>
        <p>For now, the easiest rule to remember is: use <span class="th-particle">ผม pŏm</span> if you are a man, and <span class="th-particle">ฉัน chăn</span> if you are a woman. You will sound natural in most everyday situations.</p>`
    },
    {
      group: 'Language Patterns',
      level: 1,
      id: 'pronoun-pom',
      title: 'The Pronoun ผม pŏm',
      body: `
        <p>Did you know that the male first-person pronoun <span class="th-particle">ผม pŏm</span> also means <b>hair</b>?</p>

        <p>Yes, the exact same word, spelling, and tone can mean either <b>"I"</b> (when used by a male speaker) or <b>"hair."</b> The meaning depends entirely on context.</p>

        <p>For example:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมชื่อเดวิด pŏm chûu David</span> → My name is David.<br>
        <span class="th-particle">ผมยาว pŏm yaao</span> → long hair
        </p>

        <p>Don't worry about mixing them up. In real conversations, the intended meaning is usually obvious.</p>

        <p>For example, when someone says:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมชอบอาหารไทย pŏm chôp aa-hăan thai</span>
        </p>

        <p>No Thai person will think, "Oh, this person's hair likes Thai food!" It's obvious that in this context <span class="th-particle">ผม pŏm</span> means <b>"I."</b></p>`
    },
    {
      group: 'Language Patterns',
      level: 1,
      id: 'adverb-jang',
      title: 'The Adverb จัง jang',
      body: `
        <p><span class="th-particle">จัง jang</span> is an intensifier that expresses a strong feeling or reaction. It is often similar to saying "so..." or "so much!" in English. It is commonly used when talking about emotions, opinions, or personal experiences.</p>

        <p><span class="th-particle">จัง jang</span> is usually placed at the end of a sentence or phrase. It makes what you say sound more expressive, emotional, and conversational.</p>

        <p>Compare the following:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">อร่อย aròi</span> → It's delicious.<br>
        <span class="th-particle">อร่อยจัง aròi jang</span> → It's so delicious!
        </p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">เหนื่อย nèuay</span> → I'm tired.<br>
        <span class="th-particle">เหนื่อยจัง nèuay jang</span> → I'm so tired!
        </p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">คิดถึง kít tĕung</span> → Miss you.<br>
        <span class="th-particle">คิดถึงจัง kít tĕung jang</span> → Miss you so much!
        </p>

        <p><span class="th-particle">จัง jang</span> is often compared with <span class="th-particle">มาก mâak</span>, since both can make something stronger. However, they are not exactly the same.</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">อร่อยมาก aròi mâak</span> → It's very delicious.<br>
        <span class="th-particle">อร่อยจัง aròi jang</span> → It's so delicious!
        </p>

        <p><span class="th-particle">มาก mâak</span> usually describes a high degree of something, while <span class="th-particle">จัง jang</span> expresses a stronger personal feeling or reaction. A useful way to remember the difference is:</p>

        <p style="margin-left:0.8rem">
        <span class="th-particle">มาก mâak</span> → very / very much<br>
        <span class="th-particle">จัง jang</span> → so / so much
        </p>

        <p><span class="th-particle">จัง jang</span> is very common in casual conversations with friends, family, and people you know well. It helps make your Thai sound more natural, expressive, and friendly.</p>`
    },
    {
      group: 'Language Patterns',
      level: 1,
      id: 'emotions',
      title: 'Emotions',
      body: `
        <p>Talking about emotions in Thai is straightforward. In most cases, emotion words work just like other verbs. You can place them after the subject.</p>
        <p>For example:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมมีความสุข pŏm mee kwaam sùk</span> → I am happy.<br>
        <span class="th-particle">คุณโกรธไหม kun gròht măi</span> → Are you angry?<br>
        <span class="th-particle">ฉันไม่กลัว chăn mâi glua</span> → I am not scared.
        </p>
        <p>Unlike English, Thai usually does not need a separate word equivalent to "am," "is," or "are." Simply say the subject followed by the emotion.</p>
        <p>Many emotion words can also be turned into adjectives by adding <span class="th-particle">น่า nâa</span> in front of them.</p>
        <p>Compare the following:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">กลัว glua</span> → to be scared [verb]<br>
        <span class="th-particle">น่ากลัว nâa glua</span> → scary [adjective]
        </p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">เบื่อ bèua</span> → to be bored [verb]<br>
        <span class="th-particle">น่าเบื่อ nâa bèua</span> → boring [adjective]
        </p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">สนใจ sŏn jai</span> → to be interested [verb]<br>
        <span class="th-particle">น่าสนใจ nâa sŏn jai</span> → interesting [adjective]
        </p>
        <p>This is similar to the difference between "I am bored" and "This movie is boring" in English:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ผมเบื่อ pŏm bèua</span> → I am bored.<br>
        <span class="th-particle">หนังเรื่องนี้น่าเบื่อ năng rêuang née nâa bèua</span> → This movie is boring.
        </p>`
    },
    {
      group: 'Language Patterns',
      level: 1,
      id: 'colors',
      title: 'Colors',
      body: `
        <p>Colors in Thai are usually very easy to use. In many situations, the color word behaves like an adjective and comes directly <strong>after</strong> the noun it describes.</p>
        <p>For example:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ไวน์แดง wai daeng</span> → red wine<br>
        <span class="th-particle">แอปเปิ้ลเขียว àep-pên kĭao</span> → green apple<br>
        <span class="th-particle">ชาดำ chaa dam</span> → black tea
        </p>
        <p>However, when talking about a color itself as a concept rather than describing an object, we usually add the word <span class="th-particle">สี sĕe</span>, meaning "color."</p>
        <p>Compare the following:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">แดง daeng</span> → red<br>
        <span class="th-particle">สีแดง sĕe daeng</span> → red color; the color red
        </p>
        <p>When referring to a color itself, the <span class="th-particle">สี sĕe</span> form is the one we use:</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ชอบสีแดง chôp sĕe daeng</span> → I like red color.<br>
        </p>
        <p>As a general rule, use the color word by itself when describing a noun, and add <span class="th-particle">สี sĕe</span> when talking about the color itself.</p>
        <p>However, there are also exceptions, situations where even though we are describing something, the <span class="th-particle">สี sĕe</span> form is preferred, for example when talking about eye colors.</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">ตาสีฟ้า dtaa sĕe fáa</span> → blue eyes<br>
        </p>
        <p>And there are situations where both forms are acceptable.
        Native speakers frequently use the <span class="th-particle">สี sĕe</span> form when describing the color of hair, cars and clothes for example.</p>
        <p style="margin-left:0.8rem">
        <span class="th-particle">รถดำ rót dam</span> → black car<br>
        <span class="th-particle">รถสีดำ rót sĕe dam</span> → black car<br>
        <span class="th-particle">ผมน้ำตาล pŏm nám dtaan</span> → brown hair<br>
        <span class="th-particle">ผมสีน้ำตาล pŏm sĕe nám dtaan</span> → brown hair<br>
        <span class="th-particle">เสื้อเหลือง sêua lĕuang</span> → yellow shirt<br>
        <span class="th-particle">เสื้อสีเหลือง sêua sĕe lĕuang</span> → yellow shirt
        </p>
        <p>In these situations, both versions are fine. ✅
        </p>`
    }
];
