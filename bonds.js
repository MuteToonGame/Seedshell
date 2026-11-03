// ===== bonds.js · ความสัมพันธ์ระหว่างสัตว์ (NPC + เพื่อนจริง) · โหลดหลัง soul-deep.js =====
// S.rl[ชื่อ] = {af ความสนิท, rv ความเป็นคู่แข่ง, sh ศึกร่วมกัน, hp เคยช่วยเรา, gv เราเคยช่วย, met, last, pw พลังคู่แข่ง}
// ระดับ (คำนวณจากตัวเลข → เปลี่ยนได้ทั้งขึ้น/ลง): 👋คนรู้จัก 💚เพื่อน 💞เพื่อนสนิท ⚔️คู่แข่ง 🥀ห่างเหิน + ป้าย 🤝คู่หู 🆘ผู้ช่วยเหลือ
// ผล: เพื่อน/สนิท=ตีแรงขึ้นเมื่อสู้ด้วยกัน · คู่หู=ท่าคู่แรง ×1.6 · ผู้ช่วยเหลือ=ช่วยชีวิตตอนคับขัน · คู่แข่ง=ประลองแล้วโตทั้งคู่ · ห่างหายนานจะค่อยๆ จางลง · ข้ามรุ่นเหลือ 60%
const BLT={ac:['👋','คนรู้จัก'],fr:['💚','เพื่อน'],be:['💞','เพื่อนสนิท'],ri:['⚔️','คู่แข่ง'],es:['🥀','ห่างเหิน']};
const bl=()=>S.rl||(S.rl={});
const blT=r=>r.af<15&&r.met>=3?'es':r.rv>=40&&r.rv>=r.af?'ri':r.af>=75?'be':r.af>=30?'fr':'ac';
const blB=r=>({duo:r.sh>=5&&r.af>=45,help:r.af>=35&&(r.hp>=1||r.gv>=2)});
function blSet(r,d){
  const t0=blT(r),b0=blB(r);Object.keys(d).forEach(k=>{r[k]=cl((r[k]||0)+d[k],0,100);});
  const t1=blT(r),b1=blB(r);if(!r.met)return;
  if(t1!==t0){const M=BLT[t1];log(`${M[0]} ความสัมพันธ์กับ ${r.ic}${r.n} เปลี่ยนเป็น “${M[1]}”`);soulMem('relation',`${r.ic}${r.n} กลายเป็น${M[1]}`,t1==='be'||t1==='ri'?4:3,M[0],null);}
  if(b1.duo&&!b0.duo)log(`🤝 ${S.c.name}กับ ${r.ic}${r.n} กลายเป็นคู่หู! ใช้ท่าคู่ได้`);
  if(b1.help&&!b0.help)log(`🆘 ${r.ic}${r.n} พร้อมช่วยเหลือในยามคับขัน`);
}
function blTouch(name,ic,how,real){
  if(!name)return;const R=bl(),r=R[name]||(R[name]={n:name,ic,af:5,rv:0,sh:0,hp:0,gv:0,met:0,last:S.day,real:!!real});r.met++;r.last=S.day;if(real)r.real=1;
  const d={visit:{af:3},ally:{af:4,sh:1},help:{af:8,gv:1},meet:{af:1},rivalw:{rv:6,af:2},rivall:{rv:8}}[how]||{af:1};blSet(r,d);return r;
}
const blPw=()=>(S.c.str+S.c.spd+S.c.int)*.95;
function blFood(r){const c=S.c,n=c.name;return{ti:'ทะเลาะกันเพราะอาหาร',q:`🍖 ${n}กับ ${r.ic}${r.n}เจออาหารชิ้นสุดท้ายพร้อมกัน ทั้งคู่จ้องตากัน…`,o:[
  {l:'✂️ แบ่งครึ่ง (อิ่ม −10)',n:'f',b:2,u:-10,fn:()=>{c.hun=cl(c.hun-10);blSet(r,{af:4});return 'ทั้งคู่แบ่งกินแล้วหัวเราะกัน';}},
  {l:'🎁 ยกให้เพื่อน',n:'f',b:3,fn:()=>{blSet(r,{af:8});soulShift({kind:2});return `${r.n}ซึ้งใจจนตาแดง`;}},
  {l:'😤 เก็บไว้กินเอง (อิ่ม +20)',fl:1,m:60,fn:()=>{c.hun=cl(c.hun+20);soulShift({kind:-2});blSet(r,{af:-12,rv:4});return `${r.n}หันหลังเดินหนีไป… บรรยากาศเย็นชา`;}},
  {l:'🗣️ ไกล่เกลี่ย (ปัญญา)',c:'int',fn:()=>cqCk('int')?(blSet(r,{af:5}),'พูดจาดีจนทั้งสองยิ้มได้'):(blSet(r,{af:-2}),'พูดไม่เข้าหู ต่างคนต่างงอน')}]};}
