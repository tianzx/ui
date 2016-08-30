require('babel-register')

const webpack = require('webpack');

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./webpack.config');

const isProduction = process.env.NODE_ENV === 'production';
const isDeveloping = !isProduction;

const app = express();

// Webpack developer
if (isDeveloping) {
    const compiler = webpack(config);
    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath: config.output.publicPath,
        noInfo: true
    }));

    app.use(require('webpack-hot-middleware')(compiler));
}

//  RESTful API
const publicPath = path.resolve(__dirname);
app.use(bodyParser.json({type: 'application/json'}))
app.use(express.static(publicPath));

const port = isProduction ? (process.env.PORT || 80) : 7777;

// this is necessary to handle URL correctly since client uses Browser History
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, '', 'index.html'))
})

app.put('/api/login', function (req, res) {
    const credentials = req.body;
    if (credentials.user === 'admin' && credentials.password === '123456') {
        res.cookie('uid', '1', {domain: '127.0.0.1'});
        res.cookie('smartauto-token', "12345678");
        // res.cookie('user',"tianzx")
        res.json({'user': credentials.user, 'role': 'ADMIN', 'uid': 1});
    } else {
        res.status('500').send({'message': 'Invalid user/password'});
    }
});

app.post('/api/menu', function (req, res) {
    res.json({
        menus: [
            {
                key: 1,
                name: 'Dashboard',
                icon: 'user',
                child: [
                    {
                        name: '电子围栏',
                        key: 101,
                        url: 'fence'
                    },
                    {
                        name: '用户',
                        key: 102,
                        url: 'user'
                    },
                    {
                        name: '选项3',
                        key: 103
                    },
                    {
                        name: '选项4',
                        key: 104
                    }
                ]
            },
            {
                key: 2,
                name: '导航二',
                icon: 'laptop',
                child: [
                    {
                        name: '选项5',
                        key: 201
                    },
                    {
                        name: '选项2',
                        key: 202
                    },
                    {
                        name: '选项3',
                        key: 203
                    },
                    {
                        name: '选项4',
                        key: 204
                    }
                ]
            },
            {
                key: 3,
                name: '导航三',
                icon: 'notification',
                child: [
                    {
                        name: '选项1',
                        key: 301
                    },
                    {
                        name: '选项2',
                        key: 302
                    },
                    {
                        name: '选项3',
                        key: 303
                    },
                    {
                        name: '选项4',
                        key: 304
                    }
                ]
            }
        ]
    });
});

app.post('/api/my', function (req, res) {
    res.json({'user': 'admin', 'role': 'ADMIN', 'uid': 1});
});

app.post('/api/logout', function (req, res) {
    res.clearCookie('uid');
    res.json({'user': 'admin', 'role': 'ADMIN'});
});
let i= 0 ;
app.post('/api/fence', function (req, res) {
    console.log(i++);
    res.json({
        fences: {
            "meta": {
                "total": 2,
                "per_page": 1,
                "page": 1
            },
            "data": [{
                "id": 1,
                "email": "tianzx@aliyun.com",
                "name": "tianzx",
                "roles": "管理员",
                "created_at": "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
            },
                {
                    "id": 2,
                    "email": "tianzx@aliyun.com",
                    "name": "tianzx",
                    "roles": "管理员",
                    "created_at": "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
                },{
                    "id": 3,
                    "email": "tianzx@aliyun.com",
                    "name": "tianzx",
                    "roles": "管理员",
                    "created_at": "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
                },{
                    "id": 4,
                    "email": "tianzx@aliyun.com",
                    "name": "tianzx",
                    "roles": "管理员",
                    "created_at": "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
                },{
                    "id": 5,
                    "email": "tianzx@aliyun.com",
                    "name": "tianzx",
                    "roles": "管理员",
                    "created_at": "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
                },{
                    "id": 6,
                    "email": "tianzx@aliyun.com",
                    "name": "tianzx",
                    "roles": "管理员",
                    "created_at": "Mon Jul 25 2016 16:31:45 GMT+0800 (CST)"
                },
                {
                    "id": 7,
                    "email": "tianzx@aliyun.com",
                    "name": "tianzx",
                    "roles": "普通用户",
                    "created_at": "Mon Oct 10 2016 08:00:00 GMT+0800 (CST)"
                }]
        }
    });
});

app.listen(port, function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Server running on port ' + port);
});
