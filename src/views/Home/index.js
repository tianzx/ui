import React from 'react'
import { Row, Col, Collapse, Alert } from 'antd';
const Panel = Collapse.Panel;

import PanelBox from '../../components/PanelBox';

import {Line,Pie,Doughnut} from 'react-chartjs';

import './index.less'


export default class Home extends React.Component {
  constructor (props) {
      super(props);
  }

  componentWillMount () {
  }

  callback() {

  }

  render () {

    return (
      <div>
            home
      </div>
    )
  }
}
