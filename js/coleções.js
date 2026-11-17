document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".collection-card");
  const bagCountElement = document.getElementById("bag-count");
  const searchBtn = document.getElementById("search-btn");
  let bagCount = 0;

  // Interação ao clicar nas coleções
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const collectionName = card.getAttribute("data-collection");

      // Efeito visual sutil de seleção e incremento opcional na sacola
      bagCount++;
      bagCountElement.textContent = bagCount;

      // Feedback no console (pode ser substituído por redirecionamento ou modal)
      console.log(`Coleção selecionada: ${collectionName}`);
    });
  });

  // Interação simples para o botão de busca
  searchBtn.addEventListener("click", () => {
    const termo = prompt("Qual coleção ou sabor Choccolari você procura?");
    if (termo) {
      const filtro = termo.toLowerCase();
      cards.forEach((card) => {
        const texto = card.innerText.toLowerCase();
        card.style.opacity = texto.includes(filtro) ? "1" : "0.3";
      });
    } else {
      cards.forEach((card) => (card.style.opacity = "1"));
    }
  });
});
