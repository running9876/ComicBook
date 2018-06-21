$(function(){　
	var name =/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;//姓名的正则表达式
	var id=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;//身份证号正则表达式
	var certificate =/^[a-zA-Z]{2}\d{13}$/;//证书编号正则表达式
	var tel = /^1[34578]\d{9}$/;//手机号的正则表达式
//导航栏
	var nowval = $("#now").html();
    if (nowval==undefined) {
		 i = 0;
    };
    if(nowval=="新闻动态"){
    	 i = 1;
    };
    if(nowval=="政务公开"){
    	 i = 2;
    };
    if(nowval=="信用等级服务"){
    	 i = 3;
    };
    if(nowval=="标准化工作"){
    	 i = 4;
    };
    if(nowval=="职业设置"){
    	 i = 5;
    };
    if(nowval=="证书查询"){
    	 i = 6;
    };
    if(nowval=="机构概况"){
    	 i = 7;
    };
	$("#menu2 li a.Major").wrapInner( '<span class="out"></span>' );
	$("#menu2 li a.Major").each(function() {
		$( '<span class="over">' +  $(this).text() + '</span>' ).appendTo( this );
	});
	$("#menu2 li").eq(i).find(".out").animate({'top':'56px'},300); // move down - hide
	$("#menu2 li").eq(i).find(".over").animate({'top':'0px'},300); // move down - show
	$("#menu2 li").hover(function() {
		$(".out",	this).stop().animate({'top':'56px'},300); // move down - hide
		$(".over",	this).stop().animate({'top':'0px'},300); // move down - show
		$(this).find(".down-ul").slideDown(300);
	}, function() {
		$(".out",	this).stop().animate({'top':'0px'},300); // move up - show
		$(".over",	this).stop().animate({'top':'-56px'},300); // move up - hide
		$(this).find(".down-ul").slideUp(300);
		$("#menu2 li").eq(i).find(".out").animate({'top':'56px'},300); // move down - hide
		$("#menu2 li").eq(i).find(".over").animate({'top':'0px'},300); // move down - show
	});
// 新闻动态滚动
	$('#marquee3').kxbdSuperMarquee({
		distance:620,
		time:4,
		navId:'#mar3Nav',
		direction:'left'
	});
//委员会风采
	$('#marquee1').kxbdSuperMarquee({
		distance:360,
		time:3,
		btnGo:{left:'#goL',right:'#goR'},
		direction:'left'
	});
//回到顶部
	var speed = 800;//滚动速度
	var h=document.body.clientHeight;
//回到顶部
	$("#toTop").click(function () {
		$('html,body').animate({
			scrollTop: '0px'
		},speed);			
	});
//回到底部
	var windowHeight = parseInt($("body").css("height"));//整个页面的高度
	$("#toBottom").click(function () {
		$('html,body').animate({
			scrollTop: h+'px'
		},speed);
	});
/*首页查询界面*/
$('.form-con input.input').focus(function(){
	val = $(this).val();
	$(this).val("");
	$(this).css("color","#7d7d7d");
});
$('.form-con input').blur(function(){
	if ($(this).val()==''||$.trim($(this).val())=='') {
		$(this).val(val);
	} 
});
$("form").submit( function(event){
	var name1 = $.trim($("#name").val());
	var idNum1 = $.trim($("#idNum").val());
	var certificateNum1 = $.trim($("#certificateNum").val());
	Result1=true;
    if(!name.test(name1)||name1=='姓名'){
        $("#name").css("color","red");
        Result1=false;
        return Result1; // 返回值为false，将阻止表单提交
    };
    if(idNum1==""){
        $("#idNum").css("color","red");
        Result1=false;
        return Result1; // 返回值为false，将阻止表单提交
    };
    if(!certificate.test(certificateNum1)){
        $("#certificateNum").css("color","red");
        Result1=false;
        return Result1; // 返回值为false，将阻止表单提交
    };
    if(Result1==true){
    	$("#name").val(encodeURI(name1));
    };
});
//添加到收藏夹 
 $("#shoucang").click(function(){　　　　//$里面是链接的id 
	var ctrl = (navigator.userAgent.toLowerCase()).indexOf('mac') != -1 ? 'Command/Cmd' : 'CTRL'; 
	if(document.all) { 
		window.external.addFavorite('http://zyrcrz.org.cn/', '全国职业人才认证中心官网') 
	} else if(window.sidebar) { 
		window.sidebar.addPanel('全国职业人才认证中心官网', 'http://zyrcrz.org.cn/', "") 
	} else{//添加收藏的快捷键 
	alert('添加失败\n您可以尝试通过快捷键' + ctrl + ' + D 加入到收藏夹~') 
	}; 
}); 
//设置主页
$("#shouye").click(function(){ 
	if(document.all){//设置IE 
		document.body.style.behavior = 'url(#default#homepage)'; 
		document.body.setHomePage(document.URL); 
	}else{//网上可以找到设置火狐主页的代码，但是点击取消的话会有Bug，因此建议手动设置 
		alert("设置首页失败，请手动设置！"); 
	} 
	});
	/*机构概况*/
	$(".mechanism-left ul li").click(function(){
		var liindex = $(this).index();
		var ahtml = $(this).html().slice(0,4);
		$("#now").html(ahtml);
		$(this).addClass("click").siblings().removeClass("click");
		$(this).find("i").show();
		$(this).siblings("li").find("i").hide();
		$(".mechanism-right ul").eq(liindex).slideDown().siblings().slideUp();
		
	});
    /*留言板*/
   	$('.liuyang-form .input-con input').focus(function(){
	$(this).css("border-color","");
	});
	$('#jigouliuyan').focus(function(){
	$(this).css("border-color","");
	});
 	$(document).keyup(function(event){
 		var jigouname = $.trim($("#jigouname").val());
		var jigouren = $.trim($("#jigouren").val());
		var jigoudianhua = $.trim($("#jigoudianhua").val());
	   	var jigouliuyan = $.trim($("#jigouliuyan").val());
		if (jigouname!=""||jigouren!=""||jigoudianhua!="") {
			$("#qvxiao").css("background-color","#b31e1e");
		} else{
			$("#qvxiao").css("background-color","#afafaf");
		}

　　});
   $("#tijiao").click(function() {
   	var Result1=true;
   	var jigouname1 = $.trim($("#jigouname").val());
	var jigouren1 = $.trim($("#jigouren").val());
	var jigoudianhua1 = $.trim($("#jigoudianhua").val());
	var jigouliuyan1 = $.trim($("#jigouliuyan").val());
	if(jigouname1==""){
		$("#jigouname").css("border-color","red");
		Result1=false;
	};
	if(!name.test(jigouren1)){
		$("#jigouren").css("border-color","red");
		Result1=false;
	};
	if(!tel.test(jigoudianhua1)){
		$("#jigoudianhua").css("border-color","red");
		Result1=false;
	};
	if(jigouliuyan1==""){
		$("#jigouliuyan").css("border-color","red");
		Result1=false;
	};
	//var obj = {"name":jigouren1,"phone":jigoudianhua1,"organ":jigouname1,"text":jigouliuyan1};
	if(Result1==true){
		$.ajax({
	        url : '/renren-admin/api/liuyan',
	        type: "GET",
	        dataType : "json",
	       	data : {"name":jigouren1,"phone":jigoudianhua1,"organ":jigouname1,"text":jigouliuyan1},
	       	//data : JSON.stringify(obj),
	       	//processData : false,
	        cache : false,
	        async : false,
	        success : function(data) {
	        	if(data.code==0){
	        	alert("留言提交成功,请等待我们与您联系.");
	        }else{
	        	alert(data.msg);
	        }
	        },
	        error : function() {
	           alert("发生一个网络错误,请刷新页面重新查询");
	        }
		});
	}
   	
   });
   /*职业设置*/
  $(".occupation-left ul li").click(function(){
		var liindex1 = $(this).index();
		$(this).addClass("click").siblings().removeClass("click");
		$(this).find("span").addClass("cli");
		$(this).siblings("li").find("span").removeClass("cli");
		$(this).find("i").show();
		$(this).siblings("li").find("i").hide();
		$(".occupation-right ul").eq(liindex1).slideDown().siblings().slideUp();
   });
}); 