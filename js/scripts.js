//business logic
function Place(destination, landmarks, timeofyear, notes) {
  this.destination = destination;
  this.landmarks = landmarks;
  this.timeofyear = timeofyear;
  this.notes = notes;
}

// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedDestination = $("input#new-destination").val();
    var inputtedLandmarks = $("input#new-landmarks").val();
    var inputtedTimeOfYear = $("input#new-timeofyear").val();
    var inputtedNotes = $("input#new-notes").val();

    var newPlace = new Place(inputtedDestination, inputtedLandmarks, inputtedTimeOfYear, inputtedNotes);

    $("ul#places").append("<li><span id=\'"+ newPlace.destination + "\'>" + newPlace.destination + "</span></li>");

    $("#"+ newPlace.destination + "").click(function() {
    $("#show-places").show();
    $("#show-places h2").text(newPlace.destination);
    $(".destination").text(newPlace.destination);
    $(".landmarks").text(newPlace.landmarks);
    $(".timeofyear").text(newPlace.timeofyear);
    $(".notes").text(newPlace.notes);
    });

    $("input#new-destination").val("");
    $("input#new-landmarks").val("");
    $("input#new-timeofyear").val("");
    $("input#new-notes").val("");
  });
});
