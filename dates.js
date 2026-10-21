/* Nexus smarter dates. Loaded after features.js.
   Tasks now understand: "friday", "next monday", "in 3 days", "in 2 weeks", "next week",
   "every monday", "every day", "weekly", "monthly", plus a few Hindi and Telugu words
   (aaj/आज/ఈ రోజు = today, repu/రేపు = tomorrow, parso/परसों/ఎల్లుండి = day after tomorrow).
   Dates are whole days (the app stores a date, not a time). "in 2 hours" means today. */
(()=>{
const WD={sunday:0,monday:1,tuesday:2,wednesday:3,thursday:4,friday:5,saturday:6};
const WB='(?<![\\p{L}\\p{N}])',WA='(?![\\p{L}\\p{N}])';
const re=(src)=>new RegExp(WB+'(?:'+src+')'+WA,'iu');
const DAYS=Object.keys(WD).join('|');
const nextWd=(wd,strict)=>{const d=new Date(),n=(wd-d.getDay()+7)%7;return addD(n===0&&strict?7:n)};
const R={
  everyWd:re('every\\s+('+DAYS+')'),
  everyDay:re('every\\s*day|daily'),
  weekly:re('every\\s*week|weekly'),
  monthly:re('every\\s*month|monthly'),
  nextWd:re('next\\s+('+DAYS+')'),
  nextWeek:re('next\\s+week'),
  inN:re('in\\s+(\\d{1,3})\\s*(day|days|week|weeks|month|months)'),
  inH:re('in\\s+\\d{1,3}\\s*(?:hour|hours|hr|hrs|minute|minutes|min|mins)'),
  bare:re('(?:on\\s+)?('+DAYS+')'),
  today:re('aaj|आज|ఈ\\s*రోజు'),
  tomorrow:re('repu|రేపు|कल'),
  dayAfter:re('parso|परसों|ఎల్లుండి')
};
function when(t){
  let m;
  if((m=R.everyWd.exec(t)))return{due:nextWd(WD[m[1].toLowerCase()],false),rep:'weekly'};
  if(R.everyDay.test(t))return{due:dk(),rep:'daily'};
  if(R.weekly.test(t))return{due:addD(7),rep:'weekly'};
  if(R.monthly.test(t)){const d=new Date();d.setMonth(d.getMonth()+1);return{due:dk(d),rep:'monthly'}}
  if((m=R.nextWd.exec(t)))return{due:nextWd(WD[m[1].toLowerCase()],true)};
  if(R.nextWeek.test(t))return{due:addD(7)};
  if((m=R.inN.exec(t))){const n=+m[1],u=m[2].toLowerCase();if(u.startsWith('week'))return{due:addD(7*n)};if(u.startsWith('month')){const d=new Date();d.setMonth(d.getMonth()+n);return{due:dk(d)}}return{due:addD(n)}}
  if(R.inH.test(t))return{due:dk()};
  if((m=R.bare.exec(t)))return{due:nextWd(WD[m[1].toLowerCase()],true)};
  if(R.dayAfter.test(t))return{due:addD(2)};
  if(R.tomorrow.test(t))return{due:addD(1)};
  if(R.today.test(t))return{due:dk()};
  return{};
}
window.nxWhen=when;
const oParse=parse;
parse=function(t,f){const p=oParse(t,f);if(p&&p.type==='task'){const r=when(String(t||''));if(!p.due&&r.due)p.due=r.due;if(r.rep)p.rep=r.rep}return p};
const oAdd=addItem;
addItem=function(p){const it=oAdd(p);if(it&&p&&p.rep&&it.type==='task'){it.rep=p.rep;save()}return it};
})();
