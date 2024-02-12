var Data = document.querySelectorAll("[data-target]");
var TabContents = document.querySelectorAll("[data-content]");

Data.forEach(tabs => {
    tabs.addEventListener('click', () => {
        const target = document.querySelector(tabs.dataset.target);

        Data.forEach(tab => {
            tab.classList.remove('active');
        });
        tabs.classList.add('active');

        TabContents.forEach(TabContent => {
            TabContent.classList.remove('active_tab');
        });
        
        target.classList.add('active_tab');
    })
});


var counter = document.querySelectorAll(".counter");
for (let index = 0; index < counter.length; index++) {
    counter[index].textContent = "_" + index;
}


var bars = document.getElementById("menu");
var Side_bar = document.getElementById("sidebar");
bars.addEventListener("click", () => {
    Side_bar.classList.toggle("shrink");
    if (Side_bar.classList.contains("shrink")) {
        var Contents = document.querySelector("[data-contents]");
        Contents.style.width = "95%";
    }
})

