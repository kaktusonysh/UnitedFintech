// src/helpers/unitedFintechUrlHelper.ts

const BASE_URL = "https://unitedfintech.com";

/**
 * @param path - Шлях (наприклад, "/about" або "careers")
 * @returns Повний URL (наприклад, "https://unitedfintech.com/about")
 */
export function getUnitedFintechUrl(path: string = ""): string {

  const cleanedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE_URL}/${cleanedPath}`;
}

/**
 * Генерує URL для конкретної сторінки UnitedFinTech
 * (Додаємо типізацію для підказок у IDE)
 */
export const unitedFintechPages = {
  home: () => getUnitedFintechUrl(),
  about: () => getUnitedFintechUrl("about"),
  careers: () => getUnitedFintechUrl("careers"),
  contact: () => getUnitedFintechUrl("contact"),
  // Додавайте інші сторінки за необхідності
} as const;

/**
 * Додає query-параметри до URL
 * @param url - Базовий URL
 * @param params - Об'єкт параметрів (наприклад, { ref: "partner2023" })
 * @returns URL з параметрами
 */
export function addUrlParams(
  url: string,
  params: Record<string, string | number | boolean>
): string {
  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null) {
      query.append(key, String(value));
    }
  }

  return query.toString() ? `${url}?${query}` : url;
}