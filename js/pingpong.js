(function($) {
    $(function() {
        init();
        // alert a message     
        alert("Welcome to the Ping Pong battle.");
        var pingpong = {
            paddleA: {
                x: 50,
                y: 100,
                width: 20,
                heigth: 70
            },
            paddleB: {
                x: 320,
                y: 100,
                width: 20,
                heigth: 70
            },
            playground: {
                offsetTop: $("#playground").offsetTop(),
            }
        };

        function handleMouseInputs() {
            // run the game when mouse moves in the playground.   
            $('#playground').mouseenter(function() {
                pingpong.isPaused = false;
            });
            // pause the game when mouse moves out the playground.   
            $('#playground').mouseleave(function() {
                pingpong.isPaused = true;
            });
            // calculate the paddle position by using the mouse position.
            $('#playground').mousemove(function(e) {
                pingpong.paddleB.y = e.pageY - pingpong.playground.offsetTop;
            });
        }
        // view rendering   
        function renderPaddles() {
            renderPaddles();
            window.requestAnimationFrame(render);
        }

        function init() { // view rendering   
            window.requestAnimationFrame(render);
            // inputs   
            handleMouseInputs();
        }
    });
})(jQuery);