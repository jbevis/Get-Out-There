import React from 'react';
import { shallow } from 'enzyme';
import FilterControls from './FilterControls';
import { trails } from '../../ops/mockData'

describe('FilterControls test', () => {

  const mockFn = jest.fn()
  const wrapper = shallow(<FilterControls trails={trails} handleSetDisplay={mockFn}/>)

  it('should render the compoonent to the dom', () => {

    expect(wrapper.find('#filter-bar').length).toEqual(1)
  })

  it('should be able to set the filter', () => {
    const filterSet = wrapper.find('select')
    const filterBtn = wrapper.find('.filter-btn')

    filterSet.simulate('change', { target: { value: 'greenBlue' }})
    filterBtn.simulate('click')

    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
