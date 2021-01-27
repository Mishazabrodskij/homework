// - Створити змінні. Присвоїти кожному з них значення: 'hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log, alert, document.write
// let a='hello';
// let b='owu';
// let c='com';
// let d='ua';
// let i=1;
// let f=10;
// let g=2.7;
// let u=true;
// let n=false;
//
//
//
// document.write(a);

// - Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//     Вивести кожну змінну за допомогою: console.log, alert, document.write
// a='okten';
// console.log(a);
// b='sdfbb'
// console.log(b);
// alert(b);
// c='pruvet'
// console.log(c);
// i='gamasik';
// console.log(i);
// - За допомогою 3х різних приглашения () отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// let name = prompt("is your name?" );
// console.log(name);
// alert(name);
//
// let surname = prompt("is your Surname?" );
// console.log(surname);
// alert(surname);
//
// let middleName = prompt("is your middle name?" );
// console.log(middleName);
// alert(middleName);

//     Вивести "Вітаю * Імя * * По батькові *. Тобі * вік * років".
//let person =(name+surname+middleName)
 //console.log(person);
// - Взяти змінні з завдання вище и зєднати их в одном змінну (конкатинація).
// let momName = prompt("is your name?" );
// console.log(momName);
// alert(momName);
// document.write(momName);
// let momSurname = prompt("is your Surname?" );
// console.log(momSurname);
// alert(momSurname);
// document.write(momSurname);
// let momMiddleName = prompt("is your middle name?" );
// console.log(momMiddleName);
// alert(momMiddleName);
// document.write(momMiddleName);
// let momPerson =(momName+momSurname+momMiddleName)
// console.log(momPerson);
//
// let dadName = prompt("is your name?" );
// console.log(dadName);
// alert(dadName);
// document.write(dadName);
// let dadSurname = prompt("is your Surname?" );
// console.log(dadSurname);
// alert(dadSurname);
// document.write(dadSurname);
// let dadMiddleName = prompt("is your middle name?" );
// console.log(dadMiddleName);
// alert(dadMiddleName);
// document.write(dadMiddleName);
// let dadPerson =(dadName+dadSurname+dadMiddleName)
// console.log(dadPerson);
//
// let brotherName = prompt("is your name?" );
// console.log(brotherName);
// alert(brotherName);
// document.write(brotherName);
// let brotherSurname = prompt("is your Surname?" );
// console.log(brotherSurname);
// alert(brotherSurname);
// document.write(brotherSurname);
// let brotherMiddleName = prompt("is your middle name?" );
// console.log(brotherMiddleName);
// alert(brotherMiddleName);
// document.write(brotherMiddleName);
// let brotherPerson =(brotherName+brotherSurname+brotherMiddleName)
// console.log(brotherPerson);

// - За допомогою подсказку () отримати 3 числа. Привести їх до числа (Google "Строка к номеру JS"). Вивести їх в консоль.
// let number1= prompt('число 1');
// let number2= prompt('число 2')
// let number3= prompt('число 3')
// console.log(+number1,+number2,+number3);
// - За допомогою подсказку () отримати 4 числа. Привести їх до числа за допомогою paeseInt. Добавить их всі мож собою и результат вивести в консоль.
// let number1=parseInt(prompt('enter the number 1'));
// let number2= parseInt(prompt('enter the number 2'));
// let number3= parseInt(prompt('enter the number 3'));
// let number4= parseInt(prompt('enter the number 4'));
//
// result=number1+number2+number3+number4;
// console.log(result);
// - За допомогою prompt () отримати 3 числа за допомогою parseFloat.
//     Просумувати їх. Отрманий результата записать в змінну результат. Вивести цю змінну в консоль.
// let number1=parseFloat(prompt('enter the number 1'));
// let number2= parseFloat(prompt('enter the number 2'));
// let number3= parseFloat(prompt('enter the number 3'));
//
//
// result=number1+number2+number3;
// console.log(result);

