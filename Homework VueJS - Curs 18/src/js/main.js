import Vue from 'vue';




const $ = require('jquery');

global.$ = global.jQuery = $;

require("../scss/main.scss");

require('bootstrap');
require('bootstrap/scss/bootstrap.scss');




var app = new Vue ({
   el: '#app',
   data: {
       findColor: '',
       colors:  [
           '#ffff00',
           '#ffd1dc',
           '#609217',
           '#31f228',
           '#ffc0cb',
           '#bdbdbd',
           '#00adff',
       ],
   },
    methods:{
        randomcolorGenerator: function() {
            const newColors = [];

            for(let i=0; i < this.colors.length; i++){
                newColors.push('#'+Math.floor(Math.random()*16777215).toString(16));
            }

            this.colors = newColors;
        }
    },
    computed: {
        search: function () {
            let inputText = new RegExp(this.findColor, "i");
            const matchedColors = this.colors.filter(el => el.match(inputText));

            console.log(matchedColors);

            if(matchedColors.length === 0) {
                matchedColors.push(this.findColor);
            }

            return matchedColors;
        }
    },
    watch: {
        findColor: function (value) {
            console.log("Changed: " + value);
        }
    }
});