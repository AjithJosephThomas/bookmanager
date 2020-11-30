import React from 'react';
import renderer from 'react-test-renderer';

import Navbar from './Navbar';

describe("Navbar component", () => {
    it('renders header navbar', () => {
        const navbar = renderer.create(<Navbar />).toJSON();
        expect(navbar).toMatchSnapshot();
    });
})