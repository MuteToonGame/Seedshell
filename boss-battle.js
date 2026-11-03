// ===== boss-battle.js · บอสเฉพาะตัวต่อพื้นที่ + คำสั่งต่อสู้ + ท่าประจำตัว · โหลดหลัง exp-mods.js =====
// ศึกในการสำรวจ (b.xf) เปลี่ยนเป็นเลือกคำสั่งได้ทุกรอบ: ⚔️เต็มกำลัง(2) · 🛡️ป้องกัน(+2) · ✨ท่าประจำตัว(3) · 🎒ไอเทม · 🤝เรียกเพื่อน   พลังศึก 🔷 ฟื้น +1/รอบ
// บอส: 🌳Forest Guardian เกราะหนา รอจังหวะเกราะเปิด (ปัญญาช่วยอ่านสัญญาณ) · 🏜️Sand Emperor รัว+พิษสะสม+ดูดพลังศึก · 🐺Frost Beast เปลี่ยนรูป 3 ช่วงตามเลือด
const BBX={owl:['ตาทิพย์สะท้อน','🦉'],elephant:['กระทืบสะเทือนพื้น','🐘'],rabbit:['ก้าวพลิ้วหลายสาย','🐰']};
const BBF={bold:['ดุดัน','ความแรง +25%'],kind:['เมตตา','ฟื้น HP 12%'],play:['ซุกซน','35% ท่าซ้ำสองเท่า']};
const BBT=['ฝึกหัด','คล่องแคล่ว','ชำนาญ','เชี่ยวชาญ','ตำนาน'],BBN={open:'🌟 เกราะเปิดช่อง',slam:'💥 รากทุบหนัก',storm:'🌪️ พายุทราย',heavy:'🧊 ตีหนัก',freeze:'🥶 แช่แข็ง'};
const BBOLD=['rage','guard','drain','summon','poison','dodge'];
const bbG=c=>{const A=(c.soul&&c.soul.ax)||{};let k='bold',m=-1;['bold','kind','play'].forEach(x=>{const v=Math.abs(A[x]||0);if(v>m){m=v;k=x;}});return k;};
const bbLv=c=>Math.min(5,1+Math.floor((c.mv|0)/4)+(c.stage>=4?1:0)); // ประสบการณ์: ใช้ท่า 4 ครั้ง = +1 · ร่างสูงสุด +1
function bbSkill(c){const sp=speciesOf(c),g=bbG(c),L=bbLv(c);return{sp,g,L,ic:BBX[sp][1],n:BBX[sp][0]+'·'+BBF[g][0],t:BBT[L-1]};}
function bbPool(){const c=S.c,D=S.depth,P=[];S.npcs.filter(p=>p.rel==='f').forEach(p=>P.push({p,ic:p.ic,an:p.ic+p.n,al:c.stage*6+D*.5+p.met*2}));S.guests.forEach(g=>P.push({g,ic:'🐾',an:'🐾'+g.n,al:(g.a[0]+g.a[1]*.7+g.a[2]*.5)*.6+D*.3}));const A=cq().ally;if(A)P.push({ic:A.ic,an:A.ic+A.n,al:A.lv*8+c.stage*5+D*.4});return P.sort((a,b)=>b.al-a.al);}
dxBoss=function(){const id=['forest','sand','frost'][PX.bi],s=DXB.find(b=>b.id===id);if(s&&Math.random()<.75)return s;return pk(DXB.filter(b=>BBOLD.includes(b.id)));};
function bbCmd(k){const b=S.b;if(!b||b.end)return;b.cmd=b.cmd===k?null:k;updBattle();}
function bbRound(){
  const b=S.b,c=S.c,f=b.xf,pat=f.pat,sig=['forest','sand','frost'].includes(pat);if(b.end)return;
  const L=s=>b.L.unshift(s);b.n=(b.n|0)+1;const n=b.n;if(b.fc>0)b.fc--;
  let cmd=b.cmd||'atk';b.cmd=null;if(cmd==='all'&&b.sp<2)cmd='atk';if(cmd==='skill'&&b.sp<3)cmd='atk';if(cmd==='item'&&!bagN())cmd='atk';
  if(cmd==='ally'&&!(b.fc<=0&&(b.al>0||bbPool().length)))cmd='atk';
  const tg=b.tg||[];b.tg=[];
  if(pat==='frost'){const r=b.eh/b.em,ph=r>.66?1:r>.33?2:3;if(b.phs!==ph){b.phs=ph;b.fo=[['🐺','🧊','🌨️'][ph-1],110];if(ph>1)L(ph===2?'🧊 Frost Beast เปลี่ยนรูป! เกราะน้ำแข็งปกคลุม ตีหนักทุกรอบคู่':'🌨️ Frost Beast เปลี่ยนรูป! พายุหิมะแช่แข็งผู้ที่ไม่ตั้งรับ');}}
  const P=eff(c,'str')+eff(c,'spd')*.7+eff(c,'int')*.5,cr=Math.random()<.1+eff(c,'int')*.01+soulCrit(c);
  let pd=Math.round((P*.6+rnd(0,4))*b.buff*(cr?1.8:1)*(c.trait==='ตะกละ'?1.1:1)*(c.fierce>0?1.15:1)*soulFightMul(c,b)*(dxHas('fang')?1+.6*dxM('fang'):1));b.buff=1;
  const pd0=pd;let mE=1,ign=0,evade=0,burst=0,txt=(cr?'💥 คริติคอล! ':'');
  if(cmd==='all'){b.sp-=2;pd=Math.round(pd*1.7);mE=1.3;txt+=c.name+'โจมตีเต็มกำลัง!';}
  else if(cmd==='def'){pd=Math.round(pd*.4);mE=.35;b.sp=Math.min(6,b.sp+2);if(b.ps>0)b.ps--;b.ph=Math.min(b.pm,b.ph+Math.round(b.pm*.04));txt+='🛡️ '+c.name+'ตั้งรับ';}
  else if(cmd==='item'){pd=0;xHeal();b.ps=0;txt='🎒 ใช้ของ';}
  else if(cmd==='ally'){pd=Math.round(pd*.5);if(!b.al){const x=bbPool()[0];if(x.p)x.p.met++;b.al=x.al;b.ai=x.ic;b.an=x.an;L('🤝 '+x.an+'มาช่วยแล้ว!');}const dq=typeof blDuo==='function'?blDuo(b):1;burst=Math.round(b.al*2.4*dq+rnd(0,5));b.fc=3;txt+=(dq>1?'🤝 ท่าคู่! ':'🤝 ')+b.an+'โจมตีพิเศษ +'+burst;}
  else if(cmd==='skill'){
    const k=bbSkill(c),lm=1+.12*(k.L-1);b.sp-=3;c.mv=(c.mv|0)+1;txt+=k.ic+' '+k.n+'!';
    if(k.sp==='owl'){pd=Math.round(pd*1.3*lm);ign=1;b.ins=1;L('🦉 ตาทิพย์เห็นช่องโหว่ — รู้ท่าบอสรอบหน้า');}
    else if(k.sp==='elephant'){pd=Math.round(pd*1.9*lm);ign=1;if(Math.random()<(k.L>=2?1:.6)){b.stun=1;b.brk=1;L('🐘 พื้นสะเทือน! บอสมึนงง เกราะแตก');}}
    else{pd=Math.round(pd*.75*lm)*(k.L>=3?3:2);evade=1;L('🐰 พริ้วหลบการโจมตีรอบนี้');}
    if(k.g==='bold')pd=Math.round(pd*1.25);else if(k.g==='kind'){const h=Math.round(b.pm*.12);b.ph=Math.min(b.pm,b.ph+h);L('💚 เมตตา ฟื้น HP +'+h);}else if(Math.random()<.35){pd*=2;txt+=' ซุกซนซ้ำ!';}
  }
  if(cmd!=='item'){
    if(pat==='forest'){if(tg.includes('open')||b.brk){pd=Math.round(pd*1.8);b.brk=0;L('🌟 ตีเข้าจุดอ่อน!');}else if(!ign){pd=Math.round(pd*.3);L('🛡️ เกราะหนาเกินไป…');}}
    else if(pat==='frost'){if(b.phs===1&&!ign&&cmd!=='all'&&Math.random()<.3){pd=0;L('💨 Frost Beast หลบได้!');}else if(b.phs===2&&!ign)pd=Math.round(pd*.5);else if(b.phs===3&&tg.includes('freeze')&&cmd!=='def'){pd=0;burst=0;L('🥶 '+c.name+'ถูกแช่แข็ง!');}}
    else if(BBOLD.includes(pat))pd=dxPat(b,pd);
  }
  const ad=b.al?Math.round(b.al*.6+rnd(0,3)):0,dealt=pd+ad+burst;b.eh-=dealt;
  anim('fP','atkR',350);setTimeout(()=>{anim('fE','hit',350);fx('e','-'+dealt,cr?'crit':'');},150);L(txt+(pd?' ตี '+pd:'')+(ad?' · '+b.an+'ช่วย '+ad:''));
  if(b.ins){b.tgv=1;}
  if(cmd==='def'&&tg.some(k=>k!=='open')&&pd0){const cn=Math.round(pd0*1.2);b.eh-=cn;L('↩️ สวนกลับ! −'+cn);}
  if(b.eh<=0){b.eh=0;return endFight(1);}
  // ---- เทิร์นศัตรู
  b.sp=Math.min(6,b.sp+1);let edT=0;
  if(b.stun){b.stun=0;L('💫 บอสมึนงง ข้ามการโจมตี');}
  else{
    let ed=Math.round(b.E*.6+rnd(0,4)),hits=1,m=mE;
    if(pat==='forest'&&tg.includes('slam'))m*=2;
    if(pat==='sand'){hits=b.eh<b.em*.4?3:2;ed=Math.round(ed*.55);if(tg.includes('storm'))m*=1.7;b.sp=Math.max(0,b.sp-1);}
    if(pat==='frost'){if(b.phs===1)ed=Math.round(ed*.8);if(b.phs===2&&n%2===0)m*=1.4;}
    for(let i=0;i<hits;i++){let e=Math.round(ed*m)+(BBOLD.includes(pat)?dxPatE(b,ed):0);if(evade)e=0;if(dxHas('sting')){e=Math.round(e*.5);if(i===0)b.eh-=Math.round(b.em*.06*dxM('sting'));}edT+=e;}
    b.ph-=edT;setTimeout(()=>anim('fE','atkL',350),450);setTimeout(()=>{anim('fP','hit',350);fx('p','-'+edT,'');},600);
    L(evade?'💨 หลบได้ทุกการโจมตี':(pat==='sand'?`🏜️ Sand Emperor ฟัน ${hits} ครั้ง −${edT}`:'ศัตรูตอบโต้ −'+edT));
    if(pat==='sand'&&!evade){b.ps=Math.min(6,(b.ps|0)+hits);const t=Math.round((1+b.ps*.7)*(1+S.depth*.04));b.ph-=t;L('☠️ พิษ ×'+b.ps+' −'+t);}
  }
  if(b.ph<=0&&!(typeof blRescue==='function'&&blRescue(b))){if(dxRevive(b))b.ph=Math.round(b.pm*Math.min(1,.5*dxM('lotus')));else{b.ph=0;return endFight(0);}}
  // ---- สัญญาณรอบหน้า (ปัญญาสูง = อ่านออกบ่อย)
  const nx=n+1,T=[];
  if(pat==='forest'){if(nx%3===0)T.push('open');if(nx%4===0)T.push('slam');}
  else if(pat==='sand'){if(nx%4===0)T.push('storm');}
  else if(pat==='frost'){if(b.phs===2&&nx%2===0)T.push('heavy');if(b.phs===3&&Math.random()<.6)T.push('freeze');}
  b.tg=T;b.tgv=b.ins||Math.random()<cl(.3+eff(c,'int')*.035,.3,1)?1:0;b.ins=0;
  updBattle();
}
function bbUI(b){
  const k=bbSkill(S.c),sp=b.sp|0,on=x=>b.cmd===x?'on':'',ok=bbPool().length>0||b.al>0;
  const tg=b.tg&&b.tg.length?(b.tgv?'⚠️ รอบหน้า: '+b.tg.map(x=>BBN[x]).join(' + '):'⚠️ รอบหน้า: ❔ บอสกำลังเตรียมบางอย่าง'):'',
  ph=b.phs&&b.xf.pat==='frost'?' · ช่วง '+['🐺ว่องไว','🧊เกราะน้ำแข็ง','🌨️พายุแช่แข็ง'][b.phs-1]:'';
  return `<div class="log" style="text-align:left;margin:4px 0"><small>🔷${'●'.repeat(sp)}${'○'.repeat(6-sp)} พลังศึก${b.ps?' · ☠️พิษ×'+b.ps:''}${ph}${tg?'<br>'+tg:''}</small></div>
  <div class="g"><button class="btn ${on('all')}" onclick="bbCmd('all')" ${sp>=2?'':'disabled'}>⚔️ เต็มกำลัง (2)</button><button class="btn ${on('def')}" onclick="bbCmd('def')">🛡️ ป้องกัน (+2)</button>
  <button class="btn ${on('skill')}" style="grid-column:span 2" onclick="bbCmd('skill')" ${sp>=3?'':'disabled'}>${k.ic} ${k.n} (3)<br><small>${k.t} Lv${k.L} · ${BBF[k.g][1]}</small></button>
  <button class="btn ${on('item')}" onclick="bbCmd('item')" ${bagN()?'':'disabled'}>🎒 ไอเทม (${bagN()})</button><button class="btn ${on('ally')}" onclick="bbCmd('ally')" ${ok&&!(b.fc>0)?'':'disabled'}>🤝 เรียกเพื่อน${b.fc>0?' ('+b.fc+')':''}</button></div>
  <div class="log"><small>${b.cmd?'รอบถัดไป: คำสั่งที่เลือก':'ไม่เลือก = โจมตีปกติ'}</small></div>`;
}
{
  const _r=round;round=function(){const b=S.b;if(b&&b.xf)return bbRound();return _r.apply(this,arguments);};
  const _u=updBattle;updBattle=function(){const b=S.b;if(!b||!b.xf||!$('btT'))return _u.apply(this,arguments);
    $('hpPu').style.width=cl(b.ph/b.pm*100)+'%';$('hpEu').style.width=cl(b.eh/b.em*100)+'%';$('btLog').innerHTML=b.L.slice(0,3).join('<br>');
    const fo=document.querySelector('#fE .foe');if(fo&&b.fo)fo.textContent=b.fo[0];
    $('btBtns').innerHTML=b.end?'<button class="btn on" onclick="closeB()">ปิด</button>':bbUI(b);};
  const _x=xFight;xFight=function(f){_x.apply(this,arguments);const b=S.b;if(b&&b.xf){Object.assign(b,{sp:3,ps:0,fc:0,n:0,tg:[],tgv:1,phs:1});clearInterval(BT);BT=setInterval(round,f.boss?2400:1800);updBattle();}};
}
