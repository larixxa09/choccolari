document.addEventListener("DOMContentLoaded", () => {
  const btnProducts = document.getElementById("btn-products");
  const searchBtn = document.getElementById("search-btn");

  // Redirecionamento ao clicar no botão "CONHEÇA NOSSOS PRODUTOS"
  if (btnProducts) {
    btnProducts.addEventListener("click", () => {
      // Altere para o nome exato do seu arquivo da página de coleções
      window.location.href = "index.html";
    });
  }

  // Interação rápida na lupa de pesquisa
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      const busca = prompt("O que você gostaria de encontrar na Choccolari?");
      if (busca && busca.trim() !== "") {
        window.location.href = `index.html?busca=${encodeURIComponent(busca.trim())}`;
      }
    });
  }
});
