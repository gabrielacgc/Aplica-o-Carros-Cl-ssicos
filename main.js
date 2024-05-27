// Pesquisa as informações sobre Carro Clássico 

function pesquisar( ) {
    // recupera o valor do input    
        let nome = document.getElementById('nome').value;
    // pesquisa no banco de dados as informações o carro

// verifica se o campo foi preenchido
if (nome != '') {
     // converte para minusculas 
    nome = nome.toLowerCase();

     
        // let achou = dados.get(nome);
         
        // criar um for para comparar o nome dos carros e em seguida recuperar a informação

        // transforma a key em letras minusculas e o método includes verifica se a string contém o texto que queremos pesquisar

        let achou = null; 

        for (const [key, value] of dados) {
            if (key.toLowerCase().includes(nome)) {
                achou = value;
                break 
            }
        } // fim do for

        
        if (achou) {
            let card =  '<div class="row mt-4" >' + 
                    '<div class="col d-flex justify-content-center">' +     
                        '<div class="card" style="width: 18rem;">' +
                        // Aparece a imagem do carro pesquisado
                        '<img src="img/' + achou[2] + '" class="card-img-top" alt="...">' +
                        '<div class="card-body">' +

                        // Aparece o nome do carro pesquisado
                            '   <h5 class="card-title"> ' + achou[3] + ' </h5>' +

                        // Aparece a descrição do carro pesquisado     
                            '   <p class="card-text"> ' + achou[0].substring(0,150) + ' </p>' +
                            '   <a href="#" class="btn btn-link" onclick="saibaMais(\'' + achou[0] + '\')"> Saiba mais... </a>' +
                            '   </div>' +
                        '</div>' +
                    '</div>';

                    // recupera uma referencia a linha onde o card será inserido

                    let info = document.getElementById("infoRow")
                    info.innerHTML = '';  // limpa as informações antigas
                    info.innerHTML = card; // insere o card na linha 
                    document.getElementById('pesquisaInfo').innerHTML = '<span class="badge rounded-pill text-bg-primary" onclick="limpaPesquisa()" >' + achou[3] + ' X</span>';
    // fim do bloco do if 
            }

// inicio do bloco senao
            else { 
        // referencia o id do toats
             const toats = document.getElementById('toastInfo'); 

        // cria uma instancia do toats
            const toatsBootstrap = bootstrap.Toast.getOrCreateInstance(toats);
            
            // exibe o toast 

            toatsBootstrap.show();

            } // fim do bloco else

            } // fim da verificação nome ---- bloco if nome
            

    } // fim da function pesquisar                           


    // Inicio da function Limpa Pesquisa 

    function limpaPesquisa() {
        document.getElementById('infoRow').innerHTML = '';
        document.getElementById('pesquisaInfo').innerHTML = ''; 
        document.getElementById('nome').value = '';
        
        // fazer do for na variavel dados 

    for (const[key, value] of dados) { 
        let achou = value; 

    // montar os cards com os carros 

    let card = '<div class="col mt-3 d-flex justify-content-center">' +
    '<div class="card" style="width: 18rem;">' +
    '<img src="img/' + achou[2] + '" class="card-img-top" alt="...">' +
    '    <div class="card-body">' +
    '        <h5 class="card-title fw-bold">' + achou[3] + '</h5>'+
    '        <p class="card-text">'+ achou[0].substring(0,150) +'...</p>'+
    '        <a href="#" class="btn btn-link" onclick="saibaMais(\'' + achou[0] + '\') >Saiba mais...</a>'+
    '    </div>'+
    '</div>' +
    '</div>';

    let info = document.getElementById('infoRow'); 
        info.innerHTML = info.innerHTML + card; // insere o card na linha


    } // fim do bloco FOR
    } // fim da function limparPesquisa


// function para mostrar info adicionais do carro 
    function saibaMais(chave) {
        let infoAdicionais = dados.get(chave); 
 
    let modal = new bootstrap.Modal(document.getElementById('modalInfo')); 
    let info = document.getElementById('info'); 
    let title = document.getElementById('modalTitle'); 
 
    

// adiciona informações no modal 

title.innerHTML = infoAdicionais[3]; 
info.innerHTML = ''; 
info.innerHTML = '<p>' + infoAdicionais[0] + '</p>'; 
info.innerHTML += '<p> <b>Ano de Fabricação: </b>' + infoAdicionais[1] + '</p>';

// exibe o modal na tela
modal.show();

} // fim da function saibaMais


