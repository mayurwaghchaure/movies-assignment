<template>
  <div class="app">
    <div class="app-intro">
      <p>
        <img width="250" src="@/assets/developer.jpg" />
      </p>

      <p><b>Er. MAYUR K WAGHCHAURE</b></p>
      <p><b>Software Engineer</b></p>
      <p><b>India</b></p>
      <p><b>(+91) 8356851456</b></p>
      <p><b>mayurwaghchaure@gmail.com</b></p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutUsContainer",
  props: {
    name: String,
  },
});
</script>

<style scoped>
.app {
  --border-style: none;
  --background: #373b5e;
  --color: white;
  --min-height: 8rem;
  --stripe: #373b5e;
  --bg: #3e4368;
  --background: transparent;
  background: linear-gradient(135deg, var(--bg) 25%, transparent 25%) -50px 0,
    linear-gradient(225deg, var(--bg) 25%, transparent 25%) -50px 0,
    linear-gradient(315deg, var(--bg) 25%, transparent 25%),
    linear-gradient(45deg, var(--bg) 25%, transparent 25%);
  background-size: 100px 100px;
  background-color: var(--stripe);
}

.app-intro {
  color: burlywood;
  text-align: center;
  padding-top: 10px;
  margin-top: 18px;
  padding-bottom: 02px;
}
</style>
