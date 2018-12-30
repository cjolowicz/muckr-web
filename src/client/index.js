// @flow
import '@babel/polyfill';

const element = document.querySelector('.app');

if (element != null) {
  element.innerHTML = '<h1>Hello world</h1>';
}
