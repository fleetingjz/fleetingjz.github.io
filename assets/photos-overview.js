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
			b[0] = b[0].replace('fjz');
			var date = b[1].substr(0, 4)+'-'+b[1].substr(4, 2)+'-'+b[1].substr(6, 2);
			$('#o-v1').append('<li><a href="'+data.base+a+'!inline'+'" target="_blank"><img src="'+data.base+a+'!thumb'+'" alt="机位 '+b[0]+'" /></a><br /><p>机位 '+b[0]+'（<time datetime="'+date+'">'+b[1]+'</time>） <a href="'+data.base+a+'!large'+'" target="_blank">特大图</a></p></li>');
		}
	});
});