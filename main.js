(function () {
    "use strict";
    // Xử lý menu
    const menuToggle = document.getElementById('menu-toggle');
    const menuList = document.getElementById('menu-list');
    
    if (menuToggle && menuList) {
        menuToggle.addEventListener('click', () => {
            menuList.classList.toggle('d-none');
        });
    }
    
    // Xử lý nút "Read more"
    const readMoreBtn = document.querySelector('.btn-post');
    if (readMoreBtn) {
        readMoreBtn.addEventListener('click', () => {
            alert("Cảm ơn bạn đã quan tâm! Trang chi tiết đang được xây dựng.");
        });
    }

    // Xử lý các nút "Book this tour"
    const bookButtons = document.querySelectorAll('.btn-product');
    bookButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            alert(`Bạn đã chọn tour số ${index + 1}. Chức năng đặt tour sẽ sớm có mặt!`);
        });
    });

    // Tạo nút "Back to top"
    const backToTopBtn = document.createElement('button');
    backToTopBtn.textContent = "↑";
    backToTopBtn.className = "back-to-top";
    Object.assign(backToTopBtn.style, {
        position: "fixed",
        bottom: "30px",
        right: "30px",
        padding: "10px 15px",
        fontSize: "20px",
        borderRadius: "50%",
        backgroundColor: "#333",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        display: "none",
        zIndex: "999"
    });
    document.body.appendChild(backToTopBtn);

    // Hiện nút khi cuộn
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    });

    // Cuộn lên đầu trang
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

})();
