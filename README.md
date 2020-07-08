# Hover.js (Simple Hover & Active Functionality)

## Usage
Let's say we have defined some CSS classes:
```css
.color-black{
  color: black;
}
.color-red{
  color: red;
}
.color-green{
  color: green;
}
```

We are gonna use these classes like so:
```html
<p
   class = 'color-black'
   data-hover = 'color-red'
   data-active = 'color-green'
>
  Click me!
</p>
```

But if we want to apply more classes, we can do that easily!
Let's say we want to also change the background on hover & active.
```html
<p
   class = 'color-black'
   data-hover = 'color-red bg-gold'
   data-active = 'color-green bg-blue'
>
  Click me!
</p>
```

Where `.bg-gold` and `.bg-blue` are:
```css
.bg-gold{
  background: #FFD700;
}
.bg-blue{
  background: #375FFF;
}
```

## About
The conventional way to create Hover & Active through CSS is not supported by old browsers like Internet Explorer 6 or later, so this way we can use Javascript custom attributes to create hover & active events.
