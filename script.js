const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    // Mengambil posisi dari setiap section
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Memeriksa apakah section saat ini berada di viewport
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = link.getAttribute('href');
        }
    });

    // Menghapus kelas aktif dari semua tautan dan menambahkan ke tautan yang sesuai
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });
});
