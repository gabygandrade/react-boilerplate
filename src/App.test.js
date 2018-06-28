import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  window.fetch = jest.fn().mockImplementation(() => ({
    ok: true,
    json: () => new Promise(resolve => {
      resolve({})
    }),
  }))

  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
