Vue.component('p-artifact', {
  template: '\
    <div class="column">\
      <div class="card">\
        <div class="card-content">\
            <slot></slot>\
        </div>\
      </div>\
    </div>'
});

Vue.component('section-title', {
  template: '\
    <div class="container">\
      <h1 class="title"><slot></slot></h1>\
    </div>'
});

Vue.component('certification', {
  template: '\
  <div class="card">\
    <div class="card-content">\
      <div class="level">\
        <div class="level-left">\
          <div class="level-item">\
            <figure class="image is-96x96">\
              <slot name="image"></slot>\
            </figure>\
          </div>\
          <div class="container">\
            <slot></slot>\
          </div>\
        </div>\
      </div>\
    </div>\
  </div>'
});

vm = new Vue({
  el: '#app',
  data: {
    check: 'things',
    tableauModal: false,
    landingPageModal: false,
    oldDesignPreview: false,
    newDesignPreview: false,
    schemaModal: false,
    seoModal: false
  },
  methods: {
    toggleActive: function(target) {
      this[target] = !this[target];
    }
  },
  computed: {
    showForIe: function() {
      if (navigator.appName == 'Microsoft Internet Explorer'
      ||  !!(navigator.userAgent.match(/Trident/)
      || navigator.userAgent.match(/rv:11/))) {
        return true;
      } else {
        return false;
      }
    }
  }
});
