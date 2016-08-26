/**
 * Created by tianzx on 16/8/25.
 */
import React from 'react'
import FenceSearch from './FenceSearch'
export default class Fence extends React.Component {

    render() {
        return(
            <div>
                <FenceSearch onShowCreateModal="" onSearch="" form=""/>
            </div>
        )
    }
}
