document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
        context.fillStyle = "rgba(0, 0, 0, 0.05)"; // خلفية شبه شفافة
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "#00ff00"; // لون النص
        context.font = fontSize + "px monospace";
        
        drops.forEach((y, index) => {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            context.fillText(text, index * fontSize, y * fontSize);
            drops[index] = y > canvas.height / fontSize ? 0 : y + 1; // تحديث موقع السقوط
        });
    }

    setInterval(draw, 100);
});