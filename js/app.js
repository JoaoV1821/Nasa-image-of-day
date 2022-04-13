const getImage = function () {
    const date = $('#date');
    const title = $('#title');
    const description = $('#description');
    const img  = $('#nasa');
    const url = `https://api.nasa.gov/planetary/apod?api_key=eqgmwhI5e8OsaSIzwvhtc82mZ6ehRcpi3wVLaBak&date=${date.val()}`;

    $.ajax({
        type: 'GET',
        url: url,
        success: function (response) {
            img.attr('src', response.url);
            title.text(response.title);
            description.text(response.explanation);
        }
    });
}

const main = function () {
    const submit = $('#submit');

    submit.click(function (event) { 
        event.preventDefault();
        getImage();
    });
}

main();