function curtirLivro(nomeLivro) {
    alert(`Você curtiu o livro: ${nomeLivro} ❤️`);
}

const form = document.getElementById("resenhaForm");
const listaResenhas = document.getElementById("listaResenhas");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const comentario = document.getElementById("comentario").value;

    const novaResenha = document.createElement("div");
    novaResenha.classList.add("resenha");

    novaResenha.innerHTML = `
        <h4>${nome}</h4>
        <p>${comentario}</p>
    `;

    listaResenhas.prepend(novaResenha);

    form.reset();
});
