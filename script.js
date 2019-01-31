const current = document.querySelector('#current');
const images = document.querySelectorAll('.images img');
const opacity = 0.5;
//default opacity for the first image
images[0].style.opacity = opacity;


images.forEach(img => 
    //for each image run function on click
    img.addEventListener('click', imgClick));

    function imgClick(e) {

        //resets the opacity
        images.forEach(img => (img.style.opacity = 1));
        //changed current image to clicked image
        current.src = e.target.src;

        //change the opacity
        e.target.style.opacity = opacity;
    }
