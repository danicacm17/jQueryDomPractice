$(document).ready(function() {
    console.log("Let’s get ready to party with jQuery!");
  });
  
$(document).ready(function() {
// Add the class 'image-center' to all img elements inside the article tag
$('article img').addClass('image-center');
  });

$(document).ready(function() {
    // Remove the last paragraph in the article
    $('article p:last').remove();
  });
  
$(document).ready(function() {
 // Generate a random font size from 0 to 100 pixels
var randomFontSize = Math.floor(Math.random() * 101); // Generates a random number from 0 to 100
  
// Set the font size of the title to the random size
$('#title').css('font-size', randomFontSize + 'px');
  });

$(document).ready(function() {
    // Add an item to the list
    $('aside ol').append('<li>This is a new item added dynamically.</li>');
  });

  $(document).ready(function() {
    // Empty the aside
    $('aside').empty();
  
    // Add a paragraph apologizing for the list's existence
    $('aside').append('<p>We apologize for the existence of the list. It has been removed for your convenience.</p>');
  });

  $(document).ready(function() {
    // Function to update the background color based on input values
    function updateBackgroundColor() {
      let red = $('input[type="number"]').eq(0).val();
      let green = $('input[type="number"]').eq(1).val();
      let blue = $('input[type="number"]').eq(2).val();
      
      $('body').css('background-color', 'rgb(' + red + ',' + green + ',' + blue + ')');
    }
  
    // Call updateBackgroundColor() initially to set the initial background color
    updateBackgroundColor();
  
    // Listen for changes in input values and update the background color accordingly
    $('input[type="number"]').on('input', function() {
      updateBackgroundColor();
    });
  });
  
  $(document).ready(function() {
    // Add click event listener to the image
    $('article img').on('click', function() {
      // Remove the image from the DOM
      $(this).remove();
    });
  });
  