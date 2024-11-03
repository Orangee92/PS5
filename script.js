function playSound() {
    const sound = document.getElementById('hover-sound');
    sound.currentTime = 0; // Restart sound on each hover
    sound.play();
}

function navigateTo(page) {
    window.location.href = page; // Change to the desired HTML file
}
