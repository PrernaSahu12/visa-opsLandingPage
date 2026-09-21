const fs = require('fs');

let svg = fs.readFileSync('public/images/us-map.svg', 'utf8');

// Remove Alaska, Hawaii, separator1
svg = svg.replace(/<path class="ak"[\s\S]*?<\/path>/, '');
svg = svg.replace(/<path class="hi"[\s\S]*?<\/path>/, '');
svg = svg.replace(/<path class="separator1"[\s\S]*?\/>/, '');

// Replace styles with Fintech dark navy palette + high parabolic arcs styling
const customStyle = `
<style type="text/css">
  .state path { fill: #0b254e; stroke: #ffffff; stroke-width: 1.25; stroke-linejoin: round; transition: all 0.25s ease; }
  .state path:hover { fill: #1747e8; cursor: pointer; filter: brightness(1.25); }
  
  /* State tone variations matching Fintech reference */
  .tx { fill: #0d2e61 !important; }
  .ca { fill: #092044 !important; }
  .ny { fill: #0f346c !important; }
  .fl { fill: #081d3d !important; }
  .ks { fill: #103774 !important; }
  .mo { fill: #0c2b5b !important; }
  .il { fill: #0b2752 !important; }
  .wi { fill: #0d2f63 !important; }
  .wa { fill: #0c2b5b !important; }
  .tn { fill: #0a244d !important; }
  .ga { fill: #092147 !important; }
  .borders { stroke: #ffffff; stroke-width: 1.25; }

  /* Animated Trajectory Dash Lines */
  @keyframes leapDash {
    from { stroke-dashoffset: 48; }
    to { stroke-dashoffset: 0; }
  }
  .leap-arc {
    stroke-dasharray: 6 5;
    animation: leapDash 1.6s linear infinite;
  }
  .leap-arc-fast {
    stroke-dasharray: 5 4;
    animation: leapDash 1.2s linear infinite;
  }
  .leap-arc-slow {
    stroke-dasharray: 7 5;
    animation: leapDash 2.2s linear infinite;
  }
</style>
`;

svg = svg.replace(/<style type="text\/css">[\s\S]*?<\/style>/, customStyle);

