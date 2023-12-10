export const dropdownStyles = {
  control: (base, _) => ({
    ...base,
    cursor: 'pointer',
    fontSize: '18px',
    lineHeight: '20px',
    background: '#F7F7FB',
    border: 'none',
    borderRadius: '14px',
    padding: '6px 8px',
    fontWeight: '500',
    color: '#121417',
  }),
  option: styles => ({
    ...styles,
    cursor: 'pointer',
    fontSize: '14px',
    color: 'rgba(18, 20, 23, 0.20)',
    '&:hover': {
      color: '#121417',
    },
  }),
  placeholder: provided => ({
    ...provided,
    color: '#9ca3af',
  }),
};
