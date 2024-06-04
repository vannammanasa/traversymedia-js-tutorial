# Custom insertAfter() Challenge

**Instructions**

You may think that since there is an `insertBefore()` method, there is also an `insertAfter()`, but there isn't. In this challenge, I want you to create a custom `insertAfter()` function. If you don't want to do it as a challenge, that's fine, just follow along.

- The first param will be `newEl` which will be a new element that you create with `document.createElement()` 
- The second param will be `existingEl` which is an element in the DOM that you want to insert your new element after



Sol:-


function insertAfter(newEl, existingEl) {
  existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
}



const newEl = document.createElement('li');
li.textContent = 'Hi EveryOne!';

const existingEl = document.querySelector('li:first-child');

insertAfter(li,existingEl);