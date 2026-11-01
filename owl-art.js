// owl-art.js — ภาพนกฮูก (สายปัญญา): ไข่, ร่าง 1-2, ร่าง 3, ร่าง 4 ×3 นิสัย
// ต้องโหลดก่อนสคริปต์หลักใน creature-tycoon.html และวางไว้โฟลเดอร์เดียวกัน
// ให้ owlSrc(key, seed) -> data URI (สีตัวสุ่มจาก seed ในชุดสีที่คัดไว้)
const OWL_ART={
  egg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<style>
.egg{transform-origin:100px 186px;animation:wob 3.2s ease-in-out infinite}
@keyframes wob{0%,60%,100%{transform:rotate(0deg)}70%{transform:rotate(-4deg)}80%{transform:rotate(4deg)}90%{transform:rotate(-2deg)}}
.tw{transform-box:fill-box;transform-origin:center;animation:tw 2s ease-in-out infinite}
.t2{animation-delay:-1s}
@keyframes tw{0%,100%{opacity:.3;transform:scale(.6)}50%{opacity:1;transform:scale(1)}}
</style>
<ellipse cx="100" cy="190" rx="42" ry="6" fill="#000" opacity=".12"/>
<g class="egg">
<path d="M100 28C138 28 162 95 162 130C162 168 136 188 100 188C64 188 38 168 38 130C38 95 62 28 100 28Z" fill="#fff6e6" stroke="#e8cfa8" stroke-width="3"/>
<ellipse cx="72" cy="62" rx="7" ry="13" fill="#fff" opacity=".8" transform="rotate(25 72 62)"/>
<g fill="#ffd6a5"><circle cx="82" cy="86" r="9"/><circle cx="130" cy="100" r="12"/><circle cx="62" cy="122" r="7"/><circle cx="128" cy="164" r="8"/><circle cx="72" cy="168" r="6"/></g>
<path d="M58 116L72 106L84 118L100 104L114 118L128 106L142 116" fill="none" stroke="#c9a77a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M80 140q6 5 12 0M108 140q6 5 12 0" stroke="#5a4636" stroke-width="3" fill="none" stroke-linecap="round"/>
<ellipse cx="72" cy="150" rx="7" ry="4" fill="#ff9fb0" opacity=".6"/><ellipse cx="128" cy="150" rx="7" ry="4" fill="#ff9fb0" opacity=".6"/>
</g>
<g fill="#ffd166"><g transform="translate(160 50)"><path class="tw" d="M0-9L2.5-2.5L9 0L2.5 2.5L0 9L-2.5 2.5L-9 0L-2.5-2.5Z"/></g><g transform="translate(36 80)"><path class="tw t2" d="M0-7L2-2L7 0L2 2L0 7L-2 2L-7 0L-2-2Z"/></g></g>
  </svg>`,
  s1:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<style>
:root{--body:#c9b3e6;--belly:#f4edfc}
.b{fill:var(--body)}.l{fill:var(--belly)}
.bob{animation:bob 3.2s ease-in-out infinite}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
.e{transform-box:fill-box;transform-origin:center;animation:bl 5s infinite}
@keyframes bl{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}
</style>
<ellipse cx="100" cy="193" rx="46" ry="5" fill="#000" opacity=".12"/>
<g class="bob">
<path class="b" d="M92 66Q93 46 101 56Q106 42 111 64Z"/>
<circle class="b" cx="100" cy="116" r="56"/>
<ellipse class="b" cx="48" cy="124" rx="10" ry="17" transform="rotate(20 48 124)" stroke="#000" stroke-opacity=".1" stroke-width="2"/>
<ellipse class="b" cx="152" cy="124" rx="10" ry="17" transform="rotate(-20 152 124)" stroke="#000" stroke-opacity=".1" stroke-width="2"/>
<circle class="l" cx="79" cy="106" r="23"/><circle class="l" cx="121" cy="106" r="23"/>
<g class="e"><circle cx="79" cy="106" r="16" fill="#2d2438"/><circle cx="74" cy="100" r="5.5" fill="#fff"/><circle cx="84" cy="111" r="2.5" fill="#fff"/></g>
<g class="e"><circle cx="121" cy="106" r="16" fill="#2d2438"/><circle cx="116" cy="100" r="5.5" fill="#fff"/><circle cx="126" cy="111" r="2.5" fill="#fff"/></g>
<path d="M95 122H105L100 129Z" fill="#f6a945" stroke="#f6a945" stroke-width="3" stroke-linejoin="round"/>
<ellipse cx="60" cy="128" rx="8" ry="5" fill="#ff8fa3" opacity=".6"/><ellipse cx="140" cy="128" rx="8" ry="5" fill="#ff8fa3" opacity=".6"/>
<path d="M46 142l11-10 11 11 11-12 11 12 10-12 11 12 11-12 11 11 11-10 10 10C156 172 134 190 100 190S44 172 46 142Z" fill="#fff6e6" stroke="#e8cfa8" stroke-width="3" stroke-linejoin="round"/>
<circle cx="72" cy="166" r="5" fill="#ffd6a5"/><circle cx="128" cy="170" r="4" fill="#ffd6a5"/><circle cx="104" cy="160" r="3" fill="#ffd6a5"/>
</g>
  </svg>`,
  s2:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<style>
:root{--body:#a98bd6;--belly:#efe6fb}
.b{fill:var(--body)}.l{fill:var(--belly)}
.bob{animation:bob 3s ease-in-out infinite}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
.e{transform-box:fill-box;transform-origin:center;animation:bl 5s infinite}
@keyframes bl{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}
.wl{transform-origin:46px 110px;animation:wl 3s ease-in-out infinite}
.wr{transform-origin:154px 110px;animation:wr 3s ease-in-out infinite}
@keyframes wl{0%,100%{transform:rotate(0deg)}50%{transform:rotate(5deg)}}
@keyframes wr{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-5deg)}}
</style>
<ellipse cx="100" cy="188" rx="44" ry="6" fill="#000" opacity=".12"/>
<g class="bob">
<path class="b" d="M56 70L48 38L84 54ZM144 70L152 38L116 54Z"/>
<path class="b" d="M42 115C42 70 62 48 100 48C138 48 158 70 158 115C158 158 134 180 100 180C66 180 42 158 42 115Z"/>
<ellipse class="l" cx="100" cy="142" rx="36" ry="34"/>
<path d="M86 135l6 5 6-5M102 135l6 5 6-5M94 150l6 5 6-5" fill="none" stroke="#000" stroke-opacity=".15" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path class="b wl" d="M46 108C30 122 32 152 54 166C58 146 58 124 46 108Z" stroke="#000" stroke-opacity=".12" stroke-width="2"/>
<path class="b wr" d="M154 108C170 122 168 152 146 166C142 146 142 124 154 108Z" stroke="#000" stroke-opacity=".12" stroke-width="2"/>
<circle class="l" cx="78" cy="98" r="23"/><circle class="l" cx="122" cy="98" r="23"/>
<g class="e"><circle cx="78" cy="98" r="14" fill="#2d2438"/><circle cx="74" cy="93" r="4.5" fill="#fff"/><circle cx="82" cy="102" r="2" fill="#fff"/></g>
<g class="e"><circle cx="122" cy="98" r="14" fill="#2d2438"/><circle cx="118" cy="93" r="4.5" fill="#fff"/><circle cx="126" cy="102" r="2" fill="#fff"/></g>
<path d="M94 113H106L100 121Z" fill="#f6a945" stroke="#f6a945" stroke-width="3" stroke-linejoin="round"/>
<ellipse cx="60" cy="118" rx="8" ry="5" fill="#ff8fa3" opacity=".55"/><ellipse cx="140" cy="118" rx="8" ry="5" fill="#ff8fa3" opacity=".55"/>
<g fill="#f6a945"><ellipse cx="86" cy="180" rx="9" ry="5"/><ellipse cx="114" cy="180" rx="9" ry="5"/></g>
</g>
  </svg>`,
  s3_int:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<style>
:root{--body:#a98bd6;--belly:#efe6fb}
.b{fill:var(--body)}.l{fill:var(--belly)}
.bob{animation:bob 3.4s ease-in-out infinite}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
.e{transform-box:fill-box;transform-origin:center;animation:bl 5s infinite}
@keyframes bl{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}
.bu{animation:bu 2.4s ease-in-out infinite alternate}
@keyframes bu{from{transform:translateY(2px)}to{transform:translateY(-5px)}}
.gl{transform-box:fill-box;transform-origin:center;animation:gl 1.2s ease-in-out infinite alternate}
@keyframes gl{from{transform:scale(.8);opacity:.2}to{transform:scale(1.15);opacity:.6}}
</style>
<ellipse cx="100" cy="188" rx="46" ry="6" fill="#000" opacity=".12"/>
<g class="bob">
<path class="b" d="M56 72L46 42L82 56ZM144 72L154 42L118 56Z"/>
<path class="b" d="M40 118C40 72 62 50 100 50C138 50 160 72 160 118C160 160 136 182 100 182C64 182 40 160 40 118Z"/>
<circle class="l" cx="78" cy="104" r="22"/><circle class="l" cx="122" cy="104" r="22"/>
<g class="e"><circle cx="78" cy="104" r="13" fill="#2d2438"/><circle cx="74" cy="99" r="4" fill="#fff"/><circle cx="82" cy="108" r="1.8" fill="#fff"/></g>
<g class="e"><circle cx="122" cy="104" r="13" fill="#2d2438"/><circle cx="118" cy="99" r="4" fill="#fff"/><circle cx="126" cy="108" r="1.8" fill="#fff"/></g>
<circle cx="122" cy="104" r="17" fill="#fff" fill-opacity=".15" stroke="#d4a017" stroke-width="3"/>
<path d="M138 112q10 20-2 38" fill="none" stroke="#d4a017" stroke-width="1.5" stroke-dasharray="2 3"/>
<path d="M94 118H106L100 126Z" fill="#f6a945" stroke="#f6a945" stroke-width="3" stroke-linejoin="round"/>
<ellipse cx="60" cy="124" rx="7" ry="4.5" fill="#ff8fa3" opacity=".55"/><ellipse cx="140" cy="124" rx="7" ry="4.5" fill="#ff8fa3" opacity=".55"/>
<path d="M64 142L100 150L136 142L136 170L100 178L64 170Z" fill="#4d7cfe"/>
<path d="M68 138L100 145L132 138L132 165L100 172L68 165Z" fill="#fff" stroke="#c9b9a6" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M100 145V172M76 148l16 3M76 155l16 3M108 151l16-3M108 158l16-3" stroke="#c9b9a6" stroke-width="2" stroke-linecap="round"/>
<ellipse class="b" cx="64" cy="154" rx="9" ry="13" stroke="#000" stroke-opacity=".12" stroke-width="2"/>
<ellipse class="b" cx="136" cy="154" rx="9" ry="13" stroke="#000" stroke-opacity=".12" stroke-width="2"/>
<g fill="#f6a945"><ellipse cx="86" cy="182" rx="9" ry="5"/><ellipse cx="114" cy="182" rx="9" ry="5"/></g>
</g>
<g transform="translate(160 40)"><g class="bu"><circle class="gl" r="17" fill="#ffe680"/><circle cy="-2" r="9" fill="#ffd43b"/><path d="M-3-4l3 4 3-4" stroke="#f08c00" stroke-width="1.5" fill="none"/><rect x="-4.5" y="6" width="9" height="7" rx="2" fill="#adb5bd"/></g></g>
  </svg>`,
  s4_int_fierce:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<defs>
