import React from 'react';
import { act, create } from 'react-test-renderer';
import TreatSelector from './TreatSelector';

describe('<TreatSelector />', () => {
    it('renders correctly', () => {
        let tree;
        const props = {
            id: 1,
            title: 'testTreat',
            selectCategory: jest.fn(),
            style: ''
        }

        tree = create(<TreatSelector {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});