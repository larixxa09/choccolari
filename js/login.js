document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const senhaInput = document.getElementById("senha");
  const togglePasswordBtn = document.getElementById("toggle-password");
  const forgotPasswordLink = document.getElementById("forgot-password");
  const btnGoogle = document.getElementById("btn-google");

  // Alternar visibilidade da senha (olho)
  if (togglePasswordBtn && senhaInput) {
    togglePasswordBtn.addEventListener("click", () => {
      const isPassword = senhaInput.getAttribute("type") === "password";
      senhaInput.setAttribute("type", isPassword ? "text" : "password");
      togglePasswordBtn.style.opacity = isPassword ? "1" : "0.65";
    });
  }

  // Validação e envio do formulário de login
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = document.getElementById("email").value.trim();
      const senha = senhaInput.value.trim();

      if (!email || !senha) {
        alert("Por favor, preencha seu e-mail e sua senha.");
        return;
      }

      alert(`Bem-vindo de volta à Choccolari, ${email}!`);
      // Redireciona para a página inicial após o login
      window.location.href = "inicio.html";
    });
  }

  // Recuperação de senha
  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener("click", (event) => {
      event.preventDefault();
      const emailRecuperacao = prompt(
        "Digite o e-mail cadastrado para receber o link de redefinição de senha:",
      );
      if (emailRecuperacao && emailRecuperacao.trim() !== "") {
        alert(
          `Enviamos instruções de recuperação para ${emailRecuperacao.trim()}.`,
        );
      }
    });
  }

  // Simulação de login com Google
  if (btnGoogle) {
    btnGoogle.addEventListener("click", () => {
      alert("Conectando com sua conta Google Choccolari...");
    });
  }
});
