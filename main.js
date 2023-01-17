function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/raRh4ryHF/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);    
}



random_number_r = Math.floor(Math.random() * 255) + 1;
random_number_g = Math.floor(Math.random() * 255) + 1;
random_number_b = Math.floor(Math.random() * 255) + 1;
function gotResults(error, results)
{
    var Dog = 0;
    var cat = 0;

   if (error) {
    console.error(error);
   } 
   
   else {
    console.log(results);

    document.getElementById("count_of_animal").innerHTML = 'Detected Dog - '+ Dog + '  Detcted Cat - ' + cat;
    document.getElementById("dected_voice").innerHTML = 'Detected Voice Is Of - '+results[0].label;
    document.getElementById("count_of_animal").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("dected_voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img = document.getElementById('result_img');

    if (results[0].label == "Barking") {
        img.src = 'Dog.png';
        var Dog =  Dog + 1;
    } else if (results[0].label == "Meowing") {
        img.src = 'Cat.png';
        var cat =  cat + 1;
    } else {
        img.src = 'ear.jpg';
    }
    }
    }
