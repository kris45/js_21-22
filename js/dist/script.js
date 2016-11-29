'use strict';

$(document).ready(function () {

	var $html = $('#test').html();

	var $gen = localStorage.getItem('obj');

	if ($gen == null) {
		$gen = {
			header: "Тест по программированию",
			questions: [{ question: "Какой формат передачи данных наиболее распостранен?", answers: ["XML", "JSON", "SQL", "TXT"] }, { question: "Какой объект для работы с XML файлами втроен во все современные браузеры?", answers: ["XMLHttpRequers", "XMLParser", "XML", "Такого объекта нет. Необходимо пользоваться внешними библиотеками."] }, { question: "Выберите правильный метод для преобразования объекта в JSON формат:", answers: ["stringify()", "toJSON()", "render()", "parse()"] }, { question: "С помощью какого объекта осуществляется" + "доступ к локальному хранилищу в современных браузерах?", answers: ["localStorage", "cookies", "LocalStorage", "Storage"] }]
		};
		localStorage.setItem('obj', JSON.stringify($gen));
	} else {
		$gen = JSON.parse($gen);
	}

	var content = tmpl($html, $gen);

	$('body').append(content);
});

function result() {
	alert("result");
};
