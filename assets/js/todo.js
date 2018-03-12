// Check off specific Todos by clicking
$('li').on('click', function() {
  $(this).toggleClass('completed');
});

// Click on X to delete todo
$('span').on('click', function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});
