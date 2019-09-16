<template>
  <div id="tasks" name="tasks" class="content">
    <span class="title">Наши цели</span>
    <div class="lists">
      <ul class="row" >
        <li
          v-for="(task, index) in tasks"
          :key="index"
          class="task"
        >
          <span class="title">{{ task.title }}</span>
          <span class="description" v-html="task.description"></span>
        </li>
      </ul>

    </div>
  </div>
</template>

<script type="text/javascript">

Object.defineProperty(Array.prototype, 'chunk_inefficient', {
  value: function(chunkSize) {
    var array = this;
    return [].concat.apply([],
      array.map(function(elem, i) {
        return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
      })
    );
  }
});

export default {
  data() {
    return {
      tasks: [
        {
          title: "Отмена закона об отсрочках",
          description: "Сейчас то время, когда для того чтобы страна процветала необходимы высококвалифицированные специалисты во всех областях жизнедеятельности государства, и вместо того чтобы всячески поддерживать стремление к учебе, правительство думает о милитаризации игнорируя утечку мозгов.",
          link: "",
        },
        {
          title: "Отмена платы за митинги",
          description: "Свобода собраний, митингов, пикетов гарантируется статьей 35 Конституции Республики Беларусь. Ввод оплаты митингов, ограничивает это право для тех, у кого нет возможности их оплатить, что является прямым нарушением Конституции.",
          link: "",
        },
        {
          title: "Отмена декрета №1(бывш. №3)",
          description: "Из-за высокого уровня безработицы и низких заработных плат, многие вынуждены ездить на заработки за границу. Эти люди пополняют бюджет Беларуси, оплачивая покупки в магазинах, разного вида услуги и т.д.",
          link: "",
        },
        {
          title: "Построение гражданского общества",
          description: "Гражданское общество — это совокупность негосударственных частных объединений граждан, преследующих индивидуальные и социальные интересы.\n\tФорум будет служить интернет-площадкой, где простые люди и общественные организации смогут объединяться и совместными действиями, совместными усилиями менять ситуацию в стране.",
          link: "",
        },
        {
          title: "Отмена транспортного налога",
          description: "В роли плательщика выступают все лица, которые оформили право собственности на то или иное транспортное средство. Многие беларусы хотят отмены этого глупого закона, т.к. многие водители считают, что справедливей было бы включить дорожный сбор в стоимость топлива: поехал, купил бензин, тем самым заплатил.",
          link: "",
        },
        {
          title: "Прозрачность государственных структур",
          description: "Одной из наиболее существенных проблем управления современным государством стала проблема снижения доверия и уважения к власти со стороны граждан и частного сектора экономики.\n\tВозрастание степени открытости и прозрачности работы системы государственного управления рассматривается как один из важнейших факторов в достижении реформ.",
          link: "",
        },
        {
          title: "Отмена смертной казни",
          description: "Судебная система Беларуси далеко не идеальная, в 2018 году оправдательных приговоров было менее 0.2%. Часто суды происходят за закрытыми дверьми в режиме конвейера. Вероятность ошибки при вынесении какого-либо приговора очень велика. Ценой такой ошибки может стать человеческая жизнь.",
          link: "",
        },
        {
          title: "Реформа армии.",
          description: "",
          link: "",
        },
        {
          title: "Предложить свою цель",
          description: "Свою цель ты можешь предложить в нашем чате <a href='http://t.me/code375org' target='_blank'>@code375org</a>",
          link: "",
        },
      ],
    }
  },
}

</script>


<style type="text/css">

@media (min-width: 800px) {
  #tasks .task {
    flex-basis: 33%;
  }
  #tasks .task .title {
    font-size: 18px;
  }
}

@media (min-width: 500px) and (max-width: 799px) {
  #tasks .task {
    flex-basis: 50%;
  }
  #tasks .task .title {
    font-size: 16px;
  }
}

@media (max-width: 500px) {
  #tasks .task {
    flex-basis: 100%;
  }
}

#tasks {
  background: #eaeae2;
  display: flex;
  flex-direction: column;
  margin: auto;
  box-sizing: border-box;
}

#tasks .lists {
  margin: 20px;
}

#tasks .list {
  display: flex;
  flex-direction: column;
}
#tasks > .title {
  text-align: center;
  color: #383838;
  font-weight: bold;
  font-size: 50px;
  height: 60px;
  margin: 60px auto 0;
}
#tasks .row {
  flex-flow: row wrap;
  display: flex;
  width: 100%;
  margin: 10px 0 50px 0;
}
#tasks .task {
  display: flex;
  flex-direction: column;
  list-style: none;
  box-sizing: border-box;
  padding: 0 10px;
  margin-bottom: 30px;
}
#tasks .task .title {
  font-weight: bold;
  color: #383838;
  border-bottom: 3px solid #d64c4c;
}
#tasks .task .description {
  padding: 10px 20px 0 0;
  font-size: 15px;
  color: #383838;
}


</style>
