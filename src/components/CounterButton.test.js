import { shallow } from 'enzyme'
import React from 'react'
import CounterButton from './CounterButton'

it('expect to render CounterButton component', () => {
  const mockColor = 'red'
  expect (shallow(<CounterButton color={mockColor} />)).toMatchSnapshot()
})

it('correcltly increments the counter', () => {
  const mockColor = 'red'
  const wrapper = shallow(<CounterButton color={mockColor} />)

  const counterButton = wrapper.find('[id="counter"]')
  counterButton.simulate('click')
  
  expect(wrapper.state().count).toEqual(1)
})