import { Component } from "react"
import "../../App.css"
import { Box, Button, Typography } from "@mui/material";
import counterStyles from "./Counter.Styles";




interface State {
    counter: number;
}

class CounterApp extends Component<{}, State> {
    state: State = {
        counter: 0
    };

    incrementBtn = () => {
        this.setState(prevState => ({ counter: prevState.counter + 1 }));
    };

    decrementBtn = () => {
        if (this.state.counter === 0) this.setState({ counter: 0 });
        else this.setState(prevState => ({ counter: prevState.counter - 1 }));
    };

    resetBtn = () => {
        this.setState({ counter: 0 });
    };

    render() {
        return (
            // <div className="main-container">
            //     <div className="counter-container">
            //         <h1 className="heading">
            //             Counter Application with unit-testing
            //         </h1>
            //         <p className="counter-num">{this.state.counter}</p>
            //         <div className="buttons">
            //             <button data-testid="increment" className="increment" onClick={this.incrementBtn}>INCREMENT</button>
            //             <button data-testid="decrement" className="decrement" onClick={this.decrementBtn}>DECREMENT</button>
            //             <button data-testid="reset" className={!this.state.counter ? "resetDisable" : "reset"} onClick={this.resetBtn}>RESET</button>
            //         </div>
            //     </div>
            // </div>
            <Box sx={counterStyles.mainContainer}>
                <Box sx={counterStyles.counterContainer}>
                    <Typography sx={counterStyles.heading}>
                        Counter Application with unit-testing
                    </Typography>
                    <Typography sx={counterStyles.counterNum}>{this.state.counter}</Typography>
                    <Box sx={counterStyles.buttons}>
                        <Button sx={counterStyles.increment} data-testid="increment" onClick={this.incrementBtn}>INCREMENT</Button>
                        <Button sx={counterStyles.decrement} data-testid="decrement" className="decrement" onClick={this.decrementBtn}>DECREMENT</Button>
                        <Button data-testid="reset" sx={this.state.counter === 0 ? counterStyles.resetDisable : counterStyles.reset} onClick={this.resetBtn}>RESET</Button>
                    </Box>
                </Box>
            </Box>
        )
    }
}


export default CounterApp