<template>
    <div class="beers">
        <h1 class="beers__headline">{{ $t('brewdog.listview.header.headline') }}</h1>
        <p class="lead beers_lead">{{ $t('brewdog.listview.header.lead') }}</p>
        <table class="table beers__table">
            <thead>
                <tr>
                    <th></th>
                    <th>{{ $t('brewdog.listview.table.columns.name') }}</th>
                    <th>{{ $t('brewdog.listview.table.columns.type') }}</th>
                    <th>{{ $t('brewdog.listview.table.columns.likes') }}</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <beer-component v-for="beer in beers" :key="beer.id" :beer="beer" v-on:like-beer="likeBeer"></beer-component>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts" src="./BeerListView.vue.ts"></script>

<style lang="scss" scoped>
    .beers {
        padding: 2rem 0;
        width: 80vw;
    }
    .beers__headline {
        font-weight: lighter;
    }
    .beers_lead {
        margin-bottom: 2rem;
    }
</style>
