CruzHacks 2023 main site built with React, Typescript, yarn and hosted with firebase.

How to Run
=======

1. Clone this repository 
2. Set githooks with `git config core.hooksPath ./.githooks`
3. Navigate to the root of the repository and run `yarn` which will install all the dependencies
4. Running `yarn start` will begin a development server on `localhost:3000` where you can see the web app being served


Available Scripts
========

* `yarn start` starts a development server
* `yarn lint:ts` runs the linter for all typescript files
* `yarn lint:css` runs the linter for all scss files
* `yarn format` runs the prettier formatter for all typescript files
* `yarn test` runs the jest testing suite 
* `yarn build` creates a production build