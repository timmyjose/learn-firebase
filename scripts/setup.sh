#!/usrbin/env bash

set -euxo pipefail

if [[ "$@" == *"--clean"* ]]; then
  echo "Removing node_modules..."
  rm -rf node_modules
fi

yarn install

echo "Performing prebuild..."
echo "Removing Android and iOS directoris..."
rm -rf android ios
npx expo prebuild
