// ===== autonomy.js · พฤติกรรมอิสระตามบุคลิกและความทรงจำ · โหลดหลัง bonds.js =====
// ที่บ้าน (ตอนว่าง ไม่ได้ทำกิจกรรม): 💨วิ่งเล่น(ขี้เล่น) · 😜แกล้งเพื่อนที่มา · 💤นอนมุมประจำ(ขี้เซา/พลังต่ำ) · 🚪ไปมองประตู(ชอบสำรวจ) · 🤲ช่วยเพื่อนที่เหนื่อย(ใจดี) · 👊ท้าสู้เงา(กล้า) · 🥺ตามติดเจ้าของ(ฝังใจ/ท้อ)
// สำรวจ: เลือกประตูเองตามนิสัย (ชอบประตูที่ไม่เคยเปิด/ท้าศัตรู/ขอพักเมื่อกลัว) · "แผลใจ" so.sc: แพ้ที่ไหนจำที่นั่น กลับไปแล้วลังเล (ปลอบ/อ้อม/ฝืน) เอาชนะได้จะค่อยๆ หาย
const abA=c=>(c.soul&&c.soul.ax)||{bold:0,kind:0,play:0};
const abSc=()=>{const so=S.c&&S.c.soul;return so?(so.sc=so.sc||[]):[];};
const abZone=()=>abSc().find(z=>z.bi===S.dBi&&Math.abs(z.d-S.depth)<=1&&z.s>0);
function abHeal(z){z.s=Math.max(0,z.s-1);if(z.s<=0){const Z=abSc();Z.splice(Z.indexOf(z),1);soulMem('heal','ก้าวผ่านความกลัวที่ชั้น '+z.d+' ของ '+BIO[z.bi].n+' ได้แล้ว',4,'🌤️','win');soulShift({bold:3});return true;}return false;}
function abScar(w,b){
  if(!b.xf||!S.depth||!S.c.soul)return;const Z=abSc(),nm=fightName(b);let z=Z.find(x=>x.bi===S.dBi&&Math.abs(x.d-S.depth)<=2);
  if(!w){if(z){z.s=Math.min(3,z.s+1);z.day=S.day;}else{Z.unshift({bi:S.dBi,d:S.depth,n:nm,s:b.xf.boss?2:1,day:S.day});Z.length=Math.min(Z.length,5);soulMem('scar',`ถูก ${nm} โจมตีที่ชั้น ${S.depth} ของ ${BIO[S.dBi].n} จำได้ไม่ลืม`,3,'😰',null);}}
  else if(z)abHeal(z);
}
function abExp(ctx,s0){
  const Q=cq(),c=S.c,z=abZone();if(!c||!c.soul||!z||Q.last===S.depth||Math.random()>.75)return false;
  const n=c.name,A=abA(c),br=A.bold>=30?'กัดฟันมองไปข้างหน้า':A.bold<=-30?'ตัวสั่นเทา ถอยไปหลบข้างเจ้าของ':'ชะงักเท้า';
  const L={ti:'ลังเล',q:`😰 ${n}${br} ตรงนี้คือที่ที่เคยถูก ${z.n} โจมตี…`,o:[
    {l:'🫂 ปลอบให้กำลังใจ',n:'f',b:2,fn:()=>{if(Math.random()<cl(.3+c.bond*.006+(A.kind>0?.1:0),.2,.9)){soulShift({bold:2});return n+'หายใจลึกๆ แล้วค่อยๆ ก้าวต่อ'+(abHeal(z)?' · 🌤️ ความกลัวจางหายไปแล้ว':' · กล้าขึ้นอีกนิด');}S.abj=1;return n+'ยังสั่นอยู่… แต่ยอมเดินตามไป (ตีไม่เต็มแรงจนกว่าจะกลับบ้าน)';}},
    {l:'🔀 อ้อมทาง (เร็ว · พลัง −6)',c:'spd',fl:1,fn:()=>{cE(-6);if(cqCk('spd'))return n+'พาอ้อมผ่านทางเลี่ยงได้สำเร็จ';cE(-8);return n+'หลงทางไปหน่อย (พลัง −8)';}},
    {l:'💪 ฝืนเดินผ่าน',c:'?',fn:()=>{if(Math.random()<cl(.3+A.bold*.006+eff(c,'str')*.01,.15,.85)){return n+'กัดฟันเดินผ่านจุดเดิมได้!'+(abHeal(z)?' · 🌤️ ก้าวข้ามความกลัวสำเร็จ':'');}S.abj=1;return n+'ขาแข็งไปทั้งตัว… ผ่านมาได้แต่ยังตัวสั่น';}}]};
  Q.last=S.depth;XQ={L,ctx,s0,cq:'ab'};xAsk();return true;
}
function abDoor(q){
  const c=S.c,A=abA(c),z=abZone();let best=q.def,bs=-9,why='';
  q.fk.forEach((t,i)=>{let s=(i===q.def?.5:0)+Math.random()*.4,w='';
    if(dxUn(t)&&(soulQ('wanderer')||A.play>20)){s+=1.2;w='🚪 อยากดูประตูที่ไม่เคยเปิด';}
    if(t==='fight'){if(A.bold>25){s+=.9;w='⚔️ อยากท้าทายศัตรู';}if(A.bold<-25)s-=.9;if(z)s-=1.5;}
    if(t==='camp'&&(soulQ('sleepy')||c.en<40||z)){s+=.9;w=z?'😰 ไม่อยากเสี่ยง ขอพักก่อน':'😴 ง่วงแล้ว';}
    if(t==='sec'&&A.play>10)s+=.4;
    if(s>bs){bs=s;best=i;why=w;}});
  if(why)dxPre+=why+'<br>';return best;
}
// ---- พฤติกรรมที่บ้าน
const abR=()=>({x:ri(10,90),y:ri(58,92)});
function abPick(c){
  const A=abA(c),so=c.soul,v=S.vis,Z=abSc().filter(z=>S.day-z.day<=4).reduce((m,z)=>Math.max(m,z.s),0),ph=(so.im||[]).some(i=>i.id==='phobia');
  const W={zoom:c.en>35?Math.max(0,A.play-10)/30:0,tease:v?Math.max(0,A.play)/35:0,nap:(soulQ('sleepy')?1.5:0)+(c.en<50?.7:0)+(A.play<-25?.4:0),
    peek:(soulQ('wanderer')?1.2:0)+(Object.keys(DXT).some(dxUn)?0:-9),help:v&&A.kind>15?A.kind/30:0,shadow:A.bold>25&&c.en>40?A.bold/40:0,cling:(Z?1.2*Z:0)+(so.ls>=2?.8:0)+(ph?.3:0)};
  const ks=Object.keys(W).filter(k=>W[k]>0.15);if(!ks.length)return null;let r=Math.random()*ks.reduce((s,k)=>s+W[k],0);for(const k of ks){if((r-=W[k])<=0)return k;}return ks[0];
}
const AB={
  zoom:{t:[8,14],say:'💨 พลังล้น! วิ่งเล่น~',zm:1},tease:{t:[7,10],say:'😜 ไปกวนเพื่อนซะหน่อย'},nap:{t:[12,22],say:'💤 ง่วงจัง… ไปนอนมุมประจำ'},
  peek:{t:[7,10],say:'🚪 อยากรู้จังว่าข้างนอกมีอะไร…',pos:{x:6,y:66}},help:{t:[7,10],say:'🤲 เพื่อนดูเหนื่อย ไปช่วยประคอง'},
  shadow:{t:[7,10],say:'👊 ท้าสู้เงาตัวเอง!',pos:{x:50,y:62}},cling:{t:[10,20],say:'🥺 อยู่ใกล้ๆ เจ้าของนะ',pos:{x:50,y:86}}};
