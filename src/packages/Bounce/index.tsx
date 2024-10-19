import "./bounce.css";

const Loader = ({
  color,
  bounceElements = 3,
  withOverlay,
}: {
  color?: string;
  bounceElements?: number;
  withOverlay?: boolean;
}) => {
  return (
    <div className={withOverlay ? "overlay" : ""}>
      <div className={"loader"}>
        {Array.from({ length: bounceElements }, (_, i) => (
          <div
            className={"ball animate-bounce"}
            style={{ backgroundColor: color, animationDelay: `-${i * 0.15}s` }}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Loader;
