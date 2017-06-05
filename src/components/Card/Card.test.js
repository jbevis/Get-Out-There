import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

describe('Card component tests', () => {
  const mockTrail = { name: 'trail',
                      summary: 'its great',
                      difficulty: 'green,',
                      imgSqSmall: 'www.imagelink.com',
                      length: 5,
                      id: 1
                    }

  const mockClick = jest.fn()
  const wrapper = shallow(<Card key={mockTrail.id} trail={mockTrail} handleGetConditions={mockClick}/>)

  it('should render a card on the dom', () => {

    expect(wrapper.find('.trail-card').length).toEqual(1)
  })

  it('should render data passed from props onto the card', () => {
    const trailName = wrapper.find('h4')

    expect(wrapper.find('h4').length).toEqual(1)
    expect(trailName.node.props.children).toEqual('trail')
    expect(wrapper.find('p').length).toEqual(3)
  })

  it('should fire the handleGetConditions function when get info is clicked', () => {
    const link = wrapper.find('.button')

    link.simulate('click')

    expect(mockClick).toHaveBeenCalledTimes(1)
  })
})
