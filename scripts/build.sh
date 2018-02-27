#!/bin/bash
echo "Starting build"

TEMP_DIRECTORY=`node -p "require('./package.json').projectConfiguration.buildPath"` || exit 1
PROJECT_PATH=`node -p "require('./package.json').projectConfiguration.directory"` || exit 1
DATA_FILE=$PROJECT_PATH"_data.json"
DEFAULT_LOCALE=`node -p "require('$DATA_FILE').website.defaultLocale"` || exit 1

echo "Default locale set to "$DEFAULT_LOCALE

echo "Compiling new static content"
mkdir $TEMP_DIRECTORY || exit 1
node index.js compile -i $PROJECT_PATH -o $TEMP_DIRECTORY || exit 1
cp .gitignore $TEMP_DIRECTORY || exit 1

echo "Copying the default locale at the root path"
cp -r $TEMP_DIRECTORY/$DEFAULT_LOCALE/* $TEMP_DIRECTORY || exit 1
rm -rf $TEMP_DIRECTORY/$DEFAULT_LOCALE

echo "Build successful."
exit 0