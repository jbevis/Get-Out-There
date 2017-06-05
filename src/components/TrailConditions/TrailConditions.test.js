import React from 'react';
import { shallow, mount } from 'enzyme';
import { TrailConditions } from './TrailConditions';
import { conditions } from '../../ops/mockData';

describe('TrailConditions testing', () => {
  const wrapper = shallow(<TrailConditions currentConditions={conditions} />)

  it('should render something to the dom', () => {

    expect(wrapper.find('.trail-conditions').length).toEqual(1)
  })

  it('should render data based on what was passed down as props', () => {
    const trailName = wrapper.find('h4')
    const currentConditions = wrapper.find('p')

    expect(wrapper.find('h4').length).toEqual(1)
    expect(wrapper.find('p').length).toEqual(5)

    expect(trailName.node.props.children).toEqual('Highline Canal Trail')
    expect(currentConditions.node.props.children).toEqual('All Clear')
  })

  it('should render a chart displaying elevation data', () => {

    expect(wrapper.find('VictoryChart').length).toEqual(1)
  })
})
