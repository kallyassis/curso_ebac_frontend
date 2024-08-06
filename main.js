const form = document.getElementById('form-deposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(event){
    let formEvalido = false;
    event.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta')
    const valorDeposito = document.getElementById('valor-deposito')
    const menssagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;

    formEvalido = validaNome(nomeBeneficiario.value)
    if (formEvalido) {

        const containerMensagenSucesso = document.querySelector('.success-message');
        containerMensagenSucesso.innerHTML = menssagemSucesso;
        containerMensagenSucesso.style.display = 'block'

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

nomeBeneficiario.addEventListener('keyup', function(event) {
    console.log(event.target.value);
    formEvalido = validaNome(event.target.value)

    if (!formEvalido) {
        nomeBeneficiario.classList.add('error');
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        nomeBeneficiario.style.border = '';
        document.querySelector('.error-message').style.display = 'none';
    }
});