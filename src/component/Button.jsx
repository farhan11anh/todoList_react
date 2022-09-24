import React, {Component} from "react";
import '../css/Button.css';

class Button extends Component {
    render(){
        return(
            <button className={`btn btn-${this.props.variant}`}>
                {this.props.text}
            </button>
        )
    }
}

export default Button