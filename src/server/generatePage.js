// @flow
import { APP_ROOT, CLIENT_API_URL, JSS_STYLE_ID } from "../constants";
import { WEBPACK_LOCATION } from "./constants";

export default function generatePage(html: string, css: string, state: string) {
  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
    >
    <style id="${JSS_STYLE_ID}">${css}</style>
  </head>
  <body>
    <div id="${APP_ROOT}">${html}</div>
    <script>
      window.REDUX_STATE = ${state}
      window.API_URL = ${JSON.stringify(CLIENT_API_URL)}
    </script>
    <script src="${WEBPACK_LOCATION}"></script>
  </body>
</html>`;
}
