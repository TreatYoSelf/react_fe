import React from 'react';
import Index from './src/components/Index/Index';

import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { HttpLink, InMemoryCache } from 'apollo-boost';


const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://treat-yo-self-bjtw.herokuapp.com/graphql' }),
    cache: new InMemoryCache()
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Index />
        </ApolloProvider>
    );
}

// AppRegistry.registerComponent('MyApplication', () => App);