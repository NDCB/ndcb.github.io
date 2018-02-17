[![Build Status](https://travis-ci.org/NDCB/ndcb.github.io.svg?branch=development)](https://travis-ci.org/NDCB/ndcb.github.io)

# ndcb.github.io

[ndcb.github.io](https://ndcb.github.io) is an educational website with reinforcement articles on mathematics, physics and computer science. Its goal is to provide access to thorough explanations and examples on topics related to computer science. It was developed with localization in mind.

## Currently Supported Locales

* Canadian French ([fr-CA](https://ndcb.github.io/fr-CA)).

## Run on a Web Server

Install the package dependencies:

`npm install`

Run the HarpJS web server:

`npm run server`

## Deployment

Any merged pull requests in the `development` branch will be automatically deployed to the master branch by [Travis CI](https://travis-ci.org/NDCB/ndcb.github.io). 

## Built With

* [Harp](http://harpjs.com) - Used to compile the website and provide file metadata to the template.
* [Jade/Pug](https://pugjs.org) - Used to create the website's template.
* [Sass](http://sass-lang.com) - Used to style the website.
* [GeoGebra](https://www.geogebra.org) - Used to generate scalable vector graphics of mathematics in the articles.

## Authors

* **Marc-Antoine Ouimet** - [MartyO256](https://github.com/MartyO256)

## License

The locale directories in `public/` and their contents are copyrighted by me, Marc-Antoine Ouimet, unless otherwise stated and may not be reused without my permission.

All other files, except for brand-related logos, are licensed under the MIT license.

## Acknowledgments

* Shoutout to [Ines Montani](https://github.com/ines), whose [source](https://github.com/ines/ines-io) for [her personnal blog](https://ines.io) as well as [her ultimate guide to static websites with Harp and Jade](https://ines.io/blog/the-ultimate-guide-static-websites-harp-jade) were greatly instructive in developing this website.
* Also shoutout to [Jurgen Van de Moere](https://twitter.com/jvandemo) for his tutorial on [how to use Travis CI to automatically deploy a HarpJS application to GitHub Pages](https://www.jvandemo.com/how-to-use-travis-ci-to-automatically-deploy-a-harpjs-application-to-github-pages/).
