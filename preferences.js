// ===== preferences.js · ความชอบเฉพาะตัว · โหลดหลัง emotion.js =====
// สัตว์แต่ละตัวมีชุดความชอบ/ไม่ชอบ (สุ่มคงที่ตามเมล็ดพันธุ์ + สืบทอดบางส่วนให้รุ่นลูก): พื้นที่ · สภาพอากาศ · ศัตรู · เพื่อน · ของ · กิจกรรม · สไตล์ (สำรวจ/สู้)
// ความชอบ "ซ่อนอยู่" จนกว่าจะเจอผลจริง (หรือเห็นเป็น ❤️/💢 ข้างพื้นที่ตอนเลือกทาง) ผู้เล่นต้องสังเกตและทดลองเพื่อรู้ใจ → สเตตัสเท่ากันแต่ควรไปที่ต่างกัน
const PFD=['bi','wx','foe','fr','it','act','st'],PFN={bi:'พื้นที่',wx:'สภาพอากาศ',foe:'ศัตรู',fr:'เพื่อน',it:'ของ',act:'กิจกรรม',st:'สไตล์'};
const PFF={B:['🦁','เพื่อนกล้าหาญ'],K:['🤲','เพื่อนใจดี'],P:['🎈','เพื่อนขี้เล่น']},PFI={str:['💪','ของสายแรง'],spd:['⚡','ของสายเร็ว'],int:['🧠','ของสายปัญญา'],relic:['🏺','ของสะสมโบราณ']},PFS={explore:['🧭','ชอบสำรวจ ไม่ชอบสู้'],fight:['⚔️','ชอบสู้ ไม่ชอบเดินเฉยๆ']};
function pfLbl(d,v){
  if(d==='bi')return BIO[v].ic+BIO[v].n;if(d==='wx'){const w=DXW.find(x=>x.id===v);return w?w.ic+w.n:v;}
  if(d==='foe')return v==='boss'?'👑 บอส':v==='rival'?'🥊 คู่ปรับ':'👾 '+BIO[+v[1]].m;if(d==='fr')return PFF[v].join(' ');if(d==='it')return PFI[v].join(' ');
  if(d==='act')return SPOTS[v].ic+SPOTS[v].n;return PFS[v].join(' ');
}
function pfGen(c){
  const r=rng((c.seed||1)*31+11),P={},pk2=a=>a[Math.floor(r()*a.length)];
  const pool={bi:[0,1,2],wx:DXW.map(w=>w.id),foe:['m0','m1','m2','boss','rival'],fr:['B','K','P'],it:['str','spd','int','relic'],act:Object.keys(SPOTS)};
  Object.keys(pool).forEach(d=>{const l=pk2(pool[d]);let x=null;if(r()<.55){const o=pool[d].filter(v=>v!==l);x=pk2(o);}P[d]={l,d:x};});
  P.st={l:r()<.7?pk2(['explore','fight']):null,d:null};return P;
}
const pfOf=c=>{const so=c.soul;if(!so.pf)so.pf=pfGen(c);if(!so.pfK)so.pfK={};return so.pf;};
const pfK=(d,t)=>{const so=S.c&&S.c.soul;return !!(so&&so.pfK&&so.pfK[d+'.'+t]);};
function pfRev(d,t,msg){const c=S.c,so=c.soul;pfOf(c);if(so.pfK[d+'.'+t])return;so.pfK[d+'.'+t]=1;log('💡 '+msg);soulMem('pref',msg,2,'💡',null);setSay('💡 รู้ใจขึ้นอีกนิด!',2200);}
const pfSt=(d,v)=>{const p=pfOf(S.c)[d];return p.l===v?1:p.d===v?-1:0;};
const pfGrp=n=>'BKP'[[...String(n)].reduce((s,ch)=>s+ch.charCodeAt(0),0)%3];
const pfFoe=b=>b.xf?(b.xf.boss?'boss':b.xf.rival?'rival':[0,1,2].map(i=>'m'+i).find((k,i)=>b.xf.name===BIO[i].m)||null):null;
function pfIt(){const p=pfOf(S.c).it;if(!p.l)return 0;if(p.l==='relic')return Math.min(3,((dx().eq)||[]).length);return Math.min(3,ITM.filter(i=>i.s===p.l).reduce((n,i)=>n+(S.items[i.id]|0),0));}
const pfXc=()=>{const c=S.c;if(!c||!c.soul)return 0;const bi=(S.depth>0||S.fcLive)?S.dBi:PX.bi;return pfSt('bi',bi);};
function pfStep(){
  const c=S.c;if(!c||!c.soul)return;const P=pfOf(c),bi=S.dBi,run=dx().run||{},wx=DXW.find(w=>w.id===run.wx);
  const b=pfSt('bi',bi);if(b>0){c.en=cl(c.en+2);emAdd({j:1.5});if(Math.random()<.3)pfRev('bi','l',`${c.name}ดูมีความสุขมากที่ได้อยู่ที่ ${pfLbl('bi',bi)} — ฟื้นพลังไวกว่าที่อื่น (ชอบพื้นที่นี้)`);}
  else if(b<0){c.en=cl(c.en-1);emAdd({a:1.5});if(Math.random()<.3)pfRev('bi','d',`${c.name}ดูอึดอัดที่ ${pfLbl('bi',bi)} — ไม่ค่อยชอบที่นี่ (เหนื่อยง่ายขึ้น)`);}
  if(wx){const w=pfSt('wx',wx.id);if(w>0){c.en=cl(c.en+2);emAdd({j:2});pfRev('wx','l',`${c.name}ชอบ ${pfLbl('wx',wx.id)} เป็นพิเศษ — กระปรี้กระเปร่า`);}else if(w<0){c.en=cl(c.en-2);emAdd({a:2});pfRev('wx','d',`${c.name}ไม่ชอบ ${pfLbl('wx',wx.id)} — หงุดหงิดและเหนื่อยเร็ว`);}}
  if(P.st.l==='explore'){c.en=cl(c.en+1);emAdd({j:.6});}else if(P.st.l==='fight'&&Math.random()<.3)emAdd({a:.6});
}
function pfPanel(){
  const c=S.c;if(!c||!c.soul)return '';const P=pfOf(c);let hid=0;
  const rows=PFD.map(d=>{const p=P[d],L=pfK(d,'l'),D=pfK(d,'d');const a=p.l!=null&&L?`❤️ ${pfLbl(d,p.l)}`:'',b=p.d!=null&&D?`💢 ${pfLbl(d,p.d)}`:'';hid+=(p.l!=null&&!L?1:0)+(p.d!=null&&!D?1:0);return a||b?`<div>${PFN[d]}: ${[a,b].filter(Boolean).join(' · ')}</div>`:'';}).join('');
  return `<div class="card log" style="text-align:left;padding:8px"><b style="font-size:12px">🎯 ความชอบเฉพาะตัว</b>${rows||'<div><small>ยังไม่รู้ใจเลย</small></div>'}<small>${hid?`❓ ยังมีความชอบที่ซ่อนอยู่อีก ${hid} อย่าง — ลองพาไปที่ต่างๆ แล้วสังเกตปฏิกิริยา`:'รู้ใจครบแล้ว'}</small></div>`;
}
{
  const _fm=soulFightMul;soulFightMul=function(c,b){let r=_fm.apply(this,arguments);if(!c.soul||c!==S.c)return r;const P=pfOf(c),f=pfFoe(b);
    if(f){const v=pfSt('foe',f);if(v){r*=v>0?1.06:.94;pfRev('foe',v>0?'l':'d',v>0?`${c.name}ชอบสู้กับ ${pfLbl('foe',f)} — ตีแรงขึ้น`:`${c.name}ไม่ชอบสู้กับ ${pfLbl('foe',f)} — ตีอ่อนลง`);}}
    if(P.st.l==='explore')r*=.95;else if(P.st.l==='fight')r*=1.05;
    r*=1+.02*pfIt();if(b.an&&pfGrp(plainName(b.an))===P.fr.l)r*=1.03;return r;};
  const _da=doAct;doAct=function(c){const a=c.act,P=c.soul&&pfOf(c),b=[c.str,c.spd,c.int,S.money,c.en];_da.apply(this,arguments);if(!P||!a)return;
    let f=pfSt('act',a)>0?1.15:pfSt('act',a)<0?.88:1;f*=1+.04*pfIt();if(f===1)return;
    c.str=b[0]+(c.str-b[0])*f;c.spd=b[1]+(c.spd-b[1])*f;c.int=b[2]+(c.int-b[2])*f;S.money=Math.round(b[3]+(S.money-b[3])*f);if(c.en>b[4])c.en=cl(b[4]+(c.en-b[4])*f);
    const v=pfSt('act',a);if(v>0){emAdd({j:.5,d:-.3});pfRev('act','l',`${c.name}ชอบ ${pfLbl('act',a)} — ทำแล้วเพลินและได้ผลดีกว่า`);}else if(v<0){emAdd({j:-.2,d:.2});pfRev('act','d',`${c.name}ไม่ค่อยชอบ ${pfLbl('act',a)} — ทำแล้วไม่ค่อยได้ผล`);}};
  const _bs=blSet;blSet=function(r,d){if(S.c&&S.c.soul&&d&&d.af>0){const P=pfOf(S.c),g=pfGrp(r.n),v=P.fr.l===g?1:P.fr.d===g?-1:0;
    if(v){d=Object.assign({},d,{af:d.af*(v>0?1.3:.75)});if(r.met>=2)pfRev('fr',v>0?'l':'d',v>0?`${S.c.name}ถูกชะตากับ${PFF[g][1]}อย่าง ${r.ic}${r.n}`:`${S.c.name}ไม่ค่อยเข้ากับ${PFF[g][1]}อย่าง ${r.ic}${r.n}`);}}return _bs.call(this,r,d);};
  const _mi=mdIc;mdIc=function(k){const t=_mi.apply(this,arguments);if(!S.c||!S.c.soul)return t;const P=pfOf(S.c).bi;return t+(P.l===k&&pfK('bi','l')?'❤️':P.d===k&&pfK('bi','d')?'💢':'');};
  const _cd=cqDie;cqDie=function(L){_cd.apply(this,arguments);if(S.c&&S.c.soul&&L.sd)L.sd.pf=pfOf(S.c);};
  const _ch=cqHatch;cqHatch=function(c,L){_ch.apply(this,arguments);try{const P=pfOf(c),D=L&&L.sd&&L.sd.pf,got=[];if(D){PFD.forEach(d=>{if(D[d]&&Math.random()<.35){P[d]=Object.assign({},D[d]);got.push(PFN[d]);}});if(got.length)log('🧬 สืบทอดความชอบด้าน'+got.join('/')+'จากรุ่นก่อน');}}catch(e){}};
}
