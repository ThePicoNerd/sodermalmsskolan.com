import Link from "next/link";
import React, { FunctionComponent, ReactNode } from "react";
import Base, { BaseProps } from "../Base";
import Card from "../Card";
import FormText from "../form/text/FormText";
import LogoIcon from "../logo/Icon";
import { SmallHeading } from "../text/headings";

export interface AuthFormPageProps extends BaseProps {
  title: ReactNode;
  description?: ReactNode;
}

/**
 * A component used to display a form related to authentication.
 *
 * @param {AuthFormPageProps} props Props.
 *
 * @returns {React.ReactElement} The rendered elements.
 */
const AuthFormPage: FunctionComponent<AuthFormPageProps> = ({
  title,
  description,
  children,
  ...baseProps
}) => (
  <Base
    navbar={false}
    footer={false}
    {...baseProps}
  >
    <div css={{
      position: "relative",
      backgroundImage: "radial-gradient(var(--accents-2) 2px, transparent 2px)",
      backgroundSize: "20px 20px",
    }}
    >
      <Link href="/" passHref>
        <a css={{
          position: "absolute",
          top: "var(--page-gutter)",
          left: "var(--page-gutter)",
          display: "flex",
        }}
        >
          <LogoIcon height="2.5rem" />
        </a>
      </Link>
      <div css={{
        padding: "var(--page-gutter)",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1480px",
        minHeight: "100vh",
      }}
      >
        <Card css={{
          "--card-padding-x": "2rem",
          "--card-padding-y": "2rem",
          width: "30rem",
          position: "relative",
          zIndex: 1,
        }}
        >
          <div css={{
            textAlign: "center",
          }}
          >
            <SmallHeading>{title}</SmallHeading>
            {description ? <FormText>{description}</FormText> : null}
          </div>
          <div>
            {children}
          </div>
        </Card>
      </div>
    </div>
  </Base>
);

export default AuthFormPage;
