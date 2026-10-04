// Illustration of an agentic check review. Styling lives in globals.css (.flow).
export default function FlowDiagram() {
  return (
    <figure className="flow m-0 max-w-[44rem] overflow-x-auto">
      <svg
        viewBox="0 0 720 230"
        role="img"
        aria-label="Diagram of an agentic check review: check image, extract fields, agent reasoning with tools, then a verdict."
        className="block h-auto w-full min-w-[34rem]"
      >
        <defs>
          <pattern id="guilloche" width="14" height="14" patternUnits="userSpaceOnUse">
            <path className="guilloche" d="M0 7 Q3.5 0 7 7 T14 7" fill="none" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="720" height="230" rx="10" fill="url(#guilloche)" opacity=".55" />

        <path className="edge" d="M150 95 H215" />
        <path className="edge" d="M345 95 H410" />
        <path className="edge" d="M540 95 H585" />
        <path className="edge" d="M410 120 Q 345 165 300 168" />

        <g className="node" transform="translate(20 62)">
          <rect width="130" height="66" rx="8" />
          <text x="65" y="30" textAnchor="middle">Check image</text>
          <text x="65" y="48" textAnchor="middle" className="sub">arrives</text>
        </g>
        <g className="node" transform="translate(215 62)">
          <rect width="130" height="66" rx="8" />
          <text x="65" y="30" textAnchor="middle">Extract fields</text>
          <text x="65" y="48" textAnchor="middle" className="sub">OCR</text>
        </g>
        <g className="node core" transform="translate(410 62)">
          <rect width="130" height="66" rx="8" />
          <text x="65" y="30" textAnchor="middle">Agent reasons</text>
          <text x="65" y="48" textAnchor="middle" className="sub">LLM graph</text>
        </g>
        <g className="node tool" transform="translate(190 148)">
          <rect width="110" height="40" rx="8" />
          <text x="55" y="25" textAnchor="middle">Lookup tools</text>
        </g>
        <g className="node" transform="translate(585 62)">
          <rect width="115" height="66" rx="8" />
          <text x="57" y="30" textAnchor="middle">Verdict</text>
          <text x="57" y="48" textAnchor="middle" className="sub">pass or flag</text>
        </g>

        <circle className="dot" r="6" opacity="0">
          <set attributeName="opacity" to="1" begin="0.6s" dur="2.6s" />
          <animateMotion dur="2.6s" begin="0.6s" calcMode="linear" path="M85 95 H585" />
        </circle>
        <g className="stamp" transform="translate(642 40) rotate(-8)">
          <rect x="-42" y="-14" width="84" height="28" rx="4" />
          <text x="0" y="6" textAnchor="middle">FLAGGED</text>
        </g>
      </svg>
      <figcaption className="mt-2 text-[0.9rem] text-soft">
        An illustration of how an agentic check review can flow. Not a diagram of any production system.
      </figcaption>
    </figure>
  );
}
