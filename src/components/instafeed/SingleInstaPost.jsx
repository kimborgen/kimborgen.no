import React, { Component } from 'react';
import './InstaFeed.css';

export default class SingleInstaPost extends Component {
  constructor() {
      super()
      this.state = {
      }
  }

  /* Here i used to use the embedded instagram html gotten from insta's api
   * Since these components is rendered in an iframe, it was imposible to manipulate
   * those objects. Meaning that for example scrolling did not work. 
  */ 

  componentDidMount() {
    console.log(this.props.data)
  }

  imageOrVideo = () => {
    if (this.props.data.type === "video") {
      return <video 
        className="singleinstapost__video"
        draggable="false"
        controls 
        playsInLine 
        autoPlay 
        muted 
        loop 
        src={this.props.data.videos.standard_resolution.url}
        type="video/mp4"
      />
    } else {
      return <img
        className="singleinstapost__image"
        draggable="false"
        src={this.props.data.images.standard_resolution.url}
      />
    }
  }

  render() {
    return (
      <a href={this.props.data.link} draggable="false" className="singleinstapost">
        {this.imageOrVideo()}
        <div className="singleinstapost__more">
          <p className="singleinstapost__location">
            { 
            
              this.props.data.location === null ?

                ""

                :

                this.props.data.location.name

            }
          </p>
          <p className="singleinstapost__likes">
            {this.props.data.likes.count}
          </p>
          <p className="singleinstapost__caption">
            {this.props.data.caption.text.replace(/(?:^|\s)\#(\w+)\b/g, "").replace(/(?:^|\s)\@(\w+)\b/g, "")}
          </p>
       </div>  
      </a>
    );
  }
}
