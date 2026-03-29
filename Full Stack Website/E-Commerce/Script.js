document.addEventListener('DOMContentLoaded', function () {
    const cartCountEl = document.getElementById('cart-count');
    const storageKey = 'ecommerceCartCount';

    if (!cartCountEl) return;

    function getCartCount() {
        return parseInt(localStorage.getItem(storageKey), 10) || 0;
    }

    function setCartCount(count) {
        localStorage.setItem(storageKey, count);
        cartCountEl.textContent = count;
    }

    setCartCount(getCartCount());

    document.querySelectorAll('.pro a').forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const newCount = getCartCount() + 1;
            setCartCount(newCount);
            button.style.transform = 'scale(0.97)';
            setTimeout(function () {
                button.style.transform = '';
            }, 120);
        });
    });
});