import React from 'react';
import store from './store';
import {render} from '@testing-library/react';
import Home from './pages/Home';
import {Provider} from "react-redux";

test('renders learn react link', () => {
    const {getByText} = render(
        <Provider store={store}>
            <Home location={{state: 'zz'}}/>
        </Provider>
    );
    const linkElement = getByText(/Laravel React/i);
    expect(linkElement).toBeInTheDocument();

});
