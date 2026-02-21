document.addEventListener("DOMContentLoaded", () => {
  const promoCards = document.querySelectorAll(".promo__card");
  const popups = document.querySelectorAll(".popup");
  const closeButtons = document.querySelectorAll(".popup__close");

  promoCards.forEach((card) => {
    card.addEventListener("click", () => {
      const popupId = card.getAttribute("data-popup");
      const popup = document.getElementById(popupId);
      if (popup) popup.classList.add("active");
    });
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".popup").classList.remove("active");
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
      e.target.classList.remove("active");
    }
  });
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