function blSave(r){const c=S.c;return{ti:'เพื่อนถูกต้อนจนมุม',q:`⚠️ ${r.ic}${r.n}ถูกศัตรูต้อนจนมุม! ${c.name}เห็นเข้าพอดี`,o:[
  {l:'⚔️ พุ่งเข้าช่วย (แรง)',c:'str',fn:()=>{if(cqCk('str')){blSet(r,{af:10,gv:1});soulShift({bold:2,kind:2});return `ศัตรูถอยไป ${r.n}ขอบคุณ ครั้งนี้จะไม่ลืม`;}cE(-10);blSet(r,{af:5,gv:1});return 'ช่วยไม่ทันเต็มที่ ต้องเจ็บตัว (พลัง −10) แต่เพื่อนรู้ว่าพยายามแล้ว';}},
  {l:'📣 ตะโกนให้หนี (เร็ว)',c:'spd',fn:()=>cqCk('spd')?(blSet(r,{af:4}),'ทั้งคู่หนีรอดได้ทัน'):(blSet(r,{af:-2}),'เพื่อนหนีไม่ทัน เสียขวัญ')},
  {l:'🚶 ไม่ยุ่ง',fl:1,fn:()=>{blSet(r,{af:-14});soulMem('betray',`ทิ้ง ${r.ic}${r.n} ไว้กลางอันตราย`,3,'💔','skip');return `${r.n}จ้องมาอย่างผิดหวัง…`;}}]};}
function blCoop(r){const c=S.c;return{ti:'ท่าคู่',q:`🤝 ${c.name}กับ ${r.ic}${r.n}เจอศัตรูตัวใหญ่ ทั้งคู่ขยับเข้าจังหวะเดียวกันเหมือนเคยซ้อมมา`,o:[
  {l:'💥 ใช้ท่าคู่ร่วมกัน',c:'?',fn:()=>{if(Math.random()<.75){const g=Math.round(260*cqK());S.money+=g;blSet(r,{af:3,sh:1});return `ท่าคู่ได้ผล! ศัตรูล้มทั้งยืน +฿${g}`+(Math.random()<.3?(S.crystal++,' · 💎+1'):'');}blSet(r,{sh:1});cE(-8);return 'จังหวะคลาดนิดหน่อย พลาดไปเล็กน้อย (พลัง −8)';}},
  {l:'🏋️ ซ้อมท่าคู่ (พลัง −10)',n:'f',e:-10,fn:()=>{cE(-10);blSet(r,{sh:2,af:2});return 'ซ้อมจนเข้าขากันขึ้นอีกระดับ';}},
  {l:'🚶 ปล่อยผ่าน',fl:1,fn:()=>'เดินผ่านไปเงียบๆ'}]};}
