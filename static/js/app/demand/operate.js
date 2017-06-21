$(function() {


    var columns = [{
        field: '',
        title: '',
        checkbox: true
    }, {
        field: 'name',
        title: '服务名称',
    }, {
        field: 'qualifyCode',
        title: '所属资质',
        listCode: "612016",
        params: {
            updater: ""
        },
        search: true,
        type: 'select',
        keyName: 'code',
        valueName: 'name',
        searchName: 'name',
        visible: false
    }, {
        title: "所属资质",
        field: "qualityName",
    }, {
        field: 'companyName',
        title: '所属企业',
        search: true,
        formatter: function(v, r) {
            return r.company.name;
        }
    }, {
        field: 'pubisher',
        title: '联系人',
        formatter: function(v, r) {
            return r.company.corporation;
        }
    }, {
        title: '联系电话',
        field: 'mobile',
        formatter: function(v, r) {
            return r.company.mobile;
        }
    }, {
        title: '价格区间',
        formatter: function(value, record) {
            return moneyFormat(record.quoteMin) + ' ~ ' + moneyFormat(record.quoteMax);
        }
    }, {
        field: 'status',
        title: '状态',
        type: 'select',
        data: { '0': '违规', '1': '正常' },
        search: true
    }, {
        field: 'location',
        title: '热门',
        type: 'select',
        search: true,
        data: { '0': '普通', '1': '热门' }
    }, {
        title: "次序",
        field: 'orderNo'
    }, {
        field: 'dealNote',
        title: '违规提示'
    }, {
        field: 'publishDatetime',
        title: '更新时间',
        formatter: dateTimeFormat
    }];
    buildList({
        pageCode: "612116",
        columns: columns,
        searchParams: {
            // companyCode: OSS.company
        }
    });


    $('#illegalBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        window.location.href = "illegalOperation.html?code=" + selRecords[0].code + "&name=" + encodeURI(encodeURI(selRecords[0].name));
    });

    $('#hotBtn').click(function() {
        var selRecords = $('#tableList').bootstrapTable('getSelections');
        if (selRecords.length <= 0) {
            toastr.info("请选择记录");
            return;
        }
        if (selRecords[0].status == "0") {
            toastr.info("已经违规，不可设置热门");
            return;
        }
        window.location.href = "hotOperation.html?code=" + selRecords[0].code + "&name=" + encodeURI(encodeURI(selRecords[0].name));
    });
});