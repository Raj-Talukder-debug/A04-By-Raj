1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ANS:
getElementById: We use this to select a specific element by its unique ID. An ID should only be used once per HTML page.

getElementsByClassName: We use this to get a collection of elements that share the same class name.

querySelector / querySelectorAll: We use these to select elements using CSS selectors


2. How do you create and insert a new element into the DOM?
ANS:
To create a new element, we use .createElement and to insert it into the DOM, we can use  .append or .appendChild

3. What is Event Bubbling? And how does it work?
ANS:
In the DOM, when we click an element, the event doesn't just stay on that element. It bubbles up from the target element to its parent, then to its grandparents, and finally to the root



4. What is Event Delegation in JavaScript? Why is it useful?
ANS:
Event delegation is a technique where we attached a single event listener to its parentNOde to manage events for all of its children?

5. What is the difference between preventDefault() and stopPropagation() methods?
ANS:
.preventDefault() is a method that tells the browser not to perform its default behavior.

.stopPropagation() is a method that stops the event from bubbling up to its parent elements