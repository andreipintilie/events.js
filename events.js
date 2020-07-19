/*******************************************/
/*    Hover & Active Javascript Classes    */
/*                                         */
/*  -       The Firefly Authors         -  */
/*******************************************/
/* Tip: Javascript functions are better &  */
/*      faster than the CSS standard ones. */
/*******************************************/

const hoverElement = document.querySelectorAll(
  '[data-hover], [data-active], [data-focus]'
);

[...hoverElement].forEach((element) => {
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
