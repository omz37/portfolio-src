#!/bin/bash
#build dist folder
npm run build
#delete content of old build
rm -rf ../portfolio-build/*
#cut and paste dist to build repo
cp -rf dist/* ../portfolio-build/
rm -rf dist/