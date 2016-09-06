/**
 * Created by tianzx on 16/8/29.
 */
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Table,Button,Form,Select,Input} from 'antd';
import styles from './index.less'
const FormItem = Form.Item;
class FenceSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
    };

    componentDidMount() {
        const {actions, routing, fences} = this.props;
        actions.fetchFences();
    }

    render() {
        function handleSubmit(e) {
            e.preventDefault();

        }

        const keywordRules = [
            {
                required: true,
                message: '不能为空',
            },
        ];
        const {getFieldProps} = this.props.form;
        return (
            <div className={styles.normal}>
                <div className={styles.search}>
                    <Form inline onSubmit={handleSubmit} >
                        <Form.Item>
                            <Select { ...getFieldProps('field', {initialValue: 'name'}) }>
                                <Select.Option value="name">名字</Select.Option>
                                <Select.Option value="age">年龄</Select.Option>
                                <Select.Option value="address">地址</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            hasFeedback
                        >
                            <Input
                                { ...getFieldProps('keyword', {
                                    initialValue:'',
                                    rules: keywordRules,
                                }) }
                            />
                        </Form.Item>
                        <Button style={{marginRight: '10px'}} type="primary" htmlType="submit">搜索</Button>
                    </Form>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return null
}

function mapDispatchToProps(dispatch) {
        return {actions: bindActionCreators({}, dispatch)};

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create()(FenceSearch));
