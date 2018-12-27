// @flow
import express from 'express';

const PORT = 8000;
const app = express();

app.get('/', (request, response) => response.send('Hello world'));

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Server running on port ${PORT}.`);
});
