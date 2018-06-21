 $(function () {
   var currentPage = 1;
   var totalPages = 25;
   $("#page").bootstrapPaginator({
       bootstrapMajorVersion:3, //对应的bootstrap版本
       currentPage: currentPage, //当前页数
       numberOfPages: 10, //每次显示页数
       totalPages:totalPages, //总页数
       shouldShowPage:true,//是否显示该按钮
       useBootstrapTooltip:true,
       //点击事件
       onPageClicked: function (event, originalEvent, type, page) {
           console.log(page)

       }
   });

});