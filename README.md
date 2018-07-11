## **devDependencies**

**Bundling**

-   `webpack` -- Webpack https://webpack.js.org/concepts/
-   `webpack-dev-server` -- Convenient temporary server for testing
-   `html-webpack-plugin` -- Creates or maps html templates for JS bundles
-   `file-loader` -- Loads assets into output during webpacking (fonts, svgs, etc)

**Transpiling / Polyfill**

-   `babel-core` -- Babel transpiles ES2015+ to another target (ES5)
-   `babel-loader` -- Loader used for webpack integration of babel
-   `babel-runtime` -- Required for storybook
-   `babel-eslint` -- Parser for eslint to handle flowtyping correctly (default parser does not handle typing syntax)
-   `babel-preset-env` -- Preset containing syntax transpiling for ES2015+
-   `babel-preset-react` -- Preset containing React/Flow transpiling
-   `babel-polyfill` (**NOT a devDependency**) -- Polyfill for modern JS functions (like Object.assign)

**Linting / Code Standards**
(Can use VSCode Extensions alternatively)

-   `eslint` -- Javascript linting utility
-   `eslint-loader` -- ESLint loader for webpack integration
-   `eslint-config-airbnb` -- Airbnb's popular eslint rules\*
    -   Requires Dependencies: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
-   `prettier` -- Code Formatter
-   `eslint-plugin-flowtype` -- For eslint to lint flowtyping correctly
-   `eslint-import-resolver-webpack` -- Allows eslint to detect webpack aliasing import statements to avoid messy relative import paths
-   `eslint-plugin-prettier` -- https://prettier.io/docs/en/eslint.html For prettier + eslint combination
-   `eslint-config-prettier` -- https://prettier.io/docs/en/eslint.html For prettier + eslint combination
-   `flow-bin` -- https://flow.org/en/docs/install/ static typing for JS

**Required Configuration Files**

    webpack.config.js -- Webpack configuration
    .babelrc -- Babel configuration
    .eslintrc -- ESLint configuration
    .prettierrc -- Prettier configuration
    .flowconfig -- Flow configuration

## **dependencies**

**React**

-   `react` -- React.
-   `react-dom` -- React DOM rendering
-   `react-router-dom` -- Routing with React to have separate "pages".

**Style and API**

-   `animejs` -- https://github.com/juliangarnier/anime Pretty animation engine
-   `styled-components` -- https://www.styled-components.com/docs/basics#motivation Good styling solution for react components in atomic design pattern
-   `axios` -- REST Api calls

##Tweaks that would improve the site long-term:

-   Accessibility improvements (aria-attributes, etc.)
-   Localization
-   Basic CMS login / editing of content via portal -- storage of content on server
