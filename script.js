// script.js
const audio = document.getElementById('audio');

// Cek apakah browser memerlukan interaksi untuk autoplay
window.addEventListener('load', () => {
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise
            .then(() => {
                console.log("Audio autoplay berhasil!");
            })
            .catch((error) => {
                console.log("Autoplay dicegah oleh browser. Audio dimulai sebagai mute.");
                audio.muted = true; // Mulai dengan mute
                audio.play();
            });
    }
});
