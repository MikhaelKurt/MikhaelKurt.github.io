// Array teks yang akan dipilih secara acak
const randomTexts = [
    "Plsssss...",
    "Can you consider?",
    "yess????",
    "Reallyyy pleaaaseeee...?",
    "Nooooo....."
];

// Counter untuk melacak berapa kali tombol "No" telah diklik
let noButtonClickCount = 0;

// Menambahkan event listener untuk tombol "No"
document.getElementById('noButton').addEventListener('click', function() {
    // Mendapatkan tombol "Yes"
    var yesButton = document.getElementById('yesButton');
    
    // Mendapatkan ukuran saat ini dari tombol "Yes"
    var currentWidth = yesButton.offsetWidth;
    var currentHeight = yesButton.offsetHeight;
    
    // Menambah ukuran tombol "Yes"
    yesButton.style.width = (currentWidth + 50) + 'px';
    yesButton.style.height = (currentHeight + 50) + 'px';
    
    // Memilih teks secara acak dari array
    var randomText = randomTexts[Math.floor(Math.random() * randomTexts.length)];
    
    // Menampilkan teks acak di halaman
    var randomTextElement = document.getElementById('randomText');
    if (!randomTextElement) {
        randomTextElement = document.createElement('p');
        randomTextElement.id = 'randomText';
        document.body.appendChild(randomTextElement);
    }
    randomTextElement.textContent = randomText;
    
    // Menambah counter klik tombol "No"
    noButtonClickCount++;
    
    // Jika tombol "No" diklik 10 kali, ubah ukuran tombol "Yes" untuk memenuhi layar
    if (noButtonClickCount >= 10) {
        yesButton.style.width = '100vw';
        yesButton.style.height = '100vh';
        yesButton.style.fontSize = '3em'; // Sesuaikan ukuran font agar sesuai dengan ukuran tombol
    }

    // Mengubah GIF menjadi "sad.gif"
    var startGif = document.getElementById('startGif');
    startGif.src = 'sad.gif';
});

// Menambahkan event listener untuk tombol "Yes"
document.getElementById('yesButton').addEventListener('click', function() {
    // Mengambil elemen audio
    var backgroundMusic = document.getElementById('backgroundMusic');
    
    // Mengubah konten halaman menjadi "Yayyy" dan menyertakan elemen audio
    document.body.innerHTML = '<h1>Yayyy</h1><img src="Tes.gif" alt="Valentine GIF" id="valentineGif">';
    document.body.appendChild(backgroundMusic);
    
    // Menampilkan GIF
    var valentineGif = document.getElementById('valentineGif');
    if (valentineGif) {
        valentineGif.style.display = 'block';
        valentineGif.style.width = '300px'; // Sesuaikan ukuran GIF agar tidak memenuhi layar
        valentineGif.style.height = 'auto'; // Pertahankan rasio aspek GIF
    } else {
        console.error('Element with ID valentineGif not found.');
    }
});

// Menambahkan event listener untuk tombol "Play Music"
document.getElementById('playMusicButton').addEventListener('click', function() {
    var backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();
});