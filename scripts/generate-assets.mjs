import fs from 'fs';
import path from 'path';

const publicDir = path.resolve(process.cwd(), 'public');
const imagesDir = path.join(publicDir, 'images');
const framesDir = path.join(publicDir, 'frames');

if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir, { recursive: true });
if (!fs.existsSync(framesDir)) fs.mkdirSync(framesDir, { recursive: true });

// Helper to write SVG
function writeSvg(filename, svgContent) {
  fs.writeFileSync(path.join(imagesDir, filename), svgContent.trim());
  console.log(`Saved ${filename}`);
}

// 1. Puppy Promo SVG
writeSvg('puppy-promo.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 350" width="100%" height="100%">
  <defs>
    <radialGradient id="boxGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#E2B880"/>
      <stop offset="100%" stop-color="#B88A52"/>
    </radialGradient>
    <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FBF9F3" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#F3EEE1" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="400" height="350" fill="transparent"/>
  <circle cx="200" cy="180" r="140" fill="url(#goldGlow)"/>
  
  <!-- Cardboard Box -->
  <path d="M90 200 L310 200 L285 310 L115 310 Z" fill="url(#boxGrad)" stroke="#8C6335" stroke-width="3"/>
  <path d="M70 190 L90 200 L115 310 L50 250 Z" fill="#9E7441"/>
  <path d="M330 190 L310 200 L285 310 L350 250 Z" fill="#9E7441"/>
  
  <!-- Paw Logo on Box -->
  <circle cx="200" cy="255" r="14" fill="#2B4A34"/>
  <circle cx="186" cy="235" r="7" fill="#2B4A34"/>
  <circle cx="200" cy="228" r="7" fill="#2B4A34"/>
  <circle cx="214" cy="235" r="7" fill="#2B4A34"/>
  <text x="200" y="288" font-family="sans-serif" font-weight="bold" font-size="14" fill="#2B4A34" text-anchor="middle" letter-spacing="1">LOVE VET</text>

  <!-- Golden Puppy Head -->
  <ellipse cx="200" cy="140" rx="65" ry="60" fill="#E8B068"/>
  <!-- Ears -->
  <path d="M140 105 C 110 110, 110 170, 145 180 Z" fill="#C98B42"/>
  <path d="M260 105 C 290 110, 290 170, 255 180 Z" fill="#C98B42"/>
  <!-- Muzzle -->
  <ellipse cx="200" cy="155" rx="32" ry="24" fill="#F8DFBE"/>
  <ellipse cx="200" cy="145" rx="14" ry="10" fill="#2B2016"/>
  <!-- Eyes -->
  <circle cx="175" cy="125" r="9" fill="#2B2016"/>
  <circle cx="178" cy="122" r="3" fill="#FFFFFF"/>
  <circle cx="225" cy="125" r="9" fill="#2B2016"/>
  <circle cx="228" cy="122" r="3" fill="#FFFFFF"/>
  <!-- Tongue -->
  <path d="M194 165 C 194 185, 206 185, 206 165 Z" fill="#E86B7B"/>
  
  <!-- Paws on box rim -->
  <ellipse cx="145" cy="200" rx="18" ry="12" fill="#E8B068"/>
  <ellipse cx="255" cy="200" rx="18" ry="12" fill="#E8B068"/>
</svg>
`);

// 2. Doctor Aanya Portrait SVG
writeSvg('doctor-aanya.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 700" width="100%" height="100%">
  <defs>
    <linearGradient id="docBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FAF6EE"/>
      <stop offset="100%" stop-color="#E2D8C3"/>
    </linearGradient>
    <linearGradient id="scrubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2B4A34"/>
      <stop offset="100%" stop-color="#1D3424"/>
    </linearGradient>
    <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
      <stop offset="85%" stop-color="#D4A017" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#D4A017" stop-opacity="0"/>
    </radialGradient>
  </defs>
  
  <!-- Background with subtle warm vignette -->
  <rect width="600" height="700" rx="32" fill="url(#docBg)"/>
  <circle cx="300" cy="300" r="240" fill="#F3EEE1"/>
  <circle cx="300" cy="300" r="235" fill="none" stroke="#D4A017" stroke-width="4" stroke-dasharray="8 6"/>

  <!-- Doctor Body / Scrub Suit -->
  <path d="M140 700 L170 480 C 180 430, 420 430, 430 480 L460 700 Z" fill="url(#scrubGrad)"/>
  
  <!-- Stethoscope -->
  <path d="M230 440 C 230 550, 270 580, 270 600" fill="none" stroke="#9EA7A0" stroke-width="8" stroke-linecap="round"/>
  <path d="M370 440 C 370 550, 330 580, 330 600" fill="none" stroke="#9EA7A0" stroke-width="8" stroke-linecap="round"/>
  <circle cx="300" cy="620" r="22" fill="#D4A017" stroke="#9EA7A0" stroke-width="6"/>

  <!-- Neck & Face -->
  <rect x="260" y="380" width="80" height="90" rx="10" fill="#E8B595"/>
  <ellipse cx="300" cy="280" rx="105" ry="130" fill="#F4CDB5"/>
  
  <!-- Hair -->
  <path d="M190 280 C 180 140, 420 140, 410 280 C 430 360, 420 440, 390 470 C 360 410, 380 250, 300 230 C 220 250, 240 410, 210 470 C 180 440, 170 360, 190 280 Z" fill="#241B15"/>

  <!-- Facial Features -->
  <!-- Eyebrows -->
  <path d="M240 240 Q 260 230 280 240" fill="none" stroke="#241B15" stroke-width="4" stroke-linecap="round"/>
  <path d="M320 240 Q 340 230 360 240" fill="none" stroke="#241B15" stroke-width="4" stroke-linecap="round"/>
  <!-- Eyes -->
  <circle cx="260" cy="260" r="10" fill="#241B15"/>
  <circle cx="263" cy="257" r="3.5" fill="#FFFFFF"/>
  <circle cx="340" cy="260" r="10" fill="#241B15"/>
  <circle cx="343" cy="257" r="3.5" fill="#FFFFFF"/>
  <!-- Nose -->
  <path d="M296 265 L292 295 L304 295" fill="none" stroke="#C98F71" stroke-width="3" stroke-linecap="round"/>
  <!-- Gentle Smile -->
  <path d="M268 330 Q 300 360 332 330" fill="none" stroke="#A84C4C" stroke-width="4" stroke-linecap="round"/>
  <path d="M272 332 Q 300 350 328 332" fill="#FFFFFF"/>

  <!-- Holding Cute Kitten or Dog silhouette in arm -->
  <ellipse cx="410" cy="530" rx="55" ry="50" fill="#E8B068"/>
  <polygon points="380,480 395,510 370,510" fill="#C98B42"/>
  <polygon points="430,480 445,510 420,510" fill="#C98B42"/>
  <circle cx="400" cy="525" r="4" fill="#2B2016"/>
  <circle cx="425" cy="525" r="4" fill="#2B2016"/>
  <ellipse cx="412" cy="535" rx="5" ry="3" fill="#2B2016"/>

  <!-- Badge in corner -->
  <g transform="translate(420, 60)">
    <circle cx="50" cy="50" r="46" fill="#D4A017" stroke="#FBF9F3" stroke-width="4"/>
    <text x="50" y="44" font-family="sans-serif" font-weight="900" font-size="20" fill="#1E2A22" text-anchor="middle">12+</text>
    <text x="50" y="62" font-family="sans-serif" font-weight="bold" font-size="10" fill="#1E2A22" text-anchor="middle" letter-spacing="1">YEARS EXP</text>
  </g>
</svg>
`);

