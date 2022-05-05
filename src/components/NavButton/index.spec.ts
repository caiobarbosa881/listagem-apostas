import { NavButton } from './index'
import { render } from '@testing-library/react';
import React from 'react';

test('sum', () => {
     const { getByText } = render(NavButton)

     expect(getByText('Hello World')).toBeTruthy()
})