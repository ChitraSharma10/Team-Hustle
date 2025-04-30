// Swiper Init
AOS.init();

const swiper = new Swiper('.mySwiper', { loop: true, autoplay: { delay: 3000 } });
const customSlider = new Swiper('.customSwiper', { loop: true });

function openPopup(id) {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById(id).style.display = 'block';
}
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.querySelectorAll('.popup-content').forEach(p => p.style.display = 'none');
}

{/* <img src="https://cdn-icons-png.flaticon.com/512/702/702797.png" alt="Logo" width="30" class="me-2">
                DesertEscape */}

// for toggle
function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
}

// Interactive setion popup

function openModal(id) {
    document.getElementById('modal' + id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById('modal' + id).style.display = 'none';
}

// Close modal when clicking outside the modal-content
window.onclick = function (event) {
    for (let i = 0; i < 3; i++) {
        const modal = document.getElementById('modal' + i);
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
