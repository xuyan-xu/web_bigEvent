$(function () {
    initCateInfo()
    // 获取文章分类的列表
    function initCateInfo() {
        $.ajax({
            type: "GET",
            url: '/my/article/cates',
            success(res) {
                if (res.status != 0) {
                    return layer.msg('res.message');
                }

                const htmlStr = template('tpl-table', res);
                $('tbody').html(htmlStr);
            }
        })
    }

    const layer = layui.layer
    // 为添加类别按钮绑定点击事件
    var indexAdd = null
    $('#btnAddCate').on('click', function () {
        indexAdd = layer.open({
            type: 1,
            area: ['500px', '250px'],
            title: '添加文章分类',
            content: $('#dialog-add').html()
        })
    })

    $('body').on('submit', '#form-add', function (e) {
        e.preventDefault();
        // 发起ajax请求
        $.ajax({
            type: 'POST',
            url: '/my/article/addcates',
            data: $(this).serialize(),
            success(res) {
                if (res.status !== 0) {
                    return layer.msg(res.message);
                }
                layer.msg('添加分类成功');
                initCateInfo();
                layer.close(indexAdd);
            }
        })
    })


    var indexEdit = null
    $('tbody').on('click', '.btn-edit', function () {
        // 弹出一个修改文章分类信息的层
        indexEdit = layer.open({
            type: 1,
            area: ['500px', '250px'],
            title: '修改文章分类',
            content: $('#dialog-edit').html()
        })
    })


})