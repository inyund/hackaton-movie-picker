const movies = {
    Action: [
        {
            id: 0,
            "title": "Avatar",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
        },
        {
            id: 1,
            "title": "The Avengers",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
        },
        {
            id: 2,
            "title": "Doctor Strange",
            "posterUrl": "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg",
        },
        {
            id: 3,
            "title": "Assassin's Creed",
            "posterUrl": "https://upload.wikimedia.org/wikipedia/id/7/77/Assassins_Creed_2_Box_Art.JPG",
        },
        {
            id: 4,
            "title": "Luke Cage",
            "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlY7kG9OGdZjYLlrktqDIgKZyzfCTIPaWlQ&usqp=CAU",
        },
        {
            id: 5,
            "title": "Ready Player One",
            "posterUrl": "http://static1.squarespace.com/static/584b0a226a4963352938c185/t/5b748132758d464a8ddf8161/1534362176392/?format=1500w",
        },
        {
            id: 6,
            "title": "Pacific Rim: Uprising",
            "posterUrl": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1458/1458183_so.jpg",
        },
        {
            id: 7,
            "title": "Jurassic World: Fallen Kingdom",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/I/81BcmbLuzcL._SL1500_.jpg",
        },
        {
            id: 8,
            "title": "Deadpoll 2",
            "posterUrl": "https://www.subtitlist.com/images/148602.jpg",
        },
        {
            id: 9,
            "title": "Avengers Infinity War",
            "posterUrl": "https://awsimages.detik.net.id/community/media/visual/2018/03/23/9a5c831a-4a36-41fe-af32-617845000352.jpeg?w=700&q=90",
        },
        {
            id: 10,
            "title": "Ant-Man and the Wasp",
            "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDWPj9WqE2xEvYq1HyQJHaif5qg9Jp7_2RS0i-js1tQd_kFoBczp6DVzZSd9QGfTxtSsQ&usqp=CAU",
        },
        {
            id: 11,
            "title": "Aquaman",
            "posterUrl": "https://www.joblo.com/wp-content/uploads/2021/07/aquamanwaterfallposter.jpg",
        },
        {
            id: 12,
            "title": "Raya and the Last Dragon",
            "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuRwGHKjvxW9XnBOKvWZ75_r-pOB_0gKN6C8vIbWpZjaVPnPRAhtMzmwEV7jU3QTCX1RE&usqp=CAU",
        },
        {
            id: 13,
            "title": "Eternals",
            "posterUrl": "https://i0.wp.com/fontlot.com/wp-content/uploads/2020/06/Eternals-1.jpg?fit=700%2C985&ssl=1",
        },
        {
            id: 14,
            "title": "Avengers Endgame",
            "posterUrl": "https://images.moviesanywhere.com/4677177f6f0595289bc3e767e7b47459/1d6c6c73-ab1e-4453-969c-6a4e965ebb37.jpg",
        },
        {
            id: 15,
            "title": "Dark Phoenix",
            "posterUrl": "https://www.spettacolo.eu/wp-content/uploads/2018/09/X-Men-Dark-Phoenix-locandina-fan-made.jpg",
        },


    ],
    Thriller: [
        {
            id: 0,
            "title": "Breaking Bad",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BODFhZjAwNjEtZDFjNi00ZTEyLThkNzUtMjZmOWM2YjQwODFmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX1000_.jpg",
        },
        {
            id: 1,
            "title": "The Third Man",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg"
        },
        {
            id: 2,
            "title": "Black Swan",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg"
        },
        {
            id: 3,
            "title": "The Silence",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX300.jpg"
        },
        {
            id: 4,
            "title": "Midnight Express",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMDA5MzkyOF5BMl5BanBnXkFtZTgwOTYwNTcxMTE@._V1_SX300.jpg"
        },
        {
            id: 5,
            "title": "Morbius",
            "posterUrl": "https://www.themoviedb.org/t/p/original/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
        },
        {
            id: 6,
            "title": "The Invisible Man",
            "posterUrl": "https://upload.wikimedia.org/wikipedia/en/3/3a/The_Invisible_Man_%282020_film%29_-_release_poster.jpg",
        },
        {
            id: 7,
            "title": "Shirley",
            "posterUrl": "https://upload.wikimedia.org/wikipedia/en/3/30/Shirley_poster.jpeg",
        },
        {
            id: 8,
            "title": "Us",
            "posterUrl": "https://flxt.tmsimg.com/assets/p15955710_p_v8_aa.jpg",
        },
        {
            id: 9,
            "title": "Martin Eden",
            "posterUrl": "https://kbimages1-a.akamaihd.net/0bdabcc9-d721-408d-bbc3-2b455381738f/1200/1200/False/martin-eden-71.jpg",
        },
        {
            id: 10,
            "title": "Truth or Dare",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BYWYwYTM0NWQtNDQwYi00Y2QyLWJkODYtY2ZiMGRmYjAxMThmXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg",
        },
        {
            id: 12,
            "title": "A Quit Place",
            "posterUrl": "https://m.media-amazon.com/images/I/A1zV1fxtMEL._SL1500_.jpg",
        },
        {
            id: 13,
            "title": "Fifty Shades Freed",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTI2NGFmZGEtYWJiOC00NzhhLTk4N2ItNzQ1YjYxZGU5M2U1XkEyXkFqcGdeQXVyODQxMTI4MjM@._V1_.jpg",
        },
        {
            id: 14,
            "title": "Hereditary",
            "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4eDEAeeyiJ5LPFtATn1-E5WzCYKsbboQnrx5o5VKf-W98Zilzst6vfImHVZvtdAXR34&usqp=CAU",
        },
        {
            id: 15,
            "title": "Maze Runner: The Death Cure",
            "posterUrl": "https://i1.wp.com/teaser-trailer.com/wp-content/uploads/The-Maze-Runner-3-The-Death-Cure.jpg?ssl=1",
        },
    ],
    Comedy: [

        {
            id: 0,
            "title": "The Campaign",
            "posterUrl": "https://picfiles.alphacoders.com/355/thumb-355144.jpg",
        },
        {
            id: 1,
            "title": "Turning Red",
            "posterUrl": "https://www.whatspaper.com/wp-content/uploads/2022/04/hd-turning-red-wallpaper-whatspaper-5.jpg",
        },
        {
            id: 2,
            "title": "The Lost City",
            "posterUrl": "https://7wallpapers.net/wp-content/uploads/The-Lost-City-2-1619x2400.jpg",
        },
        {
            id: 3,
            "title": "The Bad Guys",
            "posterUrl": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/81e8eaf4-42df-45fe-8eb9-f7596ba98246/df0ekt5-005cce1b-568a-4f4e-bdc3-a4879be52c8a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzgxZThlYWY0LTQyZGYtNDVmZS04ZWI5LWY3NTk2YmE5ODI0NlwvZGYwZWt0NS0wMDVjY2UxYi01NjhhLTRmNGUtYmRjMy1hNDg3OWJlNTJjOGEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.U-5Y35kKoLSzjlhoUWLpBQOi2fZtcA9erkGynkC-VlI",
        },
        {
            id: 4,
            "title": "Jackass Forever",
            "posterUrl": "https://wallpapercave.com/wp/wp10569294.jpg",
        },
        {
            id: 5,
            "title": "Legally Blonde",
            "posterUrl": "https://picfiles.alphacoders.com/106/106452.jpg",
        },
        
    ],
    Drama: [
        {
            id: 0,
            "title": "Hitman: Agent Jun",
            "posterUrl": "https://img.wallpapersafari.com/tablet/768/1024/27/1/kBcN8t.jpg",
        },
        {
            id: 1,
            "title": "Deliver Us From Evil",
            "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9tgxD8S8fpYr5n3eWcsVzyjE6SqAvBVWVQ&usqp=CAU",
        },
        {
            id: 2,
            "title": "Time To Hunt",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTBkN2RlYjEtNzgxOC00MDc1LTg0MTEtZTI1ZWQ1MjhlZjYzXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
        },
        {
            id: 3,
            "title": "Youth of May",
            "posterUrl": "https://i.pinimg.com/originals/75/17/10/751710f4a95fda0492ececdc39a66a75.jpg",
        },
        {
            id: 4,
            "title": "Life",
            "posterUrl": "https://asianwiki.com/images/0/0d/Private_Lives-P1.jpg",
        },
        {
            id: 5,
            "title": "The Notebook",
            "posterUrl": "http://nicholassparks.com/wp-content/uploads/2013/07/200406-the-notebook.jpeg?w=640",
        },
    ]
}


