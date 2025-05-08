const express = require("express")
const router = express.Router()

const {
  createQuestion,
  getAllQuestion,
  singleQuestion,
  getSeachedQuestion,
  deleteQuestion
} = require("../controller/questionController")

// Create a new question
router.post("/", createQuestion)
router.get("/", getAllQuestion)
router.get("/:question_id", singleQuestion)
router.get("/search/:search", getSeachedQuestion)
router.delete("/:questionid", deleteQuestion)

module.exports = router
