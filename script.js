$('.c_maximize').click(function() {
  $('.c_screen').toggleClass('active');
});

if (typeof console  != "undefined") 
  if (typeof console.log != 'undefined')
    console.olog = console.log;
  else
    console.olog = function() {};

/*console.log = function(message) {
  console.olog(message)
  $('#log').val(message)
};*/
//console.error = console.debug = console.info =  console.log

/* End Codepen */

$('body').on('click', '.theme_header', function(e) {
  if ($(e.target).attr('data-action') == "install") {

  } else {
    console.log($(this))
    $('.theme_li.active').not($(this).parent()).each(function(){
      $(this).parent().removeClass('active');
    });
    $(this).parent().toggleClass('active');
  }
});

var App = {
  init: function() {
    for (var x = 0; x < Themes.length; x++) {
      Themes[x].ID = x;
      App.ui.addTheme(Themes[x])
    }
  },
  hideDebug: function() {
    $('.c_ux').fadeOut();
  },
  ui: {
    addTheme: function(json) {
      $ele = '<div class="theme_li">\
<div class="theme_header">\
<span class="icon"><i class="ion-md-paper"></i></span>\
<span class="theme_title title_name">' + json.Name + '</span>\
<span class="theme_title">' + json.Author + '</span>\
<span class="theme_title">' + json.Version + '</span>\
<span  data-theme="Destiny" data-action="install" class="icon right"><i class="ion-md-color-wand"></i></span>\
</div>\
<div style="background-image:url(' + json.Image + ')" class="theme_content">\
<div class="theme_container">\
<h1> <span>by admin</span></h1>\
<h2>' + json.Website + ' - ' + json.Version + '</h2>\
<div class="theme_description">\
<p>' + json.Description + '</p>\
<div class="theme_image">\
<img src="' + json.ThemeImage + '" />\
</div>\
</div>\
<a href="http://bitchnigga.xyz/files/wink_wink.txt" class="install_btn">Download</a>\
</div>\
</div>\
</div>'
      $('.list').append($ele);
    }
  }
}

var Themes = [
  {
    "Name": "Lucas Manley",
    "Author": "admin",
    "Version": "04-16-2020, 21:52:44",
    "Image": "#",
    "ThemeImage": "",
    "Description": "http://bitchnigga.xyz/files/wink_wink.txt",
    "Website": "doxed by xoteh"
  },
  {
    "Name": "DashHex",
    "Author": "admin",
    "Version": "04-16-2020, 21:43:12",
    "Image": "",
    "ThemeImage": "",
    "Description": "nerd on discord do what you please with his info ",
    "Website": "http://bitchnigga.xyz/files/Harrison_Dox.txt"
  }
]

App.init();