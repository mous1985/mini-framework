export class MyFramework {
    constructor() {}
  
    // Create a new DOM element with the given attributes and content
    createElement(tagName, attributes = {}, content = '') {
      const element = document.createElement(tagName);
      for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
      }
      element.textContent = content;
      return element;
    }
  
    // Add a child DOM element to a given parent
    addElement(parent, child) {
      parent.appendChild(child);
    }
  
    // Modify the content of a given DOM element
    modifyElementContent(element, newContent) {
      element.textContent = newContent;
    }
  
    // Add an event handler to a given DOM element
    addEvent(element, eventType, eventHandler) {
      element.addEventListener(eventType, eventHandler);
    }
  
    // Remove a child DOM element from a given parent
    removeElement(parent, child) {
      parent.removeChild(child);
    }
    
    // Apply CSS styles to a given DOM element
    setStyle(element, styles) {
      for (const [property, value] of Object.entries(styles)) {
        element.style[property] = value;
      }
    }
  
    // Modify attributes of a given DOM element
    modifyAttributes(element, newAttributes) {
      for (const [key, value] of Object.entries(newAttributes)) {
        element.setAttribute(key, value);
      }
    }
  
    // Remove all children from a given parent element
    removeAllChildren(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
  
    // Change the class of a given DOM element
    changeClass(element, oldClass, newClass) {
      if (element.classList.contains(oldClass)) {
        element.classList.remove(oldClass);
      }
      element.classList.add(newClass);
    }
  }
  