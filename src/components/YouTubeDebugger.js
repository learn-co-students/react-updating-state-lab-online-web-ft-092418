// Code YouTubeDebugger Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: { bitrate: 8, video: { resolution: '1080p' } }
    }
  }

  fireBitrate = () => {
    this.setState({
      settings: {...this.state.settings, bitrate: 12}
    }, () => {console.log(this.state)})
  }

  fireRes = () => {
    this.setState({
      settings: {...this.state.settings, video: {resolution: '720p'}}
    }, () => {console.log(this.state)})
  }

  render(){
    return (
      <div>
        <button className="bitrate" onClick={this.fireBitrate}>bitrate</button>
        <button className="resolution" onClick={this.fireRes}>res</button>
      </div>
    )
  }
}
