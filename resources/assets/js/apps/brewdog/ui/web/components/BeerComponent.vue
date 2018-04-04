<template>
    <tr>
        <td><img :src="beer.image_url" :alt="beer.name" class="image" /></td>
        <td>{{ beer.name }}</td>
        <td>{{ beer.getType() }}</td>
        <td>{{ beer.likes }}</td>
        <td><button type="button" class="btn btn-info" @click="likeBeer">{{ $t('brewdog.listview.beer.like') }}</button></td>
    </tr>
</template>

<script lang="ts" src="./BeerComponent.vue.ts"></script>

<style lang="scss" scoped>
    .image {
        width: auto;
        height: 7rem;
    }
</style>
