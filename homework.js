function choose_All() {
	let htmlClasses = document.getElementsByClassName("lesson");
	let html_img = document.getElementsByClassName("lesson_img");
	let html_con = document.getElementsByClassName("lesson_con");
	for (let i = 0; i < htmlClasses.length; i++) {
		htmlClasses[i].hidden = false;
		html_img[i].hidden = false;
		html_con[i].hidden = false;
	}
}

function choose_HTML() {
	let htmlClasses = document.getElementsByClassName("lesson");
	let html_img = document.getElementsByClassName("lesson_img");
	let html_con = document.getElementsByClassName("lesson_con");
	for (let i = 0; i < htmlClasses.length; i++) {
		htmlClasses[i].hidden = false;
		html_img[i].hidden = false;
		html_con[i].hidden = false;
	}
	for (let i = 0; i < htmlClasses.length; i++) {
		if (htmlClasses[i].querySelectorAll(".Type-HTML").length === 0) {
			htmlClasses[i].hidden = true;
			html_img[i].hidden = true;
			html_con[i].hidden = true;
		}
	}
}

function choose_CSS() {
	let htmlClasses = document.getElementsByClassName("lesson");
	let html_img = document.getElementsByClassName("lesson_img");
	let html_con = document.getElementsByClassName("lesson_con");
	for (let i = 0; i < htmlClasses.length; i++) {
		htmlClasses[i].hidden = false;
		html_img[i].hidden = false;
		html_con[i].hidden = false;
	}
	for (let i = 0; i < htmlClasses.length; i++) {
		if (htmlClasses[i].querySelectorAll(".Type-CSS").length === 0) {
			htmlClasses[i].hidden = true;
			html_img[i].hidden = true;
			html_con[i].hidden = true;
		}
	}
}

function choose_JS() {
	let htmlClasses = document.getElementsByClassName("lesson");
	let html_img = document.getElementsByClassName("lesson_img");
	let html_con = document.getElementsByClassName("lesson_con");
	for (let i = 0; i < htmlClasses.length; i++) {
		htmlClasses[i].hidden = false;
		html_img[i].hidden = false;
		html_con[i].hidden = false;
	}
	for (let i = 0; i < htmlClasses.length; i++) {
		if (htmlClasses[i].querySelectorAll(".Type-JS").length === 0) {
			htmlClasses[i].hidden = true;
			html_img[i].hidden = true;
			html_con[i].hidden = true;
		}
	}
}

function get_table() {
	var oDivTable = document.getElementById("year-table");
	//文本获得焦点时的事件
	oDivTable.style = "none";
};

function lose_table() {
	var oDivTable = document.getElementById("year-table");
	//文本获得焦点时的事件
	oDivTable.style = "display:none";
};

function inner_text(e) {
	var get_text = document.getElementById("input_year");
	var get_a = document.getElementsByClassName("year_a");
	get_text.value = e;
}

function email() {
	var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
	var oDivTable = document.getElementById("warning");
	var oDivTable1 = document.getElementById("correct");
	var oDivTable2 = document.getElementById("login");
	var oDivTable3 = document.getElementById("login_inner");
	if ((document.getElementById("input_school").value == "") || (!reg.test(document.getElementById("mail").value))) {
		oDivTable.style = "none";
		var t=setTimeout(function() {oDivTable.style = "display:none";},3000);
	} else {
		oDivTable1.style = "none";
		oDivTable2.style = "display:none";
		oDivTable3.style = "none";
        var t=setTimeout(function() {oDivTable1.style = "display:none";},5000)
	}
}

function get_school_list() {
	var oDivTable = document.getElementById("choose_school");
	//文本获得焦点时的事件
	oDivTable.style = "none";
};

function lose_list() {
	var oDivTable = document.getElementById("choose_school");
	//文本获得焦点时的事件
	oDivTable.style = "display:none";
};

function inner_school(e) {
	var get_text = document.getElementById("input_school");
	get_text.value = e;
}
function get_return() {
	var return_login = document.getElementById("login");
	var return_hit = document.getElementById("login_inner");
	var oDivTable1 = document.getElementById("correct");
	return_login.style="none";
	return_hit.style="display:none";
}
