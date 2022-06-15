# Service Classification Project

## Javascript Structure

The structure in which javascript files are loaded in each page go as follows.

    canvas.js  ->  functions.js  ->  [PAGE SPECIFIC JS FILES]  ->  canvas_anim.js

**canvas.js** and **functions.js** is called first so that *all variables are declared and initialised*, and  *non-page-specific functions are called* before declaring page specific functions.

Then once page all *variables, non-page-specific functions, and page-specific functions* are called, **canvas.js** will run the necessary functions when the page is loaded.


## Adding New Services

1. Adding the Service to the service list: 
In **canvas.js**, Add the service name to 'servicelist' array.

2. Adding the form questions: 
In **forms.js**, Add a new case statement in switch(branch). Then add the conditions in HTML format *(use qpanel1.innerHTML = \`[conditions]\`)*

3. Configuring the outcome message and logic: 
In **pageupdate.js**, Add a new case statement in switch(branch). Use sessionStorage key-value pairs in if or switch-case statements for to determine the outcome logic. Use **outcome.innerText = '[outcome]'** and **outcomeSub.innerText = '[caption]'**
