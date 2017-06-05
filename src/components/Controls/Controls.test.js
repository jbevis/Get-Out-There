import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';
import { trails } from '../../ops/mockData';

describe('Controls testing', () => {
  const mockFn = jest.fn();
  const props = {
    trails,
    handleSetDisplay: mockFn,
    handleGetTrails: mockFn
  }
  const wrapper = shallow(<Controls {...props} />)

  it('should render something to the dom', () => {

    expect(wrapper.find('.controls').length).toEqual(1)
  })

  it('should render two input fields and a serch button', () => {

    expect(wrapper.find('input').length).toEqual(2)
    expect(wrapper.find('#search').length).toEqual(1)
  })

  it('state should be updated based on search parameters', () => {
    const locationInput = wrapper.find('#location-input')
    const radiusInput = wrapper.find('#radius-input')
    const button = wrapper.find('#search')

    expect(wrapper.state('searchArea')).toEqual('')
    expect(wrapper.state('searchRadius')).toEqual('')

    locationInput.simulate('change', { target: { value: 'Denver' } })
    radiusInput.simulate('change', { target: { value: '20' } })

    expect(wrapper.state('searchArea')).toEqual('Denver')
    expect(wrapper.state('searchRadius')).toEqual('20')

    button.simulate('click')

    expect(mockFn).toHaveBeenCalledTimes(2)
  })

})
