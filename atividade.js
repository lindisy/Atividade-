document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário até a validação

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Feedback enviado com sucesso! Obrigado.");
       
    }
});
