.<template>
  <div class="bell">
    <button type="button" class="bell__button">
      <img class="bell__image" src="@/assets/images/bell.svg" />
    </button>
  </div>
</template>

<script></script>

<style scoped>
.bell {
  position: relative;
}

.bell__button {
  outline: none;
  border: 0;
  padding: 0;
  text-align: right;
  cursor: pointer;
  background: transparent;
}

.bell__image {
}

.bell::after {
  position: absolute;
  right: 0;
  top: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #3591fb;
  content: "";
}

.bell__image_enable {
}
</style>