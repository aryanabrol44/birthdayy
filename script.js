/* =====================================================
   VARIABLES
===================================================== */

let currentPage = "loading";

let unlockedOption = 1;


/* =====================================================
   GET ELEMENTS
===================================================== */

const loadingScreen =
    document.getElementById("loadingScreen");

const loadingProgress =
    document.getElementById("loadingProgress");

const loadingPercent =
    document.getElementById("loadingPercent");

const loadingMessage =
    document.getElementById("loadingMessage");

const pinScreen =
    document.getElementById("pinScreen");

const pinInput =
    document.getElementById("pinInput");

const unlockButton =
    document.getElementById("unlockButton");

const pinError =
    document.getElementById("pinError");

const menuScreen =
    document.getElementById("menuScreen");

const lilyScreen =
    document.getElementById("lilyScreen");

const tulipScreen =
    document.getElementById("tulipScreen");

const thirdScreen =
    document.getElementById("thirdScreen");

const finalScreen =
    document.getElementById("finalScreen");

const menuMessage =
    document.getElementById("menuMessage");


/* =====================================================
   LOADING SCREEN
===================================================== */

let progress = 0;


const loadingInterval = setInterval(() => {

    progress++;

    loadingProgress.style.width =
        progress + "%";

    loadingPercent.textContent =
        progress + "%";


    if (progress < 25) {

        loadingMessage.textContent =
            "Preparing something special...";

    }

    else if (progress < 50) {

        loadingMessage.textContent =
            "Gathering your memories...";

    }

    else if (progress < 75) {

        loadingMessage.textContent =
            "Making it beautiful for you...";

    }

    else if (progress < 95) {

        loadingMessage.textContent =
            "Almost ready, love... ❤️";

    }

    else {

        loadingMessage.textContent =
            "Your surprise is ready...";
    }


    if (progress >= 100) {

        clearInterval(loadingInterval);


        setTimeout(() => {

            loadingScreen.classList.add("hide");


            setTimeout(() => {

                showPinScreen();

            }, 1200);

        }, 500);

    }

}, 45);


/* =====================================================
   SHOW PIN SCREEN
===================================================== */

function showPinScreen() {

    pinScreen.classList.add("show");

    currentPage = "pin";

    document.body.style.overflow =
        "hidden";

    setTimeout(() => {

        pinInput.focus();

    }, 500);

}


/* =====================================================
   PIN
===================================================== */

unlockButton.addEventListener(
    "click",
    checkPin
);


pinInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            checkPin();

        }

    }
);


/* =====================================================
   CHECK PIN
===================================================== */

function checkPin() {

    const pin =
        pinInput.value;


    if (pin === "2408") {

        pinError.textContent =
            "Access granted ❤️";


        pinError.style.color =
            "#ff7898";


        unlockButton.disabled =
            true;


        setTimeout(() => {

            pinScreen.classList.remove("show");


            setTimeout(() => {

                showMenu();

            }, 800);

        }, 900);

    }

    else {

        pinError.textContent =
            "Hmm... try again, baby ❤️";


        pinInput.value = "";


        pinInput.classList.add("shake");


        setTimeout(() => {

            pinInput.classList.remove("shake");

        }, 400);

    }

}


/* =====================================================
   SHOW MAIN MENU
===================================================== */

function showMenu() {

    hideAllScreens();


    menuScreen.classList.add("show");


    currentPage = "menu";


    document.body.style.overflow =
        "hidden";


    updateMenu();

}


/* =====================================================
   HIDE ALL PAGES
===================================================== */

function hideAllScreens() {

    menuScreen.classList.remove("show");

    lilyScreen.classList.remove("show");

    tulipScreen.classList.remove("show");

    thirdScreen.classList.remove("show");

    finalScreen.classList.remove("show");

}


/* =====================================================
   MENU OPTION
===================================================== */