// - За допомогою prompt () отримати 3 числа за плаваючою точкою. Заокруглити їх (Google «круглый номер JS»). Просумувати їх між собою. Результат вивести в консоль.
// let number1= Math.round(parseFloat(prompt('enter the number 1\n')));
// let number2= Math.round(parseFloat(prompt('enter the number 2\n')));
// let number3= Math.round(parseFloat(prompt('enter the number 3\n')));
//
//
// console.log(number1)
// result=number1+number2+number3;
// console.log(result);
// - За допомогою подсказку () отримати 2 цілих числа.
//     Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//     За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//     Пример. Число 1 = 5. Число 2 = 2. Результат = 25
// let number1=parseInt(prompt('enter the number \n'));
// let number2= parseInt(prompt('enter the pow\n'));
// result= Math.pow(number1,number2);
// console.log(result)
//     - За допомогою оператора типа визначити тип наступающих змінних та вивести їх в консоль.
//     пусть a = 100; пусть b = '100'; пусть c = true;
// let a = 100;
// let b = '100';
// let c = true;
// let d = undefined
// console.log(typeof a ,typeof b, typeof c ,typeof d);

// - Поставщик відповідний оператор виразах б вийшов відповідний результат.
//     В однакових виразаї не використовати оценок оператори !!!
//     5? 6 -> верно
// 5? 6 -> ложь
// 5? 6 -> ложь
// 5? 6 -> ложь
// 10? 10 -> верно
// 10? 10 -> верно
// 10? 10 -> ложь
// 10? 10 -> ложь
// 10? 10 -> ложь
// 123? '123' -> ложь
// 123? '123' -> истина
//
// Додатково:
//     - Подивіться на наступление вирази и спровоцировать вгадати яким буде вивід в консоль. Перевірте себе.
// console.log (132> 100 && 45 <12);
// console.log (34> 33 && 23 <90);
// console.log (99> 100 && 45> 12);
// console.log (132> 100 || 45 <12);
// console.log (111> 11 || 45 <111);
// console.log ((111> 11 || 45 <111) && (132> 100 || 45 <12));
// console.log ((111> 11 || 45 <56) || (132> 100 || 45 <12));
// console.log ((132> 100 && 45 <12) && (132> 100 || 45 <12));
// console.log ((111> 11 || 45 <111) || (99> 100 && 45> 12));
// console.log (!! '- 1');
// console.log (!! - 1);
// console.log (!! '0');
// console.log (!! 'ноль');
// console.log (!! 'undefined');
// console.log (!! (3 / 'owu'));
// console.log ((111> 11 || 45 <111) || !! '0');
// console.log ((!! 111 == !! 11 || 45 <111) && (99> 100 && 45> 12));
//
// let bool= (5<6);
//
// if ( bool){
//     console.log("Правда");
// } else console.log("Не правда");
// bool=(5>6);
// if ( bool){
//     console.log("Правда");
// } else {console.log("Не правда");}
// bool=(5==6);
// if (bool){
//     console.log("Правда");
// } else { console.log("Не правда");}
// bool=5>=6;
// if (bool){
//     console.log("Правда");
// } else { console.log("Не правда");}
// //
// let bool2=(10==10);
// if (bool2){
//     console.log("Правда");
// } else { console.log("Не правда");}
// bool2=(10===10);
// if (bool2){
//     console.log("Правда");
// } else { console.log("Не правда");}
// //
// let bool3=(10!==10);
// if (bool3){
//     console.log("Правда");
// } else { console.log("Не правда");}
// bool3=(10!=10);
// if (bool3){
//     console.log("Правда");
// } else { console.log("Не правда");}
// bool3=(10>10);
// if (bool3){
//     console.log("Правда");
// } else { console.log("Не правда");}
// //
// let bool4=(123==="123");
// if (bool4){
//     console.log("Правда");
// } else { console.log("Не правда");}
// bool4=(123!=="123");
// if (bool4){
//     console.log("Правда");
// } else { console.log("Не правда");}
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// 1. Оголосить змінні str, num, flag и txt сі значеннями «Привіт», 123, true, «true».
// За допомогою typeof переконайтесь, що значення змінних належать типам: string, number и boolean.
//
// 2. Оголосить змінні a1, a2, a3, a4, a5. За домогою 3х математических оператцій отримайте числа:
//     34,
//         12,
//         66,
//         90,
//         87
// Старайтесь використовати різні оператори.
//     Пример: 88 = (16/2) * 11
//
// 3. Раздвижной змінні a6, a7, a8, a9, a10. Запиши в них результаты виразів:
//     5% 3,
//     3% 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
//
// 4. Напищіть код, який вираховує площу прямокутника висотою 23см. (высота змінна) та шириною 10см (ширина змінна).
// Значееня площі зберігати в зміній с.
//let a='23';
// let b='10';
// result=(a*b);
// console.log(result)
// 5. Напиши код, который находит объем цилиндра высотой 10м (переменная высотаC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
// let c=10;
// let dc=4;
// let r=2;
// let n=3.14;
// result=(n*r*r*c);
// console.log(result)


