// Menunggu sampai seluruh konten halaman (HTML, CSS) selesai dimuat
document.addEventListener('DOMContentLoaded', () => {

    // 1. Inisialisasi AOS (Animate On Scroll) Library
    AOS.init({
        duration: 800,   // Durasi animasi dalam milidetik (0.8 detik)
        easing: 'ease-in-out', // Jenis kurva animasi
        once: true,      // Animasi hanya akan berjalan sekali saat scroll
        offset: 100,     // Jarak trigger animasi sebelum elemen terlihat
    });


    // 2. Efek keren pada navigasi saat di-scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Saat di-scroll, beri shadow yang lebih tebal
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            // Kembali ke shadow semula jika di paling atas
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });


    // 3. Fungsi interaktif untuk keranjang belanja
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    const cartCounter = document.querySelector('.cart-counter');
    let cartItemCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Tambah jumlah item
            cartItemCount++;
            
            // Update tampilan angka di ikon keranjang
            cartCounter.textContent = cartItemCount;
            cartCounter.style.transform = 'scale(1.3)'; // Efek membesar

            // Beri feedback visual ke pengguna
            button.textContent = 'Ditambahkan!';
            button.style.backgroundColor = '#2ecc71'; // Warna hijau sukses

            // Kembalikan ke semula setelah beberapa saat
            setTimeout(() => {
                button.textContent = 'Tambah ke Keranjang';
                button.style.backgroundColor = 'var(--secondary-color)';
                cartCounter.style.transform = 'scale(1)';
            }, 1500); // 1.5 detik
            // Variabel untuk menyimpan item keranjang
let keranjang = [];

function tambahKeKeranjang(namaProduk, harga) {
    // 1. Tambahkan item baru ke array keranjang
    keranjang.push({
        nama: namaProduk,
        harga: harga,
        kuantitas: 1
    });

    // 2. Hitung total item
    let totalItem = keranjang.length;

    // 3. Perbarui tampilan di HTML
    document.getElementById('keranjang-jumlah').innerText = totalItem;

    console.log(keranjang); // Cek isi keranjang di console
    alert(namaProduk + " telah ditambahkan ke keranjang!");
}
        });
    });
});
