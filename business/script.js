
function datHang() {
    alert("Cảm ơn bạn đã đặt hàng!");
}

const scrollTopButton = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { 
        scrollTopButton.classList.add('visible');
    } else {
        scrollTopButton.classList.remove('visible');
    }
});
