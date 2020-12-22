interface Color {
  background: {
    primary: string;
    secondary: string;
  };
  accent: string;
  border: string;
  danger: string;

  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    white: string;
  };

  skeleton: {
    base: string;
    highlight: string;
  };
}

export default Color;