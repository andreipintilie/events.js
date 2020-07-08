# Hover.js (Simple Hover & Active Functionality)

## Data-Hover

With `data-hover` you can set a class to an element on Hover.

Example:

![Data-Hover Code](https://raw.githubusercontent.com/andreipintilie/hover.js/master/img/1.PNG)

Where `.bg-blue-300` is:

```css
.bg-blue-300 {
  background-color: #1a88ff !important;
}
```

The hover works just fine, but what if we want to use more classes within the `data-hover` attribute?
No problem, we can achieve that by splitting the classes with whitespaces, just like so:

![Data-Hover with Multiple Classes](https://raw.githubusercontent.com/andreipintilie/hover.js/master/img/2.PNG)

CSS:

```css
.bg-blue-400 {
  background-color: #007bff !important;
}
.color-red-300 {
  color: #e04b59 !important;
}
```

## Data-Active

With `data-active` you can set a class to an element on Active.

Example:

![Data-Active Code](https://raw.githubusercontent.com/andreipintilie/hover.js/master/img/3.PNG)

CSS:

```css
.bg-blue-600 {
  background-color: #0062cc !important;
}
```

Just like the `data-hover` attribute, `data-active` can store multiple classes for the active event.

![Data-Active with Multiple Classes](https://raw.githubusercontent.com/andreipintilie/hover.js/master/img/4.PNG)

```css
.color-red-500 {
  color: #d32535 !important;
}
```

## About
The conventional way to create Hover & Active through CSS is not supported by old browsers like Internet Explorer 6 or later, so this way we can use Javascript to create custom attributes in order to create the hover & active events.
