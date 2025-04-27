# CSS Studies <img align="left" alt="CSS3 logo" title="CSS 3" width="40px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" style="padding-right:10px;" />
This repository´s been created in order to study and practice CSS.

Feel free to fork this repository.

## Sections 

* [What is CSS](#what-is-css.)
* [How does CSS work?](#how-does-css-work)
* [CSS Units](#css-units)
* [At-Rules](#at-rules))


## What is CSS?

<details>
<summary>See What is CSS details</summary>

CSS stands for Cascading Style Sheets language and is used to stylize elements written in a markup language such as HTML. It separates the content from the visual representation of the site. The relation between HTML and CSS is strongly tied together since HTML is the very foundation of a site and CSS is all of the aesthetics of an entire website.

</details>

## How does CSS work?

<details>
<summary>See How does CSS work details</summary>

CSS uses a simple English based syntax with a set of rules that govern it. Like we’ve mentioned before, HTML was never intended to use style elements, only the markup of the page. It was created to merely describe the content. 

For example: 

```
<p>This is a paragraph.</p>
```

But how do you style the paragraph? The CSS syntax structure is pretty simple. It has a selector and a declaration block. You select an element and then declare what you want to do with it. Pretty straightforward, right?

However, there are rules you have to remember. The structure rules are pretty simple, so don’t worry.

The selector points to the HTML elements you want to style. The declaration block contains one or more declarations separated by semicolons.

Each declaration includes a CSS property name and a value, separated by a colon. A CSS declaration always ends with a semicolon, and declaration blocks are surrounded by curly braces.

Let’s look at an example:

All of the `<p>` elements will be colored blue and bolded.

```css
<head>
<style>

p {
  color: blue;
  font-weight: bold;
}

</style>
</head>
```
</details>

## CSS Units

<details>
<summary>See CSS Units details</summary>

CSS has several different units for expressing a length.

Many CSS properties take "length" values, such as width, margin, padding, font-size, etc.

**Length** is a number followed by a length unit, such as **10px**, **2em**, **4rem** etc.

## CSS Units - Absolute Lengths

The absolute length units are fixed and a length expressed in any of these will appear as exactly that size.

Absolute length units are not recommended for use on screen, because screen sizes vary so much. However, they can be used if the output medium is known, such as for print layout.

</details>

## At-Rules

<details>
<summary>See At-Rules details</summary>

  @media defines a media query

  @support checks browser support

  @import imports an external stylesheet 

  @keyframes defines steps in an animation

  
</details>


## References

<details>
<summary>See References details</summary>

`W3 Schools`

[CSS Tutorial | W3 Schools](https://www.w3schools.com/css/default.asp)

`MDN Web Docs`

[CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS)

</details>
