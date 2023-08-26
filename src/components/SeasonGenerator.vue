<template>
  <div class="SeasonGenerator flex flex-col justify-center items-center min-h-screen grid-cols-2 gap-4">
    <div class="Header col-span-2 text-center">
      <!-- <h1 class="text-center text-6xl mt-6 text-pbe-white-50">{{ season.name }}</h1> -->
    </div>
    <div class="template-preview p-3 bg-pbe-white-200 rounded-lg shadow-md">
      <canvas ref="cardCanvas" class="border bg-pbe-white-50" :width="cardWidth" :height="cardHeight"></canvas>
    </div>
    <div class="input-container p-4 bg-pbe-white-50 rounded-lg shadow-md">
      <label for="name" class="block font-semibold mb-1 text-pbe-blue-900">Name:</label>
      <input type="text" id="name" v-model="name" @change="updatePreview" class="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300" required>

      <label for="position" class="block font-semibold mb-1 text-pbe-blue-900">Position:</label>
      <select v-model="selectedPosition" @change="updatePreview" class="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300">
        <option value="">Select a position</option>
        <option v-for="position in positions" :value="position.name" :key="position.name">{{ position.name }} ({{ position.short }})</option>
      </select>

      <label for="team" class="block font-semibold mb-1 text-pbe-blue-900">Team:</label>
      <select v-model="selectedTeam" @change="updatePreview" class="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300">
        <option value="">Select a team</option>
        <option v-for="team in teams" :value="team" :key="team.name">{{ team.name }}</option>
      </select>

      <label for="player-image" class="block font-semibold mb-1 text-pbe-blue-900">Player Image:</label>
      <input type="file" @change="handleImageUpload" class="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"/>
      <button class="bg-pbe-blue-900 text-pbe-white-50 w-full p-2 border rounded" @click="openModal">Edit Image</button>
  </div>
    <image-modal
      v-if="isModalOpen"
      :image-url="playerImage"
      :name="name"
      :position="selectedPosition"
      :team="selectedTeam"
      :season="season"
      :height="cardHeight"
      :width="cardWidth"
      @close="closeModal"
      @croppedImage="updateImageUrl"
    ></image-modal>
  </div>
</template>
<script>
import { teams } from '@/data/teams';
import { seasons } from '@/data/seasons';
import { positions } from '@/data/positions';
import ImageModal from './ImageModal.vue';
import { generateCard } from '@/utils/cardGeneration.js';
export default {
  components: {
    ImageModal,
  },
  data() {
    return {
      name: '',
      positions: positions,
      teams: teams,
      season: seasons[this.$route.params.seasonId],
      selectedPosition: '',
      selectedTeam: { name: 'Default', logo: 'team-logo.png' },
      playerImage: '/images/blank-player.png', // Holds the selected player's image URL
      uploadedImage: null,
      uploadedImageUrl: '',
      isModalOpen: false,
      cardHeight: 252,
      cardWidth: 180,
    };
  },
  methods: {
    generateCardImage() {
      const canvas = this.$refs.cardCanvas;
      // Call the generateCard function and pass the necessary data
      generateCard(
        canvas,
        this.season,
        this.selectedTeam,
        this.playerImage,
        this.name,
        this.selectedPosition
      );

      // Update the cardImageURL data property or use it as needed
    },
    updatePreview() {
      this.generateCardImage(); // Trigger generateCard on input changes
    },
    handleImageUpload(event) {
      const file = event.target.files[0]; // Get the selected file

      if (file) {
        this.playerImage = URL.createObjectURL(file); // Save the image URL
        this.uploadedImage = file;
        this.uploadedImageUrl = URL.createObjectURL(file);
      }
      this.updatePreview();
    },
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    updateImageUrl(renderedFinal, croppedPlayer) {
      this.playerImage = croppedPlayer
      const cardCanvas = this.$refs.cardCanvas;
      const ctx = cardCanvas.getContext('2d');
      const img = new Image();
      img.onload = () => {
        ctx.clearRect(0, 0, cardCanvas.width, cardCanvas.height);
        ctx.drawImage(img, 0, 0);
      };
      img.src = renderedFinal;
    },
  },
  mounted() {
    // Generate the card preview when the component is mounted
    this.generateCardImage();
  },
};
</script>
