// ===== soul-deep.js · Soul Memory ลึกขึ้น · โหลดหลัง boss-battle.js =====
// 6.3 ระดับความทรงจำ: ทั่วไป(w1-2) · 🔹สำคัญ(3) · ⭐ฝังใจ(4) · 👑ตำนาน(5)  → ฝังใจ/ตำนานก่อ "ตัวตน(imprint)" ที่เปลี่ยนพฤติกรรม/ความสามารถ (ตำนาน = ระดับ 2 แรงกว่า + สเตตัส +2)
// 6.1 พฤติกรรม: ผู้กล้า(ตีแรง) · ขวัญหนี(ตีอ่อนต่อศัตรูที่เคยแพ้ มักเลือกหนี) · ใจช่วยเหลือ · หวงอาหาร · รักหมู่คณะ(ตีแรงเมื่อมีเพื่อน)
// 6.2 เมล็ดความทรงจำ S.sd: ช่วยใครไว้/ถูกแย่งอาหาร → หลายวันต่อมากลับมาเป็นเหตุการณ์  6.4 สืบทอด: สุ่มส่งตัวตน/ความกลัว/ความชอบ/นิสัย/ความทรงจำให้รุ่นลูก (ไม่ก๊อปทั้งหมด)
const SDI={courage:['🦁','ผู้กล้า','ตีแรง +5% ต่อระดับ'],phobia:['😨','ขวัญหนี','ตีอ่อนลงเมื่อเจอศัตรูที่เคยแพ้ · มักเลือกหนี'],helper:['🤲','ใจช่วยเหลือ','เลือกช่วยผู้อื่นบ่อยขึ้น'],guard:['🍖','หวงอาหาร','ไม่ค่อยยอมแบ่งอาหาร'],social:['💞','รักหมู่คณะ','ตีแรงขึ้นเมื่อมีเพื่อนข้างๆ']};
const SDA={courage:['bold',8],phobia:['bold',-6],helper:['kind',8],guard:['kind',-6],social:['play',5]};
const sdIm=()=>{const so=S.c&&S.c.soul;return so?(so.im=so.im||[]):[];};
const sdBadge=e=>e.w>=3?' · '+(e.w>=5?'👑 ตำนาน':e.w>=4?'⭐ ฝังใจ':'🔹 สำคัญ'):'';
const sdSeed=(k,n,ic,d)=>{(S.sd=S.sd||[]).push({k,n,ic,due:S.day+d});};
function sdImp(id,lv,t,from){
  const I=sdIm(),own=from!=='inherit';let x=I.find(i=>i.id===id&&(i.t||'')===(t||''));
  if(x){if(own&&x.from==='inherit'){x.from='own';x.lv=Math.max(x.lv,lv);}else if(lv>x.lv)x.lv=lv;else return;}else I.push(x={id,lv,t:t||'',from:from||'own',d:S.day});
  if(!own)return;const A=SDA[id];soulShift({[A[0]]:A[1]*lv});
  soulMem('imprint',`ตัวตนใหม่ก่อตัว: ${SDI[id][0]} ${SDI[id][1]}${t?' ('+t+')':''}${lv>=2?' ระดับตำนาน':''}`,lv>=2?5:4,SDI[id][0],null);
  const st={courage:'str',helper:'int',social:'spd'}[id];if(lv>=2&&st)S.c[st]+=2;
}
function sdFightMul(c,b){
  let m=1;const nm=fightName(b);
  sdIm().forEach(i=>{const k=i.from==='inherit'?.6:1;
    if(i.id==='courage')m*=1+.05*i.lv*k;else if(i.id==='phobia'&&i.t===nm)m*=1-.08*i.lv*k;else if(i.id==='social'&&b.an)m*=1+.06*i.lv*k;});
  return m;
}
function sdBias(L,c,i){
  const I=(c.soul&&c.soul.im)||[],o=L.o||[];if(!o.length)return i;
  const has=id=>I.find(x=>x.id===id),any=f=>{const a=o.map((x,j)=>[x,j]).filter(([x])=>f(x));return a.length?a[Math.floor(Math.random()*a.length)][1]:i;};let h;
  if((h=has('phobia'))&&Math.random()<.22*h.lv)return any(x=>x.fl);
  if((h=has('helper'))&&Math.random()<.3*h.lv)return any(x=>x.n==='f'||(x.b||0)>=3);
  if((h=has('guard'))&&Math.random()<.35*h.lv&&(o[i].u||0)<0)return any(x=>!(x.u<0));
  if((h=has('courage'))&&Math.random()<.2*h.lv)return any(x=>x.f||x.c==='?');
  return i;
}
function sdSteal(){const c=S.c,n=c.name;return{ti:'แย่งอาหาร',q:`🦝 ${n}กำลังกินของอยู่ สัตว์ป่าตัวหนึ่งพุ่งเข้ามาแย่งอาหาร!`,o:[
  {l:'⚔️ แย่งคืน (แรง)',c:'str',fn:()=>{if(cqCk('str')){soulShift({bold:2});return n+'ไล่มันหนีไป ได้อาหารคืนครบ!';}c.hun=cl(c.hun-20);sdImp('guard',1);return n+'แย่งไม่สำเร็จ อาหารหายไป… 🍖 หวงอาหารขึ้นมาทันที (อิ่ม −20)';}},
  {l:'🙏 ปล่อยให้ไป (อิ่ม −15)',n:'f',b:1,u:-15,fn:()=>{c.hun=cl(c.hun-15);soulShift({kind:2});sdSeed('thief','จอมแย่งอาหาร','🦝',ri(4,8));return n+'ยอมให้มันกินไป มองตามหลังมันแล้วถอนใจเบาๆ';}},
  {l:'🏃 คว้าอาหารวิ่งหนี (เร็ว)',c:'spd',fl:1,fn:()=>cqCk('spd')?n+'คว้าอาหารวิ่งหนีรอดได้!':(c.hun=cl(c.hun-12),'ถูกกระชากไปครึ่งหนึ่ง… (อิ่ม −12)')}]};}
