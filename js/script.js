
(function(){ 
  
var templateList = document.getElementById('template-list').innerHTML;
var templateItem = document.getElementById('template-slide').innerHTML;
  
Mustache.parse(templateItem);

var slideItems='';

for(var i = 0; i < slideData.length; i++){
  console.log(slideData);
  slideItems += Mustache.render(templateItem, slideData[i]);
};

var fullSlide = Mustache.render(templateList, { slides: slideItems });

slider.insertAdjacentHTML('beforeend', fullSlide);
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

(function(){ 

  window.initMap = function (){
    

    var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 10,
			center: slideData[0].coords
    });

    for ( var i = 0; i < slideData.length; i++ ){
    
      var marker = new google.maps.Marker({
              
      position: slideData[i].coords,
      map: map    
      });
     
      marker.addListener('click', function(){
        if( !matchesSelector (marker)){
          return;
        }
        var slideIndex = slideData[i];
        flkty.selectCell( slideIndex );
      });
      flkty.on('change', function(slideData){
        map.panTo(slideData[i]);
      });
      }
    
  }
})(); 