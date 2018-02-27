#!/bin/bash
echo "Starting deployment"

TARGET_BRANCH=`node -p "require('./package.json').projectConfiguration.deploymentTargetBranch"` || exit 1
echo "Target: "$TARGET_BRANCH" branch"

TEMP_DIRECTORY=`node -p "require('./package.json').projectConfiguration.buildPath"` || exit 1
CURRENT_COMMIT=`git rev-parse HEAD`
ORIGIN_URL=`git config --get remote.origin.url`
ORIGIN_URL_WITH_CREDENTIALS=${ORIGIN_URL/\/\/github.com/\/\/$GITHUB_TOKEN@github.com}

echo "Checking out "$TARGET_BRANCH" branch"
git checkout -B $TARGET_BRANCH || exit 1

echo "Removing old static content"
git rm -rf . || exit 1

echo "Copying newly generated static content"
cp -r $TEMP_DIRECTORY/* . || exit 1
cp $TEMP_DIRECTORY/.gitignore . || exit 1

echo "Committing deployment"
git add -A . || exit 1
git commit --allow-empty -m "Regenerated static content for $CURRENT_COMMIT" || exit 1
git push --force --quiet "$ORIGIN_URL_WITH_CREDENTIALS" $TARGET_BRANCH > /dev/null 2>&1

echo "Cleaning up temp files"
rm -rf $TEMP_DIRECTORY

echo "Deployment successful"
exit 0