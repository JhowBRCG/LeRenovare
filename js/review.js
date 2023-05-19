const reviews = [
  {
    id: 1,
    img: "../assets/review-one.png",
  },

  {
    id: 2,
    img: "../assets/review-two.png",
  },

  {
    id: 3,
    img: "../assets/review-three.png",
  },

  {
    id: 4,
    img: "../assets/review-four.png",
  },

  {
    id: 5,
    img: "../assets/review-five.png",
  },

  {
    id: 6,
    img: "../assets/review-six.png",
  },
];

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const reviewImg = document.querySelector(".review-img");

let currentItem = 0;

window.addEventListener("DOMContentLoaded,", function () {
  showReview(currentItem);
});

function showReview(t) {
  const item = reviews[t];
  reviewImg.src = item.img;
}

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showReview(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showReview(currentItem);
});
