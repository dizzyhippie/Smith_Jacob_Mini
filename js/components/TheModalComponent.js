export default {
    name: "TheModalComponent",

    props: ["piece"],

    template:`
    <section class="modal-panel">
    <h1 class="title"> {{ piece.name }} </h1>
    <h1 class="title"> {{ piece.price }} </h1>
    </section>`
}