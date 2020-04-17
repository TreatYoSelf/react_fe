import React from 'react';
import { act, create } from 'react-test-renderer';

import TreatEvent from './TreatEvent';

describe('<TreatEvent />', () => {
    it('renders correctly', async () => {
        let tree;
        const amProps = {
            time: 10,
            title: 'testEvent',
            duration: 75,
        }

        const pmProps = {
            time: 16,
            title: 'testEvent',
            duration: 75,
        }

        act(() => {
            tree = create(<TreatEvent {...amProps} />);
        })
        expect(tree.toJSON()).toMatchSnapshot();

        act(() => {
            tree.update(<TreatEvent {...pmProps} />)
        })
        expect(tree.toJSON()).toMatchSnapshot();
    });
});