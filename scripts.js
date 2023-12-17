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
    darkModeToggle.addEventListener('click', function(evt){
        evt.preventDefault();
        console.log (currentMode.getAttribute('data-bs-theme'));
        if (currentMode.getAttribute('data-bs-theme') == "light"){
            currentMode.setAttribute('data-bs-theme','dark');
            darkLightIcon.setAttribute('src','images/darkMode.png')
        }
        else if (currentMode.getAttribute('data-bs-theme') == "dark"){
            currentMode.setAttribute('data-bs-theme','light');
            darkLightIcon.setAttribute('src','images/lightMode.png')
        }
        else{
            console.log('Error toggle dark-light mode')
        }
            
    });
}());


