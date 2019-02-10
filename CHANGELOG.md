# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.6.1] - 2019-02-10
### Fixed
- Fix missing stylesheet in server-side rendered page.

## [0.6.0] - 2019-02-09
### Added
- Use [Material-UI](https://material-ui.com/) React UI framework.

### Changed
- Upgrade dev dependencies:
  - nodemon 1.18.10

## [0.5.3] - 2019-02-08
### Fixed
- Fix ReferenceError `localStorage is not defined` when reloading /artists.

### Changed
- Upgrade dependencies:
  - react 16.8.1
  - react-dom 16.8.1
  - react-test-renderer 16.8.1
- Upgrade dev dependencies:
  - babel-jest 24.1.0
  - enzyme-adapter-react-16 1.9.1
  - eslint 5.13.0
  - eslint-plugin-compat 2.7.0
  - eslint-plugin-import 2.16.0
  - eslint-plugin-jsx-a11y 6.2.1
  - flow-bin 0.92.1
  - jest 24.1.0
  - prettier 1.16.4
  - webpack 4.29.3
  - webpack-cli 3.2.3

## [0.5.2] - 2019-01-30
### Fixed
- Prevent `LoginForm` from performing GET request on submit.

## [0.5.1] - 2019-01-29
### Fixed
- Fix ReferenceError `regeneratorRuntime is not defined`.

## [0.5.0] - 2019-01-29
### Added
- Add server-side rendering.

### Changed
- Use async and await.
- Upgrade dev dependencies:
  - @babel/plugin-proposal-class-properties 7.3.0
  - @babel/preset-env 7.3.1
  - babel-jest 24.0.0
  - dotenv-webpack 1.7.0
  - enzyme-adapter-react-16 1.8.0
  - eslint 5.12.1
  - eslint-config-prettier 4.0.0
  - eslint-plugin-import 2.15.0
  - eslint-plugin-jsx-a11y 6.2.0
  - eslint-plugin-react 7.12.4
  - flow-bin 0.91.0
  - jest 24.0.0
  - prettier 1.16.1
  - supertest 3.4.2
  - webpack 4.29.0

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

## 0.1.0 - 2018-12-27
### Added
- Initial version.
- Use [express](https://expressjs.com/) web framework.
- Use [eslint](https://eslint.org/) linter.
- Use [babel](https://babeljs.io/) compiler.
- Use [flow](https://flow.org/) type checker.
- Use [jest](https://jestjs.io/) for testing.
- Use [Travis CI](https://travis-ci.org/) for continuous integration.
- Deploy to [Heroku](https://heroku.com).

[Unreleased]: https://github.com/cjolowicz/muckr-web/compare/v0.6.1...HEAD
[0.6.1]: https://github.com/cjolowicz/muckr-web/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/cjolowicz/muckr-web/compare/v0.5.3...v0.6.0
[0.5.3]: https://github.com/cjolowicz/muckr-web/compare/v0.5.2...v0.5.3
[0.5.2]: https://github.com/cjolowicz/muckr-web/compare/v0.5.1...v0.5.2
[0.5.1]: https://github.com/cjolowicz/muckr-web/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/cjolowicz/muckr-web/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/cjolowicz/muckr-web/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/cjolowicz/muckr-web/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/cjolowicz/muckr-web/compare/v0.1.0...v0.2.0
