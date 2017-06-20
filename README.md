# Getting started with webpack 2

Getting started with webpack 2 exhibiting the following
 * Loaders to process different assets
 * Common chunks plugin to bundle all vendor files separately
 * Custom html template and asset injection. For more info [page](https://github.com/petehunt/webpack-howto/issues/46)
 * Extract all css chunks to a separate file
 * Sourcemap only for application files and not vendor files

Will be using the below vendor libraries

* jQuery
* bootstrap
* sass

### Install dependencies

```
npm install
```

### Runs webpack dev server with NODE_ENV set to development

1. Run

	```
	npm run dev
	```
	
### Runs webpack dev server with NODE_ENV set to production
    
2. Run

    ```
    npm run prod
    ```
Injects app.prod.js only when run in production mode, just like requested in this [issue]((https://github.com/petehunt/webpack-howto/issues/46))

### Building

3. In your browser, navigate to: [http://localhost:8008/](http://localhost:8008/)

    ```
	npm run build
	```
