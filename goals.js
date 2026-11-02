// ===== goals.js · ระบบเป้าหมายหลัก · โหลดหลังสคริปต์หลัก (ห่อฟังก์ชันเดิมตอนโหลด) =====
// ===== 🎯 เป้าหมายหลัก (Grand Goals) — ความคืบหน้าสะสมข้ามรุ่น · มีปริศนา คำใบ้ และรางวัล =====
const GL_SPC=[['owl','🦉','นกฮูก'],['elephant','🐘','ช้าง'],['rabbit','🐰','กระต่าย']]; // เพิ่มสายพันธุ์ใหม่ที่นี่ แล้วเป้าหมาย "ครบทุกสายพันธุ์" จะนับให้เอง
const GL_FEAR={dark:['🌑','ความมืด','ตัวสั่นเมื่อมองเข้าไปในที่มืด…'],high:['⛰️','ที่สูง','ไม่กล้ามองลงจากหน้าผาเลย…'],loud:['📢','เสียงดัง','สะดุ้งทุกครั้งที่ได้ยินเสียงดัง…'],water:['💧','น้ำ','ถอยห่างจากริมน้ำทุกครั้ง…']};
const GL_FORMS={
  war:{n:'จอมพลไร้พ่าย',ic:'⚔️',ln:'str',cd:'ชนะการต่อสู้ ≥ 6 ครั้งในชีวิตนั้น',ok:c=>!!(c.soul&&c.soul.w>=6)},
  snow:{n:'ผู้ท่องหิมะ',ic:'❄️',ln:'spd',cd:'เคยลงสำรวจภูเขาหิมะในชีวิตนั้น',ok:c=>((S.discoveries.biomes||{})[2]||0)>=1},
  dark:{n:'ผู้รู้ใจมืด',ic:'🌑',ln:'int',cd:'เคยพบสัตว์ที่กลัวความมืดในชีวิตนั้น',ok:c=>(c.dk||0)>=1}};
