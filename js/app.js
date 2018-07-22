var app = new Vue({
  el: '#app',
  data: {
    productTitle: 'Classic Series Espresso Machine',
    prodPrice: 5399.00,
    zipCode: '',
    qty: 1
  },
  computed: {
    estShipCost: function() {
      if (this.zipCode.length < 5) {
        return ''
      } else {
        return '$' + (Math.round(Number(this.zipCode) / 200) * Number(this.qty)).toLocaleString('en-US')
      }
    },
    displayPrice: function() {
      if (this.prodPrice % 1 > 0) {
        return '$' + (this.prodPrice * this.qty).toLocaleString('en-US')
      } else {
        return '$' + (this.prodPrice * this.qty).toLocaleString('en-US') + '.00'
      }
    },
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