// 3. Products
// Dry Dog Food
writeSvg('prod-food.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%">
  <rect width="300" height="300" fill="transparent"/>
  <!-- Bag Body -->
  <path d="M80 60 L220 60 L240 260 L60 260 Z" fill="#F8F4EB" stroke="#D1C3AB" stroke-width="3"/>
  <path d="M80 60 L100 40 L200 40 L220 60 Z" fill="#E5D9C4" stroke="#D1C3AB" stroke-width="3"/>
  
  <!-- Green Banner on Bag -->
  <rect x="70" y="110" width="160" height="70" fill="#2B4A34" rx="4"/>
  <text x="150" y="138" font-family="serif" font-weight="bold" font-size="16" fill="#F0D98C" text-anchor="middle">PawVita</text>
  <text x="150" y="160" font-family="sans-serif" font-weight="bold" font-size="11" fill="#FFFFFF" text-anchor="middle" letter-spacing="1">CHICKEN & RICE</text>
  
  <!-- Cute Dog Illustration on Bag -->
  <circle cx="150" cy="210" r="28" fill="#E8B068"/>
  <circle cx="140" cy="205" r="3.5" fill="#2B2016"/>
  <circle cx="160" cy="205" r="3.5" fill="#2B2016"/>
  <ellipse cx="150" cy="215" rx="5" ry="3.5" fill="#2B2016"/>

  <!-- Food Bowl in foreground -->
  <ellipse cx="80" cy="265" rx="45" ry="18" fill="#3D6549"/>
  <ellipse cx="80" cy="260" rx="38" ry="12" fill="#7A5229"/>
</svg>
`);

// Squeaky Toy
writeSvg('prod-toy.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%">
  <rect width="300" height="300" fill="transparent"/>
  <!-- Teddy Bear -->
  <ellipse cx="150" cy="180" rx="60" ry="70" fill="#C98B42"/>
  <ellipse cx="150" cy="190" rx="38" ry="48" fill="#E5B26E"/>
  
  <!-- Head -->
  <circle cx="150" cy="100" r="50" fill="#C98B42"/>
  <!-- Ears -->
  <circle cx="105" cy="65" r="20" fill="#C98B42"/>
  <circle cx="105" cy="65" r="12" fill="#E5B26E"/>
  <circle cx="195" cy="65" r="20" fill="#C98B42"/>
  <circle cx="195" cy="65" r="12" fill="#E5B26E"/>

  <!-- Face -->
  <ellipse cx="150" cy="115" rx="22" ry="16" fill="#F8DFBE"/>
  <ellipse cx="150" cy="108" rx="8" ry="6" fill="#2B2016"/>
  <circle cx="132" cy="95" r="5" fill="#2B2016"/>
  <circle cx="168" cy="95" r="5" fill="#2B2016"/>
  <path d="M142 120 Q 150 128 158 120" fill="none" stroke="#2B2016" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Paws -->
  <circle cx="85" cy="170" r="20" fill="#C98B42"/>
  <circle cx="215" cy="170" r="20" fill="#C98B42"/>
  <ellipse cx="110" cy="250" rx="24" ry="18" fill="#C98B42"/>
  <ellipse cx="190" cy="250" rx="24" ry="18" fill="#C98B42"/>
</svg>
`);

