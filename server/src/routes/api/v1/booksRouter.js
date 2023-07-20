import express from "express"
import objection from "objection"
const { ValidationError } = objection

import { Book } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

const booksRouter = new express.Router()

booksRouter.get("/", async (req, res) => {
  try {
    const books = await Book.query()
    res.json({ books })
  } catch (error) {
    console.error(error)
    res.status(500).json({ errors: error })
  }
})

booksRouter.get("/:id", async (req, res) => {
  try {
    const book = await Book.query().findById(req.params.id)
    res.json({ book })
  } catch (error) {
    res.status(500).json({ errors: err })
  }
})

booksRouter.post("/", async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)

  try {
    const book = await Book.query().insertAndFetch(formInput)
    res.status(201).json({ book })
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(422).json({ errors: error.data })
    } else {
      console.log(error)
      res.status(500).json({ errors: error })
    }
  }
})

export default booksRouter