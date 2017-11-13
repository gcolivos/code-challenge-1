console.log("In script.js");

$(document).ready(readyNow);
var clickCount = 0;
function readyNow(){
    console.log("jQuery library loaded");
    $('#generateButton').on('click', appendDiv);
}

function appendDiv(){
    console.log("In appendDiv");
    clickCount += 1;
    var clickSentence = "<div class='appendDiv'>" +
    "<p>" +
    "You have clicked the button " +
    clickCount +
    " times." +
    "</p>" +
    "<button class='swapButton'> Swap </button>" +
    "<br>" +
    "<button class='deleteButton'> Delete </button>" +
    "</div>";
    $('body').append(clickSentence);
    $('.swapButton').last().on('click', swapColors)
    $('.deleteButton').last().on('click', deleteDiv)
}

function swapColors(){
    console.log("In swapColors");
    if ($(this).closest('div').hasClass('appendDiv')){
        $(this).closest('div').addClass('swappedDiv').removeClass('appendDiv');
    }
    else {
        $(this).closest('div').addClass('appendDiv').removeClass('swappedDiv');
    }
}

function deleteDiv(){
    console.log("In deleteDiv");
    $(this).closest('div').remove();
}