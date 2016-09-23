# FounderLab base project for web apps

A single page Node app with user login. Use this when starting a new project.

Uses React, Redux, BackboneORM, Bootstrap, Webpack.

###Changelog:


## [0.3.0]
 webpack + layout updates

## [0.2.0]
 fl-admin

## [0.1.1]
 React 0.14

## [0.1.0]
 Functioning app with auth

## [0.0.1]
 Initial version, probably broken in some way

## Windows app development
To start the app locally using cygwin:
mongod (not in cygwin)
SESSIONS_DATABASE_URL=redis://localhost:6379/0 NODE_ENV=development DATABASE_URL=mongodb://localhost:27017/founderlabinterns_com_development node index.js
NODE_ENV=development DATABASE_URL=mongodb://localhost:27017/founderlabinterns_com_development node index.js
NODE_ENV=development DATABASE_URL=mongodb://localhost:27017/founderlabinterns_com_development node webpack/webpack-dev-server.js
