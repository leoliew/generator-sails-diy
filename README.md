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

* ```npm install -g yo``` (Make sure you have [yo](https://github.com/yeoman/yo) installed)
* ```npm set registry https://registry.npmjs.org/``` (Make sure you npm registry is official)
* ```npm install -g generator-sails-diy``` (Install the generators)
* ```mkdir my-project && cd $_``` (Create project directory and `cd` into it)
* ```yo sails-diy``` (Run sails-diy generator)
* ```sails lift``` (To run project)
* ```npm test``` (To test)
* ```npm run coverage``` (To test and make coverage report)


## Generator Command

* ```yo sails-diy:model Ticket --rest```(Create a model in your app)
* ```yo sails-diy:cron cron1 cron2```(Create a cron in your app)
* ```yo sails-diy:service ping```(Create a service in your app)
* ```yo sails-diy:policy auth```(Create a policy in your app)
* ```npm start```(Compose your API and run)
* ```npm test```(Run unit test in your project)

## License

MIT