function blDuel(r){const c=S.c;r.pw=r.pw||blPw();return{ti:'คู่แข่งขวางทาง',q:`⚔️ ${r.ic}${r.n}คู่แข่งขวางทาง “วันนี้ต้องวัดกันให้รู้ดำรู้แดง!”`,o:[
  {l:'🏁 ประลองฝีมือ',c:'?',fn:()=>{const P=c.str+c.spd+c.int,w=Math.random()<cl(.5+(P-r.pw)*.02,.15,.85),k=pk(['str','spd','int']);r.pw+=1;
    if(w){c[k]+=1;blSet(r,{rv:5,af:3});return `ชนะ! ${k==='str'?'💪':k==='spd'?'⚡':'🧠'}+1 · ${r.n}ยอมรับในฝีมือ แต่ไม่ยอมแพ้ง่ายๆ`;}
    c[k]+=.5;blSet(r,{rv:8});return `แพ้… แต่ได้เรียนรู้ ${k==='str'?'💪':k==='spd'?'⚡':'🧠'}+0.5 · ${r.n}ยิ่งฮึกเหิม`;}},
  {l:'🤝 ขอเป็นเพื่อน',n:'f',b:3,fn:()=>{blSet(r,{af:10,rv:-15});return `${r.n}ชะงักไปครู่หนึ่ง ก่อนยื่นมือมาจับ`;}},
  {l:'🙅 ไม่สน เดินผ่าน',fl:1,fn:()=>{blSet(r,{rv:3});return `${r.n}ส่ายหัว “กลัวหรือไง”`;}}]};}
function blReturn(r){const c=S.c,d=S.day-r.last;return{ti:'เพื่อนเก่ากลับมา',q:`🦋 ${r.ic}${r.n}เพื่อนเก่าที่ไม่ได้เจอกันมา ${d} วัน โผล่มาหา${c.name}!`,o:[
  {l:'🤗 ต้อนรับอย่างอบอุ่น',n:'f',b:3,fn:()=>{c.hun=cl(c.hun+10);cB(3);blSet(r,{af:8});soulMem('reunion','เพื่อนเก่า '+r.ic+r.n+' กลับมาเยี่ยม',3,'🦋','friend');return 'กินข้าวด้วยกันและเล่าเรื่องเก่าๆ (อิ่ม +10)';}},
  {l:'🎒 ชวนไปสำรวจด้วยกัน',n:'f',b:2,fn:()=>{blSet(r,{af:5,sh:1});cE(5);return `${r.n}ตกลงเดินเป็นเพื่อนไปพักใหญ่ (พลัง +5)`;}}]};}
function blMiss(r){const c=S.c,d=S.day-r.last;return{ti:'คิดถึงเพื่อน',q:`💭 ${c.name}นั่งมองฟ้า คิดถึง ${r.ic}${r.n}ที่ไม่ได้เจอกันมา ${d} วัน`,o:[
  {l:'💌 ฝากข้อความไปหา (฿20)',n:'f',m:-20,fn:()=>{S.money=Math.max(0,S.money-20);r.last=S.day;blSet(r,{af:3});return 'ฝากข้อความไปแล้ว ใจเบาขึ้นเยอะ';}},
  {l:'🧭 ออกตามหาครั้งหน้า',fn:()=>{r.sk=1;return `${c.name}ตั้งใจจะตามหา ${r.n} ตอนออกสำรวจ`;}},
  {l:'🤷 ปล่อยผ่าน',fl:1,fn:()=>{blSet(r,{af:-2});ctMood(c,'cautious',2,'คิดถึงเพื่อน');return 'ถอนหายใจเบาๆ แล้วหันไปทำอย่างอื่น';}}]};}
