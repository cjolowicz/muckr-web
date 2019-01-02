// @flow
import 'dotenv/config';

// eslint-disable-next-line import/named
import { NODE_ENV } from '../constants';
import app from './app';

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Server running on port ${PORT} (${NODE_ENV}).`);
});
