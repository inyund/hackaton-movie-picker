const movies = {
    Action: [
        {
            "title": "Avatar",
            "posterUrl": "https://upload.wikimedia.org/wikipedia/id/f/f9/TheAvengers2012Poster.jpg",
        },
        {
            "title": "The Avengers",
            "posterUrl": "./2.jpg",
        },
        {
            "title": "Doctor Strange",
            "posterUrl": "./3.jpg",
        },
        {
            "title": "Assassin's Creed",
            "posterUrl": "./4.jpg",
        },
        {
            "posterUrl": "./5.jpg",
            "title": "Luke Cage",
        }


    ],
    Thriller: [
        {
            "title": "Breaking Bad",
            "PosterUrl": "http://ia.media-imdb.com/images/M/MV5BMTQ0ODYzODc0OV5BMl5BanBnXkFtZTgwMDk3OTcyMDE@._V1_SX300.jpg",
        },
        {
            "title": "The Third Man",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg"
        },
        {
            "title": "Black Swan",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg"
        },
        {
            "title": "The Silence of the Lambs",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX300.jpg"
        },
        {

            "title": "Midnight Express",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMDA5MzkyOF5BMl5BanBnXkFtZTgwOTYwNTcxMTE@._V1_SX300.jpg"
        },
    ],
}


document.getElementById("action").addEventListener("click", function () {

    for (let i = 0; i < movies.Action.length; i++) {
        let perGambar = movies.Action[i].posterUrl;

        const perData = document.createElement("img");
        perData.setAttribute('src', perGambar)
        document.getElementById("card-gambar").appendChild(perData);
        console.log(perGambar)

    }
})