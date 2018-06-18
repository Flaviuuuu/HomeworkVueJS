import Vue from 'vue';

const $ = require('jquery');

global.$ = global.jQuery = $;

require('../sass/style.scss');

require('bootstrap/dist/css/bootstrap.css');

require('bootstrap');

var calculatorjs = new Vue (
    {
        el: "#calculator-js",
        data: {
            expression: "",
        },
        methods: {
            clickOperation: function (operation) {
                switch(operation) {
                    case 'Backspace':
                        this.expression = this.expression.slice(0, -1);
                        break;
                    case 'c':
                    case 'CE':
                        this.expression = '';
                        break;
                    case 'Enter' :
                    case '=' :
                        this.expression = eval(this.expression);
                        break;
                    default:
                        this.expression += operation;
                        break;
                }
            },
            clickNumber: function (number) {
                this.expression += number;
            },
            keyOperation: function (event) {
                this.clickOperation(event.key);
            }
        }

    }
);
