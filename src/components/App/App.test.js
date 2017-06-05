import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow  } from 'enzyme';
import { App } from './App';
import { Provider } from 'react-redux';

import configureMockStore from 'redux-mock-store'
const fakeStore = configureMockStore()({ trailsReducer: {},
                                         filterReducer: {},
                                         displayReducer: {},
                                         conditionsReducer: {}
                                       })

const setup = () => {

  const wrapper = shallow(
    <Provider store={fakeStore}>
      <App />
    </Provider>
  )

  const Component = wrapper.find(App)

  return {
    Component
  }
}

describe('App testing', () => {

  it('should render something', () => {
      const { Component } = setup()

      expect(Component.length).toEqual(1)
    })
})
