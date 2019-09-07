<template>
  <div id="tasks" name="tasks" class="content">
    <span class="title">Наши цели</span>
    <div class="lists">
      <ul class="list-wrapper">
        <li class="task">
          <span class="title">Отмена закона об отсрочка</span>
          <span class="description">
            О том как сильно вредит государству утечка мозгов
          </span>
        </li>
        <li class="task">
          <span class="title">Отмена платы за митинги</span>
          <span class="description">
            Описания почему платные митинги являются нарушением конституции
          </span>
        </li>
        <li class="task">
          <span class="title">Контрактная армия</span>
          <span class="description">
            Почему принуждение к срочной службе вредит иммиджу армии Беларуси
          </span>
        </li>
      </ul>
      <ul class="list-wrapper">
        <li class="task">
          <span class="title">Честные выборы</span>
          <span class="description">
            Сделать выборы полностью прозрачными
          </span>
        </li>
        <li class="task">
          <span class="title">Пробудить активизм</span>
          <span class="description">
            Отсутствие интереса к происходящему в стране одна из главных причин невыполнения своих обещаний чиновниками.
          </span>
        </li>
        <li class="task">
          <span class="title">Реформа остальных отраслей</span>
          <span class="description">Проведение реформ</span>
        </li>
      </ul>
      <ul class="list-wrapper">
        <li class="task"></li>
        <li class="task">
          <span class="title">Предложи свою цель.</span>
          <span class="description">
            Предложить цель, которой не хватает, ты можешь в чате: <a href="//t.me/code375org">code375org</a>
          </span>
        </li>
        <li class="task"></li>
      </ul>
    </div>
  </div>
</template>

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
  margin: 40px;
}
#tasks .task {
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 33%;
  padding: 0 30px;
}
#tasks .task .title {
  font-size: 25px;
  color: #383838;
  border-bottom: 3px solid #d64c4c;
}
#tasks .task .description {
  padding: 10px 20px 0 0;
  font-size: 15px;
  color: #383838;
}

#tasks .list-wrapper {
  flex-direction: row;
  display: flex;
  width: 100%;
  margin: 50px 0 0 0;
}

</style>
