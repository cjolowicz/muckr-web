// @flow
import "dotenv/config";

// eslint-disable-next-line import/named
import { PORT, NODE_ENV } from "./constants";
import app from "./app";

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT} (${NODE_ENV}).`);
});
