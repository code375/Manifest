<template>
  <div id="join" class="content" name="join">
    <span class="title">Мы в телеграме:</span>
    <div class="telegrams">
      <div class="block">
        <span class="title">Тематические чаты:</span>
        <ul class="links">
          <li class="link">Code375: <a href="//t.me/Code375org" target="_blank">@Code375org</a></li>
          <li class="link">Чат оффтопа: <a href="//t.me/protestby_offtop" target="_blank">@protestby_offtop</a></li>
        </ul>
      </div>
      <div class="block">
        <span class="title">Областные чаты:</span>
        <ul class="links">
        </ul>
      </div>
      <div class="block">
        <span class="title">Региональные чаты:</span>
        <ul class="links">
        </ul>
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

@media(min-width: 561px) {
  #join .telegrams {
    flex-flow: row wrap;
  }
  #join .telegrams .block {
    flex-basis: 50%;
  }
}

@media(max-width: 560px) {
  #join .telegrams {
    flex-direction: column;
  }
}


#join {
  background: #2f2929;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#join > .title {
  font-size: 50px;
  margin: 100px auto 10px;
  font-weight: bold;
  color: #d64c4c;
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
  margin: 0 auto 20px;
  display: flex;
  max-width: 900px;
}
#join .left, #join .right {
  width: 50%;
}
#join .telegrams .block {
  display: flex;
  flex-direction: column;
  border-left: 3px solid #d64c4c;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 30px;
}
#join .telegrams .block .title {
  font-size: 30px;
  margin-bottom: 5px;
  color: #d64c4c;
}
#join .telegrams ul {
  display: flex;
  flex-direction: column;
}
#join .telegrams a {
  color: white;
}

#join .telegrams .block .link {
  color: #d64c4c;
}

#join .telegrams .block .link a {
  color: white;
}

</style>
