var i= 0;
var images= [];

var time= 3000;

//image list
images[0]= 'img/team1.jpg';
images[1]= 'img/team2.jpg';
images[2]= 'img/team3.jpg';

//Change Image

function changeImg(){
  document.slide.src = images[i];

  //para pegar a quantidade de imagens e ser contado do zero
  if(i< images.length -1){
    i++;
  }else{
    i=0;
  }

  setTimeout("changeImg()", time); //mudar a imagem de acordo com o tempo

 

}

window.onload=changeImg;