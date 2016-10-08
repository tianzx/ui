import React from 'react';

import './index.less';

export class PanelBox extends React.Component {
  constructor () {
    super();
  }

  render () {

    return (
      <div className="panel-box ant-collapse">
        <div className="ant-collapse-item">
          <div className="ant-collapse-header">
            <span>{this.props.title}</span>
          </div>
          <div className="ant-collapse-content ant-collapse-content-active">
            <div className="ant-collapse-content-box">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
PanelBox.propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.node.isRequired,
};