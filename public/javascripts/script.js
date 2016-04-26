

// jQuery
$(document).ready(function(){



  // Retrieve the list of doughnuts
  getNewCorgi();
});

// Create event handler for the form submit button. The event name is 'submit'.
  $('#yes').click(function(event){
    newDoggy()
  });

  $('#no').click(function(event){
    newDoggy()
  });

function getNewCorgi(){

  $.ajax({
    url: '/corgi',
    method: 'GET',
    dataType: 'json'
  })
    .done(function(data, textStatus, jqXHR){
      console.log(data);
      $("#pic").css('background-image', 'url(' + data.url + ')')

    })
    .fail(function(data, textStatus, jqXHR){
      console.log("ERROR getting Corgi, status: " + textStatus);
    });
}

function newDoggy(){
    location.reload();
};


