import React from 'react';
import App from './src/components/App/App';

// import { AppRegistry } from 'react-native';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { HttpLink, InMemoryCache } from 'apollo-boost';


const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://treat-yo-self-bjtw.herokuapp.com/graphql' }),
    cache: new InMemoryCache()
});

export default function Index() {
    return (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    );
}

// AppRegistry.registerComponent('MyApplication', () => App);