<template>
  <div id="join" class="content" name="join">
    <span class="title">Как к нам присоединиться?</span>
    <div class="networks">
      <ul class="list">
        <li><a class="link" href="https://vk.com/code375"><font-awesome-icon :icon="['fab', 'vk']" /></a></li>
        <li><a class="link" href="https://t.me/Code375"><font-awesome-icon :icon="['fab', 'telegram']" /></a></li>
        <li><a class="link" href="https://twitter.com/code375org"><font-awesome-icon :icon="['fab', 'twitter']" /></a></li>
        <li><a class="link" href="#"><font-awesome-icon :icon="['fab', 'youtube']" /></a></li>
      </ul>
    </div>
    <div class="telegrams">
      <div class="left">
        <div class="block">
          <span class="title">Тематические чаты:</span>
          <ul>
            <li><a href="">Чат Code375: https://t.me/Code375org</a></li>
            <li><a href="">Чат оффтопа: https://t.me/protestby_offtop</a></li>
            <li><a href="">Чат повестки: https://t.me/pozvachat</a></li>
          </ul>
        </div>
        <div class="block">
          <span class="title">Областные чаты:</span>
          <ul>
            <li><a href="">Брест - https://t.me/protestby_brest</a></li>
            <li><a href="">Витебск - https://t.me/protestby_vitebsk</a></li>
            <li><a href="">Гомель - https://t.me/protestby_gomel</a></li>
            <li><a href="">Гродно - https://t.me/protestby_grodno</a></li>
            <li><a href="">Минск - https://t.me/protestby_minsk</a></li>
            <li><a href="">Могилёв - https://t.me/protestby_mogilev</a></li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="block">
          <span class="title">Региональные чаты:</span>
          <ul>
            <li><a href="">Барановичи - https://t.me/protestby_bar</a></li>
            <li><a href="">Бобруйск - https://t.me/protestby_bobruisk</a></li>
            <li><a href="">Борисов - https://t.me/protestby_borisov</a></li>
            <li><a href="">Орша - https://t.me/protestby_orsha</a></li>
            <li><a href="">Пинск - https://t.me/protestby_pinsk</a></li>
            <li><a href="">Речица - https://t.me/protestby_rechitsa</a></li>
            <li><a href="">Слоним - https://t.me/protestby_slonim</a></li>
            <li><a href="">Слуцк - https://t.me/protestby_slutsk</a></li>
            <li><a href="">Солигорск - https://t.me/protestby_soligorsk</a></li>
            <li><a href="">Хойники - https://t.me/protestby_khoiniki</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { library } from '@fortawesome/fontawesome-svg-core';
import { faVk, faTelegram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faVk, faTelegram, faTwitter, faYoutube);

export default {
  components: {
    fontAwesomeIcon: FontAwesomeIcon,
  },
};
</script>


<style type="text/css">
#join {
  background: #2f2929;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#join > .title {
  font-size: 50px;
  margin: 100px auto 50px;
  font-weight: bold;
}

#join .networks ul {
  display: flex;
  flex-direction: row;
}
#join .list .link {
  margin: 10px;
  color: white;
  font-size: 30px;
  background: #d64c4c;
  padding: 10px;
  border-radius: 50%;
}

#join .telegrams {
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  min-width: 700px;
  max-width: 900px;
}
#join .left, #join .right {
  width: 50%;
}
#join .telegrams .block {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  border-left: 3px solid #d64c4c;
  padding: 0 10px;
}
#join .telegrams .block .title {
  font-size: 30px;
  margin-bottom: 5px;
}
#join .telegrams ul {
  display: flex;
  flex-direction: column;
}
#join .telegrams a {
  color: white;
}
</style>
