# LET HIM COOK: built using MENN STACK (Mongo, Express, Next.JS, Node)

*DESCRIPTION*

# Deployed Application

The deployed application can be found at the following link: "####".

To install all the dependencies used in the project, simply run the command:
```
npm install
```

# Environment Variables

You will need to create a .env.local file if you want to run this project locally. In order to do so you will also need variable:

- NEXT_PRIVATE_GOOGLE_MAPS_API_KEY

# Application Routes:

| URL path                    | Description           | Protected | 
| :--------------------------:|:---------------------:|:---------------------:|
| /                           |  Home page            | ❌ |
| /login                      |  Login page           | ❌ |
| /signup                     |  Signup page          | ❌ |
| /profile                    |  Profile Page         | ✅ |
| /restaurants                |  Restaurants Page     | ✅ |
| /restaurants/single/:id            |  Restaurant Details Page     | ✅ |
| /restaurants/create                |  Restaurants Creation Page     | ✅ |
| /restaurants/edit/:id                |  Restaurants Edit Page     | ✅ |