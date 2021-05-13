function enviarForm() {
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var titulo = document.getElementById('titulo').value;
    var mensagem = document.getElementById('mensagem').value;
    if (!nome || !telefone || !titulo || !mensagem) return alert("Preencha corretamente o formulário!");
    alert("Mensagem enviada! \n Obrigado " + nome + " pelo seu contato!");
    location.reload();
}