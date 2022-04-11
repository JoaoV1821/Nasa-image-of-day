const main = function() {
    const img = $('#nasa');

    const url = 'https://api.nasa.gov/planetary/apod?api_key=eqgmwhI5e8OsaSIzwvhtc82mZ6ehRcpi3wVLaBak&date=2017-07-11'

    $.ajax({
        type: "GET",
        url: url,
        success: function (response) {
            console.log(response)
            img.attr('src', response.url)
        }
    });
}

main()