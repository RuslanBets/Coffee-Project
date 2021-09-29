window.onload = function top() {
  let header = document.getElementById('main-page-header')
  let burger = document.querySelector('.burger')
  let menu = document.querySelector('.menu-contacts')
  let closeBtn = document.querySelector('.close-btn')
 
  
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