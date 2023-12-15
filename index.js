
let path = "";
const paths = ["speedslide", "airbrake", "neoslide", "about"];

document.addEventListener('keydown', (event) => {
    let key = event.key;

    if (String.fromCharCode(event.keyCode).match(/(\w|\s)/g)) { // regex funnet på stackoverflow
        if (key == "Enter") {
            switch (path) {
                case "home":
                    redirect("index.html", true);
                    break;
                case "videoguide":
                    open_guide();
                    break;
                default:
                    if (paths.includes(path)) {
                        redirect(path + ".html", false);
                    }
                    break;
            }

            path = "";
        } else {
            path = path + key;
        }
    } 
}, false);

function redirect(path, home) {
    if (window.location.pathname.includes("pages/")) {
        if (home) {
            window.location.href = "../" + path;
        } else {
            window.location.href = path;
        }
    } else {
        if (home) {
            window.location.href = path;
        } else {
            window.location.href = "pages/" + path;
        }
    }
}

function open_guide() {
    let elem = document.getElementsByClassName("vg")[0];
    let image = document.getElementById("Image");

    if (document.fullscreenElement) {
        elem.innerHTML = "Video Guide";
        image.style.display = "none";
        document.exitFullscreen();
    } else {
        elem.innerHTML = "Exit";
        image.style.display = "block";
        document.body.requestFullscreen();
    }
}


