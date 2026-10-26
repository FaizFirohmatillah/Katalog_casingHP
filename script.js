// Membuka Modal Detail Brand (Logo Spigen)
const brandSpigen = document.getElementById('brand-spigen');
const brandModal = document.getElementById('brand-modal');
const closeBrand = document.getElementById('close-brand');

brandSpigen.addEventListener('click', () => {
    brandModal.style.display = 'flex';
});

closeBrand.addEventListener('click', () => {
    brandModal.style.display = 'none';
});

// Membuka Modal Detail Produk
const productModal = document.getElementById('product-modal');
const closeProduct = document.getElementById('close-product');

function openProductModal(title, desc, price, imgSrc) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = desc;
    document.getElementById('modal-price').innerText = price;
    document.getElementById('modal-img').src = imgSrc;
    
    productModal.style.display = 'flex';
}

closeProduct.addEventListener('click', () => {
    productModal.style.display = 'none';
});

// Menutup modal jika user klik di luar kotak modal
window.addEventListener('click', (event) => {
    if (event.target === brandModal) {
        brandModal.style.display = 'none';
    }
    if (event.target === productModal) {
        productModal.style.display = 'none';
    }
});