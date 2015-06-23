$(document).ready(function() {
			var listWidth = [];
			var total = 0;
			 // new li to append
			var li = $('<li><a>more</a></li>')
			$(li).addClass("list last");
			 // new ul to be appended to ul
			var ul = $('<ul>')
            ul.addClass("ujk");
			var winWidth = $(window).width();
			// variable to store index of element after which new li(more) will be added
			var $index = true;

			// variable to state that index vaiable is set, no more index need to be set 
			var $value_set = true;
			$('#wrap ul li').each(function() {
			    total += parseInt($(this).width());
			    //alert(total);
			    //alert(winWidth);
			    //alert($(this).index());
			    if (total > winWidth){
			        if ($value_set) {
			           // alert($(this).index());
				        $index = $(this).index() - 3;
				        //alert($index);
				    	$value_set = false; 
					}
			    }
			   
			});
			if (!$value_set) {
			   // alert("ac");
			    $("#wrap ul li:gt(" + $index + ")").each(function () {
			        ////alert($(this).index());
			        //alert($(this).value());
                    var flag= $(this).is(':last-child');
                    if(!flag) {
			           ul.append(this);
                    } 
                    /*else {
                       // remove last element
                        $(this).detach();
                    }*/
			        //$(this).addClass("last after");
			    });
  var count = ul.children().length;
               // alert(count);
                //li.text(count);
			   /* if (ul.length) {
			        $('#wrap ul').append(li.append(ul));
                }*/
                //add newly added list element as second last element in the list
      $('#wrap ul').find(' > li:nth-last-child(1)').before(li.append(ul));
                    
			    
                
                
			}

		});
