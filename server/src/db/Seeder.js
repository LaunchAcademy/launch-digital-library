// server/src/db/Seeder.js

/* eslint-disable no-console */
import { connection } from "../boot.js"

import BookSeeder from "./seeders/BookSeeder.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    await BookSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder