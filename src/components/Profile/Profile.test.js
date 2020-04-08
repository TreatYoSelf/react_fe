import React from 'react';
import renderer from 'react-test-renderer';

import Profile from './Profile';

describe('<Profile />', () => {
    it('has 3 children', () => {
        const tree = renderer.create(<Profile />).toJSON();
        expect(tree.children.length).toBe(3);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<Profile />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});