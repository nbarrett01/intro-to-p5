function setup(){
    createCanvas(600,400);
    background(100,100,100);
}

function draw(){
    line(35,80,400,200);
    line(45,90,500,300);
    line(55,100,600,400);
    line(25,40,700,500);
    
    stroke(255,255,255);
    fill(255,0,0);
    rect(290,100,250,250);
    rect(150,50,150,150);
    rect(100,30,100,100);
    
    
    stroke(0,0,0);
    strokeWeight(4);
    fill(0,0,255);
    ellipse(50,250,80,80);
    ellipse(30,200,40,40);
    ellipse(25,150,20,20); 
}