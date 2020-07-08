# Hover.js (Simple Hover & Active Functionality)

## Data-Hover

With `data-hover` you can set a class to an element on Hover.

Example:

```html
<button class = 'bg-blue-300' data-hover = 'bg-blue-400'>Click me</button>
```

Where `.bg-blue-300` is:

```css
.bg-blue-300 {
  background-color: #1a88ff !important;
}
```

The hover works just fine, but what if we want to use more classes within the `data-hover` attribute?
No problem, we can achieve that by splitting the classes with whitespaces, just like so:

```html
<button class = 'bg-blue-300' data-hover = 'bg-blue-400 color-red-300'>
  Click me
</button>
```

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

```html
<button
        class = 'bg-blue-300'
        data-hover = 'bg-blue-400 color-red-300'
        data-active = 'bg-blue-600'
>
  Click me
</button>
```

CSS:

```css
.bg-blue-600 {
  background-color: #0062cc !important;
}
```

Just like the `data-hover` attribute, `data-active` can store multiple classes for the active event.

```html
<button
        class = 'bg-blue-300'
        data-hover = 'bg-blue-400 color-red-300'
        data-active = 'bg-blue-600 color-red-500'
>
  Click me
</button>
```

```css
.color-red-500 {
  color: #d32535 !important;
}
```

## About
### Hover.js is compatible with any element (links, paragraphs, headings, buttons, etc...)
The conventional way to create Hover & Active through CSS is not supported by old browsers like Internet Explorer 6 or later, so this way we can use Javascript to create custom attributes in order to create the hover & active events.
