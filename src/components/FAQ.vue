<template>
  <div id="faq" name="faq" class="content">
    <ul class="questions">
      <li
        v-for="(question, index) in questions"
        :key="index"
        class="question"
        :class="{ expanded: question.state }"
        @click="questions[index].state = !questions[index].state;"
      >
        <div class="question-title">{{question.title}}</div>
        <span class="question-answer" v-html="question.answer"></span>
      </li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      questions: [
        {
          title: 'Как к вам присоединиться?',
          answer: 'Если Вы один, то Можете присоединиться к организациям из нашего союза, здесь находится полный список: <a href="#join">ссылка</a>. Если же вы организация, то напишите в чат <a href="//t.me/code375org">@code375org</a>. Если у нас к вам не будет вопросов, то мы добавим вас в наш союз.',
          state: false,
        },
        {
          title: 'Какие условия на вступление для организаций?',
          answer: 'У вас не должно быть негативного бэкграунда. Ваши уже совершенные действия не должны портить репутацию объединения или других участников. Также в закрепе вашего чата должна висеть ссылка на <a href="#join">список</a> с любым описанием. Условия могут измениться.',
          state: false,
        },
        {
          title: 'Зачем к вам присоединяться?',
          answer: 'Как говорится в поговорке "Слаб отдельно каждый прутик. Веник целый не сломать", наша цель объединить как можно больше людей. По одному власть нас не будет слушать, но всех вместе нас не смогут проигнорировать. Так же благодаря союзу, участникам будет проще найти другие движения, в том числе и ваше, затрагивающие их интересы.',
          state: false,
        },
        {
          title: 'С чего все началось?',
          answer: 'Начало Code375 было положено во время протеста против закона об отсрочках. Одни из главных проблем во время любого протестного движения — привлечение новых участников и перенимание успешного опыта от предыдущих протестов. Именно для решения их был создан этот союз.',
          state: false,
        },
        {
          title: 'Как Я могу помочь?',
          answer: 'Есть много способов помочь нашему делу. Самое простое, что вы можете сделать — подписаться на каналы, вступить в чаты, поделится этим манифестом в социальных сетях, рассказать о нас друзьям. Чуть сложнее — принимайте участие в обсуждениях, помогайте в создании контента и т.д. Самый большой вклад вы можете внести: участвуя в пикетах, митингах и распространяя агитационный материл.',
          state: false,
        },
        {
          title: 'Кто вам требуется?',
          answer: 'Нам нужны активисты с разными навыками и специализациями. Дизайнеры, разработчики, юристы, экономисты, врачи,  Даже если у тебя нет образования, ты можешь помочь! Список задач можно посмотреть <a href="/tasks">здесь<a>.',
          state: false,
        },
        {
          title: 'Почему зубр? Почему code375?',
          answer: '\tЗубр — один из главных символов Беларуси. Это мощное, величественное животное, которое находилось на грани вымирания. В данный момент гражданская активность так же на грани вымирания, хотя является очень важной частью влияющей на процветание страны. И Мы надеемся, что сможет ее реанимировать!\n\tCode375 — код Беларуси. Его знает каждый беларус, а значит, запомнить такое название сможет любой.',
          state: false,
        },
        {
          title: 'Как вы относитесь к радикальным действиям?',
          answer: 'Мы не поддерживаем и негативно относимся к радиальным действиям, т.к. такие действия подставляют всех участников сообщества, а также отпугивают потенциальных активистов, тем самым пресекая одну из наших главных целей.',
          state: false,
        },
        {
          title: 'Кто ваш лидер?',
          answer: 'Code375 — это союз организаций и граждан. Лидеры могут быть внутри организаций, но в рамках объединения все равны и все решения принимаются сообща. При необходимости может быть выбран представитель, опять же сообща.',
          state: false,
        },
        {
          title: 'Как предложить свою цель?',
          answer: 'Свою цель ты можешь предложить в телеграм чате <a href="//t.me/code375org" target="_blank">@code375org</a>, после чего участники, возможно, внесут конструктив, свои идеи. Как только большинство активных участников проголосую за, цель будет принята.',
          state: false,
        },
        {
          title: 'Мне не нравится принятая цель, что мне делать?',
          answer: 'Ровно так же, как и принять, можно отклонить цель. Для этого опять же вам необходима поддержка большинства. Вы можете зайти в чат <a href="//t.me/code375org" target="_blank">@code375org</a> и попытаться убедить участников в необходимости этого.',
          state: false,
        },
      ],
    };
  },
};
</script>


<style type="text/css">

#faq {
  min-height: 700px;
  background: #eaeae2;
  display: flex;
}
#faq .questions {
  max-width: 800px;
  margin: 60px auto;
}
#faq .question {
  display: flex;
  flex-direction: column;
  background: #f9f9f6;
  margin-bottom: 20px;
  padding: 10px;
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,.12);
}
#faq .question a {
  color: blue;
}
#faq .question-title {
  user-select: none;
  cursor: pointer;
  font-size: 20px;
  margin: 10px;
  font-weight: bold;
}
#faq .question-answer {
  max-height: 0px;
  overflow-y: hidden;
  transition: max-height 0.7s linear;
}
#faq .expanded .question-answer {
  max-height: 300px;

}
</style>

