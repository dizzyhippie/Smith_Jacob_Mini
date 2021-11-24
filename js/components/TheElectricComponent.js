export default {
    name: "TheElectricComponent",

    props: ["piece"],

    methods: {
        getElectricInfo(){
            let electricModal = document.querySelector(".electric-modal");
            let closeButton = document.querySelector(".close");
            electricModal.style.display = "block";
            this.$emit("showdata",this.piece);
            closeButton.addEventListener('click', () => {electricModal.style.display = "none";});
        },
    },

    template:`
    <section class="thumbnail-electric" @click="getElectricInfo">
        <h1 class="electric-title">{{ piece.title }}</h1>
        <p class="electric-desc">{{ piece.description }}</p>
        <button class="learn-more">{{ piece.cta }}</button>
    </section>`
}
//<img :src='"images/" + piece.pic' :alt="piece.name" class="electric-image">