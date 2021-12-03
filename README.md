# ionic-react-component-template

This is a template component for publishing Ionic React Functional Components to npm.

Copy this template, change a few files, publish your component to npm.  No fuss.  No muss.  Easy, peasy.

It's super easy, but it's also pretty opinionated:

- This is for ReactJS components (will it work for React Native?  I don't know -- maybe? probably?)
- This is designed for [Ionic Framework](https://ionicframework.com) projects, although it can be adapated for non-Ionic projects pretty easily.
- This is for Functional Components (not Class-based components.)  If you have a `constructor()`, you're probably in the wrong place.

## Customize Me!
Add as many components as you like, but for each one make sure you:

- use `export const` at the beginning of each component you want to expose: see [Hello.tsx](./src/Hello.tsx)
- import any files that have exposed components, utility functions, or models in [index.ts](./src/index.ts)

## Deploy Me!
A [publish.sh](./publish.sh) script has been provided, but it basically just does two things:
```sh
npm run build
npm publish
```
