(function(){
	function getScreenConfig() {
		var width = $(window).width()
		var height = $(window).height()
		return {
			w: width,
			h: height
		}
	}
	function backWidHei() {
		$('.bg').css({'height': getScreenConfig().h})
	}
	backWidHei();
	$(window).resize(function() {
		backWidHei()
	})
}())