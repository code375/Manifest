<template>
  <div id="header" class="content" >
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
        Мы активисты, которым не безразлична судьба нашей страны. Все Мы сторонники разных организаций и идеологий, но внутри данного движения Мы вне всего этого. Всех нас объединяет одна цель — светлое будущее нашей страны и эта цель, благодаря которой у нас нет противоречий и нас невозможно разобщить.
      </span>
    </section>
    <nav class="navbar" :class="{sticky: sticky}" ref="navbar">
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

<script type="text/javascript">
export default {
  data() {
    return {
      scrollY: null,
      sticky: false,
      navOffsetTop: 0,
    }
  },
  mounted() {
    this.navOffsetTop = this.$refs.navbar.offsetTop;
    window.addEventListener('scroll', (event) => {
      this.scrollY = Math.round(window.scrollY);
    });
  },
  watch: {
    scrollY() {
      if (this.scrollY > this.navOffsetTop) {
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
  }
}
</script>


<style type="text/css">

@media(min-width: 601px) {
  #header > #logotype {
    flex-direction: row;
  }
}

@media(max-width: 600px) {
  #header > #logotype {
    flex-direction: column;
  }
}

#header.content {
 padding: 10px 0!important;
}

#header a {
  color: white;
}

#header {
  background: #2f2929;
  min-height: 100vh!important;
  display: flex;
  flex-direction: column;
}

#header > #logotype {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 3;
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
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  text-align: center;
  flex-grow: 2;
}
#header #about > .description {
  display: inline-block;
  max-width: 800px;
  padding: 10px;
  box-sizing: border-box;
}

#header .navbar {
  -webkit-transform: translate3d(0,0,0);
  padding: 10px;
  box-sizing: border-box;
  background: #2f2929;
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
  margin: 10px 5px;
}

#header .navbar a {
  background: #d64c4c;
  padding: 10px;
  border-radius: 3px;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%
}
</style>
