import classNames from "classnames";

type Props = {
  size: number;
  color?: string;
  thumbColor?: string;
  width?: 2 | 4 | 8;
};

const OvalLoader: React.FC<Props> = ({ size, color, thumbColor, width }) => {
  const spinClass = classNames([
    `animate-spin size-[${size}px] border-${width ?? 2} border-[${color ?? "#f6f6f6"}]`,
    `border-t rounded-full border-t-${thumbColor ?? "#E63946"}`,
  ]);

  return <div className={spinClass}></div>;
};

export default OvalLoader;
