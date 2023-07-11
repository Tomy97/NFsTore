<template>
  <div class="image-upload">
    <div class="input-group">
      <input
        ref="fileInput"
        type="file"
        class="form-control"
        @change="handleFileInputChange"
      />
    </div>
    <div
      class="drag-drop-area"
      @dragover.prevent
      @drop="handleDrop"
      @dragenter="handleDragEnter"
      @dragleave="handleDragLeave"
    >
      <div class="preview-area" v-if="image">
        <img :src="image" alt="Preview" class="img-thumbnail" />
      </div>
      <p v-else>
        {{
          isDragging
            ? 'Suelta la imagen aquí'
            : 'Arrastra y suelta la imagen aquí'
        }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ImageUpload',
  props: {
    modelValue: {
      type: File,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const image = ref('');
    const fileInputRef = ref<HTMLInputElement | null>(null);
    const selectedFile = ref<File | null>(null);
    const isDragging = ref(false);

    const handleFileInputChange = (event: Event) => {
      const input = event.target as HTMLInputElement;
      if (input.files && input.files[0]) {
        selectedFile.value = input.files[0];
        handleImageUpload(input.files[0]);
      }
    };

    const triggerFileInput = () => {
      if (fileInputRef.value) {
        fileInputRef.value.click();
      }
    };

    const handleDrop = (event: DragEvent) => {
      event.preventDefault();
      isDragging.value = false;
      const file = event.dataTransfer?.files[0];
      if (file) {
        selectedFile.value = file;
        handleImageUpload(file);
      }
    };

    const handleDragEnter = (event: DragEvent) => {
      event.preventDefault();
      isDragging.value = true;
    };

    const handleDragLeave = () => {
      isDragging.value = false;
    };

    const handleImageUpload = (file: File) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          image.value = event.target.result as string;
          console.log('este es mi file',file);
          
          emit('update:modelValue', file); 
        }
      };
      reader.readAsDataURL(file);
    };

    return {
      image,
      fileInputRef,
      selectedFile,
      isDragging,
      handleFileInputChange,
      triggerFileInput,
      handleDrop,
      handleDragEnter,
      handleDragLeave,
    };
  },
});
</script>

<style scoped>
.image-upload {
  margin-bottom: 20px;
}

.drag-drop-area {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
}

.preview-area {
  margin-top: 20px;
}

.selected-file {
  margin-top: 10px;
}
</style>
