// @flow
import 'dotenv/config';

import app from './app';

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Server running on port ${PORT}.`);
});
