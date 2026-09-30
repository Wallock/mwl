export default function WaveDivider({
  fillColor,
  bgColor,
  height = 64,
  flip = false,
}: {
  fillColor: string;
  bgColor: string;
  height?: number;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      style={{
        background: bgColor,
        lineHeight: 0,
        display: "block",
        marginBottom: -1,
        transform: flip ? "scaleX(-1)" : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,32 C120,60 240,4 360,28 C480,52 600,8 720,32 C840,56 960,6 1080,30 C1200,54 1320,12 1440,32 L1440,64 L0,64 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
