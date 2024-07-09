document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartElement = document.getElementById('cart');
    const checkoutButton = document.getElementById('checkout');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const paymentForm = document.getElementById('payment-form');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            const productElement = event.target.parentElement;
            const productId = productElement.getAttribute('data-id');
            const productPrice = parseFloat(productElement.getAttribute('data-price'));
            const productName = productElement.querySelector('h2').textContent;

            const product = { id: productId, name: productName, price: productPrice };

            cart.push(product);
            updateCart();
        });
    });

    checkoutButton.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Tu carrito está vacío.');
        } else {
            modal.style.display = 'block';
        }
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', event => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    paymentForm.addEventListener('submit', event => {
        event.preventDefault();
        alert('Pago realizado con éxito. Gracias por tu compra!');
        cart.length = 0;
        updateCart();
        modal.style.display = 'none';
    });

    function updateCart() {
        cartElement.innerHTML = '';
        if (cart.length === 0) {
            cartElement.textContent = 'Tu carrito está vacío.';
        } else {
            cart.forEach(product => {
                const productElement = document.createElement('div');
                productElement.textContent = `${product.name} - S/${product.price}`;
                cartElement.appendChild(productElement);
            });
        }
    }
});
