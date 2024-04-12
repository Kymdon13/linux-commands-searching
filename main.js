const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const md = require('markdown-it')();

// md文件路径
const linux_cmd_path = path.join(__dirname, "commands");// path/to/your_own_md_files

// 指定静态文件目录
app.use(express.static(path.join(__dirname, "static")));

// 定义路由，处理 HTML 页面的请求
app.get('/', function (req, res) {
    const filePath = path.join(__dirname, "templates", "linux_cmd.html");
    // 读取文件内容
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            res.end('fs.readFile Error');
            return;
        }
        res.end(data);
    });
    console.log('linux_cmd.html has been sent');
})

// 定义路由，处理 HTML 页面的请求
app.get('/:cmd', function (req, res) {
    let cmd = req.params.cmd;
    fs.readFile(path.join(linux_cmd_path, cmd + '.md'), 'utf-8', (err, data) => {
        if (err) {
            res.end('fs.readFile Error');
            return;
        }
        res.end(md.render(data));
    });
    console.log(`cmd: ${cmd} has been sent`);
})


var server = app.listen(4000, '127.0.0.1', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
})
