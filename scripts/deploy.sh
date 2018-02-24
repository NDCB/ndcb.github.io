#!/bin/bash
echo "Starting deployment"
echo "Target: master branch"

PROJECT_PATH=`node -p "require('./package.json').projectDirectory"`
DATA_FILE=$PROJECT_PATH"_data.json"
DEFAULT_LOCALE=`node -p "require('$DATA_FILE').website.defaultLocale"` || exit 1
echo "Default locale set to "$DEFAULT_LOCALE

TEMP_DIRECTORY="/tmp/deploy"
CURRENT_COMMIT=`git rev-parse HEAD`
ORIGIN_URL=`git config --get remote.origin.url`
ORIGIN_URL_WITH_CREDENTIALS=${ORIGIN_URL/\/\/github.com/\/\/$GITHUB_TOKEN@github.com}

echo "Compiling new static content"
mkdir $TEMP_DIRECTORY || exit 1
node index.js compile -i $PROJECT_PATH -o $TEMP_DIRECTORY || exit 1
cp .gitignore $TEMP_DIRECTORY || exit 1

echo "Checking out master branch"
git checkout -B master || exit 1

echo "Removing old static content"
git rm -rf . || exit 1

echo "Copying newly generated static content"
cp -r $TEMP_DIRECTORY/* . || exit 1
cp $TEMP_DIRECTORY/.gitignore . || exit 1

echo "Copying the default locale at the root path"
rm -rf $TEMP_DIRECTORY
mkdir $TEMP_DIRECTORY || exit 1
cp -r ./$DEFAULT_LOCALE/* $TEMP_DIRECTORY || exit 1
rm -rf ./$DEFAULT_LOCALE
cp -r $TEMP_DIRECTORY/* . || exit 1

echo "Committing deployment"
git add -A . || exit 1
git commit --allow-empty -m "Regenerated static content for $CURRENT_COMMIT" || exit 1
git push --force --quiet "$ORIGIN_URL_WITH_CREDENTIALS" master > /dev/null 2>&1

echo "Cleaning up temp files"
rm -rf $TEMP_DIRECTORY

echo "Deployed successfully."
exit 0