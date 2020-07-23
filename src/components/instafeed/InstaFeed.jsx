import React, { Component } from 'react';
import './InstaFeed.css';
import SingleInstaPost from './SingleInstaPost'
import HorizontalScroll from 'react-scroll-horizontal'
import Draggable from 'react-draggable'; // The default

export default class InstaFeed extends Component {
    constructor() {
        super()
        this.state = {
            apiResult: {},
            embeddedHtml: [],
            posts: undefined,
            deltaX: 0
        }
    }

    componentDidMount() {
        /*
        fetch("https://api.instagram.com/v1/users/self/media/recent/?access_token=3194917592.65f9935.c380c28b014c4c228164b791f469c553")
        .then(response => {
            return response.json()
        }).then(result => {
            // Add an "follow me on instagram here
            let newPost = {
              type: "image",
              location: { name: "Trondheim" },
              likes: { count: 1337},
              caption: { text: 'Follow me on instagram by clicking me! Username: @kimborgen'},
              link: "https://www.instagram.com/accounts/login/?next=%2Fkimborgen%2F&source=follow",
              images: { standard_resolution: { 
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/250px-Instagram_logo_2016.svg.png"
              }}
            }
            
            result.data.unshift(newPost)


            console.log(result)
            this.setState({
                apiResult: result 
            })

            this.setState({
                posts: result.data.map((post) => {
                    return <SingleInstaPost data={post} />
                })
            })
        })
        */   
    }
    
    handleDrag = (e,data) => {
        // this.state.animValues + deltaX.
        this.setState({
            deltaX: data.deltaX * 2
        })
    }

    /*

    */

  render() {
        return (
        <div id='instafeed' className="instafeed">
            <h3>Instagram feed - scroll or drag to show more</h3>
            
            <p>nvm instagram nuked their api, building a scraper instead brb</p>
        </div>
        );
      
  }
}