// Arcs & 3D Oval Discs matching media_1789810727028.png
const overlay = `
  <defs>
    <!-- Cyan to White to Blue Trajectory Gradient -->
    <linearGradient id="leapGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.95" />
      <stop offset="45%" stop-color="#ffffff" stop-opacity="1" />
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.85" />
    </linearGradient>

    <!-- Warm Amber Glow for Central Hub -->
    <radialGradient id="amberGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="35%" stop-color="#fb923c" stop-opacity="0.9" />
      <stop offset="70%" stop-color="#ea580c" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#ea580c" stop-opacity="0" />
    </radialGradient>

    <!-- Cool Cyan Glow for Receiving Nodes -->
    <radialGradient id="cyanGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="40%" stop-color="#38bdf8" stop-opacity="0.9" />
      <stop offset="80%" stop-color="#0284c7" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0" />
    </radialGradient>

    <!-- Glow Filter for Moving Jumping Spark -->
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="3.5" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- HIGH PARABOLIC JUMP PATHS matching Reference Screenshot -->
    <!-- 1. Central Hub (475, 300) shoots vertically HIGH UP to Wisconsin (580, 160) -->
    <path id="jumpCenterToWi" d="M 475 300 C 475 110, 550 80, 580 160" />
    
    <!-- 2. Wisconsin (580, 160) leaps high across Great Lakes to Upper Michigan (660, 130) -->
    <path id="jumpWiToMi" d="M 580 160 C 600 70, 645 75, 660 130" />

    <!-- 3. Central Hub (475, 300) leaps down into Texas (440, 445) -->
    <path id="jumpCenterToTx" d="M 475 300 C 430 330, 420 395, 440 445" />

    <!-- 4. Central Hub (475, 300) high parabolic leap to Tennessee (670, 345) -->
    <path id="jumpCenterToTn" d="M 475 300 C 520 220, 620 260, 670 345" />

    <!-- 5. Tennessee (670, 345) leaps down to Alabama/Georgia (730, 425) -->
    <path id="jumpTnToGa" d="M 670 345 C 710 365, 735 385, 730 425" />

    <!-- 6. Central Hub (475, 300) leaps high westward to Northwest (150, 135) -->
    <path id="jumpCenterToWa" d="M 475 300 C 350 110, 220 80, 150 135" />

    <!-- 7. Alabama/Georgia (730, 425) leaps down into Florida (800, 520) -->
    <path id="jumpGaToFl" d="M 730 425 C 765 445, 790 480, 800 520" />
  </defs>

  <!-- High Parabolic Connected Trajectories -->
  <g class="connecting-arcs" fill="none" stroke="url(#leapGrad)" stroke-width="1.6" opacity="0.88">
    <use href="#jumpCenterToWi" class="leap-arc" />
    <use href="#jumpWiToMi" class="leap-arc-fast" />
    <use href="#jumpCenterToTx" class="leap-arc" />
    <use href="#jumpCenterToTn" class="leap-arc-slow" />
    <use href="#jumpTnToGa" class="leap-arc" />
    <use href="#jumpCenterToWa" class="leap-arc-slow" />
    <use href="#jumpGaToFl" class="leap-arc" />
  </g>

  <!-- LIVE JUMPING PARTICLES LEAPING ALONG THE PARABOLIC ARCS -->
  <g class="jumping-particles">
    <!-- Leap from Center to Wisconsin -->
    <circle r="4" fill="#ffffff" filter="url(#glow)">
      <animateMotion dur="2.0s" repeatCount="indefinite">
        <mpath href="#jumpCenterToWi" />
      </animateMotion>
    </circle>
    <ellipse rx="7" ry="3.5" fill="#38bdf8" fill-opacity="0.8">
      <animateMotion dur="2.0s" repeatCount="indefinite">
        <mpath href="#jumpCenterToWi" />
      </animateMotion>
    </ellipse>

    <!-- Leap from Wisconsin to Michigan -->
    <circle r="3.5" fill="#ffffff" filter="url(#glow)">
      <animateMotion dur="1.5s" repeatCount="indefinite" begin="0.8s">
        <mpath href="#jumpWiToMi" />
      </animateMotion>
    </circle>

    <!-- Leap from Center to Texas -->
    <circle r="4" fill="#ffffff" filter="url(#glow)">
      <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.3s">
        <mpath href="#jumpCenterToTx" />
      </animateMotion>
    </circle>
    <ellipse rx="6" ry="3" fill="#fb923c" fill-opacity="0.8">
      <animateMotion dur="1.8s" repeatCount="indefinite" begin="0.3s">
        <mpath href="#jumpCenterToTx" />
      </animateMotion>
    </ellipse>

    <!-- Leap from Center to Tennessee -->
    <circle r="4" fill="#ffffff" filter="url(#glow)">
      <animateMotion dur="2.3s" repeatCount="indefinite" begin="0.6s">
        <mpath href="#jumpCenterToTn" />
      </animateMotion>
    </circle>
    <ellipse rx="7" ry="3.5" fill="#00e5ff" fill-opacity="0.8">
      <animateMotion dur="2.3s" repeatCount="indefinite" begin="0.6s">
        <mpath href="#jumpCenterToTn" />
      </animateMotion>
    </ellipse>

    <!-- Leap from Tennessee to Georgia -->
    <circle r="3.5" fill="#ffffff" filter="url(#glow)">
      <animateMotion dur="1.6s" repeatCount="indefinite" begin="1.2s">
        <mpath href="#jumpTnToGa" />
      </animateMotion>
    </circle>

    <!-- Leap from Center to Northwest -->
    <circle r="4" fill="#ffffff" filter="url(#glow)">
      <animateMotion dur="2.6s" repeatCount="indefinite" begin="0.9s">
        <mpath href="#jumpCenterToWa" />
      </animateMotion>
    </circle>
    <ellipse rx="7" ry="3.5" fill="#38bdf8" fill-opacity="0.8">
      <animateMotion dur="2.6s" repeatCount="indefinite" begin="0.9s">
        <mpath href="#jumpCenterToWa" />
      </animateMotion>
    </ellipse>

    <!-- Leap to Florida -->
    <circle r="3.5" fill="#ffffff" filter="url(#glow)">
      <animateMotion dur="2.1s" repeatCount="indefinite" begin="1.5s">
        <mpath href="#jumpGaToFl" />
      </animateMotion>
    </circle>
  </g>

  <!-- 3D GLOWING HORIZONTAL OVAL DISCS (Perspective Ground Plates matching reference) -->
  <g class="oval-disc-nodes">
    
    <!-- 1. CENTRAL ORIGIN HUB (Kansas/Missouri): Warm Golden Amber 3D Oval Disc -->
    <g transform="translate(475, 300)">
      <!-- Expanding Horizontal Shockwave Ring -->
      <ellipse rx="6" ry="2.6" fill="none" stroke="#fb923c" stroke-width="1.5">
        <animate attributeName="rx" values="6; 32; 42" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="ry" values="2.6; 13; 17" dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.95; 0.25; 0" dur="2.2s" repeatCount="indefinite" />
      </ellipse>
      <ellipse rx="5" ry="2.2" fill="none" stroke="#ffffff" stroke-width="1.2">
        <animate attributeName="rx" values="5; 20; 28" dur="2.2s" repeatCount="indefinite" begin="0.5s" />
        <animate attributeName="ry" values="2.2; 8.5; 12" dur="2.2s" repeatCount="indefinite" begin="0.5s" />
        <animate attributeName="opacity" values="0.9; 0.2; 0" dur="2.2s" repeatCount="indefinite" begin="0.5s" />
      </ellipse>
      <!-- Base 3D Oval Glow Disc -->
      <ellipse rx="20" ry="8" fill="url(#amberGlow)" filter="url(#glow)" />
      <ellipse rx="13" ry="5.5" fill="#ea580c" fill-opacity="0.85" />
      <ellipse rx="8" ry="3.2" fill="#fb923c" />
      <ellipse rx="4.5" ry="1.8" fill="#ffffff" />
    </g>

    <!-- 2. TEXAS NODE (440, 445): White/Cyan 3D Horizontal Disc -->
    <g transform="translate(440, 445)">
      <ellipse rx="4" ry="1.8" fill="none" stroke="#38bdf8" stroke-width="1.2">
        <animate attributeName="rx" values="4; 22; 30" dur="2.0s" repeatCount="indefinite" begin="0.4s" />
        <animate attributeName="ry" values="1.8; 9; 13" dur="2.0s" repeatCount="indefinite" begin="0.4s" />
        <animate attributeName="opacity" values="0.9; 0.2; 0" dur="2.0s" repeatCount="indefinite" begin="0.4s" />
      </ellipse>
      <ellipse rx="14" ry="5.5" fill="url(#cyanGlow)" filter="url(#glow)" />
      <ellipse rx="9" ry="3.8" fill="#0284c7" fill-opacity="0.8" />
      <ellipse rx="5.5" ry="2.2" fill="#38bdf8" />
      <ellipse rx="3" ry="1.2" fill="#ffffff" />
    </g>

    <!-- 3. TENNESSEE NODE (670, 345): Green/Cyan 3D Horizontal Disc -->
    <g transform="translate(670, 345)">
      <ellipse rx="4" ry="1.8" fill="none" stroke="#34d399" stroke-width="1.2">
        <animate attributeName="rx" values="4; 20; 28" dur="2.3s" repeatCount="indefinite" begin="0.7s" />
        <animate attributeName="ry" values="1.8; 8.5; 12" dur="2.3s" repeatCount="indefinite" begin="0.7s" />
        <animate attributeName="opacity" values="0.9; 0.2; 0" dur="2.3s" repeatCount="indefinite" begin="0.7s" />
      </ellipse>
      <ellipse rx="15" ry="6" fill="#34d399" fill-opacity="0.3" filter="url(#glow)" />
      <ellipse rx="10" ry="4" fill="#059669" fill-opacity="0.85" />
      <ellipse rx="6" ry="2.4" fill="#34d399" />
      <ellipse rx="3" ry="1.2" fill="#ffffff" />
    </g>

    <!-- 4. ALABAMA / GEORGIA (730, 425): White/Cyan 3D Horizontal Disc -->
    <g transform="translate(730, 425)">
      <ellipse rx="4" ry="1.8" fill="none" stroke="#38bdf8" stroke-width="1.2">
        <animate attributeName="rx" values="4; 18; 26" dur="2.1s" repeatCount="indefinite" begin="1.1s" />
        <animate attributeName="ry" values="1.8; 7.5; 11" dur="2.1s" repeatCount="indefinite" begin="1.1s" />
        <animate attributeName="opacity" values="0.85; 0.2; 0" dur="2.1s" repeatCount="indefinite" begin="1.1s" />
      </ellipse>
      <ellipse rx="14" ry="5.5" fill="url(#cyanGlow)" filter="url(#glow)" />
      <ellipse rx="8.5" ry="3.5" fill="#0284c7" fill-opacity="0.8" />
      <ellipse rx="5" ry="2" fill="#38bdf8" />
      <ellipse rx="2.5" ry="1" fill="#ffffff" />
    </g>

    <!-- 5. WISCONSIN / GREAT LAKES (580, 160): Glowing Dome / Disc -->
    <g transform="translate(580, 160)">
      <ellipse rx="4" ry="1.8" fill="none" stroke="#ffffff" stroke-width="1.2">
        <animate attributeName="rx" values="4; 18; 25" dur="1.9s" repeatCount="indefinite" begin="0.2s" />
        <animate attributeName="ry" values="1.8; 7.5; 10.5" dur="1.9s" repeatCount="indefinite" begin="0.2s" />
        <animate attributeName="opacity" values="0.9; 0.2; 0" dur="1.9s" repeatCount="indefinite" begin="0.2s" />
      </ellipse>
      <ellipse rx="13" ry="5.5" fill="url(#cyanGlow)" filter="url(#glow)" />
      <ellipse rx="8" ry="3.2" fill="#38bdf8" />
      <ellipse rx="4" ry="1.6" fill="#ffffff" />
    </g>

    <!-- 6. UPPER MICHIGAN (660, 130): Satellite Oval Disc -->
    <g transform="translate(660, 130)">
      <ellipse rx="9" ry="3.5" fill="url(#cyanGlow)" />
      <ellipse rx="5.5" ry="2.2" fill="#38bdf8" />
      <ellipse rx="2.5" ry="1" fill="#ffffff" />
    </g>

    <!-- 7. NORTHWEST / IDAHO / WASHINGTON (150, 135): White 3D Disc -->
    <g transform="translate(150, 135)">
      <ellipse rx="4" ry="1.8" fill="none" stroke="#38bdf8" stroke-width="1.2">
        <animate attributeName="rx" values="4; 18; 26" dur="2.4s" repeatCount="indefinite" begin="0.8s" />
        <animate attributeName="ry" values="1.8; 7.5; 11" dur="2.4s" repeatCount="indefinite" begin="0.8s" />
        <animate attributeName="opacity" values="0.85; 0.2; 0" dur="2.4s" repeatCount="indefinite" begin="0.8s" />
      </ellipse>
      <ellipse rx="14" ry="5.5" fill="url(#cyanGlow)" filter="url(#glow)" />
      <ellipse rx="8.5" ry="3.5" fill="#0284c7" fill-opacity="0.8" />
      <ellipse rx="5" ry="2" fill="#ffffff" />
    </g>

    <!-- 8. FLORIDA (800, 520): Sub-tropical Coastal Oval Disc -->
    <g transform="translate(800, 520)">
      <ellipse rx="11" ry="4.5" fill="url(#cyanGlow)" />
      <ellipse rx="6" ry="2.5" fill="#38bdf8" />
      <ellipse rx="3" ry="1.2" fill="#ffffff" />
    </g>
  </g>
`;

svg = svg.replace('</svg>', overlay + '</svg>');

// Adjust viewBox to focus cleanly on lower 48 states
svg = svg.replace(/<svg[\s\S]*?>/, '<svg xmlns="http://www.w3.org/2000/svg" viewBox="50 30 870 530" width="100%" height="100%">');

fs.writeFileSync('public/images/us-map-styled.svg', svg);
console.log('Successfully generated high-parabolic jump trajectory + 3D glowing oval discs!');
