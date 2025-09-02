const Logo = () => (
    <svg viewBox="0 0 220 36" className="w-40 h-auto select-none" aria-hidden="false">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6"/>
          <stop offset="50%" stopColor="#6366F1"/>
          <stop offset="100%" stopColor="#22D3EE"/>
        </linearGradient>
        <filter id="soft-glow" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#soft-glow)">
        <text x="0" y="25"
          className="font-mono"
          style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}
          fontSize="26" fontWeight="700" fill="url(#grad)">
          &lt;RafaelMatos /&gt;
        </text>
      </g>
    </svg>
  );
  
  export default Logo;