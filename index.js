const innerBox = document.querySelector(".inner-box");
const boxContainer = document.querySelector(".box-container");
const boxes = document.querySelectorAll(".box1");

let currentIndex = 0;

function updateCarousel() {
  const newTransformValue = -currentIndex * (100 + 50) + "px";
  console.log(newTransformValue);
  boxContainer.style.transform = "translateX(" + newTransformValue + ")";
}

function nextSlide() {
  if (currentIndex < boxes.length - 100) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = boxes.length - 1;
  }
  updateCarousel();
}

// setInterval(prevSlide, 3000); // Auto-advance every 3 seconds (adjust as needed)

// const customerStr = document.getElementsByClassName("customerStories")[0];
// const customerStorieBox = document.getElementsByClassName("customerStoriebox")[0];
// const customerStrBox = document.getElementsByClassName("customerStrbox");

// let BoxIndex = 0;

// function UpdateBoxCarousel() {
//   let newTransformValue = -BoxIndex * (400 + 50) + "px";
//   console.log(newTransformValue);
//   customerStorieBox.style.transform = "translateX(" + newTransformValue + ")";
// }

// function NextSlide() {
//   if (BoxIndex < customerStrBox.length - 1500) {
//     BoxIndex++;
//   } else {
//     BoxIndex = 0;
//   }
//   UpdateBoxCarousel();
// }

// function PrevSlide() {
//   if (BoxIndex > 0) {
//     BoxIndex--;
//   } else {
//     BoxIndex = customerStrBox.length - 1;
//   }
//   UpdateBoxCarousel();
// }

// setInterval(PrevSlide, 1000);
