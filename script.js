function curtirLivro(nomeLivro) {
    alert("Você curtiu: " + nomeLivro + " ❤️");
}

const formResenha = document.getElementById("resenhaForm");
const listaResenhas = document.getElementById("listaResenhas");

formResenha.addEventListener("submit", function(e) {

    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const comentario = document.getElementById("comentario").value;

    const div = document.createElement("div");

    div.classList.add("resenha");

    div.innerHTML = `
        <h4>${nome}</h4>
        <p>${comentario}</p>
    `;

    listaResenhas.prepend(div);

    formResenha.reset();
});

document
.getElementById("formCadastro")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Cadastro realizado com sucesso!"
    );

});
