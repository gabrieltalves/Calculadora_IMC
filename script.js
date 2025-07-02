// Seleciona os elementos do formulário e da área de resultado
const form = document.getElementById('imc-form');
const resultadoDiv = document.getElementById('resultado');

// Adiciona um "ouvinte de evento" para o envio do formulário
form.addEventListener('submit', function(event) {
    // Impede o comportamento padrão do formulário (que é recarregar a página)
    event.preventDefault();

    // Seleciona os campos de input de peso e altura
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');

    // Converte os valores dos inputs para números de ponto flutuante (decimais)
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    // Validação: verifica se os valores são números válidos e positivos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoDiv.innerHTML = '<p>Por favor, insira valores válidos para peso e altura.</p>';
        resultadoDiv.className = 'perigo'; // Adiciona classe de erro
        return; // Para a execução da função aqui
    }

    // Calcula o IMC: peso / (altura * altura)
    const imc = peso / (altura * altura);

    // Formata o IMC para ter apenas duas casas decimais
    const imcFormatado = imc.toFixed(2);

    // Determina a classificação do IMC
    let classificacao = '';
    let classeCss = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
        classeCss = 'alerta';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal';
        classeCss = 'normal';
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
        classeCss = 'alerta';
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = 'Obesidade Grau I';
        classeCss = 'perigo';
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = 'Obesidade Grau II';
        classeCss = 'perigo';
    } else {
        classificacao = 'Obesidade Grau III';
        classeCss = 'perigo';
    }

    // Exibe o resultado na tela
    resultadoDiv.innerHTML = `Seu IMC é <strong>${imcFormatado}</strong>. Classificação: <strong>${classificacao}</strong>.`;
    resultadoDiv.className = classeCss; // Aplica a classe de cor correspondente
});