/**
 * Created by tianzx on 2016/10/25.
 */

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Form, Input, Row, Col, DatePicker} from 'antd';

import {retrieveMap}from '../../actions/map';

class RoutesSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {actions} = this.props;
    const data = this.props.form.getFieldsValue();
    console.log(data);
    // console.log(data.field + ' ' + data.keyword);
    actions.retrieveMap(data);
  }

  onChange(dates, dateStrings) {
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }

  render() {
    const {actions} = this.props;
    const RangePicker = DatePicker.RangePicker;
    const {getFieldDecorator} = this.props.form;
    const keywordRules = [
      {
        required: true,
        message: '不能为空',
      },
    ];
    return (
      <Row >
        <Col span={20} className={'col'}>
          <Form inline onSubmit={this.handleSubmit}>
            <Form.Item
              hasFeedback
            >
              {getFieldDecorator('sn', {
                initialValue: '',
                rules: [{required: true}],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator('time', {
                initialValue: '',
                rules: [{required: true}],
              })(
                <RangePicker showTime format="YYYY/MM/DD HH:mm:ss" />
              )}


            </Form.Item>
            <Button type="primary" htmlType="submit">搜索</Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
    const {maps} = state;
    return {
        maps
    };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({retrieveMap}, dispatch)};
}

RoutesSearch.propTypes = {
  actions: React.PropTypes.object,
  form: React.PropTypes.object
};
export default connect(
  null,
  mapDispatchToProps
)(Form.create()(RoutesSearch));
