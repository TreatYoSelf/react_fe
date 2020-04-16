import React from 'react';
import renderer, { act } from 'react-test-renderer';

import Calendar from './Calendar';

describe('<Calendar />', () => {
    it('renders correctly', async () => {
        let tree;
        tree = renderer.create(<Calendar />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});