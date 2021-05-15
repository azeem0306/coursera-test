(function (window) {
    var speakword = "Hello";
    function speak (name) {
        console.log(speakword + " " + name);
    };
    window.helloSpeaker = speak; // Passing object to the window


})(window);