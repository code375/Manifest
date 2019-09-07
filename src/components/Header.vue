<template>
  <div id="header" class="content">
    <div id="logotype">
      <img src="../assets/logo.svg" id="logo">
      <div class="info">
        <span class="title">Code375</span>
        <span class="description">Объединение активных граждан</span>
      </div>
    </div>
    <section id="about" name="about">
      <span class="description">
        <!-- eslint-disable max-len -->
        Мы активисты, которым не безразлична судьба нашей страны. Все Мы сторонники разных организаций и идеологий, но внутри данного движения Мы вне всего этого. Всех нас объединяет одна цель — светлое будущее нашей страны и эта цель благодоря, которой у нас нет противоречий и нас невозможно разобщить.
      </span>
    </section>
    <nav class="navbar">
      <ul>
        <li><a href="#tasks">Цели</a></li>
        <li><a href="#join">Присоединится</a></li>
        <li><a href="#faq">FAQ</a></li>
        <li><a href="#rules">Правила</a></li>
        <li><a href="//forums.code375.org" target="_blank">Форум</a></li>
      </ul>
    </nav>
  </div>
</template>


<style type="text/css">
#header a {
  color: white;
}

#header {
  background: #2f2929;
}

#header > #logotype {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
}

#header > #logotype > #logo {
  margin: 10px;
  height: 200px;
}
#header > #logotype > .info {
  display: flex;
  flex-direction: column;
  margin: 10px;
  align-items: center;
  color: #d64c4c;
}
#header .title {
  font-size: 80px;
}
#header .description {
  font-size: 20px;
}


#header #about {
  color: white;
  height: 200px;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  text-align: center;
}
#header #about > .description {
  display: inline-block;
  min-width: 700px;
  max-width: 800px;
}

#header .navbar {
  height: 100px;
  bottom: 0;
  width: 100%;
  display: inline-flex;
  justify-content: center;
}

#header .navbar ul {
  color: white;
  display: flex;
}

#header .navbar ul li {
  list-style: none;
  margin: 10px;
}

#header .navbar a {
  background: #d64c4c;
  padding: 10px;
  border-radius: 3px;
}
</style>
