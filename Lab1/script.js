var changeViewButton = document.getElementById("buttonFlex");

changeViewButton.addEventListener('click', function() {
    var rows = document.querySelectorAll("div.row");
    rows.forEach(element => {
        if (element.classList.contains("flex")) {
            element.classList.remove("flex");
        } else {
            element.classList.add("flex");
        }
    });
});