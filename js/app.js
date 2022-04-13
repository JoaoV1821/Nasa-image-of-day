const searchImage = function (date=getDataAtual()) {
    const url = `https://api.nasa.gov/planetary/apod?api_key=eqgmwhI5e8OsaSIzwvhtc82mZ6ehRcpi3wVLaBak&date=${date}`;
    const title = $('#title');
    const description = $('#description');
    const img = $('#image');
    const video = $('#video');
    const photoDate = $('#photo-date');

    $.ajax({
        type: 'GET',
        url: url,
        success: function (response) {
            title.text(response.title);
            description.text(response.explanation);
            photoDate.text(response.date)
            console.log(response);

            if (response.media_type == 'image') {
                img.show();
                video.hide();
                img.attr('src', response.url);

            } else if (response.media_type == 'video') {
                img.hide();
                video.show();
                video.attr('src', response.url);
            };
        }
    });
};

const getDataAtual = function () {
    const date = new Date();
    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth();

    return `${year}-${month+1}-${day}`;
}

const main = function () {
    const submit = $('#submit');

    searchImage();

    submit.click(function (event) {
        event.preventDefault();
        const date = $('#date').val();

        const dataAtual = new Date(getDataAtual());
        const dataFornecida = new Date(date);

        if (dataFornecida.valueOf() > dataAtual.valueOf()) {
            alert('Digite apenas datas até o dia atual');

        } else {
            searchImage(date);
        };
    });
};

main();