// @flow
describe('client', () => {
  test('inserts heading', () => {
    if (document.body != null) {
      document.body.innerHTML = '<div class="app"></div>';
      // eslint-disable-next-line global-require
      require('../../src/client/index');
      expect(document.body.innerHTML).toBe(
        '<div class="app"><h1>Hello world</h1></div>',
      );
    }
  });

  test('only modifies designated element', () => {
    if (document.body != null) {
      document.body.innerHTML = '<div></div>';
      // eslint-disable-next-line global-require
      require('../../src/client/index');
      expect(document.body.innerHTML).toBe('<div></div>');
    }
  });
});
