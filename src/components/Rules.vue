<template>
  <div id="rules" name="rules" class="content">
    <span class="title">Правила</span>

    <div class="block">
      <span class="title">Запрещено:</span>
      <ul class="list">
        <li class="rule">1. Оскорблять других участников</li>
        <li class="rule">2. Призывать к радикальным действиям</li>
        <li class="rule">3. Пытаться навязать свою идеологию</li>
        <li class="rule">4. Призывать к нарушению законов Беларуси</li>
      </ul>
    </div>

  </div>
</template>

<style type="text/css">

#rules {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  background: #2f2929;
}

#rules > .title {
  color: #d64c4c;
  margin: 100px auto 0;
  font-size: 50px;
  font-weight: bold;
}

#rules .block {
  background: #eaeae2;
  padding: 20px 20px;
  margin: 30px;
  display: flex;
  flex-direction: column;
}

#rules .block .title {
  font-size: 20px;
}

#rules .block .list {
  margin-top: 5px;
}

</style>
