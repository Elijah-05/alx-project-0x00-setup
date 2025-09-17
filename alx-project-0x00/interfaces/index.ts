export interface PillProps {
  title: string;
}

export interface ButtonProps {
  title: string;
  styles: string;
  size?: "small" | "medium" | "large";
  rounded?: "sm" | "md" | "full";
  onClick?: () => void;
}
