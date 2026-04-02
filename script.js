var date = document.querySelector(".date");
var image = document.querySelector(".image");
var explanation = document.querySelector(".explanation");
var link = document.querySelector(".link");

var apiKey = "HN2xY9E2oLaPpof0fCYvA1PfWOsGghrPxcVtlDZ6";
var url = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;

fetch(url)
    .then(function(response) {
        return response.json();
    })
    
    .then(function(data)  {
        date.textContent  =  data.date;

        var container = document.querySelector(".container");

        if (data.media_type === "image") {
            container.style.backgroundImage = `url(${data.url})`;
        } else {
            container.style.backgroundColor = "#1f1c2c";
        }

        explanation.textContent = data.explanation;

        link.href = data.hdurl;
        link.textContent = data.title;

    })

    .catch(function(error) { 
        console.log(error);
    });