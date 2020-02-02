// TAKE ONE, simple code, might be usefull

// var i = 0;
// var images = [];

// images[0] = 'img/nature1.jpg';
// images[1] = 'img/nature2.jpg';
// images[2] = 'img/nature3.jpg';
// images[3] = 'img/nature4.jpg';

// function changeSlider () {
//     document.sliding.src = images [i];
    
//     if(i<images.length-1){
//         i++;
//     }else{
//         i=0;
//     }
//     setTimeout(changeSlider, 3000);
// };

// window.onload = changeSlider;


//TAKE TWO

//Making some HTML elements (div containers) out off JS

var containerOne = document.createElement('div');
document.querySelector('body').appendChild(containerOne);

var containerOneClass = document.querySelector('div');
containerOneClass.className = "slider-first";

var containerTwo = document.createElement('div');
document.querySelector('div').appendChild(containerTwo);

var containerTwoClass = document.querySelector('.slider-first div')
containerTwoClass.className = "slider-second";

var containerThree = document.createElement('div');
document.querySelector('div').appendChild(containerThree);

var containerThreeClass = document.querySelectorAll('div')[2];
containerThreeClass.className = "slider-third";

//Main Array

var images = [
    
    'img/nature1.jpg',
    'img/nature2.jpg',
    'img/nature3.jpg',
    'img/nature4.jpg'
    

];

// Put images inside HTML from array, and making atribut "src" through forEach method

images.forEach(function(element, index) {
    var img = document.createElement("img");
    img.className = "photos";
    img.setAttribute("src", images[index]);
    document.querySelector('div .slider-second').appendChild(img);
});

images.forEach(function(element, index) {
    var img = document.createElement("img");
    img.className = "thumbnails";
    img.setAttribute("src", images[index]);
    document.querySelector('div .slider-third').appendChild(img);
});


// Main function

function slider () {

    //First way

//     var getImg = document.querySelector('img');
//     document.querySelector('div .slider-second').appendChild(getImg);

//     var thumb = document.querySelectorAll('.slider-third .thumbnails');
    
//     thumb.forEach(function(el, index){ 
//         if(getImg.getAttribute('src') === thumb[index].getAttribute('src')){
//             el.classList.add("lights-On");
//         }else{
//             el.classList.remove("lights-On");
//         }

//      });

//      console.log(thumb)

// };
    
    
    //Second way
    
    var thumbnails = document.querySelectorAll('.slider-second img');
    var slideShow = thumbnails[0];
    thumbnails[thumbnails.length-1].after(slideShow);

    var pictures = document.querySelectorAll('.thumbnails');
    
    pictures.forEach(function(element, index){
      if (thumbnails[1].getAttribute('src') === pictures[index].getAttribute('src')){
        element.classList.add("lights-On");
    } else{
        element.classList.remove("lights-On");
    };
});

};

setInterval(slider, 2000);



