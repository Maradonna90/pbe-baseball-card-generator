<template>
  <h1 class="text-center text-3xl text-pbe-white-50">PBE Baseball Card Generator</h1>
  <div class="grid grid-cols-5 gap-20 mt-20 mx-10">
    <div class="example p-2 bg-pbe-white-50 rounded-lg shadow-md" v-for="(season, seasonId) in seasons" :key="seasonId">
      <router-link 
        :to="{ name: 'SeasonGenerator', params: { seasonId: seasonId } }">
        <img class="mx-auto" :src="'/images/templates/' + season.exampleImage" alt="Example" />
        <p class="text-center text-pbe-blue-900 text-l">{{ season.name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { seasons } from '@/data/seasons';
export default {
  data() {
    return {
      seasons: seasons,
    };
  },
};
</script>
