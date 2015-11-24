var list = 0;
var albumArray = [],

$(function() {
  var albumTemplate = Handlebars.compile($('#classics').html());
  $.ajax({
    url: '/data/albums.json'
    })
  .done(function(json) {
    albumArray = json;
    var compiledHtml = albumTemplate({albums: albumArray[list]});
    $('.albutton').html(compiledHtml);
  }
});

$('body').on('click','.alButton', function(){
  var compiledHtml = albumTemplate({albums: albumArray[list]});
    $('.albutton').html(compiledHtml);
    list++;
  }