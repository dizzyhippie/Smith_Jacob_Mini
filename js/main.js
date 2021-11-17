import {getMiniData} from "./components/TheDataMiner.js";
import TheModalComponent from "./components/TheModalComponent.js";
import TheThumbnailComponent from "./components/TheThumbnailComponent.js";

(() =>{
    const myVue = new Vue({
        created: function() {
            //fetch mini data
            //make it available to vue
            getMiniData(null, (data) => this.miniData = data);
        },

        data: {
            miniData: [],
            message: "Vue is Working!",
            currentMiniItem : {}
        },

        methods: {
            swapInfo(item){
                this.currentMiniItem = item;
            },

        },

        components: {
            modal: TheModalComponent,
            thumbnail: TheThumbnailComponent
        }

    }).$mount("#app");
})()