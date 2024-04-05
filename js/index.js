
function chamarServicoReceitaWS() {
    const mensagemDiv = document.getElementById("mensagem");
    const cnpj_digitado = document.getElementById("numero_cnpj").value;

    // Cria uma nova mensagem com um número antes
    const novaMensagem = " ";

    mensagemDiv.innerHTML += novaMensagem + "O número do CNPJ digitado foi: " + cnpj_digitado + "<br>";

    const urlReceitaWS = "https://cors-anywhere.herokuapp.com/https://receitaws.com.br/v1/cnpj/" + cnpj_digitado;

    fetch(urlReceitaWS)
        .then((response) => {
            if (response.ok) {
                console.log("Resposta do servidor OK<br>");
                return response.json();
            } else {
                mensagemDiv.innerHTML += novaMensagem + "Algo falhou durante o processo de envio ao servidor!<br>";
            }
        })
        .then((data) => {
            // Exibe as informações do endereço na página
            mensagemDiv.innerHTML += novaMensagem + `Razão Social: ${data.nome}<br>`;
                mensagemDiv.innerHTML += novaMensagem + `Nome Fantasia: ${data.fantasia}<br>`;
                mensagemDiv.innerHTML += novaMensagem + `Atividade Principal: ${data.atividade_principal[0].text}<br>`;
                mensagemDiv.innerHTML += novaMensagem + `Tipo: ${data.tipo}<br>`;
                mensagemDiv.innerHTML += novaMensagem + `Abertura: ${data.abertura}<br>`;
                mensagemDiv.innerHTML += novaMensagem + `Natureza Jurídica: ${data.natureza_juridica}<br>`;
                mensagemDiv.innerHTML += novaMensagem + `Logradouro: ${data.logradouro}<br>`;
                mensagemDiv.innerHTML += novaMensagem + `Número: ${data.numero}<br>`;
                mensagemDiv.innerHTML += novaMensagem + `Complemento: ${data.complemento}<br>`;
                mensagemDiv.innerHTML += novaMensagem + `Bairro: ${data.bairro}<br>`;
                mensagemDiv.innerHTML += novaMensagem + `Município: ${data.municipio}<br>`;
                mensagemDiv.innerHTML += novaMensagem + `UF: ${data.uf}<br>`;
                mensagemDiv.innerHTML += novaMensagem + `CEP: ${data.cep}<br>`;
                mensagemDiv.innerHTML += novaMensagem + `E-mail: ${data.email}<br>`;
                mensagemDiv.innerHTML += novaMensagem + `Telefone: ${data.telefone}<br>`;
                mensagemDiv.innerHTML += novaMensagem + `Situação: ${data.situacao}<br>`;
                mensagemDiv.innerHTML += novaMensagem + `Data Situação Cadastral: ${data.data_situacao}<br>`;
                mensagemDiv.innerHTML += novaMensagem + `Capital Social: ${data.capital_social}<br>`;
            
        })
        .catch((error) => {
            mensagemDiv.innerHTML += novaMensagem + "Algo falhou durante o processo!<br>";
            console.error("Erro ao requisitar serviço em nuvem!");
        });

    contadorMensagens++; // Incrementa o contador de mensagens
}

function alternarVisibilidadeMensagens() {
    const mensagemDiv = document.getElementById("mensagem");
    // Verifica se as mensagens estão visíveis
    if (mensagemDiv.style.display === "none") {
        mensagemDiv.style.display = "block"; // Se estiverem ocultas, torna-as visíveis
    } else {
        mensagemDiv.style.display = "none"; // Se estiverem vis
    }}