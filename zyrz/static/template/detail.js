jc.data.setup(function (data) {
    var html = '';

    html += '<div class="detail-con clearfix">';
    html += '<h2 id="news-title">' + this.getString(data.title) + '</h2>';
    html += '<p id="news-xinxi">';
    html += '发布人：' + '<span>'+ (this.getString(data.publisher)) + '</span>';
    html += '发布时间：' +'<span>'+ (jc.tools.formatDate(data.createDate, 'yyyy-MM-dd hh:mm:ss'))+'</span>';
   	html += '编辑于：' +'<span>'+ (jc.tools.formatDate(data.updateDate, 'yyyy-MM-dd hh:mm:ss'))+'</span>';
   	html += '查看次数：' + '<span>'+ (data.viewCount) + '次</span>';
    html += '</p>';
     html += '<hr />';
    html += '</div>';
    html += '<div class="detail-txt">';

    var content = this.getString(data.content);
  
    html += content;
    html += '</div>';
    html += '<div class="Other-page clearfix">';
    html += '<a data-type="prev" href="javascript:;" class="Previous-page">上一篇</a>';
    html += '<a data-type="next" href="javascript:;" class="next-page">下一篇</a>';
    html += '</div>';



    return html;

});