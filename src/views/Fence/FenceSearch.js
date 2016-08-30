/**
 * Created by tianzx on 16/8/29.
 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Table, Icon, Popconfirm, Modal, Pagination, message, Button} from 'antd';
import {fetchFences} from '../../actions/fence';
import Style from './index.less'
class FenceSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        fetchFences: React.PropTypes.func,
        fences: React.PropTypes.object
    };

    componentDidMount() {
        const {actions, routing, fences} = this.props;
        actions.fetchFences();
    }

    render() {
       return (
           <div className="normal">
               {/*<Button type="primary" size="large" onClick={handleShowCreateModal}>新增</Button> */}
               <Button type="ghost">新增</Button>
           </div>
       )
    }
}
// function mapStateToProps(state) {
// }

// function mapDispatchToProps(dispatch) {
//         return {actions: bindActionCreators({fetchFences}, dispatch)};
//
// }
export default connect(
    // mapStateToProps,
    // mapDispatchToProps
)(FenceSearch);
