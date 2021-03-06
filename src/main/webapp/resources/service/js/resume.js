$(function(){
	showPermissionControl();
	
	var router = '/service/resume';
	
	var columns = [{
		field : '',
		title : '',
		checkbox : true
	}, {
		field : 'name',
		title : '简历名称'
	}, {
		field: 'mobile',
		title: '手机号',
		search: true
	}, {
		field: 'useTimes',
		title: '使用次数'
	}, {
		field: 'status',
		title: '状态',
		type: 'select',
		data: {'0': '违规', '1': '正常'}
	}, {
		field: 'dealNote',
		title: '违规提示'
	}, {
		field : 'publishDatetime',
		title : '更新时间',
		formatter: dateTimeFormat,
    }];
	buildList(router, columns);
	
	$('#illegalBtn').click(function() {
		var selRecords = $('#tableList').bootstrapTable('getSelections');
		if(selRecords.length <= 0){
			alert("请选择记录");
			return;
		}
		window.location.href = $("#basePath").val()+"/service/illegalResume.htm?code="+selRecords[0].code+"&name="+encodeURI(encodeURI(selRecords[0].name));
	});
});