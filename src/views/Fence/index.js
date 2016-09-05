/**
 * Created by tianzx on 16/8/25.
 */
import React from 'react'
import FenceList from './FenceList'
import {connect} from 'react-redux';

import Styles from './index.less'

export default class Fence extends React.Component {

    render() {
        return(
            <div>
                {/*<FenceSearch/>*/}
                <FenceList/>
            </div>
        )
    }
}
