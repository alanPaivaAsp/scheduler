<template>
  <button class="button" :class="'button-' + type">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      validator: function validate(value) {
        return ['primary', 'secondary', 'tertiary', 'outline'].includes(value)
      },
    },
  },
}
</script>

<style scope lang="scss">
.button {
  align-items: center;
  background-color: transparent;
  border: 0;
  border-radius: var(--border-radius);
  color: var(--color-font-blue);
  display: inline-flex;
  font-size: $font-size-lg;
  font-weight: 500;
  height: 27px;
  justify-content: center;
  line-height: $spacing-md;
  margin-left: $spacing-xsm;
  margin-right: $spacing-xsm;
  min-width: 184px;
  padding: $spacing-xsm;
  width: 100%;

  &:hover {
    box-shadow: var(--box-shadow);
  }

  &:focus {
    border: var(--border);
  }

  @media (min-width: $max-mobile) {
    height: 45px;
    margin-left: 0;
    margin-right: 0;
    max-width: 160px;
  }
}

.button-primary {
  background-color: var(--color-primary);
  color: var(--color-font-white);

  &:hover {
    background-color: var(--color-primary-dark);
  }
}

.button-secondary {
  background-color: var(--color-secondary);
  color: var(--color-font-white);

  &:hover {
    background-color: var(--color-secondary-dark);
  }

  &:focus {
    border: var(--border);
  }
}

.button-tertiary {
  background-color: transparent;
  color: var(--color-font-blue);

  &:hover {
    color: var(--color-font-blue-dark);
  }
}

.button-outline {
  background-color: transparent;
  border: var(--border-blue);
  color: var(--color-font-blue);

  &:hover {
    color: var(--color-font-blue-dark);
    border: var(--border-blue-dark);
  }
}
</style>
