(function () {
  "use strict";

  var waitlistForm = document.getElementById("waitlist-form");
  var waitlistMessage = document.getElementById("waitlist-message");
  var waitlistButtons = document.querySelectorAll('[data-scroll="waitlist"]');

  function scrollToWaitlist() {
    var el = document.getElementById("waitlist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      var input = document.getElementById("waitlist-email");
      if (input) {
        setTimeout(function () {
          input.focus();
        }, 400);
      }
    }
  }

  waitlistButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToWaitlist();
    });
  });

  if (waitlistForm && waitlistMessage) {
    waitlistForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = waitlistForm.querySelector('input[type="email"]');
      var value = email && email.value ? email.value.trim() : "";
      if (!value) {
        waitlistMessage.textContent = "Please enter your email.";
        waitlistMessage.classList.remove("hidden");
        return;
      }
      waitlistMessage.textContent =
        "Thanks. You are on the list. We will be in touch soon.";
      waitlistMessage.classList.remove("hidden");
      waitlistForm.reset();
    });
  }

  var ambassadorForm = document.getElementById("ambassador-form");
  var ambassadorMessage = document.getElementById("ambassador-message");
  if (ambassadorForm && ambassadorMessage) {
    ambassadorForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var emailInput = document.getElementById("ambassador-email");
      var email = emailInput && emailInput.value ? emailInput.value.trim() : "";
      if (!email) {
        ambassadorMessage.textContent = "Add your email so we can reply.";
        ambassadorMessage.classList.remove("hidden");
        return;
      }
      ambassadorMessage.textContent =
        "Got it. We will reach out when ambassador slots open.";
      ambassadorMessage.classList.remove("hidden");
      ambassadorForm.reset();
    });
  }
})();
