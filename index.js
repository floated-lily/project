function banner(){
		var page = 0;
		var $pic_box = $('.pic_box');
		var $slide_pic = $pic_box.find('img');
		var $slide_control = $('.slide_control li');
		var $control_img = $slide_control.find('img');
		var $len = $slide_pic.length;
		var $next = $('.next');
		var $pre = $('.pre');
		var index = 0;
		var timer = null;
		//��������
		function $slide_toggle(i){
	        $slide_pic.stop(true, true).fadeOut(200)//�������е�ͼƬ
	                      				.eq(i).fadeIn(800);//������Ҫ��ʾ��ͼƬ
	        $control_img.removeClass("selected_li").eq(i).addClass("selected_li");
    	};

    	//next banner��������
		function $play_next(){//��һ�ŵ�ִ������
	      if(!$slide_pic.is(":animated")){
	        page = page < ($len - 1) ? ++page : 0;
	        $slide_toggle(page);
	      }
	    }
		//�Զ��ֲ�
		function auto_play(){timer=setInterval($play_next,3000)};
		auto_play();

		//�õ�Ƭ�����л�Ч��
	    $slide_control.click(function(){
	    	var i = $(this).index();
	        page = $(this).index();
	        $slide_toggle(page);
	      
	    }).mouseenter(function() {
		    var i = $(this).index();
		    if(page != i){//��ǰ�Ѿ���ͼƬ��Ӧ����ʱ��ͣ��Ч
		    page = $(this).index();
		    timer = setTimeout(function(){
		    $slide_toggle(page);
		    },500);}  
	    }).mouseleave(function() {
	      clearTimeout(timer);//����Ƴ�ʱȡ����ʱ���л�
	    });

	   // �õ�Ƭ���ư�ť
    	$pre.click(function(){//��һҳ��ť���ʱ
	      if(!$slide_pic.is(":animated")){
	        page = page <= 0 ? ($len - 1) : --page;
	        $slide_toggle(page);
	    	}
    	}).end().eq(1).click($play_next);

    	//�õ�Ƭ�Զ�����,�����ͣʱֹͣ����
	    $pic_box.mouseenter(function(){
	      clearTimeout(timer);
	      }).mouseleave(function(){
	        auto_play();
	      });//�����ͣʱ,��ͣ�Զ�����,�Ƴ�ʱȡ����ʱ���Զ�����
	}
		banner();	
		
		
		//�ɰ�

		$('.pro-nav li').hover(function(){
				$(this).find('.cover').css('display','block')
				$(this).find('.icon').css('display','block');
			},function(){
				$(this).find('.cover').css('display','none')
				$(this).find('.icon').css('display','none');
			})
			
		//˧ѡ
		$('.web').click(function(){
			$('.bg').removeClass('selected_nav')
			$('.web').addClass('selected_nav');
			$('.pro-nav li').stop(true, true).fadeOut(200)//�������е�ͼƬ
	                      				$('.pro-nav').find('.web_pic').fadeIn(1300);//������Ҫ��ʾ��ͼƬ
		})
		
		$('.xy').click(function(){
			$('.bg').removeClass('selected_nav')
			$('.xy').addClass('selected_nav');
			$('.pro-nav li').stop(true, true).fadeOut(200)//�������е�ͼƬ
	                      				$('.pro-nav').find('.xy_pic').fadeIn(1300);//������Ҫ��ʾ��ͼƬ
		})
		
		$('.game').click(function(){
			$('.bg').removeClass('selected_nav')
			$('.game').addClass('selected_nav');
			$('.pro-nav li').stop(true, true).fadeOut(200)//�������е�ͼƬ
	                      				$('.pro-nav').find('.game_pic').fadeIn(1300);//������Ҫ��ʾ��ͼƬ
		})
		
		$('.all').click(function(){
			$('.bg').removeClass('selected_nav')
					$('.all').addClass('selected_nav');
			$('.pro-nav li').stop(true, true).fadeOut(200)//�������е�ͼƬ
	                      				$('.pro-nav').find('li').fadeIn(1300);//������Ҫ��ʾ��ͼƬ
		})
					