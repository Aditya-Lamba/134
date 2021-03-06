img = "";
status = "";
objects = [];
const music = new Audio('alarm.wav');


function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw()
{
    image(video, 0, 0, 380, 380);
    

    if(status != "")
    {   
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResult);
        for (i = 0; i < object.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Baby Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of Objects detected are : "+ objects.length;
           

            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(bojects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    else
    {
        document.getElementById("status").innerHTML = "Status : Baby Not Found!";
        music.play();
        music.loop =true;
         }

}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResult()
{
    if (error)
    {
        console.log(error);
    }
    console.log(results);
    objects = results;
}