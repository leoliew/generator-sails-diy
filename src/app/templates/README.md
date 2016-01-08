# <%= answers['app:name'] %>

a [Sails](http://sailsjs.org) application

## Install
从官方源安装依赖模块

    npm install
从国内源（淘宝）npm安装依赖模块(地址:https://registry.npm.taobao.org)

    make install --registry=https://registry.npm.taobao.org

## Test
sails测试环境构建文件

    test/bootstrap.js

测试用例目录结构

    test    --  测试文件存放目录(主要测试api目录下的所有文件)
        unit    -- 单元测试目录
            controllers
                UserControllers.test.js  -- userControllers test
            response
            models
            services
        scene   --  场景测试目录

运行测试用例

    npm test

运行测试用例并生成Unit Test的覆盖率（运行结束后会在coverage目录下生成覆盖率报告）

    npm run coverage

## APIs
restful api

- [restful api](http://sailsjs.org/#/documentation/reference/blueprint-api)

其他api配置

    router: config/routers
    controllers: api/controllers
    models: api/models

## 代码规范
response数据

    response返回对象实例
    {
        data:{} -- 返回的数据
        code:0, -- 0代表没有错误，非0代表有错误
        msg:'get user info success!' -- 接口信息
        err:'find mongodb err!' -- 错误信息
    }

## 开发流程

![develop flow](http://image.beekka.com/blog/201207/bg2012070507.png)

  * 1.从dev分支分出功能分支（可以采用feature-*的形式命名）

        git checkout -b feature-x develop

  * 2.开发完成后，将功能分支合并到develop分支

        git checkout dev
        git merge --no-ff feature-x

  * 3.删除feature分支

        git branch -d feature-x

## 测试以及预发布

  * 1.创建一个预发布分支

        git checkout -b release-1.2 dev

  * 2.在beta 环境进行测试，确认没有问题后，合并到master分支

        git checkout master
        git merge --no-ff release-1.2

  * 3.对合并生成的新节点，做一个标签

        git tag -a 1.2

  * 4.再合并到develop分支

        git checkout dev
        git merge --no-ff release-1.2

  * 4.删除预发布分支

        git branch -d release-1.2

## 修复Bug

![fixbug flow](http://image.beekka.com/blog/201207/bg2012070508.png)

  * 1.创建一个修补bug分支（可以采用fixbug-*的形式）

        git checkout -b fixbug-0.1 master

  * 2.修补结束后，合并到master分支

        git checkout master
        git merge --no-ff fixbug-0.1
        git tag -a 0.1.1

  * 3.再合并到develop分支

        git tag -a 1.2

  * 4.再合并到develop分支

        git checkout dev
        git merge --no-ff fixbug-0.1

  * 4.删除"修补bug分支"

        git branch -d fixbug-0.1

## 定期更新模块(主要检查重要模块，例如waterline,sails,sails-mongo等)

  * 1.安装 npm-check 模块

        npm install -g npm-check

  * 2.检查版本信息

        npm-check

  * 3.选择更新到最新版本

        npm-check -u

## Support
Need help or have a question?

- [Sails](http://sailsjs.org)
- [Tutorials](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#where-do-i-get-help)
- [Stackoverflow](http://stackoverflow.com/questions/tagged/sails.js)
- [#sailsjs on Freenode](http://webchat.freenode.net/) (IRC channel)
- [Professional/Enterprise Options](https://github.com/balderdashy/sails-docs/blob/master/FAQ.md#are-there-professional-support-options)
- [Git/manager](http://www.ruanyifeng.com/blog/2012/07/git.html)
- [Sails Documentation](http://sailsjs-documentation.readthedocs.org/en/latest/)