// Shampoo Bottle
writeSvg('prod-shampoo.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%">
  <rect width="300" height="300" fill="transparent"/>
  <!-- Pump Dispenser -->
  <rect x="142" y="30" width="16" height="30" fill="#2B2016"/>
  <path d="M135 30 L165 30 L165 20 L120 20 Z" fill="#2B2016"/>
  <rect x="135" y="60" width="30" height="15" fill="#C98B42"/>

  <!-- Bottle Body -->
  <rect x="110" y="75" width="80" height="180" rx="24" fill="#F8F5EE" stroke="#DDD2C1" stroke-width="3"/>
  
  <!-- Label -->
  <rect x="118" y="110" width="64" height="110" rx="6" fill="#FAF7F0" stroke="#E2D6C0" stroke-width="1.5"/>
  <text x="150" y="130" font-family="serif" font-weight="bold" font-size="10" fill="#2B4A34" text-anchor="middle">PawVita</text>
  <text x="150" y="148" font-family="sans-serif" font-weight="bold" font-size="8" fill="#D4A017" text-anchor="middle" letter-spacing="1">OATMEAL</text>
  <text x="150" y="160" font-family="sans-serif" font-size="7" fill="#6B6357" text-anchor="middle">Pet Shampoo</text>
  
  <circle cx="150" cy="190" r="14" fill="#E8B068"/>
  <circle cx="145" cy="188" r="2" fill="#2B2016"/>
  <circle cx="155" cy="188" r="2" fill="#2B2016"/>
</svg>
`);

// Pet Bed
writeSvg('prod-bed.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%">
  <rect width="300" height="300" fill="transparent"/>
  <!-- Outer Ring -->
  <ellipse cx="150" cy="170" rx="120" ry="65" fill="#2B4A34"/>
  <ellipse cx="150" cy="165" rx="120" ry="60" fill="#365C41"/>
  <!-- Inner Cushion -->
  <ellipse cx="150" cy="170" rx="85" ry="42" fill="#243E2C"/>
  <ellipse cx="150" cy="166" rx="80" ry="38" fill="#1D3424"/>
  
  <!-- Quilted Tufting Details -->
  <circle cx="130" cy="164" r="3" fill="#D4A017"/>
  <circle cx="170" cy="164" r="3" fill="#D4A017"/>
  <circle cx="150" cy="176" r="3" fill="#D4A017"/>
  
  <!-- Soft Bone Pillow -->
  <path d="M125 150 C 115 145, 115 135, 125 140 L165 140 C 175 135, 175 145, 165 150 C 175 155, 175 165, 165 160 L125 160 C 115 165, 115 155, 125 150 Z" fill="#F0D98C"/>
</svg>
`);

