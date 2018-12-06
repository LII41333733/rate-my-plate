// Initialize Firebase
var config = {
  apiKey: "AIzaSyC_XBiXeWEV1_aE-PeURCbpox3j45EXVTU",
  authDomain: "ratemyplate-769c6.firebaseapp.com",
  databaseURL: "https://ratemyplate-769c6.firebaseio.com",
  projectId: "ratemyplate-769c6",
  storageBucket: "ratemyplate-769c6.appspot.com",
  messagingSenderId: "22896061849"
};

firebase.initializeApp(config);
var database = firebase.database();

// Review data in Firebase
database.ref().on("child_added", function (childSnapshot) {
  var revName = childSnapshot.val().itemName;
  var revmfOptions = childSnapshot.val().options;
  var revRating = childSnapshot.val().rating;
  var revRestaurant = childSnapshot.val().restaurant;
  var revLocation = childSnapshot.val().cityState;
  var revLocationZip = childSnapshot.val().cityStateZip;
  var picURL = childSnapshot.val().picUrl;
  var restURL = childSnapshot.val().restUrl;
  var revReview = childSnapshot.val().review;
  var revDescription = childSnapshot.val().description;
  var revFoodDrink = childSnapshot.val().foodDrink;
  var revLat = childSnapshot.val().lat;
  var revLong = childSnapshot.val().long;
  var revAddress = childSnapshot.val().address;
  var revPhone = childSnapshot.val().phone;

  var $reviewDiv = $("<div class=' card m-2 d-inline-block' data-toggle='modal' data-target='#ex-modal' id='review-card' style='width: 21rem;'>");
  var $imgTop = $("<img class='card-img-top' alt='Card image cap' id='review-card-top'>");
  var $cardBody = $("<div class='card-body p-2'>")
  var nameSliced = revName.slice(0, 26);
  var $itemName = $("<h5 class='card-title mb-0'>").text(nameSliced);
  var $restName = $("<p class='card-text card-rest mb-1' id='card-rest-text'>").text(revRestaurant + ", " + revLocation);
  var $mfRow = $("<div class='row'>");
  var $mfCol = $("<div class='col-9'>");
  var $mf = $("<p class='card-text'><strong>Mouthfeel:</strong></p>");
  var $mfOptions = $("<p class='card-text'>").text(revmfOptions);
  var $iconCol = $("<div class='col-3'>")

  if (revReview) {
    if (revReview.split("").length < 120) {
      var $review = $("<p class='card-text mb-2 text-center' id='card-review-text'>").text(revReview)
    } else {
      var $review = $("<p class='card-text mb-2 text-center' id='card-review-text'>").text(revReview.split("").slice(0, 120).join("") + "...")
    }
  }

  if (revRating === '1') {
    var $icon = $("<img alt='icon' src='images/icon-1.png' class='float-right' id='review-icon'>");
  } else if (revRating === '2') {
    var $icon = $("<img alt='icon' src='images/icon-2.png' class='float-right' id='review-icon'>");
  } else if (revRating === '3') {
    var $icon = $("<img alt='icon' src='images/icon-3.png' class='float-right' id='review-icon'>");
  } else {
    var $icon = $("<img alt='icon' src='images/icon-4.png' class='float-right' id='review-icon'>")
  }

  $imgTop.attr("src", picURL)

  $reviewDiv.attr({
    "data-description": revDescription,
    "data-option": revFoodDrink,
    "data-review": revReview,
    "data-rating": revRating,
    "data-mf": revmfOptions,
    "data-longitude": revLong,
    "data-latitude": revLat,
    "data-cityZip": revLocationZip,
    "data-address": revAddress,
    "data-name": revName.slice(0, 26),
    "data-storeName": revRestaurant,
    "data-phone": revPhone,
    "data-url": restURL
  });

  $reviewDiv.append($imgTop, $cardBody);
  $cardBody.append($itemName, $restName, $review, $mfRow);
  $iconCol.append($icon);
  $mfRow.append($mfCol, $iconCol);
  $mfCol.append($mf, $mfOptions);
  $("#review-section").append($reviewDiv);

});




