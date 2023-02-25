import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import App from "../App";

test("should show 4 initial 0s", () => {
  render(<App />);
  const linkElement = screen.getAllByText("0");
  expect(linkElement.length).toEqual(4);
});

test("Stage1: should show all counters with increment and decrement Features", () => {
  render(<App />);

  const counterBlocks = screen.getAllByTestId('counter-element')

  counterBlocks.forEach((counterBlock) => {
    let expectedCounterValue = 0
    const increment = within(counterBlock).getByRole('button', {name: /\+/i})
    const decrement = within(counterBlock).getByRole('button', {name: /-/i})
  
    // increment counter 3 times than decrment it once (1+1+1-1 = 2)
    userEvent.click(increment)
    expectedCounterValue++
    userEvent.click(increment)
    expectedCounterValue++
    userEvent.click(increment)
    expectedCounterValue++
    userEvent.click(decrement)
    expectedCounterValue--

    expect(within(counterBlock).getByText(expectedCounterValue)).toBeInTheDocument()
  })
});

test("should show default Total count text", () => {
  render(<App />);
  
  expect(screen.getByText(/total count/i)).toBeInTheDocument()
});

test("should show and update total count when counters are changed", () => {
  render(<App />);
  let expectedTotalCounterValue = 0
  
  const counterBlocks = screen.getAllByTestId('counter-element')

  counterBlocks.forEach((counterBlock) => {
    const increment = within(counterBlock).getByRole('button', {name: /\+/i})
    const decrement = within(counterBlock).getByRole('button', {name: /-/i})
    
    userEvent.click(increment)
    expectedTotalCounterValue++

    userEvent.click(increment)
    expectedTotalCounterValue++

    userEvent.click(increment)
    expectedTotalCounterValue++

    userEvent.click(decrement)
    expectedTotalCounterValue--
  })
  
  const totalCountMessage = screen.getByText(/total count/i)

  expect(totalCountMessage).toHaveTextContent('Total count: ' + expectedTotalCounterValue)
});
