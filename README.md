# Events.js

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

With `data-focus` you can set a class to an element on the focus event.

Example:

```html
<input
        type="text"
        class="bg-blue-300 color-default"
        data-focus="color-dark"
/>
```

CSS:

```css
.color-dark {
  color: #333333 !important;
}
```

Just like the `data-hover` and `data-active` attributes, `data-focus` can store multiple classes for the focus event.

```html
<input
        type="text"
        class="bg-blue-300 color-default"
        data-focus="color-dark bg-gray-100"
/>
```

```css
.bg-gray-100 {
  background-color: #d7dbdf !important;
}
```

## Data-Focus

## About
Hover.js is compatible with any element (links, paragraphs, headings, buttons, etc...)

The basic way to create hover & active events through CSS is not supported by old browsers, so now we have a solution for that!
Hover.js was built with vanilla Javascript, you can create Hover & Active events using CSS classes.
