import { Card, Dropzones } from "./logicDrag.js"

const cards = document.querySelectorAll(".card")
const dropzones = document.querySelectorAll(".dropzone")

cards.forEach((card) => {
  new Card(card, dropzones)
})

dropzones.forEach((dropzone) => {
  new Dropzones(dropzone)
})
