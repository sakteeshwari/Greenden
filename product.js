
var phonesidemenu = document.getElementById('phone-menubox')

var sidenavbar = document.getElementById('sidenav')

var closenavbar = document.getElementById('close-nav')


phonesidemenu.addEventListener('click', function () {
    sidenavbar.style.right = 0
})

closenavbar.addEventListener('click', function () {
    sidenavbar.style.right = "-50%"
})



// search funtionality

var searchinput = document.getElementById("search_input")

var sectionsearch = document.getElementById('product_container')

var productlist = product_container.querySelectorAll("div")
// console.log(productlist)

searchinput.addEventListener("keyup", function () {

    var enteredvalue = event.target.value.toUpperCase() 
    console.log(enteredvalue)
    for (count = 0; count < productlist.length; count = count + 1)
     {

        var productname=productlist[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredvalue) < 0) 
        {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }

})




