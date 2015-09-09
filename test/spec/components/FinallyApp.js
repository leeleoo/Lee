'use strict';

describe('FinallyApp', () => {
  let React = require('react/addons');
  let FinallyApp, component;

  beforeEach(() => {
    let container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    FinallyApp = require('components/FinallyApp.js');
    component = React.createElement(FinallyApp);
  });

  it('should create a new instance of FinallyApp', () => {
    expect(component).toBeDefined();
  });
});
