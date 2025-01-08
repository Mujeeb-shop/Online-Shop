// Cart functionality
let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.querySelector('nav ul li a[href="#cart"]').textContent = `Cart (${cartCount})`;
    });
});
