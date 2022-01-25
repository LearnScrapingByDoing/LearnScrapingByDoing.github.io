function openNav() {
    var sidenav = document.getElementById("sidenav")
    document.getElementById("mainContent").classList.toggle("dark");
    sidenav.style.width == "250px" 
        ? sidenav.style.width = "0px" 
        : sidenav.style.width = "250px";
}
