// @flow
import { env } from '../src/utils';

describe('env', () => {
  test('fails if unset and no fallback provided', () => {
    expect(() => env('NO_SUCH_VARIABLE')).toThrow(Error);
  });
});
