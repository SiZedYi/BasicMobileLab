// run code when the page is loaded

window.onload =  () => {
    document.getElementsByClassName("again")[0].addEventListener("click", () => {
        let secretNumber = Math.trunc(Math.random() * 20) + 1;
        let scoreValue = 20;

        document.querySelector(".number").textContent = "?";
        document.querySelector(".message").textContent = "Start guessing...";
        document.querySelector(".score").textContent = scoreValue;
        document.querySelector(".guess").value = "";
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
      });
    console.log("Page is fully loaded");
};

