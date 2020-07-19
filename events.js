/*******************************************/
/*  Events.js | CSS events via Javascript  */
/*                                         */
/*  -       The Firefly Authors         -  */
/*******************************************/
/* Tip:    Javascript events are better &  */
/*      faster than the CSS standard ones. */
/*******************************************/

const eventElement = document.querySelectorAll(
  '[data-hover], [data-active], [data-focus], [data-transition]'
);

[...eventElement].forEach((element) => {
  let transitionAttribute = element.getAttribute('data-transition');

  [...transitionAttribute.split(' ')].forEach((eachClass) => {
    element.style.transition = `all ${eachClass}s ease-in-out`;
  });
});

[...eventElement].forEach((element) => {
  let hoverattribute = element.getAttribute('data-hover');
  let activeattribute = element.getAttribute('data-active');
  let focusattribute = element.getAttribute('data-focus');

  element.onmouseenter = () => {
    if (!hoverattribute) return;

    if (hoverattribute.charAt(0) === ' ')
      hoverattribute = hoverattribute.substr(1);

    [...hoverattribute.split(' ')].forEach((eachClass) => {
      element.classList.add(eachClass);
    });
  };

  element.onmouseleave = () => {
    if (!hoverattribute) return;

    if (hoverattribute.charAt(0) === ' ')
      hoverattribute = hoverattribute.substr(1);

    [...hoverattribute.split(' ')].forEach((eachClass) => {
      element.classList.remove(eachClass);
    });
  };

  element.onmousedown = () => {
    if (!activeattribute) return;

    if (activeattribute.charAt(0) === ' ')
      activeattribute = activeattribute.substr(1);

    [...activeattribute.split(' ')].forEach((eachClass) => {
      element.classList.add(eachClass);
    });
  };

  element.onmouseup = () => {
    if (!activeattribute) return;

    if (activeattribute.charAt(0) === ' ')
      activeattribute = activeattribute.substr(1);

    [...activeattribute.split(' ')].forEach((eachClass) => {
      element.classList.remove(eachClass);
    });
  };

  element.onfocus = () => {
    if (!focusattribute) return;

    if (focusattribute.charAt(0) === ' ')
      focusattribute = focusattribute.substr(1);

    [...focusattribute.split(' ')].forEach((eachClass) => {
      element.classList.add(eachClass);
    });
  };

  element.onblur = () => {
    if (!focusattribute) return;

    if (focusattribute.charAt(0) === ' ')
      focusattribute = focusattribute.substr(1);

    [...focusattribute.split(' ')].forEach((eachClass) => {
      element.classList.remove(eachClass);
    });
  };
});
