import { SerializedStyles } from "@emotion/react";
import { FunctionComponent } from "react";

export interface StackProps {
  spacing?: string;
}

export type StackStyles = (props: StackProps) => SerializedStyles;
