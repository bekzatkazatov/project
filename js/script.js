/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",


        ]
    };

    const adv = document.querySelectorAll('.promo__adv img');
    adv.forEach((element) => {
        element.remove();
    });

    const genre = document.querySelector('.promo__genre');
    genre.innerHTML = 'Драма';

    const bg = document.querySelector('.promo__bg');
    bg.style.backgroundImage = "url(img/bg.jpg)";

    const moviesList = document.querySelector('.promo__interactive-list');
    moviesList.innerHTML = "";

    movieDB.movies.sort()
  
    let number = 1;

    movieDB.movies.forEach((movie) => {
        const li = document.createElement('li')
        li.className = 'promo__interactive-item'
        li.innerHTML = number + ' ' + movie;
        const deleteDiv = document.createElement('div')
        deleteDiv.className = 'delete'
        li.appendChild(deleteDiv)
        moviesList.appendChild(li);
        number += 1
    });
    console.log(moviesList);
});




