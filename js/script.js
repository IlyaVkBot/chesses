"use strict";

/*****************

Chesses
Pippin Barr

******************/


let chess;

$(document).ready(setup);

function setup() {
  $('.option').on('click', menuClicked);
}

function menuClicked () {

  chess = new Pawns();

  $('#menu').slideUp(500,() => {
    $('#menu').hide();
    $('#game').slideDown();
  });
}

function resetToMenu () {
  $(document).off('click');
  document.location.reload();
}
