import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';

import App from './App';

describe('<App />', () => {
    let tree;

    beforeEach(() => {
        tree = renderer.create(
            <MockedProvider addTypename={false}>
                <App />
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