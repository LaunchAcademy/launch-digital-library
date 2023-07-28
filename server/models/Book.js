import pg from "pg"
import _ from "lodash"

const pool = new pg.Pool({
  connectionString: "postgres://postgres:password@localhost:5432/launch_digital_library_development"
})

class Book {
  constructor({id, title, author, page_count, description, fiction}) {
    this.id = id
    this.title = title
    this.author = author
    this.pageCount = page_count
    this.description = description
    this.fiction = fiction
  }

  static async findAll() {
    try {
      const result = await pool.query("SELECT * FROM bos;")
  
      const rawBookData = result.rows
  
      const bookObjects = rawBookData.map(singleBookData => {
        return new Book(singleBookData)
      })
  
      return bookObjects
    } catch(err) {
      console.log(err)
      throw(err)
    }
  }
}

export default Book