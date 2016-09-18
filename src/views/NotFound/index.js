/**
 * Created by tianzx on 16/9/5.
 */
import React from 'react'
import { Button} from 'antd';
import   './index.less'
export default class NotFound extends React.Component {

    render() {
        return(
            <div className="NotFoundNormal">
                <div className="NotFoundContainer">
                    <h1 className="NotFoundTitle">404</h1>
                    <p className="NotFoundDesc">The page was not found</p>
                    <a href="/"><Button type="primary" style={{ marginTop: 5 }}>Back to home</Button></a>
                </div>
            </div>
        )
    }
}
