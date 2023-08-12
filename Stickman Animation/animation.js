const canvas = document.getElementById("stickmanCanvas");
const ctx = canvas.getContext("2d");

// Initial positions
let armAngle = 0;

function drawStickman() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw head
    ctx.beginPath();
    ctx.arc(200, 100, 20, 0, Math.PI * 2);
    ctx.stroke();

    // Draw body
    ctx.moveTo(200, 120);
    ctx.lineTo(200, 200);
    ctx.stroke();

    // Draw arms
    ctx.save();
    ctx.translate(200, 140);
    ctx.rotate(armAngle);
    ctx.fillRect(-5, 0, 10, 50); // Left arm
    ctx.restore();

    ctx.save();
    ctx.translate(200, 140);
    ctx.rotate(-armAngle);
    ctx.fillRect(-5, 0, 10, 50); // Right arm
    ctx.restore();

    // Draw legs
    ctx.moveTo(200, 200);
    ctx.lineTo(180, 260); // Left leg
    ctx.moveTo(200, 200);
    ctx.lineTo(220, 260); // Right leg
    ctx.stroke();
}

function animate() {
    armAngle += 0.02;
    drawStickman();
    requestAnimationFrame(animate);
}

animate();