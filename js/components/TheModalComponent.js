import TheVideoComponent from "./TheVideoComponent.js";

export default {
    name: "TheModalComponent",

    props: ["piece"],

    template:`
    <section class="modal">
        <img :src='"images/" + piece.modal' :alt="piece.name" class="modal-images">
        <h1 class="modal-title">{{ piece.name }}</h1>
        <h2 class="modal-price">{{ piece.price }}</h2>
        <videoComponent></videoComponent>
        <section class="info">
            <p class="modal-desc">{{ piece.description }}</p>
            <img :src='"images/" + piece.pic' :alt="piece.name" class="modal-car">
        </section>
        <section class="extra">
        <h2 class="speed">{{ piece.special}}</h2>
        <img :src='"images/" + piece.img' :alt="piece.name" class="modal-speed">
        </section>
        <button class="learn-more" @click="launchVideo">WATCH VIDEO</button>
        <button class="close">CLOSE X</button>
    </section>`,

    methods: {
        launchVideo(){
            let videoPlayer = document.querySelector(".video-player");
            let closeButton = document.querySelector(".close");
            let info = document.querySelector(".info");
            let vid = document.querySelector("video");
            videoPlayer.style.display = "block";
            vid.setAttribute('src',"video/" +`${this.piece.features}`);
            info.style.display = "none";
            this.$emit("showdata",this.piece);
            closeButton.addEventListener('click', () => {modal.style.display = "none";});
        },



    },

    components: {
        videoComponent: TheVideoComponent,
    }

}