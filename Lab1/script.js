var changeViewButton = document.getElementById("buttonFlex");

changeViewButton.addEventListener('click', function() {
    var rows = document.querySelectorAll("div.table");
    rows.forEach(element => {
        if (element.classList.contains("grid")) {
            element.classList.remove("grid");
            element.classList.add("flex");
        } else {
            element.classList.add("grid");
            element.classList.remove("flex");
        }
    });
});