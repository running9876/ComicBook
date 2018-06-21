$(function(){　
	var name =/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;//姓名的正则表达式
	var id=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;//身份证号正则表达式
	var certificate=/^[a-zA-Z]{2}\d{13}$/;//证书编号正则表达式
	//查询二级页面
$('.cjcxbload ul li input').focus(function(){
	$(this).css("border-color","");
});
/*判断输入格式*/
/*首页查询过来*/
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
 };
   var certificateNum2 = getUrlParam('certificateNum');
   var idNum2 = getUrlParam('idNum');
   var name2 = decodeURI(getUrlParam('name'));
   if(certificateNum2!=null&idNum2!=null&name2!=null){
   	$.ajax({
	        url : '/renren-admin/api/getInfo',
	        type : "get",
	        dataType : "json",
	       	data : {"name": name2, "idNum": idNum2,"certificateNum":certificateNum2},
	        cache : false,
	        async : false,
	        beforeSend:function () {
	        	$(".query .query-con div.query-con1 p.no-result").css("display","none");
			    $("#wait").css("display","block");
			    },
			  complete: function () {
			    $("#wait").css("display","none");
			    $(".query .query-con div.query-con1 p.no-result").css("display","block");
			    },
	        success : function(data) {
	        	var data1 = data.data;
	        	if (data.code==0) {
		        	if(data!=null){
						$(".skill-result").html(data1.skill);
						$(".name-result").html(data1.name);
						$(".gender-result").html(data1.gender);
						$(".idNum-result").html(data1.idNum);
						$(".level-result").html(data1.level);
						$(".certificateNum-result").html(data1.certificateNum);
						$(".img-result").attr('src',"http://zyrcrz.org.cn/image/"+ data1.idNum +".jpg"); 
						$(".query .query-con div.query-con1").slideUp();
						$(".query .query-con div#query-result").slideDown();
						}else{
							alert("您输入的内容有误!")
						}
					}else if(data.code==500){
	        		alert("系统出错了,我们正在全力维护中......")
	        	}else{
	        		alert("您输入的内容有误!")
	        	}
	        },
	        error : function() {
	           alert("发生一个网络错误,请刷新页面重新查询");
	        }
		});
   }
   /*本页面查询过来*/
$("#searchbtn").click(function(){
	var Result=true;
	var zsname = $.trim($("#zs_name").val());
	var zssfzh = $.trim($("#zs_sfzh").val());
	var zszsbh = $.trim($("#zs_zsbh").val());
	if(!name.test(zsname)){
		$("#zs_name").css("border-color","red");
		Result=false;
	};
	
	if(zssfzh==""){
		$("#zs_sfzh").css("border-color","red");
		Result=false;
	};
	if(!certificate.test(zszsbh)){
		$("#zs_zsbh").css("border-color","red");
		Result=false;
	};
	if(Result==true){
		$.ajax({
	        url : '/renren-admin/api/getInfo',
	        type : "get",
	        dataType : "json",
	       	data : {"name": zsname, "idNum": zssfzh,"certificateNum":zszsbh},
	        cache : false,
	        async : false,
	        beforeSend:function () {
	        	$(".query .query-con div.query-con1 p.no-result").css("display","none");
			    $("#wait").css("display","block");
			    },
			  complete: function () {
			    $("#wait").css("display","none");
			    $(".query .query-con div.query-con1 p.no-result").css("display","block");
			    },
	        success : function(data) {
	        	var data1 = data.data;
	        	if (data.code==0) {
	        		if(data!=null){
		        		$(".skill-result").html(data1.skill);
						$(".name-result").html(data1.name);
						$(".gender-result").html(data1.gender);
						$(".idNum-result").html(data1.idNum);
						$(".level-result").html(data1.level);
						$(".certificateNum-result").html(data1.certificateNum);
						$(".img-result").attr('src',"http://zyrcrz.org.cn/image/"+ data1.idNum +".jpg"); 
						$(".query .query-con div.query-con1").slideUp();
						$(".query .query-con div#query-result").slideDown();
					}else{
						alert("您输入的内容有误!")
					}
	        	}else if(data.code==500){
	        		alert("系统出错了,我们正在全力维护中......")
	        	}else{
	        		alert("您输入的内容有误!")
	        	}
			},
	        error : function() {
	           alert("发生一个网络错误,请刷新页面重新查询");
	        }
		});
	}
});
});