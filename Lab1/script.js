var changeViewButton = document.getElementById("buttonFlex");

changeViewButton.addEventListener('click', function() {
    var table = document.querySelectorAll("div.table");
    table.forEach(element => {
        if (element.classList.contains("grid")) {
            element.classList.remove("grid");
            element.classList.add("flex");
        } else {
            element.classList.add("grid");
            element.classList.remove("flex");
        }
    });
});