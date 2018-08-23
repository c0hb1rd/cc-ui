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
    },
    alter: params => {
      let body = document.getElementsByTagName('body')[0];

      let alterBox = document.createElement('div');
      let iconSpan = document.createElement('span');
      let messageSpan = document.createElement('span');
      let icon = document.createElement('i');

      iconSpan.className = 'cc-alter-box-icon';
      messageSpan.className = 'cc-alter-box-message';
      alterBox.className = 'cc-alter-box';

      messageSpan.innerHTML = params.message;

      let timeout = 2000;

      switch (params.type) {
        case 'success':
          icon.className = 'fa fa-check-circle';
          icon.style.color = 'rgba(91,202,186,0.5)';
          break;
        case 'info':
          icon.className = 'fa fa-info-circle';
          icon.style.color = '#48ace6';
          timeout = 3000;
          break;
        case 'warning':
          icon.className = 'fa fa-exclamation-circle';
          icon.style.color = '#e69d38';
          timeout = 5000;
          break;
        case 'error':
          icon.className = 'fa fa-warning';
          icon.style.color = '#e6363f';
          timeout = 6000;
          break;
        default:
          icon.className = 'fa fa-info-circle';
          icon.style.color = '#48ace6';
          break;
      }

      iconSpan.appendChild(icon);
      alterBox.appendChild(iconSpan);
      alterBox.appendChild(messageSpan);

      body.appendChild(alterBox);

      setTimeout(() => {
        alterBox.style.top = '50px';
        alterBox.style.opacity = 1;

        setTimeout(() => {
          alterBox.style.opacity = 0;
          alterBox.style.top = '0px';

          setTimeout(() => {
            body.removeChild(alterBox)
          }, 400)
        }, params.timeout ? params.timeout : timeout)
      }, 100)
    }
  }
}
