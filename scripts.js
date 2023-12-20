(function(){
    const navlinkEls = document.querySelectorAll('.nav-link');
    console.log (navlinkEls);
    navlinkEls.forEach(navlinkEl =>{
        navlinkEl.addEventListener('click', () => {
            document.querySelector('.active')?.classList.remove ('active');
            navlinkEl.classList.add('active');

        });
    });
    //switch active navigation button back to personal info when home is clicked
    document.getElementById('homeButton').addEventListener('click',() => {
        document.querySelector('.active')?.classList.remove ('active');
        navlinkEls[0].classList.add('active');
    });

    let currentMode= document.querySelector('html');
    let darkModeToggle= document.querySelector('#darkMode');
    let darkLightIcon= document.querySelector('#modeIcon');
    let bgImage= document.querySelector('#bgImage');
    let myName= document.querySelector('#myName');
    darkModeToggle.addEventListener('click', function(evt){
        evt.preventDefault();
        console.log (currentMode.getAttribute('data-bs-theme'));
        if (currentMode.getAttribute('data-bs-theme') == "light"){
            //set HTML tag, theme to dark
            currentMode.setAttribute('data-bs-theme','dark');
            //change sun icon to moon icon
            darkLightIcon.setAttribute('src','images/darkMode.png')
            //change wallpaper
            bgImage.setAttribute('src','images/sceneryDark.jpg')
            //change text to white for dark theme
            myName.setAttribute('class','text-light')
            //change border table lines for personal info 
            document.querySelector('#infoTable')?.classList.remove ('border-dark');
            document.querySelector('#infoTable')?.classList.add ('border-light');           
        }
        else if (currentMode.getAttribute('data-bs-theme') == "dark"){
            //set HTML tag, theme to light
            currentMode.setAttribute('data-bs-theme','light');
            //change moon icon to sun icon
            darkLightIcon.setAttribute('src','images/lightMode.png')
            //change wallpaper
            bgImage.setAttribute('src','images/sceneryLight.jpg')
            //change text to black for light theme
            myName.setAttribute('class','text-dark')
            //change border table lines for personal info
            document.querySelector('#infoTable')?.classList.remove ('border-light');
            document.querySelector('#infoTable')?.classList.add ('border-dark');
        }
        else{
            console.log('Error toggle dark-light mode')
        }
    })
    



}());


    window.addEventListener('scroll',function(){
        let scrolling= document.querySelector('.scrollTop');
        scrolling.classList.toggle('activate',window.scrollY >400); 
    });


    function goTop(){
        const navlinkEls = document.querySelectorAll('.nav-link');
        console.log("top now")
        window.scrollTo({
            top:0
        })
        document.querySelector('.active')?.classList.remove ('active');
        navlinkEls[0].classList.add('active');
    }
 

