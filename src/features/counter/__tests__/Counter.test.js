import React from 'react';
import {render, fireEvent, screen} from '../CounterTestUtils'
import Counter from '../Counter';
import { getByText } from '@testing-library/dom';

test("Testing Counter", ()=>{
    const {getByTestId, getByText} = render(<Counter/>)
    expect(getByTestId("count")).toHaveTextContent("0")

    // After clicking Increment Button
    fireEvent.click(getByTestId("incrementBtn"));
    expect(getByTestId("count")).toHaveTextContent("1");
})

