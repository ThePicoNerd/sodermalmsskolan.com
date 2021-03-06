import { DateTime } from "luxon";
import fetchMenus from "./fetchMenus";

describe("fetchMenus test", () => {
  it("should return at least one menu", async () => {
    const menus = await fetchMenus();

    expect(menus.length).toBeGreaterThan(0);
  });

  it("should be ordered with the latest menu first", async () => {
    const menus = await fetchMenus();

    for (let i = 0; i < menus.length - 1; i += 1) {
      const a = DateTime.fromISO(menus[i].date);
      const b = DateTime.fromISO(menus[i + 1].date);

      expect(a >= b).toBe(true);
    }
  });

  test("no dish should be an empty string", async () => {
    const menus = await fetchMenus();

    menus.flatMap((menu) => menu.dishes).forEach((dish) => {
      expect(dish.length).toBeGreaterThan(0);
    });
  });

  test("there should not be any duplicates", async () => {
    const menus = await fetchMenus();

    menus.forEach(({ dishes }) => {
      const hasDuplicates = dishes.some((dish, index) => dishes.indexOf(dish) !== index);

      expect(hasDuplicates).toBe(false);
    });
  });
});
