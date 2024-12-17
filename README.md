# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - QR code component solution](#frontend-mentor---qr-code-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview
This is a QR Component that was built with HTML and Tailwind CSS and is based on a provided design.

### Screenshot

![](/images/qr-component-screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
I was provided with a design brief, so I first looked over this to see what the finished product should look like. 
Then I added all the content in HTML to get a basic layout and added styling to this with Tailwind CSS until it looked as close to the design as possible. 


### Built with

- Semantic HTML5 markup
- Tailwind CSS
  

### What I learned

I learnt how to add my own custom font sizing and style by adding the following to the tailwind.config.js file:

```js
  theme: {
    fontSize: {
      '2xl': '22px',
      sm: '15px',
    },
    extend: {
      fontFamily: {
        "outfit": ['Outfit', 'sans-serif']
    }
    },
  },
```

### Useful resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation) - This helped me when it came to adding Tailwind CSS to my project and I also referred to the documentations for different styling features.


## Author

- Frontend Mentor - [@aosull97](https://www.frontendmentor.io/profile/yourusername)
