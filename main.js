Webcam.attach("#camera");
Webcam.set({
    image_format:"jpg",jpg_quality: 90 ,width:500,height:250
});
function takesnapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML="<img id='selfie' src='"+data_url+"'>";
    });
}
console.log("ml5_version",ml5.version)
classifer=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/j7YPlbwx3/model.json',model_loaded);
function model_loaded(){
console.log("your model has been loaded");
}
function check(){
    img=document.getElementById("selfie");
    classifer.classify(img,gotResult);
}
/*function gotResult(error,results){
    console.log("check");
    if(error){
        //console.error(error);
    }
    else{
        console.log(results);
    }
}
*/
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence
        ;

    }
}