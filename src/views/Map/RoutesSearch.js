/**
 * Created by tianzx on 2016/10/25.
 */

import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Form, Input, Row, Col, DatePicker} from 'antd';

import {retrieveMap,initMap}from '../../actions/map';

class RoutesSearch extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {actions} = this.props;
    actions.initMap();
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.onChange = this.onChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {actions} = this.props;
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        //console.log('Errors in form!!!');
        return;
      }else {
        const data = this.props.form.getFieldsValue();
        actions.retrieveMap(data);
      }
    });

  }

  // onChange(dates, dateStrings) {
  //   console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  // }

  render() {
    const {actions} = this.props;
    const RangePicker = DatePicker.RangePicker;
    const {getFieldDecorator} = this.props.form;
    const snRules = [
      {
        required: true,
        message: 'SN不能为空',
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
                rules: snRules,
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item >
              {getFieldDecorator('time', {
              })(
                <RangePicker  format="YYYY/MM/DD HH:mm:ss" />
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
  return {actions: bindActionCreators({retrieveMap,initMap}, dispatch)};
}

RoutesSearch.propTypes = {
  actions: PropTypes.object,
  form: PropTypes.object
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(RoutesSearch));
