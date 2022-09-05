status = "";
img = "";

function preload() {
    img = loadImage("water bottle.jpg");
}

function setup() {
    canvas = createCanvas(450, 500);
    canvas.position(370, 240);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status: Detecting object";
}

function modelLoaded() {
    console.log("model Loaded");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
}

function draw() {
    image(img, 0, 0, 450, 500);
}