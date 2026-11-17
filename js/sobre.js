document.addEventListener("DOMContentLoaded", () => {
  const btnProducts = document.getElementById("btn-products");
  const searchBtn = document.getElementById("search-btn");

  // Redireciona para a página de coleções ao clicar no CTA
  if (btnProducts) {
    btnProducts.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  // Interação rápida na lupa de pesquisa
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      const termo = prompt("O que você gostaria de buscar na Choccolari?");
      if (termo && termo.trim() !== "") {
        window.location.href = `index.html?busca=${encodeURIComponent(termo.trim())}`;
      }
    });
  }
});
