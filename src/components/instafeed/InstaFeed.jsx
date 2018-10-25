import React, { Component } from 'react';
import './InstaFeed.css';
import SingleInstaPost from './SingleInstaPost'
import HorizontalScroll from 'react-scroll-horizontal'

export default class InstaFeed extends Component {
    constructor() {
        super()
        this.state = {
            apiResult: {},
            embeddedHtml: [],
            posts: undefined
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
            this.setState({
                posts: result.data.map((post) => {
                    return <SingleInstaPost data={post} />
                })
            })
        })
        
    }


  render() {
      if (this.state.posts === undefined) {
          return (<p>loading</p>)
      } else {
          return (
            <div id='instafeed' className="instafeed">
                <h3>Instagram feed - scroll to show more</h3>
                <HorizontalScroll>
                    {this.state.posts.map((post) => {
                        return post
                    })}
                </HorizontalScroll>
            </div>
          );
      }
  }
}