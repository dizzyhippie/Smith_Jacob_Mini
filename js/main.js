import {getMiniData} from "./components/TheDataMiner.js";
import TheModalComponent from "./components/TheModalComponent.js";
import TheThumbnailComponent from "./components/TheThumbnailComponent.js";
import TheElectricComponent from "./components/TheElectricComponent.js";
import TheVideoComponent from "./components/TheVideoComponent.js";

(() =>{
    const myVue = new Vue({
        created: function() {
            getMiniData(null, (data) => {
                this.electricData = data.filter(item => item.electric === "true");
                this.miniData = data.filter(item => item.electric === "false")
            });

        },

        data: {
            miniData: [],
            electricData: [],
            message: "Vue is Working!",
            currentItem : {}
        },

        methods: {
            swapInfo(item){
                this.currentItem = item;
            },
        },

        components: {
            modal: TheModalComponent,
            thumbnail: TheThumbnailComponent,
            electric: TheElectricComponent,
            videoComponent: TheVideoComponent,
        }

    }).$mount("#app");
})()