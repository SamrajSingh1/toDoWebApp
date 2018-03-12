/*
* Have to select the ul element as that is guranteed to exist when the
* page loads. This way, any new li's that are created will automatically
* get an event listener added to them. The same applies for the span
* function
*/

// Check off specific Todos by clicking
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

// Click on X to delete todo
$('ul').on('click', 'span', function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    // Grab todo text from input
    let todoText = $(this).val();
    // Create a new li and add to ul
    $('ul').append('<li><span>X</span> ' + todoText + '</li>');
    $(this).val('');
  }
});
