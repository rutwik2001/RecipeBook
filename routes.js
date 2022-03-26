const routes = require('next-routes-extended')

module.exports = routes()
.add('connect', '/connect', '/connect')
.add('profile', '/creators/:address', '/creators/profile')
.add('createRecipe','/creators/:address/createRecipe', '/creators/createRecipe')
.add('showRecipe', '/creators/showRecipe/:tokenID', '/creators/showRecipe')
.add('newCreator', '/newCreator', '/newCreator');