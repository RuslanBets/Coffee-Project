window.onload = function top() {
  let header = document.getElementById('main-page-header')
  let burger = document.querySelector('.burger')
  let menu = document.querySelector('.menu-contacts')
  let closeBtn = document.querySelector('.close-btn')
  let time = 1000
  let step = 100

  function outNum (num, elem) {
    let l = document.querySelector('#'+ elem);
    n = 0
    let t = Math.round(time / (num / step));
    let interval = setInterval(() => {
      n = n + step;
      if (n === num) {
        clearInterval(interval)
      }
      l.innerHTML = n;
    },
      t)
  }

  // outNum(2536, 'out-1')

 
  
  window.onscroll = function(){
    if (pageYOffset > 80) {
      header.style.backgroundColor = 'rgba(20,2,0,.8)'
      header.style.transition = '0.5s all'
    }else {
      header.style.backgroundColor = ""
    }
  }
//-----------------------------------------------------------------
  let form = document.querySelector('.subscribe-form'),
  email = document.getElementsByName('email')[0],
  userData = {};
  form.onsubmit = function(e) {
    e.preventDefault()
    userData.email = email.value
    email.value = ""
    console.log(userData);
  }
  burger.addEventListener('click', function() {
    menu.style.display = 'block'
    this.style.display = 'none'
    document.body.style.overflow = 'hidden'
  })

  closeBtn.addEventListener('click', function() {
    menu.style.display = 'none'
    burger.style.display = 'block'
    document.body.style.overflow = ''
  })
}



// if(userData.email = email.value) {
//   console.log(userData)
// }