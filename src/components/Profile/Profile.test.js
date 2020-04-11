import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';

import Profile from './Profile';

describe('<Profile />', () => {
    let tree;

    beforeEach(() => {
        tree = renderer.create(
            <MockedProvider addTypename={false}>
                 <Profile />
            </MockedProvider>
        ).toJSON();
    })

    it('has 3 children', () => {
        expect(tree.children.length).toBe(3);
    });

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});