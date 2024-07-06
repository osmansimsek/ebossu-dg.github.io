// Rastgele sayı üreten fonksiyon
function random(num) {
    return Math.floor(Math.random() * num);
}

// Rastgele stiller üreten fonksiyon
function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(200);
    var ml = random(50);
    var dur = random(5) + 5;
    return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite;
    `;
}

// Balonları oluşturan fonksiyon
function createBalloons(num) {
    for (var i = num; i > 0; i--) {
        var balloon = $("<div></div>").addClass("balloon").attr("style", getRandomStyles());
        $("#balloon-container").append(balloon);
    }

    setTimeout(() => {
        $(window).on("click", function() {
            removeBalloons();
        });
    }, 1000);
}

// Balonları kaldıran fonksiyon
function removeBalloons() {
    $("#balloon-container").css("opacity", 0);
    setTimeout(() => {
        location.reload();
        // $("#balloon-container").remove();
        // stopAudio(); // Şarkıyı durdur
    }, 500);
}

// Şarkıyı çalmak için ses elementi oluşturma
var audio = new Audio('happy_birthday_song.mp3');

// Şarkıyı başlatan fonksiyon
function playAudio() {
    audio.play();
}

// Şarkıyı durduran fonksiyon
function stopAudio() {
    audio.pause();
    audio.currentTime = 0; // Şarkıyı başa sar
}

// Pasta ve mumlarla ilgili işlemler
$(document).ready(function () {
    $(".candles").click(function () {
        $(".flame").animate({ "opacity": 0 }, "fast");
        $(".flame2").animate({ "opacity": 0 }, "fast");
        $(".flame3").animate({ "opacity": 0 }, "fast");
        createBalloons(100);
        playAudio(); // Şarkıyı çal
    });
});
