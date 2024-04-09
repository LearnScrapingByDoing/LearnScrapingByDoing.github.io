function openNav() {
    var sidenav = document.getElementById("sidenav").style
    document.getElementById("mainContent").classList.toggle("shadow");
    sidenav.width = 
        sidenav.width == "250px" 
            ? "0px" 
            : "250px"
}

function toggleTheme() {
    document.body.classList.toggle("dark");

    let theme = "light";
    const prism = document.getElementById("prism");

    if (document.body.classList.contains("dark")) {
        theme = "dark";
        prism.href = "/assets/prism-dark.css";
    } else {
        prism.href = "/assets/prism.css";
    }

    localStorage.setItem("theme", theme);
}

(function() {
    document.addEventListener('DOMContentLoaded', (event) => {
            setDark();
            addHeader();
        }
    )
})();

function setDark() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme == 'dark') {
        document.getElementById("prism").href = "/assets/prism-dark.css"
        document.body.classList.add('dark');
    }
}

function replitToggle() {
    let frame =  document.getElementById("replitFrame");
    let button = document.getElementById("collapse-button");
    if (frame.classList.contains("replit-frame-expanded")) {
        frame.classList.remove("replit-frame-expanded");
        frame.classList.add("replit-frame-collapsed");
        button.classList.add("replit-expand");
        button.classList.remove("replit-collapse");

    } else {
        frame.classList.add("replit-frame-expanded");
        frame.classList.remove("replit-frame-collapsed");
        button.classList.remove("replit-expand");
        button.classList.add("replit-collapse");
    }
}

function makeResizableDiv(div) {
    const element = document.getElementById("replitFrame");
    const resizers = document.getElementById("resizeGrabber");
    const minimum_size = 20;
    let original_width = 0;
    let original_x = 0;
    let original_mouse_x = 0;
    const currentResizer = resizers;
    currentResizer.addEventListener('mousedown', function(e) {
        e.preventDefault()
        original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
        original_x = element.getBoundingClientRect().left;
        original_mouse_x = e.pageX;
        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', stopResize)
    })
    
    function resize(e) {
        const width = original_width - (e.pageX - original_mouse_x)
        if (width > minimum_size) {
            element.style.width = width + 'px'
            element.style.left = original_x + (e.pageX - original_mouse_x) + 'px'
        }
    }
    
    function stopResize() {
        window.removeEventListener('mousemove', resize)
    }
}

function cssLessonOne() {
    try {
        const lesson = document.getElementById("lesson");
        const images = document.querySelectorAll("td.result > img");
        let input = document.getElementById("cssSel1").value;
        let all = true;
        if (!input) {
            images.forEach( img =>
                img.src = "/assets/task_incomplete.png"
            );
            document.querySelector(".continue").classList.remove("green");
        }
        let matching = lesson.querySelectorAll(input);
        let counter = 0;

        for (const node of lesson.querySelectorAll("*")) {
            let found = false;
            for (const element of matching) {
                if (element === node) {
                    found = true;
                    break;
                }
            }

            if (found) {
                images[counter].src = "/assets/task_complete.png"
            } else {
                images[counter].src = "/assets/task_incomplete.png"
                all = false;
            }

            counter += 1;
        }

        if (all) {
            document.querySelector(".continue").classList.add("green");
        } else {
            document.querySelector(".continue").classList.remove("green");
        }
    } catch (e) {
        throw new Error(e.message);
    }
    return false;
}

window.onload = function() {
    addHeader();
    makeResizableDiv('.resizable');
}

function addHeader() {
    document.body.innerHTML += `
        <header id="navbar">
        <div class="sidebar-button">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" viewBox="0 0 448 512" class="icon" onClick="openNav()">
                <path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z" />
            </svg>
            <img src="/assets/logo.svg" class="logo" />
            <span class="sitename">Learn By Scraping</span>
        </div>
    </header>

    <div id="sidenav">
        <nav>
            <a href="/index.html#Intro">Introduction<br></a>
            <a href="/index.html#Lang">Language Specific Details</a>
            <a href="/python/index.html" class="indent">• Python</a>
            <a href="/sh/index.html" class="indent">• *Nix Shells</a>
            <a href="/css/lesson1.html">Css Selectors</a>
        </nav>
    </div>`
}