function selectOption(option) {


    /* =================================
       OPTION 1
    ================================= */

    if (option === 1) {

        if (unlockedOption >= 1) {

            showLilyPage();

        }

        return;

    }


    /* =================================
       OPTION 2
    ================================= */

    if (option === 2) {

        if (unlockedOption < 2) {

            showMenuMessage(
                "Baby choose the first one please ❤️"
            );

            return;

        }

        showTulipPage();

        return;

    }


    /* =================================
       OPTION 3
    ================================= */

    if (option === 3) {

        if (unlockedOption < 3) {

            showMenuMessage(
                "Baby choose the previous one first ❤️"
            );

            return;

        }

        showThirdPage();

        return;

    }

}


/* =====================================================
   MENU MESSAGE
===================================================== */

function showMenuMessage(message) {

    menuMessage.textContent =
        message;


    setTimeout(() => {

        menuMessage.textContent =
            "";

    }, 2500);

}


/* =====================================================
   OPTION 1 — LILY PAGE
===================================================== */

function showLilyPage() {

    hideAllScreens();

    lilyScreen.classList.add("show");

    currentPage = "lily";

    createFlowers(
        "lilyRain",
        "🌸",
        35
    );

}


/* =====================================================
   OPTION 2 — TULIP PAGE
===================================================== */

function showTulipPage() {

    hideAllScreens();

    tulipScreen.classList.add("show");

    currentPage = "tulip";

    createFlowers(
        "tulipRain",
        "🌷",
        35
    );

}


/* =====================================================
   OPTION 3
===================================================== */

function showThirdPage() {

    hideAllScreens();

    thirdScreen.classList.add("show");

    currentPage = "third";

    createFlowers(
        "flowerRain",
        "💐",
        35
    );

}


/* =====================================================
   RETURN TO MENU
===================================================== */

function goToMenu() {

    showMenu();

}


/* =====================================================
   NEXT — FINAL PAGE
===================================================== */

function goToFinal() {

    hideAllScreens();

    finalScreen.classList.add("show");

    currentPage = "final";

}


/* =====================================================
   FLOWER GENERATOR
===================================================== */

function createFlowers(
    containerId,
    flower,
    amount
) {

    const container =
        document.getElementById(containerId);


    container.innerHTML = "";


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const flowerElement =
            document.createElement("div");


        flowerElement.classList.add(
            "fallingFlower"
        );


        flowerElement.textContent =
            flower;


        flowerElement.style.left =
            Math.random() * 100 + "%";


        flowerElement.style.fontSize =
            (18 + Math.random() * 25) + "px";


        flowerElement.style.animationDuration =
            (5 + Math.random() * 7) + "s";


        flowerElement.style.animationDelay =
            (Math.random() * 5) + "s";


        container.appendChild(
            flowerElement
        );

    }

}


/* =====================================================
   UPDATE MENU
===================================================== */

function updateMenu() {

    const option2 =
        document.getElementById("option2");

    const option3 =
        document.getElementById("option3");


    /*
       Unlock option 2 after
       completing option 1
    */

    if (unlockedOption >= 2) {

        option2.classList.remove(
            "locked"
        );

    }


    /*
       Unlock option 3 after
       completing option 2
    */

    if (unlockedOption >= 3) {

        option3.classList.remove(
            "locked"
        );

    }

}


/* =====================================================
   MARK CHAPTER AS COMPLETED
===================================================== */


/*
   We modify goToMenu slightly.

   If she returns from Lily:
   Option 2 unlocks.

   If she returns from Tulip:
   Option 3 unlocks.
*/

const originalGoToMenu =
    goToMenu;


window.goToMenu =
    function() {


        if (currentPage === "lily") {

            unlockedOption = 2;

        }


        else if (currentPage === "tulip") {

            unlockedOption = 3;

        }


        showMenu();

    };


/* =====================================================
   INITIAL STATE
===================================================== */

document.body.style.overflow =
    "hidden";