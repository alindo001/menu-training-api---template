const express = require('express')
const app = express()
const cors = require("cors")
const {request} = require('http')
const nodemon = require('nodemon')
const PORT = 8000

app.use(cors())




const menuItems = [ {
    "char_id": 1,
    "itemName": "Remys's Ratatouille ",
    "price": "208 francs",
    "img": "https://offloadmedia.feverup.com/secretliverpool.co/wp-content/uploads/2021/02/03045447/disney-pixar-cooking-channel-1024x584-1.png",
    "ingredients": "zucchini, eggplant, yellow squash, Roma tomatoes, red bell pepper, yellow bell pepper, tomatoes, bay leaves, parsley, thyme, onion, garlic, olive oil, salt, balsamic vinegar",
    "allergens": "onion, garlic",
},
{
    "char_id": 2,
    "itemName": "Lembas Bread",
    "price": "50 Castar",
    "img": "https://m.ftscrt.com/static/recipe/0c9e0474-27c3-4634-ae79-181b50f5f53f.jpg",
    "ingredients": "Flour, baking powder, salt, butter, brown sugar, cinnamon, honey, heavy cream, vanilla extract",
    "allergens": "dairy, gluten",
},
{
    "char_id": 3,
    "itemName": "Szechaun Sauce",
    "price": "$18.00",
    "img": "https://www.feastingathome.com/wp-content/uploads/2019/03/Szechuan-Sauce-Recipe-101.jpg",
    "ingredients": "Peppercorns, soy sauce, honey, sesame oil, rice wine vin, mirin, garlic, ginger, corn starch",
    "allergens": "gluten, soy, sesame, corn, garlic",
},


]

app.get('/api/menuItems', (req,res) => {
    res.json(menuItems)
})





app.listen( process.env.PORT || PORT, () => {
    console.log(`Server is runnning on ${PORT}`)
})
//