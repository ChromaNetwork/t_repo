`yarn install`

`yarn build`

`yarn start-dev`

Uses Material-UI for UI elements and layout.

Supported browsers:
https://material-ui.com/getting-started/supported-platforms/

```
IE	Edge	Firefox	Chrome	Safari
11	>= 14	>= 45	>= 49	>= 10
```

Dependencies:

```
"babel-polyfill": "^6.26.0", -- For polyfill of ES7 features to ES5
"normalize.css": "^8.0.0", -- Normalizes the CSS of the site for cross-browser consistency
"react": "^16.4.1", -- React
"react-dom": "^16.4.1", -- React
"react-feather": "^1.1.1", -- Feather Icons in React Components
"react-router-dom": "^4.3.1", -- Routing with react
"styled-components": "^3.3.3"  -- Modular css themeing in-line
```

## Tweaks that would improve the site long-term ("TODOs"):

s - small effort
m - medium effort
l - large effort

-   Accessibility improvements (aria-attributes, etc.) - s
-   Localization (incl. rtl/ltr optimizations) - l
-   Basic CMS login / editing of content via portal -- storage of content on server or firebase integration - l
-   More responsive design (rem instead of pixels, flexible grid layouts, assets in other sizes for smaller / bigger screens) - m
-   Automated github build/deployment (CI) - s
-   Testing on more browsers / devices. - m
-   SEO - s
