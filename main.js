nose = x
nose = y
function preload(){
  mustache = loadImage('https://postimg.cc/5jCQY8Th');
}
function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function gotPoses(){
  if(Results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.Y;
    console.log("nose x =" + results[0].pose.nose.x);
    console.log("nose y =" + results[0].pose.nose.y);
  }
}
function modelLoaded(){
  console.log('PoseNet Is Inistialised');
}
function draw() {
 image(video, 0, 0, 300, 300);
 fill(255, 0, 0);
 stroke(255, 0, 0);
 circle(noseX, noseY, 20);
 image(mustache, noseX, noseY, 40, 50)
}
function take_snapshot(){
  save('myFilterImage.png')
}