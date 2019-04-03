(function(){
	var arrStr = 'Ordinary programmer? Or what?';
	var i = 0;
	var flag = true; // 代表添加
	function autoComplate(arr) {
		if (flag) {
			if (i === arr.length) {
				flag = false;
				clearInterval(timer);
				timer = setInterval(function(){
					autoComplate(arrStr);
				}, 50);
			} else {
				$('#typed').html($('#typed').html() + arr[i]);
			i++;
			}
			
		} else {
			if (i === 0) {
				flag = true;
				clearInterval(timer);
				timer = setInterval(function(){
					autoComplate(arrStr);
				}, 150);
			} else {
				$('#typed').html($('#typed').html().slice(0, i - 1));
				i--;
			}
		}
	}
	var timer = setInterval(function(){
		autoComplate(arrStr);
	}, 100);

	$('.fa-user').click(function(){
		$('.fa').removeClass('active');
		$(this).addClass('active');
		$('.headerCon').hide();
		$('#me').fadeIn();
	})
	$('.fa-book').click(function(){
		$('.fa').removeClass('active');
		$(this).addClass('active');
		$('.headerCon').hide();
		$('#skills').fadeIn();
	})
	$('.fa-desktop').click(function(){
		$('.fa').removeClass('active');
		$(this).addClass('active');
		$('.headerCon').hide();
		$('#project').fadeIn();
	})
	$('.fa-mobile').click(function(){
		$('.fa').removeClass('active');
		$(this).addClass('active');
		$('.headerCon').hide();
		$('#contactMe').fadeIn();
	})
	function aj() {
		$.ajax({
		url: '/getIntro.do',
		type: 'get',
		success: function(data) {
			console.log(data);
		}
		})
	}
	aj()
}())