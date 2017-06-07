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

    expect(wrapper.find('label').length).toEqual(1)
    expect(wrapper.find('option').length).toEqual(7)
  })

  it('should render a card for each trail that is in state', () => {

    expect(wrapper.find('Card').length).toEqual(5)
  })

  it('should be able to set the filter', () => {
    const filterSet = wrapper.find('select')
    const filterBtn = wrapper.find('.filter-btn')

    filterSet.simulate('change', { target: { value: 'greenBlue' }})
    filterBtn.simulate('click')

    expect(mockFn).toHaveBeenCalledTimes(1)
  })

})
