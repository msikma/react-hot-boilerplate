ReactJS Boilerplate by Dada
===========================

This is an opinionated ES6-ready ReactJS boilerplate setup that includes all
packages I generally start with when developing a new website.

In a nutshell, here's what's contained in this project:

* [ReactJS](https://facebook.github.io/react/)
  (with [react-hot-loader](https://github.com/gaearon/react-hot-loader))
* [Alt](http://alt.js.org/) (Flux)
* [BabelJS](http://babeljs.io/)
* [GruntJS](http://gruntjs.com/)
* [ESLint](http://eslint.org/)
* [JSCS](http://jscs.info/) (with [Esprima-FB](https://www.npmjs.com/package/esprima-fb))
* [Webpack](http://webpack.github.io/)

There are a few other helper packages included, but these are the main
ingredients. Only [npm](https://www.npmjs.com/) packages are used.

**Isomorphism has not yet been set up, but I'm working on that...**

Originally, this repository was cloned from
[gaearon](https://github.com/gaearon/)'s
[react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate)
project.


Usage
-----

Clone or yank the code of this project and start editing away. First,
you may want to install all dependencies and run Grunt to see what
tasks are set up:

```
npm install
grunt
```

By default, it will run the `usage` command which is a more user-friendly
display of the tasks that are available.

There are three build scripts: `dev`, `staging` and `master`. Dev starts a
local development server, staging is a production-like build (with no
CDN support and still the environment variable set to 'development'),
and master is a final release build.


### Development

After installing dependencies, start the development server to get working:

```
grunt dev
open http://localhost:8080
```

Now edit `scripts/routes.js`.  
Your changes will appear without reloading the browser.


### Build system overview

* All files related to the build system (except the Gruntfile itself)
  are in `/tasks`.
* Configuration files for the build scripts are in `/tasks/config`.
* There's a copyright file in `/tasks/helpers/copyright-info.js`, which you
  might want to change to your own notice.
* The three build scripts are in `/tasks/scripts`.

When making a build, the following things need to be kept in mind:

* Files are saved to the `/public` directory, which is excluded from git.
* The dev server only emits the files it generates, without creating any
  actual JS/CSS files (until you do a staging or master build). Other files
  are still copied over.
* Staging and master builds have optimizations such as
  [UglifyJS](https://github.com/mishoo/UglifyJS).
* Everything inside `/app/assets/public` is copied over to `/public` verbatim.
  So this is where you can put your `robots.txt` and other files.
* After doing a staging or master build, you can serve the contents of the
  `/public` folder verbatim.
* The `index.html` file is generated from a
  [Mustache](http://mustache.github.io/) template. See
  `/app/assets/templates/index.html.mustache`.


### Bugs

* The sprite generator currently only works with .png files.


License
-------

MIT license.
