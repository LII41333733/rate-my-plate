var currentSelection = {}
var map;
var uluru;
var marker;

$(document).ready(function () {

  $("#clear-search").click(function (event) {
    $("#store-results").text("");
  });

  $("#submit-search").on("click", function (event) {

    $("#store-results").text("")

    event.preventDefault();

    var priceSelectedArray = [];
    $("input:checkbox[name='price']:checked").each(function (i) {
      priceSelectedArray[i] = $(this).val();
    })

    var searchItems = {
      keyword: $("#keyword").val(),
      location: $("#location").val(),
      radiusSelected: Math.floor($("input:radio[name='radius']:checked").val()),
      resultsSelected: $("input:radio[name='results']:checked").val(),
      priceSelected: priceSelectedArray
    }

    apiCall(searchItems);

  })

  $("#submit-item-form").on("click", function (event) {

    $("#store-results").empty();

    event.preventDefault();

    var itemName = $("#submit-item-name").val().trim();
    var foodDrink = $("input:radio[name='submit-item-category']:checked").val();
    var rating = $("input:radio[name='submit-item-rating']:checked").val();
    var description = $("#submit-item-description").val()
    var review = $("#submit-item-review").val().trim();
    var mfOptions = $("#mouthfeel-options").val();

    currentSelection.review = review;
    currentSelection.description = description;
    currentSelection.foodDrink = foodDrink;
    currentSelection.itemName = itemName;
    currentSelection.options = mfOptions.slice(0, 3).join(", ");
    currentSelection.rating = rating;

    photoRef.getDownloadURL().then(function (url) {
      currentSelection.picUrl = url
      database.ref().push(currentSelection);
    })

    $('input[name="submit-item-category"]').prop('checked', false);
    $('input[name="submit-item-rating"]').prop('checked', false);
    $("#submit-item-name").val("");
    $("#submit-item-description").val("");
    $("#submit-item-review").val("");
    $("#mouthfeel-options").val("");
    $("#file-upload").val("");

  });

  $("#clear-item-form").on("click", function () {
    $('input[name="submit-item-category"]').prop('checked', false);
    $('input[name="submit-item-rating"]').prop('checked', false);
    $("#submit-item-name").val("");
    $("#submit-item-description").val("");
    $("#submit-item-review").val("");
    $("#mouthfeel-options").val("");
    $("#file-upload").val("");
  })

  $(document).on("click", "#review-button", function () {

    currentSelection = {};

    currentSelection.long = parseFloat($(this)[0].parentElement.parentElement.dataset.long)
    currentSelection.lat = parseFloat($(this)[0].parentElement.parentElement.dataset.lat)
    currentSelection.phone = $(this)[0].parentElement.parentElement.dataset.phone
    currentSelection.restUrl = $(this)[0].parentElement.parentElement.dataset.url
    currentSelection.restaurant = $(this)[0].parentElement.parentElement.dataset.name
    currentSelection.address = $(this)[0].parentElement.parentElement.dataset.address
    currentSelection.cityState = $(this)[0].parentElement.parentElement.dataset.citystate
    currentSelection.cityStateZip = $(this)[0].parentElement.parentElement.dataset.citystatezip

  })

  $(document).on("click", "#review-card", function () {
    $("#closeOut").empty()
    $("#ex-info").empty()
    $("#ex-store").empty()
    $("#ex-restaurant").empty();

    var dataset = $(this);

    var image = dataset[0].childNodes[0].attributes.src.value
    var description = dataset[0].dataset.description
    var review = dataset[0].dataset.review
    var mouthFeel = dataset[0].dataset.mf
    var name = dataset[0].dataset.name
    var storeName = dataset[0].dataset.storename
    var address = dataset[0].dataset.address
    var cityZip = dataset[0].dataset.cityzip
    var phone = dataset[0].dataset.phone
    var url = dataset[0].dataset.url
    var restLong = parseFloat(dataset[0].dataset.longitude)
    var restLat = parseFloat(dataset[0].dataset.latitude)
    var rating = dataset[0].dataset.rating;

    if (rating === '1') {
      var $exIcon = $("<img alt='icon' src='images/icon-1.png' class='float-right' id='ex-review-icon'>")
    } else if (rating === '2') {
      var $exIcon = $("<img alt='icon' src='images/icon-2.png' class='float-right' id='ex-review-icon'>")
    } else if (rating === '3') {
      var $exIcon = $("<img alt='icon' src='images/icon-3.png' class='float-right' id='ex-review-icon'>")
    } else {
      var $exIcon = $("<img alt='icon' src='images/icon-4.png' class='float-right' id='ex-review-icon'>")
    }
    
    $("#foodTitle").text(name)
    $(".ex-img").attr("src", image);
    
    initMap(restLat, restLong)
    
    var $reviewCard = $("<div class='card zeroBorder' id='reviewCard'>");
    var $descriptionTitle = $("<h4 class='text-center mt-4'>Description:</h4>");
    var $descriptionBody = $("<p class='text-center smallText' id='description'>")
    var $reviewTitle = $("<h4 class='text-center mt-4'>Overall Experience:</h4>");
    var $reviewBody = $("<p class='text-center smallText' id='review'>")
    var $mouthFeelTitle = $("<h4 class='text-center mt-4'>Mouthfeel:</h4>");
    var $mouthFeelBody = $("<p class='text-center smallText' id='mouthFeel'>")

    $descriptionBody.text(description);
    $reviewBody.text(review);
    $mouthFeelBody.text(mouthFeel);

    $reviewCard.append($mouthFeelTitle, $mouthFeelBody, $descriptionTitle, $descriptionBody, $reviewTitle, $reviewBody)
    
    var $restCard = $("<div class='card zeroBorder card-body' id='restCard'>")

    var $restName = $("<h4 class='mt-3 text-center'></h4>").text(storeName)
    var $address = $("<h5 class='mt-1 text-center'></h5>").text(address)
    var $cityZip = $("<h5 class='mt-1 text-center'></h5>").text(cityZip)
    var $phone = $("<h5 class='mt-1 text-center'></h5>").text(phone)
    var $urlLink = $("<a href=" + url + ">")
    var $urlButton = $("<button type='button' class='btn btn-danger d-flex mx-auto mt-3'><a href=" + url + " target='_blank'>Click here to visit the website!</a></button>").append($urlLink)
    
    $restCard.append($restName, $address, $cityZip, $phone, $urlButton)

    $("#closeOut").prepend($exIcon)
    $("#ex-info").append($reviewCard)
    $("#ex-store").append($restCard);

  })

});

