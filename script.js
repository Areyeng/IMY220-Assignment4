$(document).ready(function() {
	$(".details").on('click',"button",function(event){
		let currVal = $(this).parent().children('span').html();
		let dataType = $(this).parent().data('type');
		let prevHtml = $(this).parent().html();

		$(this).parent().html("")
		.append(
			$("<div></div>")
			.addClass('row')
			.append(
				$("<div></div>")
				.addClass('col-8')
				.append(
					$("<input/>")
					.val(currVal)
					.attr("type",dataType)
					.addClass('form-control')
				)
	  		)
		.append(
			$("<div></div>")
			.addClass('col-4')
			.append(
				$("<button></button")
				.addClass('btn btn-dark pull-right')
				.html("Update")
				.on("click",function(){
					let newVal = $(this).parent().parent().find('.col-8 input').val();
					let details = $ (this).parents(".details");
					$(this).parents(".details").html(prevHtml);
					details.children("span").html(newVal);
				})
			)
		)
	)

	
   });
});