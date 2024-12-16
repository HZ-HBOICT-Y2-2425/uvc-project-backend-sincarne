import express from "express";
import cors from 'cors';
import { searchFoodsOptionsByName } from "../controllers/nameSearchController";
import { getNutritions } from "../controllers/getNutrionsController";
import { getMeatlessSuggestionsKcal, getMeatlessSuggestionsProtein } from '../controllers/meatSwitchController'

const router = express.Router();

//how to retrieve the user from a microservice without the auth0 configuration
router.get('/nutri/search',cors(), (req, res) => {
	console.log(req.headers['x-user-data']);
	res.sendStatus(200);
});

router.get('/search/:ingredient',cors(),searchFoodsOptionsByName)
router.get('/getNutritions/:ingredient_code',cors(),getNutritions)
router.get('/getSuggestions/protein/:ingredient_code',cors(),getMeatlessSuggestionsProtein)
router.get('/getSuggestions/calories/:ingredient_code',cors(),getMeatlessSuggestionsKcal)
 
export default router;