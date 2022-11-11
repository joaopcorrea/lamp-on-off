function init() {
  const lamp = document.querySelector('.lamp');
  const light = document.querySelector('.lamp-light');
  const body = document.querySelector('body');
  const lampSwitch = document.querySelector('input');
  
  lampSwitch.addEventListener('click', () => {
    if (!lampSwitch.checked) {
  
      light.classList.remove('on');
      light.classList.add('off');
  
      body.classList.remove('light-on');
      body.classList.add('light-off');
  
    } else {
  
      light.classList.remove('off');
      light.classList.add('on');
  
      body.classList.remove('light-off');
      body.classList.add('light-on');
    }
  })
}