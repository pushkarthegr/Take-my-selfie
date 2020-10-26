var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition;

function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = content;

    if(content == "take my selfie"){
        speak();
    }
}

function speak(){
    synth = window.speechSynthesis;

    var text = "Taking your selfie in five seconds";
    utter = new SpeechSynthesisUtterance(text);

    synth.speak(utter);
    Webcam.attach(camera);

    setTimeout(function(){
        takesnapshot();
    },5000);
}
var camera = document.getElementById("camera");

Webcam.set({
    width:350,
    height:350,
    image_format:"jpeg",
    jpeg:90
});

function takesnapshot(){
    Webcam.snap(function(img){
        document.getElementById("result").innerHTML = "<img src="+img+" id='webcamshot'>";
    });
    save();
}
function save(){
    image = document.getElementById("webcamshot").src;
    link = document.getElementById("link");
    link.href = image;
    link.click();
}