//
// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow (число, степень) или оператор возведения в степень **).
// let n='3';
// let m='4';
// let bo1=Math.pow(n,2);
// let bo2=Math.pow(m,2);
// let k=result=bo1+bo2;
// console.log(k);

//
// 7. Напишите скрипт, который выводит "Hello world", создавши переменную строку и выводите спомощью document.write, alert и console.log

// let a='hello word';
// document.write('<h1>'+a+'</h1>');
// alert(a);
// console.log(a);
// 8. Вывести в окне при помощи метода alert () следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \ n).
// let boo=prompt('дані');
// let a='Забродський\n';
// let b='Міша\n';
// let c='Вікторович\n';
// let d='18';
// alert(a+ b+ c+ d);
//


// 9. Создать 4 переменные с использованием ключевого слова, пусть с именами str1, str2, str3, конкатенация.
//     Переменной str1 присвоить фразу 'Кто', str2 - 'ты', str3 - 'такой?'
// Локальной модели конкатенации присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ стандартной конкатенации спомощью document.write
// let str1='Кто';
// let str2='Ти';
// let str3='Такой';
// document.write('<h1>'+str1+str2+str3+'</h1>');
//
// 10. Какие значения выведет в окно следующий фрагмент кода? и почему?
//     пусть str = "20";
// пусть a = 5;
// document.write (str + a + "<br/>");
// document.write (str - a + "<br/>");
// document.write (str * "2" + "<br/>");
// document.write (str / 2 + «<br/>»);
// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt ("3,14")
//     parseInt ("- 7,875")
// parseInt ("435")
// parseInt ("Вася")
//
// 12. С помощью окна ввода, вызываемого методом подсказки, пользователь может ввести введенные данные, которые будут вводить далее, код ниже
// let str = prompt ("Введите что-нибудь", "хо-хо")
// console.log (строка);
//
// 13. С помощью окна ввода, вызываемого методом приглашения, сделать сложение двух чисел, сделать результат при помощи метода предупреждения
// 14. С помощью окна ввода, вызываемого методом приглашения, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32, вывод результата при помощи метода alert
//
//
//
// =====================
// ====== ДОП ============
// =====================
//
//
//
//
// 1. Три різних числа вводяться через prompt ().
//     За допомоги, если еще вивести іх в порядку зростання. (відсортувати по зростанню)
//
// 2.
// Все параматры получаем с клавиатуры !!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!
//
//     3
// Все параметры клавиатуры !!!! (подскажите, подтвердите)
// Создать переменную isRoadClear которая характеризует наличие на дороге машин.
//     Улучшаем предыдущее задание.
//     Если светофор зеленый и машин нет - вывести "иди".
//     Если светофор зеленый и машины есть - вывести подожди пока нарушители проедут ".
// Если светофор желтый и машины есть - вывести "жди".
//     Если светофор желтый и машин нет - вывести "все рано жди".
//     Если светофор красный и машин нет- вывести "стой все рано".
//     Если светофор красный - и машины есть вывести "стой и жди".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// let title='helow okten';
// document.write('<h1>'+title+'</h1>' );
// document.write(`<h1>${title}</h1> `)
// let users=[
//     {username:'vasia',password:'1234'},
//     {username:'petia',password:'qwerty'},
//     {username:'kokos',password:'1111'}
// ];
// console.log(users);
// console.log(users[0].password)



