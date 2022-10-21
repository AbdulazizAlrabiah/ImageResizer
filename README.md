# ImageResizer

## Table of Contents

- [Description](#Description)
- [Instructions](#instructions)
- [Contributing](#contributing)

## Description

An API written in TypeScript to resize JPG images.

## Instructions

You can use the scripts in the package.json file to build, test, lint, format and run the project.

When you need to resize an image, the image should be placed in the assets folder.

The request for resizing an image should use the following path and queries: "/api/images?filename={Enter Image filename}&width={Enter width}&height={Enter height}"

Example of a request: "localhost:3000/api/images?filename=fjord&width=300&height=250" where fjord is a valid JPG image in the assets folder.

## Contributing

This repository is ImageResizer API for Udacity Full Stack Javascript Developer.
