//////////////////////////////////SCROLLING ANIMATION CODE

//animates text, imgs, etc. elements as you scroll using 
//callback functions to edit elements' classes
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { //intersecting viewport?
            entry.target.classList.add('show');
        } else { //the else and remove is included to repeat the animation 
            entry.target.classList.remove('show');
        }
    });
});
const hidden0Elements = document.querySelectorAll('.hidden0');
hidden0Elements.forEach((e1) => observer.observe(e1));
const hidden1Elements = document.querySelectorAll('.hidden1');
hidden1Elements.forEach((e1) => observer.observe(e1));
const hidden2Elements = document.querySelectorAll('.hidden2');
hidden2Elements.forEach((e1) => observer.observe(e1));

//adds and/or removes the "scrolled" class to the navigation bars 
//so they change color as one scrolls and is not at the top of the page
document.addEventListener('scroll', () => {
    const navBar1 = document.getElementById("navLarge");
    const navBar2 = document.getElementById("navSmall");
    if (window.scrollY > 0) {
        navBar1.classList.add('scrolled');
        navBar2.classList.add('scrolled');
    } else {
        navBar1.classList.remove('scrolled');
        navBar2.classList.remove('scrolled');
    }
});



//////////////////////////////////ELEMENT ADAPTION TO SCREEN SIZE CODE

//changes elements to appear better on the current screen size
function AdjustToScreen() {
    //chooses between two nav bars (hides the unchosen one with a class): 
    //  -one with a dropdown menu for a smaller screen
    //  -one with always disaplyed buttons for a larger screen
    const navBar1 = document.getElementById("navLarge");
    const navBar2 = document.getElementById("navSmall");
    if ((window.innerWidth < 450) || (screen.width < 450)) {
        navBar1.classList.add('gone');
        navBar2.classList.remove('gone');
    } else {
        navBar1.classList.remove('gone');
        navBar2.classList.add('gone');
    }

    const extraDrawing = document.getElementById("extraDrawing");
    if (extraDrawing) {
        if ((window.innerWidth < 700) || (screen.width < 700)) {
            extraDrawing.classList.add('gone');
        } else {
            extraDrawing.classList.remove('gone');
        }
    }

    const imagesGroup1 = document.getElementById("group1");
    const imagesGroup2 = document.getElementById("group2");
    if (imagesGroup1) {
        if ((window.innerWidth < 650) || (screen.width < 650)) {
            imagesGroup1.classList.add('images1');
            imagesGroup1.classList.remove('images2');
            imagesGroup2.classList.add('images1');
            imagesGroup2.classList.remove('images2');
        } else {
            imagesGroup1.classList.remove('images1');
            imagesGroup1.classList.add('images2');
            imagesGroup2.classList.remove('images1');
            imagesGroup2.classList.add('images2');
        }
    }

    //changes the layout of the profile page so that if the
    //screen width is less than height, the profile image is
    //above the profile box rather than to the left of it 
    const profilePic = document.getElementById("profilePic");
    const profileBox = document.getElementById("profileBox");
    if (profilePic) {
        if (window.innerWidth < window.innerHeight) {
            if (profilePic.classList.contains('profilePicLong'))
            {
                profilePic.classList.remove('profilePicLong');
                profileBox.classList.remove('profileBoxLong');
                profilePic.classList.add('profilePicShort');
                profileBox.classList.add('profileBoxShort');
            }
        } else {
            if (profilePic.classList.contains('profilePicShort'))
            {
                profilePic.classList.remove('profilePicShort');
                profileBox.classList.remove('profileBoxShort');
                profilePic.classList.add('profilePicLong');
                profileBox.classList.add('profileBoxLong');
            }
        }
    }
    var project1Boxes = document.getElementsByClassName('project1Box');
    var project2Boxes = document.getElementsByClassName('project2Box');
    var projectPics = document.getElementsByClassName('projectPic');
    if (project1Boxes.length > 0) {
        if (window.innerWidth < window.innerHeight) {
            if (project1Boxes[0].classList.contains('project1BoxLong'))
            {
                for (var i = 0; i < project1Boxes.length; i++) {
                    var box = project1Boxes[i];  
                    box.classList.remove('project1BoxLong');
                    box.classList.add('project1BoxShort');
                }
            }
            if (project2Boxes[0].classList.contains('project2BoxLong'))
            {
                for (var i = 0; i < project2Boxes.length; i++) {
                    var box = project2Boxes[i];  
                    box.classList.remove('project2BoxLong');
                    box.classList.add('project2BoxShort');
                }
            }
            if (projectPics[0].classList.contains('projectPicLong'))
            {
                for (var i = 0; i < projectPics.length; i++) {
                    var pic = projectPics[i];  
                    pic.classList.remove('projectPicLong');
                    pic.classList.add('projectPicShort');
                }
            }
        } else {
            if (project1Boxes[0].classList.contains('project1BoxShort'))
            {
                for (var i = 0; i < project1Boxes.length; i++) {
                    var box = project1Boxes[i];  
                    box.classList.remove('project1BoxShort');
                    box.classList.add('project1BoxLong');
                }
            }
            if (project2Boxes[0].classList.contains('project2BoxShort'))
            {
                for (var i = 0; i < project2Boxes.length; i++) {
                    var box = project2Boxes[i];  
                    box.classList.remove('project2BoxShort');
                    box.classList.add('project2BoxLong');
                }
            }
            if (projectPics[0].classList.contains('projectPicShort'))
            {
                for (var i = 0; i < projectPics.length; i++) {
                    var pic = projectPics[i];  
                    pic.classList.remove('projectPicShort');
                    pic.classList.add('projectPicLong');
                }
                }
        }
    }
}

