$('#button_challenge').click(function(){
	window.location.href='login.html';
});

$('#btn_reg').click(function(){
	window.location.href='register.html';
});

$('#btn_find_pw').click(function(){
	window.location.href='password.html';
});

$('#btn_login').click(function(){
	window.location.href='teamType.html';
});

$('#btn_login_cancel').click(function(){
	window.location.href='index.html';
});

$('#btn_register').click(function(){
	window.location.href='login.html';
});

$('#btn_register_cancel').click(function(){
	window.location.href='login.html';
});

$('#btn_password').click(function(){
	window.location.href='login.html';
});

$('#btn_password_cancel').click(function(){
	window.location.href='login.html';
});


$('#button_search').click(function(){
	$('#team_create_form').hide();
	$('#team_search_form').show();
});

$('#button_create').click(function(){
	$('#team_create_form').show();
	$('#team_search_form').hide();
});

$('#join_team_1').click(function(){
	$('.popup').show();
});

$('#join_team_2').click(function(){
	$('.popup').show();
});

$('#join_team_3').click(function(){
	$('.popup').show();
});

$('#join_team_4').click(function(){
	$('.popup').show();
});

$('#popup_btn_l').click(function(){
	window.location.href='personInfo.html';
});

$('#popup_btn_r').click(function(){
	$('.popup').hide();
});

$('#updatePersonInfo').click(function(){
	window.location.href='teamInfo.html';
});

$('#searchBtn').click(function(){
	alert('TODO:查找');
});

$('#btn_join_team').click(function(){
	window.location.href='success.html';
});

$('#btn_create_team').click(function(){
	window.location.href='success.html';
});

$('#btn_create_team_cancel').click(function(){
	window.location.href='personInfo.html';
});

$('#updatePersonInfo_cancel').click(function(){
	window.location.href='teamType.html';
});



