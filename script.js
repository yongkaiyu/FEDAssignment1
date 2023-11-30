const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click",() =>{
        removeActiveClasses(); //Function to remove active class of panel
        panel.classList.add("active");
    });
});

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}