import { Page } from '@playwright/test';

export class DishesPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('http://localhost:3000/dishes');
  }

  async addDish(name: string, description: string, prepTime: string, cookTime: string, calories: string, imageUrl: string, step: string) {
    await this.page.locator('[data-testid="dishes-header-add-button"]').click();
    await this.page.locator('[data-testid="new-dish-name-input"]').fill(name);
    await this.page.locator('[data-testid="new-dish-description-input"]').fill(description);
    await this.page.locator('[data-testid="new-dish-preptime-input"]').fill(prepTime);
    await this.page.locator('[data-testid="new-dish-cooktime-input"]').fill(cookTime);
    await this.page.locator('[data-testid="new-dish-calories-input"]').fill(calories);
    await this.page.locator('[data-testid="new-dish-imageurl-input"]').fill(imageUrl);
    await this.page.locator('[data-testid="new-dish-step-input"]').fill(step);
    await this.page.locator('[data-testid="new-dish-submit-button"]').click();
  }

  async deleteDish() {
    await this.page.locator('[data-testid="dish-delete-button"]').first().click();
  }

  async verifyDishAdded(name: string) {
    await this.page.locator('[data-testid="dish-name"]', { hasText: name }).isVisible();
  }

  async verifyDishDeleted(name: string) {
    await this.page.locator('[data-testid="dish-name"]', { hasText: name }).isHidden();
  }

  async viewDishDetails(dishName: string) {
    await this.page.locator('[data-testid="dish-name"]', { hasText: dishName }).click();
  }

  async verifyDishDetails(name: string, description: string, prepTime: string, calories: string) {
    await this.page.locator('[data-testid="dish-name"]', { hasText: name }).isVisible();
    await this.page.locator('[data-testid="dish-description"]', { hasText: description }).isVisible();
    await this.page.locator('[data-testid="dish-prep-time"]', { hasText: prepTime }).isVisible();
    await this.page.locator('[data-testid="dish-calories"]', { hasText: calories }).isVisible();
  }

  async verifyDishSteps(steps: string[]) {
    for (let i = 0; i < steps.length; i++) {
      await this.page.locator(`[data-testid="dish-step-${i}"]`, { hasText: steps[i] }).isVisible();
    }
  }
}