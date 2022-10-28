# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - NFT preview card component solution](#frontend-mentor---nft-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
  - [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./solution.JPG)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Pseudoclasses
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This challenge required a little bit more of good practices and knowledge of CSS. As for a lot of projects already done, I applied Semantic HTML5 structure to improve accesibility and screen-reading, and BEM methodology for element's classes. 

For CSS, besides using Flexbox, Grid and other properties, I used pseudoclasses to insert the icon images in the card, but also to make visible the eye image when hover the figure.

I did'nt know how to do this, but after some thinking and stak overflow research, I figured out this:
- In HTML, the img element is within a figure element (this provides more accesibility info instead of using div). So I applied a background-color to the figure to make it blue
- In CSS, when hovering the image, it gets opacity and the blue bakcground is shown
- For the icon to be shown, I inserted it on HTML and then made its position absolute to center it on the image.

The code of this part is the following:

```html
<figure class="card__figure">
  <img src="images/image-equilibrium.jpg" alt="nft image" class="card__img">
  <figcaption class="offscreen">NFT image</figcaption>
  <img src="./images/icon-view.svg" class="card__view">
</figure>
```
```css
img{
    display: block;
    width: 100%;
}
.card__figure {
    position: relative;
    background-color: var(--hover-color);
    border-radius: 10px;
    overflow: hidden;
}
.card__view {
    height: 80px;
    width: auto;
    position: absolute;
    top: -100px;
    left: calc(50% - 40px);
    z-index: 1;
}
.card__img:hover {
    opacity: .5;
    cursor: pointer;
    transition: .2s;
}
.card__img:hover ~ .card__view {
    top: calc(50% - 40px);
}
```

If you have any ideas on how to improve this, or if you have any suggestions, your comment is very welcome!

## Author

- Frontend Mentor - [@develoba](https://www.frontendmentor.io/profile/develoba)
- Twitter - [@develoba](https://www.twitter.com/develoba)