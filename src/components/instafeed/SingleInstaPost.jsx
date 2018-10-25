import React, { Component } from 'react';
import './InstaFeed.css';

export default class SingleInstaPost extends Component {
    constructor() {
        super()
        this.state = {
            embedded: undefined
        }
    }

    componentDidMount() {
        fetch("https://api.instagram.com/oembed/?url=" + this.props.data.link)
        .then(response => {
            return response.json()
        })
        .then(result => {
            console.log(result)
            this.setState({
                embedded: result.html
            })
        })

    }

    componentDidUpdate() {
        if (this.state.embedded === undefined) {
            console.log("embedded state was undefined")
        } else {
            window.instgrm.Embeds.process();
            console.log("Embedded.process was called")
        }
    }


    

    createHtml = () => {
        return {
            __html: this.state.embedded
        };
    }

  render() {
      if (this.state.embedded === undefined) {
          return (<p>loading</p>)
      } else {
          return (
            <div className="singleinstapost" dangerouslySetInnerHTML={this.createHtml()} />
          );
      }
  }
}