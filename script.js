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
const livroForm = document.getElementById("livroForm");
const listaLivros = document.getElementById("listaLivros");

livroForm.addEventListener("submit", function(e){

    e.preventDefault();

    const titulo =
        document.getElementById("tituloLivro").value;

    const autor =
        document.getElementById("autorLivro").value;

    const categoria =
        document.getElementById("categoriaLivro").value;

    const descricao =
        document.getElementById("descricaoLivro").value;

    const novoLivro =
        document.createElement("div");

    novoLivro.classList.add("livro-comunidade");

    novoLivro.innerHTML = `
        <h3>${titulo}</h3>
        <p><strong>Autor:</strong> ${autor}</p>
        <p><strong>Categoria:</strong> ${categoria}</p>
        <p>${descricao}</p>

        <button onclick="curtirLivro('${titulo}')">
            ❤️ Curtir
        </button>

        <button onclick="comentarLivro('${titulo}')">
            💬 Comentar
        </button>
    `;

    listaLivros.prepend(novoLivro);

    livroForm.reset();
});

function comentarLivro(titulo){

    const comentario =
        prompt(`Escreva um comentário para "${titulo}"`);

    if(comentario){

        alert(
            `Comentário enviado para "${titulo}"!`
        );
    }
}