function abStart(c,k){
  const d=AB[k],so=c.soul;let p=d.pos||abR();
  if(k==='nap'){if(!so.nap)so.nap={x:ri(12,88),y:ri(88,93)};p=so.nap;}
  if((k==='tease'||k==='help')&&S.vis){const s=SPOTS[S.vis.k];p={x:s.tx+6,y:s.ty};}
  c.ab={k,t:ri(d.t[0],d.t[1]),x:p.x,y:p.y,zm:d.zm};setSay(d.say,2500);
}
function abEnd(c,a){
  const so=c.soul,v=S.vis,r=v&&typeof bl==='function'&&bl()[v.w.n];
  if(a.k==='tease'&&v){const g=Math.random()<.7;if(r)blSet(r,{af:g?2:-2});log(`😜 ${c.name}ไปแกล้ง ${v.w.ic}${v.w.n} — ${g?'อีกฝ่ายหัวเราะแล้ววิ่งไล่':'อีกฝ่ายงอนนิดๆ'}`);}
  else if(a.k==='help'&&v){v.left+=2;soulShift({kind:1});if(r)blSet(r,{af:3});log(`🤲 ${c.name}ช่วยประคอง ${v.w.ic}${v.w.n} ที่เหนื่อย — ฝึกต่อได้อีกพัก`);}
  else if(a.k==='shadow'){if(c.nocap||c.str<capOf('str'))c.str+=.1;setSay('💪 ได้ที!',1800);}
  else if(a.k==='peek'){const n=Object.keys(DXT).filter(dxUn).length;setSay(n?`🚪 ยังมีประตูอีก ${n} แบบที่ไม่เคยเปิด`:'🚪 ประตูทุกแบบเคยเปิดแล้ว',3000);}
  else if(a.k==='nap'){setSay('🥱 ตื่นแล้ว~',1800);if(!so.napMem){so.napMem=1;soulMem('nap',c.name+'มีมุมนอนประจำของตัวเอง ใครมานอนแทนไม่ได้',2,'💤',null);}}
}
function abTick(c){
  const so=c.soul;if(!so||S.ev||S.b)return;
  if(c.act||S.food||c.hun<15){c.ab=null;return;}
  const a=c.ab;
  if(a){a.t--;if(a.k==='zoom')c.en=cl(c.en-.8);else if(a.k==='nap'){c.en=cl(c.en+2.5);if(a.t%5===0)setSay('💤 …',1800);}else if(a.k==='cling')c.bond=cl(c.bond+.25);
    if((a.k==='tease'||a.k==='help')&&!S.vis)a.t=0;if(a.t<=0){abEnd(c,a);c.ab=null;c.wx=null;}return;}
  if(Math.random()>.07)return;const k=abPick(c);if(k)abStart(c,k);
}
{
  const _s=soulFight;soulFight=function(w,b){_s.apply(this,arguments);try{abScar(w,b);}catch(e){}};
  const _m=soulFightMul;soulFightMul=function(c,b){const r=_m.apply(this,arguments);if(S.abj&&!b._ab){b._ab=1;b.L.unshift('😰 ความกลัวยังไม่หาย ตัวแข็งไปหมด');}return S.abj?r*.92:r;};
  const _ss=soulStep;soulStep=function(c){_ss.apply(this,arguments);try{abTick(c);}catch(e){}};
  const _ap=autoPick;autoPick=function(c){if(c.ab)return;return _ap.apply(this,arguments);};
  const _ml=moveLoop;moveLoop=function(){const c=S.c;if(c&&c.ab&&!c.act&&!S.food&&!away()){const a=c.ab;if(a.zm&&Math.hypot(c.x-a.x,c.y-a.y)<2){const p=abR();a.x=p.x;a.y=p.y;}c.wx=a.x;c.wy=a.y;_ml.apply(this,arguments);if(a.zm)_ml.apply(this,arguments);return;}return _ml.apply(this,arguments);};
  const _dd=dxDoor;dxDoor=function(q,ch){if(ch==null&&S.c&&S.c.soul&&q.fk)q.def=abDoor(q);return _dd.apply(this,arguments);};
  const _dh=dxHome;dxHome=function(){S.abj=0;return _dh.apply(this,arguments);};
  const _cd=cqDay;cqDay=function(c){_cd.apply(this,arguments);const Z=abSc();Z.forEach(z=>{if(S.day-z.day>20){z.s--;z.day=S.day;}});if(c.soul)c.soul.sc=Z.filter(z=>z.s>0);};
}