function sdCub(x){const c=S.c,n=c.name,Q=cq();return{ti:'ผู้ที่เคยช่วยกลับมา',q:`🐾 สัตว์ตัวใหญ่ตัวหนึ่งวิ่งเข้าหา${n}ด้วยท่าทางดีใจ… มันคือ ${x.ic}${x.n} ที่เคยถูกช่วยไว้ ตอนนี้โตเต็มวัยแล้ว!`,o:[
  {l:'🤝 ทักทายและรับของขวัญ',n:'f',b:3,fn:()=>{cB(5);S.items.shield=(S.items.shield||0)+1;soulMem('reunion',`${x.ic}${x.n}ที่เคยช่วยไว้ กลับมาตอบแทนเมื่อโตแล้ว`,4,'🌱','help');return `${x.n}คาบของมาให้และเอาหัวถูไถ 🛡️+1`+giveItem(true);}},
  {l:'🐾 ชวนไปผจญภัยด้วยกัน',n:'f',b:3,fn:()=>{soulMem('reunion',`ชวน ${x.ic}${x.n}ที่เคยช่วยไว้ ไปผจญภัยด้วยกัน`,4,'🌱','friend');if(!Q.ally){Q.ally={n:x.n,ic:x.ic,lv:2,h:0};return `${x.ic}${x.n}ตกลงเป็นเพื่อนร่วมศึกของ${n}! (ช่วยในศึกบอส)`;}cB(5);return `${x.n}ดีใจมาก แต่ขอกลับไปดูแลบ้านก่อน ฝากของไว้`+giveItem();}}]};}
function sdThief(x){const c=S.c,n=c.name;return{ti:'ผู้แย่งอาหารกลับมา',q:`🦝 สัตว์ที่เคยแย่งอาหารของ${n}โผล่มาอีกครั้ง คาบผลไม้มาด้วย ท่าทางสำนึกผิด`,o:[
  {l:'💚 ให้อภัย',n:'f',b:2,fn:()=>{S.c.soul.im=sdIm().filter(i=>i.id!=='guard');c.hun=cl(c.hun+25);cB(3);soulShift({kind:3});soulMem('forgive','ให้อภัยจอมแย่งอาหาร จนปล่อยวางเรื่องหวงอาหารได้',3,'🕊️','help');return 'มันวางผลไม้ไว้แล้วเอาหัวโขกเบาๆ 🍎 (อิ่ม +25 · เลิกหวงอาหาร)'+giveItem();}},
  {l:'😤 ไล่ไป',fl:1,fn:()=>'มันก้มหน้าเดินหายไป… ความระแวงยังไม่หายไป'}]};}
