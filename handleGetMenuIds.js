import axios from 'axios';

class handleGetMenuIds {
  static menuIdWithIngredient = {};
  static leastIngredient = 0;
  static mealId = 0;

  /**
   * This method creates an object with menuId and number of ingredients required for the
   * meal to be prepared as key-value pairs respectively.
   * @param {array} listOfMenu = An array of objects. with each menu-description as objects of the array.
   */
  static setNumberOfIngredientsPerMenuId = listOfMenu => {
    listOfMenu.forEach(menu => {
      let numberOfIngredients = 0;
      Object.keys(menu).forEach(menuKey => {
        if (/strIngredient/.test(menuKey) && ( menu[menuKey] !== null && menu[menuKey] !== '' )) numberOfIngredients += 1;
      });
      handleGetMenuIds.menuIdWithIngredient[menu.idMeal] = numberOfIngredients;
    });
  }

  /**
   * This method gets the minimum number of ingredients from the menuIdWithIngredient object
   * and sets it as the menuID with the least number of ingredients required to prepare the meal.
   */
  static setMenuIdWithLeastIngredient = () => {
    handleGetMenuIds.leastIngredient = Math.min(...Object.values(handleGetMenuIds.menuIdWithIngredient));
    Object.keys(handleGetMenuIds.menuIdWithIngredient).forEach(menuId => {
      if(handleGetMenuIds.menuIdWithIngredient[menuId] === handleGetMenuIds.leastIngredient) handleGetMenuIds.mealId = menuId;
    });
  }

  /**
   * This method is a route handler. It sends a request ot the theMealDB.com API
   * and returns the menuId with the least number of ingredients required to prepare it.
   * POST: /menu/ids
   * @param {object} req - HTTP Request object
   * @param {object} res - HTTP response object 
   */
  static async getMenuIDs(req, res) {
    const { menuIDs } = req.body;
    const arrayOfRequests = [];
    const listOfMenu = [];
    menuIDs.forEach(menuId => {
      const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${menuId}`;
      arrayOfRequests.push(axios.get(URL));
    });
    await axios.all([...arrayOfRequests]).then(axios.spread((...responses) => {
      responses.forEach(response => listOfMenu.push(response.data.meals[0]));
      handleGetMenuIds.setNumberOfIngredientsPerMenuId(listOfMenu);
      handleGetMenuIds.setMenuIdWithLeastIngredient();
    }));
    res.status(200).json({
      status: 'success',
      mealId: `${handleGetMenuIds.mealId}`,
      message: `Meal with the least ingredient is ${handleGetMenuIds.mealId}.`,
    });
  }
}

export default handleGetMenuIds;
