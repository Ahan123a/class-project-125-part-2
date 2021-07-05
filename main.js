function setup() {
    canvas = createCanvas(550,550);
    canvas.position(900, 130);
    video = createCapture(VIDEO);
    video.position(200, 300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
nosex=0;
nosey=0;
leftwristx = 0;
rightwristx = 0;
difference = 0;

function draw() {
    word = document.getElementById("name").value;
    color = document.getElementById("col").value;
    console.log(word);
    background("#6ef5db");
    fill(color);
    stroke(color);
    textSize(difference);
    text(word,nosex,nosey);
    document.getElementById("size").innerHTML = "The size of the Text :" + difference + "px";
}

function modelLoaded() {
    console.log("Model Loaded Successfully!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);
        console.log("leftwrist=" + leftwristx + "rightwrist=" + rightwristx + "difference=" + difference);
    }
}
