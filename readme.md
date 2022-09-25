# Example project for Webengeneering

## Einzelprojekt – Web Engineering
### General Requirements (5 Points):
> Responsive page content (at least: 1920×1080, 1440×900, 360x640)
> No Javascript Frameworks/Libraries (JQuery, Angular, React, Vue and so on) – CSS
### Libraries are ok -> K.O. criterion!
> Clear and consistent project structure (e.g. folders, resources, …)
> Separate resource files (e.g. css, html and scripts)
> WAI compliant (Lighthouse analysis)
### Learning Objective: Know how to apply a modern webtoolchain with npm and Webpack
It is possible to use other Build tools than Webpack, if they support the same features (eg. Vite,
Parcel)
#### Project setup with npm and Webpack (15 Points)
> Build the application with npm and Webpack
> Define 2 Builds (in npm scripts):
> Development
> Production (obfuscated and minified)
> Keep your builds clear and add dependencies to the right build (eg. don’t add dev dependencies inside the prod build)
### Learning Objective: Create a basic HTML5 project with multiple linked pages
#### Multiple Pages (Home, About, Contents) (5 Points)
> Implement multiple pages with proper navigation
### Learning Objective: Know how to use APIs and request their service via Ajax from JS
#### Consume API Data with Ajax (10 Points)
> API samples:
o List public APIs: https://github.com/public-apis/publicapis/blob/master/README.md
o https://english.api.rakuten.net/matchilling/api/chuck-norris
o https://http.cat/
o https://dog.ceo/dog-api/documentation/
You can decide HOW your app consumes the API data (XMLHttpRequest, fetch, Axios, …)
### Learning Objective: Use the DOM API to manipulate the UI dynamically
#### DOM Manipulation (10 Points)
> Render requested API data in HTML (table, list, containers, …)
> Add/remove data from list to a container (eg “favorites” or “shopping cart”)
### Learning Objective: Know how to implement HTML5 forms an how to properly validate user input with JS and HTML5
#### Implement a form (10 Points)
> that consists of following fields: text, number, password, email
o make use of attributes
> input is validated on user event (click, hover, enter, …)
o choose at least 1 event handler
> input validation (error/success) is presented to the user (modal, in-form highlighting, …)
### Learning Objective: Know how to implement a CI/CD pipeline to automate the release process
#### Webpage Hosting (5 Points)
> Host your production build in an automated manner via Github Actions and a Hosting Provider of your choice (eg. Github Pages, Netlify, AWS, Azure, …)
### Learning Objective: Understand and apply advanced Web-frontend topics and technologies
#### Optional extra points (max. 4 Points)
> Use Typescript (2 Pts.)
> Use SASS/SCSS (2 Pts.)
> Configure ESLint (2 Pts.)
> Use Babel (2 Pts.)
## Overall Points: 60