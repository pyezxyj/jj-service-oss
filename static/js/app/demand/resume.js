$(function() {


    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'name',
        title: '简历名称'
    }, {
        field: 'publisher',
        title: '发布人',
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        data: { '0': '违规', '1': '正常' },
        search: true
    }, {
        field: 'dealNote',
        title: '违规提示'
    }, {
        field: 'publishDatetime',
        title: '更新时间',
        formatter: dateTimeFormat,
    }];

    buildList({
        columns: columns,
        pageCode: '612185',
        searchParams: {
            companyCode: OSS.company
        }
    })

    $('#illegalBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "illegalResume.html?code=" + selRecords[0].code + "&name=" + encodeURI(encodeURI(selRecords[0].name));
    });
});