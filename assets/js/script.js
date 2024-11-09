$(document).ready(function () {
    let searchHero = $('#buscarHeroe');
    let nameHero = parseInt($('#idHeroe'));
    searchHero.click(function () {
        $.ajax({
            url: `https://superheroapi.com/api.php/4905856019427443/${nameHero}`,
            type: 'GET',
            dataType: 'json',
            success: function (posts) {
                posts.forEach((post) => {
                    const li = $('<li>').text(post.title);
                    $('#posts').append(li);
                })
            },
            error: function (error) {
                console.log(error)
            }
        })
    });
});


