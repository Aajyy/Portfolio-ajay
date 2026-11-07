const intro = document.getElementById ("intro");
const introName = document.getElementById("introName");
const introLogo = document.getElementById("introLogo");
const portfolio = document.getElementById("portfolio");

function animateName() {

    // Step 1: Show full name
    introName.style.transition = "opacity 1s ease";
    introName.style.opacity = "1";

    // Step 2: Hide full name after 2 seconds
    setTimeout(() => {

        introName.style.opacity = "0";

        // Step 3: Show AY logo
        setTimeout(() => {

            introLogo.style.transition = "opacity 0.8s ease";
            introLogo.style.opacity = "1";

            // Step 4: Rotate AY logo in 3D
            setTimeout(() => {

                introLogo.style.transition =
                    "transform 1.5s ease";

                introLogo.style.transform =
                    "translate(-50%, -50%) rotateY(720deg)";

            }, 500);

            // Step 5: Move logo to top-left
            setTimeout(() => {

                introLogo.style.transition =
                    "all 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)";

                introLogo.style.left = "9%";
                introLogo.style.top = "45px";
                introLogo.style.fontSize = "32px";
                introLogo.style.transform =
                    "translate(-50%, -50%) rotateY(0deg)";

            }, 2200);

            // Step 6: Display portfolio
            setTimeout(() => {

                portfolio.style.transition = "opacity 0.1s ease";
                portfolio.style.visibility = "visible";
                portfolio.style.opacity = "1";

                intro.style.transition = "opacity 0.8s ease";
                intro.style.opacity = "0";

                setTimeout(() => {
                    intro.style.display = "none";
                }, 800);

            }, 3500);

        }, 700);

    }, 2200);
}

window.addEventListener("load", animateName);