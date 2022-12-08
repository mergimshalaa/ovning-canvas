window.addEventListener('DOMContentLoaded', main);


function main() {
    const canvas = document.getElementById('canvas');
    resizeToFullScreen(canvas);
    render(canvas);
}


function render(canvas) {
    const ctx = canvas.getContext("2d");
    drawOnPage(ctx);
}

/**
 * Draws blue rectangle over fullscreen
 * @param {CanvasRenderingContext2d} ctx 
 */
function drawOnPage(ctx) {
    ctx.fillStyle = "blue"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function resizeToFullScreen(canvas) {
    setFullscreen();
    addEventListener('resize', () => {
        setFullscreen();
        render(canvas);
    });

    function setFullscreen() {
        canvas.height = window.innerHeight
        canvas.width = window.innerWidth
    }
}
