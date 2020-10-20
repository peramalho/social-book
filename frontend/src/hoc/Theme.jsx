import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    primary: '#212121',
    secondary: '#757575',
  },
  fontColor: {
    dark: '#212121',
    light: '#757575',
    white: '#DCEDC8',
  },
  fontSize: {
    small: '0.8em',
    medium: '1.0em',
    large: '1.2em',
    huge: '1.4em',
    gigantic: '1.6em',
  },
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.element,
};

Theme.defaultProps = {
  children: null,
};

export default Theme;
