"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ' ');
    }
  },
  rememberMyFilms: function() {
        for (let i = 0; i < 1; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько вы его оцените?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log("Вы классическый зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман!");
        } else {
            console.log("Error");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }    
    },
    toggleVisibleMyDb: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        } 
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`${i} ваш любимый жанр`);
            
            // if (genre === '' || genre == null) {
            //     console.log('Нет данных');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }

            let genres = prompt(`Введите ваши любимые жанры через запятую`)

            if (genres === '' || genres == null) {
                console.log('Нет данных');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    } 
};
