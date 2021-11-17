export default {
    name: "TheModalComponent",

    props: ["piece"],

    template:`
    <section class="thumbnail">
    <img :src='"images/" + piece.pic' :alt="piece.name" class="selector-images">
    <h1 class="thumbnail-title"> {{piece.title}} </h1>
    <button class="learn-more">{{piece.cta}}</button>
    </section>`
}