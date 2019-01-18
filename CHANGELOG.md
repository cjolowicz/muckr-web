# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Add server-side rendering.

### Changed
- Use async and await.
- Upgrade dev dependencies:
  - dotenv-webpack 1.7.0
  - eslint-config-prettier 3.5.0
  - eslint-plugin-react 7.12.4
  - flow-bin 0.91.0
  - supertest 3.4.1

## [0.4.0] - 2019-01-15
### Added
- Add login page.
- Add user service.
- Add client-side routing.
- Add yarn script to update Jest snapshots.
- Use [React Router](https://reacttraining.com/react-router/).

### Changed
- Support class properties.
- Use .js extension for JSX.
- Upgrade dev dependencies:
  - flow-bin 0.90.0
  - eslint-config-prettier 3.4.0

### Removed
- Remove `API_USER` and `API_PASSWORD` settings.

### Fixed
- Fix message when no artists are found.
- Do not compile test modules.

## [0.3.0] - 2019-01-12
### Added
- Use [React](https://reactjs.org) framework.
- Use [Enzyme](https://airbnb.io/enzyme/) testing utility.
- Use [Prettier](https://github.com/prettier/prettier) code formatter.
- Use [axios](https://github.com/axios/axios) HTTP client library.

### Changed
- Upgrade dev dependencies:
  - babel-loader 8.0.5
  - eslint 5.12.0
  - eslint-plugin-flowtype 3.2.1
  - webpack 4.28.4
  - webpack-cli 3.2.1

### Removed
- Do not use Fetch API.

### Fixed
- Fix deprecation warnings on Travis CI due to outdated yarn.

## [0.2.0] - 2019-01-02
### Added
- Client retrieves list of artists and displays it.
- Use [nodemon](https://nodemon.io/) app runner.
- Use [webpack](https://webpack.js.org/) module bundler.
- Load env files using [dotenv](https://github.com/motdotla/dotenv)
  and [dotenv-webpack](https://github.com/mrsteele/dotenv-webpack).

### Changed
- Enable polyfills in client code.
- Enable browser environment for eslint.
- Typecheck tests.
- Add libdefs from flow-typed.

### Removed
- Drop "maintained node versions" from browserslist.

## [0.1.0] - 2018-12-27
### Added
- Initial version.
- Use [express](https://expressjs.com/) web framework.
- Use [eslint](https://eslint.org/) linter.
- Use [babel](https://babeljs.io/) compiler.
- Use [flow](https://flow.org/) type checker.
- Use [jest](https://jestjs.io/) for testing.
- Use [Travis CI](https://travis-ci.org/) for continuous integration.
- Deploy to [Heroku](https://heroku.com).
