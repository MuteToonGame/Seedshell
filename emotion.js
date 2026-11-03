// ===== emotion.js · อารมณ์ (แยกจากบุคลิก) · โหลดหลัง autonomy.js =====
// บุคลิก = แกน so.ax (เปลี่ยนช้า) · อารมณ์ = so.em 6 ค่า (0-100) เปลี่ยนตามเหตุการณ์/เวลา แล้วค่อยๆ กลับสู่ปกติ
// 😊มีความสุข(ผูกมิตรง่าย) 🔥มั่นใจ(ตีแรง+ ≤4%) 😰กังวล(ชอบพัก) 💭เหงา(ไปรอเพื่อน/เพื่อนแวะบ่อย) 🤩ตื่นเต้น(ออกสำรวจเปลืองพลังน้อยลง) 😔ท้อแท้(ฝึกได้น้อยลง ≤25% ชั่วคราว)
// ฟื้นฟู: ให้อาหาร (ของโปรดยิ่งดี) · แตะตัวสัตว์เล่นด้วย · พาไปที่ที่ชอบ · เพื่อนมาเยี่ยม · ความผูกพันสูง=ฟื้นเร็ว · อารมณ์ลบจางเองทุกวัน
const EMK=['j','c','a','l','x','d'],EMB={j:40,c:30,a:10,l:8,x:25,d:6};
const EMN={j:['😊','มีความสุข'],c:['🔥','มั่นใจ'],a:['😰','กังวล'],l:['💭','เหงา'],x:['🤩','ตื่นเต้น'],d:['😔','ท้อแท้']},EMM={j:'happy',c:'confident',a:'anxious',l:'lonely',x:'excited',d:'discouraged',n:'calm'};
Object.assign(CT_MOODS,{happy:{ic:'😊',name:'มีความสุข'},anxious:{ic:'😰',name:'กังวล'},excited:{ic:'🤩',name:'ตื่นเต้น'},discouraged:{ic:'😔',name:'ท้อแท้'},calm:{ic:'😌',name:'สงบ'}});
const emS=c=>{const so=c&&c.soul;if(!so)return null;if(!so.em)so.em=Object.assign({},EMB);return so.em;};
function emDom(c){const e=emS(c);if(!e)return 'n';const neg=['a','l','d'].filter(k=>e[k]>=50).sort((p,q)=>e[q]-e[p])[0];if(neg)return neg;const pos=['j','c','x'].filter(k=>e[k]>=45).sort((p,q)=>e[q]-e[p])[0];return pos||'n';}
function emAdd(d){
  const c=S.c,e=emS(c);if(!e)return;const calm=1-Math.min(.4,(c.bond>=60?.2:0)+(abA(c).bold>30?.2:0));
  Object.keys(d).forEach(k=>{let v=d[k];if((k==='a'||k==='d'||k==='l')&&v>0)v*=calm;e[k]=cl(e[k]+v,0,100);});emSync(c);
}
const EMI={win:{c:8,j:4,d:-6},boss:{c:12,j:6,d:-10},streak:{c:8,j:4},revenge:{c:10,j:6,a:-8},lose:{c:-6,a:8,d:6},fear:{a:12,c:-6},slump:{d:12,a:6,j:-6},scar:{a:10},hurt:{a:6,d:4},betray:{a:6,d:6,j:-6},
  friend:{j:8,l:-20},help:{j:6,l:-10},reunion:{j:12,l:-25},forgive:{j:6,a:-8},aided:{j:6,l:-10},rescued:{j:8,a:-10},rescue:{j:6,l:-6},camp:{j:6,a:-6},trip:{j:6,l:-15},
  relic:{x:12,j:4},secret:{x:14,j:4},legend:{x:15,j:10,c:8},evolve:{j:10,x:10},brave:{c:6,x:6},hunger:{d:8,a:6,j:-6},heal:{c:8,a:-14,d:-8},birth:{x:12,j:6}};
