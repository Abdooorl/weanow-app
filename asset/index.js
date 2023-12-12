//Using localStorage for light/darkmode

let darkMode = localStorage.getItem("darkMode");
const darkModeButton = document.querySelector(".dark-Mode");
const lightModeButton = document.querySelector(".lightMode");
const modeState = document.querySelector(".mode")
const logoImage = document.querySelectorAll(".logoImage")



const darkModeOn = () => {
    //adding the darkmode class to my body
    document.body.classList.add("darkmode");
    modeState.classList.add("activeModePadding")

    // removing the activemode from the button and adding it to another one//
    lightModeButton.classList.remove("activeMode");
    darkModeButton.classList.add("activeMode");

    //Change the logo to darkmode logo

    for ( i = 0; i < logoImage.length; i++) {
       
        logoImage[i].src= "darkModeLogo.png"
    }  

    localStorage.setItem("darkMode", true)
}

const darkModeOff = () => {
    //adding the darkmode class to my body
    document.body.classList.remove("darkmode");
    modeState.classList.remove("activeModePadding");

    lightModeButton.classList.add("activeMode");
    darkModeButton.classList.remove("activeMode");

    for ( i = 0; i < logoImage.length; i++) {
       
        logoImage[i].src= "lightModeLogo.png"
    } 

    

    localStorage.setItem("darkMode", false)
}



if (darkMode === "true") {
    darkModeOn();
}


darkModeButton.addEventListener("click", () => {

    let darkMode = localStorage.getItem("darkMode");

    if (darkMode !== true) {
        darkModeOn();
    } else {
        darkModeOff();
    }
});

lightModeButton.addEventListener("click", () => {

    let darkMode = localStorage.getItem("darkMode");
    
    if (darkMode !== false) {
        darkModeOff();
    } else {
        darkModeOn();
    }
});



