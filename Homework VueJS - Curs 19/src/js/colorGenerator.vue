<template>
    <div>
        <h2>Color Generator</h2>
        <br>

        <button class="btn btn-secondary" id="change" @click="colorGenerator">New Colors</button>
        <br><br>

        <input class="form-control" type="text" placeholder="Search color" v-model="findColor">
        <br><br>

        <div class="row">
            <div v-for="color in search" class="col mb-3">
                <div class="box rounded" :style="{backgroundColor: color}"></div>
                <div>{{ color }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                findColor: '',
                colors: [
                    '#ffb3b3',
                    '#ffbf00',
                    '#00ffbf',
                    '#0080ff',
                    '#ff0080',
                    '#ff80bf',
                    '#b3e6ff',
                ],
            };
        },
        methods: {
            colorGenerator: function () {
                const newColors = [];

                for (let i = 0; i < this.colors.length; i++) {
                    newColors.push('#' + Math.floor(Math.random() * 16777215).toString(16));
                }

                this.colors = newColors;
            }
        },
        computed: {
            search: function () {
                let inputText = new RegExp(this.findColor, "i");
                const matchedColors = this.colors.filter(el => el.match(inputText));

                console.log(matchedColors);

                if (matchedColors.length === 0) {
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
    }
</script>

<style lang="scss">
    .box {
        height: 100px;
        width: 100px;
    }
</style>