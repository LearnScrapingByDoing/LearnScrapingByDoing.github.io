function openNav() {
    var sidenav = document.getElementById("sidenav").style
    document.getElementById("mainContent").classList.toggle("dark");
    sidenav.width = 
        sidenav.width == "250px" 
            ? "0px" 
            : "250px"
}
