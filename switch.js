var characterButtons = document.querySelectorAll(".character");
characterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        var buttonClass = this.classList[0];
        console.log(buttonClass);
        switch (buttonClass) {
            case "naruto":
                var naruto = new Audio("Audio/naruto.mp3");
                naruto.play();
                break;
            case "itachi":
                var itachi = new Audio("Audio/itachi.mp3");
                itachi.play();
                break;
            case "taguro":
                var taguro = new Audio("Audio/taguro.mp3");
                taguro.play();
                break;
            case "frozen":
                var frozen = new Audio("Audio/frozen.mp3");
                frozen.play();
                break;
            case "moana":
                var moana = new Audio("Audio/moana.mp3");
                moana.play();
                break;
            case "aladdin":
                var aladdin = new Audio("Audio/aladdin.mp3");
                aladdin.play();
                break;
            
            default:
                break;
        }
    });
});