function apiCall(searchItems) {
  //Sample URL for Testing
  //var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + "sushi" + "&location=" + "toms+river" + "&radius=" + 10000 + "&limit=" + 10 + "&price=" + 2;
  var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=" + searchItems.keyword + "&location=" + searchItems.location + "&radius=" + searchItems.radiusSelected + "&limit=" + searchItems.resultsSelected + "&price=" + searchItems.priceSelected;

  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      "Authorization": "Bearer 2VxyWI6FPmn6irj6VKvlO6GWV0pNBEf5Efh89Mki_C5OmrAlqtY4kLYhkrsnKnm2U6vqZHq5a8Yh1hHu4FfcNHVej_aYkyeXI9xEMqzr-KQ0_EAU-EhBaQy4NIeiW3Yx",
      "Access-Control-Allow-Origin": "*"
    }
  }).then(function (response) {

    for (var i = 0; i < response.businesses.length; i++) {
      var name = response.businesses[i].name;
      var address = response.businesses[i].location.display_address[0];
      var cityOnly = response.businesses[i].location.city;
      var stateOnly = response.businesses[i].location.state;
      var zipOnly = response.businesses[i].location.zip_code;
      var categories = response.businesses[i].categories;
      var categoriesArray = [];
      var price = response.businesses[i].price;
      var distance = response.businesses[i].distance;
      var restLat = response.businesses[i].coordinates.latitude;
      var restLong = response.businesses[i].coordinates.longitude;
      var phone = response.businesses[i].display_phone;
      var url = response.businesses[i].url;

      for (var j = 0; j < categories; j++) {
        categoriesArray.push(categories[j].title);
      }

      var $restaurantDiv = $("<div class='card d-inline-block m-1' id='rest-card' style='width: 16rem;'>");
      var $cardBodyText = $("<div class='card-body card-text p-2 mb-3' id='rest-card-text'>");
      var $cardBodyButton = $("<div class='card-body card-button text-center pt-0'>");

      var $name = $("<h5 class='card-title text-center mb-0' id='store-name'>").text(name);
      var $address = $("<p class='card-text'>").text(address);
      var $city = $("<p class='card-text'>").text(cityOnly + ", " + stateOnly + " " + zipOnly);
      var $categoriesArray = $("<p class='card-text'>").text(categoriesArray.join(", "));
      var $price = $("<p class='card-text'>").text(price);
      var $distance = $("<p class='card-text'>").text(metersToMiles(distance) + " miles");
      var $reviewButton = $("<button type='button' class='btn btn-secondary btn-sm btn-block' id='review-button' data-toggle='modal' data-target='#submit-modal'>Submit Review!</button>");

      $cardBodyText.append($name, $address, $city, $categoriesArray, $price, $distance);
      $cardBodyButton.append($reviewButton);
      $restaurantDiv.append($cardBodyText, $cardBodyButton);

      var cityStateZip = cityOnly + ", " + stateOnly + " " + zipOnly
      var cityState = cityOnly + ", " + stateOnly

      $restaurantDiv.attr("data-long", restLong)
        .attr("data-lat", restLat)
        .attr("data-address", address)
        .attr("data-phone", phone)
        .attr("data-url", url)
        .attr("data-cityState", cityState)
        .attr("data-cityStateZip", cityStateZip)
        .attr("data-name", name)

      $("#store-results").append($restaurantDiv);

    }
  });
}

function initMap(lati = 0, longi = 0) {
  uluru = { lat: lati, lng: longi };
  map = new google.maps.Map(document.getElementById('map'), {
    center: uluru,
    zoom: 12
  });
  marker = new google.maps.Marker({ position: uluru, map: map });
}

function metersToMiles(meters) {
  var m = parseFloat(meters);
  var mi = "";
  if (!isNaN(m)) {
    mi = Math.round((m * 0.00062137119) * 10) / 10;
  }
  return mi;
}

function processSelectedFiles(fileInput) {

  var file = fileInput.files[0];
  // Get a reference to the location where we'll store our photos
  photoRef = firebase.storage().ref().child('photos').child(file.name);

  // Upload file to Firebase Storage
  var uploadTask = photoRef.put(file).then(function (snapshot) { });

}
