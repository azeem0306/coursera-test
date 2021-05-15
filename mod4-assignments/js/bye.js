(function (window) {
    var speakword = "Good Bye";
    function speak (name) {
        console.log(speakword + " " + name);
    };
    window.byeSpeaker = speak; // Passing object to the window

})(window);