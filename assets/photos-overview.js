$(function(){
	$('#overviewer').html('<p>正在加载... 时间过长，则加载失败。</p>');
	$.getJSON('assets/photos-overview.json', function(data, s){
		console.log(data);
	});
});