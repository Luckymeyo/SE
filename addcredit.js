document.getElementById('add-card-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cardNumber = document.getElementById('card-number').value;
    const cardholderName = document.getElementById('cardholder-name').value;
    const validThru = document.getElementById('valid-thru').value;
    const securityCode = document.getElementById('security-code').value;

    const cardDetails = {
        cardNumber: cardNumber,
        cardholderName: cardholderName,
        validThru: validThru,
        securityCode: securityCode
    };

    localStorage.setItem('cardDetails', JSON.stringify(cardDetails));
    window.location.href = 'Payment.html';
});
