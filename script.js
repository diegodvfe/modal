'use strict';

// 3 buttons of the aplications
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const btnCloseModal = document.querySelector(".close-modal");
// this buttons handle the 3 buttons in javascript
const btnOpenModal = document.querySelectorAll(".show-modal");

// console.log(btnOpenModal);
// A loop send us the information in html show-modal
for( let i = 0; i < btnOpenModal.length; i++ ){
   btnOpenModal[i].addEventListener("click", function(){
    console.log("buttons clicked")
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
    });
}

// Refactor the funciton of the code base class

const closeModal = function ( ){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}


btnCloseModal.addEventListener("click", closeModal)

overlay.addEventListener("click", closeModal)

document.addEventListener("keydown", function(e) {
        if( e.key === "Escape" && !modal.classList.contains("hidden")){
            closeModal();

    }
})