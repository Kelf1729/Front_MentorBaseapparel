# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./design/desktop-design.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/Kelf1729/Front_MentorBaseapparel.git)
- Live Site URL: [Add live site URL here](https://kelf1729.github.io/Front_MentorBaseapparel/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

Mudança de imagens de acordo com o tamanho da tela pelo html, como segue abaixo:

```html
<div class="right">
  <picture>
    <source media="(min-width: 1000px)" srcset="./images/hero-desktop.jpg" />
    <img src="./images/hero-mobile.jpg" alt="" />
  </picture>
</div>
```

Onde a imagem será do desktop até o valor min de width de 1000px, abaixo disso será aplicado hero-mobile, isso permite mudar entre as duas imagens de acordo com o tamanho da tela.

```js
const proudOfThisFunc = () => {
  console.log("🎉");
};
```

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
