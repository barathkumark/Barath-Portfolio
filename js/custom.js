// Navbar JS

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', 'rgba(0, 0, 0, 0.6)');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-item");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Remove active class from all links
            navLinks.forEach(item => item.classList.remove("active"));
            // Add active class to the clicked link
            this.classList.add("active");
        });
    });
});