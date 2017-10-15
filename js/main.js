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
    var tabs = document.getElementsByClassName('bottom-nav-tabs')
    for (var i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }
  });
}

function smoothScroll() {
  var tabs = document.getElementsByClassName('bottom-nav-tabs')
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }
  this.classList.add('active');
  var wrapper = document.getElementsByClassName('content-overlay-container')[0];

  var k = 0;
  if(this.id == 'deals-btn')
    k = 315;
  if(this.id === 'coupons-btn')
    k = 630;
  var n = 1;
  if(wrapper.scrollLeft > k)
    n = -1;
  var maxScroll = k;
  var i = setInterval(() => {
    wrapper.scrollLeft += 5*n;
    if((n>=0 && wrapper.scrollLeft >= maxScroll) || (n < 0 && wrapper.scrollLeft <= maxScroll) )
      clearInterval(i);
  }, 2);
}

document.getElementById('deals-btn').addEventListener('click', smoothScroll);
document.getElementById('coupons-btn').addEventListener('click', smoothScroll);
document.getElementById('compare-btn').addEventListener('click', smoothScroll);
