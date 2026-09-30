export const defaultDishes = [
 { id:'drink', category:'Welcome', label:'Welcome Drink', name:'Rose & Cardamom Sharbat', description:'A fragrant welcome of rose, cooling milk and a delicate touch of cardamom.', x:16,y:28 },
 { id:'starter', category:'Starters', label:'Traditional Starter', name:'Gujarati Khaman Dhokla', description:'Soft, steamed gram-flour bites, tempered with mustard seeds and fresh curry leaves.', x:16,y:64 },
 { id:'dal', category:'Main Course', label:'Dal', name:'Dal Panchmel', description:'Five lentils slow-simmered with warming spices and finished with a fragrant ghee tempering.', x:69,y:17 },
 { id:'sabzi', category:'Main Course', label:'Seasonal Sabzi', name:'Bhindi Masala', description:'Tender seasonal okra, gently tossed with onions and traditional Indian spices.', x:85,y:30 },
 { id:'paneer', category:'Main Course', label:'Paneer Special', name:'Shahi Paneer', description:'Soft paneer in a rich tomato and cashew gravy, delicately perfumed with whole spices.', x:50,y:12 },
 { id:'kadhi', category:'Main Course', label:'Kadhi', name:'Gujarati Kadhi', description:'A comforting yoghurt and gram-flour curry with a gentle balance of sweet and tangy.', x:86,y:48 },
 { id:'rice', category:'Rice', label:'Rice', name:'Steamed Basmati Rice', description:'Light, fragrant long-grain basmati, the perfect companion to every bowl.', x:29,y:17 },
 { id:'bread', category:'Breads', label:'Indian Breads', name:'Fresh Ghee Phulka', description:'Soft, handmade Indian breads, served warm with a delicate brush of ghee.', x:49,y:47 },
 { id:'raita', category:'Accompaniments', label:'Raita', name:'Cucumber Raita', description:'Cooling yoghurt with fresh cucumber, roasted cumin and a hint of chilli.', x:80,y:66 },
 { id:'salad', category:'Accompaniments', label:'Salad', name:'Garden Kachumber', description:'Fresh cucumber, tomato and onion, brightened with lemon and herbs.', x:31,y:79 },
 { id:'chutney', category:'Accompaniments', label:'Chutney', name:'Fresh Mint Chutney', description:'A vibrant blend of mint, coriander and green chilli, freshly prepared.', x:49,y:85 },
 { id:'papad', category:'Accompaniments', label:'Papad', name:'Roasted Papad', description:'A light, crisp lentil papad that brings a little crunch to your royal spread.', x:13,y:46 },
 { id:'sweet', category:'Desserts', label:'Traditional Sweet', name:'Warm Gulab Jamun', description:'Soft golden dumplings soaked in rose-scented syrup and finished with pistachios.', x:68,y:79 }
];
export const groups = ['Welcome','Starters','Main Course','Breads','Rice','Accompaniments','Desserts'];
export const defaultSettings = { phone:'', email:'', hours:'Opening Soon', address:'EC Road, Dehradun, Uttarakhand – 248001', seoTitle:'ShreeGovind Bhog | A Royal Indian Thali Experience in Dehradun', seoDescription:'Discover a premium Maharaja-style Indian thali experience at ShreeGovind Bhog, EC Road, Dehradun. Traditional flavours, gracious hospitality and memorable family dining. Opening soon.' };
export const defaultGallery = [
 {id:'g1',src:'/images/royal-thali.jpg',title:'A feast fit for royalty',category:'The Thali',position:'70% 60%'},
 {id:'g2',src:'/images/royal-interior.jpg',title:'Where heritage meets warmth',category:'Restaurant',position:'50% 50%'},
 {id:'g3',src:'/images/thali-overhead.jpg',title:'A little of everything. A lot of love.',category:'The Thali',position:'50% 50%'},
 {id:'g4',src:'/images/royal-thali.jpg',title:'The sweetest ending',category:'Flavours',position:'96% 96%',detail:true},
 {id:'g5',src:'/images/royal-interior.jpg',title:'A table for your special moments',category:'Celebrations',position:'57% 60%',detail:true},
 {id:'g6',src:'/images/thali-overhead.jpg',title:'Handmade. Heartfelt.',category:'Flavours',position:'50% 46%',detail:true},
 {id:'g7',src:'/images/royal-thali.jpg',title:'The beauty is in the details',category:'Restaurant',position:'100% 0%',detail:true},
 {id:'g8',src:'/images/thali-overhead.jpg',title:'Tradition in every bowl',category:'Flavours',position:'50% 0%',detail:true}
];
export function readSaved(key, fallback) {try {const value=JSON.parse(localStorage.getItem('sgb-'+key));return value ?? fallback;} catch {return fallback;}}
