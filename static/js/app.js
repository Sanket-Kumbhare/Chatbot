var $ = new BaseJS();

$.ready(function() {
	var result = $.select("#result");
	var message = $.select("#message");
		
	function reply() {
		$.http("/" + message[0].value).get().ready(function(res) {
				if (res.readyState === 4 && res.status == 200) {
					txt = res.responseText;
					if (txt.trim() === "") {
						txt = "?";
					}
					result.append("<div class='bot'><img class='mr-2' src='/static/media/kgce1.png' style='width: 30px; height: 30px'><span>" + txt + "</span></div>");
					result[0].scrollTop = result[0].scrollHeight;
				}
			});

			result.append("<div class='you'><span class=' bg-primary text-white'>" + message[0].value + "</span></div>");
			message[0].value = "";
			result[0].scrollTop = result[0].scrollHeight;
	}

	$.select("#message").on("keyup").call(function(e) {
		if(e.keyCode == 13 && message[0].value.trim() !== "") {
			reply();
		}
	});

	$.select("#send").on("click").call(function() {
		if(message[0].value.trim() !="") {
			reply();
		}
	});
});
