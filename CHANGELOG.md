# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Fixed
- Fix stale error message after successful fetch ([#136](../../pull/136))

## [0.21.0] - 2019-07-21
### Fixed
- Fix wrong button caption when artist creation dialog is closed. ([#123](../../pull/123))
- Replace obsolete `@babel/polyfill` import. ([#124](../../pull/124))
- Fix broken peer dependency of `eslint-config-airbnb`. ([#125](../../pull/125))

### Added
- Add test for `Spinner` component. ([#126](../../pull/126))
- Add dependencies:
  - core-js 3.1.4
  - regenerator-runtime 0.13.3
- Add dev dependencies:
  - @testing-library/jest-dom

### Changed
- Increase width of artist dialogs. ([#120](../../pull/120))
- Submit artist dialog when Enter key is pressed. ([#127](../../pull/127))
- Use icon button to close artist dialog. ([#129](../../pull/129))
- Downgrade dev dependencies:
  - eslint 5.3.0 
  - eslint-plugin-flowtype 3.9.1
- Upgrade dev dependencies ([#122](../../pull/122))
  - css-loader 3.1.0
  - eslint-plugin-import 2.18.2
  - flow-bin 0.103.0

### Removed
- Do not display message when artists are created, updated, or deleted. ([#128](../../pull/128))
- Remove dependencies:
  - @babel/polyfill
 
## [0.20.0] - 2019-07-19
### Added
- Add spinner to AppBar and SignInLayout ([#110](../../pull/110)).
- Configure `API_URL` for Heroku apps ([#114](../../pull/114)).

### Fixed
- Do not invoke `webpack-dev-server` in production mode.
- Fix invalid generated URLs in webpack output.

### Changed
- Refactor layout components ([#115](../../pull/115)):
  - Move Paper from SignUp to SignUpLayout.
  - Move Header out of main in SignUpLayout.
  - Eliminate Header component in layouts.
- Refactor artist components ([#111](../../pull/111)):
  - Incorporate FetchingArtistList in ArtistList.
  - Move Artist button to separate component.
  - Decouple ArtistList and ArtistDialog.
  - Decouple ArtistList and ArtistButton.
- Refactor Redux:
  - Fix invalid state after user creation (unused).
  - Simplify state tree.
  - Add parameter types for reducers.
  - Remove obsolete field in message State type.
- Refactor webpack configuration.
- Clean up package.json.
- Upgrade dependencies:
  - @material-ui/core 4.2.1
  - @material-ui/styles 4.2.1
  - typeface-roboto 0.0.75
- Upgrade dev dependencies:
  - @babel/cli 7.5.5
  - @babel/core 7.5.5
  - @babel/node 7.5.5
  - @babel/plugin-proposal-class-properties 7.5.5
  - @babel/plugin-proposal-object-rest-spread 7.5.5
  - @babel/preset-env 7.5.5
  - eslint-plugin-compat 3.3.0
  - flow-typed 2.6.0
  - webpack 4.36.1
  - webpack-cli 3.3.6

### Removed
- Remove textual loading indicator from Artists page.

## [0.19.2] - 2019-07-13
### Fixed
- Fix crash on sign in page due to an undefined prop in `SignIn` component.

## [0.19.1] - 2019-07-13
### Changed
- Complete test coverage.
- Refactor some reducer tests.

## [0.19.0] - 2019-07-13
### Added
- Add directory `components/app` for top-level components.
- Add directory `components/pages` for page components.
- Add directory `components/layouts` for layout components and their
  constituents.
- Add directory `components/hooks` for React hooks.
- Add directory `components/FEATURE` for each feature:
  - `artist`
  - `user`
- Add directory `components/utils` for helper components.
- Add components:
  - `ArtistPage`
  - `SignInLayout`
  - `SignUpLayout`
  - `SignUpPage`
  - `SignInPage`
  - `WelcomePage`
  - `Routes`

### Changed
- Organize components in subdirectories (see above).
- Collocate container and component in the same module.
  - Pure components are exported by name.
  - Connected components are the default export.
- Collocate tests with subjects using `*.spec.js` suffix.
- Disable eslint rule
  [import/no-named-as-default](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md)
  in component files.
- Rename components:
  - `server/ServerRoot` → `components/app/Server`
  - `client/ClientRoot` → `components/app/Client`
  - `Index` → `pages/FrontPage`
- Move modules:
  - `client/index` → `client`
- Move directories:
  - `test` → `utils/test`
  - `hooks` → `components/hooks`

### Removed
- Remove subdirectory `containers` and its modules.
- Remove `__tests__` subdirectories.

## [0.18.0] - 2019-07-13
### Added
- Add `redux` directory.
- Add types (in `redux/types`):
  - `Store`
  - `StoreCreator`
  - `Dispatch`
- Add function `createStore` (in `redux/store`).
- Add module `api/types`.
- Add dependencies:
  - reselect 4.0.0
 
### Changed
- Organize Redux modules by feature, under `redux`:
  - `artist`
  - `dialog`
  - `message`
  - `navigation`
  - `noop`
  - `token`
  - `user`
- Organize each feature subdirectory by type:
  - `actions`
  - `constants`
  - `operations`
  - `reducers`
  - `selectors`
  - `types`
- Organize top-level modules in `redux`:
  - `reducers`
  - `selectors`
  - `types`
  - `store` (subdirectory)
- Rename selectors:
  - `getDialogArtist` → `dialogArtist`
  - `getDialogType` → `dialogType`
  - `getMessage` → `message`
  - `getToken` → `token`
  - `getUser` → `user`
  - `isFetchingArtists` → `artistsPending`
  - `isNavigationOpen` → `navigationOpen`
- Rename reducers:
  - `artist.isFetching` → `artist.pending`
  - `dialog.open` → `dialog.type`
- Rename props:
  - `isLoading` → `pending`, in `ArtistList`
  - `onClose` → `closeNavigation`, in `Navigation`
  - `onMenuClick` → `openNavigation`, in `MenuButton`
  - `onSubmit` → `createUser`, in `SignUp`
  - `onSubmit` → `fetchToken`, in `SignIn`
- Rename types:
  - `api.FetchError` → `api.Error`
  - `foo.FooAction` → `foo.Action`.
- Normalize action payloads, introducing a `payload` attribute.
- Minor changes:
  - Use `createSelector` for selectors.
  - Use `createStructuredSelector` for containers.
  - Use `State` in reducer types, instead of generic `Object`.
  - Use arrow functions for reducers.
  - Rename private selectors to omit prefixes.
  - Move event handler `onClose` to component in `Message`

### Removed
- Remove constant `initialState` from reducer modules.
- Remove selectors:
  - `getArtistsError`
  - `getTokenError`
  - `getUserError`
  - `isCreateDialogOpen`
  - `isCreatingUser`
  - `isFetchingToken`
  - `isMessageOpen`
  - `isUpdateDialogOpen`
- Remove reducers:
  - `artist.error`
  - `message.open`
  - `user.error`
  - `user.isCreating`
- Remove props:
  - `open` in `Message`
 
### Fixed
- Fix missing user actions in `Action` type.

## [0.17.1] - 2019-07-13
### Fixed
- Bump lodash from 4.17.11 to 4.17.14

### Changed
- Update dependencies:
  - @material-ui/core 4.2.0
  - @material-ui/styles 4.2.0
  - redux 4.0.4
  - universal-cookie 4.0.2
- Update dev dependencies:
  - @babel/core 7.5.4
  - @babel/plugin-proposal-object-rest-spread 7.5.4
  - @babel/preset-env 7.5.4
  - @testing-library/react 8.0.5
  - coveralls 3.0.5
  - webpack 4.35.3

## [0.17.0] - 2019-07-05
### Changed
- Refactor artist dialog.

## [0.16.0] - 2019-07-05
### Changed
- Refactor tests:
  - Use render helper functions.
  - Use route constants.

## [0.15.1] - 2019-07-05
### Fixed
- [SignIn] Fix style of sign up link.
- [eslint] Fix invalid overrides property.

### Changed
- Update dependencies:
  - @material-ui/core 4.1.2
  - @material-ui/icons 4.2.1
  - @material-ui/styles 4.1.2
  - universal-cookie 4.0.1
  - universal-cookie-express 4.0.1
- Update dev dependencies:
  - @babel/cli 7.5.0
  - @babel/core 7.5.0
  - @babel/node 7.5.0
  - @babel/plugin-proposal-class-properties 7.5.0
  - @babel/plugin-proposal-object-rest-spread 7.5.0
  - @babel/preset-env 7.5.0
  - @testing-library/react 8.0.4
  - eslint 6.0.1
  - eslint-config-airbnb 17.1.1
  - eslint-config-prettier 6.0.0
  - eslint-plugin-compat 3.2.0
  - eslint-plugin-flowtype 3.11.1
  - eslint-plugin-import 2.18.0
  - eslint-plugin-jsx-a11y 6.2.3
  - eslint-plugin-react 7.14.2
  - eslint-plugin-react-hooks 1.6.1
  - flow-bin 0.102.0
  - webpack 4.35.2
  - webpack-cli 3.3.5
  - webpack-dev-server 3.7.2

## [0.15.0] - 2019-06-20
### Fixed
- Fix stale name field in create artist dialog.

### Added
- Add dependencies:
  - @material-ui/styles 4.1.1

### Changed
- Update dependencies:
  - @material-ui/core 4.1.1
  - @material-ui/icons 4.2.0
 
### Removed
- Remove dependencies:
  - jss
  - react-jss

## [0.14.0] - 2019-06-18
### Changed
- Normalize state shape.
- Use testing-library instead of enzyme.
- Refactor utils.
- Update dependencies:
  - react-redux 7.1.0
- Update dev dependencies:
  - babel-eslint 10.0.2
  - coveralls 3.0.4
  - css-loader 3.0.0
  - eslint-config-prettier 5.0.0
  - eslint-plugin-compat 3.1.2
  - eslint-plugin-flowtype 3.10.3
  - flow-bin 0.102.0-rc
  - prettier 1.18.2
  - webpack 4.34.0
  - webpack-cli 3.3.4
  - webpack-dev-server 3.7.1

### Removed
- Remove dev dependencies:
  - enzyme
  - enzyme-adapter-react-16
  - enzyme-to-json
  - jest-environment-enzyme
  - jest-enzyme

## [0.13.1] - 2019-06-05
### Changed
- Update dependencies:
  - handlebars 4.1.2 ([security advisory](https://www.npmjs.com/advisories/755))
- Update dev dependencies:
  - webpack-dev-server 3.6.0

## [0.13.0] - 2019-06-05
### Added
- Add button to edit artists.
- Add dev dependency:
  - @testing-library/react 8.0.1

### Changed
- Update dependencies:
  - axios 0.19.0
  - express 4.17.1
  - react-router-dom 5.0.1
- Update dev dependencies:
  - @babel/core 7.4.5
  - @babel/node 7.4.5
  - @babel/preset-env 7.4.5
  - enzyme 3.10.0
  - enzyme-adapter-react-16 1.14.0
  - eslint-plugin-flowtype 3.9.1
  - eslint-plugin-import 2.17.3
  - flow-bin 0.100.0
  - nodemon 1.19.1
  - webpack 4.33.0
  - webpack-dev-server 3.5.1

### Removed
- Remove dev dependency:
  - react-testing-library (renamed to @testing-library/react)

## [0.12.0] - 2019-05-17
### Added
- Add button to remove artists.

### Fixed
- Fix missing --env option for webpack-dev-server.

### Changed
- Update dependencies:
  - express 4.17.0
- Update dev dependencies:
  - flow-typed 2.5.2
  - eslint-plugin-flowtype 3.9.0
  - eslint-config-prettier 4.3.0

## [0.11.0] - 2019-05-13
### Added
- Add dialog for creating artists.

### Changed
- Remove placeholder message in artist list.
- Update dev dependencies:
  - babel-loader 8.0.6
  - enzyme-adapter-react-16 1.13.0
  - eslint-plugin-flowtype 3.8.2
  - eslint-plugin-prettier 3.1.0
  - prettier 1.17.1
  - webpack 4.31.0

## [0.10.0] - 2019-05-08
### Added
- Add Dockerfile.
- Add Docker Compose file.
- Add `INTERNAL_API_URL` setting.

### Changed
- Use server environment for API_URL.
- Do not use dotenv for webpack configuration.
- Refactor webpack configuration.
- Separate server-only constants.

## [0.9.2] - 2019-05-08
### Changed
- Update dependencies:
  - @babel/polyfill 7.4.4
  - dotenv 8.0.0
  - react-redux 7.0.3
  - universal-cookie 4.0.0
  - universal-cookie-express 4.0.0
- Update dev dependencies:
  - @babel/cli 7.4.4
  - @babel/core 7.4.4
  - @babel/plugin-proposal-class-properties 7.4.4
  - @babel/plugin-proposal-object-rest-spread 7.4.4
  - @babel/preset-env 7.4.4
  - babel-jest 24.8.0
  - eslint-config-prettier 4.2.0
  - eslint-plugin-flowtype 3.8.1
  - eslint-plugin-react 7.13.0
  - flow-bin 0.98.1
  - jest 24.8.0
  - nodemon 1.19.0
  - react-testing-library 7.0.0
  - webpack-cli 3.3.2

## [0.9.1] - 2019-04-18
### Changed
- Update dependencies:
  - @babel/cli 7.4.3
  - @babel/core 7.4.3
  - @babel/plugin-proposal-class-properties 7.4.0
  - @babel/plugin-proposal-object-rest-spread 7.4.3
  - @babel/polyfill 7.4.3
  - @babel/preset-env 7.4.3
  - @material-ui/core 3.9.3
  - compression 1.7.4
  - dotenv 7.0.0
  - history 4.9.0
  - react 16.8.6
  - react-dom 16.8.6
  - react-redux 7.0.2
  - react-router-dom 5.0.0
  - universal-cookie 3.1.0
  - universal-cookie-express 3.1.0
- Update dev dependencies:
  - babel-jest 24.7.1
  - enzyme-adapter-react-16 1.12.1
  - eslint 5.16.0
  - eslint-plugin-compat 3.1.1
  - eslint-plugin-flowtype 3.6.1
  - eslint-plugin-import 2.17.2
  - eslint-plugin-react-hooks 1.6.0
  - flow-bin 0.97.0
  - jest 24.7.1
  - nodemon 1.18.11
  - prettier 1.17.0
  - react-test-renderer 16.8.6
  - react-testing-library 6.1.2
  - supertest 4.0.2
  - webpack 4.30.0
  - webpack-cli 3.3.0
  - webpack-dev-server 3.3.1
 
## [0.9.0] - 2019-03-10
### Added
- Add button for sign up.

### Changed
- UI cleanup.
- Update dependencies:
  - react 16.8.4
  - react-dom 16.8.4
  - react-test-renderer 16.8.4
- Update dev dependencies:
  - babel-jest 24.3.1
  - css-loader 2.1.1
  - eslint 5.15.1
  - eslint-plugin-react-hooks 1.5.0
  - jest 24.3.1
  - jest-environment-enzyme 7.0.2
  - jest-enzyme 7.0.2

## [0.8.1] - 2019-03-04
### Changed
- Update dev dependencies:
  - @babel/core 7.3.4
  - @babel/preset-env 7.3.4
  - @babel/plugin-proposal-class-properties 7.3.4
  - @babel/plugin-proposal-object-rest-spread 7.3.4
  - enzyme-adapter-react-16 1.10.0
  - eslint 5.15.0
  - eslint-config-prettier 4.1.0
  - eslint-plugin-react-hooks 1.4.0
  - webpack 4.29.6
  - webpack-dev-server 3.2.1

## [0.8.0] - 2019-02-25
### Fixed
- Fix redirect from /login to referrer.

### Added
- Add button for sign out.
- Add dev dependencies:
  - yarn-run-all 3.1.1

### Changed
- On authorization failure, redirect to /login and remove cookie.
- Remove app bar from /login page.
- Refactor:
  - Rework package script API.
  - Rename actions/fetchToken to actions/token.
  - Rename actions/fetchArtists to actions/artist.
  - Rename api/user to api/token.
  - Add api/error.
- Update dev dependencies:
  - react-testing-library 6.0.0

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

[Unreleased]: https://github.com/cjolowicz/muckr-web/compare/v0.21.0...HEAD
[0.21.0]: https://github.com/cjolowicz/muckr-web/compare/v0.20.0...v0.21.0
[0.20.0]: https://github.com/cjolowicz/muckr-web/compare/v0.19.2...v0.20.0
[0.19.2]: https://github.com/cjolowicz/muckr-web/compare/v0.19.1...v0.19.2
[0.19.1]: https://github.com/cjolowicz/muckr-web/compare/v0.19.0...v0.19.1
[0.19.0]: https://github.com/cjolowicz/muckr-web/compare/v0.18.0...v0.19.0
[0.18.0]: https://github.com/cjolowicz/muckr-web/compare/v0.17.1...v0.18.0
[0.17.1]: https://github.com/cjolowicz/muckr-web/compare/v0.17.0...v0.17.1
[0.17.0]: https://github.com/cjolowicz/muckr-web/compare/v0.16.0...v0.17.0
[0.16.0]: https://github.com/cjolowicz/muckr-web/compare/v0.15.1...v0.16.0
[0.15.1]: https://github.com/cjolowicz/muckr-web/compare/v0.15.0...v0.15.1
[0.15.0]: https://github.com/cjolowicz/muckr-web/compare/v0.14.0...v0.15.0
[0.14.0]: https://github.com/cjolowicz/muckr-web/compare/v0.13.1...v0.14.0
[0.13.1]: https://github.com/cjolowicz/muckr-web/compare/v0.13.0...v0.13.1
[0.13.0]: https://github.com/cjolowicz/muckr-web/compare/v0.12.0...v0.13.0
[0.12.0]: https://github.com/cjolowicz/muckr-web/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/cjolowicz/muckr-web/compare/v0.10.0...v0.11.0
[0.10.0]: https://github.com/cjolowicz/muckr-web/compare/v0.9.2...v0.10.0
[0.9.2]: https://github.com/cjolowicz/muckr-web/compare/v0.9.1...v0.9.2
[0.9.1]: https://github.com/cjolowicz/muckr-web/compare/v0.9.0...v0.9.1
[0.9.0]: https://github.com/cjolowicz/muckr-web/compare/v0.8.1...v0.9.0
[0.8.1]: https://github.com/cjolowicz/muckr-web/compare/v0.8.0...v0.8.1
[0.8.0]: https://github.com/cjolowicz/muckr-web/compare/v0.7.2...v0.8.0
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
