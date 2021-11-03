module.exports = {
  // Default styles
  backgroundColor: { value: '{colors.background.tertiary.value}' },
  paddingVertical: { value: '{space.small.value}' },
  paddingHorizontal: { value: '{space.medium.value}' },

  // Variations
  info: {
    backgroundColor: { value: '{colors.background.info.value}' },
    color: { value: '{colors.font.info.value}' },
  },

  error: {
    backgroundColor: { value: '{colors.background.error.value}' },
    color: { value: '{colors.font.error.value}' },
  },

  warning: {
    backgroundColor: { value: '{colors.background.warning.value}' },
    color: { value: '{colors.font.warning.value}' },
  },

  success: {
    backgroundColor: { value: '{colors.background.success.value}' },
    color: { value: '{colors.font.success.value}' },
  },
};
