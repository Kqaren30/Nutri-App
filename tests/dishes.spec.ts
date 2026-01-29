import { test } from './fixtures/authentication';
import { DishesPage } from './pages/DishesPage';

// Constants for mock data
const MOCK_DISH = {
  name: 'Ensalada de Frutas',
  description: 'Una mezcla refrescante de frutas tropicales.',
  prepTime: '10',
  cookTime: '0',
  calories: '150',
  imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
  step: 'Cortar todas las frutas en trozos pequeños.',
};

test.describe('Dishes Tests', () => {
  test.beforeEach(async ({ login }) => {
    // Use the login fixture
    await login('test@nutriapp.com', 'nutriapp123');
  });

  test('Add a new dish', async ({ page }) => {
    const dishesPage = new DishesPage(page);

    // Navigate to dishes page
    await dishesPage.navigate();

    // Add a new dish
    await dishesPage.addDish(
      MOCK_DISH.name,
      MOCK_DISH.description,
      MOCK_DISH.prepTime,
      MOCK_DISH.cookTime,
      MOCK_DISH.calories,
      MOCK_DISH.imageUrl,
      MOCK_DISH.step
    );

    // Verify the new dish appears in the list
    await dishesPage.verifyDishAdded(MOCK_DISH.name);

    // Verify the new dish details by viewing the dish
     await dishesPage.viewDishByNameDetails(MOCK_DISH.name);


    await dishesPage.verifyDishDetails(
      MOCK_DISH.name,
      MOCK_DISH.description,
      `${MOCK_DISH.prepTime} min`,
      `${MOCK_DISH.calories} kcal`
    );
    await dishesPage.verifyDishSteps([MOCK_DISH.step]);
  });


  test('Edit a dish', async ({ page }) => {
    const dishesPage = new DishesPage(page);

    // Navigate to dishes page
    await dishesPage.navigate();

    // Click the edit button
    await dishesPage.clickEditLastDish();

    // Edit the dish fields
    const updatedName = 'Platillo Editado';
    const updatedDescription = 'Una mezcla aún más refrescante de frutas tropicales.';
    const updatedPrepTime = '12';
    const updatedCalories = '180';
    const updatedStep = 'Mezclar todas las frutas y servir frío.';

    await dishesPage.editDish(updatedName, updatedDescription, updatedPrepTime, updatedCalories, updatedStep);
    await dishesPage.submitEditDish();

    // Verify the updated dish appears in the list
    await dishesPage.verifyDishAdded(updatedName);

    // Verify the updated dish details
    await dishesPage.viewDishByNameDetails(updatedName);
    await dishesPage.verifyDishDetails(
      updatedName,
      updatedDescription,
      `${updatedPrepTime} min`,
      `${updatedCalories} kcal`
    );
    await dishesPage.verifyDishSteps([updatedStep]);
  });

  test('Delete a dish', async ({ page }) => {
    const dishesPage = new DishesPage(page);

    // Navigate to dishes page
    await dishesPage.navigate();

    // Delete the first dish
    await dishesPage.deleteDish();

    // Verify the dish is removed from the list
    await dishesPage.verifyDishDeleted(MOCK_DISH.name);
  });
});