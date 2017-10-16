import React, { Component } from 'react';
import './AStar.css';

class Node {
  constructor(type) {
    this.type = type
    this.gScore = Infinity //gScore, start node to this node
    this.fScore = Infinity //fScore, start node trough this node towards the goal.
    this.x = -1;
    this.y = -1;
    this.cameFrom = undefined;
    this.status = undefined;
    this.cost = 1;
  }
}


export default class AStar extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            algorithm: "",
            board_name: "board-1-1.txt",
            board: [],
            board_jsx: undefined,
            board_list: ["board-1-1.txt", "board-1-2.txt", "board-1-3.txt", "board-1-4.txt", "board-2-1.txt", "board-2-2.txt", "board-2-3.txt", "board-2-4.txt"],
            status: ""
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
        this.newBoard(this.state.board_name);
    }

    newBoardClick = (e, name) => {
        e.preventDefault()
        this.newBoard(name);
    }

    newBoard = (name) => {
        //genereate text array representation of board
        var board = this.readStringFromFileAtPath("astar_boards/" + name)
        var board_tmp = []
        var board_line = []
        for(let i = 0; i < board.length; i++) {
            if (board[i] === '\n') {
                board_tmp.push(board_line);
                board_line = []
            }
            else {
                var node = new Node(board[i])
                board_line.push(node);
            }
        }

        board_tmp.map((node_row, index) => {
            node_row.map((node, index_j) => {
                node.y = index;
                node.x = index_j;
            })
        })

        //generates jsx elements
        var jsx = board_tmp.map((line, index_line) => {
            return line.map((cell, index_cell) => {
                var c = cell
                cell = cell.type
                var classN = "";
                var show = "";
                if(name.slice(0,7) === "board-1") {
                    if (cell === "#") {
                        classN += "aStar__wall ";
                    }
                    if (cell === "A" || cell === "B") {
                        show = cell;
                    }

                    return <div className={"aStar__cell " + classN + "aStar__" + cell.toString()} id={index_line.toString() + "_" + index_cell.toString()}>{show}</div>
                } else {
                    if (cell === "w") {
                        classN += "aStar__water ";
                        board_tmp[index_line][index_cell].cost = 100;
                    } else if (cell === "m") {
                        classN += "aStar__mountains ";
                        board_tmp[index_line][index_cell].cost = 50;
                    } else if (cell === "f") {
                        classN += "aStar__forests ";
                        board_tmp[index_line][index_cell].cost = 10;
                    } else if (cell === "g") {
                        classN += "aStar__grasslands ";
                        board_tmp[index_line][index_cell].cost = 5;
                    } else if (cell === "r") {
                        classN += "aStar__roads ";
                    }
                    if (cell === "A" || cell === "B") {
                        show = cell;
                    }

                    return <div className={"aStar__cell " + classN + "aStar__" + cell.toString()} id={index_line.toString() + "_" + index_cell.toString()}>{show}</div>
                }
            })
        })
        this.setState({
            board_name: name,
            board_jsx: jsx,
            board: board_tmp
        });
    }



    startAStar = (e) => {
        e.preventDefault()
        this.setState({
            algorithm: "a_star"
        }, this.a_star)
    }

    startBFS = (e) => {
        e.preventDefault()
        this.setState({
            algorithm: "bfs"
        }, this.a_star)

    }
    startDijikstra = (e) => {
        e.preventDefault()
        this.setState({
            algorithm: "dijikstra"
        },
        this.a_star)
    }

    //The A* algorithm
    a_star = () => {
        console.log(this.state.algorithm);
        var startNode;
        var goalNode;
        this.state.board.map((node_row) => { //get the start and goal node
            node_row.map((node) => {
                if (node.type === "A") {
                    startNode = node;
                } else if (node.type === "B") {
                    goalNode = node;
                }
            })
        })

        var closed = [] //closed set
        var open = [startNode] //open set
        startNode.gScore = 0;
        startNode.fScore = this.heuristic_cost_estimate(startNode, goalNode);
        var waint = 0 //visualization var
        while (open.length != 0) {
            waint += 30;
            //find node with lowest f score in open list
            var currentNode = open[0] //picking any random node, in this case i chose just the first.

            if (this.state.algorithm === "a_star") {
                open.map((node) => { //find the node with lovest fScore
                    if (node.fScore < currentNode.fScore) {
                        currentNode = node;
                    }
                })
            } else if (this.state.algorithm === "bfs") {
                // dont need to do anything :D
            } else if (this.state.algorithm === "dijikstra") {
                open.map((node) => { //find the node with lovest fScore
                    if (node.gScore < currentNode.gScore) {
                        currentNode = node;
                    }
                })
            } else {
                console.log("rip error")
            }

            //check if currentNode is goalNode
            if (currentNode === goalNode) {
                //sucess
                this.setState({
                    status: "Path was found yay!"
                })
                var path = [goalNode] //generate winning path
                var node = goalNode;
                while(node !== startNode) {
                    node = node.cameFrom
                    path.push(node)
                }
                this.updateNode(open, closed, path, waint) //visualization
                return
            }

            //update open and closed lists
            open.splice(open.indexOf(currentNode), 1);
            closed.push(currentNode);
            this.updateNode(open, closed, [], waint)

            var neighbors = this.neighbors(currentNode.x, currentNode.y); //find all 4 neighbors to the node
            neighbors.map((node) => { //map trough all the neighbors
                if (node.type === "#") { return } //node is a wall
                if (closed.includes(node)) {
                    return
                }
                if (!open.includes(node)) { //node is not in open set, add it!
                    open.push(node);
                    this.updateNode(open, closed, [], waint)
                }
                var tentative_gScore = currentNode.gScore + node.cost;
                if (tentative_gScore >= node.gScore) {
                    return
                }

                //recording if it is a good node
                node.cameFrom = currentNode;
                node.gScore = tentative_gScore;
                node.fScore = tentative_gScore + this.heuristic_cost_estimate(node, goalNode);
            })
        }
        return false; //no path was found rip
    }

    //manhattan heuristic function
    heuristic_cost_estimate = (node, goalNode) => {
        return Math.abs(node.x - goalNode.x) + Math.abs(node.y - goalNode.y);
    }

    //finding the neighbors to the nodes cordinates
    neighbors = (x, y) => {
        var neighbors = []
        if (x !== 0) {
            neighbors.push(this.state.board[y][x-1])
        }
        if (x !== this.state.board[0].length-1) {
            neighbors.push(this.state.board[y][x+1])
        }
        if (y !== 0) {
            neighbors.push(this.state.board[y-1][x])
        }
        if(y !== this.state.board.length-1) {
            neighbors.push(this.state.board[y+1][x])
        }
        return neighbors;
    }

    //visualization
    updateNode = (open, closed, path, waint) => {
        //generates jsx elements
        var jsx = this.state.board.map((line, index_line) => {
            return line.map((cell, index_cell) => {
                var classN = "";
                var show = "";
                if(this.state.board_name.slice(0,7) === "board-1") {
                    if (cell.type === "#") {
                        classN += "aStar__wall ";
                    }
                    if (cell.type === "A" || cell.type === "B") {
                        show = cell.type;
                    }
                    if (open.includes(cell)) {
                        show += "O"
                    } else if (closed.includes(cell)) {
                        show += "X"
                    }
                } else {
                    if (cell.type === "w") {
                        classN += "aStar__water ";
                    } else if (cell.type === "m") {
                        classN += "aStar__mountains ";
                    } else if (cell.type === "f") {
                        classN += "aStar__forests ";
                    } else if (cell.type === "g") {
                        classN += "aStar__grasslands ";
                    } else if (cell.type === "r") {
                        classN += "aStar__roads ";
                    }
                    if (cell.type === "A" || cell.type === "B") {
                        show = cell.type;
                    }
                    if (open.includes(cell)) {
                        show += "O"
                    } else if (closed.includes(cell)) {
                        show += "X"
                    }
                }


                if (path.includes(cell)) {
                    if (cell.type !== "A" && cell.type !== "B") {
                        show = "$"
                    }
                    classN += "aStar__path ";
                }

                return <div className={"aStar__cell " + classN + "aStar__" + cell.type.toString()} id={index_line.toString() + "_" + index_cell.toString()}>{show}</div>
            })
        })
        setTimeout(() => this.setState({
            board_jsx: jsx
        }), waint)

    }

  render() {
    return (
        <div className="aStar">
            <p>{this.state.status}</p>
            <div className="aStar__boardSelectors">
                {this.state.board_list.map((name) => {
                    return <button onClick={(e) => this.newBoardClick(e, name)}>{name}</button>
                })}

            </div>
            <div className={this.state.board_name.slice(0,7) === "board-1" ? "aStar__board" : "aStar__board_2"}>
                {this.state.board_jsx}
            </div>
            <div className="aStar__startAlgo">
                <button onClick={(e) => this.startAStar(e)}>Start A*</button>
                <button onClick={(e) => this.startBFS(e)}>Start BFS</button>
                <button onClick={(e) => this.startDijikstra(e)}>Start Dijikstra</button>

            </div>
		</div>
    );
  }
}
