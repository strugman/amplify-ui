module.exports = {
  // shared styles
  fontWeight: { value: 'bold' },
  textAlign: { value: 'center' },
  borderRadius: { value: '{components.fieldcontrol.borderRadius.value}' },
  transitionDuration: {
    value: '{components.fieldcontrol.transitionDuration.value}',
  },
  fontSize: { value: '{components.fieldcontrol.fontSize.value}' },
  lineHeight: { value: '{components.fieldcontrol.lineHeight.value}' },
  paddingBlockStart: {
    value: '{components.fieldcontrol.paddingBlockStart.value}',
  },
  paddingBlockEnd: {
    value: '{components.fieldcontrol.paddingBlockEnd.value}',
  },
  paddingInlineStart: {
    value: '{components.fieldcontrol.paddingInlineStart.value}',
  },
  paddingInlineEnd: {
    value: '{components.fieldcontrol.paddingInlineEnd.value}',
  },
  borderColor: { value: '{colors.border.primary.value}' },
  borderWidth: { value: '{borderWidths.small.value}' },
  borderStyle: { value: 'solid' },
  color: { value: '{colors.brand.primary.80.value}' },

  _hover: {
    color: { value: '{colors.font.focus.value}' },
    backgroundColor: { value: '{colors.brand.primary.100.value}' },
    borderColor: { value: '{colors.brand.primary.700.value}' },
  },
  _focus: {
    color: { value: '{colors.font.focus.value}' },
    borderColor: { value: '{colors.border.focus.value}' },
    boxShadow: { value: '{components.fieldcontrol.focus.boxShadow.value}' },
  },
  _active: {
    color: { value: '{colors.font.active.value}' },
    backgroundColor: { value: '{colors.brand.primary.200.value}' },
    borderColor: { value: '{colors.brand.primary.800.value}' },
  },
  _loading: {
    color: { value: '{colors.font.tertiary.value}' },
    backgroundColor: { value: 'transparent' },
    borderColor: { value: '{colors.border.tertiary.value}' },
  },
  _disabled: {
    color: { value: '{colors.font.tertiary.value}' },
    backgroundColor: { value: 'transparent' },
    borderColor: { value: '{colors.border.tertiary.value}' },
  },

  // variations
  primary: {
    borderWidth: { value: '{borderWidths.small.value}' },
    borderColor: { value: 'transparent' },
    backgroundColor: { value: '{colors.brand.primary.600.value}' },
    color: { value: '{colors.font.inverse.value}' },
    _disabled: {
      borderColor: { value: 'transparent' },
      backgroundColor: { value: '{colors.background.tertiary.value}' },
      color: { value: '{colors.font.tertiary.value}' },
    },
    _loading: {
      borderColor: { value: 'transparent' },
      backgroundColor: { value: '{colors.background.tertiary.value}' },
      color: { value: '{colors.font.tertiary.value}' },
    },
    _hover: {
      borderColor: { value: 'transparent' },
      backgroundColor: { value: '{colors.brand.primary.700.value}' },
      color: { value: '{colors.font.inverse.value}' },
    },
    _focus: {
      borderColor: { value: 'transparent' },
      backgroundColor: { value: '{colors.brand.primary.800.value}' },
      color: { value: '{colors.font.inverse.value}' },
    },
    _active: {
      borderColor: { value: 'transparent' },
      backgroundColor: { value: '{colors.brand.primary.900.value}' },
      color: { value: '{colors.font.inverse.value}' },
    },
  },

  link: {
    borderWidth: { value: 0 },
    backgroundColor: { value: 'transparent' },
    color: { value: '{colors.font.interactive.value}' },
    _hover: {
      color: { value: '{colors.font.hover.value}' },
      backgroundColor: { value: '{colors.brand.primary.100.value}' },
    },
    _focus: {
      color: { value: '{colors.font.focus.value}' },
    },
    _active: {
      color: { value: '{colors.font.active.value}' },
    },
    _disabled: {
      color: { value: '{colors.font.tertiary.value}' },
    },
    _loading: {
      color: { value: '{colors.font.tertiary.value}' },
    },
  },

  // sizes
  small: {
    fontSize: { value: '{components.fieldcontrol.small.fontSize.value}' },
    lineHeight: { value: '{components.fieldcontrol.small.fontSize.value}' },
    paddingBlockStart: {
      value: '{components.fieldcontrol.small.paddingBlockStart.value}',
    },
    paddingBlockEnd: {
      value: '{components.fieldcontrol.small.paddingBlockEnd.value}',
    },
    paddingInlineStart: {
      value: '{components.fieldcontrol.small.paddingInlineStart.value}',
    },
    paddingInlineEnd: {
      value: '{components.fieldcontrol.small.paddingInlineEnd.value}',
    },
  },
  large: {
    fontSize: { value: '{components.fieldcontrol.large.fontSize.value}' },
    lineHeight: { value: '{components.fieldcontrol.large.fontSize.value}' },
    paddingBlockStart: {
      value: '{components.fieldcontrol.large.paddingBlockStart.value}',
    },
    paddingBlockEnd: {
      value: '{components.fieldcontrol.large.paddingBlockEnd.value}',
    },
    paddingInlineStart: {
      value: '{components.fieldcontrol.large.paddingInlineStart.value}',
    },
    paddingInlineEnd: {
      value: '{components.fieldcontrol.large.paddingInlineEnd.value}',
    },
  },
};
