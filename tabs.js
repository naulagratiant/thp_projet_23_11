alert ("naula")
$( ".tab-link" ).click(function() {
  $( ".tab-content" ).slideDown( "slow", function() {
    // Animation complete.
  });
});