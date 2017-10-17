var bottom_tabs = document.getElementsByClassName('bottom-nav-li')
for (var i = 0; i < bottom_tabs.length; i++) {
  bottom_tabs[i].addEventListener('click', function() {
    document.getElementsByClassName('bottom-nav-content-overlay')[0].style.display = 'block';
  });
}

var close_buttons = document.getElementsByClassName('close');
for (var i = 0; i < close_buttons.length; i++) {
  close_buttons[i].addEventListener('click', function() {
    document.getElementsByClassName('bottom-nav-content-overlay')[0].style.display = 'none';
    document.getElementsByClassName('content-overlay-container')[0].scrollLeft = 0;
    var tabs = document.getElementsByClassName('bottom-nav-tabs')
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }
  });
}

function smoothScroll(e) {
  var tabs = document.getElementsByClassName('bottom-nav-tabs');
  var wrapper = document.getElementsByClassName('content-overlay-container')[0];
  var device_width = window.innerWidth;

  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }

  e.classList.add('active');
  var k = 0;
  if(e.id == 'deals-btn')
    k = device_width-5;
  if(e.id === 'coupons-btn')
    k = (device_width-5)*2;
  var n = 1;
  if(wrapper.scrollLeft > k)
    n = -1;
  var maxScroll = k;
  var i = setInterval(() => {

    if((n>=0 && wrapper.scrollLeft >= maxScroll) || (n <= 0 && wrapper.scrollLeft <= maxScroll) )
      clearInterval(i);
    else
    wrapper.scrollLeft += 5*n;
  }, 2);
  
  e.click();
}

document.getElementById('deals-btn').addEventListener('click', function(){
  smoothScroll(this);
  this.click();
});
document.getElementById('coupons-btn').addEventListener('click', function(){
  smoothScroll(this);
  this.click();
});
document.getElementById('compare-btn').addEventListener('click', function(){
  smoothScroll(this);
  this.click();
});
