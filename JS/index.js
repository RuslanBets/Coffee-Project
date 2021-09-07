window.onload = function top() {
  let header = document.getElementById('main-page-header')
  
  window.onscroll = function(){
    if (pageYOffset >= 80) {
      header.style.backgroundColor = 'rgba(20,2,0,.8)'
      header.style.transition = '0.5s all'
    }else {
      header.style.backgroundColor = ""
    }
  }
}