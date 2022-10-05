// TODO: Which element is the following line of code selecting?
// .carouselbox
var carousel = document.querySelector(".carouselbox");
// TODO: Which element is the following line of code selecting?
// .next
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".prev");
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];

carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

function navigate(direction) {
  index = index + direction;
  if (index < 0) { 
    index = images.length - 1; 
  } else if (index > images.length - 1) { 
    index = 0;
  }
  currentImage = images[index];
  carousel.style.backgroundImage = "url('" + currentImage + "')";
}

// TODO: Describe the functionality of the following event listener.
// Clicking on the image sends user to another webpage.
carousel.addEventListener("click", function() {
  window.location.href = images[index];
});

// TODO: Describe the functionality of the following event listener.
// Starts the stop propagation on click for clicking on the carousel's right button.
next.addEventListener("click", function(event) {
  // TODO: What is the purpose of the following line of code?
  // Stops an ongoing function.
  event.stopPropagation();

  navigate(1);
});

// TODO: Describe the functionality of the following event listener.
// Starts the stop propagation on clicking the carousel left.
prev.addEventListener("click", function(event) {
    // TODO: What would happen if we didn't add the following line of code?
    // It would keep going left forever.
  event.stopPropagation();

  navigate(-1);
});

navigate(0);
