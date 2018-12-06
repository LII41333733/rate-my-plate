# Rate My Plate
**An App for your Appetite**

[Link to the App](https://NEEDSURL/)


## Introduction

Have you ever had a taste for a particular entree or drink and wanted to search near you to see which restaurants had the item you wanted along with ratings from others who have had it before? 

*Search no more!* 

*Rate My Plate* is a review app that is not tailored to critique of the restaurant as a whole, but of their items specifically. Sure, Yelp and Google Reviews are the go-to spot for restaurant reviews, but they tend to be too objective and less focused on the actual items themselves. Patrons may give their opinion on a dish, but unless you go digging through a bunch of reviews and comments to find the particular opinion you are looking for, how would you ever know that there is a restaurant nearby that has an awesome Shrimp Tempura Roll or a delectable Cosmo that is to absolutely die for?

To find reviews on an item using *Rate My Plate*, first search for the entree or drink you would like to find reviews on as well as the distance you are willing to travel for the item. The app will return reviews from restaurants in that area that users have left in *Rate My Plate* based on the keywords entered.

To leave a review using *Rate My Plate*, search for the restaurant you visited and fill out the form accordingly:
* Select the correct category: Food or Drink
* Enter the item name (as it appears on the menu)
* Give a detailed description - Describe the item as it is before taste. For example, explain how the item looks and smells or feel free to include any additional information on the item such as food history, inspiration, etc.
* Share your overall experience - This section should include your opinion on the taste and experience you get from the item. How does it make you feel? What textures and flavors do you get? Here is your opportunity to put the reader of your review in your shoes and show them how you felt about the item as a whole.  
* Upload a Photo
* Leave a Rating (1 - Worst, 4 - Best)
* Select up to 3 Mouthfeel options. *Mouthfeel* refers to the physical sensations in the mouth produced by a particular food.


## Proof of Concept

This was my first major project to showcase my skills thus far in basic front-end development. This was also my first app using AJAX to make API calls. Using user input I made API requests to the YELP API in order to search for restaurants based on keyword, location, distance and price range. I then used the Google Maps Navigation API to show a mini-map of the area where the restaurant is located based on the latitude and logitude given by the Yelp API.

Another skill I gained through building this app was the ability for elements to carry data throughout the app using *data-target* attributes which allowed for the descriptions and ratings to remain with the review throughout the app. A prospective improvement is to build a back-end to support Full Stack capabilities. 


## Technologies Used

* HTML
* CSS
* JavaScript
* Bootstrap
* AJAX
* Yelp API
* Google API


## Screenshots

### At Game Start
![At Game Start](assets/images/screenshot1.png)

### During Gameplay
![During Gameplay](assets/images/screenshot2.png)

### At Game Start
![At Game Start](assets/images/screenshot3.png)

### During Gameplay
![During Gameplay](assets/images/screenshot4.png)


## Prospective Improvememts

* Using a database to build a back-end to support review and restaurant data
* Developing this to be a flagship app where partners are involved and it becomes a means for restaurant managers to better gauge customer feedback on their items and also patrons to better access the items they want on a more specific basis.