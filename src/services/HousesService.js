import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"


class HousesService {

  async getAllHouses() {
    const house = await dbContext.Houses.find()
    return house
  }

  async getHouseById(houseId) {
    const house = await dbContext.Houses.findById(houseId)

    if (house == null) {

      throw new BadRequest(`No House found with that ID sucka ${houseId}`)

    }

    return house

  }

  async getHouseByQuery(houseQuery) {

    const sortBy = houseQuery.sort // .sort here is referencing what is passed via postman
    delete houseQuery.sort

    const houses = await dbContext.Houses.find(houseQuery).sort(sortBy)
    return houses

  }




}




export const housesService = new HousesService()