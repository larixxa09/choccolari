document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const btnMap = document.getElementById("btn-map");

  // Envio do formulário de contato
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
      }

      alert(
        `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso para a Choccolari.`,
      );
      contactForm.reset();
    });
  }

  // Ação do botão "VER NO MAPA"
  if (btnMap) {
    btnMap.addEventListener("click", () => {
      const endereco = encodeURIComponent(
        "Rua do chocolate, 123, Vila Doce - Luminárias",
      );
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${endereco}`,
        "_blank",
      );
    });
  }
});