// menampilkan list genre berdasarkan object movies
const listGenre = document.getElementById("list-genre")
let list = ''
for (const genre in movies) {
    list += `<li><a href="#movie-list" onclick="filterMovie(this,'${genre}')">${genre}</a></li>`
}
listGenre.innerHTML = list




//recursive function untuk randomize index
function randomize(maxNumber, historyIndex) {
    let random = Math.round((Math.random() * maxNumber))
    if (!historyIndex.includes(random)) {
        return random
    } else {
        if (historyIndex.length < maxNumber) {
            return randomize(maxNumber, historyIndex)
        }
    }
}

//filter movie berdasarkan genre yang dipilih dan menambahkan element card movie yang sudah difilter
let selectedGenre = ''
function filterMovie(event, genre) {
    document.getElementById("genre-name").innerText = genre;
    selectedGenre = genre
    let cardsElement = document.getElementById("cards")
    let card = ''
    let historyIndex = []
    for (let i = 0; i < 5; i++) {
        let maxNumber = movies[selectedGenre].length - 1;
        let randomNumber = randomize(maxNumber, historyIndex)
        let movieId = movies[selectedGenre][randomNumber].id
        card += `
            <div class="card">
              <div class="profile">
                <img src="${movies[selectedGenre][randomNumber].posterUrl}" class='poster'>
                <p>${movies[selectedGenre][randomNumber].title}</p>
                <button name = 'movie-button' id='${movieId}' value='watch' onclick='pickMovie(this,${movieId})'>Watch</button>
              </div>
            </div>`
        historyIndex.push(randomNumber)
    }
    cardsElement.innerHTML = card


    document.getElementById('btn-select-genre').removeAttribute('style')
}


//menambahkan element untuk menyimpan movie yang dipilih
const pickedMovieElement = document.getElementById("picked-movies")
function pickMovie(evt, movieId) {
    document.getElementById(movieId).setAttribute('disabled', true)
    const movie = movies[selectedGenre][movieId]

    const pickedMovie = `
            <div class="card" id='card-${movie.id}'>
                <div class="profile">
                  <img src="${movie.posterUrl}" class='poster'/>
                  <p>${movie.title}</p>
                  <button name='delete-movie' id='delete-${movie.id}' value='delete' onclick='deleteMovie(this, ${movie.id})'  >delete</button>
                </div>
            </div>
        `
    pickedMovieElement.innerHTML += pickedMovie
    document.getElementById('btn-repick-movie').removeAttribute('style')
    document.getElementById('btn-pick-movie').removeAttribute('style')
}


//menghapus element dari list movie yang sudah dipilih
function deleteMovie(event, movieId) {
    const element = document.getElementById(`card-${movieId}`)
    element.remove()
    document.getElementById(movieId).removeAttribute('disabled')

}