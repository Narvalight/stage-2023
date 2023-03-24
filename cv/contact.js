const validate = document.querySelector('#validate');

if (document.location.search.indexOf('merci') > -1) {
    validate.classList.add('visible');
    window.setTimeout(
        function () {
            validate.classList.remove('visible');
        },
        3000
    )
}

// document.location.search
// toto.indexOf('bonjour')
// validate.classList.add('visible');
// validate.classList.remove('visible');

// window.setTimeout(
//     function() {
//         validate.classList.remove('visible');
//     },
//     3000
// );