const movies = {
    Action: [
        {
            id: 0,
            "title": "Breaking Bad",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BODFhZjAwNjEtZDFjNi00ZTEyLThkNzUtMjZmOWM2YjQwODFmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX1000_.jpg",
            "Released": "20 Jan 2008",
            "Actors": "Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris",
            "Plot": "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's financial future.",
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
            "title": "The Silence of the Lambs",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX300.jpg"
        },
        {
            id: 4,
            "title": "Midnight Express",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMDA5MzkyOF5BMl5BanBnXkFtZTgwOTYwNTcxMTE@._V1_SX300.jpg"
        },
        {
            id: 5,
            "title": "Avatar",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_.jpg",
        },
        {
            id: 6,
            "title": "The Avengers",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
        },
        {
            id: 7,
            "title": "Doctor Strange",
            "posterUrl": "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg",
        },
        {
            id: 8,
            "title": "Assassin's Creed",
            "posterUrl": "https://upload.wikimedia.org/wikipedia/id/7/77/Assassins_Creed_2_Box_Art.JPG",
        },
        {
            id: 9,
            "title": "Luke Cage",
            "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzlY7kG9OGdZjYLlrktqDIgKZyzfCTIPaWlQ&usqp=CAU",
        }


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
        }
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
                <img src="${movies[selectedGenre][randomNumber].posterUrl}">
                <p>${movies[selectedGenre][randomNumber].title}</p>
                <button name = 'movie-button' id='${movieId}' value='watch' onclick='pickMovie(this,${movieId})'>Watch</button>
              </div>
            </div>`
        historyIndex.push(randomNumber)
    }
    cardsElement.innerHTML = card

    document.getElementById('btn-pick-movie').removeAttribute('style')
}


//menambahkan element untuk menyimpan movie yang dipilih
const pickedMovieElement = document.getElementById("picked-movies")
function pickMovie(evt, movieId) {
    document.getElementById(movieId).setAttribute('disabled', true)
    const movie = movies[selectedGenre][movieId]

    const pickedMovie = `
            <div class="card" id='card-${movie.id}'>
                <div class="profile">
                  <img src="${movie.posterUrl}" hceight="150"/>
                  <p>${movie.title}</p>
                  <button name='delete-movie' id='delete-${movie.id}' value='delete' onclick='deleteMovie(this, ${movie.id})'  >delete</button>
                </div>
            </div>
        `
    pickedMovieElement.innerHTML += pickedMovie
    document.getElementById('btn-repick-movie').removeAttribute('style')
}


//menghapus element dari list movie yang sudah dipilih
function deleteMovie(event, movieId) {
    const element = document.getElementById(`card-${movieId}`)
    element.remove()
    document.getElementById(movieId).removeAttribute('disabled')

}