<template>
  <div id="tasks" name="tasks" class="content">
    <span class="title">Наши цели</span>
    <div class="lists">
      <ul
        class="row"
        v-for="(row, index) in tasks.chunk_inefficient(3)"
        :key="index"
      >
        <li class="task" v-if="row.length < 2"></li>
        <li
          v-for="(task, index) in row"
          :key="index"
          class="task"
        >
          <span class="title">{{ task.title }}</span>
          <span class="description" v-html="task.description"></span>
        </li>
        <li class="task" v-if="row.length < 3"></li>
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
          description: "Сейчас то время, когда для того чтобы страна процветала необходимы специалисты разных специальностей, и вместо того чтобы всячески поддерживать стремление к учебе, правительство думает о милитаризации игнорируя утечку мозгов.",
          link: "",
        },
        {
          title: "Отмена платы за митинги",
          description: "Свобда собраний, митингов, пикетов гарантируется статьей 35 Конституции Республики Беларусь. Ввод оплаты митинов, ограничивает это права для тех у кого нет возможности их оплатить, что является прямым нарушением Конституции.",
          link: "",
        },
        {
          title: "Пробуждение активизма среди населения",
          description: "Из-за того, что граждане пустили все на самотек, постоянно принимаются антигуманные и антиконституционные законы, законы которые дестабилизируют экономику. Вся политическая деятельность совершается за ширмой. Всего этого не было, если бы граждане относились ответственно к происходящему. Поэтому одна из наших целей — пробудить интерес к активизму.",
          link: "",
        },
        {
          title: "Отмена смертной казни",
          description: "Судебная система Беларуси далеко не идеальная, в 2018 году оправдательных приговоров было менее 0.2%. Часто суды происходят за закрытыми дверьми в режиме конвеера. Вероятность ошибки при вынесении какого-либо очень велика. Ценой такой ошибки может стать человеческая жизнь.",
          link: "",
        },
        {
          title: "Отмена транспортного налога",
          description: "",
          link: "",
        },
        {
          title: "Отмена дикрета №1",
          description: "Из-за высого уровня безработицы и низких зароботных плат, многие вынуждены ездить на заработки за границу. Эти люди пополняют бюджет Беларуси оплачивая покупки в магазинах, разного вида услуги и т.д.",
          link: "",
        },
        {
          title: "Прозрачность государственных структур",
          description: "",
          link: "",
        },
        {
          title: "Переход к контрактной армии.",
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
  color: black;
  font-weight: bold;
  font-size: 50px;
  height: 60px;
  margin: 60px auto 0;
}
#tasks .task {
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 33%;
  padding: 0 30px;
}
#tasks .task .title {
  font-size: 18px;
  font-weight: bold;
  color: #383838;
  border-bottom: 3px solid #d64c4c;
}
#tasks .task .description {
  padding: 10px 20px 0 0;
  font-size: 15px;
  color: #383838;
}

#tasks .row {
  flex-direction: row;
  display: flex;
  width: 100%;
  margin: 10px 0 50px 0;
}

</style>
