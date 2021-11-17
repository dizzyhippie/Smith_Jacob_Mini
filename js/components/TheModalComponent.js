export default {
    name: "TheModalComponent",

    props: ["piece"],

    template:`
    <section class="modal">
        <img :src='"images/" + piece.modal' :alt="piece.name" class="modal-images">
        <h1 class="modal-title">{{ piece.name }}</h1>
        <h2 class="modal-price">{{ piece.price }}</h2>
        <p class="modal-desc">{{ piece.description }}</p>
        <button class="close">CLOSE X</button>
    </section>`
}