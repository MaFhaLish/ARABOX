const logoSlider = document.getElementById("logoSlider");

logoSlider.addEventListener("animationiteration", () => {
  // Reset the animation after each iteration
  logoSlider.style.animation = "none";
  void logoSlider.offsetWidth;
  logoSlider.style.animation = "slide 50s linear infinite";
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const faqIcon = question.querySelector(".faq-icon");

  question.addEventListener("click", () => {
    answer.classList.toggle("active");
    faqIcon.textContent = answer.classList.contains("active") ? "-" : "+";
  });
});

// Nab Bar Active Color
const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(navItem => navItem.classList.remove("active"));
    item.classList.add("active");
  });
});

// Add smooth scrolling to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick = function () {
  menu.classList.toggle("fa-xmark");
  navbar.classList.toggle("open");
};

// Back to top

document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.querySelector(".back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 570) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