<radialGradient id="og" cx=".35" cy=".35"><stop offset="0" stop-color="#f3d9ff"/><stop offset=".5" stop-color="#c77dff"/><stop offset="1" stop-color="#6a1b9a"/></radialGradient>
<filter id="gw" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<style>
.mc{transform-origin:100px 120px;animation:mc 14s linear infinite}
@keyframes mc{to{transform:rotate(360deg)}}
.mp{animation:mp 2.4s ease-in-out infinite alternate}
@keyframes mp{from{opacity:.35}to{opacity:.85}}
.bob{animation:bob 3s ease-in-out infinite}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
.e{transform-box:fill-box;transform-origin:center;animation:bl 5s infinite}
@keyframes bl{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}
.hat{transform-origin:100px 66px;animation:hat 3s ease-in-out infinite alternate}
@keyframes hat{from{transform:rotate(-3deg)}to{transform:rotate(3deg)}}
.orb{animation:ob 2.2s ease-in-out infinite alternate}
@keyframes ob{from{transform:translateY(3px)}to{transform:translateY(-7px)}}
.ha{transform-box:fill-box;transform-origin:center;animation:ha 1.1s ease-in-out infinite alternate}
@keyframes ha{from{transform:scale(.85);opacity:.35}to{transform:scale(1.2);opacity:.8}}
</style>
<g class="mp"><g class="mc" fill="none" stroke="#b388ff" stroke-width="2">
<circle cx="100" cy="120" r="86"/><circle cx="100" cy="120" r="76" stroke-dasharray="4 7"/>
<path d="M100 44L165.8 158H34.2ZM100 196L34.2 82H165.8Z" stroke-width="1.5"/>
<g fill="#b388ff" stroke="none"><circle cx="100" cy="34" r="4"/><circle cx="174.5" cy="77" r="4"/><circle cx="174.5" cy="163" r="4"/><circle cx="25.5" cy="163" r="4"/><circle cx="25.5" cy="77" r="4"/></g>
</g></g>
<ellipse cx="100" cy="190" rx="48" ry="6" fill="#000" opacity=".15"/>
<g class="bob">
<path d="M38 126C38 80 64 58 100 58C136 58 162 80 162 126C162 166 136 186 100 186C64 186 38 166 38 126Z" fill="#2e2648"/>
<ellipse cx="100" cy="156" rx="36" ry="26" fill="#4b3f72"/>
<g fill="#b388ff"><circle cx="88" cy="152" r="1.8"/><circle cx="108" cy="160" r="1.5"/><circle cx="100" cy="170" r="1.8"/><circle cx="116" cy="148" r="1.2"/></g>
<path d="M40 118C24 132 26 160 46 172C52 154 54 134 40 118Z" fill="#231c38"/>
<path d="M160 116C178 112 184 130 176 142C170 136 164 132 156 132Z" fill="#231c38"/>
<path d="M50 136L66 112L100 132L134 112L150 136L100 146Z" fill="#6a1b9a" stroke="#3c0d5c" stroke-width="2" stroke-linejoin="round"/>
<circle cx="80" cy="106" r="21" fill="#3d3360"/><circle cx="120" cy="106" r="21" fill="#3d3360"/>
<g filter="url(#gw)">
<g class="e"><circle cx="80" cy="108" r="12" fill="#e0b0ff"/><ellipse cx="80" cy="108" rx="3" ry="8" fill="#2a0d45"/></g>
<g class="e"><circle cx="120" cy="108" r="12" fill="#e0b0ff"/><ellipse cx="120" cy="108" rx="3" ry="8" fill="#2a0d45"/></g>
</g>
<path d="M58 90L98 102L98 96L62 82ZM142 90L102 102L102 96L138 82Z" fill="#1d1630"/>
<path d="M94 120H106L100 128Z" fill="#c9a227" stroke="#c9a227" stroke-width="3" stroke-linejoin="round"/>
<ellipse cx="64" cy="124" rx="7" ry="4" fill="#ff8fd8" opacity=".3"/><ellipse cx="136" cy="124" rx="7" ry="4" fill="#ff8fd8" opacity=".3"/>
<g class="hat">
<ellipse cx="100" cy="66" rx="62" ry="11" fill="#1d1630"/>
<path d="M64 64C72 42 86 18 124 6C114 22 124 42 136 64Z" fill="#1d1630"/>
<path d="M68 54Q100 62 132 54L134 62Q100 70 66 62Z" fill="#8a5cf6"/>
<path d="M100 54l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1Z" fill="#ffe14d"/>
</g>
<g class="orb"><circle class="ha" cx="172" cy="112" r="20" fill="#c77dff"/><circle cx="172" cy="112" r="13" fill="url(#og)"/><circle cx="168" cy="108" r="3.5" fill="#fff" opacity=".8"/></g>
<g fill="#c9a227"><ellipse cx="84" cy="186" rx="10" ry="5"/><ellipse cx="116" cy="186" rx="10" ry="5"/></g>
</g>
  </svg>`,
  s4_int_kind:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<style>
.bob{animation:bob 3s ease-in-out infinite}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
.e{transform-box:fill-box;transform-origin:center;animation:bl 5s infinite}
@keyframes bl{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}
.ts{transform-origin:136px 46px;animation:ts 1.8s ease-in-out infinite alternate}
@keyframes ts{from{transform:rotate(-14deg)}to{transform:rotate(14deg)}}
.st{transform-box:fill-box;transform-origin:center;animation:st 2.4s ease-in-out infinite}
.s2{animation-delay:-.6s}.s3{animation-delay:-1.2s}.s4{animation-delay:-1.8s}
@keyframes st{0%,100%{transform:scale(.5) rotate(0deg);opacity:.3}50%{transform:scale(1.1) rotate(45deg);opacity:1}}
</style>
<g fill="#ffd166">
<g transform="translate(26 74)"><path class="st" d="M0-9L2.5-2.5L9 0L2.5 2.5L0 9L-2.5 2.5L-9 0L-2.5-2.5Z"/></g>
<g transform="translate(176 84)"><path class="st s2" d="M0-9L2.5-2.5L9 0L2.5 2.5L0 9L-2.5 2.5L-9 0L-2.5-2.5Z"/></g>
<g transform="translate(20 142)"><path class="st s3" d="M0-7L2-2L7 0L2 2L0 7L-2 2L-7 0L-2-2Z"/></g>
<g transform="translate(180 146)"><path class="st s4" d="M0-7L2-2L7 0L2 2L0 7L-2 2L-7 0L-2-2Z"/></g>
</g>
<ellipse cx="100" cy="190" rx="48" ry="6" fill="#000" opacity=".12"/>
<g class="bob">
<path d="M56 82L50 60L74 68ZM144 82L150 60L126 68Z" fill="#d4a373"/>
<path d="M40 124C40 80 64 60 100 60C136 60 160 80 160 124C160 164 136 184 100 184C64 184 40 164 40 124Z" fill="#d4a373"/>
<ellipse cx="100" cy="156" rx="36" ry="26" fill="#fefae0"/>
<circle cx="80" cy="110" r="22" fill="#f3d5b5"/><circle cx="120" cy="110" r="22" fill="#f3d5b5"/>
<g class="e"><circle cx="80" cy="111" r="11" fill="#3b2a20"/><circle cx="77" cy="107" r="3.5" fill="#fff"/><circle cx="83" cy="114" r="1.6" fill="#fff"/></g>
<g class="e"><circle cx="120" cy="111" r="11" fill="#3b2a20"/><circle cx="117" cy="107" r="3.5" fill="#fff"/><circle cx="123" cy="114" r="1.6" fill="#fff"/></g>
<g fill="none" stroke="#6b4f3a" stroke-width="4" stroke-linecap="round"><circle cx="80" cy="110" r="19"/><circle cx="120" cy="110" r="19"/><path d="M98 108Q100 104 102 108M61 106L48 100M139 106L152 100"/></g>
<path d="M70 100a12 12 0 0 1 8-4M110 100a12 12 0 0 1 8-4" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none" opacity=".8"/>
<path d="M94 124H106L100 132Z" fill="#f4a340" stroke="#f4a340" stroke-width="3" stroke-linejoin="round"/>
<ellipse cx="58" cy="132" rx="8" ry="5" fill="#ff8fa3" opacity=".6"/><ellipse cx="142" cy="132" rx="8" ry="5" fill="#ff8fa3" opacity=".6"/>
<path d="M62 146L100 154L138 146L138 176L100 184L62 176Z" fill="#e76f51"/>
<path d="M66 142L100 149L134 142L134 170L100 177L66 170Z" fill="#fff" stroke="#d6c7b0" stroke-width="1.5" stroke-linejoin="round"/>
<path d="M100 149V177M74 152l18 3M74 159l18 3M74 166l14 2" stroke="#d6c7b0" stroke-width="2" stroke-linecap="round"/>
<path d="M117 163C111 158 113 152 117 155C121 152 123 158 117 163Z" fill="#ff8fab"/>
<ellipse cx="60" cy="160" rx="10" ry="14" fill="#b98a5e" transform="rotate(-20 60 160)"/>
<ellipse cx="140" cy="160" rx="10" ry="14" fill="#b98a5e" transform="rotate(20 140 160)"/>
<path d="M70 70V56H130V70Q100 80 70 70Z" fill="#3d405b"/>
<path d="M100 32L154 46L100 60L46 46Z" fill="#2b2d42"/>
<path d="M100 46H136" stroke="#ffd166" stroke-width="2.5"/>
<circle cx="100" cy="46" r="3.5" fill="#ffd166"/>
<g class="ts"><path d="M136 46V70" stroke="#ffd166" stroke-width="2.5"/><path d="M131 70H141L143 84H129Z" fill="#ffd166"/></g>
<g fill="#f4a340"><ellipse cx="84" cy="185" rx="9" ry="5"/><ellipse cx="116" cy="185" rx="9" ry="5"/></g>
</g>
  </svg>`,
  s4_int_neutral:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<defs>
