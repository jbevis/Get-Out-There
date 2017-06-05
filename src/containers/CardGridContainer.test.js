import React from 'react';
import { mount } from 'enzyme';

import CardGridContainer from './CardGridContainer';
import CardGrid from '../components/CardGrid/CardGrid';
import { connect, Provider } from 'react-redux';

import configureMockStore from 'redux-mock-store'
const fakeStore = configureMockStore()({ trails: {}, filteredTrails: {}, displayTrails: {} })

const setup = () => {
  const props = {
    handleFilter: jest.fn(),
    handleSetDisplay: jest.fn(),
    handleGetConditions: jest.fn()
  }

  const wrapper = mount(
    // <Provider store={fakeStore}>
    //   <CardGridContainer {...props}/>
    // </Provider>

    <CardGridContainer trails={props.trails}
                       filteredTrails={props.filteredTrails}
                       displayTrails={props.displayTrails}
                       handleFilter={props.handleFilter}
                       handleSetDisplay={props.handleSetDisplay}
                       handleGetConditions={props.handleGetConditions}
                       store={fakeStore} />

  )

  const Component = wrapper.find(CardGridContainer)

  return {
    props,
    Component
  }
}

describe.skip('components', () => {
  describe('CardGridContainer testing', () => {

    it('should render something', () => {
      const { Component } = setup()

      console.log(Component);

      expect(Component.find('.card-grid').length).toEqual(1)

      expect(Component.length).toEqual(1)
    })

  })
})
