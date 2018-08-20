import Vue from 'vue'


Vue.prototype.addScrollbar = function (target, obj) {
  obj = obj || Object.create(null);
  this.$(target).mCustomScrollbar({
    theme: obj.theme || 'inset',
    axis: obj.axis || 'y'
  })
};

