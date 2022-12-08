window.addEventListener('DOMContentLoaded', main);

/** Start of the program */
function main() {
    const canvas = document.getElementById('canvas');
    resizeToFullScreen(canvas);
    render(canvas);
}

/**
 * Draws on everything on the canvas.
 * @param {HTMLCanvasElement} canvas 
 */
function render(canvas) {
    const ctx = canvas.getContext("2d");
    drawOnPage(ctx);
    drawRectInTheMiddle(ctx)
}


/**
 * Draws a rectangle of the midpage on canvas
 * @param {CanvasRenderingContext2D} ctx 
 */
function drawRectInTheMiddle(ctx) {
    const canvasWidth = ctx.canvas.width;
    const canvasHeight = ctx.canvas.height;
    const y = canvasWidth * 0.5 - 200;
    const x = canvasHeight * 0.5 - 200;
    ctx.fillStyle = ('yellow');
    ctx.fillRect(y, x, 400, 400)
}

/**
 * Draws blue rectangle over fullscreen
 * @param {CanvasRenderingContext2d} ctx 
 */
function drawOnPage(ctx) {
    ctx.fillStyle = "blue"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


/**
 * Resize canvas to fullscreen & when window is resized by user
 * @param {HTMLCanvasElement} canvas 
 */
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
