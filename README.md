# Events.js

## Data-Hover

With `data-hover` you can set a class to an element on Hover.

```html
<button
  class = 'bg-blue-300'
  data-hover = 'bg-blue-400'
>      
  Click me	
</button>
```

CSS:

```css
.bg-blue-300{
  background-color: #1a88ff !important;
}

.bg-blue-400{
  background-color: #007bff !important;
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

CSS:

```css
.color-red-500 {
  color: #d32535 !important;
}
```

## Data-Focus

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

## About
Events.js is compatible with any element (links, paragraphs, headings, buttons, etc...)
