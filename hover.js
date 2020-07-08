/*******************************************/
/*    Hover & Active Javascript Classes    */
/*                                         */
/* Tip: Javascript functions are better &  */
/*      faster than the CSS standard ones. */
/*******************************************/

let hoverAttribute, activeAttribute;

let hoverArray = [],
    activeArray = [];

// 1. Creating the Hover & Active attributes for buttons and links !
const documentElement = document.querySelectorAll('[data-hover]'); //Will also store the [data-active]

documentElement.forEach((el) => {
    if (el.getAttribute('data-hover'))
        hoverAttribute = el.getAttribute('data-hover');

    // Hover Event
    el.onmouseenter = function () {
        hoverAttribute = el.getAttribute('data-hover');

        if (hoverAttribute.length == 0) return false;

        if (hoverAttribute === null) return;

        //Checking if the first character is empty
        if (hoverAttribute.charAt(0) === ' ')
            hoverAttribute = hoverAttribute.substr(1);

        //Creating an array which contains the hover classes
        let hoverArray = hoverAttribute.split(/[\s]+/);

        //Iterating the new array
        hoverArray.forEach((eachClass) => el.classList.add(eachClass));
    };
    // Exit Hover Event
    el.onmouseleave = function () {
        hoverAttribute = el.getAttribute('data-hover');

        if (hoverAttribute.length == 0) return;

        //Checking if the first character is empty
        if (hoverAttribute.charAt(0) === ' ')
            hoverAttribute = hoverAttribute.substr(1);

        //Calling again the array
        let hoverArray = hoverAttribute.split(/[\s]+/);

        let unique = [...new Set(hoverArray)];

        //Iterating the new array
        unique.forEach((eachClass) => {
            el.classList.remove(eachClass);
        });
    };

    // Active Event
    el.onmousedown = function () {
        activeAttribute = el.getAttribute('data-active');
        if (!activeAttribute) return false;
        if (
            (typeof hoverAttribute != null && activeAttribute === null) ||
            el === null
        )
            return;

        //Checking if the first character is empty
        if (activeAttribute.charAt(0) === ' ')
            activeAttribute = activeAttribute.substr(1);

        //Creating an array which contains the hover attributes
        let activeArray = activeAttribute.split(/[\s]+/);

        //Iterating the new array
        activeArray.forEach((eachClass) => {
            el.classList.add(eachClass);
            if (el.classList.contains(hoverAttribute))
                el.classList.remove(hoverAttribute);
        });
    };
    // Exit Active Event
    el.onmouseup = function () {
        activeAttribute = el.getAttribute('data-active');

        if (!activeAttribute) return;

        if (activeAttribute === null || el === null) return;

        //Checking if the first character is empty
        if (activeAttribute.charAt(0) === ' ')
            activeAttribute = activeAttribute.substr(1);

        //Creating an array which contains the hover attributes
        let activeArray = activeAttribute.split(/[\s]+/);

        let unique = [...new Set(activeArray)];

        //Iterating the new array
        unique.forEach((eachClass) => {
            el.classList.remove(eachClass);
        });
    };
});