<radialGradient id="bg"><stop offset="0" stop-color="#2d3f7a"/><stop offset="1" stop-color="#141c3d"/></radialGradient>
<filter id="gw" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<style>
.lv{animation:lv 3.6s ease-in-out infinite}
@keyframes lv{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.sh{transform-box:fill-box;transform-origin:center;animation:sh 3.6s ease-in-out infinite}
@keyframes sh{0%,100%{transform:scale(1);opacity:.35}50%{transform:scale(.8);opacity:.18}}
.pl{transform-origin:100px 112px;animation:pl 9s linear infinite}
@keyframes pl{to{transform:rotate(360deg)}}
.tw{animation:tw 2.4s ease-in-out infinite}.t2{animation-delay:-.8s}.t3{animation-delay:-1.6s}
@keyframes tw{0%,100%{opacity:.25}50%{opacity:1}}
.mn{animation:mn 2.4s ease-in-out infinite alternate}
@keyframes mn{from{opacity:.7}to{opacity:1}}
</style>
<circle cx="100" cy="104" r="94" fill="url(#bg)"/>
<path d="M30 60L50 44L66 56M150 40L168 58L160 78" fill="none" stroke="#cfd8ff" stroke-width="1" opacity=".4"/>
<g fill="#fff"><circle class="tw" cx="30" cy="60" r="2"/><circle class="tw t2" cx="50" cy="44" r="2.5"/><circle class="tw t3" cx="66" cy="56" r="1.8"/><circle class="tw t2" cx="150" cy="40" r="2"/><circle class="tw" cx="168" cy="58" r="2.5"/><circle class="tw t3" cx="160" cy="78" r="1.8"/><circle class="tw t2" cx="28" cy="130" r="1.5"/><circle class="tw" cx="176" cy="122" r="1.5"/><circle class="tw t3" cx="100" cy="24" r="1.5"/></g>
<g class="pl"><g transform="translate(182 112)"><circle r="7" fill="#ffb4a2"/><ellipse rx="12" ry="3.5" fill="none" stroke="#ffe8a3" stroke-width="2" transform="rotate(-20)"/></g></g>
<ellipse class="sh" cx="100" cy="192" rx="40" ry="4" fill="#000"/>
<g class="lv">
<ellipse cx="100" cy="176" rx="54" ry="13" fill="#8e7dbe"/><ellipse cx="100" cy="172" rx="48" ry="9" fill="#a99ad6"/>
<path d="M48 176l-4 8M152 176l4 8" stroke="#ffe8a3" stroke-width="3" stroke-linecap="round"/>
<path d="M62 78Q52 54 78 64ZM138 78Q148 54 122 64Z" fill="#5b7bd5"/>
<path d="M48 120C48 80 70 60 100 60C130 60 152 80 152 120C152 158 130 174 100 174C70 174 48 158 48 120Z" fill="#5b7bd5"/>
<ellipse cx="100" cy="146" rx="34" ry="24" fill="#dfe6ff"/>
<path d="M56 112C56 140 76 158 98 154C92 138 76 120 56 112ZM144 112C144 140 124 158 102 154C108 138 124 120 144 112Z" fill="#4865b8"/>
<circle cx="80" cy="104" r="21" fill="#8aa2e8"/><circle cx="120" cy="104" r="21" fill="#8aa2e8"/>
<path d="M68 106q12 7 24 0M108 106q12 7 24 0" fill="none" stroke="#1b2550" stroke-width="4" stroke-linecap="round"/>
<path d="M95 118H105L100 125Z" fill="#ffd27a" stroke="#ffd27a" stroke-width="3" stroke-linejoin="round"/>
<ellipse cx="64" cy="120" rx="7" ry="4" fill="#ff9fc0" opacity=".55"/><ellipse cx="136" cy="120" rx="7" ry="4" fill="#ff9fc0" opacity=".55"/>
<circle class="mn" cx="100" cy="74" r="9" fill="#ffe8a3" filter="url(#gw)"/>
<circle cx="104" cy="71" r="8" fill="#5b7bd5"/>
</g>
  </svg>`
};

// --- Owl art (สายปัญญา) : ไข่/ร่าง1/ร่าง2 ใช้ร่วมทุกสาย, ร่าง 3-4 เฉพาะนกฮูก ---
const OWL_PAL=[268,205,150,25,340,48,175,5]; // โทนสีพาสเทลที่คัดแล้ว สุ่มจาก seed ของไข่ (คงที่ตลอดชีวิต)
const OWL_CACHE={};
function owlHue(seed){let a=((seed||1)*3+5)>>>0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;const r=((t^t>>>14)>>>0)/4294967296;return OWL_PAL[Math.floor(r*OWL_PAL.length)];}
function owlSrc(key,seed){
  const h=owlHue(seed),ck=key+'|'+h; if(OWL_CACHE[ck])return OWL_CACHE[ck];
  let s=OWL_ART[key];
  const deep=key==='s1'?[79,96]:[67,96];
  s=s.replace(/:root\{--body:[^;]+;--belly:[^}]+\}/,`:root{--body:hsl(${h},50%,${deep[0]}%);--belly:hsl(${h},70%,${deep[1]}%)}`);
  if(key==='egg')s=s.replace(/#ffd6a5/g,`hsl(${h},85%,82%)`);
  return OWL_CACHE[ck]='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(s);
}
