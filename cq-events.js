// ===== cq-events.js · เหตุการณ์สุ่มที่มีผลต่อเนื่อง · โหลดหลังสคริปต์หลัก =====
// ===== เหตุการณ์สุ่มที่มีผลต่อเนื่อง (สัตว์บาดเจ็บ · หีบปริศนา · นักเดินทางลึกลับ · ดาวตก) =====
// เก็บใน S.cq: th=เรื่องที่ค้าง(stage+วันครบกำหนด) · ally=เพื่อนร่วมศึก · fl=ธง(gate=หอดูดาวลับ) · star=เศษดาวตก · curse=คำสาปถึงวันที่ · win=นับชัยชนะ
const cq=()=>{const Q=S.cq||(S.cq={});Q.th=Q.th||{};Q.fl=Q.fl||{};Q.star|=0;Q.curse|=0;Q.win|=0;return Q;};
let cqFt=null;
const cB=n=>{S.c.bond=cl(S.c.bond+n);},cE=n=>{S.c.en=cl(S.c.en+n);},cqK=()=>BIO[PX.bi].lm*(1+S.depth*.06);
const cqT=(id,s,d,x)=>{cq().th[id]=Object.assign({s,due:S.day+d},x||{});},cqX=id=>{delete cq().th[id];};
const cqCk=st=>Math.random()<cl(.5+(eff(S.c,st)-(7+S.depth*.5))*.04,.2,.95);
const cqQ=g=>g.t==='w'?cq().win>=g.base+g.n:S.depth>=g.n;
function cqHurt(){const c=S.c;if(S.items.shield>0){S.items.shield--;return ' · 🛡️ โล่กันบาดเจ็บไว้';}c.hurt=S.day+3;return ' · 🩹 บาดเจ็บ';}
function cqChest(T,m){ // m: 0=เปิดตรงๆ 1=ถอดกลไก/ย่องผ่าน 2=ใช้กุญแจ
  const c=S.c,k=cqK(),n=c.name;
  if(T==='t'||m===2){const g=Math.round(280*k*(m===2?1.4:1));S.money+=g;let t=`${n}เปิดหีบ… ของล้ำค่าเรียงอยู่เต็ม! +฿${g}`;if(Math.random()<(m===2?.7:.4)){S.crystal++;t+=' · 💎+1';}t+=dxCol('t')+giveItem(true);recordMemory('relic','เปิดหีบปริศนา','ได้ของหายาก');return t;}
  if(T==='p'){if(m===1){const g=Math.round(120*k);S.money+=g;recordMemory('brave','ถอดกับดักหีบ','');return `${n}ถอดกลไกกับดักได้ทัน! ได้ของเล็กน้อย +฿${g}`+giveItem();}
    cq().curse=S.day+3;recordMemory('hurt','หีบกับดักสาป','');return `💥 กับดัก! ควันดำพุ่งออกมา${cqHurt()} · ☠️ คำสาปหีบ 3 วัน (ทุกวันพลัง −5 · ออกสำรวจเปลืองพลังเพิ่ม)`;}
  if(m===1){const g=Math.round(150*k);S.money+=g;return `${n}ย่องผ่านผู้พิทักษ์ที่หลับอยู่ แล้วหยิบของจากหีบข้างๆ ได้ +฿${g}`;}
  cqFt={ic:'🗿',name:'ผู้พิทักษ์หีบ',cq:'chest'};return 'FIGHT';
}
function cqEv(id,st){
  const c=S.c,n=c.name,Q=cq(),th=Q.th[id],r=Math.random;
  if(id==='inj'&&st===0)return{ti:'สัตว์บาดเจ็บ',q:`🩹 ${n}พบสัตว์ตัวหนึ่งนอนบาดเจ็บ ขาติดกับดัก มันมองมาอย่างหวาดระแวง`,o:[
    {l:'🤝 ช่วยเต็มที่ (−฿60 · พลัง −10)',n:'f',m:-60,e:-10,fn:()=>{S.money=Math.max(0,S.money-60);cE(-10);cB(4);cqT('inj',1,ri(3,5),{k:2});recordMemory('rescue','ช่วยสัตว์ติดกับดัก','อาจมีสักวันที่มันกลับมา');return `${n}ถอดกับดักและพันแผลให้ มันมองตามจนลับตา… 🐾 (รู้สึกว่าจะได้เจอกันอีก)`;}},
    {l:'🍖 แบ่งอาหารให้ (อิ่ม −10)',n:'f',u:-10,fn:()=>{c.hun=cl(c.hun-10);cB(2);cqT('inj',1,ri(4,6),{k:1});recordMemory('rescue','แบ่งอาหารให้สัตว์บาดเจ็บ','');return `${n}แบ่งอาหารให้แล้วเดินต่อ มันค่อยๆ ลุกขึ้นได้`;}},
    {l:'🚶 เดินผ่านไป',fl:1,b:-2,fn:()=>{cB(-2);cqT('inj',-1,ri(3,5));ctMood(c,'cautious',2,'ยังนึกถึงสัตว์ตัวนั้น');return `${n}เดินผ่านไป… แต่ยังหันกลับไปมองอยู่หลายครั้ง`;}}]};
  if(id==='inj'&&st===1)return{ti:'เพื่อนที่หายดีแล้ว',q:`🦊 สัตว์ตัวที่เคยช่วยไว้กลับมาหา${n} ขนฟูเงางาม ${th.k>1?'คาบของขวัญมาให้ด้วย':'ยังขี้อายอยู่หน่อยๆ'}`,o:[
    {l:'🐾 ชวนเป็นเพื่อนร่วมทาง',n:'f',b:4,fn:()=>{Q.ally={n:'ปุยฝ้าย',ic:'🦊',lv:th.k>1?2:1,h:0};cqX('inj');cB(4);recordMemory('friend','ปุยฝ้ายเป็นเพื่อนร่วมทาง','เพื่อนที่เคยถูกช่วย');return '🦊 ปุยฝ้ายสัญญาว่าจะโผล่มาช่วยในศึกบอส! (ติดตามข้ามรุ่นได้)';}},
    {l:'🎁 รับของขวัญแล้วให้กลับป่า',it:1,b:2,fn:()=>{cqX('inj');cB(2);return '🦊 มันทิ้งของไว้ให้แล้ววิ่งหายเข้าป่า'+giveItem();}}]};
  if(id==='inj'&&st===-1)return{ti:'สัตว์ตัวเดิมโผล่มา',q:`👀 สัตว์ที่เคยเห็นบาดเจ็บโผล่มาอีกครั้ง หายดีแล้ว… แต่จ้อง${n}ด้วยความน้อยใจ`,o:[
    {l:'🍖 ขอโทษด้วยอาหาร (อิ่ม −15)',n:'f',u:-15,fn:()=>{c.hun=cl(c.hun-15);cqT('inj',1,ri(2,4),{k:1});return 'มันค่อยๆ เดินมากินจนหมด ความน้อยใจจางลง… อาจได้เจอกันอีก';}},
    {l:'🙈 ทำเป็นไม่เห็น',fl:1,b:-2,fn:()=>{cqX('inj');cB(-3);return 'มันเดินหายเข้าป่าไปและไม่กลับมาอีก 🍂';}}]};
  if(id==='chest'){const T=pk(['t','t','p','g']);return{ti:'หีบปริศนา',q:`🧰 ${n}เจอหีบเก่าแก่ตั้งอยู่กลางทาง มีรอยขีดข่วนรอบๆ… ข้างในอาจเป็นของดี หรือกับดัก หรือมีผู้พิทักษ์เฝ้า`,o:[
    ...(dx().inv.key>0?[{l:'🗝️ ใช้กุญแจ (ได้ของดีแน่)',ky:1,m:300,fn:()=>{dx().inv.key--;return cqChest('t',2);}}]:[]),
    {l:'🔓 เปิดเลย (เสี่ยงดวง)',c:'?',m:280,g:.4,fn:()=>cqChest(T,0)},
    {l:'🧠 สำรวจก่อน (ปัญญา)',c:'int',fn:()=>cqCk('int')?'🔍 '+cqChest(T,1):'🔍 ดูไม่ออกว่าอะไรอยู่ข้างใน… '+cqChest(T,0)},
    {l:'🚶 ปล่อยไว้ (ปลอดภัย)',fl:1,fn:()=>`${n}มองหีบอีกครั้งแล้วเดินต่อ ไม่มีวันรู้ว่าข้างในมีอะไร`}]};}
  if(id==='trav'&&st===0)return{ti:'นักเดินทางลึกลับ',q:`🧙 นักเดินทางห่มผ้าคลุมยื่นข้อเสนอให้${n}: “ข้ามีของที่ไม่มีขายในตลาด… หรือรับงานจากข้าก็ได้”`,o:[
    {l:'🔁 แลกของโบราณ (−฿250)',m:-250,k:1,fn:()=>{if(S.money<250)return 'เงินไม่พอ นักเดินทางส่ายหน้าแล้วจากไป';S.money-=250;recordMemory('relic','แลกของกับนักเดินทาง','');return '🔁 ได้ของที่ไม่มีขายในร้านทั่วไป'+(dxCol('s')||giveItem(true));}},
    {l:'📜 รับภารกิจ (ปลดล็อกพื้นที่ลับ)',b:1,fn:()=>{const w=r()<.5,g=w?{t:'w',n:2,base:Q.win}:{t:'d',n:S.depth+4};cqT('trav',1,7,{g});recordMemory('secret','รับภารกิจจากนักเดินทาง','');return `📜 “${w?'ชนะศึก 2 ครั้ง':'ลงให้ถึงชั้น '+g.n} ภายใน 7 วัน แล้วข้าจะพาไปที่ที่แผนที่ไม่มี”`;}},
    {l:'🙅 ปฏิเสธ',fl:1,fn:()=>{Q.fl.travCool=S.day+6;return 'นักเดินทางพยักหน้า แล้วหายไปกับหมอก';}}]};
  if(id==='trav'&&st===2)return{ti:'นักเดินทางตามนัด',q:`🧙 นักเดินทางโผล่มาตามนัด “เจ้าทำได้จริงๆ” เขายื่นแผนที่ที่ไม่มีบนโลก`,o:[
    {l:'🗺️ ตามเขาไป (ปลดล็อกหอดูดาวลับ)',b:3,fn:()=>{Q.fl.gate=1;cqX('trav');unlockDiscovery('หอดูดาวลับของนักเดินทาง');return '🔭 ประตูหินบานหนึ่งถูกเปิดไว้ในแผนที่ของคุณแล้ว! (จะพบได้ระหว่างสำรวจ)';}},
    {l:'💰 ขอเป็นเงินแทน (฿400)',m:400,fn:()=>{cqX('trav');Q.fl.travCool=S.day+8;S.money+=400;return '💰 นักเดินทางหัวเราะแล้วยื่นถุงเงินให้';}}]};
  if(id==='gate')return{ti:'หอดูดาวลับ',q:`🔭 ประตูหินที่นักเดินทางทิ้งไว้เปิดออก… ข้างในคือหอดูดาวลับที่เต็มไปด้วยแสงวาบ`,o:[
    {l:'💪 บุกเข้าไป (แรง)',c:'str',fn:()=>cqGate(cqCk('str'))},{l:'🧠 อ่านแผนที่ดาว (ปัญญา)',c:'int',fn:()=>cqGate(cqCk('int'))},
    ...(Q.star>0?[{l:'☄️ ใช้เศษดาวเป็นกุญแจ (−1 ชิ้น)',fn:()=>{Q.star--;S.crystal++;return '☄️ เศษดาวเรืองแสง ประตูชั้นในเปิดออก 💎+1'+cqGate(1);}}]:[])]};
  if(id==='star'){const G=soulGroup(c)[0],rx={B:'ตาเป็นประกายอยากวิ่งตามไปดูจุดตก',K:'นั่งเงียบๆ แล้วหันมามองเจ้าของ เหมือนอยากขอพรให้ใครสักคน',P:'กระโดดโลดเต้นพยายามจับแสงบนฟ้า'}[G];
    return{ti:'ดาวตก',q:`🌠 ดาวตกพาดผ่านฟ้า! ${n}${rx}`,o:[
    {l:'🙏 ให้ขอพร',b:2,fn:()=>{if(G==='B'){c.str++;return `${n}ขอให้แข็งแกร่งขึ้น 💪+1`;}if(G==='K'){cB(8);return `${n}ขอให้ทุกคนมีความสุข ❤️+8`;}const g=Math.round(150*cqK());S.money+=g;cE(15);return `${n}ขอให้สนุกทั้งคืน ได้เงินและแรงกลับมา +฿${g}`;}},
    {l:'🏃 วิ่งตามไปที่ตก (พลัง −15)',c:'?',e:-15,it:1,fn:()=>{cE(-15);if(r()<(G==='B'?.85:.55)){Q.star++;recordMemory('relic','พบเศษดาวตก','ของโบราณที่ไม่มีขาย');return '☄️ พบเศษดาวตกเรืองแสง! (เก็บไว้ ×'+Q.star+' · ครบ 3 หลอมเป็น 💎 · 2 ชิ้นฝากไข่รุ่นหน้าได้)';}return 'วิ่งไปถึงก็เหลือแต่หลุมร้อนๆ… ไม่เจออะไร';}},
    {l:'👀 นั่งดูเฉยๆ',b:2,fn:()=>{cB(2);return `${n}นั่งพิงเจ้าของมองฟ้าจนดาวหายไป`;}},
    ...(Q.star>=3?[{l:'🔨 หลอมเศษดาว 3 ชิ้น → 💎',g:1,fn:()=>{Q.star-=3;S.crystal++;return '🔨 เศษดาวหลอมรวมเป็นผลึกตำนาน 💎+1';}}]:[])]};}
  return null;
}
function cqGate(ok){const Q=cq();if(!ok){cB(-1);return ' · ถูกแสงดันออกมา ได้แค่เศษเงิน ฿'+(S.money+=40,40);}Q.star++;const g=Math.round(260*cqK());S.money+=g;recordMemory('secret','หอดูดาวลับ','ได้ของเฉพาะพื้นที่');return `✨ ${S.c.name}เข้าถึงใจกลางหอ! +฿${g} · ☄️+1`+dxCol('s');}
function cqExp(ctx,s0){
  const c=S.c,Q=cq();if(Q.last===S.depth)return false;
  if(S.day<=Q.curse){c.en=cl(c.en-2);dxPre+='☠️ คำสาปหีบยังตามหลอก (พลัง −2)<br>';}
  const tv=Q.th.trav;
  if(tv&&tv.s===1){if(S.day>tv.due){cqX('trav');Q.fl.travCool=S.day+8;dxPre+='🧙 นักเดินทางรอจนเลยกำหนดแล้วหายไป… ภารกิจล้มเหลว<br>';}else if(cqQ(tv.g))tv.s=2;}
  let id=null,st=0;const due=Object.entries(Q.th).filter(([k,t])=>t.s===2||(k!=='trav'&&S.day>=t.due));
  if(due.length&&Math.random()<.65){id=due[0][0];st=due[0][1].s;}
  else if(Q.fl.gate&&Math.random()<.2)id='gate';
  else if(Math.random()<.14){const P=['chest','star'];if(!Q.th.inj&&!Q.ally)P.push('inj','inj');if(!Q.th.trav&&!Q.fl.gate&&S.day>=(Q.fl.travCool||0))P.push('trav','trav');id=pk(P);}
  if(!id)return false;const L=cqEv(id,st);if(!L)return false;
  Q.last=S.depth;XQ={L,ctx,s0,cq:id};xAsk();return true;
}
function cqPick(q,pick,pre){
  const L=q.L,t0=L.o[pick].fn();if(t0==='FIGHT')return xFight(cqFt);
  const t=pre+'✉️ '+t0;S.album.unshift({ti:L.ti,bi:PX.bi,day:S.day,n:S.c.name,ln:[t]});S.album=S.album.slice(0,30);
  gainXp(10);const ch=xChips(q.s0);xMsg(`${xOut(t,ch)}`);xAfter();
}
function cqHome(force){ // เหตุการณ์ที่บ้าน: ผลสืบเนื่องของสัตว์ที่เคยช่วย + ดาวตก
  const Q=cq(),c=S.c;if(!c)return null;let id=null,st=0;const inj=Q.th.inj;
  if(inj&&S.day>=inj.due&&(force||Math.random()<.7)){id='inj';st=inj.s;}else if(!force&&Math.random()<.5)id='star';else return null;
  const L=cqEv(id,st);return L?{t:L.q,a:L.o.map(o=>({l:o.l,f:()=>{log(o.fn());}}))}:null;
}
function cqDay(c){
  const Q=cq();if(S.day<=Q.curse){c.en=cl(c.en-5);if(S.day===Q.curse)log('☠️ คำสาปหีบจางหายแล้ว');}
  if(!S.ev&&!away()&&!S.b&&!S.evo){const e=cqHome(1);if(e){S.ev=e;S.evNext=S.day+2;render();}}
}
function cqAlly(f){const A=cq().ally;if(!f.boss||!A||Math.random()>.7+A.lv*.05)return null;A.h=(A.h||0)+1;if(A.h%2===0&&A.lv<5)A.lv++;return[A.lv*8+S.c.stage*5+S.depth*.4,A.ic,A.ic+A.n+' (เพื่อนที่เคยช่วย)'];}
function cqWin(f){const g=Math.round(300*cqK());S.money+=g;S.items.shield=(S.items.shield||0)+1;recordMemory('relic','พิชิตผู้พิทักษ์หีบ','ได้โล่ผู้พิทักษ์');return ` · 🗿 หีบเปิดแล้ว! +฿${g} · 🛡️โล่+1`+dxCol('t')+giveItem(true);}
function cqDie(L){const Q=cq();Q.curse=0;if(Q.star>=2){Q.star-=2;L.sm=1;}}
function cqHatch(c,L){
  if(L&&L.sm){['str','spd','int'].forEach(k=>c[k]+=2);c.starborn=1;log('🌠 ไข่เรืองแสงจากเศษดาวของรุ่นก่อน · ทุกสเตตัส +2');}
  const A=cq().ally;if(A){c.bond=cl(c.bond+8);log(`${A.ic} ${A.n}พาลูกมาทักทายไข่ใบใหม่ (เพื่อนข้ามรุ่น Lv${Math.floor(A.lv)}) · สนิท +8`);}
}
function cqSummary(){
  const Q=cq(),r=[],tv=Q.th.trav,ij=Q.th.inj;
  if(ij)r.push(ij.s>0?'🐾 สัตว์ที่ช่วยไว้ กำลังจะกลับมา':'👀 สัตว์ที่เคยเดินผ่าน ยังน้อยใจอยู่');
  if(Q.ally)r.push(Q.ally.ic+Q.ally.n+' เพื่อนร่วมศึก Lv'+Math.floor(Q.ally.lv));
  if(tv&&tv.s===1)r.push('📜 ภารกิจนักเดินทาง: '+(tv.g.t==='w'?`ชนะศึก ${Math.min(tv.g.n,Q.win-tv.g.base)}/${tv.g.n}`:`ลงถึงชั้น ${tv.g.n}`)+` · หมดเขตวันที่ ${tv.due}`);
  if(Q.fl.gate)r.push('🔭 หอดูดาวลับเปิดแล้ว');if(S.day<=Q.curse)r.push('☠️ คำสาปหีบ ถึงวันที่ '+Q.curse);if(Q.star)r.push('☄️ เศษดาวตก ×'+Q.star);
  return r.length?`<div class="discovery"><b>📌 เรื่องที่ยังค้างอยู่</b><br>${r.join('<br>')}</div>`:'';
}

