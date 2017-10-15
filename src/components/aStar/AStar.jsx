import React, { Component } from 'react';
import './AStar.css';



export default class AStar extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            algorithm: "astar",
            board: ""
        })
    }

    readStringFromFileAtPath = (pathOfFileToReadFrom) => {
        var request = new XMLHttpRequest();
        request.open("GET", pathOfFileToReadFrom, false);
        request.send(null);
        var returnValue = request.responseText;

        return returnValue;
    }

    componentWillMount() {
        this.setState({
            board: this.readStringFromFileAtPath("astar_boards/board-1-1.txt")
        });
    }





  render() {
    return (
        <div className="aStar">
		</div>
    );
  }
}
