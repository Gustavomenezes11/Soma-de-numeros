function somar(){
    const somacampo1 = document.getElementById('soma1');
    const somacampo2 = document.getElementById('soma2');
    const camporesultado = document.getElementById('resposta');

    //Validação dos inputs//
    if(!somacampo1.value || !somacampo2.value){
        alert('Preencha todos os campos para realizar o cálculo!');
        return;
    } 

    const valor1 = parseFloat(somacampo1.value);
    const valor2 = parseFloat(somacampo2.value);
    const soma = valor1 + valor2;
    
    //Exibição da resposta na tela//
    if(somacampo1 + somacampo2){
        camporesultado.innerHTML = `Resultado: ${soma}`;
    }
}

function botaolimpar(){

    //Limpa todos campos preenchidos, assim consegue realizar um novo cálculo//
    location.reload();
}