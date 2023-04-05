setInterval(slide,3000);
// slide() 함수는 슬라이드 효과를 내준다
		function slide() {
				$('#slider1').animate({
				marginLeft: -1920
				},1000,slideNext);
		}
// slideNext() 함수는 이미지 슬라이드가 무한 반복될 수 있도록 현재 가장 앞에 있는 이미지를 뒤로 돌려주는 효과를 내준다
		function slideNext(){
				$('#slider1 >li').eq(0).appendTo('#slider1');
				$('#slider1').animate({
					marginLeft: 0
				},0);
		}

// 두번째 슬라이드
const slides = document.querySelector('.slides');  
const slideImg = document.querySelectorAll('.slides li'); 
let currentIdx = 0; //현재 슬라이드 index
const slideCount = slideImg.length; //슬라이드 개수
const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 
const slideWidth = 1000; 
const slideMargin = 100; 

//전체 슬라이드 컨테이너 넓이 설정
function moveSlide(num) {
  slides.style.left = -num * 900 + 'px';
  currentIdx = num;
}

prev.addEventListener('click', function () {
  if (currentIdx !== 0) moveSlide(currentIdx - 1);
});

next.addEventListener('click', function () {
  if (currentIdx !== slideCount - 1) {
    moveSlide(currentIdx + 1);
  }
});



