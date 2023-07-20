import { Book } from "../../models/index.js";

class BookSeeder {
  static async seed() {
    const booksData = [
      {
        title: "Lord of the Rings",
        author: "J.R.R. Tolkien",
        pageCount: 705,
        description: "The classic fantasy novel",
        fiction: true
      },
      {
        title: "A Game of Thrones",
        author: "George R.R. Martin",
        pageCount: 500,
        description: null,
        fiction: true
      }
    ]

    for (const singleBookData of booksData) {
      const currentBook = await Book.query().findOne({ title: singleBookData.title })
      if (!currentBook) {
        await Book.query().insert(singleBookData)
      }
    }
  }
}

export default BookSeeder