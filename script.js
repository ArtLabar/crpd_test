  $( function() {
    function hexFromRGB(r, g, b) {
      var hex = [
        r.toString( 16 ),
        g.toString( 16 ),
        b.toString( 16 )
      ];
      $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
          hex[ nr ] = "0" + val;
        }
      });
      return hex.join( "" ).toUpperCase();
    }
	
    function refreshSwatch() {
      var red = $( "#tabs-1 .red" ).slider( "value" ),
        green = $( "#tabs-1 .green" ).slider( "value" ),
        blue = $( "#tabs-1 .blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
      $( "#swatch" ).css( "background-color", "#" + hex );
    }
	
	function refreshText() {
      var red = $( "#tabs-2 .red" ).slider( "value" ),
        green = $( "#tabs-2 .green" ).slider( "value" ),
        blue = $( "#tabs-2 .blue" ).slider( "value" ),
        hex = hexFromRGB( red, green, blue );
      $( "#swatch p" ).css( "color", "#" + hex );
    }
 
    $( "#tabs-1  .red, #tabs-1 .green, #tabs-1 .blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
	
    $( "#tabs-1  .red" ).slider( "value", 255 );
    $( "#tabs-1 .green" ).slider( "value", 240 );
    $( "#tabs-1 .blue" ).slider( "value", 160 );
	
	$( "#tabs-2  .red, #tabs-2  .green, #tabs-2  .blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshText,
      change: refreshText
    });
	
    $( "#tabs-2 .red" ).slider( "value", 40 );
    $( "#tabs-2 .green" ).slider( "value", 40 );
    $( "#tabs-2 .blue" ).slider( "value", 40 );
	
	$("#tabs").tabs();
	
  } );