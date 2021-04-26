var $ = new BaseJS();

$.ready(function() {
	var result = $.select("#result");
		
	$.select("#message").on("keyup").call(function(e) {
		if (e.keyCode == 13 && this.value.trim() !== "") {
			$.http("/" + encodeURI(this.value)).get().ready(function(res) {
				if (res.readyState === 4 && res.status == 200) {
					txt = res.responseText;
					if (txt.trim() === "") {
						txt = "?";
					}
					result.append("<div class='bot'><img class='mr-2' src='/static/media/kgce1.png' style='width: 30px; height: 30px'><span>" + txt + "</span></div>");
					result[0].scrollTop = result[0].scrollHeight;
				}
			});

			result.append("<div class='you'><span class=' bg-primary text-white'>" + this.value + "</span></div>");
			this.value = "";
			result[0].scrollTop = result[0].scrollHeight;
		}
	});

  	var message = document.getElementById('message')
	var sendBtn = document.getElementById('send');
	sendBtn.addEventListener('click', function() {
		$.http("/" + message.value).get().ready(function(res) {
				if (res.readyState === 4 && res.status == 200) {
					txt = res.responseText;
					if (txt.trim() === "") {
						txt = "?";
					}
					result.append("<div class='bot'><img class='mr-2' src='/static/media/kgce1.png' style='width: 30px; height: 30px'><span>" + txt + "</span></div>");
					result[0].scrollTop = result[0].scrollHeight;
				}
			});

		result.append("<div class='you'><span class=' bg-primary text-white'>" + message.value + "</span></div>");
		message.value = "";
		result[0].scrollTop = result[0].scrollHeight;
	});

});
