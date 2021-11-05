import React from 'react';
import {render as rtlRender} from '@testing-library/react';
import {configureStore} from '@reduxjs/toolkit';
import userReducer from './counterSlice';
import {Provider} from 'react-redux';

function render(
    ui,
    {
        preloadedState,
        store = configureStore({reducer:{counter: userReducer}, preloadedState}),
        ...renderOptions
    } = {}
){
    function Wrapper({children}){
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, {wrapper:Wrapper, ...renderOptions})
}

export * from '@testing-library/react';
// export * from '@testing-library/jsdom';
export {render}