function openNav() {
    var sidenav = document.getElementById("sidenav")
    let mainContent = document.getElementById("mainContent")

    if (sidenav.style.width == "250px") {
        mainContent.classList.remove("dark");
        sidenav.style.width = "0px";
    } else {
        sidenav.style.width = "250px";
        mainContent.classList.add("dark");
    }
}