// 4. Testimonials Avatars
writeSvg('avatar-1.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <circle cx="60" cy="60" r="58" fill="#EBE4D5" stroke="#D4A017" stroke-width="3"/>
  <!-- Woman with Golden Pup -->
  <circle cx="50" cy="45" r="22" fill="#F4CDB5"/>
  <path d="M25 45 C 25 20, 75 20, 75 45 C 75 60, 65 75, 50 75 C 35 75, 25 60, 25 45 Z" fill="#6A3B22"/>
  <path d="M20 110 C 20 85, 80 85, 80 110 Z" fill="#2B4A34"/>
  <!-- Pup in arm -->
  <circle cx="80" cy="75" r="18" fill="#E8B068"/>
  <circle cx="75" cy="72" r="2" fill="#2B2016"/>
  <circle cx="85" cy="72" r="2" fill="#2B2016"/>
  <ellipse cx="80" cy="78" rx="3" ry="2" fill="#2B2016"/>
</svg>
`);

writeSvg('avatar-2.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <circle cx="60" cy="60" r="58" fill="#EBE4D5" stroke="#2B4A34" stroke-width="3"/>
  <!-- Man with Cat -->
  <circle cx="55" cy="45" r="22" fill="#E8B595"/>
  <path d="M35 25 Q 55 15 75 25 Q 75 35 35 35 Z" fill="#241B15"/>
  <path d="M15 110 C 15 85, 95 85, 95 110 Z" fill="#3D6549"/>
  <!-- Cat in arms -->
  <polygon points="75,60 82,75 68,75" fill="#D1D5DB"/>
  <polygon points="95,60 102,75 88,75" fill="#D1D5DB"/>
  <circle cx="85" cy="78" r="16" fill="#E5E7EB"/>
  <circle cx="80" cy="76" r="2" fill="#2B2016"/>
  <circle cx="90" cy="76" r="2" fill="#2B2016"/>
</svg>
`);

writeSvg('avatar-3.svg', `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
  <circle cx="60" cy="60" r="58" fill="#EBE4D5" stroke="#D4A017" stroke-width="3"/>
  <!-- Lady with Beagle -->
  <circle cx="55" cy="45" r="22" fill="#F8DFBE"/>
  <path d="M30 40 C 30 18, 80 18, 80 40 C 85 70, 75 90, 55 85 Z" fill="#8B4513"/>
  <path d="M15 110 C 15 85, 95 85, 95 110 Z" fill="#D4A017"/>
  <!-- Beagle -->
  <circle cx="82" cy="75" r="16" fill="#F8F5EE"/>
  <path d="M70 65 C 65 75, 68 85, 74 80 Z" fill="#8B4513"/>
  <circle cx="80" cy="73" r="2" fill="#2B2016"/>
  <ellipse cx="84" cy="77" rx="3" ry="2" fill="#2B2016"/>
</svg>
`);

console.log('All vector assets created successfully!');
