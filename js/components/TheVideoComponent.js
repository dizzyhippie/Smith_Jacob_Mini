export default {
    name: "TheVideoComponent",

    props: ["piece"],

    methods: {
        closeVideo(){
            let videoPlayer = document.querySelector(".video-player");
            let text = document.querySelector(".modal-desc");
            videoPlayer.style.display = "none";
            text.style.display = "flex";
        }
    },

    template: `
         <section class="video-player">
            <video src="" controls class="video"></video>
            <h3>Video Title</h3>
            <button class="toggle" @click="closeVideo">TOGGLE VIDEO</button>
        </section>`
}