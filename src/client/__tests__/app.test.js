// @flow
import axios from 'axios';

import { just } from '../../utils';
import { renderApp } from '../app';

// an arbitrary 32-byte sequence in hexadecimal
const TOKEN = 'a7e743fb7ca1c7c883312b6abb0c99131e4ff210e0730d2f1ee4fad87e514ea2';

describe('renderApp', () => {
  test('modifies app root', (done) => {
    jest.spyOn(axios, 'post').mockReturnValue(
      Promise.resolve({ data: { token: TOKEN } }),
    );

    const artist = { id: 1, name: 'Artist' };
    jest.spyOn(axios, 'get').mockReturnValue(
      Promise.resolve({ data: [artist] }),
    );

    just(document.body).innerHTML = '<div id="root"></div>';

    const root = just(document.querySelector('#root'));
    renderApp(root).then(() => {
      expect(just(document.body).innerHTML).toEqual(
        '<div id="root"><ul><li>Artist</li></ul></div>',
      );
    });

    done();
  });
});
