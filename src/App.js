import "./App.css";

export default function App() {

  return (
    <div className="app">
      <div className="bg-svg">
        <svg
          viewBox="0 0 1440 690"
          preserveAspectRatio="xMidYMid slice"
          className="svg-bg"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="47%" x2="100%" y2="53%">
              <stop offset="5%" stopColor="#b5838d" />
              <stop offset="95%" stopColor="#e5989b" />
            </linearGradient>

            <linearGradient id="gradient2" x1="0%" y1="47%" x2="100%" y2="53%">
              <stop offset="5%" stopColor="#b5838d" />
              <stop offset="95%" stopColor="#e5989b" />
            </linearGradient>

            <linearGradient id="gradient3" x1="0%" y1="47%" x2="100%" y2="53%">
              <stop offset="5%" stopColor="#b5838d" />
              <stop offset="95%" stopColor="#e5989b" />
            </linearGradient>

            <linearGradient id="gradient4" x1="0%" y1="47%" x2="100%" y2="53%">
              <stop offset="5%" stopColor="#b5838d" />
              <stop offset="95%" stopColor="#e5989b" />
            </linearGradient>
          </defs>

          <path className="wave wave1"
            d="M 0,700 L 0,405 C 95.84,396.99 191.68,388.99 267,392 C 342.31,395 397.11,409 471,378 C 544.88,346.99 637.86,270.96 720,231 C 802.13,191.03 873.42,187.12 962,165 C 1050.57,142.87 1156.45,102.53 1239,77 C 1321.54,51.46 1380.77,40.73 1440,30 L 1440,700 L 0,700 Z"
            fill="url(#gradient1)"
            fillOpacity="0.25"
          />

          <path className="wave wave2"
            d="M 0,700 L 0,545 C 78.58,550.13 157.16,555.26 235,529 C 312.83,502.73 389.90,445.05 458,425 C 526.09,404.94 585.19,422.50 675,400 C 764.80,377.49 885.29,314.94 980,279 C 1074.70,243.05 1143.63,233.73 1216,220 C 1288.36,206.26 1364.18,188.13 1440,170 L 1440,700 L 0,700 Z"
            fill="url(#gradient2)"
            fillOpacity="0.4"
          />

          <path className="wave wave3"
            d="M 0,700 L 0,685 C 82.09,693.69 164.19,702.39 238,683 C 311.80,663.60 377.30,616.12 459,577 C 540.69,537.87 638.59,507.10 726,486 C 813.40,464.90 890.30,453.47 961,429 C 1031.69,404.52 1096.2,367.00 1175,345 C 1253.8,322.99 1346.9,316.49 1440,310 L 1440,700 L 0,700 Z"
            fill="url(#gradient3)"
            fillOpacity="0.55"
          />

          <path className="wave wave4"
            d="M 0,700 L 0,825 C 87.86,823.88 175.72,822.76 257,805 C 338.27,787.23 412.96,752.81 496,725 C 579.03,697.18 670.40,675.96 738,666 C 805.59,656.03 849.43,657.31 932,646 C 1014.56,634.68 1135.87,610.76 1227,576 C 1318.12,541.23 1379.06,495.61 1440,450 L 1440,700 L 0,700 Z"
            fill="url(#gradient4)"
          />
        </svg>
      </div>

      <div className="content">
       
      </div>
    </div>
  );
}

