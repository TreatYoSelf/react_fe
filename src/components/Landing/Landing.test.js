import React from 'react';
import renderer, { act } from 'react-test-renderer';

import Landing from './Landing';

describe('<Landing />', () => {
    it('renders correctly', async () => {
        let tree;
        tree = renderer.create(<Landing />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});