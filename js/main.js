$( document ).ready(function() {


	$('#slideB').on('click', function() {
		$('#slide').slideToggle(2000).show(3000);
	});

	$('#fadeB').on('click', function() {
		$('#fade').fadeToggle(3000).show(2000);
		console.log('Sihle');
	});

	var image = $('#cssIMB');
	$('#cssB').on('click', function() {
		$('#cssIMB').css({opacity: "0.5"}).show(3000);

	});

	$('#slideupdownB').on('click', function() {
		$('#slideupdown').slideUp(3000).slideDown(2000);

	});
	/*
//url: "data/mydata.js",
//http://rest.learncode.academy/api/learncode/friends
//https://api.twitter.com/1.1/statuses/user_timeline.json
//https://github.com/zenzilesihle/ajax/blob/master/data.js
var username = "zenzilesihle";
var password = "swordfish@123"
	var presents = $('#presents-list');
	presents.append('Food and Drinks');
	$.ajax({
		url: "https://github.com/zenzilesihle/ajax/blob/master/data.js",
		dataType: "json",
		data: '{"username": "' + username + '", "password" : "' + password + '"}',
		success: function (data) {

				//presents.append('<li>'+item.name+ '  '+item.drink+ '</li>');
				presents.append('<li>'+data+'</li>');
				console.log(data);
		}
	}).error(function(e)
	{
		alert(' Error '+e);
	})
	*/


	var presents = $('#presents-list');
	$('#reqBtn').on('click', function() {
		var name = $('#name').val();
		var pres = $('#present').val();
		var dat = '<li> '+'<h4>'+name+ '>> ' + pres+'</h4>'+' </li>';

			presents.append(dat);
			//$.append(name).text("");
			//$(this).val("")
			$('#name').val("");
			$('#present').val("");
	});

});
