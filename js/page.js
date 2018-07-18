Vue.component('p-artifact', {
  props: ['type'],
  template: `
    <div class="column">
      <div class="card">
        <div class="card-content">
            <slot></slot>
        </div>
      </div>
    </div>`
});

Vue.component('section-title', {
  template: `
    <div class="container">
      <h1 class="title"><slot></slot></h1>
    </div>
  `
});

Vue.component('experience', {
  template: ``
});

vm = new Vue({
  el: '#app',
});
