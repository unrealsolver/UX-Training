## Task 1

В качестве первого задания я предлагаю вам сделать простой калькулятор. Я уже создал UI для него, а вам нужно реализовать логику. Чтобы начать работу, нужно войти в GitHub, перейти сюда: http://plnkr.co/edit/ppFe47?p=preview - это тот самый проект. Чтобы продолжить работу над ним, вам нужно кликнуть на кнопку Fork, которая есть вверху, тем самым вы начнете работать над своей версией. После изменений файлов нужно нажать на кнопку Save, которая все так же сверху.

Вам придется работать только с файлом script.js. Сохраняйтесь почаще, а я буду, по возможности, подсказывать как делать лучше, а как не стоит.

Подсказки:
```javascript
var a = 4 // Переменная a. Локальная для текущей области видимости (функции или глобального объекта)
b = 3 // Присвоение переменной b. Если такой переменной нет, то будет создана глобальная
console.log(1, 2, 3) // логгирование в консоль для отладки
console['log'](1, 2, 3) // можно и так. Как и говорил разницы между '.asd' и ['asd'] нету -
                        //это два разных способа получения свойства объекта
var myId = document.getElementById('my-id') // Получение DOM-элемента с id 'my-id'
var myId = $('#my-id') // jQuery-версия
var byClass = document.getElementsByClassName('calc')[0].getElementsByClassName('screen')[0]; // Получение первого элемента класса screen, который находится в первом элементе класса 'calc'
var byClass = $('.calc .screen')[0] // jQuery
myId.innerHTML = 'My super text or <b>HTML</b>' // установка нового элемента в DOM-ноду
// Функция
var f = function(a, b) {
  return a + b
}

// И ее вызов
f() // NaN (a, b - undefined)
f(1) // NaN (b - undefined)
f(1, 2) // 3
f(1, 2, 3) // 3 (учитываются только a и b)
```

## Task 2

Так как никто так и не сделал человеческий калькулятор, следующее задание остается тем же, но код придется качественно переработать. То есть, повыкидывать всякую жесть, вместо for(i; i<10; i++) освоить for (i in coll), или даже coll.forEach(callbackFn), убрать screen.innerHTML из логики, т.к. это уровень отображения данных, не использовать прямой вызов eval, а используйте косвенный, через такой хак (42, eval)(codeStr), в этом случае eval будет выполнен быстрее и безопаснее (в глобальном скоупе, вместо локального).

Я предлагаю вам сделать юнит-тесты на популярном фреймворке Jasmine или Mocha (Мока):
* http://jasmine.github.io/2.0/introduction.html
* http://visionmedia.github.io/mocha/

Решайте сами, на каком. И подключайте тоже сами. Если будет много вопросов, то сделаем стрим в удобное время.
Суть юнит-тестирования в проверке правильности работы кода и обнаружении регрессий (когда после вашего коммита, что-то отвалилось в другом месте. Бывает). Тест-кейсы такие: 2+2=4, 2+2+2+2=8, 1+1= а затем опять + 1 должно быть 3, 1+1= а затем 5*5 должно быть 25. В общем, ищите живой калькулятор и изучаете работу.

Что можно читануть:

0. http://shamansir.github.io/JavaScript-Garden/  - достаточно вдумчиво прочитать эту статью, чтобы просветлиться.
1. Флэнаган - (с носорогом на обложке). Полное руководство, много букв, много зауми.
2. Дэвид Херман - Сила JavaScript - букв мало, в голове оседает не плохо, читать легко.
3. javascript.ru - местами не плохо, зато на русском и с примерами. Если что-то гуглите, то читайте тут сначала.
