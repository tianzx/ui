import React from 'react'

import './index.less'

import GoogleMapReact from 'google-map-react';


export default class Home extends React.Component {
    // state = {
    //     center: [39.942157, 116.415192],
    //     zoom: 19,
    // };
    //
    // _onChange = ({center, zoom}) => {
    //
    //     console.log(center)
    //     console.log(zoom)
    //     this.setState({
    //         center: center,
    //         zoom: zoom,
    //     });
    // }
    //
    // render() {
    //     return (
    //         <GoogleMapReact
    //             bootstrapURLKeys={{
    //                 key: 'AIzaSyB25VDK7k6JZYTnMVaQELieTqX1ht_4ZOg',
    //                 language: 'zh-cn',
    //             }}
    //             onChange={this._onChange}
    //             center={this.state.center}
    //             zoom={this.state.zoom}>
    //         </GoogleMapReact>
    //     );
    // }
    render() {
        return(
            <div>
                hello
            </div>
        )
    }
}
