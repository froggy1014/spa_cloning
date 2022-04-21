const modal1 = document.querySelector("#modal1");
const modal2 = document.querySelector("#modal2");
const modal3 = document.querySelector("#modal3");

const openModal1 = document.querySelector(".open_review1");
const openModal2 = document.querySelector(".open_review2");
const openModal3 = document.querySelector(".open_review3");

const closeModal1 = document.querySelector(".close-button1");
const closeModal2 = document.querySelector(".close-button2");
const closeModal3 = document.querySelector(".close-button3");

const review_v1 = document.getElementById('review_v1');
const url_1 = review_v1.getAttribute("src")

const review_v2 = document.getElementById('review_v2');
const url_2 = review_v2.getAttribute("src")

const review_v3 = document.getElementById('review_v3');
const url_3 = review_v3.getAttribute("src")


openModal1.addEventListener("click", () => {
  modal1.showModal();
  review_v1.setAttribute('src', url_1);
});

closeModal1.addEventListener("click", () => {
  modal1.close();
  review_v1.setAttribute('src', '');
});

openModal2.addEventListener("click", () => {
  modal2.showModal();
  review_v2.setAttribute('src', url_2);
});

closeModal2.addEventListener("click", () => {
  modal2.close();
  review_v2.setAttribute('src', '');
});

openModal3.addEventListener("click", () => {
  modal3.showModal();
  review_v3.setAttribute('src', url_3);
});

closeModal3.addEventListener("click", () => {
  modal3.close();
  review_v3.setAttribute('src', '');
});
