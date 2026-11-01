// owl-art.js — ภาพนกฮูก (ชั่วคราวทุกสาย จนกว่าช้าง/กระต่ายจะมา): ไข่, ร่าง 1-2, ร่าง 3 ×3 สาย, ร่าง 4 ×9
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
  s3_str:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<style>
:root{--body:#a98bd6;--belly:#efe6fb}
.b{fill:var(--body)}.l{fill:var(--belly)}
.bob{animation:bob 2.6s ease-in-out infinite}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
.e{transform-box:fill-box;transform-origin:center;animation:bl 5s infinite}
@keyframes bl{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}
.ch{transform-box:fill-box;transform-origin:center;animation:br 2.6s ease-in-out infinite}
@keyframes br{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}
.tl{transform-origin:156px 88px;animation:fl 1.3s ease-in-out infinite alternate}
@keyframes fl{from{transform:rotate(-8deg)}to{transform:rotate(10deg)}}
.tw{transform-box:fill-box;transform-origin:center;animation:tw 1.8s ease-in-out infinite}
@keyframes tw{0%,100%{opacity:.3;transform:scale(.6)}50%{opacity:1;transform:scale(1)}}
</style>
<ellipse cx="100" cy="188" rx="52" ry="6" fill="#000" opacity=".12"/>
<g class="bob">
<path class="b" d="M52 74L44 44L80 58ZM148 74L156 44L120 58Z"/>
<path class="b" d="M34 120C34 72 60 50 100 50C140 50 166 72 166 120C166 162 140 182 100 182C60 182 34 162 34 120Z"/>
<g class="ch"><ellipse class="l" cx="100" cy="146" rx="42" ry="32"/><path d="M100 126v20M82 136q9 6 18 0q9 6 18 0" fill="none" stroke="#000" stroke-opacity=".12" stroke-width="2.5" stroke-linecap="round"/></g>
<path class="b" d="M40 112C20 122 20 154 44 164C52 150 54 128 40 112ZM160 112C180 122 180 154 156 164C148 150 146 128 160 112Z" stroke="#000" stroke-opacity=".12" stroke-width="2"/>
<circle class="l" cx="78" cy="112" r="22"/><circle class="l" cx="122" cy="112" r="22"/>
<path d="M40 82Q100 60 160 82L158 94Q100 74 42 94Z" fill="#e63946"/>
<g class="tl" fill="#e63946"><path d="M156 86C170 78 182 80 192 72C188 86 176 92 158 92Z"/><path d="M156 90C170 92 180 100 190 102C178 108 166 102 156 94Z"/></g>
<circle cx="157" cy="88" r="6" fill="#c1121f"/>
<g class="e"><circle cx="78" cy="113" r="13" fill="#2d2438"/><circle cx="74" cy="109" r="4" fill="#fff"/></g>
<g class="e"><circle cx="122" cy="113" r="13" fill="#2d2438"/><circle cx="118" cy="109" r="4" fill="#fff"/></g>
<path d="M64 96L88 102M136 96L112 102" stroke="#3a2d2d" stroke-width="5" stroke-linecap="round"/>
<path d="M94 126H106L100 134Z" fill="#f6a945" stroke="#f6a945" stroke-width="3" stroke-linejoin="round"/>
<ellipse cx="60" cy="134" rx="8" ry="5" fill="#ff8fa3" opacity=".55"/>
<g transform="rotate(-25 142 130)"><rect x="130" y="125" width="24" height="10" rx="5" fill="#ffe0b8" stroke="#d9a877" stroke-width="1.5"/><circle cx="139" cy="130" r="1.2" fill="#d9a877"/><circle cx="145" cy="130" r="1.2" fill="#d9a877"/></g>
<g fill="#f6a945"><ellipse cx="82" cy="182" rx="11" ry="5"/><ellipse cx="118" cy="182" rx="11" ry="5"/></g>
</g>
<g transform="translate(30 50)"><path class="tw" d="M0-10L3-3L10 0L3 3L0 10L-3 3L-10 0L-3-3Z" fill="#ffd166"/></g>
  </svg>`,
  s3_spd:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<style>
:root{--body:#a98bd6;--belly:#efe6fb}
.b{fill:var(--body)}.l{fill:var(--belly)}
.bob{animation:bob 1.8s ease-in-out infinite}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
.e{transform-box:fill-box;transform-origin:center;animation:bl 5s infinite}
@keyframes bl{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}
.sc{transform-origin:134px 142px;animation:sc 1s ease-in-out infinite alternate}
@keyframes sc{from{transform:rotate(-6deg)}to{transform:rotate(6deg)}}
.sp{animation:sp 1.2s ease-in-out infinite;opacity:0}.d2{animation-delay:-.4s}.d3{animation-delay:-.8s}
@keyframes sp{0%{transform:translateX(12px);opacity:0}40%{opacity:1}100%{transform:translateX(-12px);opacity:0}}
</style>
<g stroke="#9aa5b1" stroke-width="3" stroke-linecap="round"><path class="sp" d="M16 96h22"/><path class="sp d2" d="M10 118h28"/><path class="sp d3" d="M18 140h20"/></g>
<ellipse cx="100" cy="188" rx="40" ry="6" fill="#000" opacity=".12"/>
<g class="bob">
<path class="b" d="M62 70L28 46L80 56ZM138 70L172 46L120 56Z"/>
<path class="b" d="M52 115C52 70 70 48 100 48C130 48 148 70 148 115C148 160 128 180 100 180C72 180 52 160 52 115Z"/>
<ellipse class="l" cx="100" cy="152" rx="30" ry="26"/>
<path class="b" d="M54 116C40 128 36 152 46 170C54 154 58 138 60 124ZM146 116C160 128 164 152 154 170C146 154 142 138 140 124Z" stroke="#000" stroke-opacity=".12" stroke-width="2"/>
<circle class="l" cx="80" cy="102" r="20"/><circle class="l" cx="120" cy="102" r="20"/>
<path d="M56 66Q100 50 144 66" fill="none" stroke="#5b4636" stroke-width="5"/>
<circle cx="84" cy="62" r="10" fill="#9be3ff" stroke="#5b4636" stroke-width="3"/><circle cx="116" cy="62" r="10" fill="#9be3ff" stroke="#5b4636" stroke-width="3"/>
<path d="M79 58a6 6 0 0 1 5-3M111 58a6 6 0 0 1 5-3" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none"/>
<g class="e"><circle cx="80" cy="103" r="13" fill="#2d2438"/><circle cx="76" cy="98" r="4" fill="#fff"/></g>
<g class="e"><circle cx="120" cy="103" r="13" fill="#2d2438"/><circle cx="116" cy="98" r="4" fill="#fff"/></g>
<path d="M94 116H106L100 124Z" fill="#f6a945" stroke="#f6a945" stroke-width="3" stroke-linejoin="round"/>
<ellipse cx="64" cy="120" rx="7" ry="4.5" fill="#ff8fa3" opacity=".55"/><ellipse cx="136" cy="120" rx="7" ry="4.5" fill="#ff8fa3" opacity=".55"/>
<path class="sc" d="M132 138C150 136 164 128 186 134C174 142 160 152 136 148Z" fill="#fb8500"/>
<path d="M62 128Q100 144 138 128L140 140Q100 158 60 140Z" fill="#ffb703"/>
<g fill="#f6a945"><ellipse cx="88" cy="181" rx="8" ry="4.5"/><ellipse cx="112" cy="181" rx="8" ry="4.5"/></g>
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
  s4_str_fierce:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<defs><radialGradient id="au"><stop offset=".45" stop-color="#ff6b35" stop-opacity=".5"/><stop offset="1" stop-color="#ff2d2d" stop-opacity="0"/></radialGradient></defs>
<style>
.au{transform-box:fill-box;transform-origin:center;animation:au 1.6s ease-in-out infinite alternate}
@keyframes au{from{transform:scale(.92);opacity:.6}to{transform:scale(1.06);opacity:1}}
.bob{animation:bob 2.4s ease-in-out infinite}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
.e{transform-box:fill-box;transform-origin:center;animation:bl 5s infinite}
@keyframes bl{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}
.em{animation:em 2.5s linear infinite;opacity:0}
.em:nth-child(2){animation-delay:-.5s}.em:nth-child(3){animation-delay:-1s}.em:nth-child(4){animation-delay:-1.5s}.em:nth-child(5){animation-delay:-2s}
@keyframes em{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-100px);opacity:0}}
</style>
<ellipse class="au" cx="100" cy="115" rx="96" ry="90" fill="url(#au)"/>
<g fill="#ffb347"><circle class="em" cx="26" cy="185" r="3"/><circle class="em" cx="58" cy="175" r="2.5"/><circle class="em" cx="146" cy="182" r="3"/><circle class="em" cx="176" cy="170" r="2.5"/><circle class="em" cx="100" cy="196" r="2"/></g>
<ellipse cx="100" cy="190" rx="50" ry="6" fill="#000" opacity=".15"/>
<g class="bob">
<path d="M60 66C40 58 28 36 36 16C44 36 58 44 74 50ZM140 66C160 58 172 36 164 16C156 36 142 44 126 50Z" fill="#fff1d6" stroke="#c9a77a" stroke-width="2.5" stroke-linejoin="round"/>
<path d="M36 122C36 74 62 52 100 52C138 52 164 74 164 122C164 164 138 184 100 184C62 184 36 164 36 122Z" fill="#b8323a"/>
<ellipse cx="100" cy="150" rx="40" ry="30" fill="#f6c9a5"/>
<path d="M86 142l7 6 7-6 7 6 7-6M90 158l5 5 5-5 5 5 5-5" fill="none" stroke="#b8323a" stroke-opacity=".35" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<g fill="#6c7a89" stroke="#3e4753" stroke-width="2.5" stroke-linejoin="round"><path d="M28 116C26 94 50 84 64 98L60 132C46 136 30 130 28 116Z"/><path d="M172 116C174 94 150 84 136 98L140 132C154 136 170 130 172 116Z"/></g>
<path d="M38 96L34 80L48 92ZM162 96L166 80L152 92Z" fill="#c5ccd6" stroke="#3e4753" stroke-width="2" stroke-linejoin="round"/>
<g fill="#c5ccd6"><circle cx="40" cy="108" r="2.5"/><circle cx="50" cy="122" r="2.5"/><circle cx="160" cy="108" r="2.5"/><circle cx="150" cy="122" r="2.5"/></g>
<circle cx="80" cy="110" r="22" fill="#d9544f"/><circle cx="120" cy="110" r="22" fill="#d9544f"/>
<g class="e"><circle cx="80" cy="110" r="14" fill="#ffd23f"/><circle cx="80" cy="111" r="9" fill="#1a0a0a"/><circle cx="77" cy="107" r="3" fill="#fff"/></g>
<g class="e"><circle cx="120" cy="110" r="14" fill="#ffd23f"/><circle cx="120" cy="111" r="9" fill="#1a0a0a"/><circle cx="117" cy="107" r="3" fill="#fff"/></g>
<path d="M56 90L99 104L99 95L60 80ZM144 90L101 104L101 95L140 80Z" fill="#3a0f14"/>
<path d="M130 88L142 128" stroke="#ffd9cf" stroke-width="3" stroke-linecap="round"/><path d="M131 100l8-3M135 112l8-3" stroke="#ffd9cf" stroke-width="2.5" stroke-linecap="round"/>
<path d="M93 124H107L100 134Z" fill="#f4a340" stroke="#f4a340" stroke-width="3" stroke-linejoin="round"/>
<path d="M95 127l2 5 2-5ZM101 127l2 5 2-5Z" fill="#fff"/>
<ellipse cx="68" cy="132" rx="7" ry="4" fill="#ff8fa3" opacity=".45"/><ellipse cx="132" cy="132" rx="7" ry="4" fill="#ff8fa3" opacity=".45"/>
<g fill="#e09f3e"><ellipse cx="84" cy="184" rx="11" ry="5"/><ellipse cx="116" cy="184" rx="11" ry="5"/></g>
</g>
  </svg>`,
  s4_str_kind:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<style>
.sq{transform-origin:100px 186px;animation:sq 2.2s ease-in-out infinite}
@keyframes sq{0%,100%{transform:scale(1,1)}50%{transform:scale(1.03,.97)}}
.wv{transform-origin:46px 124px;animation:wv .9s ease-in-out infinite alternate}
@keyframes wv{from{transform:rotate(8deg)}to{transform:rotate(-14deg)}}
.h{transform-box:fill-box;transform-origin:center;animation:h 3s ease-in-out infinite;opacity:0}
.h2{animation-delay:-1s}.h3{animation-delay:-2s}
@keyframes h{0%{transform:translateY(0) scale(.6);opacity:0}25%{opacity:1}100%{transform:translateY(-45px) scale(1.1);opacity:0}}
</style>
<ellipse cx="100" cy="190" rx="56" ry="6" fill="#000" opacity=".12"/>
<g class="sq">
<circle cx="56" cy="68" r="18" fill="#d9a066"/><circle cx="56" cy="68" r="9" fill="#f7b7a3"/>
<circle cx="144" cy="68" r="18" fill="#d9a066"/><circle cx="144" cy="68" r="9" fill="#f7b7a3"/>
<path d="M28 128C28 80 58 58 100 58C142 58 172 80 172 128C172 168 142 186 100 186C58 186 28 168 28 128Z" fill="#d9a066"/>
<g fill="#fff4e0"><ellipse cx="100" cy="152" rx="48" ry="30"/><circle cx="64" cy="132" r="9"/><circle cx="82" cy="126" r="9"/><circle cx="100" cy="124" r="9"/><circle cx="118" cy="126" r="9"/><circle cx="136" cy="132" r="9"/></g>
<circle cx="78" cy="104" r="22" fill="#f0c48e"/><circle cx="122" cy="104" r="22" fill="#f0c48e"/>
<path d="M66 106q12-13 24 0M110 106q12-13 24 0" stroke="#4a3426" stroke-width="5" fill="none" stroke-linecap="round"/>
<path d="M94 116H106L100 124Z" fill="#f6a945" stroke="#f6a945" stroke-width="3" stroke-linejoin="round"/>
<ellipse cx="58" cy="122" rx="11" ry="7" fill="#ff8fa3" opacity=".7"/><ellipse cx="142" cy="122" rx="11" ry="7" fill="#ff8fa3" opacity=".7"/>
<path d="M40 140Q100 164 160 140L160 154Q100 178 40 154Z" fill="#7ccba2"/>
<path d="M62 149l3 12M84 155l1 12M116 155l-1 12M138 149l-3 12" stroke="#fff" stroke-width="4" opacity=".7" stroke-linecap="round"/>
<path d="M124 158L142 154L148 182L130 184Z" fill="#6bb892"/>
<path d="M132 184v5M138 183v5M144 182v5" stroke="#6bb892" stroke-width="3" stroke-linecap="round"/>
<path d="M164 122C182 136 180 164 158 172C152 156 152 138 164 122Z" fill="#c48a52"/>
<path class="wv" d="M44 126C24 118 12 96 20 82C32 90 42 106 52 120Z" fill="#c48a52"/>
<g transform="translate(100 60)"><g fill="#ff8fab"><circle cy="-7" r="5"/><circle cx="7" cy="-1" r="5"/><circle cx="4" cy="7" r="5"/><circle cx="-4" cy="7" r="5"/><circle cx="-7" cy="-1" r="5"/></g><circle r="4" fill="#ffd166"/></g>
<g fill="#f6a945"><ellipse cx="80" cy="186" rx="12" ry="5"/><ellipse cx="120" cy="186" rx="12" ry="5"/></g>
</g>
<g fill="#ff6b8b">
<g transform="translate(160 70)"><path class="h" d="M0 6C-10-1-7-11 0-5C7-11 10-1 0 6Z"/></g>
<g transform="translate(30 50)"><path class="h h2" d="M0 6C-10-1-7-11 0-5C7-11 10-1 0 6Z"/></g>
<g transform="translate(178 118)"><path class="h h3" d="M0 6C-10-1-7-11 0-5C7-11 10-1 0 6Z"/></g>
</g>
  </svg>`,
  s4_str_neutral:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<style>
.bob{animation:bob 3.6s ease-in-out infinite}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
.e{transform-box:fill-box;transform-origin:center;animation:bl 6s infinite}
@keyframes bl{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}
.orb{transform-origin:100px 118px;animation:orb 12s linear infinite}
@keyframes orb{to{transform:rotate(360deg)}}
.sp{transform-origin:100px 54px;animation:sp 2.6s ease-in-out infinite alternate}
@keyframes sp{from{transform:rotate(-10deg)}to{transform:rotate(10deg)}}
.gl{transform-box:fill-box;transform-origin:center;animation:gl 2s ease-in-out infinite alternate}
@keyframes gl{from{opacity:.3;transform:scale(.85)}to{opacity:.9;transform:scale(1.2)}}
</style>
<g class="orb" fill="#a3adbd" stroke="#6c7689" stroke-width="2" stroke-linejoin="round"><path d="M10 112l8-6 9 4 1 10-9 5-8-4Z"/><path d="M156 50l7-5 8 3v8l-8 4-7-3Z"/><path d="M136 182l6-5 8 3-1 8-8 2Z"/></g>
<ellipse cx="100" cy="188" rx="52" ry="6" fill="#000" opacity=".15"/>
<g class="bob">
<path d="M56 74L50 44L72 50L82 60ZM144 74L150 44L128 50L118 60Z" fill="#8d99ae"/>
<path d="M38 120C38 74 64 52 100 52C136 52 162 74 162 120C162 162 136 182 100 182C64 182 38 162 38 120Z" fill="#8d99ae"/>
<path d="M54 96l8 8-4 9M146 150l-8 6 4 8M142 84l-6 6" fill="none" stroke="#6c7689" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M66 62C76 52 90 58 100 52C110 58 124 52 134 62C126 70 112 64 100 68C88 64 74 70 66 62Z" fill="#84c26a"/>
<g class="sp"><path d="M100 54V40" stroke="#5a9e44" stroke-width="3" stroke-linecap="round"/><path d="M100 44C92 34 84 38 86 42C90 46 96 46 100 44ZM100 42C108 30 118 34 116 38C112 44 104 44 100 42Z" fill="#84c26a"/></g>
<path d="M40 112C24 126 26 156 48 168C54 150 54 128 40 112ZM160 112C176 126 174 156 152 168C146 150 146 128 160 112Z" fill="#7a8699"/>
<ellipse cx="100" cy="148" rx="38" ry="30" fill="#dfe3e8"/>
<circle class="gl" cx="100" cy="148" r="17" fill="#ffd166"/>
<polygon points="100,134 112,141 112,155 100,162 88,155 88,141" fill="#ffb703" stroke="#c77d00" stroke-width="3" stroke-linejoin="round"/>
<polygon points="95,141 100,138 105,141 100,145" fill="#fff" opacity=".7"/>
<circle cx="80" cy="110" r="22" fill="#c5cdd8"/><circle cx="120" cy="110" r="22" fill="#c5cdd8"/>
<g class="e"><circle cx="80" cy="110" r="13" fill="#26303d"/><circle cx="76" cy="114" r="3" fill="#fff"/></g>
<g class="e"><circle cx="120" cy="110" r="13" fill="#26303d"/><circle cx="116" cy="114" r="3" fill="#fff"/></g>
<path d="M66 108A14 14 0 0 1 94 108ZM106 108A14 14 0 0 1 134 108Z" fill="#c5cdd8"/>
<path d="M66 108H94M106 108H134" stroke="#4a5568" stroke-width="3" stroke-linecap="round"/>
<path d="M94 124H106L100 132Z" fill="#f4a340" stroke="#f4a340" stroke-width="3" stroke-linejoin="round"/>
<ellipse cx="62" cy="130" rx="7" ry="4" fill="#ff8fa3" opacity=".45"/><ellipse cx="138" cy="130" rx="7" ry="4" fill="#ff8fa3" opacity=".45"/>
<g fill="#e09f3e"><ellipse cx="82" cy="182" rx="12" ry="5"/><ellipse cx="118" cy="182" rx="12" ry="5"/></g>
</g>
  </svg>`,
  s4_spd_fierce:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<defs>
<path id="nb" d="M58 72L44 30L84 54ZM142 72L156 30L116 54ZM50 118C50 72 70 50 100 50C130 50 150 72 150 118C150 160 128 182 100 182C72 182 50 160 50 118Z"/>
<filter id="gw" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<style>
.ai{animation:ai 1.2s ease-in-out infinite alternate}
@keyframes ai{from{transform:translateX(-8px);opacity:.35}to{transform:translateX(-20px);opacity:.1}}
.bob{animation:bob 2s ease-in-out infinite}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
.e{transform-box:fill-box;transform-origin:center;animation:bl 4s infinite}
@keyframes bl{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}
.mt{transform-origin:52px 108px;animation:mt .7s ease-in-out infinite alternate}
@keyframes mt{from{transform:rotate(-8deg)}to{transform:rotate(10deg)}}
.lz{animation:lz 1.8s ease-in-out infinite;opacity:0}.lz2{animation-delay:-.9s}
@keyframes lz{0%,55%,100%{opacity:0}68%,85%{opacity:1}76%{opacity:.45}}
.sh{transform-box:fill-box;transform-origin:center;animation:sh .9s linear infinite}
@keyframes sh{to{transform:rotate(360deg)}}
</style>
<use href="#nb" class="ai" fill="#7b5cff"/>
<ellipse cx="100" cy="190" rx="42" ry="6" fill="#000" opacity=".15"/>
<g class="bob">
<g class="mt" fill="#e63946"><path d="M52 104C36 96 24 100 8 92C14 106 30 112 52 112Z"/><path d="M52 110C38 116 28 126 12 126C22 134 40 126 54 116Z"/></g>
<use href="#nb" fill="#3d2c63"/>
<ellipse cx="100" cy="152" rx="32" ry="26" fill="#6c5ca8"/>
<path d="M88 146l6 5 6-5 6 5 6-5" fill="none" stroke="#3d2c63" stroke-opacity=".5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M54 120C36 132 30 158 44 174C52 156 58 140 60 126ZM146 120C164 132 170 158 156 174C148 156 142 140 140 126Z" fill="#2a1e47"/>
<path d="M48 94Q100 82 152 94L152 120Q100 110 48 120Z" fill="#1b1333"/>
<g filter="url(#gw)" fill="#fff07a"><path class="e" d="M64 104Q80 96 95 109Q78 113 64 104Z"/><path class="e" d="M136 104Q120 96 105 109Q122 113 136 104Z"/></g>
<path d="M95 122H105L100 130Z" fill="#f4a340" stroke="#f4a340" stroke-width="3" stroke-linejoin="round"/>
<ellipse cx="68" cy="128" rx="7" ry="4" fill="#ff8fd8" opacity=".4"/><ellipse cx="132" cy="128" rx="7" ry="4" fill="#ff8fd8" opacity=".4"/>
<g fill="#f4a340"><ellipse cx="88" cy="182" rx="8" ry="4.5"/><ellipse cx="112" cy="182" rx="8" ry="4.5"/></g>
</g>
<g fill="#ffe14d" stroke="#f5a623" stroke-width="1.5" stroke-linejoin="round"><path class="lz" d="M176 40L166 62H174L168 82L186 56H178L184 40Z"/><path class="lz lz2" d="M24 150L14 170H22L16 190L34 164H26L32 150Z"/></g>
<g transform="translate(168 168)"><g class="sh"><path d="M0-13L3-3L13 0L3 3L0 13L-3 3L-13 0L-3-3Z" fill="#c0c6d0" stroke="#7d8597" stroke-width="1.5"/><circle r="2.5" fill="#3d2c63"/></g></g>
  </svg>`,
  s4_spd_kind:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<style>
.fl{animation:fl 2.8s ease-in-out infinite}
@keyframes fl{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
.e{transform-box:fill-box;transform-origin:center;animation:bl 5s infinite}
@keyframes bl{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}
.wl{transform-origin:52px 118px;animation:wl 1.3s ease-in-out infinite alternate}
@keyframes wl{from{transform:rotate(-12deg)}to{transform:rotate(10deg)}}
.wr{transform-origin:148px 118px;animation:wr 1.3s ease-in-out infinite alternate}
@keyframes wr{from{transform:rotate(12deg)}to{transform:rotate(-10deg)}}
.tl{transform-origin:100px 166px;animation:tl 2.4s ease-in-out infinite alternate}
@keyframes tl{from{transform:rotate(-5deg)}to{transform:rotate(5deg)}}
.wd{animation:wd 2.6s ease-in-out infinite;opacity:0}.wd2{animation-delay:-1.3s}
@keyframes wd{0%{transform:translateX(14px);opacity:0}40%,60%{opacity:1}100%{transform:translateX(-14px);opacity:0}}
.cl{animation:cl 6s ease-in-out infinite alternate}
@keyframes cl{from{transform:translateX(-6px)}to{transform:translateX(6px)}}
</style>
<g class="cl" fill="#e3f2fd"><circle cx="30" cy="40" r="9"/><circle cx="42" cy="35" r="11"/><circle cx="55" cy="41" r="8"/><rect x="26" y="40" width="34" height="10" rx="5"/><circle cx="152" cy="178" r="8"/><circle cx="164" cy="173" r="10"/><circle cx="176" cy="179" r="7"/><rect x="148" y="178" width="32" height="9" rx="4.5"/></g>
<g fill="none" stroke="#a5d8ff" stroke-width="3" stroke-linecap="round"><path class="wd" d="M150 52c10 0 18-4 18-10s-8-8-12-4"/><path class="wd wd2" d="M16 140c12 0 20-4 20-10s-8-8-12-4"/></g>
<ellipse cx="100" cy="192" rx="34" ry="5" fill="#000" opacity=".1"/>
<g class="fl">
<g class="tl" fill="#4a90e2"><path d="M92 168C84 184 72 194 56 198C68 186 74 176 80 164Z"/><path d="M108 168C116 184 128 194 144 198C132 186 126 176 120 164Z"/></g>
<path class="wl" d="M52 112C32 98 14 94 2 98C14 106 22 114 26 126C34 122 44 124 54 132Z" fill="#4a90e2"/>
<path class="wr" d="M148 112C168 98 186 94 198 98C186 106 178 114 174 126C166 122 156 124 146 132Z" fill="#4a90e2"/>
<path d="M64 72Q54 50 76 58ZM136 72Q146 50 124 58Z" fill="#7cc6fe"/>
<path d="M52 116C52 74 72 54 100 54C128 54 148 74 148 116C148 156 128 176 100 176C72 176 52 156 52 116Z" fill="#7cc6fe"/>
<path d="M90 68q10-6 20 0" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>
<ellipse cx="100" cy="144" rx="34" ry="30" fill="#fff"/>
<circle cx="80" cy="104" r="21" fill="#fff"/><circle cx="120" cy="104" r="21" fill="#fff"/>
<g class="e"><circle cx="80" cy="105" r="14" fill="#1e3a5f"/><circle cx="75" cy="99" r="5" fill="#fff"/><circle cx="85" cy="110" r="2.2" fill="#fff"/></g>
<g class="e"><circle cx="120" cy="105" r="14" fill="#1e3a5f"/><circle cx="115" cy="99" r="5" fill="#fff"/><circle cx="125" cy="110" r="2.2" fill="#fff"/></g>
<path d="M95 120H105L100 127Z" fill="#ffc94a" stroke="#ffc94a" stroke-width="3" stroke-linejoin="round"/>
<ellipse cx="62" cy="124" rx="8" ry="5" fill="#ff9fc0" opacity=".7"/><ellipse cx="138" cy="124" rx="8" ry="5" fill="#ff9fc0" opacity=".7"/>
<g fill="#ffc94a"><ellipse cx="90" cy="176" rx="6" ry="4"/><ellipse cx="110" cy="176" rx="6" ry="4"/></g>
</g>
  </svg>`,
  s4_spd_neutral:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
<style>
.bob{animation:bob 2s ease-in-out infinite}
@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
.e{transform-box:fill-box;transform-origin:center;animation:bl 5s infinite}
@keyframes bl{0%,93%,100%{transform:scaleY(1)}96%{transform:scaleY(.1)}}
.lf{transform-box:fill-box;transform-origin:center;animation:lf 2.6s linear infinite;opacity:0}
.l2{animation-delay:-.9s}.l3{animation-delay:-1.7s}
@keyframes lf{0%{transform:translate(0,0) rotate(0deg);opacity:0}15%,80%{opacity:1}100%{transform:translate(-160px,24px) rotate(360deg);opacity:0}}
.sp{animation:sp 1.1s ease-in-out infinite;opacity:0}.d2{animation-delay:-.37s}.d3{animation-delay:-.74s}
@keyframes sp{0%{transform:translateX(12px);opacity:0}40%{opacity:1}100%{transform:translateX(-14px);opacity:0}}
</style>
<g stroke="#a7e8e1" stroke-width="3" stroke-linecap="round"><path class="sp" d="M12 92h24"/><path class="sp d2" d="M6 116h30"/><path class="sp d3" d="M14 140h22"/></g>
<ellipse cx="104" cy="190" rx="44" ry="6" fill="#000" opacity=".12"/>
<g transform="rotate(6 100 184)"><g class="bob">
<path d="M58 72L24 50L78 56ZM138 66L114 30L114 56Z" fill="#2ec4b6"/>
<path d="M44 118C44 74 66 52 100 52C134 52 156 74 156 118C156 160 132 182 100 182C68 182 44 160 44 118Z" fill="#2ec4b6"/>
<path d="M48 118C30 124 18 146 22 166C34 152 46 140 56 132ZM152 118C166 128 170 150 164 168C156 152 148 140 144 132Z" fill="#20a397"/>
<ellipse cx="100" cy="150" rx="34" ry="28" fill="#e8fff8"/>
<path d="M84 140l10 8-10 8M102 140l10 8-10 8" fill="none" stroke="#ffbf69" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M44 104H156" stroke="#6d4c41" stroke-width="8" stroke-linecap="round"/>
<circle cx="80" cy="104" r="18" fill="#fff"/><circle cx="120" cy="104" r="18" fill="#fff"/>
<g class="e"><circle cx="80" cy="105" r="11" fill="#1d3557"/><circle cx="76" cy="101" r="3.5" fill="#fff"/></g>
<g class="e"><circle cx="120" cy="105" r="11" fill="#1d3557"/><circle cx="116" cy="101" r="3.5" fill="#fff"/></g>
<g fill="#b8f2ff" fill-opacity=".45" stroke="#6d4c41" stroke-width="5"><circle cx="80" cy="104" r="19"/><circle cx="120" cy="104" r="19"/></g>
<path d="M70 96a12 12 0 0 1 8-5M110 96a12 12 0 0 1 8-5" stroke="#fff" stroke-width="3" stroke-linecap="round" fill="none"/>
<path d="M94 124H106L100 132Z" fill="#f4a340" stroke="#f4a340" stroke-width="3" stroke-linejoin="round"/>
<ellipse cx="62" cy="128" rx="7" ry="4.5" fill="#ff8fa3" opacity=".55"/><ellipse cx="138" cy="128" rx="7" ry="4.5" fill="#ff8fa3" opacity=".55"/>
<g fill="#f4a340"><ellipse cx="86" cy="182" rx="9" ry="5"/><ellipse cx="114" cy="182" rx="9" ry="5"/></g>
</g></g>
<g fill="#8bd450">
<g transform="translate(184 50)"><path class="lf" d="M-10 0C-4-8 6-8 10 0C6 8-4 8-10 0Z"/></g>
<g transform="translate(188 120)"><path class="lf l2" d="M-10 0C-4-8 6-8 10 0C6 8-4 8-10 0Z"/></g>
<g transform="translate(180 166)"><path class="lf l3" d="M-8 0C-3-6 5-6 8 0C5 6-3 6-8 0Z"/></g>
</g>
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
window.ART=window.ART||{};
ART.owl={data:OWL_ART,src:owlSrc};
