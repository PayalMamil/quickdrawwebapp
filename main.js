random_no=Math.floor((Math.random()*quick_draw_data_set.length)+1)
console.log(quick_draw_data_set[random_no]);
sketch=quick_draw_data_set[random_no];
document.getElementById("sketch").innerHTML="Sketch to be drawn"+sketch;


timer_counter=0;
timer_check="";
drawn_sketch="";
answer_holder="";
score=0;


function setup(){
    canvas=createCanvas(280,280);
    canvas.center();
    background("white");
}