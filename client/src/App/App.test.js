import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
describe("basic test", () => {

  it('smoke test', () => {
    shallow(<App />)
  });
})