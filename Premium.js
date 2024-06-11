function redirectToPayment(packageType) {
    const urlParams = new URLSearchParams();
    urlParams.append('package', packageType);
    window.location.href = `payment.html?${urlParams.toString()}`;
}
