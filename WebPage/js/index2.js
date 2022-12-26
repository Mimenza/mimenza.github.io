var access = sessionStorage.getItem('accessKey')



/*VARIABLES*/
const position = [];
position.push('SideNav', 'About', 'Timeline', 'Contact');
var currentPosition = 0
var currentDotPosition = 1

/*VERIFY IF WE HAVE ACCESS*/
if (access == 1) {

    document.getElementById('FullBody').classList.remove('hidden')



} else {

    window.location.href = "../../index.html"

}


(function ($) {
    "use strict";

    /* add and remove nav classes*/

    $(".nav-item").click(function () {
        $(".navbar-nav li").removeClass("active");
        $(this).addClass("active")

    });

    /*Detects scroll wheel movement */
    $(window).bind('mousewheel DOMMouseScroll', function (event) {
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {

            moveSlide(1)
        }
        else {

            moveSlide(2)
        }
    });

    document.onkeydown = function (e) {
        switch (e.which) {

            case 38: // up
                moveSlide(1)
                break;

            case 40: // down
                moveSlide(2)
                break;

            default: return; // exit this handler for other keys
        }
        e.preventDefault(); // prevent the default action (scroll / move caret)
    };


})(jQuery);


/*BOUNCING LETTERS LISTENER*/
document.querySelectorAll(".bouncing-letters>span").forEach((element) => {
    element.addEventListener("mouseover", (e) => bounce(e.target));
});

/*BOUNCE ANIMATION */
function bounce(letter) {
    if (!letter.classList.contains("bounce")) {
        letter.classList.add("bounce");
        setTimeout(
            function () {
                letter.classList.remove("bounce");
            },
            1000
        );
    }

}
var cooldown = false

function moveSlide(direction) {

    //touchpad control function
    if (cooldown == false) {
        //the function is enable 

        switch (direction) {
            case 1:
                if (currentPosition == 0) { break }
                currentPosition--

                break;


            case 2:
                if (currentPosition == 3) { break }
                currentPosition++

                break;

            default:
                break;
        }

        cooldown = true

        setTimeout(
            //the function will be disable for 800 miliseconds
            function () {
                cooldown = false
            },
            800
        );

        /* WE MOVE TO THAT POSITION */
        document.getElementById(position[currentPosition]).scrollIntoView();

        changeNavFocus()
        changeDotFocus()

    }

}
/*CHANGE DIV FOCUS */
function goTo(location) {

    currentPosition = location
    document.getElementById(position[currentPosition]).scrollIntoView();

    changeNavFocus()
    changeDotFocus()
}
/*CHANGE NAV FOCUS */
function changeNavFocus() {

    /* CHANGE NAV BAR FOCUS*/
    const element = document.getElementsByClassName("nav-item")
    for (let i = 0; i < element.length; i++) {
        element[i].classList.remove("active")
    }

    var navbarCurrent = document.querySelector('[data-location="' + position[currentPosition] + '"]')

    navbarCurrent.classList.add('active')
}
/*TIMELINE DOTS FOCUS */
function changeDotFocus() {

    /* CHANGE DOT  FOCUS*/
    const dots = document.getElementsByClassName("fa-circle")
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("circle-Active")
    }

    var dotCurrent = document.querySelector('[data-dot="' + position[currentPosition] + '"]')

    dotCurrent.classList.add('circle-Active')
}

/*TIMELINE DOTS HOVER */
function dotHover(position, event) {

    var date = document.querySelectorAll("[data-timelineDotBottom='dateBottom" + position + "']")

    if (event.target.classList.contains('dot-active')) { }
    else {
        date[0].classList.remove("hidden")

        entryAnimation(date[0], 1)
    }

}

/*TIMELINE DOTS CLICK*/
function dotClick(position, dotId) {

    var dotId = event.target.id

    var allDates = document.getElementsByClassName('timeline-dot-top')

    for (let index = 0; index < allDates.length; index++) {

        allDates[index].classList.add("hidden")

    }

    var allDots = document.getElementsByClassName('dot-timeline')

    for (let index = 0; index < allDots.length; index++) {

        allDots[index].classList.remove('dot-active')

        if (allDots[index].id == dotId) {

            allDots[index].classList.add('dot-active')
        }
    }

    var date = document.querySelectorAll("[data-timelineDotTop='dateTop" + position + "']")
    var exitDate = document.querySelectorAll("[data-timelineDotBottom='dateBottom" + position + "']")

    date[0].classList.remove("hidden")

    entryAnimation(date[0], 2)
    exitAnimation(exitDate[0], 1)

    /* CURRENT POINT */
    calculateCurrentPoint(position)

}

/*TIMELINE DOTS HOVER EXIT*/
function dotHoverLeave(position) {

    var date = document.querySelectorAll("[data-timelineDotBottom='dateBottom" + position + "']")


    exitAnimation(date[0], 1)
}

/*TIMELINE DATES ENTRY ANIMATION*/
function entryAnimation(date, direction) {

    if (direction == 1) {
        date.classList.add('slide-in-top')

        setTimeout(() => {
            date.classList.remove('slide-in-top')
        }
            , 500);
    }
    else {
        date.classList.add('slide-in-bottom')

        setTimeout(() => {
            date.classList.remove('slide-in-bottom')
        }
            , 500);

    }

}

/*TIMELINE DATES EXIT ANIMATION*/
function exitAnimation(date, direction) {

    date.classList.add('slide-out-top')

    setTimeout(() => {
        date.classList.remove('slide-out-top')

        date.classList.add("hidden")
    }
        , 500);

}

/*CALCULATE THE CURRENT DOT TIMELINE DIRECTION*/
function calculateCurrentPoint(position) {

    var currentText = document.getElementsByClassName("text-" + currentDotPosition)
    var newText = document.getElementsByClassName("text-" + position)

    if ((position) > currentDotPosition) {

        /* right */

        currentText[0].classList.add('slide-out-left')

        setTimeout(() => {
            currentText[0].classList.add('hidden-display')

        }, 500);

        setTimeout(() => {
            newText[0].classList.remove('hidden-display')
            newText[0].classList.add('slide-in-right')

        }, 500);

        /*WE DELETE THE STYLES*/
        setTimeout(() => {
            currentText[0].classList.remove('slide-out-left')
            newText[0].classList.remove('slide-in-right')

        }, 2000);

    }
    else {
        /* left */

        currentText[0].classList.add('slide-out-right')

        setTimeout(() => {
            currentText[0].classList.add('hidden-display')

        }, 500);

        setTimeout(() => {
            newText[0].classList.remove('hidden-display')
            newText[0].classList.add('slide-in-left')

        }, 500);

        /*WE DELETE THE STYLES*/
        setTimeout(() => {
            currentText[0].classList.remove('slide-out-right')
            newText[0].classList.remove('slide-in-left')

        }, 2000);
    }

    currentDotPosition = position
}

/*CLEAR SESSION STORAGE*/
function clearStorage() {
    console.log('exit')
    sessionStorage.clear()
    window.location.href = "../../index.html"
}

/* COPY LINK */
function copyLink(){
    var copyText = document.getElementById("social-mail-copy").textContent
        
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);
  
    // Alert the copied text
    alert("El correo se ha copiado!");

}