import { dbContext } from "../db/DbContext.js"


class HousesService {

  async getAllHouses() {
    const house = await dbContext.Houses.find()
    return house
  }

}


export const housesService = new HousesService()