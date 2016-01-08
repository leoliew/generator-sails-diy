# generator-sails-diy

[![build status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![gitter][gitter-image]][gitter-url]
[![Dependency Status][DependencyStatus-image]][DependencyStatus-url]

[travis-image]: https://api.travis-ci.org/leoliew/generator-sails-diy.svg?branch=master
[travis-url]: https://travis-ci.org/leoliew/generator-sails-diy
[coveralls-image]: https://coveralls.io/repos/leoliew/generator-sails-diy/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/r/leoliew/generator-sails-diy
[gitter-image]: https://badges.gitter.im/leoliew/generator-sails-diy.svg
[gitter-url]: https://gitter.im/leoliew/generator-sails-diy?utm_source=share-link&utm_medium=link&utm_campaign=share-link
[DependencyStatus-image]: https://gemnasium.com/leoliew/generator-sails-diy.svg
[DependencyStatus-url]:https://gemnasium.com/leoliew/generator-sails-diy

sails yeoman generator

## Getting Started

Make sure you have [yo](https://github.com/yeoman/yo) installed:

```bash
npm install -g yo
```
    
Make sure you npm registry is official

```bash
npm set registry https://registry.npmjs.org/
```
  
Install the generators:

```bash
npm install -g generator-sails-diy
```

Create project directory and `cd` into it:

```bash
mkdir my-project && cd $_
```

Run sails-diy generator:

```bash
yo sails-diy
```

To run project:

```bash
sails lift
```

To test:

```bash
npm test
```
To test and make coverage report:

```bash
npm run coverage
```

## License

MIT
