import React from 'react';
import { shallow } from 'enzyme';
import { WelcomeCard } from './WelcomeCard';

describe('WelcomeCard tests', () => {

  const wrapper = shallow(<WelcomeCard />)

  it('should render the welcome card to the DOM', () => {

    expect(wrapper.find('.welcome-card').length).toEqual(1)
  })
})