const GL_PERKS={life:['🕰️','อายุยืน','อายุขัย +6 วัน'],blood:['🧬','สายเลือดแกร่ง','ฟักมาฐานสเตตัส +1 ทุกด้าน'],bond:['💞','ผูกพันแต่เกิด','เริ่มต้นสนิท 70'],keen:['🔭','ตาไว','โบนัสเมื่อพบสิ่งใหม่ +50%'],heir:['🏺','มรดกตระกูล','ฟักมาพร้อมเงิน ฿500']};
const GL_GR=[['sp','🐾','ค้นพบสัตว์ทุกสายพันธุ์'],['evo','🧬','สะสมวิวัฒนาการลับ'],['soul','🎭','สร้างสัตว์ที่มีบุคลิกเฉพาะตัว'],['deep','🏔️','ปลดล็อกพื้นที่ระดับสูง'],['fam','👪','สร้างตระกูลที่สืบทอดความสามารถ'],['book','📖','ทำสมุดค้นพบให้สมบูรณ์']];
const GL_SEC0=['ผู้พิทักษ์','ผู้ครอบครองโบราณ','ผู้ท้าทายพายุ','ผู้ผูกพัน','นักพยากรณ์'];
const glS=()=>{const G=S.gl||(S.gl={});['n','done','got','sp','fm','sf','ar','q','forms','perks','fin','last'].forEach(k=>{G[k]=G[k]||{};});G.pin=G.pin||'';G.guar=G.guar||0;return G;};
const GLK=o=>Object.keys(o||{}).length, GLN=k=>glS().n[k]||0;
const dsn=p=>Object.keys(dx().seen).filter(k=>k.startsWith(p)).length;
function GLBOOK(){let s=0,t=0;[['r:',15],['e:',XE.length+XL.length],['b:',DXB.length],['w:',DXW.length],['c:',COL.length]].forEach(([p,n])=>{s+=Math.min(n,dsn(p));t+=n;});return [s,t];}
const glFm=re=>Object.keys(glS().fm).filter(k=>re.test(k));
// id · g=หมวด · t=ชื่อจริง · n=เป้า · v=ความคืบหน้า · h=ปริศนา(ก่อนเริ่ม) · h2=ร่องรอย(เมื่อเริ่มแล้ว) · after=ซ่อนจนกว่าจะทำข้อนั้นสำเร็จ · rw=รางวัล
const GLQ=[
{id:'sp_all',g:'sp',t:'ฟักสัตว์ให้ครบทุกสายพันธุ์',n:GL_SPC.length,v:()=>GLK(glS().sp),h:'ไข่แต่ละฟองมีกลิ่นไม่เหมือนกัน… ลองเปลี่ยนวิธีปลุกมันดู',h2:'กดค้าง → ช้าง · กดรัว → กระต่าย · ปล่อยไว้ → นกฮูก (บางครั้งได้ตัวอื่นแบบสุ่ม)',rw:{g:2}},
{id:'sp_f8',g:'sp',t:'พบรูปร่างวิวัฒนาการ 8 แบบ',n:8,v:()=>GLK(glS().fm),h:'โลกนี้มีรูปร่างมากกว่าที่เคยเห็น',h2:'แต่ละสายพันธุ์มี 13 รูปร่าง: ร่าง 2 · ร่าง 3 ตามสายแรง/เร็ว/ปัญญา · ร่าง 4 ตามนิสัยดุ/กลาง/ใจดี',rw:{guar:1}},
{id:'sp_line3',g:'sp',t:'ถึงร่าง 3 ครบทั้งสายแรง เร็ว และปัญญา',n:3,v:()=>new Set(glFm(/:s[34]_/).map(k=>k.split('_')[1])).size,h:'แรง เร็ว ปัญญา — ทุกเส้นทางมีร่างของมันเอง',h2:'ให้สัตว์ฝึกคนละด้านในแต่ละรุ่น แล้ววิวัฒนาการเป็นร่าง 3',rw:{g:2,m:300}},
{id:'sp_f20',g:'sp',t:'พบรูปร่างวิวัฒนาการ 20 แบบ',n:20,v:()=>GLK(glS().fm),h:'สมุดภาพยังว่างอีกเยอะ…',h2:'ลองเลี้ยงต่างสายพันธุ์ ต่างสายความสามารถ และต่างนิสัย',rw:{perk:'blood'}},
{id:'sp_leg',g:'sp',after:'sp_line3',t:'ร่างตำนานครบทั้ง 3 บุคลิก (ดุ · กลาง · ใจดี)',n:3,v:()=>new Set(glFm(/:s4_/).map(k=>k.split('_')[2])).size,h:'ตำนานมีสามใบหน้า',h2:'ร่าง 4 ใช้ 💎ผลึก · นิสัยตอนนั้นกำหนดหน้าตา',rw:{g:3}},

{id:'evo_rescue',g:'evo',t:'ช่วยเหลือสัตว์ป่า 5 ตัว',n:5,v:()=>GLN('m_rescue'),h:'น้ำใจเล็กๆ ระหว่างทาง อาจกลายเป็นสิ่งยิ่งใหญ่',h2:'เลือกช่วยสัตว์ที่หลงทางในเหตุการณ์ระหว่างสำรวจ',rw:{perk:'bond'}},
{id:'evo_dark',g:'evo',t:'พบสัตว์ที่กลัวความมืด 3 ครั้ง',n:3,v:()=>GLN('fr_dark'),h:'ไม่ใช่ทุกตัวที่กล้าเดินในที่ไร้แสง… สังเกตเพื่อนที่พบระหว่างทางให้ดี',h2:'ออกสำรวจแล้วพบสัตว์ตัวใหม่ — บางตัวกลัวความมืด (ดูข้อความ 👀 ในบันทึกหน้าหลัก)',rw:{form:'dark'}},
{id:'evo_snow',g:'evo',t:'ค้นพบวัตถุโบราณจากพื้นที่หิมะ',n:2,v:()=>GLN('rel2'),h:'ใต้น้ำแข็งมีบางอย่างหลับใหลมานานแสนนาน',h2:'ลงสำรวจ 🏔️ ภูเขาหิมะ (ต้องร่าง 3) แล้วหาของโบราณ ของสะสม หรือร่องรอยลับ',rw:{form:'snow'}},
{id:'evo_clean',g:'evo',t:'พิชิตบอสโดยไม่ใช้ไอเทมฟื้นฟู',n:1,v:()=>GLN('bclean'),h:'ผู้แข็งแกร่งจริงไม่ต้องพึ่งของกิน',h2:'บอสปรากฏทุกชั้นที่ 10 · สู้ให้จบโดยไม่กดกินของฟื้นพลังระหว่างศึก',rw:{form:'war'}},
{id:'evo_sf3',g:'evo',t:'สะสมวิวัฒนาการลับ 3 แบบ',n:3,v:()=>GLK(glS().sf),h:'บางตัวไม่ได้โตตามตำรา',h2:'สะสมเรื่องราวต่างชนิดกันก่อนวิวัฒนาการเป็นร่าง 3 (ดู 🔎 สมุดค้นพบ)',rw:{g:3}},
{id:'evo_sf8',g:'evo',after:'evo_sf3',t:'สะสมวิวัฒนาการลับครบทั้ง 8 แบบ',n:8,v:()=>GLK(glS().sf),h:'ตำนานทั้งแปดซ่อนอยู่ในแปดชีวิต',h2:'ห้าแบบจากเรื่องราวระหว่างสำรวจ + สามแบบจากรางวัลเป้าหมาย',rw:{perk:'keen',g:3}},
{id:'evo_leg',g:'evo',t:'ไปถึงร่างตำนานด้วยวิวัฒนาการลับ',n:1,v:()=>GLN('legend'),h:'ปลายทางของเส้นทางที่ไม่มีใครเดิน…',h2:'วิวัฒนาการลับเป็นร่าง 3 แล้วใช้ 💎ผลึกเป็นร่าง 4',rw:{g:3,m:500}},

{id:'soul_ar4',g:'soul',t:'สร้างบุคลิกต่างกัน 4 แบบ',n:4,v:()=>GLK(glS().ar),h:'สัตว์สองตัวที่เกิดมาเหมือนกัน อาจใจต่างกันสิ้นเชิง',h2:'ปล่อยให้สัตว์ตัดสินใจเองในเหตุการณ์ (🤖) ช่วยหรือเดินผ่าน กล้าหรือกลัว — เรื่องราวจะเปลี่ยนบุคลิก (ดู 📔)',rw:{m:400}},
{id:'soul_q4',g:'soul',t:'พบนิสัยประจำตัว 4 แบบ',n:4,v:()=>GLK(glS().q),h:'บางตัวขี้เซา บางตัวหนักกิน บางตัวดวงดี…',h2:'นิสัยประจำตัวสุ่มมาตั้งแต่ฟัก · ฟักหลายรุ่นเพื่อพบให้ครบ (มี 6 แบบ)',rw:{g:1,m:300}},
{id:'soul_fear',g:'soul',t:'พบสัตว์ที่มีความกลัวต่างกันครบ 4 แบบ',n:4,v:()=>Object.keys(GL_FEAR).filter(k=>GLN('fr_'+k)).length,h:'ทุกตัวมีสิ่งที่ไม่กล้าเผชิญ',h2:'สังเกตข้อความ 👀 ตอนพบสัตว์: ความมืด · ที่สูง · เสียงดัง · น้ำ',rw:{g:2,m:300}},
{id:'soul_axis',g:'soul',t:'เลี้ยงสัตว์ให้มีบุคลิกสุดขั้ว',n:80,v:()=>GLN('axmax'),h:'ใจกล้าสุดขีด ใจดีสุดซึ้ง หรือซนสุดฤทธิ์',h2:'ตัดสินใจแบบเดียวกันซ้ำๆ จนมิเตอร์บุคลิกในสมุดบันทึกเกือบเต็ม (เป้า 80)',rw:{g:2}},
{id:'soul_ar8',g:'soul',after:'soul_ar4',t:'สร้างบุคลิกครบทั้ง 8 แบบ',n:8,v:()=>GLK(glS().ar),h:'แปดใจ แปดชีวิต',h2:'ลองเลี้ยงให้ตรงข้ามกับรุ่นก่อนๆ',rw:{perk:'heir',g:2}},

{id:'deep_bi',g:'deep',t:'ออกสำรวจครบทั้ง 3 พื้นที่',n:3,v:()=>[0,1,2].filter(k=>GLN('bi'+k)).length,h:'ยังมีแผ่นดินที่ร้อนจัดและหนาวจัดรอวันที่ลูกของคุณแข็งแรงพอ',h2:'🏜️ ทะเลทราย และ 🏔️ ภูเขาหิมะ ต้องวิวัฒนาการถึงร่าง 3',rw:{g:1,m:300}},
{id:'deep_10',g:'deep',t:'ลงลึกถึงชั้น 10',n:10,v:()=>S.bestD||0,h:'ยิ่งลึก ยิ่งมีอะไรรออยู่',h2:'กดค้างปุ่มสำรวจเพื่อลงชั้นถัดไป · เตรียมของฟื้นพลังไว้ในกระเป๋า',rw:{m:300}},
{id:'deep_20',g:'deep',t:'ลงลึกถึงชั้น 20',n:20,v:()=>S.bestD||0,h:'ใต้ชั้นยี่สิบ ตำนานเริ่มหายใจ',h2:'บอสชั้น 20+ มีโอกาสดรอปของระดับตำนาน',rw:{g:2}},
{id:'deep_30',g:'deep',after:'deep_20',t:'ลงลึกถึงชั้น 30',n:30,v:()=>S.bestD||0,h:'ไม่มีแผนที่ใดวาดไปถึง',h2:'เก็บของสะสมที่ช่วยประหยัดพลัง แล้วลงให้ลึกกว่าเดิม',rw:{perk:'life'}},
{id:'deep_boss',g:'deep',t:'พิชิตบอสให้ครบ 3 รูปแบบ',n:3,v:()=>Object.keys(glS().n).filter(k=>k.startsWith('bp_')).length,h:'ผู้คุมแต่ละตนมีท่าไม้ตายต่างกัน',h2:'อ่านคำใบ้ท่าของบอสก่อนสู้ (คลั่ง · เกราะหนา · ดูดชีวิต · จอมสมุน · พิษร้าย · ว่องไว)',rw:{g:2}},
{id:'deep_sec',g:'deep',t:'พบพื้นที่ลับ 3 แห่ง',n:3,v:()=>dsn('r:sec'),h:'บางที่ไม่อยู่บนแผนที่ มีเพียงรอยแปลกๆ ข้างทาง',h2:'ระหว่างทางจะมีประตู 🕳️ “พื้นที่ลับ” โผล่มา · ของสะสม 🔮 ตาทิพย์ช่วยให้เจอง่ายขึ้นสองเท่า',rw:{g:2,m:400}},

{id:'fam_g2',g:'fam',t:'ส่งต่อตระกูลถึงรุ่นที่ 2',n:2,v:()=>S.gen,h:'ชีวิตมีวันจบ แต่สายเลือดยังอยู่',h2:'เลี้ยงสัตว์จนครบอายุขัยแล้วฟักไข่ฟองใหม่ — เพดานสเตตัสตระกูลจะสูงขึ้นทุกรุ่น',rw:{m:300}},
{id:'fam_g4',g:'fam',t:'ส่งต่อตระกูลถึงรุ่นที่ 4',n:4,v:()=>S.gen,h:'ตระกูลที่ยืนยาวย่อมมีเรื่องเล่า',h2:'ความทรงจำของรุ่นก่อนจะกลายเป็นเสียงสะท้อนในความฝัน',rw:{g:2}},
{id:'fam_fr',g:'fam',t:'มีเพื่อนตัวจริง 2 คน',n:2,v:()=>(S.guests||[]).length,h:'รหัสของเพื่อน เปิดประตูบานใหม่',h2:'ไปที่ 👥 เพื่อน แล้วแลกรหัสสัตว์กับเพื่อนจริง',rw:{g:2}},
{id:'fam_host',g:'fam',t:'เปิดบ้านรับแขกมาฝึก 10 ครั้ง',n:10,v:()=>S.hostN||0,h:'ห้องฝึกที่ไม่มีเพดานย่อมมีคนอยากมาใช้',h2:'เพื่อน NPC และสัตว์ของเพื่อนจริงจะแวะมาฝึกเอง (ฝึกคู่ ×1.25)',rw:{m:600}},
{id:'fam_perk',g:'fam',t:'สะสมความสามารถตระกูล 3 อย่าง',n:3,v:()=>GLK(glS().perks),h:'สิ่งที่ได้จากการเดินทางไม่ได้หายไปพร้อมชีวิต',h2:'ความสามารถตระกูลมาจากรางวัลเป้าหมายต่างๆ และสืบทอดให้ทุกรุ่นถัดไป',rw:{g:3,m:500}},

{id:'book_c9',g:'book',t:'สะสมของสะสมได้ 9 ชิ้น',n:9,v:()=>GLK(dx().col),h:'ของล้ำค่ากระจายอยู่ทุกที่ ทั้งริมทาง ห้องสมบัติ พื้นที่ลับ และในมือบอส',h2:'📚 สมุดสำรวจบอกแหล่งที่มาของของที่ยังหาไม่เจอ (❔)',rw:{m:400}},
{id:'book_c18',g:'book',t:'สะสมของสะสมให้ครบทุกชิ้น',n:COL.length,v:()=>GLK(dx().col),h:'ทุกพื้นที่มีของที่มีเพียงที่นั่น',h2:'ครบชุดของแต่ละพื้นที่ได้ 🏅 เพิ่มอีกต่างหาก',rw:{g:3}},
{id:'book_r',g:'book',t:'พบห้อง/พื้นที่ครบทุกแบบ',n:15,v:()=>Math.min(15,dsn('r:')),h:'ทางแยกเดียวกัน อาจพาไปคนละที่',h2:'จุดพัก ร้านค้า ห้องสมบัติ พื้นที่ลับ — แต่ละแบบมีหลายหน้าตา',rw:{g:2}},
{id:'book_e',g:'book',t:'พบเหตุการณ์ครึ่งหนึ่งของโลก',n:Math.ceil((XE.length+XL.length)/2),v:()=>dsn('e:'),h:'เรื่องราวระหว่างทางไม่เคยซ้ำ',h2:'ออกสำรวจหลายๆ ครั้ง และเปลี่ยนพื้นที่บ้าง',rw:{m:400}},
{id:'book_b',g:'book',t:'พบบอสครบทุกรูปแบบ',n:DXB.length,v:()=>dsn('b:'),h:'ผู้คุมทางมีหลายใบหน้า',h2:'บอสปรากฏทุกชั้นที่ 10 — ท่าไม่ซ้ำกัน',rw:{g:2}},
{id:'book_w',g:'book',t:'พบสภาพอากาศครบทุกแบบ',n:DXW.length,v:()=>dsn('w:'),h:'ฟ้าฝนเปลี่ยนไปตามที่ที่เหยียบ',h2:'บางอากาศเกิดเฉพาะบางพื้นที่',rw:{m:300}},
{id:'book_full',g:'book',after:'book_c18',u:'%',t:'ทำสมุดสำรวจให้สมบูรณ์ 100%',n:100,v:()=>{const [s,t]=GLBOOK();return Math.floor(s/t*100);},h:'หน้าสุดท้ายของสมุด…',h2:'ทุกห้อง เหตุการณ์ บอส อากาศ และของสะสม',rw:{g:5,m:1000}},
{id:'m_evo3',g:'m',t:'วิวัฒนาการเป็นร่าง 3',n:1,v:()=>glFm(/:s[34]_/).length?1:0,h:'ถึงเวลาที่ร่างเดิมคับเกินไป…',h2:'เลี้ยงจนอายุ ≥ 30 วัน และฝึกด้านที่เก่งที่สุดให้โดดเด่น',rw:{g:2,m:300}},
{id:'m_evo4',g:'m',t:'ปลดล็อกร่างตำนาน (ร่าง 4)',n:1,v:()=>glFm(/:s4_/).length?1:0,h:'ผลึกเม็ดเดียวเปลี่ยนทุกอย่าง',h2:'หา 💎ผลึก (บอส/เหตุการณ์/ร้านค้า) แล้วใช้กับสัตว์ร่าง 3',rw:{g:3,m:500}},
{id:'m_area',g:'m',t:'ค้นพบพื้นที่ใหม่ 2 แห่ง',n:2,v:()=>[0,1,2].filter(k=>GLN('bi'+k)).length,h:'เหนือป่าชื้นยังมีแผ่นดินที่ไกลกว่า',h2:'ร่าง 3 ปลดล็อก 🏜️ ทะเลทราย และ 🏔️ ภูเขาหิมะ',rw:{g:1,m:300}},
{id:'m_rare',g:'m',t:'เก็บของสะสมระดับหายากขึ้นไป 2 ชิ้น',n:2,v:()=>COL.filter(x=>dx().col[x[0]]&&ABL[x[0]][0]!=='c').length,h:'ของล้ำค่าซ่อนลึกกว่าริมทาง',h2:'ของหายากขึ้นไปมาจากห้องสมบัติ 🧰 พื้นที่ลับ 🕳️ และบอส 👑 (ดู 📚 สมุดสำรวจ)',rw:{g:2}},
{id:'m_trait',g:'m',t:'ปลดล็อกบุคลิกที่ต่างกัน 2 แบบ',n:2,v:()=>GLK(glS().ar),h:'ใจของมันเปลี่ยนไปตามสิ่งที่เจอ',h2:'ให้สัตว์เลือกเองในเหตุการณ์ (🤖) แล้วดูบุคลิกใน 📔',rw:{m:300}},
{id:'m_boss',g:'m',t:'พิชิตบอสประจำพื้นที่ 2 แห่ง',n:2,v:()=>[0,1,2].filter(k=>GLN('bwb'+k)).length,h:'ผู้คุมแต่ละแผ่นดินรอคนที่ลงลึกพอ',h2:'บอสปรากฏทุกชั้นที่ 10 ของแต่ละพื้นที่',rw:{g:2,m:400}},
{id:'m_equip',g:'m',t:'อัปเกรดอุปกรณ์ฝึกถึงเลเวล 3',n:3,v:()=>Math.max(S.f.book||0,S.f.weight||0,S.f.tread||0),h:'เครื่องมือดีขึ้น ฝึกได้ไกลขึ้น',h2:'ซื้ออัปเกรดที่ 🛒 ร้านค้า (ไม่มีเพดานเลเวล)',rw:{m:400}},
{id:'m_lv',g:'m',t:'สัตว์ถึงเลเวล 5',n:5,v:()=>(S.c&&S.c.lv)||1,h:'ประสบการณ์สะสมจากทุกการเดินทาง',h2:'ได้ XP จากการสำรวจและการชนะศึก',rw:{m:300}}
];
const GLSP=[
{id:'train',t:'ฝึกสัตว์ 6 ครั้ง',k:'c_train',n:6,rw:{m:120},h2:'แตะอุปกรณ์ในห้อง (💪⚡🧠) ให้สัตว์ฝึก'},
{id:'dive',t:'ลงลึกในการสำรวจ 4 ชั้น',k:'c_dive',n:4,rw:{m:150},h2:'กดค้างปุ่มสำรวจเพื่อลงชั้นถัดไป'},
{id:'win',t:'ชนะศึกระหว่างสำรวจ 1 ครั้ง',k:'c_win',n:1,rw:{m:200},h2:'เจอศัตรูแล้วเลือก ⚔️ สู้เลย'},
{id:'buy',t:'ซื้ออุปกรณ์จากร้านค้า 1 ชิ้น',k:'c_buy',n:1,rw:{m:150},h2:'หาเงินให้พอแล้วอัปเกรดที่ 🛒'},
{id:'work',t:'รับจ้างหาเงิน 3 ครั้ง',k:'c_work',n:3,rw:{m:150},h2:'ส่งสัตว์ไปทำงานหาเงิน'},
{id:'play',t:'เล่นไพ่กับสัตว์ 2 ตา',k:'c_play',n:2,rw:{m:120},h2:'ปุ่ม 🃏 เล่นไพ่ — ชนะแล้วสนิทเพิ่ม'},
{id:'new',t:'พบสิ่งที่ไม่เคยเจอ 2 อย่าง',k:'c_new',n:2,rw:{g:1},h2:'ออกสำรวจ: ห้อง เหตุการณ์ อากาศ บอส หรือของสะสมแบบใหม่'},
{id:'visit',t:'ให้เพื่อนแวะมาฝึกที่ห้อง 1 ครั้ง',k:'c_visit',n:1,rw:{m:180},h2:'มีเพื่อน NPC หรือเพื่อนจริงแล้วรอให้แวะมา'}
];
function glShortList(){
  const G=glS();G.sh=G.sh||[];
  while(G.sh.length<3){const used=G.sh.map(s=>s.pid),pool=GLSP.filter(p=>!used.includes(p.id)),p=pk(pool);G.shn=(G.shn||0)+1;G.sh.push({id:'s'+G.shn,pid:p.id,base:GLN(p.k)});}
  return G.sh.map(s=>{const p=GLSP.find(x=>x.id===s.pid);return {id:s.id,g:'s',t:p.t,n:p.n,v:()=>Math.max(0,GLN(p.k)-s.base),h:p.h2,h2:p.h2,rw:p.rw};});
}
const glAll=()=>[...GLQ,...glShortList()];
const glPct=q=>Math.min(1,q.v()/q.n);
function glSt(q){const G=glS();if(G.got[q.id])return 'got';if(G.done[q.id])return 'done';if(q.g==='s')return 'act';if(q.after&&!G.done[q.after]&&!G.got[q.after])return 'seal';return q.v()>0?'act':'hid';}
function glRw(r){const t=[];if(r.m)t.push('💰฿'+r.m);if(r.g)t.push('💎×'+r.g);
  if(r.form){const f=GL_FORMS[r.form];t.push(f.ic+' ปลดล็อกวิวัฒนาการลับ “'+f.n+'”');}
  if(r.perk){const p=GL_PERKS[r.perk];t.push(p[0]+' ความสามารถตระกูล “'+p[1]+'” ('+p[2]+')');}
  if(r.guar)t.push('🥚 ไข่ฟองถัดไปการันตีสายพันธุ์ที่ยังไม่เคยพบ');return t.join(' + ');}
