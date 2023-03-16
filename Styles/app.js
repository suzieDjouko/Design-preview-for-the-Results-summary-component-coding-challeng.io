const button = document.querySelector(".card-bottom-btn");
let btn = true;
button.addEventListener("click", function(){
    if (btn) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
      btn = !btn;
    });