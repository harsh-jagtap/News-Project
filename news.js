console.log("Welcome to our News channel");

// Initialize the news api parameters
let apiKey = `88c08ae75cd44ad0a51bd315a2264b1f`
let source = 'the-times-of-india';
let country = "country=in";

// Grab the news container
let Container = document.getElementById('newsContainer');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?${country}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml = "";
        // console.log(articles);

        articles.forEach(function(element) {
            // console.log(element, index)
            let news = `<div class="newsCard">
                            <img src="${element.urlToImage}" alt="Not found" class="newsImg">
                            <div class="newsInfo">
                                <div class="title">${element.title}</div>
                                <div class="dateOfPublish">${element.publishedAt}</div>
                                <div class="content">${element.description}</div>
                                <div class="description">  ${element.content}  <a href="${element.url}" target="_blank" >Read Full news here</a> </div>
                                <div class="author"> - ${element.author}</div>
                            </div>
                            <hr class="noneHr">
                        </div>`;
            newsHtml += news;
        });
        Container.innerHTML = newsHtml;
    } else {
        console.log("Some error occured");
        location.reload();
    }
}

xhr.send()