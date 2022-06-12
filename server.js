const express = require('express')
const app = express()
const cors = require("cors")
const {request} = require('http')
const nodemon = require('nodemon')
const PORT = 8000

app.use(cors())



// const menuItems = { 
//     "char_id":1,
//     'porkBowl': {
//     'itemName' : 'Pork Belly Noodle Bowl',
//     'ingredients': 'Noodles, Pork Belly, Broth',
//     'price':'$24.00',
//     'img': 'https://media-cdn.tripadvisor.com/media/photo-m/1280/18/cd/03/93/pork-belly-noodle-bowl.jpg' ,
    
    
// },   
//     "char_id":2,    
//     'airlineChick': {
//     'itemName' : 'Asian-marinated Airline Chicken',
//     'ingredients': 'Sticky Rice, Bok Choy, Asian Glaze',
//     'price':'$24',
//     'img': 'https://media.wdwnt.com/2019/10/new-kona-cafe-menu-sticky-wings-airplane-chicken-polynesian-resort_17-1200x675.jpg' ,
    

// },   "char_id":3,
//     'turkey': {
//     'itemName' : 'Turkey Banh Mi',
//     'ingredients': 'Slow-roasted Turkey Breast, Black Pepper Bacon, Pork Pâte, Cilantro, Jalapeño, Onions, and Grilled Poblano Mayonnaise served with French Fries',
//     'price':'$18',
//     'img': 'https://i1.wp.com/www.wdwopinion.com/wp-content/uploads/2020/01/IMG_8386-scaled.jpg?fit=1024%2C768&ssl=1' ,
    
// },

//}

const menuItems = [ {
    "char_id": 1,
    "itemName": "Pork Belly Noodle Bowl",
    "price": "$24.00",
    "img": "https://media-cdn.tripadvisor.com/media/photo-m/1280/18/cd/03/93/pork-belly-noodle-bowl.jpg",
    "ingredients": "Noodles, Pork Belly, Broth",
    "nickname": "Heisenberg",
    "appearance": [
        1,
        2,
        3,
        4,
        5
    ],
    "portrayed": "Bryan Cranston",
    "category": "Breaking Bad",
    "better_call_saul_appearance": []
},
{
    "char_id": 1,
    "name": "Walter White",
    "birthday": "09-07-1958",
    "occupation": [
        "High School Chemistry Teacher",
        "Meth King Pin"
    ],
    "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    "status": "Presumed dead",
    "nickname": "Noodle, Pork Belly, Broth",
    "appearance": [
        1,
        2,
        3,
        4,
        5
    ],
    "portrayed": "Bryan Cranston",
    "category": "Breaking Bad",
    "better_call_saul_appearance": []
},
{
    "char_id": 1,
    "name": "Walter White",
    "birthday": "09-07-1958",
    "occupation": [
        "High School Chemistry Teacher",
        "Meth King Pin"
    ],
    "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    "status": "Presumed dead",
    "nickname": "Heisenberg",
    "appearance": [
        1,
        2,
        3,
        4,
        5
    ],
    "portrayed": "Bryan Cranston",
    "category": "Breaking Bad",
    "better_call_saul_appearance": []
},

]

app.get('/api/menuItems', (req,res) => {
    res.json(menuItems)
})





app.listen( process.env.PORT || PORT, () => {
    console.log(`Server is runnning on ${PORT}`)
})