export default {
    name: "TheThumbnailComponent",

    props: ["piece"],

    methods: {
        getMoreInfo(){
            console.log("Getting more info!");
            let modal = document.querySelector(".modal");
            let closeButton = document.querySelector(".close");
            modal.style.display = "block";
            closeButton.addEventListener('click', () => {modal.style.display = "none";})
        }
    },

    template:`
    <section class="thumbnail" @click="getMoreInfo">
        <img :src='"images/" + piece.pic' :alt="piece.name" class="selector-images">
        <h1 class="thumbnail-title">{{piece.title}}</h1>
        <h2 class="thumbnail-price">{{piece.price}}</h2>
        <button class="learn-more">{{piece.cta}}</button>
    </section>`
}