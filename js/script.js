
var styleList = {
	0: '.bodyClear {margin: 0; padding: 0;}',
	1: '.cssClass {font-size: 20px; font-family: arial;}',
	2: '.inputBox {margin: 50px auto; width: 320px;}',
	3: '.testLine {text-align: center; margin-top: 15px;}',
	4: '.liStyle {line-height: 1.6; margin: 15px 0;}',
	5: '.submitStyle {height: 50px; width: 320px; border: 1px solid #000; background: #ABD5EB;}'
}

var style = document.createElement('style');
style.type = 'text/css';
var styleAddItem = '';
for (var i = 5; i >= 0; i--) {
	styleAddItem = styleAddItem + styleList[i];	
}
style.innerHTML = styleAddItem;
document.getElementsByTagName('head')[0].appendChild(style);

var bodyPlace = document.getElementsByTagName('body'); //найти родителя, куда вставлять новый элемент
var body = bodyPlace[0];
body.classList.add('cssClass');

// вставляем Тест по программированию

var topLine = document.createElement('div');  //создать элемент div
topLine.classList.add('testLine'); //добавить класс
topLine.innerHTML = 'Тест по программированию'; //добавить текст в элемент
body.appendChild(topLine);		//вставить элемент

// вставляем список
var form = document.createElement('form'); 
form.setAttribute('name', 'test');
form.setAttribute('method', 'get');

var ol = document.createElement('ol');  //создать элемент ol

for (var i = 1; i < 4; i++) {
  var li = document.createElement('li'); 
  li.classList.add('liStyle');
  li.innerHTML = 'Вопрос №' + i;
    for (var j = 1; j < 4; j++) {
      var div = document.createElement('div');
      var checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBox.setAttribute('id', 'line' + i + j);
      var span = document.createElement('span');
      span.innerHTML = 'Вариант ответа №' + j;
      div.appendChild(checkBox);
      div.appendChild(span);
      li.appendChild(div);
    }
  ol.appendChild(li);
}

form.appendChild(ol);

var submitDiv = document.createElement('div');
submitDiv.classList.add('inputBox');

var submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Проверить мои результаты');
submit.setAttribute('id', 'submit-form');
submit.classList.add('cssClass');
submit.classList.add('submitStyle');

submitDiv.appendChild(submit);
form.appendChild(submitDiv);

body.appendChild(form);










