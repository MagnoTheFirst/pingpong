(function($) {
    $(function() {
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
        };
        // view rendering   
        function renderPaddles() {
            $("#paddleB").css("top", pingpong.paddleB.y);
            $("#paddleA").css("top", pingpong.paddleA.y);
        }
        renderPaddles();
    });
})(jQuery);