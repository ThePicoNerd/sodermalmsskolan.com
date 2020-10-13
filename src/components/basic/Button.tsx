import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { transparentize } from "polished";

export const StyledButton = styled.a<{
  $secondary?: boolean;
  $colored?: boolean;
  $small?: boolean;
}>`
  --button-background: ${({ $colored }) =>
    $colored ? `var(--color)` : `var(--foreground)`};
  --button-foreground: var(--background);
  --button-border: ${({ $colored }) =>
    $colored ? `var(--color)` : `var(--foreground)`};
  display: inline-block;
  box-sizing: border-box;
  background-color: var(--button-background);
  color: var(--button-foreground);
  padding: 0 36px;
  border: 1px solid var(--button-border);
  border-radius: 5px;
  line-height: ${({ $small }) => ($small ? 40 : 48)}px;
  transition: background-color 0.2s ease, color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    --button-background: var(--background);
    --button-foreground: ${({ $colored }) =>
      $colored ? `var(--color)` : `var(--foreground)`};
    color: var(--button-foreground);
  }

  ${({ $secondary }) =>
    $secondary &&
    `
    background-color: var(--background);
    color: var(--foreground);
    border-color: var(--accents-2);

    &:hover {
      border-color: var(--foreground);
    }
  `}
`;

export interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  secondary?: boolean;
  colored?: boolean;
  small?: boolean;
  href: string;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  secondary,
  colored,
  small,
  href,
  children,
  ...rest
}) => {
  return (
    <Link href={href} passHref>
      <StyledButton
        $secondary={secondary}
        $colored={colored}
        $small={small}
        {...rest}
      >
        {children}
      </StyledButton>
    </Link>
  );
};

export const ButtonRow = styled.div<{ center?: boolean }>`
  display: inline-flex;
  flex-wrap: wrap;
  margin: -12px;

  ${({ center }) =>
    center &&
    `
    justify-content: center;
  `}

  a {
    margin: 12px;
  }
`;
