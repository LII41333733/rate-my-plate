# Rate My Plate - *An App for Your Appetite*

[Link to the App](https://lii41333733.github.io/rate-my-plate/)


## Introduction

Have you ever had a taste for a particular entree or drink and wanted to search near you to see which restaurants had the item you wanted along with ratings from others who have had it before? 

*Search no more!* 

*Rate My Plate* is a review app that tailors critique to not be of the restaurant as a whole, but of their food and beverage items specifically. Sure, Yelp and Google Reviews are the go-to spot for restaurant reviews, but they tend to be too objective and less focused on the actual items themselves. Patrons may give their opinion on a dish, but unless you go digging through a bunch of reviews and comments to find the particular opinion you are looking for (*if it even exists*), how would you ever know that there is a restaurant nearby that has an awesome Shrimp Tempura Roll or a delectable Cosmo that is to absolutely die for?

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

Another new technology for me was the use of Google's Firebase Cloud API for data persistence. Since I have not yet studied back-end, Firebase Database was a great tool to use for the means of storing review data to be called upon anywhere I need in the app. Firebase was useful not only for the specific review data, but for storing the photos from user reviews. Firebase Storage allowed me to upload the review photo for which I was returned a url to access the photo as a source.

An additional tool I learned to use through building this app was the ability for elements to carry data throughout the app using *data-target* attributes which allowed for the descriptions and ratings to remain with the review throughout the app. A prospective improvement is to build a back-end to support Full Stack capabilities.

Although a small component of the app but worth mentioning was the use of Bootstrap Modals. They are a great tool for setting HTML off the page in order to use for forms that you do not want embedded in the page, or a display option to show quick information.


## Technologies Used

* HTML
* CSS
* JavaScript
* Bootstrap
* AJAX
* Yelp API
* Google API
* Firebase Cloud API - Database
* Firebase Cloud API - Storage


## Screenshots

### Main Banner
![Main Banner](images/screenshot1.png)

### For the Manager, Chef and Patron
![For the Manager, Chef and Patron](images/screenshot2.png)

### Restaurant Search
![Restaurant Search](images/screenshot3.png)

### Review Form (Bootstrap Modal)
![Review Form](images/screenshot6.png)

### Sample Review Collection
![Sample Review](images/screenshot4.png)

### Sample Review (Bootstrap Modal)
![Sample Review](images/screenshot5.png)


## Prospective Improvememts

* Using a back-end database such as mySQL or MongoDB to support review and restaurant data
* Authentication and login, to associate reviews with their author user
* Developing this to be a flagship app where partners are involved and it becomes a means for restaurant managers to better gauge customer feedback on their items and also patrons to better access the items they want on a more specific basis.
