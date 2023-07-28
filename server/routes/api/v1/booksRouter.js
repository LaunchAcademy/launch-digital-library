import express from "express"

import Book from "../../../models/Book.js"

const booksRouter = new express.Router()

booksRouter.get("/", async (req, res) => {
  try {
    const booksFromDatabase = await Book.findAll()
    res.status(200).json({ books: booksFromDatabase })
  } catch(err) {
    res.status(500).json({errors: err})
  }
})

export default booksRouter