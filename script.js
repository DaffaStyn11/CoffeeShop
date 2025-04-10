function changeColor(id) {
    // Reset semua teks warna dan efek container
    document.querySelectorAll('.desc-delivery').forEach(el => {
        el.classList.remove('active-delivery');
    });

    document.querySelectorAll('.desc-order-1').forEach(el => {
        el.classList.remove('active-container');
    });

    // Tambahkan efek hanya pada elemen yang dipilih
    const selectedText = document.getElementById(id);
    selectedText.classList.add('active-delivery');

    const selectedContainer = selectedText.closest('.desc-order-1');
    selectedContainer.classList.add('active-container');
}
function setActive(clickedBtn) {
    // Reset semua tombol dulu
    document.querySelectorAll('.btn3','.btn4','btn5').forEach(btn => {
        btn.classList.remove('active');
    });

    // Tambahkan class 'active' ke tombol yang diklik
    clickedBtn.classList.add('active');
}
function setActive(button) {
    const buttons = document.querySelectorAll('.btn3');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}