document.addEventListener("DOMContentLoaded", () => {
  const reviewCards = document.querySelectorAll(".reviews__slide");
  const nextButton = document.querySelector(".arrowww.nt");
  const prevButton = document.querySelector(".arrowww.pv");

  let currentReview = 0;

  function updateReview(direction) {
    reviewCards.forEach((card, index) => {
      card.classList.remove("active", "prev");
      if (index === currentReview) {
        card.classList.add("active");
      } else if (
        index ===
        (currentReview - 1 + reviewCards.length) % reviewCards.length
      ) {
        card.classList.add("prev");
      }
    });
  }

  nextButton.addEventListener("click", () => {
    currentReview = (currentReview + 1) % reviewCards.length;
    updateReview("next");
  });

  prevButton.addEventListener("click", () => {
    currentReview =
      (currentReview - 1 + reviewCards.length) % reviewCards.length;
    updateReview("prev");
  });

  // Автопрокрутка
  /* setInterval(() => {
    currentReview = (currentReview + 1) % reviewCards.length;
    updateReview("next");
  }, 5000); */

  updateReview();
});
const form = document.getElementById("contactForm");
const button = document.getElementById("submitBtn");
const popup = document.getElementById("popup");

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwtfNfXH_16FUBt3sUhQss4bOVmPnqp9a5YtnnoqCSS3D43fWw8hP1wqwZIzQfnsojq/exec";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  button.disabled = true;
  button.textContent = "Отправка...";

  const formData = new FormData(form);

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // важно!
      body: formData,
    });

    popup.style.display = "flex";
    form.reset();
  } catch (error) {
    alert("Ошибка отправки");
  }

  button.disabled = false;
  button.textContent = "Отправить";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");

  burger.addEventListener("click", () => {
    const isActive = mobileMenu.classList.toggle("active");
    burger.classList.toggle("active", isActive);
    // Блокируем скролл фона
    document.body.style.overflow = isActive ? "hidden" : "";
  });

  // Закрытие по клику вне меню (по фону)
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.classList.remove("active");
      burger.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});
