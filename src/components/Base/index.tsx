import React, { DetailedHTMLProps, FunctionComponent, HTMLAttributes } from "react";
import classNames from "classnames";
import SiteHead from "../head/SiteHead";
import { SiteMetadata } from "../head/MetaHead";
import Footer from "../Footer";

export interface BaseProps extends DetailedHTMLProps<
HTMLAttributes<HTMLDivElement>, HTMLDivElement
> {
  metadata?: SiteMetadata;
  fullWidth?: boolean;
}

/**
 * The base of the page, with important metadata and common page components such as the navbar.
 *
 * @param {React.PropsWithChildren<BaseProps>} props Props.
 *
 * @returns {React.ReactElement} The rendered base.
 */
const Base: FunctionComponent<BaseProps> = ({
  metadata,
  children,
  className,
  fullWidth,
  ...props
}) => (
  <div className={classNames("flex flex-col min-h-screen", className)} {...props}>
    <SiteHead metadata={metadata} />
    <main className={fullWidth ? undefined : "container"}>
      {children}
    </main>
    <Footer className="mt-auto" />
  </div>
);

export default Base;
