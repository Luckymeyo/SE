document.getElementById('card-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('card-number').value;
    const cardholderName = document.getElementById('cardholder-name').value;
    const validThru =
