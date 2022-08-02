// console.log('slider')
const wrapperElement = document.querySelector('.slides-wrapper');
wrapperElement.innerHTML ='';
let currentSlideIndex = 0;

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

for(let i=0; i<slides.length; i++)	{
	const src = slides[i];
	//console.log(src);
	//const li = document.createElement('li');
	const li = `
	<li class="slide">
		<img src="${src}">
	</li>
	`
	wrapperElement.innerHTML += li;
	
}



const slideElements = document.querySelectorAll('.slide');
let currentSlide = slideElements[currentSlideIndex];
//slideElements[currentSlideIndex].classList.add('active');

//slideElements[currentSlideIndex].classList.add('active');

//const nextElement = document.querySelector('.arrow-next');
//const prevElement = document.querySelector('.arrow-prev');

/*nextElement.addEventListener('click', function(){
	console.log('go next');
	const lastIndex = slideElements.length - 1;

	const currentSlide = slideElements[currentSlideIndex];
	currentSlide.classList.remove('active');

	if(currentSlideIndex < lastIndex)	{

		currentSlideIndex++;
	}else{
		currentSlideIndex = 0;
	}
	//console.log('slide corrente', currentSlideIndex);
	
	//currentSlideIndex ++;
	const nextSlide = slideElements[currentSlideIndex];
	nextSlide.classList.add('active');
	//console.log('prossima slide', currentSlideIndex, currentSlide);
})*/



setTimeout(function(){
    
    slideElements[currentSlideIndex].classList.add('active');
    
    setInterval(function(){
    const lastIndex = slideElements.length - 1;

	if(currentSlideIndex < lastIndex)	{
        slideElements[0].classList.remove('active');
		currentSlideIndex++;
	}else{
		currentSlideIndex = 0;
	}

    if(currentSlideIndex != 0){
        slideElements[currentSlideIndex-1].classList.remove('active');
        slideElements[currentSlideIndex].classList.add('active');
    }else{
        slideElements[lastIndex].classList.remove('active');
        slideElements[currentSlideIndex].classList.add('active');
    }


}, 3000)},3000);





/*prevElement.addEventListener('click', function(){
	console.log('go prev');


	const lastIndex = slideElements.length - 1;
	const firstIndex = 0;
	const currentSlide = slideElements[currentSlideIndex];
	currentSlide.classList.remove('active');

	if(currentSlideIndex > firstIndex)	{
		currentSlideIndex--;
	}else{
	currentSlideIndex = lastIndex;
	}

	const previousSlide = slideElements[currentSlideIndex];
	previousSlide.classList.add('active');
})*/