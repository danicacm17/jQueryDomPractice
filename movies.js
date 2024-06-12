$(document).ready(function() {
    // Function to append movie and rating to the DOM
    function appendMovie(title, rating) {
      var $movieItem = $('<div class="movie-item"></div>');
      var $title = $('<span class="movie-title">' + title + '</span>');
      var $rating = $('<span class="movie-rating">' + rating + '</span>');
      var $removeButton = $('<button class="remove-button">Remove</button>');
  
      // Append title, rating, and remove button to movie item
      $movieItem.append($title, ' - ', $rating, ' ', $removeButton);
  
      // Append movie item to movie list
      $('#movieList').append($movieItem);
  
      // Add event listener to remove button
      $removeButton.on('click', function() {
        $(this).parent().remove(); // Remove the movie item when remove button is clicked
      });
    }
  
    // Event listener for form submission
    $('#movieForm').on('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get values from form inputs
      var title = $('#title').val();
      var rating = $('#rating').val();
  
      // Append movie and rating to the DOM
      appendMovie(title, rating);
  
      // Reset form inputs
      $('#title').val('');
      $('#rating').val('');
    });
  
    // Function to sort movies by title in ascending order
    function sortMoviesByTitleAsc() {
      var $movieList = $('#movieList');
      var $movies = $movieList.children('.movie-item');
  
      $movies.detach().sort(function(a, b) {
        return $(a).find('.movie-title').text().localeCompare($(b).find('.movie-title').text());
      });
      
      $movieList.append($movies);
    }
  
    // Function to sort movies by title in descending order
    function sortMoviesByTitleDesc() {
      var $movieList = $('#movieList');
      var $movies = $movieList.children('.movie-item');
  
      $movies.detach().sort(function(a, b) {
        return $(b).find('.movie-title').text().localeCompare($(a).find('.movie-title').text());
      });
      
      $movieList.append($movies);
    }
  
    // Function to sort movies by rating in ascending order
    function sortMoviesByRatingAsc() {
      var $movieList = $('#movieList');
      var $movies = $movieList.children('.movie-item');
  
      $movies.detach().sort(function(a, b) {
        return parseInt($(a).find('.movie-rating').text()) - parseInt($(b).find('.movie-rating').text());
      });
      
      $movieList.append($movies);
    }
  
    // Function to sort movies by rating in descending order
    function sortMoviesByRatingDesc() {
      var $movieList = $('#movieList');
      var $movies = $movieList.children('.movie-item');
  
      $movies.detach().sort(function(a, b) {
        return parseInt($(b).find('.movie-rating').text()) - parseInt($(a).find('.movie-rating').text());
      });
      
      $movieList.append($movies);
    }
  
    // Event listener for sorting by title (ascending)
    $('#sortTitleAsc').on('click', function() {
      sortMoviesByTitleAsc();
    });
  
    // Event listener for sorting by title (descending)
    $('#sortTitleDesc').on('click', function() {
      sortMoviesByTitleDesc();
    });
  
    // Event listener for sorting by rating (ascending)
    $('#sortRatingAsc').on('click', function() {
      sortMoviesByRatingAsc();
    });
  
    // Event listener for sorting by rating (descending)
    $('#sortRatingDesc').on('click', function() {
      sortMoviesByRatingDesc();
    });
  });
  
  
  