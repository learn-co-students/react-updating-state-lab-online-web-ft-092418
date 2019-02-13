// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends React.Component {
    
    constructor () {
        super()
        this.state = { 
            errors: [], 
            user: null, 
            settings: { 
                bitrate: 8, 
                video: { resolution: '1080p' } } }
    }

    adjustBitrate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    adjustRes = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }
    
    render () {
        return (
            <div>
            <button className="bitrate" onClick={this.adjustBitrate}>bitrate </button>
            <button className="resolution" onClick={this.adjustRes}>resolution </button>
            </div>
        )
    }
}