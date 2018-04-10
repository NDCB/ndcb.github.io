[![Website](https://img.shields.io/website-up-down-green-red/http/ndcb.github.io.svg?label=NDCB)](https://ndcb.github.io)
[![Build Status](https://travis-ci.org/NDCB/ndcb.github.io.svg?branch=development)](https://travis-ci.org/NDCB/ndcb.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub commits](https://img.shields.io/github/commits-since/NDCB/ndcb.github.io/article.svg)](https://github.com/NDCB/ndcb.github.io/tree/redaction)
[![GitHub Stats](https://img.shields.io/badge/github-stats-ff5500.svg)](http://githubstats.com/NDCB/ndcb.github.io)

# ndcb.github.io

[ndcb.github.io](https://ndcb.github.io) is an educational website with reinforcement articles on mathematics, physics and computer science. Its goal is to provide access to thorough explanations and examples on topics related to computer science. It was developed with localization in mind.

## Currently Supported Locales

* Canadian French ([fr-CA](https://ndcb.github.io/)).

## Run on a Web Server

Install the package dependencies:

`npm install`

Start the web server for redaction:

`npm start`

Preview the website as it would be when compiled. Links made to documents in the website's default locale will be broken, as their leading locale path will have been removed. It should also be noted that in this mode, advertisements and analytics scripts will be run on pages they are intended to be in production mode:

`npm run preview`

## Compilation and Deployment

Any merged pull requests in the `development` branch will be automatically deployed to the master branch by [Travis CI](https://travis-ci.org/NDCB/ndcb.github.io).

To compile the website locally, run the `./scripts/build.sh` script using:

`npm run build`

## Built With

* [Harp](http://harpjs.com) - Used to compile the website and provide file metadata to the template.
* [Jade/Pug](https://pugjs.org) - Used to create the website's template.
* [Sass](http://sass-lang.com) - Used to style the website.

### Other Dependencies

* [Browsersync](https://browsersync.io/)
* [Normalize.css](http://necolas.github.io/normalize.css/)
* [Flexbox Grid](http://flexboxgrid.com/)
* [Font Awesome](https://fontawesome.com/)

## Authors

* **Marc-Antoine Ouimet** - [MartyO256](https://github.com/MartyO256)

## License

The locale directories in `public/` and their contents are copyrighted by me, Marc-Antoine Ouimet, unless otherwise stated and may not be reused without my permission.

All other files, except for brand-related logos, are licensed under the MIT license.

## Acknowledgments

* Shoutout to [Ines Montani](https://github.com/ines), whose [source](https://github.com/ines/ines-io) for [her personnal blog](https://ines.io) as well as [her ultimate guide to static websites with Harp and Jade](https://ines.io/blog/the-ultimate-guide-static-websites-harp-jade) were greatly instructive in developing this website.
* Shoutout to [Jurgen Van de Moere](https://twitter.com/jvandemo) for his tutorial on [how to use Travis CI to automatically deploy a HarpJS application to GitHub Pages](https://www.jvandemo.com/how-to-use-travis-ci-to-automatically-deploy-a-harpjs-application-to-github-pages/).
* Shoutout to [Steve Jamesson](https://github.com/jevets) for [his Harp boilerplate](https://github.com/jevets/harp-starter) that allows the use of Node modules in Harp templates.
