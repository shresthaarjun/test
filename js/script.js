


var myImage = document.getElementById("slideShowImage");

	var imageArray = ["images/image-1.jpg","images/slider.jpg","images/slider1.jpg","images/4.jpg", ] ;

	var imageIndex = 0;

	function changeImage(){
		myImage.setAttribute("src",imageArray[imageIndex]);
		imageIndex++;
		if(imageIndex >= imageArray.length){
			imageIndex = 0;
		}
	}

	
	setInterval(changeImage, 2000);