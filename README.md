# PuliTrello

[![Build Status](https://travis-ci.org/chrisvanmook/pulitrello.svg?branch=master)](https://travis-ci.org/chrisvanmook/pulitrello) [![devDependencies](https://david-dm.org/chrisvanmook/pulitrello/dev-status.svg)](https://david-dm.org/chrisvanmook/pulitrello#info=devDependencies&view=table)

A simple trello clone for pulilab assignment, made with angular, firebase and bootstrap.

## Dependencies
Please make sure you have the following installed globally:
- [NodeJS](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [bower](http://bower.io/)

## How to install
Make sure you have the dependencies described above installed:
### NodeJS:
Go to [nodejs.org](https://nodejs.org/) and download & install NodeJS on your System.

### Bower
Run `npm install -g bower` to install bower globally on your system

If all the dependencies are installed, please clone this repository. `cd` to the root folder and run `npm install`. This will install the npm packages and bower dependencies.

## Start development environment
Run `gulp serve` (or alternatively `npm start`) to start the server with your generated webapp.

## Build & start a test production environment
Run `gulp serve:dist`, this creates a `dist` folder that can be used for production.

## Configurations
In the generated `gulpfile.js` file, please adjust the global `var config` to your needs.
