
function subscribeNow() {
    alert("Cảm ơn đã đăng ký! Hãy kiểm tra email của bạn.");
}

function buyBook() {
    alert("Chuyển đến trang thanh toán Cookbook...");
}

function chat() {
    alert("Bắt đầu chat với bộ phận hỗ trợ...");
}

function likePost(buttonElement) {
    buttonElement.classList.toggle('liked');

    const heartIcon = buttonElement.querySelector('.fa-heart');

    if (buttonElement.classList.contains('liked')) {
        heartIcon.classList.remove('far');
        heartIcon.classList.add('fas');
    } else {
        heartIcon.classList.remove('fas');
        heartIcon.classList.add('far');
    }
}