import React from 'react';
import renderer, { act } from 'react-test-renderer';

import TreatSelector from './TreatSelector';

describe('<TreatSelector />', () => {
    it('renders correctly', async () => {
        let tree;
        tree = renderer.create(<TreatSelector />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});