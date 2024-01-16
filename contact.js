var phonesidemenu = document.getElementById('phone-menubox')

var sidenavbar = document.getElementById('sidenav')

var closenavbar = document.getElementById('close-nav')


phonesidemenu.addEventListener('click', function () {
    sidenavbar.style.right = 0
})

closenavbar.addEventListener('click', function () {
    sidenavbar.style.right = "-50%"
})