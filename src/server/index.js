// @flow
import app from './app';

const PORT = 8000;

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Server running on port ${PORT}.`);
});
