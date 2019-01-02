# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
