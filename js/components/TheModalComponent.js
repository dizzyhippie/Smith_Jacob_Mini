import TheVideoComponent from "./TheVideoComponent.js";

export default {
    name: "TheModalComponent",

    props: ["piece"],

    template:`
    <section class="modal">
        <img :src='"images/" + piece.modal' :alt="piece.name" class="modal-images">
        <h1 class="modal-title">{{ piece.name }}</h1>
        <h2 class="modal-price">{{ piece.price }}</h2>
        <p class="modal-desc">{{ piece.description }}</p>
        <videoComponent></videoComponent>
        <button class="learn-more" @click="launchVideo">WATCH VIDEO</button>
        <button class="close">CLOSE X</button>
    </section>`,

    methods: {
        launchVideo(){
            let videoPlayer = document.querySelector(".video-player");
            let closeButton = document.querySelector(".close");
            videoPlayer.style.display = "block";
            this.$emit("showdata",this.piece);
            closeButton.addEventListener('click', () => {modal.style.display = "none";});
        },

    },

    components: {
        videoComponent: TheVideoComponent,
    }

}