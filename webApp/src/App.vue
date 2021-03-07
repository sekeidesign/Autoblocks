<template>
  <Purge/>
</template>

<script>
import Purge from "./components/purge.vue";

export default {
  name: "App",
  components: {
    Purge
  },
};
</script>

<style>
/* --------- Colour Variables --------- */

:root{
  --blue-600: rgba(46, 170, 220, 1);
  --blue-500: rgba(6, 156, 205, 1);
  --blue-400: rgba(0, 145, 190, 1);
}

/* --------- Styles --------- */

.btn-primary {
  height: 32px;
  padding: 0px 12px;
  box-shadow: 0px 1px 2px rgba(15, 15, 15, 0.1), inset 0px 0px 1px rgba(15, 15, 15, 0.5);
  border-radius: 3px;
  text-align: center;
  background-color: var(--blue-600);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
}
.btn-primary:hover {
  background-color: var(--blue-500);
}
.btn-primary:active {
  background-color: var(--blue-400);
}

/* --------- CSS Reset --------- */

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

button {
  border: none;
  outline: none;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #37352F;
}
</style>
