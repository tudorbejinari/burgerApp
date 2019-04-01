$(document).ready(function(){
    $('#add-burger').on('submit', function(e){
        e.preventDefault();
        
        var newBurger = {
            burger_name: $('#add-burger [name=newBurger]').val().trim()
        }
    
        $.ajax('/api/burgers', {
            method: 'POST',
            data: newBurger
        }).then(function(){
            location.reload();
        });
    });

    $('.undevoured').on('click', function(){
        var id = $(this).data('id');

        var updatedBurger = {
            devoured: 1
        }

        $.ajax('/api/burgers/' + id, {
            method: 'PUT',
            data: updatedBurger
        }).then(function(){
            location.reload();
        });
    })
});