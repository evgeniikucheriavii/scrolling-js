
//Получаем объекты со страницы
var progressBar = document.getElementById("progress__bar");
var topButton = document.getElementById("top");

var timer = null; //Переменная для таймера

//Перехватываем события
window.addEventListener("scroll", function (e) { Scroll(e); CheckScroll(e); });
topButton.addEventListener("click", function (e) { ScrollToTop(400); });

function Scroll(e)
{
	var percent = window.scrollY / window.scrollMaxY * 100; //Определяем, сколько процентов страницы просмотрел пользователь
	
	progressBar.setAttribute("style", "width: " + percent + "%;"); //Меняем ширину полосы прогресса
}

function CheckScroll(e)
{
	if(window.scrollY > 150) //Если пользователь пролистал от начала страницы на 150 пикселей
	{
		topButton.className = "top"; //Показываем кнопку
	}
	else
	{
		topButton.className = "top top_hidden"; //Иначе кнопка скрывается
	}
}

function ScrollToTop(length) //Пролистать до начала страницы
{
	var updateRate = 1000 / 60; //Частота обновления - 60 кадров в секунду

	var frames = length / updateRate; //Общее количество кадров, за которое пройдёт прокрутка

	var val = window.scrollY / frames; //Количество пикселей, на которое будет прокручена страница за кадр

	timer = setInterval(function (e) { UpdateScroll(val); }, updateRate); //Запускаем функцию прокрутки
}

function UpdateScroll(val)
{
	window.scroll(0, window.scrollY - val); //Прокручиваем страницу
	
	if(window.scrollY <= 0)
	{
		clearInterval(timer); //Если прокрутка завершила, отключаем функцию
	}
}