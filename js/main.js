$(document).ready(function(){
	var _url = 'http://my-json-server.typicode.com/deviqur/belajar_api/mahasiswa';

	//untuk menampung data semua mahasiswa
	var result = '';

	// untk menampung gender semua mahasiswa
	var gender_result = '';

	//untk menampung gender sbg option di select
	var gender = [];

		$.get(_url,function (data){
			$.each(data, function (key, items){
			_gend = items.gender;

			result += '<div>' +
			'<h3>'+items.name+'</h3>' + 
			'<p>'+_gend+'</p>' +
			'</div>';

			if ($.inArray(_gend, gender) === -1) {
				gender.push(_gend);
				gender_result += "<option value='"+_gend+"'>"+_gend+"</option>";
			}
		});

		$('#mhs-list').html(result);
		$('#mhs-select').html(gender_result);
	});
		
});
