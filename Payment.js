document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const packageType = urlParams.get('package');
    const priceElement = document.getElementById('total-price');
    
    let price;
    switch (packageType) {
        case 'free':
            price = '0$';
            break;
        case 'professional':
            price = '10$';
            break;
        case 'basic':
            price = '3$';
            break;
        default:
            price = '0$';
    }
    
    priceElement.textContent = `Total: ${price}`;

    // Retrieve card details from localStorage
    const cardDetails = JSON.parse(localStorage.getItem('cardDetails'));
    if (cardDetails) {
        const cardInfoElement = document.getElementById('card-info');
        cardInfoElement.innerHTML = `
            <p>Card Number: ${cardDetails.cardNumber}</p>
            <p>Cardholder Name: ${cardDetails.cardholderName}</p>
            <p>Valid Thru: ${cardDetails.validThru}</p>
        `;
    }

    // Erase card details function
    document.getElementById('erase-card').addEventListener('click', () => {
        localStorage.removeItem('cardDetails');
        document.getElementById('card-info').innerHTML = '';
    });

    // Pay now button function
    document.getElementById('pay-now').addEventListener('click', () => {
        alert('Thank you for your payment!');
        window.location.href = 'Home.html';
    });
});