function glForm(){const c=S.c;if(!c)return '';const G=glS(),k=lead(c);for(const id in GL_FORMS){const f=GL_FORMS[id];if(G.forms[id]&&f.ln===k&&f.ok(c))return f.n;}return '';}
function glPerk(id){const G=glS();if(G.perks[id])return;G.perks[id]=1;const c=S.c;if(!c)return;
  if(id==='life')c.max+=6;else if(id==='blood')['str','spd','int'].forEach(k=>c[k]++);else if(id==='bond')c.bond=cl(c.bond+20);else if(id==='heir')S.money+=500;}
function glTick(){
  const G=glS(),c=S.c;
  if(c){
    if(c.sp)G.sp[c.sp]=1;
    if(c.stage>=2){const br=(c.br==='str'||c.br==='spd'||c.br==='int')?c.br:'int';G.fm[speciesOf(c)+':'+(c.stage===2?'s2':c.stage===3?'s3_'+br:'s4_'+br+'_'+(c.k4||kindForm(c)))]=1;}
    if(c.soul&&c.soul.ax){G.ar[soulArch(c)[1]]=1;(c.soul.q||[]).forEach(q=>{G.q[q]=1;});G.n.axmax=Math.max(G.n.axmax||0,Math.round(Math.max(...Object.values(c.soul.ax).map(Math.abs))));}
    if(c.secretForm)G.sf[c.secretForm]=1;
    if(S.depth>0&&S.discoveries&&S.discoveries.biomes)S.discoveries.biomes[S.dBi]=1;
  }
  if(S.depth>0)G.n['bi'+S.dBi]=1;
  glAll().forEach(q=>{
    const v=q.v(),last=G.last[q.id];
    if(v>=q.n&&!G.done[q.id]&&!G.got[q.id]){G.done[q.id]=1;log('🎯 เป้าหมายสำเร็จ! “'+q.t+'” — แตะ 🎯 เพื่อรับรางวัล');if(c)setSay('🎯 เป้าหมายสำเร็จ!',2500);}
    else if(last!=null&&v>last&&!G.done[q.id]&&!G.got[q.id]&&q.g!=='s'&&glSt(q)!=='seal')log(last===0?'🔎 พบร่องรอยใหม่: '+q.t:'🎯 คืบหน้า: '+q.t+' '+Math.min(v,q.n)+'/'+q.n+(q.u||''));
    G.last[q.id]=v;
  });
}
// ---------- UI ----------
let glMsg='';
function glClose(){const e=$('glUI');if(e)e.remove();}
function glShow(h,keep){
  let e=$('glUI');if(!e){e=document.createElement('div');e.id='glUI';e.className='ov';e.style.zIndex=120;e.onclick=ev=>{if(ev.target===e)glClose();};document.body.appendChild(e);}
  const o=e.querySelector('.md'),st=keep&&o?o.scrollTop:0;
  e.innerHTML=`<div class="md" style="text-align:left;gap:8px">${h}</div>`;e.querySelector('.md').scrollTop=st;
}
function glCard(q){
  const G=glS(),s=glSt(q),v=Math.min(q.v(),q.n),p=Math.round(v/q.n*100),u=q.u||'';
  const col={got:'var(--ok)',done:'var(--ac)',act:'var(--blue)',hid:'var(--bd)',seal:'var(--bd)'}[s];
  const bar=`<i style="display:block;height:6px;background:var(--bd);border-radius:6px;overflow:hidden;margin:4px 0"><u style="display:block;height:100%;width:${p}%;background:${col}"></u></i>`;
  let h=`<div class="card" style="text-align:left;padding:8px;border-left:5px solid ${col};opacity:${s==='got'?.6:1}">`;
  if(s==='seal')h+=`<b style="font-size:12px">🔒 ???</b><div class="log">มีบางอย่างซ่อนอยู่เบื้องหลังเป้าหมายอื่น… ต้องทำเป้าหมายก่อนหน้าให้สำเร็จก่อนจึงจะเห็น</div>`;
  else if(s==='hid')h+=`<b style="font-size:12px">❔ ปริศนา</b><div class="log" style="font-style:italic">“${q.h}”</div><div class="log">🎁 ${glRw(q.rw)}</div>`;
  else{h+=`<b style="font-size:12px">${s==='got'?'✔':s==='done'?'🎉':'🔎'} ${q.t}</b> <small>${v}${u}/${q.n}${u}</small>${s==='got'?'':bar}`;
    if(s==='act')h+=`<div class="log">💡 ${q.h2}</div>`;
    h+=`<div class="log">🎁 ${glRw(q.rw)}${s==='got'?' · รับแล้ว':''}</div>`;}
  if(s==='done')h+=`<button class="btn on" style="width:100%;margin-top:4px" onclick="glClaim('${q.id}')">🎁 รับรางวัล</button>`;
  if(s==='hid'||s==='act'){const pin=G.pin===q.id;h+=`<button class="btn ${pin?'on':''}" style="padding:3px 10px;font-size:11px;margin-top:4px" onclick="glPin('${q.id}')">${pin?'📌 กำลังติดตาม':'📌 ติดตาม'}</button>`;}
  return h+'</div>';
}
function glNext(){
  const a=glAll().filter(q=>glSt(q)==='act'&&q.g!=='s').sort((x,y)=>glPct(y)-glPct(x));
  return a[0]||glAll().find(q=>glSt(q)==='hid')||glAll().find(q=>q.g==='s')||null;
}
const GL_INFO={
  sp:()=>{const G=glS();return `${GL_SPC.map(s=>G.sp[s[0]]?`${s[1]} ${s[2]} ✓`:'❔ ???').join(' · ')}<br>รูปร่างวิวัฒนาการที่เคยพบ <b>${GLK(G.fm)}/${GL_SPC.length*13}</b>`;},
  evo:()=>{const G=glS();return `${GL_SEC0.map(n=>G.sf[n]?'🧬 '+n:'❔ ???').join(' · ')}<br>`+Object.entries(GL_FORMS).map(([id,f])=>G.sf[f.n]?`${f.ic} <b>${f.n}</b> ✓`:G.forms[id]?`${f.ic} <b>${f.n}</b> — ปลดล็อกแล้ว! เงื่อนไข: สัตว์สาย${BR[f.ln].n}ที่${f.cd} ก่อนวิวัฒนาการร่าง 3`:'❔ ??? (ปลดล็อกจากรางวัลเป้าหมาย)').join('<br>');},
  soul:()=>{const G=glS();return `${Object.values(ARCH).map(a=>G.ar[a[1]]?a[0]+a[1]:'❔ ???').join(' · ')}<br>นิสัยประจำตัว: ${Object.keys(QK).map(k=>G.q[k]?QK[k][0]+QK[k][1]:'❔').join(' · ')}`;},
  deep:()=>`${BIO.map((b,i)=>GLN('bi'+i)?b.ic+b.n+' ✓':'❔ ???').join(' · ')}<br>ลึกสุด <b>${S.bestD||0}</b> ชั้น · พื้นที่ลับที่พบ ${dsn('r:sec')}/6`,
  fam:()=>{const G=glS();return `รุ่นที่ <b>${S.gen}</b> · ความสามารถตระกูล (สืบทอดทุกรุ่น)<br>`+Object.entries(GL_PERKS).map(([id,p])=>G.perks[id]?`${p[0]} <b>${p[1]}</b> — ${p[2]}`:'❔ ???').join('<br>');},
  book:()=>{const [s,t]=GLBOOK();return `ความสมบูรณ์รวม <b>${Math.floor(s/t*100)}%</b> (${s}/${t})<br>🚪 ห้อง ${Math.min(15,dsn('r:'))}/15 · 📨 เหตุการณ์ ${dsn('e:')}/${XE.length+XL.length} · 👑 บอส ${dsn('b:')}/${DXB.length} · 🌦️ อากาศ ${dsn('w:')}/${DXW.length} · 🏺 ของสะสม ${GLK(dx().col)}/${COL.length}`;}
};
function glTabs(t){return `<div class="g" style="grid-template-columns:repeat(3,1fr)">`+[['s','⚡ ระยะสั้น','5–10 นาที'],['m','🎯 ระยะกลาง','1–3 ชม.'],['l','🌌 ระยะยาว','หลายรุ่น']].map(([k,n,s])=>`<button class="btn ${t===k?'on':''}" style="padding:6px 2px;font-size:12px" onclick="glOpen('${k}')">${n}<br><small>${s}</small></button>`).join('')+`</div>`;}
function glOpen(view,keep){
  if(!S.c)return;const G=glS();glTick();
  const gr=GL_GR.find(x=>x[0]===view);
  if(!gr)G.tab=['s','m','l'].includes(view)?view:(G.tab||'s');
  G.view=view||'';const tab=G.tab,msg=glMsg;glMsg='';
  let h=`<div style="display:flex;justify-content:space-between;align-items:center"><b style="font-size:15px">${gr?gr[1]+' '+gr[2]:'🎯 เป้าหมาย'}</b>${gr?`<button class="btn" style="padding:3px 10px" onclick="glOpen('l')">← กลับ</button>`:''}</div>`;
  if(msg)h+=`<div class="card" style="background:rgba(76,175,106,.15)">${msg}</div>`;
  if(!gr){
    const dn=glAll().filter(q=>glSt(q)==='done');
    if(dn.length)h+=`<b style="font-size:12px">🎁 รอรับรางวัล (${dn.length})</b>`+dn.slice(0,4).map(glCard).join('');
    const pq=glAll().find(q=>q.id===G.pin&&!['got','seal'].includes(glSt(q))),nx=pq||glNext();
    if(nx&&glSt(nx)!=='done')h+=`<b style="font-size:12px">${pq?'📌 กำลังติดตาม':'🧭 น่าลองต่อ'}</b>`+glCard(nx);
    h+=glTabs(tab);
    if(tab==='s')h+=`<div class="log">⚡ ทำได้ในไม่กี่นาที — รับรางวัลแล้วมีเป้าหมายใหม่เข้ามาแทน · ผลงานเหล่านี้ช่วยดันระยะกลางและระยะยาวไปพร้อมกัน</div>`+glShortList().map(glCard).join('');
    else if(tab==='m'){const ord={done:0,act:1,hid:2,seal:3,got:4};h+=`<div class="log">🎯 ต่อยอดจากระยะสั้น — วิวัฒนาการ พื้นที่ใหม่ ของหายาก บุคลิก และบอสประจำพื้นที่ (ใช้เวลา 1–3 ชั่วโมง)</div>`+GLQ.filter(q=>q.g==='m').sort((a,b)=>ord[glSt(a)]-ord[glSt(b)]).map(glCard).join('');}
    else h+=`<div class="log">🌌 เส้นทางสู่ตำนานของตระกูล — ซ่อนปริศนาไว้ในทุกหมวด · ความคืบหน้าสะสมข้ามรุ่น ไม่หายเมื่อสัตว์ตาย</div>`+GL_GR.map(([id,ic,n])=>{
      const L=GLQ.filter(q=>q.g===id),p=Math.round(L.reduce((a,q)=>a+glPct(q),0)/L.length*100),got=L.filter(q=>glSt(q)==='got').length,
        my=L.filter(q=>['hid','seal'].includes(glSt(q))).length,d=L.filter(q=>glSt(q)==='done').length;
      return `<button class="btn" style="text-align:left;padding:8px 10px" onclick="glOpen('${id}')"><div style="display:flex;justify-content:space-between"><b>${ic} ${n}</b><b>${p}%</b></div><i style="display:block;height:6px;background:var(--bd);border-radius:6px;overflow:hidden;margin:5px 0"><u style="display:block;height:100%;width:${p}%;background:var(--ac)"></u></i><small style="color:var(--mu)">✔ ${got}/${L.length}${my?` · ❔ ปริศนา ${my}`:''}${d?` · 🎁 รอรับ ${d}`:''}${G.fin[id]?' · 👑 ครบหมวด':''}</small></button>`;}).join('');
  }else{
    const ord={done:0,act:1,hid:2,seal:3,got:4};
    h+=`<div class="discovery">${GL_INFO[view]()}</div>`+GLQ.filter(q=>q.g===view).sort((a,b)=>ord[glSt(a)]-ord[glSt(b)]).map(glCard).join('');
    h+=`<div class="log">👑 ทำครบทั้งหมวดรับ 💎+3 เพิ่ม</div>`;
  }
  h+=`<button class="btn on" onclick="glClose()">ปิด</button>`;
  glShow(h,keep);
}
function glPin(id){const G=glS();G.pin=G.pin===id?'':id;glPillUpd();saveGame();glOpen(G.view,1);}
function glClaim(id){
  const G=glS(),q=glAll().find(x=>x.id===id);if(!q||!G.done[id]||G.got[id])return;G.got[id]=1;const r=q.rw;
  if(r.m)S.money+=r.m;if(r.g)S.crystal+=r.g;if(r.form)G.forms[r.form]=1;if(r.perk)glPerk(r.perk);if(r.guar)G.guar++;
  let t=`🎉 <b>${q.t}</b><br>${glRw(r)}`;
  if(GL_GR.some(x=>x[0]===q.g)&&!G.fin[q.g]&&GLQ.filter(x=>x.g===q.g).every(x=>G.got[x.id])){G.fin[q.g]=1;S.crystal+=3;t+=`<br>👑 <b>ครบทั้งหมวด!</b> 💎+3`;}
  if(G.pin===id)G.pin='';if(q.g==='s')G.sh=(G.sh||[]).filter(s=>s.id!==id);
  glMsg=t;log('🎁 รับรางวัลเป้าหมาย: '+q.t);saveGame();render();glOpen(G.view,1);
}
function glPillUpd(){
  const e=$('glPill');if(!e)return;const G=glS(),pq=glAll().find(q=>q.id===G.pin),dn=glAll().some(q=>glSt(q)==='done');let t='🎯 เป้าหมาย';
  if(pq&&glSt(pq)!=='got'&&glSt(pq)!=='seal'){const s=glSt(pq);t=s==='done'?'🎁 รับรางวัล!':s==='hid'?'📌 ❔ '+pq.h:'📌 '+pq.t+' '+Math.min(pq.v(),pq.n)+'/'+pq.n+(pq.u||'');}
  else if(dn)t='🎁 รับรางวัล!';
  if(e._t!==t){e._t=t;e.textContent=t;}e.classList.toggle('glon',dn);
}
// ---------- เกาะเข้ากับระบบเดิม (ห่อฟังก์ชันเดิมไว้ ไม่แก้ตรรกะเดิม) ----------
{
  const _sg=saveGame;saveGame=function(){try{glTick();}catch(e){}return _sg.apply(this,arguments);};
  const _rd=render;render=function(){const r=_rd.apply(this,arguments);try{glPillUpd();}catch(e){}return r;};
  const _qi=qInc;qInc=function(k,n){try{glAdd('c_'+k,n||1);}catch(e){}return _qi.apply(this,arguments);};
  const _by=buy;buy=function(){const m=S.money;const r=_by.apply(this,arguments);try{if(S.money<m)glAdd('c_buy');}catch(e){}return r;};
  const _rm=recordMemory;recordMemory=function(kind){try{glAdd('m_'+kind);if(kind==='relic')glAdd('rel'+(PX.bi||0));}catch(e){}return _rm.apply(this,arguments);};
  const _nn=newNpc;newNpc=function(){const p=_nn.apply(this,arguments);try{if(p){if(!p.fear)p.fear=Math.random()<.4?'dark':pk(['high','loud','water']);glAdd('fr_'+p.fear);if(S.c&&p.fear==='dark')S.c.dk=(S.c.dk||0)+1;log('👀 '+p.ic+p.n+' '+GL_FEAR[p.fear][2]);}}catch(e){}return p;};
  const _xh=xHeal,bagSum=()=>Object.values(S.bag||{}).reduce((a,b)=>a+b,0);
  xHeal=function(){const b=S.b,n0=bagSum();const r=_xh.apply(this,arguments);if(b&&b.xf&&bagSum()<n0)b.gh=1;return r;};
  const _xf=xFightEnd;xFightEnd=function(w,b){const r=_xf.apply(this,arguments);try{if(w&&b&&b.xf&&b.xf.boss){glAdd('bw');glS().n['bwb'+S.dBi]=1;if(b.xf.pat)glS().n['bp_'+b.xf.pat]=1;if(!b.gh)glAdd('bclean');}}catch(e){}return r;};
  const _ev=evolve;evolve=function(){const r=_ev.apply(this,arguments);try{if(S.c&&S.c.secretForm)glS().sf[S.c.secretForm]=1;}catch(e){}return r;};
  const _uc=useCrystal;useCrystal=function(){const pre=S.c&&S.c.stage;const r=_uc.apply(this,arguments);try{if(pre===3&&S.c.stage===4&&S.c.secretForm)glAdd('legend');}catch(e){}return r;};
  const _dp=discoveryProfile;discoveryProfile=function(){return _dp.apply(this,arguments)||glForm();};
  const _ds=dxSee;dxSee=function(){const r=_ds.apply(this,arguments);try{if(r)glAdd('c_new');if(r&&glS().perks.keen)S.money+=Math.round((50+S.depth*6)*.5);}catch(e){}return r;};
  const _rs=rollSpecies;rollSpecies=function(){const G=glS();if(G.guar>0){const un=GL_SPC.map(s=>s[0]).filter(x=>!G.sp[x]);if(un.length){G.guar--;return pk(un);}}return _rs.apply(this,arguments);};
  const _ht=hatch;hatch=function(){const r=_ht.apply(this,arguments);try{const c=S.c,G=glS();if(c){if(c.sp)G.sp[c.sp]=1;
    if(G.perks.life)c.max+=6;if(G.perks.blood)['str','spd','int'].forEach(k=>c[k]++);if(G.perks.bond)c.bond=Math.max(c.bond,70);if(G.perks.heir)S.money+=500;}}catch(e){}return r;};
}
function glAdd(k,n){const G=glS();G.n[k]=(G.n[k]||0)+(n||1);}
