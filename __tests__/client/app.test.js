// @flow
import fetchMock from 'fetch-mock';

import { just } from '../../src/utils';
import { API_URL } from '../../src/constants';
import { renderApp } from '../../src/client/app';

// an arbitrary 32-byte sequence in hexadecimal
const TOKEN = 'a7e743fb7ca1c7c883312b6abb0c99131e4ff210e0730d2f1ee4fad87e514ea2';

afterEach(() => {
  fetchMock.restore();
});

describe('renderApp', () => {
  test('modifies app root', (done) => {
    fetchMock.post(`${API_URL}/tokens`, { token: TOKEN });
    fetchMock.get(`${API_URL}/artists`, []);
    just(document.body).innerHTML = '<div id="root"></div>';

    const root = just(document.querySelector('#root'));
    renderApp(root).then(() => {
      expect(just(document.body).innerHTML).toEqual(
        '<div id="root"><ul></ul></div>',
      );
    });
    done();
  });
});
