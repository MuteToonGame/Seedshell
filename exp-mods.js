// ===== exp-mods.js · พยากรณ์/เงื่อนไขการสำรวจ (Expedition Modifier) · โหลดหลัง story-quest.js =====
// ข้อมูลเงื่อนไขอยู่ใน DXO (events-data.js) · ทุกพื้นที่มีพยากรณ์ของตัวเองรายวัน (S.fc) เห็นก่อนเลือกพื้นที่/สัตว์/ของ
// ใช้ตอนออกสำรวจแล้วสุ่มพยากรณ์ใหม่ให้รอบถัดไปทันที → ทุกรอบไม่เหมือนกัน · ฟิลด์: f=หมอก ec=พลังเพิ่ม/ชั้น fs=ศัตรูแข็งขึ้น l=ของดีขึ้น w=น้ำหนักประตู bi=ใช้เฉพาะพื้นที่
const mdRoll=bi=>Math.random()<.25?'':pk(DXO.filter(o=>!o.bi||o.bi.includes(bi))).id;
function mdFc(){const F=S.fc||(S.fc={d:-1,m:[]});if(F.d!==S.day||F.m.length<3){F.d=S.day;F.m=[0,1,2].map(mdRoll);}return F;}
const mdFcId=bi=>mdFc().m[bi]||'';
function mdPick(){const F=mdFc(),id=F.m[PX.bi]||'';F.m[PX.bi]=mdRoll(PX.bi);S.fcLive=1;return DXO.find(o=>o.id===id)||null;}
const mdOm=()=>{const R=dx().run;return R&&DXO.find(o=>o.id===R.om)||null;};
const mdEc=()=>{const live=S.depth>0||S.fcLive,o=live?mdOm():DXO.find(x=>x.id===mdFcId(PX.bi));return(o&&o.ec)||0;};
const mdFs=()=>{const o=mdOm();return(o&&o.fs)||1;},mdF=()=>{const o=mdOm();return o&&o.f?1:0;};
function mdIc(k){const live=S.depth&&S.dBi===k,o=live?mdOm():DXO.find(x=>x.id===mdFcId(k));return o?o.ic:'';}
function mdCard(){
  const live=S.depth>0,o=live?mdOm():DXO.find(x=>x.id===mdFcId(PX.bi)),B=BIO[PX.bi];
  return `<div class="card" style="text-align:left;margin:6px 0"><b>🔮 ${live?'เงื่อนไขทริปนี้':'พยากรณ์วันนี้'} · ${B.ic}${B.n}</b><br>`+(o?`${o.ic} <b>${o.n}</b> · ${o.d||''}<br><small>💡 ${o.t||''}</small>`:'🌤️ สภาพปกติ ไม่มีเงื่อนไขพิเศษ')+'</div>';
}
function mdRare(){const n=S.c.name,k=cqK();return{ti:'สัตว์หายากใต้แสงจันทร์',q:`🌙 ใต้แสงจันทร์เต็มดวง ${n}เห็นสัตว์ตัวหนึ่งที่ไม่เคยเห็น ขนเรืองแสงสีเงิน ยืนมองอยู่ไกลๆ`,o:[
  {l:'🤝 เดินเข้าไปทักทาย',n:'f',b:2,fn:()=>{const p=newNpc('f');cB(3);return p&&p.rel==='f'?`${p.ic}${p.n}ยอมเป็นเพื่อนกับ${n}! (เพื่อนใหม่ช่วยสู้ได้)`:'มันดมกลิ่นแล้วค่อยๆ หายเข้าพุ่มไม้';}},
  {l:'🍖 วางอาหารไว้ให้ (อิ่ม −10)',u:-10,fn:()=>{S.c.hun=cl(S.c.hun-10);if(Math.random()<.5){S.crystal++;return '✨ มันทิ้งผลึกเล็กๆ ไว้ตอบแทน 💎+1';}const g=Math.round(200*k);S.money+=g;return `มันคาบของมีค่ามาให้ ฿+${g}`;}},
  {l:'👀 ซ่อนดูเงียบๆ',fn:()=>{cB(1);return 'ได้เห็นพิธีกรรมใต้แสงจันทร์'+(dxCol('s')||' · ไม่ได้อะไรเพิ่ม');}}]};}
function mdShard(){const n=S.c.name,k=cqK();return{ti:'ผลึกโบราณ',q:'💎 ผลึกขนาดเท่ากำปั้นโผล่จากพื้น เรืองแสงตอบรับ “วันแห่งผลึก”',o:[
  {l:'✋ เก็บอย่างระวัง (ปัญญา)',c:'int',fn:()=>cqCk('int')?`${n}ถอนผลึกออกมาทั้งชิ้น!${dxCol('t')}${Math.random()<.5?(S.crystal++,' · 💎+1'):''}`:'ผลึกร้าวแตก ได้แค่เศษ ฿'+(S.money+=60,60)},
  {l:'🔨 ทุบเอาเลย (แรง)',c:'str',fn:()=>{const g=Math.round(180*k);S.money+=g;return `ผลึกแตกกระจาย +฿${g}`+(Math.random()<.3?dxCol('t'):'');}},
  {l:'🚶 ปล่อยไว้',fl:1,fn:()=>'จดตำแหน่งไว้แล้วเดินต่อ'}]};}
function mdExp(ctx,s0){
  const o=mdOm(),Q=cq();if(!o||Q.last===S.depth)return false;let L=null;
  if(o.id==='lunar'&&Math.random()<.14)L=mdRare();
  else if(o.id==='crys'&&Math.random()<.12)L=mdShard();
  else if(o.id==='wake'&&S.depth>=2&&Math.random()<.12){Q.last=S.depth;dxEnter('sec',s0,ctx);return true;}
  if(!L)return false;Q.last=S.depth;XQ={L,ctx,s0,cq:'md'};xAsk();return true;
}
{const _g=xGo;xGo=function(){try{return _g.apply(this,arguments);}finally{S.fcLive=0;}};}
