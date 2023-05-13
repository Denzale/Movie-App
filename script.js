


let submitButton = $('#submitButton');
let count = 0;

$(submitButton).on("click", function (e) {
    e.preventDefault();

    let input = $("#title").val();
    let rate = $("#rating").val();
    let removeBtn = $("<button class='removeBtn'> X </button>").css("color", "red");

    $('div').append("<div id=" + count + " > ")
    $('div').append("</div>")
    $('div').append("<div id=" + count + " > " + input + " " + rate + removeBtn)

    $(removeBtn).on("click", function () {
        $('#' + count + '').remove()
    })
    count++

})


