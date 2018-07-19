
(function(){ 
var slideContent = document.getElementById('slide-content').innerHTML;

Mustache.parse(slideContent);

var slideItems='';

for(var i = 0; i < slideData.length; i++){
  console.log(slideData);
  slideItems += Mustache.render(slideContent, slideData[i]);
};

var fullSlide = Mustache.render(slideItems);

show-slides.insertAdjacentHTML('beforeend', fullSlide);
})(); 

var elem = document.querySelector('.main-carousel');

var flkty = new Flickity( elem, {
    groupCells: true,
    hash: true,
    pageDots: false,
  });
 
  var buttonGroup = document.querySelector('.button-group');
  var buttons = buttonGroup.querySelectorAll('.button');
  buttons = fizzyUIUtils.makeArray( buttons );
  
  buttonGroup.addEventListener( 'click', function( event ) {
    
    if ( !matchesSelector( event.target, '.button' ) ) {
      return;
    }
    var index = buttons.indexOf( event.target );
    flkty.selectCell( index );
  });
  
var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});
