<template>
  <div
    v-if="visible"
    class="modal app-modal modal-lg"
    tabindex="-1"
    style="display: block;"
  >
    <div class="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header header-color">
          <h5 class="modal-title text-center text-white w-100">
            {{ modalTitle }}
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeModal()"
          />
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="closeModal()"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    visible: Boolean,
    modalTitle: String,
  },
  emits: ['onCloseModal'],
  setup (props, {emit }) {
    
    function closeModal () {
      emit('onCloseModal', false)
    }

    return {
      closeModal
    }
  }
}
</script>