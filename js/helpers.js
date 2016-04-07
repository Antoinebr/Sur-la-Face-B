
/**
* [Retourne l'index d'un objet à partir d'une clé / valeur]
* @param  {[object]} data [l'objet dans lequel on cherche]
* @param  {[string]} property [la Clé que l'on cherche]
* @param  {[type]} value [la valeur de la clé cherché]
* @return {[int]} [Retourne l'index de l'objet]
*/
function findIndexInData(data, property, value) {
  for(var i = 0, l = data.length ; i < l ; i++) {
    if(data[i][property] === value) {
      return i;
    }
  }
  return -1;
}


/**
*
*  Fixe une hauteur à un % de la fenêtre
*  Et evite le sautillement sur mobile (retraction barre url)
*  http://stackoverflow.com/questions/24944925/background-image-jumps-when-address-bar-hides-ios-android-mobile-chrome
*
*
*  Exemple :
*
*  <div class="u-wjs" data-height="90"></div>
*
*  Cette div aura une hauteur de 90% de la fenêtre
*
*/

function abJsHeight(){
  $('.u-wjs').each(function(){
    var elementHeight = ($(this).data('height'))/100;
    var windowHeight = $(window).height();
    $(this).css('height',(windowHeight*elementHeight)+'px');
  });
}

abJsHeight();

$(window).resize(function(){
  abJsHeight();
});



/**
*
* hashTagActive
* Gère le smooth scrolling
* http://stackoverflow.com/questions/4198041/jquery-smooth-scroll-to-an-anchor
*
*/


var hashTagActive = "";
$(".scroll").click(function (event) {

  var scrollSpeed = 2000;

  if( $(this).data('scrollspeed') !== "undefined" )  scrollSpeed = $(this).data('scrollspeed');
  console.log(scrollSpeed);
  if(hashTagActive != this.hash) { //this will prevent if the user click several times the same link to freeze the scroll.
    event.preventDefault();
    //calculate destination place
    var dest = 0;
    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
      dest = $(document).height() - $(window).height();
    } else {
      dest = $(this.hash).offset().top;
    }
    //go to destination
    $('html,body').animate({
      scrollTop: dest
    }, scrollSpeed, 'swing');
    hashTagActive = this.hash;
  }
});
