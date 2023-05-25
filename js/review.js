const reviews = [
  {
    id: 1,
    img: "../assets/reviews/r1.png",
  },

  {
    id: 2,
    img: "../assets/reviews/r2.png",
  },

  {
    id: 3,
    img: "../assets/reviews/r3.png",
  },

  {
    id: 4,
    img: "../assets/reviews/r4.png",
  },

  {
    id: 5,
    img: "../assets/reviews/r5.png",
  },

  {
    id: 6,
    img: "../assets/reviews/r6.png",
  },
  {
    id: 7,
    img: "../assets/reviews/r7.png",
  },
  {
    id: 8,
    img: "../assets/reviews/r8.png",
  },
  {
    id: 9,
    img: "../assets/reviews/r9.png",
  },
  {
    id: 10,
    img: "../assets/reviews/r10.png",
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
