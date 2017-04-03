'use strict';

window.addEventListener('DOMContentLoaded', () => {

  // -----------------------------------
  // FPS 計測用モジュールの配置
  // -----------------------------------
  const stats = new Stats();
  document.body.appendChild(stats.dom);
  requestAnimationFrame(function loop() {
    stats.update();
    requestAnimationFrame(loop);
  });


  // -----------------------------------
  // Vue.jsの初期化
  // -----------------------------------

  Vue.component('MyItem', {
    template: `
        <div class="item" v-bind:style="{'animationDelay': item.delay}">
          <a href="#"><img v-bind:src="item.thumbUrl"/></a>
          <p class="card-title">Tokyo Tower</p>
          <p class="card-text">This is a dummy text. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
        </div>`,
    props: ['item']
  });

  new Vue({
    el: '#app',
    data: {
      itemLength: 20,
      effectClass : "brightness"
    },
    computed: {
      items: function () {
        const len = Number(this.itemLength);
        const list = [];
        for (let i = 0; i < len; i++) {
          list.push({
            key : i,
            thumbUrl : `imgs/photo-${i % 10}.jpg`,
            delay: `${(i % 20) * 50}ms`
          });
        }
        return list;
      },
    }
  });
});
