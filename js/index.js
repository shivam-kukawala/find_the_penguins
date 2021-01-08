$(document).ready( function() {
    
window.onbeforeunload = function (e) {
    window.onunload = function () {
            window.localStorage.isMySessionActive = "false";
    }
    return undefined;
};

window.onload = function () {
            window.localStorage.isMySessionActive = "true";
};    
    
    document.getElementById("score").innerHTML = "score 0";
    
  if (typeof localStorage["highScore"] !== 'undefined') {
  $("#highscore").text('high score' + " " + localStorage["highScore"]);}
  else {
    localStorage["highScore"] = 0;
    $("#highscore").text('high score 0');
  }    
    
    var myArray = ["penguin1", "penguin2", "penguin3", "penguin4", "penguin5", "penguin6", "penguin7", "penguin8", "yeti"];
    
    var shu = shuffle(myArray);
    createDiv(shu);
    
    function createDiv(shu){
        for(var i=0; i<=shu.length;i++){
            var newDiv = document.createElement("div");
            newDiv.setAttribute("id", shu[i]); 
            newDiv.setAttribute("onClick", "replyClick(" + shu[i] + ")");
            document.getElementById("gameholder").appendChild(newDiv);
        }

    }
    
    function shuffle(arra1) {
        var ctr = arra1.length, temp, index;

    // While there are elements in the array
        while (ctr > 0) {
    // Pick a random index
            index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
            ctr--;
    // And swap the last element with it
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
        
    }    
    
    

    //This code will run after your page loads

    
    $("#yeti").mousedown(function() {
        var audioElement = new Audio("./beep.mp3");
        audioElement.play();        
        document.getElementById("score").innerHTML = "score " + 0;
        setTimeout(function(){ alert("Yaaar"); }, 500);
//        alert("Yaaar");
        setTimeout(function(){ location.reload(); }, 2000);
        
    });
    
//    $(window).unload(function(){
//        localStorage["highScore"] = 0;
//    });
    
});