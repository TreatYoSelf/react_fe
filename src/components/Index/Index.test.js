import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';

import Index from './Index';

describe('<Index />', () => {
    let tree;

    beforeEach(() => {
        tree = renderer.create(
            <MockedProvider addTypename={false}>
                <Index />
            </MockedProvider>
        ).toJSON();
    })

    it('has 1 child', () => {
        expect(tree.children.length).toBe(1);
    });

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});