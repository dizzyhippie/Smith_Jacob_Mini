export default {
    name: "TheVideoComponent",

    props: ["piece"],

    methods: {
        closeVideo(){
            let videoPlayer = document.querySelector(".video-player");
            let info = document.querySelector(".info");
            videoPlayer.style.display = "none";
            info.style.display = "flex";
        }
    },

    template: `
         <section class="video-player">
            <video src="" controls class="video"></video>
            <button class="toggle" @click="closeVideo">REMOVE VIDEO</button>
        </section>`
}