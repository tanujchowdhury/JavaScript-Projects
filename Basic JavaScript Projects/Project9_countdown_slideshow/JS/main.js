function countdown() {
    //Input from the user is stored in a varable
    var seconds = document.getElementById("seconds").value;

    //Counter that decreses by 1 each second
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds== -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}


//Show the first slide
let Slide_index = 1; 
show_Slides(Slide_index);
// Next/previous controls
function plus_Slides(n) {
    show_Slides(Slide_index += n);
}
// Thumbnail image controls
function current_Slide(n) {
  show_Slides(Slide_index = n);
}
//Function that cycles through the pictures and dots
function show_Slides(n) {
    let i;
    let Slides = document.getElementsByClassName("Slide");
    let Dots = document.getElementsByClassName("Dot");
    if (n > Slides.length) {Slide_index = 1}
    if (n < 1) {Slide_index = Slides.length}
    for (i = 0; i < Slides.length; i++) {
        Slides[i].style.display = "none";
    }
    for (i = 0; i < Dots.length; i++) {
        Dots[i].className = Dots[i].className.replace(" active", "");
    }
    Slides[Slide_index - 1].style.display = "block";
    Dots[Slide_index - 1].className += " active";
}