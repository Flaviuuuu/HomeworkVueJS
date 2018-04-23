import Vue from 'vue';

const $ = require('jquery');

global.$ = global.jQuery = $;

require('../sass/style.scss');

require('bootstrap/dist/css/bootstrap.css');

require('bootstrap');

const jsapp = new Vue (
     {
         el: '#exercise2',
         data: {
            name: ''
         },
         methods: {
             say: function (message) {
                 alert(message)
             },
             showName: function (event) {
                 this.name = event.target.value;
             }
         }
    }
);

