export class Card {
  constructor(card, dropzones) {
    this.dropzones = dropzones
    this.card = card

    this.card.addEventListener("dragstart", this.dragstart.bind(this)) //disparado quando o arrasto começa"
    this.card.addEventListener("dragend", this.dragend.bind(this)) //Disparado quando o arrasto para!
  }

  dragstart() {
    this.dropzones.forEach((dropzone) => {
      dropzone.classList.add("hightlight")
    })

    this.card.classList.add("is-dragging")
  }

  dragend() {
    this.dropzones.forEach((dropzone) => {
      dropzone.classList.remove("hightlight")
    })

    this.card.classList.remove("is-dragging")
  }
}
//-----------------------------------------------------------------
export class Dropzones {
  constructor(dropzone) {
    this.dropzone = dropzone

    this.dropzone.addEventListener("dragover", this.dragover.bind(this)) //Quando o elemento está sendo arrastado sobre outro elemento
    this.dropzone.addEventListener("dragleave", this.dragleave.bind(this)) //Quando o mouse sai dos limites de um elemento
  }

  dragover() {
    this.dropzone.classList.add("over")

    const cardBeingDragged = document.querySelector(".is-dragging")
    this.dropzone.appendChild(cardBeingDragged)
  }

  dragleave() {
    this.dropzone.classList.remove("over")
  }
}
