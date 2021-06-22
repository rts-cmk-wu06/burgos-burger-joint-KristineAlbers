    document.querySelector('main').addEventListener('click', function(){
        console.log('Main clicked');
    }, {
        capture: false
    })

    function setGalleryImage (event){
        event.stopPropagation();
        if(event.target.className == 'thumbnail'){
            console.log('thumbnail clicked');
            let targetSrc = event.target.attributes.src.nodeValue;
            let largeImage = document.querySelector('#large-image');
            largeImage.setAttribute('src', targetSrc);
        }
    } 

    let wrapper = document.querySelector('.grid-container');
    wrapper.addEventListener('click', setGalleryImage, {
        capture: false
    });