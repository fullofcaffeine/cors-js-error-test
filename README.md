# What

This small web app can be used to test cross-origin error-reporting behavior across browsers. Providing it's correctly configured, it should serve a JS script from a different domain. It also listens to the global error event and logs its event object to the console for inspection.

# Setup

1. Run `npm install`:
1. Setup `cross.origin` to map to 127.0.0.1 in your local hosts file;
1. Start the app: `npm run start`;
1. Open the browser you want to test on and load `http://localhost:3000`;
1. Open the JS inspector and inspect the logged event error object.

# Scenarios to test

Suggestion: test in all major browsers (Chrome, Firefox, Safari).

## Cross-origin error details allowed

The app comes setup to allow cross-origin sharing of error data for js scripts served from a different origin from the top-level's. It does that by adding a `crossorigin` attribute to the script tag with a value of `anonymous` and by serving a `Access-Control-Allow-Origin: *` header alongside the HTTP request that serves the script file. In th

## Cross-origin error details muted / sanitized

This is the default [behavior](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#notes) for JS errors thrown from scripts loaded from a different origin. To test this, remove the `crossorigin` attribute from the `<script>` element in index.html, and in remove the line that sets the header in index.js in the static middleware setup (line #6).
