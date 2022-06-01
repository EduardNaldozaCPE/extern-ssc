# Service Classification Project

## Adding New Services

1. Adding the Service to the service list: 
In **canvas.js**, Add the service name to 'servicelist' array.

2. Adding the form questions: 
In **forms.js**, Add a new case statement in switch(branch). Then add the conditions in HTML format *(use qpanel1.innerHTML = \`[conditions]\`)*

3. Configuring the outcome message and logic: 
In **pageupdate.js**, Add a new case statement in switch(branch). Use sessionStorage key-value pairs in if or switch-case statements for to determine the outcome logic. Use **outcome.innerText = '[outcome]'** and **outcomeSub.innerText = '[caption]'**
