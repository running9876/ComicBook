/// <reference path="../js/common.js" />

jc.data
		.setup(function(data) {
			var html = '';

			if (!data)
				return html;

			var list = data.list;

			var columnListId = window.columnListId || data.id;

			for (var i = 0, l = list.length; i < l; i++) {

				var curList = list[i];

				html += '<li class="clearfix" onclick="window.router(\'menuAndDetail\',{ rootColumnId:\'' + window.rootColumnId + '\',columnListId:\'' + columnListId + '\',articleId:\'' + curList.id + '\' });">';
				html += '<i></i>';
				html += '<div class="new-txt" >';
				html += '<a  class="txt-title">'+ (this.getString(curList.title)) + '</a>';
				
				html += '</div>';
				html += '</li>';
				
				
			}

			return html;

		});