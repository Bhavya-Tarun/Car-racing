canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

car1_width=120;
car1_height=70;
car1_img="car1.png"
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_img="car2.png"
car2_x=10;
car2_y=100;

background_img="racing.jpg";



function add(){
    background_imgTag = new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_img;

    car1_imgTag = new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
        console.log(" car1 up");
    }
    if(keyPressed=='40'){
        down();
        console.log("car1 down");
    }
    if(keyPressed=='37'){
        left();
        console.log("car1 left");
    }
    if(keyPressed=='39'){
        right();
        console.log("car1 right");
    }
    if(keyPressed=='87'){
        w();
        console.log("car2 up-w");
    }
    if(keyPressed=='83'){
        s();
        console.log("car2 down-s");
    }
    if(keyPressed=='65'){
        a();
        console.log("car2 left-a");
    }
    if(keyPressed=='68'){
        d();
        console.log("car2 right-d");
    }
}
function up(){
    if(car1_y>=0){
        car1_y=car1_y-10;
        console.log("Up pressed "+car1_x+" =x "+car1_y+" =y");
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function s(){
    if(car2_y>=0){
        car2_y=car2_y-10;
        console.log("Up pressed "+car2_x+" =x "+car2_y+" =y");
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function down(){
    if(car1_y<=500){
        car1_y=car1_y+10;
        console.log("Down pressed "+car1_x+" =x "+car1_y+" =y");
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function w(){
    if(car2_y<=500){
        car2_y=car2_y+10;
        console.log("Down pressed "+car2_x+" =x "+car2_y+" =y");
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function left(){
    if(car1_x>=0){
        car1_x=car1_x-10;
        console.log("Left pressed "+car1_x+" =x "+car1_y+" =y");
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function a(){
    if(car2_x>=0){
        car2_x=car2_x-10;
        console.log("Left pressed "+car2_x+" =x "+car2_y+" =y");
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function right(){
    if(car1_x<=500){
        car1_x=car1_x+10;
        console.log("Right pressed "+car1_x+" =x "+car1_y+" =y");
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function d(){
    if(car2_x<=500){
        car2_x=car2_x+10;
        console.log("Right pressed "+car2_x+" =x "+car2_y+" =y");
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
