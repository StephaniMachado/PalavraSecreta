let palavraSecreta = '';
let letrasAdivinhadas = [];
let espacos = '';

function definirPalavra() {
    const inputPalavra = document.getElementById('palavraSecreta');
    palavraSecreta = inputPalavra.value.toLowerCase(); // Converte a palavra secreta para minúsculas
    letrasAdivinhadas = [];
    espacos = '_ '.repeat(palavraSecreta.length);
    document.getElementById('palavra-secreta').innerText = 'Palavra definida. Comece a adivinhar!';
    document.getElementById('espacos').innerText = espacos.trim();

    // Alterar o tipo do campo para "password" após definir a palavra
    inputPalavra.type = 'password';
}

function adivinhar() {
    const inputLetra = document.getElementById('letra').value.toLowerCase(); // Converte a letra adivinhada para minúscula
    const mensagensDiv = document.getElementById('mensagens');

    // Verifica se foi inserida apenas uma letra
    if (inputLetra.length === 1 && /^[a-zA-Z]$/.test(inputLetra)) {
        if (!letrasAdivinhadas.includes(inputLetra)) {
            letrasAdivinhadas.push(inputLetra);

            if (palavraSecreta.includes(inputLetra)) {
                espacos = '';
                for (let letra of palavraSecreta) {
                    espacos += letrasAdivinhadas.includes(letra) ? letra + ' ' : '_ ';
                }
                document.getElementById('espacos').innerText = espacos.trim();

                // Exibe a mensagem ao acertar uma letra
                mensagensDiv.innerText = 'Parabéns, letra adivinhada!';

                // Verifica se a palavra foi completamente adivinhada
                if (!espacos.includes('_')) {
                    mensagensDiv.innerText = 'Parabéns! Você adivinhou a palavra: ' + palavraSecreta;
                }
            } else {
                mensagensDiv.innerText = 'Ops! A letra não está na palavra.';
            }
        } else {
            mensagensDiv.innerText = 'Você já adivinhou essa letra.';
        }
    } else {
        mensagensDiv.innerText = 'Por favor, insira uma única letra válida.';
    }
    
    document.getElementById('letra').value = ''; // Limpa o campo de input
}

// Limita o input para aceitar apenas uma letra no campo de adivinhar
document.getElementById('letra').setAttribute('maxlength', '1');
