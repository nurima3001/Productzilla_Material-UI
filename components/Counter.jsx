import { Component } from "react";

export default class Counter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    handleIncrement = () => {// arrow function}
        if(this.state.count >= 10) {
            this.setState({ count: 0 });
            return;
        }
        this.setState({ count: this.state.count + 1});
    }
    render() {
        return (
            <div>
                <h2>Zilla Showroom</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleIncrement}>Cari Mobil Impian Anda</button>
            </div>
        )
    }
}