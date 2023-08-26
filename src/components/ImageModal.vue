<template>
  <div class="modal">
    <div class="modal-overlay bg-black opacity-50" @click="$emit('close')"></div>
    <div class="modal-content bg-pbe-white-50 p-4 rounded-lg shadow-md relative max-h-screen">
      <!-- Integrate vue-cropperjs for image editing -->
      <section class="cropper-area bg-pbe-white-50 p-4 rounded-lg relative">
        <canvas ref="cropperCanvas" class="cropper-canvas"></canvas>
      </section>
      <section class="preview-area">
        <p class="block font-semibold mb-1 text-pbe-blue-900">Preview</p>
        <div class="preview">
          <canvas ref="previewCanvas" class="preview-canvas" :width="width" :height="height"></canvas>
        </div>
      </section>
      <button @click="cropImageAndEmit" class="mt-4 bg-pbe-blue-900 text-white py-2 px-4 rounded">Crop Image</button>
    </div>
  </div>
</template>

<script>
import 'cropperjs/dist/cropper.css';
import Cropper from 'cropperjs';
import { generateCard } from '@/utils/cardGeneration.js';

export default {
  data() {
    return {
      cropImg: '',
    };
  },
  props: {
    imageUrl: String,
    name: String,
    position: String,
    team: Object,
    season: Object,
    height: Number,
    width: Number
  },
  mounted() {
    this.initCropper();
  },
  methods: {
    updatePreview() {
      const croppedCanvas = this.cropper.getCroppedCanvas().toDataURL();
      const previewCanvas = this.$refs.previewCanvas;
      generateCard(
        previewCanvas,
        this.season,
        this.team,
        croppedCanvas,
        this.name,
        this.position
      ); // Generate card data using cropped canvas
    },
    initCropper() {
      const canvasElement = this.$refs.cropperCanvas;
      this.cropper = new Cropper(canvasElement, {
        viewMode: 1, // Set your desired view mode
        // Other cropper options
        aspectRatio: 180 / 252, // Set the aspect ratio
        crop: this.updatePreview, // Call updatePreview when cropping changes
      });
      this.cropper.replace(this.imageUrl);
    },
    cropImageAndEmit() {
      this.cropImg = this.$refs.previewCanvas.toDataURL();
      const croppedCanvas = this.cropper.getCroppedCanvas().toDataURL();

      // Emit the event along with the cropped image URL
      this.$emit('croppedImage', this.cropImg, croppedCanvas);
      this.$emit('close');
    },
  },

  beforeUnmount() {
    if (this.cropper) {
      this.cropper.destroy();
    }
  },
};
</script>
<style scoped>
.modal {
  @apply fixed inset-0 flex items-center justify-center z-50;
}

.modal-overlay {
  @apply absolute inset-0;
}
.row {
  @apply flex flex-row;
}
</style>
