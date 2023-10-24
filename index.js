/*
  Name: Derrek Do
  Date: 10/22/2023

  JS code for the 'Reminder' app. 
  Adds user driven functionality; allows user to create a checklist of reminders they need to complete.
  Each reminder will have a checkbox to indicate whether or not it is complete. Once checked, the reminder will 
  be removed.

*/
"use strict";
(function() {
    window.addEventListener("load", init);

    function init(){
        id("create").addEventListener("click", textEntry);
    }

    function textEntry() {
        //create a input box, and disable new input boxes from being created
        let input = document.createElement("textarea");
        input.id = "input";
        id("reminders").appendChild(input);
        id("create").disabled = true;

        input.addEventListener("keydown", checkInput);
        //allows user to stop editing
        input.addEventListener("dblclick", function(){
            this.remove();
            id("create").disabled = false;
        });
        
    }

    //will add a new entry based on the key press
    function checkInput(e) {
        //checks if the enter key is press
        if (e.key === "Enter") {
            //checks if the input is not an empty string if not will add the reminder
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
                
                //allows for the new reminder to be removed when checked
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