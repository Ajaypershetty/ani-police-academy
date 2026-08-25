document.addEventListener("DOMContentLoaded", () => {

  // ==============================
  // USER LOGIN & LOGOUT
  // ==============================

  const loginForm = document.querySelector("#loginForm, .login-form");
  const loginPage = document.querySelector("#loginPage, .login-page");
  const dashboard = document.querySelector("#dashboard, .dashboard");
  const logoutBtn = document.querySelector("#logoutBtn, .logout-btn");

  // Check whether the user is already logged in
  const savedUser = localStorage.getItem("aniUser");

  if (savedUser && loginPage && dashboard) {
    loginPage.style.display = "none";
    dashboard.style.display = "block";
  }

  // Login
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const nameInput = loginForm.querySelector(
        'input[type="text"], input[type="email"]'
      );

      const userName = nameInput?.value.trim() || "Student";

      localStorage.setItem("aniUser", userName);

      if (loginPage) loginPage.style.display = "none";
      if (dashboard) dashboard.style.display = "block";

      showMessage(`Welcome to ANI Police Academy, ${userName}! 🎉`);
    });
  }

  // Logout
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("aniUser");

      if (dashboard) dashboard.style.display = "none";
      if (loginPage) loginPage.style.display = "block";

      showMessage("You have been logged out successfully.");
    });
  }


  // ==============================
  // BUTTON NAVIGATION
  // ==============================

  document.querySelectorAll("[data-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;

      document.querySelectorAll(".page, .section").forEach((page) => {
        page.style.display = "none";
      });

      const target = document.getElementById(targetId);
      if (target) {
        target.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });


  // ==============================
  // QUIZ OPTION SELECTION
  // ==============================

  document.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", () => {
      const question = option.closest(".question, .quiz-question");

      if (question) {
        question.querySelectorAll(".option").forEach((item) => {
          item.classList.remove("selected");
        });
      }

      option.classList.add("selected");
    });
  });


  // ==============================
  // SIMPLE MESSAGE FUNCTION
  // ==============================

  function showMessage(message) {
    let messageBox = document.querySelector(".ani-message");

    if (!messageBox) {
      messageBox = document.createElement("div");
      messageBox.className = "ani-message";
      document.body.appendChild(messageBox);
    }

    messageBox.textContent = message;
    messageBox.classList.add("show");

    setTimeout(() => {
      messageBox.classList.remove("show");
    }, 3000);
  }

});
