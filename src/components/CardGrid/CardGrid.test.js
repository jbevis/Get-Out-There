import React from 'react';
import { shallow, mount } from 'enzyme';
import CardGrid from './CardGrid';
import { trails } from '../../ops/mockData'

describe('CardGrid testing', () => {
  const mockFn = jest.fn()
  const props = {
                 trails: trails,
                 filteredTrails: trails['Barr Lake Perimeter Trail'],
                 displayTrails: trails,
                 handleFilter: mockFn,
                 handleSetDisplay: mockFn,
                 handleGetConditions: mockFn
               }
  const wrapper = shallow(<CardGrid {...props}/>)

  it('should render the card grid to the dom', () => {

    expect(wrapper.find('.card-grid').length).toEqual(1)
  })

  it('should render a filter bar', () => {

    expect(wrapper.find('FilterControls').length).toEqual(1)
  })

  it('should render a card for each trail that is in state', () => {

    expect(wrapper.find('Card').length).toEqual(5)
  })
})
