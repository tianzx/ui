/**
 * Created by tianzx on 16/8/25.
 */
import React,{Component} from 'react';
import FenceList from './FenceList';

export default class Fence extends React.Component {

    render() {
        return(
            <div>
                {/*<FenceSearch/>*/}
                <FenceList/>
            </div>
        );
    }
}
