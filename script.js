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
// For Football Page, this is for the number counting animation

let valueDisplays = document.querySelectorAll(".num");
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));

    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});