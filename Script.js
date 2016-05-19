function initializa(){

    var elem = document.getElementById('myCanvas');

    var canvas = elem.getContext('2d');

   canvas.fillStyle="#FF0000";
   canvas.strokeStyle = "#0000AA";
   
    canvas.strokeRect(100, 100, 120, 120);
    canvas.fillRect(110, 110, 100, 100);
    canvas.clearRect(130, 130, 30, 30);

    
    
    var grd=canvas.createLinearGradient(0,0,170,0);
    grd.addColorStop(0,"red");
    grd.addColorStop(1,"blue");

    canvas.fillStyle=grd;
    canvas.fillRect(20,20,150,100);
  //  canvas.fillRect(100, 100, 200, 100);

  //drawing

    //canvas.beginPath();
}

addEventListener("load", initializa)