$(function () {
    var form = layui.form
    form.verify({
        nickname: function (value) {
            if (value.length > 6) {
                return '昵称长度必须在 1 ~ 6 个字符之间！'
            }
        }
    })

    initUserInfo()
    function initUserInfo() {
        $.ajax({
            type: 'GET',
            url: '/my/userinfo',
            success(res) {
                if (res.status !== 0) {
                    return '获取用户信息失败';
                }
                form.val('userInfo', res.data)
                // console.log(res.data);
            }
        })
    }

    $('#btnReset').on('click', function (e) {
        e.preventDefault();
        initUserInfo();
    })

    $('.layui-form').on('submit', function (e) {
        e.preventDefault();

        $.ajax({
            type: 'POST',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success(res) {
                if (res.status !== 0) {
                    return layer.msg(res.message);
                }

                window.parent.getUserInfo()
            }
        })
    })

})