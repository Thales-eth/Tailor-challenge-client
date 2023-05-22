import restaurantsService from "@/services/restaurants.service";

export async function getRestaurants() {
    const restaurants = await restaurantsService.getRestaurants().then(({ data }) => data)
    return restaurants
}