function sdExp(ctx,s0){
  const Q=cq(),c=S.c;if(!c||!c.soul||Q.last===S.depth)return false;
  const d=(S.sd||[]).findIndex(x=>S.day>=x.due);let L=null;
  if(d>=0&&Math.random()<.6){const x=S.sd.splice(d,1)[0];L=x.k==='cub'?sdCub(x):sdThief(x);}
  else if(S.depth>=2&&Math.random()<.05&&!sdIm().some(i=>i.id==='guard'))L=sdSteal();
  if(!L)return false;Q.last=S.depth;XQ={L,ctx,s0,cq:'sd'};xAsk();return true;
}
function sdBequeath(L){
  const c=S.c,so=c&&c.soul;if(!so)return;
  const top=so.j.filter(e=>e.w>=4&&e.k!=='imprint'&&e.k!=='inherit').sort((a,b)=>b.w-a.w)[0];
  L.sd={pn:c.name,im:sdIm().map(i=>({id:i.id,lv:i.lv,t:i.t})),fe:Object.keys(so.fear).filter(n=>so.fear[n]>=2),fav:so.fav,ff:so.ff,q:so.q.slice(),mem:top?top.t:''};
}
function sdInherit(c,L){
  const D=L&&L.sd,so=c.soul,R=Math.random,got=[];if(!D||!so)return;
  D.im.forEach(i=>{if(R()<(i.lv>=2?.85:.55)){sdImp(i.id,Math.max(1,i.lv-(R()<.5?1:0)),i.t,'inherit');got.push(SDI[i.id][0]+SDI[i.id][1]);}});
  D.fe.forEach(n=>{if(R()<.5){so.fear[n]=1;got.push('😨ไม่ชอบ '+n);}});
  if(D.fav&&SPOTS[D.fav]&&R()<.4){so.fav=D.fav;got.push(SPOTS[D.fav].ic+'ชอบ'+SPOTS[D.fav].n);}
  if(D.ff&&FOODS[D.ff]&&R()<.4){so.ff=D.ff;got.push(FOODS[D.ff].ic+'ชอบ'+FOODS[D.ff].n);}
  if(D.q.length&&R()<.35){const q=pk(D.q);if(QK[q]&&!so.q.includes(q)){so.q[1]=q;got.push(QK[q][0]+QK[q][1]);}}
  if(D.mem&&R()<.7){soulMem('inherit','🧬 ความทรงจำที่ส่งต่อจาก '+D.pn+': '+D.mem,4,'🧬',null);got.push('ความทรงจำสำคัญ');}
  if(got.length)log('🧬 สืบทอดจาก '+D.pn+': '+got.join(' · '));
}
function sdPanel(){const I=sdIm();if(!I.length)return '';return `<div class="card log" style="text-align:left;padding:8px"><b style="font-size:12px">🧬 ตัวตนที่ก่อตัวจากความทรงจำ</b>`+I.map(i=>`<div>${SDI[i.id][0]} <b>${SDI[i.id][1]}${i.t?' ('+i.t+')':''}</b> ${i.lv>=2?'👑 ตำนาน':'⭐ ฝังใจ'}${i.from==='inherit'?' · 🧬 สืบสาย':''}<br><small>${SDI[i.id][2]}</small></div>`).join('')+'</div>';}
{ // ผูกกับระบบเดิม (ห่อฟังก์ชัน)
  const _f=soulFight;soulFight=function(w,b){
    const so=S.c&&S.c.soul,nm=so&&fightName(b),f0=so&&so.fear[nm]>=2,f1=so&&so.fear[nm]|0,boss=!!(b.xf&&b.xf.boss);
    _f.apply(this,arguments);if(!so)return;
    if(b.an){so.al=(so.al|0)+1;if(so.al===3)sdImp('social',1);if(w&&boss&&!so.aid){so.aid=1;soulMem('aided','ได้รับความช่วยเหลือจาก '+b.an+' ในศึกใหญ่ จะไม่ลืม',3,'🤝','help');soulShift({kind:2});sdImp('helper',1);}}
    if(w&&boss){so.bw=(so.bw|0)+1;if(f0){so.im=sdIm().filter(i=>!(i.id==='phobia'&&i.t===nm));sdImp('courage',2);soulMem('legend','ผู้ก้าวข้ามความกลัว: ล้ม '+nm+' ที่เคยทำให้ขวัญหนี',5,'👑','win');}else if(so.bw===2)sdImp('courage',1);}
    if(!w&&so.fear[nm]>=2&&f1<2)sdImp('phobia',1,nm);
  };
  const _m=soulFightMul;soulFightMul=function(c,b){const r=_m.apply(this,arguments),k=sdFightMul(c,b);if(k!==1&&!b._sd){b._sd=1;b.L.unshift(k>1?'🧬 ตัวตนที่สั่งสมมา ทำให้ฮึกเหิม!':'🧬 ความทรงจำเก่าทำให้ตัวแข็ง…');}return r*k;};
  const _p=soulPick;soulPick=function(L,c){return sdBias(L,c,_p.apply(this,arguments));};
  const _fr=soulFriend;soulFriend=function(name,ic,how,real){const so=S.c&&S.c.soul,nw=so&&name&&!so.fr[name];_fr.apply(this,arguments);if(nw&&how==='help'){sdImp('helper',1);sdSeed('cub',name,ic,ri(5,9));}};
  const _e=soulEvo;soulEvo=function(c){_e.apply(this,arguments);if(c.stage>=4){soulMem('legend',c.name+'ก้าวสู่ร่างสูงสุด เป็นตำนานของสายเลือดนี้',5,'👑','evolve');const A=c.soul.ax,g=['bold','kind','play'].sort((a,b)=>Math.abs(A[b])-Math.abs(A[a]))[0];if(A[g]>=0)sdImp({bold:'courage',kind:'helper',play:'social'}[g],2);}};
  const _s=sqEnd;sqEnd=function(k){const r=_s.apply(this,arguments);soulMem('legend','จบปริศนาแห่งโลกสัตว์: '+SQE[k].n,5,'📖','boss');sdImp({seal:'courage',share:'helper',free:'social'}[k],2);return r;};
  const _d=cqDie;cqDie=function(L){_d.apply(this,arguments);sdBequeath(L);};
  const _h=cqHatch;cqHatch=function(c,L){_h.apply(this,arguments);try{sdInherit(c,L);}catch(e){}};
}
