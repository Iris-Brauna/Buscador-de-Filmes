function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um filme ou genero</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(section); // Para fins de depuração, verifica se a seção foi encontrada

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    let titulo = "";
    let genero = "";
    let tags = "";

    // Itera sobre cada filme nos dados
    for (let dado of dados) {
        // Verifica se o objeto tem as propriedades necessárias antes de acessá-las
        if (dado && dado.titulo && dado.genero && dado.tags) {
            titulo = dado.titulo.toLowerCase();
            genero = dado.genero.toLowerCase();
            tags = dado.tags.toLowerCase();
            if (titulo.includes(campoPesquisa) || genero.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
                resultados += `
                <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="https://pt.wikipedia.org/wiki/${dado.link.replace(/ /g, "_")}" target="_blank">mais informações</a>
                </div>
            `;
            }
        }

        if (!resultados) {
            resultados = "<P>Nada foi encontrado</p>"
        }

        // Atribui o HTML gerado para a seção de resultados
        section.innerHTML = resultados;
    }
}


// console.log(dados); // Para verificar o conteúdo do array dados


