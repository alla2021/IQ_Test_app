<script setup>
const p = defineProps({
    value: String,
    label: String,
    name: String,
});
</script>

<template>
    <li class="task-item">
        <input
                :id="value"
                :name="name"
                :value="value"
                type="radio"
                @change="$emit('can-continue')"
        />
        <label :for="value">{{ label }}</label>
    </li>
</template>

<style lang="scss">
.task-item {
  position: relative;

  & input {
    position: absolute;

    z-index: -1;
    opacity: 0;
  }

  & label {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    position: relative;

    font-family: "PT Serif";
    font-size: 1.125rem;
    color: red;

    width: 100%;
    min-height: 50px;

    padding: 0.5625rem 0;
    padding-left: 94px;

    &::before {
      content: "";

      position: absolute;
      top: 50%;
      left: 2.1875rem;

      transform: translateY(-50%);

      width: 1.25rem;
      height: 1.25rem;

      background-color: transparent;
      border: 0.0625rem solid red;
      border-radius: 50%;
    }
  }

  margin-bottom: 0.5rem;

  background-color: fade-out(#f2f3f3, 0.85);

  & input:checked + label {
    color:red;

    background-color: red;

    &::before {
      background-color:red;
      border-color: red;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
}

.task__answers--small {
  & .task-item label {
    min-height: 40px;
  }
}

</style>
