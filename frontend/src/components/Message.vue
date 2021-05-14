<template>
  <div :style="{ background: colors.myBg }" class="content">
    <p :style="{ color: colors.myParagraph }" class="mess">
      <strong :style="{ color: colors.myStrong }" class="strong"
        >{{ message.username }}:
      </strong>
      {{ message.message }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    message: Object,
    colors: Object,
  },
};
</script>

<style>
.content {
  display: flex;
  align-items: center;
  min-height: 10%;
  width: 100%;
  margin-bottom: 3%;
  border-radius: 1rem;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
}

.content > p {
  margin-left: 3%;
}
</style>