function xGo(){
  const c=S.c,why=xWhy();if(why)return xMsg('⛔ '+why);
  if(!S.depth){S.dBi=PX.bi;S.dOf=c.seed;dxRun();c.act=null;c.at=false;c.auto=false;S.food=null;hideFeed();}PX.bi=S.dBi;const B=BIO[PX.bi];
  c.en=cl(c.en-xCost(),0,100);c.hun=cl(c.hun-1.5);S.depth++;S.bestD=Math.max(S.bestD||0,S.depth);qInc('dive');
  const s0=xSnap(),ctx=xctx(),r=Math.random;let t;dxWx(c);
  if(S.depth%10===0){log('🕳️ '+c.name+'ลงลึกถึงชั้น '+S.depth);return xChallenge(1);}
  if(S.depth%5===0){xMilestone();return;}
  if(dxNode(s0,ctx))return;
  if(cqExp(ctx,s0))return;
  if(ctStoryTry(ctx,s0))return;
  if(r()<Math.min(.9,.45+S.pity*.15)){
    S.pity=0;const x=r();
    if(x<.3+Math.min(.1,S.depth*.005)){xChallenge(0);return;}
    if(x<.68){ // เหตุการณ์ตามนิสัย (ผลต่างกันตามนิสัย)
      const e=S.npcs.length&&r()<.3?6:pk([0,1,2,4,5]);let o,tt;
      if(e===6){const p=pk(S.npcs);p.met++;ctx.p=p.ic+p.n;tt='ทริปเจอ{p}';
        if(p.rel==='r'){xFight({ic:p.ic,name:p.n,rival:1});return;}
        o={x:'{p}เพื่อนเก่าของ{n}โผล่มาช่วยชี้ทาง แถมแบ่งของให้!',m:120,b:3,it:Math.random()<.35?1:0};t=xfx(o,ctx,XI[6],tt);}
      else{dxSee('e:'+XE[e].tt);o=XE[e].o[c.trait]||XE[e].o._;t=xfx(o,ctx,XI[e],XE[e].tt);}
      gainXp(6);
    }else{ // เหตุการณ์ทางแยก ให้เราเลือก
      const q=dxPickL();XQ={L:q,ctx,s0};
      xAsk();return;
    }
  }else{ // ไม่เจอเหตุการณ์ → ได้เงินกับ XP เฉยๆ
    S.pity++;const m=Math.round((18+c.stage*8)*B.lm*(.8+r()*.4)*(1+S.depth*.06));S.money+=m;gainXp(8+c.stage*2);
    t='🚶 '+tmpl(pk(PL),ctx);if(r()<Math.min(.35,.08+S.depth*.01))t+=giveItem();if(r()<.14)t+=dxCol('w');
  }
  const ch=xChips(s0);xMsg(`${xOut(t,ch)}`);
  xAfter();
}
function xPick(k){const q=XQ;if(!q)return;XQ=null;xResolve(q,k);}
function xResolve(q,ch){
  if(q.fk)return dxDoor(q,ch);if(q.shop){xMsg(xOut('ออกจากร้านแล้ว','','🛒'));return xAfter();}
  const c=S.c,L=q.L,own=soulPick(L,c);let pick=ch,pre='';
  if(ch==null){pick=own;pre='⏳ '+c.name+'ตัดสินใจเอง: ';}
  else if(own!==ch&&Math.random()>soulObey(c,L.o[ch],cl(.35+c.bond*.006-(c.trait==='ซน'?.15:0),.2,.97))){pick=own;pre=soulDefy(c,L.o[ch]);}
  soulDecision(c,L,ch,pick);ctStoryResolve(q,pick);if(q.cq)return cqPick(q,pick,pre);if(L.o[pick].f)return xFight(q.f);
  const o=Object.assign({},L.o[pick]);o.x=pre+o.x;
  const t=xfx(o,q.ctx,'✉️',L.ti,1);gainXp(10);const ch2=xChips(q.s0);
  xMsg(`${xOut(t,ch2)}`);
  xAfter();
}