function emSync(c){
  const so=c.soul,d=emDom(c),ph=so.emD;so.mood={key:EMM[d],until:S.day+1,reason:d==='n'?'ใจสงบ':'ความรู้สึกตอนนี้'};
  if(ph!==d){so.emD=d;if(ph!==undefined&&d!=='n'){const t={a:'😰 ใจไม่สงบเลย…',l:'💭 คิดถึงเพื่อนจัง',d:'😔 ไม่ค่อยมีกำลังใจ…',j:'😊 วันนี้อารมณ์ดี!',c:'🔥 รู้สึกมั่นใจ!',x:'🤩 อยากออกไปสำรวจ!'}[d];if(t)setSay(t,2500);}}
}
function emTap(ev){
  if(ev)ev.stopPropagation();const c=S.c,e=emS(c);if(!c||!e||S.ev||S.b||S.over||S.evo||MG||away())return;
  if(S.tick-(c.emTap||-99)<12){setSay('😅 พักหน่อยนะ',1200);return;}c.emTap=S.tick;const A=abA(c);
  const R=A.play>25?['🎾 วิ่งไล่จับมือกันใหญ่!',{j:12,l:-12,d:-10,a:-6,x:4}]:A.bold>25?['🥊 ซ้อมต่อยเบาๆ กับเจ้าของ',{c:8,j:8,d:-8}]:A.kind>25?['🤗 ถูไถอ้อมกอดเจ้าของ',{j:10,a:-10,l:-12}]:['🫳 ให้เจ้าของลูบหัวเงียบๆ',{a:-10,j:6,d:-6}];
  emAdd(Object.assign({d:-8,a:-4,j:4},R[1]));c.bond=cl(c.bond+1);setSay(R[0],2200);render();
}
function emTick(c){
  const e=emS(c);if(!e)return;
  EMK.forEach(k=>{e[k]+=(EMB[k]-e[k])*.003;});
  if(c.hun<25){e.d=cl(e.d+.4);e.a=cl(e.a+.3);}if(c.en<20)e.d=cl(e.d+.3);if(away())e.x=cl(e.x-.1);
  if(!away()&&emDom(c)==='x'&&Math.random()<.015)setSay('🤩 อยากออกไปสำรวจแล้ว!',2500);
  if(S.tick%20===0)emSync(c);
}
function emDay(c){
  const e=emS(c);if(!e)return;const A=abA(c),f=c.bond>=70?.4:.25;
  ['a','l','d'].forEach(k=>{e[k]+=(EMB[k]-e[k])*f;});['j','c','x'].forEach(k=>{e[k]+=(EMB[k]-e[k])*.12;});
  const R=Object.values(bl()),fr=R.filter(r=>r.af>=30);
  if(fr.length){const gap=S.day-Math.max(...fr.map(r=>r.last));if(gap>=3)e.l=cl(e.l+Math.min(8,3+gap),0,70);}else e.l=Math.min(30,e.l+2);
  if(soulQ('wanderer')||A.bold>20||A.play>20)e.x=cl(e.x+4);
  emSync(c);
}
const emXc=()=>emDom(S.c)==='x'?1:0;
function emPanel(){
  const c=S.c,e=emS(c);if(!e)return '';const d=emDom(c),bar=v=>'█'.repeat(Math.round(v/12.5))+'░'.repeat(8-Math.round(v/12.5));
  const tip=['a','l','d'].includes(d)?`<br>💡 ปลอบใจ: ให้อาหาร (ของโปรดดีที่สุด) · แตะตัวสัตว์เล่นด้วย${c.soul.fav?' · พาไป '+SPOTS[c.soul.fav].ic+SPOTS[c.soul.fav].n:''}${d==='l'?' · ให้เพื่อนมาเยี่ยม':''}`:'';
  return `<div class="card log" style="text-align:left;padding:8px"><b style="font-size:12px">🌤️ อารมณ์ตอนนี้ (ชั่วคราว ต่างจากบุคลิก)</b><div style="margin:3px 0"><b>${d==='n'?'😌 สงบ':EMN[d][0]+' '+EMN[d][1]}</b></div>`+EMK.map(k=>`<div style="font-family:monospace;font-size:11px">${EMN[k][0]} ${bar(e[k])} ${Math.round(e[k])}</div>`).join('')+`<small>${tip||'อารมณ์เปลี่ยนไปตามเหตุการณ์และค่อยๆ กลับมาสงบเอง'}</small></div>`;
}
{
  const _m=soulMem;soulMem=function(k,t,w){_m.apply(this,arguments);const d=EMI[k];if(d){const s=(w||1)>=4?1.5:(w||1)>=3?1:.6,o={};Object.keys(d).forEach(x=>o[x]=d[x]*s);emAdd(o);}};
  const _cm=ctMood;ctMood=function(c,key,days,reason){_cm.apply(this,arguments);const o={caring:{j:5,l:-4},confident:{c:5},cautious:{a:5},curious:{x:4},lonely:{l:6}}[key];if(o&&c===S.c)emAdd(o);};
  const _se=soulEat;soulEat=function(c,k){_se.apply(this,arguments);const fav=c.soul&&c.soul.ff===k;emAdd({j:fav?16:8,d:fav?-16:-10,a:-6});};
  const _sa=soulAct;soulAct=function(c,a){_sa.apply(this,arguments);if(c.soul&&c.soul.fav===a)emAdd({j:.6,d:-.8,a:-.4});};
  const _ts=tapSpot;tapSpot=function(k){_ts.apply(this,arguments);const c=S.c,so=c&&c.soul;if(so&&so.fav===k&&c.act===k&&so.emFav!==S.day){so.emFav=S.day;emAdd({j:10,d:-10,a:-6});setSay('💖 ได้ไปที่ที่ชอบ!',2000);}};
  const _fr=soulFriend;soulFriend=function(){_fr.apply(this,arguments);emAdd({j:6,l:-25});};
  const _fm=soulFightMul;soulFightMul=function(c,b){const r=_fm.apply(this,arguments),e=emS(c);if(!e)return r;
    let k=1;if(e.c>=50)k*=1+.04*(e.c-40)/60;if(e.d>=50)k*=.96;if(e.a>=60)k*=.97;return r*k;};
  const _bs=blSet;blSet=function(r,d){if(d&&d.af>0&&emDom(S.c)==='j'){d=Object.assign({},d,{af:d.af*1.25});}return _bs.call(this,r,d);};
  const _doA=doAct;doAct=function(c){const e=emS(c),b=[c.str,c.spd,c.int,S.money];_doA.apply(this,arguments);
    if(e&&e.d>=50){const f=1-.25*Math.min(1,(e.d-45)/50);c.str=b[0]+(c.str-b[0])*f;c.spd=b[1]+(c.spd-b[1])*f;c.int=b[2]+(c.int-b[2])*f;S.money=Math.round(b[3]+(S.money-b[3])*f);}};
  const _ap=autoPick;autoPick=function(c){if(emDom(c)==='a'&&c.en<90&&Math.random()<.5){c.act='rest';c.at=false;c.auto=true;c.autoLeft=ri(6,12);setSay('😰 ไม่ไหวแล้ว… ขอพักก่อน',2000);return;}return _ap.apply(this,arguments);};
  AB.wait={t:[8,12],say:'💭 คิดถึงเพื่อน… นั่งรอที่ประตู',pos:{x:6,y:66}};
  const _pk=abPick;abPick=function(c){const d=emDom(c);if(d==='l'&&Math.random()<.5)return 'wait';if(d==='x'&&Math.random()<.4)return pk(['zoom','peek']);return _pk.apply(this,arguments);};
  const _vt=visTick;visTick=function(){_vt.apply(this,arguments);const c=S.c;if(!c||S.vis||away()||emDom(c)!=='l'||Math.random()>.06)return;
    const pool=[...S.npcs.filter(p=>p.rel==='f').map(p=>({t:'n',n:p.n,ic:p.ic})),...S.guests.map(g=>({t:'g',id:g.id,n:g.n,ic:'🐾'}))];
    if(pool.length){const w=pk(pool),k=pk(['read','lift','run']);S.vis={w,k,left:ri(7,12)};log(`${w.ic} ${w.n} รู้ว่า ${c.name}เหงา เลยแวะมาหา!`);}};
  const _st=soulStep;soulStep=function(c){_st.apply(this,arguments);try{emTick(c);}catch(e){}};
  const _cd=cqDay;cqDay=function(c){_cd.apply(this,arguments);try{if(c.soul)emDay(c);}catch(e){}};
  const _rd=render;render=function(){const r=_rd.apply(this,arguments);try{const c=S.c;if(c&&c.soul){let el=$('emChip');if(!el){const pb=$('petBars');if(pb&&pb.parentNode){el=document.createElement('div');el.id='emChip';el.className='log';el.style.cssText='text-align:left;margin:2px 0';pb.parentNode.insertBefore(el,pb);}}
    if(el){const d=emDom(c);el.innerHTML=d==='n'?'😌 สงบ':`${EMN[d][0]} ${EMN[d][1]}${['a','l','d'].includes(d)?' · <small>แตะตัวสัตว์เพื่อเล่นด้วย / ให้อาหาร</small>':''}`;}}}catch(e){}return r;};
  const pe=document.getElementById('pet');if(pe)pe.addEventListener('click',emTap);
}
