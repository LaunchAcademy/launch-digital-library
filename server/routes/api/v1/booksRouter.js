import express from "express"

import Book from "../../../models/Book.js"

const booksRouter = new express.Router()

booksRouter.get("/", async (req, res) => {
  try {
    const booksFromDatabase = await Book.findAll()
    res.status(200).json({ books: booksFromDatabase })
  } catch (err) {
    res.status(500).json({ errors: err })
  }
})

booksRouter.post("/", async (req, res) => {
  try {
    console.log(req.body)
    const newBookObject = new Book(req.body)
    console.log(newBookObject)

    await newBookObject.save()
    console.log(newBookObject)

    return res.status(201).json({ book: newBookObject })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ error: err })
  }
})

export default booksRouter
