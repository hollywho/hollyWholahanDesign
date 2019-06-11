<script> 
    var i = 0;
    var images = [];
    var time = 4000;
    images[0] = "images/mm-hero-image-josie-snow.jpg";
    images[1] = "images/mm-hero-image-bw-art.jpg";
    images[2] = "images/baby-xmas.jpg";


    function changeImg(){
      document.slide.src = images[i];

      if(i < images.length -1){
      i++;
  } else{
      i = 0;

  }

    setTimeout("changeImg()" , time); 
    }
  
  window.onload = changeImg;
  </script> 