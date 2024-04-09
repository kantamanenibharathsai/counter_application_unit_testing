import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../Counter";


// test("Incre-Testing", () => {
//     render(<CounterApp />);
//     fireEvent.click((screen.getByText)('INCREMENT'));

// })
// test("Decre-Testing", () => {
//     render(<CounterApp />);
//     fireEvent.click((screen.getByText)('DECREMENT'))
// })
// test("Reset", () => {
//     render(<CounterApp />);
//     fireEvent.click((screen.getByText)('RESET'))
// })










// import { fireEvent, render, screen } from "@testing-library/react";
// import Counter from "../Counter";

// test("should increment value", () => {
//   render(<Counter />);
//   const btn = screen.getByTestId("incrementBtn");
//   expect(btn).toBeInTheDocument();
//   expect(btn).toHaveTextContent("Increase count");
//   fireEvent.click(btn);
// });

// test("should decrement value", () => {
//   render(<Counter />);
//   const btn = screen.getByTestId("decrementBtn");
//   expect(btn).toBeInTheDocument();
//   expect(btn).toHaveTextContent("Decrease count");
//   fireEvent.click(btn);
//   // fireEvent.click(screen.getByText('Decrease count1'));
// });

// test("count value", () => {
//   render(<Counter />);
//   const btn = screen.getByTestId("resetBtn");
// //   expect(btn).toHaveAttribute("disabled", false);

// const ibtn = screen.getByTestId("incrementBtn");
// fireEvent.click(ibtn);
//   fireEvent.click(btn);
// //   expect(btn).toHaveAttribute("disabled", true);
// });



// test("should change paragraph", () => {

//   render(<Counter />);
//   const para = screen.getByTestId("paragraph");
//   expect(para).toHaveTextContent("click to start counting");
//   const incrementBtn = screen.getByTestId("incrementBtn");
//   fireEvent.click(incrementBtn);
//   expect(para).toHaveTextContent("counting started....");
// });


describe("counter", () => {
    test("increment the count", () => {
        render(<CounterApp />)
        fireEvent.click(screen.getByTestId("increment"))
    })
    test("decrement the count", () => {
        render(<CounterApp />)
        fireEvent.click(screen.getByTestId("increment"))
        fireEvent.click(screen.getByTestId("decrement"))
    })
    test("decrement the count1", () => {
        render(<CounterApp />)
        fireEvent.click(screen.getByTestId("decrement"))
    })
    test("reset the count", () => {
        render(<CounterApp />)
        fireEvent.click(screen.getByTestId("reset"))
    })
})