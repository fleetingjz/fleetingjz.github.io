$(function(){
	$('#overviewer').html('<p>正在加载... 时间过长，则加载失败。</p>');
	$.getJSON('assets/photos-overview.json', function(data, s){
		if(!data.base || !data.photos.length > 0){
			$('#overviewer').html('<p>加载失败：文件错误。</p>');
			return false;
		}
		$('#overviewer').html('<ul id="o-v1"></ul>');
		for(i in data.photos){
			var a = data.photos[i], b = a.split('-');
			b[0] = b[0].replace('fjz', '');
			b[2] = b[2].substr(0, 2)+':'+b[2].substr(2, 2);;
			var date = b[1].substr(0, 4)+'-'+b[1].substr(4, 2)+'-'+b[1].substr(6, 2);
			$('#o-v1').append('<li><a href="'+data.base+a+'!inline'+'" target="_blank" class="img"><img src="'+data.base+a+'!thumb'+'" alt="机位 '+b[0]+'" title="机位 '+b[0]+'" /></a><br /><p><time datetime="'+date+'" title="机位 '+b[0]+' 拍摄于北京时间 '+date+' '+b[2]+' 的照片">'+date+'</time> <a href="'+data.base+a+'!large'+'" target="_blank">特大图</a></p></li>');
		}
	});
});