function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true}) ; 
    classify = ml5.soundclassifier('https://teachablemachine.withgoogle.com/models/BHFl_Tssv/' ,modelready) ; 
}

function modelready(){
classifier. classify(gotresult);  
}
 function gotresult(error , results){
     console.log = ('got_result')
 }