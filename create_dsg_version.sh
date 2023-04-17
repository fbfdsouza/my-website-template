#!/usr/bin/env bash

mainBranch="master"
branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
versionMode="patch"

PACKAGE_VERSION=$(node -p -e "require('./package.json').version");

# Checking if a version mode argument was provided
if [ \( -z $1 \) ]; then
    echo "No version mode specified, using $versionMode"
else
    versionMode=$1
    echo "Version mode: $versionMode"
fi

# Checking if a mainBranch argument was provided
if [ \( -z $2 \) ]; then
    echo "No mainBranch specified, using $mainBranch"
else
    mainBranch=$2
    echo "mainBranch: $mainBranch"
fi

# Returns the commit message of the last git commit
function git_last_message {
  echo $(git log -1 --pretty=format:'%s')
}

if [ "$branch" == "$mainBranch" ]; then
    lastMessage=$(git_last_message)
    if [[ "$lastMessage" =~ ^([0-9]+\.){2}[0-9]+$ ]]; then
        echo "Last commit was a version generation commit, not generating again."
        exit 1
    else
        IFS='.' read -r -a parts <<< "$PACKAGE_VERSION"
        year="${parts[0]}"
        month="${parts[1]}"
        patch="${parts[2]}"

        if [ "$versionMode" = "major" ]; then
            year=$((year+1))
            month=01
            patch=1
        elif [ "$versionMode" = "minor" ]; then
            if [ "$month" -eq 12 ]; then
                year=$((year+1))
                month=01
            else
                month="${month#0}"
                month=$(printf "%02d" "$((month+1))")
            fi
            patch=1
        elif [ "$versionMode" = "patch" ]; then
            patch=$((patch+1))
        else
            echo "Invalid version type" >&2
            exit 1
        fi

        echo "Generating version..." && \
        ignores yarn.lock changes
        git checkout yarn.lock && \
        echo "Ensuring that no other commit got pushed..." && \
        git push origin ${branch} && \
        echo "Updating tags..." && \
        npm run clean:tags && \
        echo "Fetching new changes..." && \
        git pull origin ${branch} && \

        Get the current year and month
        YEAR=$(date +%y)
        MONTH=$(date +%m)

        # Creating next version
        NEW_VERSION="$year.$month.$patch"

        echo $PACKAGE_VERSION $NEW_VERSION

        sed -i "s/\"version\": \"$PACKAGE_VERSION\"/\"version\": \"$NEW_VERSION\"/g" package.json

        GIT_TAG="v$NEW_VERSION"

        # Create the tag
        git tag -a "$GIT_TAG" -m "Release $GIT_TAG"

        # Push the tag to the remote repository
        git push origin "$GIT_TAG"

        echo "Pushing new version..." && \
        git add package.json && \
        git commit -m "$NEW_VERSION" && \
        git push origin ${branch} && \

        echo "new package.json version"
        echo $(node -p -e "require('./package.json').version")

        echo "tag created based on package.json version"
        echo $GIT_TAG
    fi
fi