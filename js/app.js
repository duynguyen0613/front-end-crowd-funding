const hamburgerUI = document.querySelector(".nav__hamburger__img img");

hamburgerUI.addEventListener('click', function() {
    console.log("helli")
    const navUI = document.querySelector(".nav");

    navUI.classList.toggle("show");

})

window.addEventListener('resize', function(e) {
    console.log(this.window.innerWidth)
    const width = this.window.innerWidth;
    // if window screen is resized then check if 
    // current width is more than 810 then remove show in navigate bar
    if (width > 810) {
        const nav = this.document.querySelector(".nav");
        nav.classList.remove("show");
    }
})