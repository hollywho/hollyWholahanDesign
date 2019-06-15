var i = 0;
var images = [];
var time = 4000;

function changeImg(){
  
  // Build my images array
  images[0] = "images/mm-hero-image-josie-snow.jpg";
  images[1] = "images/mm-hero-image-bw-art.jpg";
  images[2] = "images/baby-xmas.jpg";

  // Set my image
  document.getElementById('slide').src = images[i];  
  
  // Check where I am my loop
  if(i < images.length -1) {
      i++;
  } else{
      i = 0;
  }

  setTimeout("changeImg()" , time); 
}

window.onload = changeImg;