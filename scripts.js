$("#texto").hide();
$("#texto1").hide();
$("#texto2").hide();
$("#texto3").hide();
$("#texto4").hide();
$("#texto5").hide();


jQuery(document).ready(function($){

$('#button-one').on({
     'click': function(){
         $('#img1').attr('src','hotwok.png');
         // tinderSound.play();
     }
 });

$('#button-two').on({
     'click': function(){
         $('#img2').attr('src','feelgood.png');
     }
 });

$('#button-three').on({
     'click': function(){
         $('#img3').attr('src','homebaked.png');
     }
 });

$('#button-four').on({
     'click': function(){
         $('#img4').attr('src','grill.png');
     }
 });

$('#button-five').on({
     'click': function(){
         $('#img5').attr('src','mealclub.png');
     }
 });

$('#button-six').on({
     'click': function(){
         $('#img6').attr('src','grabngo.png');
     }
 });
 });

document.getElementById("comics").addEventListener('click', first);

function first(e){
    e.stopImmediatePropagation();
    this.removeEventListener("click", first);
    document.onclick = second;

}
function second(){
    alert("Sorry you can't go back on your choice, you already paid Melba at the counter");
}



function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        var end = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                 window.location = "redirect.html";
                // clearInterval(end);
            }
        }, 1000);

    $("#button-one").click(function(){
    clearInterval(end);
    $('#wrap').append('<embed id="embed_player" src="tinder.mp3" autostart="true" hidden="true"></embed>');
    $("#texto").show();
});
    $("#button-two").click(function(){
    clearInterval(end);
    $('#wrap').append('<embed id="embed_player" src="tinder.mp3" autostart="true" hidden="true"></embed>');
    $("#texto1").show();
});
    $("#button-three").click(function(){
    clearInterval(end);
    $('#wrap').append('<embed id="embed_player" src="tinder.mp3" autostart="true" hidden="true"></embed>');
    $("#texto2").show();
});
    $("#button-four").click(function(){
    clearInterval(end);
    $('#wrap').append('<embed id="embed_player" src="tinder.mp3" autostart="true" hidden="true"></embed>');
    $("#texto3").show();
});
    $("#button-five").click(function(){
    clearInterval(end);
    $('#wrap').append('<embed id="embed_player" src="tinder.mp3" autostart="true" hidden="true"></embed>');
    $("#texto4").show();
});
    $("#button-six").click(function(){
    clearInterval(end);
    $('#wrap').append('<embed id="embed_player" src="tinder.mp3" autostart="true" hidden="true"></embed>');
    $("#texto5").show();
});
}
 

window.onload = function () {
   var fiveMinutes = 60,
   display = document.querySelector('#time');
   startTimer(fiveMinutes, display);
};





