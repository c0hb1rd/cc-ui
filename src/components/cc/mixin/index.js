export default {
  methods: {
    addScrollbar(target, obj) {
      obj = obj || Object.create(null);
      this.$(target).mCustomScrollbar({
        theme: obj.theme || 'inset',
        axis: obj.axis || 'y'
      })
    },
    addBodyEvent(event, f, body) {
      let element = body ? document.body : document.getElementById('app');

      element[event] = (e) => {
        element[event] && element[event]();
        f(e);
      }
    }
  }
}
