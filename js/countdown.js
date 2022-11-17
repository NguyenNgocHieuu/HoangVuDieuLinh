const count = document.getElementById('wrap');
const btn = document.getElementById('click-btn');
const box360s = document.getElementById('box360');

var getclickf = document.querySelector('.btn-click');

btn.style.display = 'none';

var i = 3;
$wrap = $('#wrap');
function countdown(){
  if (i < 0) {
    count.style.display = 'none';
    setTimeout(function() {
      btn.style.display = 'initial';
    }, 200);


  }
  if(i>0){
    box360s.style.display = 'none';
  }
  $wrap.removeAttr('class');
  setTimeout(function(){
    $wrap.addClass('wrap-' + i);
    setTimeout(function(){
      i--;
      countdown();
    }, 1000);
  }, 600);
}
countdown();


// Tạo div layer 2
var divLayer = document.querySelector('.layerMask');
divLayer.style.transformOrigin = "50% 0%";
divLayer.style.transform = "scaleY(0)";


getclickf.addEventListener('click', function(){
	getclickf.style.display = "none";
	anime({
		targets: divLayer,
		easing: 'easeOutSine',
		scaleY: 1,
		duration: 500
	});
  setTimeout(function(){
    box360s.style.display = 'initial';
  },500);
	
});