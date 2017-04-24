/**
 * Created by tianzx on 2017/4/18.
 */
import React,{Component} from 'react';
import SNUploadList from "./SNUploadList";
import UploadModel from './UploadModel';
export default class SN extends Component {

  render() {
    return(
      <div>
        {/*<FileSearch/>*/}
        <SNUploadList/>
        {/*123*/}
        {/*<UploadModel/>*/}
      </div>
    );
  }
}