function blExp(ctx,s0){
  const Q=cq(),c=S.c;if(!c||Q.last===S.depth)return false;const R=Object.values(bl()).filter(r=>(r.cd|0)<=S.day);if(!R.length)return false;
  let L=null,r=R.find(x=>x.sk);
  if(r&&Math.random()<.5){r.sk=0;L=blReturn(r);}
  else if(Math.random()<.08){r=pk(R);const t=blT(r);L=t==='ri'?blDuel(r):(t==='fr'||t==='be')?pk([blFood,blSave,...(blB(r).duo||t==='be'?[blCoop]:[])])(r):null;}
  if(!L)return false;r.cd=S.day+4;Q.last=S.depth;XQ={L,ctx,s0,cq:'bl'};xAsk();return true;
}
function blHome(){
  const R=Object.values(bl()),r=pk(R.filter(x=>['fr','be'].includes(blT(x))&&S.day-x.last>=7&&(x.cd|0)<=S.day));if(!r)return null;
  r.cd=S.day+5;const L=blT(r)==='be'&&Math.random()<.5?blReturn(r):blMiss(r);
  return{t:L.q,a:L.o.map(o=>({l:o.l,f:()=>{log(o.fn());}}))};
}
function blRescue(b){
  if(b.blR)return false;const H=Object.values(bl()).filter(r=>blB(r).help&&Math.random()<.3+r.af/300).sort((a,b)=>b.af-a.af)[0];if(!H)return false;
  b.blR=1;b.ph=Math.round(b.pm*.35);H.hp++;blSet(H,{af:4});b.L.unshift(`🆘 ${H.ic}${H.n}มาช่วยในยามคับขัน!`);soulMem('rescued',`${H.ic}${H.n}มาช่วยชีวิตในยามคับขัน`,4,'🆘','help');return true;
}
function blDuo(b){const r=b.an&&bl()[plainName(b.an)];return r&&blB(r).duo?1.6:1;}
function blPanel(){
  const R=Object.values(bl()).sort((a,b)=>b.af+b.rv-a.af-a.rv).slice(0,8);if(!R.length)return '';
  return `<div class="card log" style="text-align:left;padding:8px"><b style="font-size:12px">🫂 ความสัมพันธ์</b>`+R.map(r=>{const t=blT(r),M=BLT[t],B=blB(r);return `<div>${r.ic} <b>${r.n}</b> ${M[0]}${M[1]}${B.duo?' 🤝คู่หู':''}${B.help?' 🆘ผู้ช่วยเหลือ':''} · ❤️${Math.round(r.af)}${r.rv>=10?' ⚔️'+Math.round(r.rv):''}<br><small>เจอกัน ${r.met} ครั้ง · ล่าสุดวันที่ ${r.last}</small></div>`;}).join('')+'</div>';
}
function blDay(){
  Object.values(bl()).forEach(r=>{const gap=S.day-r.last,t=blT(r);if(gap<=8)return;
    if(t==='ri'){r.pw=(r.pw||blPw())+.5+Math.random()*.5;}
    blSet(r,{af:t==='be'?-.4:-1,rv:t==='ri'?-.3:0});});
}
{
  const _f=soulFriend;soulFriend=function(name,ic,how,real){_f.apply(this,arguments);blTouch(name,ic,how,real);};
  const _n=newNpc;newNpc=function(rel){const p=_n.apply(this,arguments);if(p){const r=blTouch(p.n,p.ic,'meet');if(r&&p.rel==='r'&&r.rv<40)blSet(r,{rv:40});}return p;};
  const _s=soulFight;soulFight=function(w,b){_s.apply(this,arguments);if(b.xf&&b.xf.rival)blTouch(b.xf.name,b.xf.ic,w?'rivalw':'rivall');};
  const _m=soulFightMul;soulFightMul=function(c,b){const r0=_m.apply(this,arguments),r=b.an&&bl()[plainName(b.an)];if(!r)return r0;
    const k=1+({fr:.04,be:.08}[blT(r)]||0)+(blB(r).duo?.06:0);if(k>1&&!b._bl){b._bl=1;b.L.unshift(`💞 ${r.ic}${r.n}อยู่ข้างๆ ทำให้มีกำลังใจ!`);}return r0*k;};
  const _d=cqDay;cqDay=function(c){_d.apply(this,arguments);blDay();};
  const _h=cqHome;cqHome=function(force){const e=_h.apply(this,arguments);if(e||force)return e;return Math.random()<.3?blHome():null;};
  const _g=cqHatch;cqHatch=function(c,L){_g.apply(this,arguments);Object.values(bl()).forEach(r=>{r.af*=.6;r.rv*=.7;r.sh=Math.floor(r.sh*.3);r.sk=0;});};
}
