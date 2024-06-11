function redirectToPayment(packageType) {
    const urlParams = new URLSearchParams();
    urlParams.append('package', packageType);
    window.location.href = `Payment.html?${urlParams.toString()}`;
}
