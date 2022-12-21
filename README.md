# Amazon Camel

Show price trends from CamelCamelCamel.  

This is an experimental API personal project.  

## Where do I edit?  

Conventionally, a Chrome Extension would need to edit the file under the
`default_popup:` field in the `manifest.json` file.

With React the contents of the React are read in this connection:

1. `default_popup:` or in this case, `index.html` which has `<p id='root'></p>`
connected to
1. `const root = ReactDOM.createRoot(document.getElementById('root'));`
in `src/index.js`

## Building package

This project uses React with the Chrome Extension.  

To build and further upload, side-load, or distribute the extension, run
`npm run build` which will create a `build` directory which should be pointed
to when loading into a Chromium type browser.  

As compared to a conventional Chrome Extension, the `manifest.json`,
`background.js` script, etc. are found in the `public` directory.  

The contents of React app are found in the `src` directory.  

## Why use React

*Why use React?*

Adding React will enable us to use `npm`.  

*Why use npm?*

`npm` enables us to use anything in the `npm` library.  

*What's in the npm library?*

Everything.  <https://docs.npmjs.com/about-npm>

## Common developer pitfalls

**Could not find a required file.**

An `index.html` file is required in the `public` directory.  Use this
`index.html` as the `default_popup:`.

**Line 9:25:  'chrome' is not defined  no-undef.**

Using `chrome` functions can only be called in the `public` directory.

## Attributions

<a
href="https://www.flaticon.com/free-icons/business-and-finance"
title="business and finance icons">
Business and finance icons created by Pixel perfect - Flaticon
</a>

## Disclaimers

- I DO NOT MAKE REVENUE ON THIS.  
- No user data is collected.
