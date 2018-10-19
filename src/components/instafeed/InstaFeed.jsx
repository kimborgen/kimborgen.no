import React, { Component } from 'react';
import './InstaFeed.css';
import SingleInstaPost from './SingleInstaPost'

export default class InstaFeed extends Component {
    constructor() {
        super()
        this.state = {
            apiResult: {},
            embeddedHtml: []
        }
    }

    componentDidMount() {
        fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=3194917592.65f9935.c380c28b014c4c228164b791f469c553")
        .then(response => {
            return response.json()
        }).then(result => {
            console.log(result)
            this.setState({
                apiResult: result 
            })
        })
        
    }


  render() {
      if (this.state.apiResult.data === undefined) {
          return (<p>loading</p>)
      } else {
          return (

            <div id='instafeed' className="instafeed">
              <h3>--> Scrool --></h3>
              {
                  this.state.apiResult.data.map((post) => {
                    return <SingleInstaPost data={post} />
                  })
              }
              <h3>--> Scrool --></h3>
            </div>
          );
      }
  }
}