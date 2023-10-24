"use strict";
(function() {
    window.addEventListener("load", init);

    function init(){
        id("create").addEventListener("click", textEntry);
    }

    function textEntry() {
        let input = document.createElement("textarea");
        // input.type = "text";
        input.id = "input";
        id("reminders").appendChild(input);
        id("create").disabled = true;

        input.addEventListener("keydown", checkInput);
        input.addEventListener("dblclick", function(){
            this.remove();
            id("create").disabled = false;
        });
        
    }

    //will add a new entry based on the key press
    function checkInput(e) {
        //checks if the enter key is press
        if (e.key === "Enter") {
            //checks if the input is not an empty string
            if (id("input").value.trim() !== "") {
                let entry = id("input").value;
                //new element to hold entry
                let reminder = document.createElement("article");
                reminder.classList.add("reminder");
                let label = document.createElement("label");
                label.textContent = entry;
                let checkbox = document.createElement("input");
                checkbox.id = "box";
                checkbox.type = "checkbox";
                reminder.appendChild(checkbox);
                reminder.appendChild(label);
                id("reminders").appendChild(reminder);

                checkbox.addEventListener("change", function(){
                    if (this.checked) {
                        reminder.remove();
                    } 
                });

                id("create").disabled = false;
                input.remove();
            }
        }
    }
    
    function id(id) {
        return document.getElementById(id);
    }

    function qs(selector) {
        return document.querySelector(selector);
    }

    function qsa(query) {
        return document.querySelectorAll(query);
    }

})();