//runs AjustToScreen() to adjust elements to appear better on
//the resized screen if someone changed their screen size
window.addEventListener('resize', () => {
    AdjustToScreen();
});

//call AjustToScreen() once at the beginning to adjust to
//the original screen size
AdjustToScreen();



//////////////////////////////////DARK MODE CODE

//function to get a cookie's current value
//from the w3schools website:
//https://www.w3schools.com/js/js_cookies.asp
function GetCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//function that changes elements' classes to the 
//current dark mode setting stored in a cookie.
function SetDarkMode() {
    let darkMode = GetCookie("darkmode");
    var oldMode = "";
    var newMode = "";
    var darkPigeon1 = document.getElementById("pigeonDark1");
    var darkPigeon2 = document.getElementById("pigeonDark2");
    var lightPigeon1 = document.getElementById("pigeonLight1");
    var lightPigeon2 = document.getElementById("pigeonLight2");
    //all the pigeons are the logo, 2 per nav bar: 1 dark & 1 light mode version
    if (darkMode.localeCompare("y") == 0) {
        oldMode = "light";
        newMode = "dark";
        lightPigeon1.classList.add('gone');
        lightPigeon2.classList.add('gone');
        darkPigeon1.classList.remove('gone');
        darkPigeon2.classList.remove('gone');
    } else {
        oldMode = "dark";
        newMode = "light";
        lightPigeon1.classList.remove('gone');
        lightPigeon2.classList.remove('gone');
        darkPigeon1.classList.add('gone');
        darkPigeon2.classList.add('gone');
    }
    //dark1-dark11 exist as opposed to just dark because in css
    //the priority of features work better with a selection being
    //of a single class (like .dark2) as opposed to two or more
    //classes/names/ids, etc. (like .dark, li a)
    for (let c = 1; c <= 12; c++) {
        let stringC = c.toString();
        let oldModeC = oldMode.concat(stringC);
        let newModeC = newMode.concat(stringC);
        var changingElements = document.querySelectorAll(".".concat(oldModeC));
        for(var i = 0; i < changingElements.length; i++)
        {
            changingElements[i].classList.add(newModeC);
            changingElements[i].classList.remove(oldModeC);
        }
    }
}

//uses a cookie to set up the user's dark mode if not chosen already
var darkMode = GetCookie("darkmode");
if ((!darkMode) || (darkMode === ""))
{
    document.cookie = "darkmode=n";
}
SetDarkMode();

//function to toggle the user's dark mode cookie
function DarkModeToggle() {
    let darkMode = GetCookie("darkmode");
    if (darkMode.localeCompare("n") == 0) {
        document.cookie = "darkmode=y";
    } else {
        document.cookie = "darkmode=n";
    }
    SetDarkMode();
}



//////////////////////////////////NAVIGATION BAR CODE

//toggles the navigation bar's drop menu on the "short"
//navigation bar to show and disappear using classes
function NavDrop() {
    const navDrop = document.getElementById("navDropdown");
    const navBtn = document.getElementById("navBtn");
    navDrop.classList.toggle('showDrop');
    if (navDrop.classList.contains('showDrop'))
    {
        navBtn.classList.add('dropbtnOpen');
    } else {
        navBtn.classList.remove('dropbtnOpen');
    }
}

//checks if the user clicked outside the navigation
//dropdown menu when it's open to close it using classes
window.onclick = function(event) {
    if (!(event.target.matches('.dropbtn') || (event.target.matches('.innerDropbtn')))) {
        const navDrop = document.getElementById("navDropdown");
        const navBtn = document.getElementById("navBtn");
        if (navDrop.classList.contains('showDrop')) {
            navDrop.classList.remove('showDrop');
            navBtn.classList.remove('dropbtnOpen');
        }
    }
}