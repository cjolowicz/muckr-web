# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.7.2] - 2019-02-23
### Changed
- Use [React Hooks](https://reactjs.org/docs/hooks-intro.html).
- Use [react-testing-library](https://testing-library.com/react).

### Added
- Add dev dependencies:
  - eslint-plugin-react-hooks 1.2.0
  - history 4.7.2
  - react-testing-library 5.9.0

## [0.7.1] - 2019-02-22
### Changed
- Add typings for Redux.
- Update dependencies:
  - react 16.8.3
  - react-dom 16.8.3
  - react-test-renderer 16.8.3
  - react-redux 6.0.1
- Update dev dependencies:
  - coveralls 3.0.3
  - webpack-dev-server 3.2.0

## [0.7.0] - 2019-02-19
### Added
- Use [Redux](https://redux.js.org/) state management library.
- Add dependencies:
  - react-redux 6.0.0
  - redux 4.0.1
  - redux-logger 3.0.6
  - redux-thunk 2.3.0
  - universal-cookie 3.0.7
- Add dev dependencies:
  - @babel/plugin-proposal-object-rest-spread 7.3.2
  - redux-mock-store 1.5.3

### Changed
- Split into pure components and stateful containers.
- Split `FetchingArtistList` off `ArtistList`.
- Replace `withAuth` by `PrivateRoute`.
- Wrap `ArtistList` in `Paper`.
- Move `Message` into `App`.
- Use Redux enhancer to persist token to cookie.
- Refactor:
  - Use default exports.
  - Add `ServerRoot` and `ClientRoot` components.
  - Add `RemoveElement` component.
  - Add `theme` module.
  - Add various sub-modules to `server`.
  - Various typing improvements.
  - Rename `services` to `api`.
  - Remove `Base` suffix from components.
  - Use `Pure` prefix for exported components.
- Upgrade dependencies:
  - react 16.8.2
  - react-dom 16.8.2
- Upgrade dev dependencies:
  - @babel/core 7.3.3
  - @babel/plugin-proposal-class-properties 7.3.3
  - enzyme 3.9.0
  - eslint 5.14.1
  - eslint-plugin-flowtype 3.4.2
  - flow-bin 0.93.0
  - react-test-renderer 16.8.2
  - webpack 4.29.5

### Removed
- Drop `react-cookie` for `universal-cookie`.
- Remove `withAuth` higher-order component.

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

[Unreleased]: https://github.com/cjolowicz/muckr-web/compare/v0.7.2...HEAD
[0.7.2]: https://github.com/cjolowicz/muckr-web/compare/v0.7.1...v0.7.2
[0.7.1]: https://github.com/cjolowicz/muckr-web/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/cjolowicz/muckr-web/compare/v0.6.1...v0.7.0
[0.6.1]: https://github.com/cjolowicz/muckr-web/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/cjolowicz/muckr-web/compare/v0.5.3...v0.6.0
[0.5.3]: https://github.com/cjolowicz/muckr-web/compare/v0.5.2...v0.5.3
[0.5.2]: https://github.com/cjolowicz/muckr-web/compare/v0.5.1...v0.5.2
[0.5.1]: https://github.com/cjolowicz/muckr-web/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/cjolowicz/muckr-web/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/cjolowicz/muckr-web/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/cjolowicz/muckr-web/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/cjolowicz/muckr-web/compare/v0.1.0...v0.2.0
