<template>
  <div>
    <h1>API Data Fetcher</h1>
    <div>
      <div>GET</div>
      <pre data-testid="get-response">{{ getData }}</pre>
      <div>{{ getError }}</div>
    </div>
    <div>
      <div>POST</div>
      <pre data-testid="post-response">{{ postData }}</pre>
      <div>{{ postError }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const getData = ref(null);
const getError = ref(null);
const postData = ref(null);
const postError = ref(null);

const fetchData = async () => {
  try {
    const response = await axios.get(
      "./todos/1"
    );
    getData.value = response.data;
  } catch (err) {
    getError.value = err.message;
  }
};

const submitData = async () => {
  try {
    const response = await axios.post(
      "./posts",
      {}
    );
    postData.value = response.data;
  } catch (err) {
    postError.value = err.message;
  }
};

onMounted(() => {
  fetchData();
  submitData();
});
</script>