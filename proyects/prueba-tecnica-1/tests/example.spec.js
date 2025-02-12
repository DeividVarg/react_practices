// @ts-check
import { test, expect } from '@playwright/test'

const localHost = 'http://localhost:5173/'
test('image and fact', async ({ page }) => {
  await page.goto(localHost)

  const text = await page.getByRole('paragraph')

  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith('https://cataas.com/')).toBeTruthy()
})
