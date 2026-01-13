import { test } from './fixtures/authentication';
import { DishesPage } from './pages/DishesPage';

// Constants for mock data
const MOCK_DISH = {
  name: 'Ensalada de Frutas',
  description: 'Una mezcla refrescante de frutas tropicales.',
  prepTime: '10',
  cookTime: '0',
  calories: '150',
  imageUrl: 'https://example.com/fruit-salad.jpg',
  step: 'Cortar todas las frutas en trozos pequeños.',
};

test.describe('Dishes Tests', () => {
  test.beforeEach(async ({ login }) => {
    // Use the login fixture
    await login('pandarobles1@gmail.com', '123qwE');
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
    await dishesPage.viewDishDetails(MOCK_DISH.name);
    await dishesPage.verifyDishDetails(
      MOCK_DISH.name,
      MOCK_DISH.description,
      `${MOCK_DISH.prepTime} min`,
      `${MOCK_DISH.calories} kcal`
    );
    await dishesPage.verifyDishSteps([MOCK_DISH.step]);
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