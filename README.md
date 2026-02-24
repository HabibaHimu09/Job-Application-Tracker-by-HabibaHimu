# Job-Application-Tracker-by-HabibaHimu

Programming hero assignment #4

Answers to Questions

**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

  getElementById("id") is used to find an element by specific id from the HTML code. It used to find one element only. 

  getElementsByClassName("class") is used to find the 1st matching element  from the HTML code.  It is used to find single   elements. 

  querySelector("selector") is used to find an element by specific class from the HTML code. But It is used to find multiple  elements having the same class only. 

  querySelectorAll("selector") is used tio select all selector matched. It also provide a list to select from. 

  

**2. How do you create and insert a new element into the DOM?**
 
This is the way to create a new element to DOM:
let newElement = document.createElement("div");

The following is the way to insert into the element
newElement.innerText = "Example Text";

This is the way to add to the DOM of the HTML
document.body.appendChild(newElement);

**3. What is Event Bubbling? And how does it work?**
Event bubbling is a process how the event happened with child element affect the parent elements. 

the following is an example:
```
<HTML>
  ......
  
  <body>
    <div id="parent">
       <button id="child">Click</button>
    </div>
  </body>

 </HTML>
```
 if the button is pressed, this will first affect the chilc button, then the parent div, then the body and finally HTML.  

 

**4. What is Event Delegation in JavaScript? Why is it useful?**

Delegation is a complex process of Javascript. An event listener is set to patrent element, it can control the event of child element. 

Benefit is no need to add additional event listener to every child elements. It enhances performance. 

this is an example:
document.getElementById("parent").addEventListener("click", function(e){
   if(e.target.tagName === "BUTTON"){
      console.log("Button clicked");
   }
});