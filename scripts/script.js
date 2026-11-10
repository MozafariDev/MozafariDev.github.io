(function () {
  "use strict";
  let text = document.querySelector(".about2");
  if (typeof Typed !== "undefined") {
    new Typed("#typed", {
      strings: ["برنامه نویس", "دانش آموز", "کلاس هشتم", "عاشق لینوکس"],
      typeSpeed: 150,
      backSpeed: 90,
      backDelay: 800,
      startDelay: 400,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
  } else {
    console.log("Typed.js لود نشده است.");
    text.innerHTML = ` `;
  }
  AOS.init({
    duration: 800,
    once: true,
    offset: 100,
  });
  document.getElementById("menuBtn").onclick = function () {
    document.querySelector(".nav-buttons").classList.toggle("show");
  };
})();
