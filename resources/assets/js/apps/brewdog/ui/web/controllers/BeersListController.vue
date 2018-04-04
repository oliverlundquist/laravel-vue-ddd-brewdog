<template>
    <div class="content">
        <beer-list :beers="beers" v-on:like-beer="likeBeer"></beer-list>
    </div>
</template>

<script lang="ts" src="./BeersListController.vue.ts"></script>

<style lang="scss" scoped>
    .content {
        display: flex;
        justify-content: center;
        background-color: white;
    }
</style>
