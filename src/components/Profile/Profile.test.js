import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import { act } from 'react-dom/test-utils';

import Profile from './Profile';
import { FETCH_CATEGORIES } from '../../containers/PreferenceForm/PreferenceForm';
import { mockCategories } from '../../mockData/mockTreat';

describe('<Profile />', () => {
    let tree;
    const mocks = [
        {
            request: {
                query: FETCH_CATEGORIES,
            },
            result: {
                data: mockCategories
            },
        },
    ];

    beforeEach(async () => {
        await act(async () => {
        tree = await renderer.create(
            <MockedProvider mocks={mocks} addTypename={false}>
                 <Profile />
            </MockedProvider>
        ).toJSON();
        })
    })

    it('has 3 children', () => {
        expect(tree.children.length).toBe(3);
    });

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
    });
});