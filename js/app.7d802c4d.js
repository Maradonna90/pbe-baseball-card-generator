(function(){"use strict";var e={3591:function(e,o,a){var r=a(9242),n=a(3396);const t={class:"bg-pbe-blue-900 min-h-screen",id:"app"};function s(e,o){const a=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",t,[(0,n.Wm)(a)])}var l=a(89);const i={},c=(0,l.Z)(i,[["render",s]]);var d=c,p=a(2483),m=a(7139);const g=(0,n._)("h1",{class:"text-center text-3xl text-pbe-white-50"},"PBE Baseball Card Generator",-1),u={class:"grid grid-cols-5 gap-20 mt-20 mx-10"},h=["src"],f={class:"text-center text-pbe-blue-900 text-l"};function b(e,o,a,r,t,s){const l=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[g,(0,n._)("div",u,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.seasons,((e,o)=>((0,n.wg)(),(0,n.iD)("div",{class:"example p-2 bg-pbe-white-50 rounded-lg shadow-md",key:o},[(0,n.Wm)(l,{to:{name:"SeasonGenerator",params:{seasonId:o}}},{default:(0,n.w5)((()=>[(0,n._)("img",{class:"mx-auto",src:"/images/templates/"+e.exampleImage,alt:"Example"},null,8,h),(0,n._)("p",f,(0,m.zw)(e.name),1)])),_:2},1032,["to"])])))),128))])],64)}const w={S41:{id:"S41",name:"Season 41",exampleImage:"S41-example.png"}};var v={data(){return{seasons:w}}};const y=(0,l.Z)(v,[["render",b]]);var _=y;const C={class:"SeasonGenerator flex flex-col justify-center items-center min-h-screen grid-cols-2 gap-4"},F=(0,n._)("div",{class:"Header col-span-2 text-center"},null,-1),I={class:"template-preview p-3 bg-pbe-white-200 rounded-lg shadow-md"},x=["width","height"],P={class:"input-container p-4 bg-pbe-white-50 rounded-lg shadow-md"},S=(0,n._)("label",{for:"name",class:"block font-semibold mb-1 text-pbe-blue-900"},"Name:",-1),k=(0,n._)("label",{for:"position",class:"block font-semibold mb-1 text-pbe-blue-900"},"Position:",-1),D=(0,n._)("option",{value:""},"Select a position",-1),B=["value"],E=(0,n._)("label",{for:"team",class:"block font-semibold mb-1 text-pbe-blue-900"},"Team:",-1),O=(0,n._)("option",{value:""},"Select a team",-1),U=["value"],R=(0,n._)("label",{for:"player-image",class:"block font-semibold mb-1 text-pbe-blue-900"},"Player Image:",-1);function A(e,o,a,t,s,l){const i=(0,n.up)("image-modal");return(0,n.wg)(),(0,n.iD)("div",C,[F,(0,n._)("div",I,[(0,n._)("canvas",{ref:"cardCanvas",class:"border bg-pbe-white-50",width:s.cardWidth,height:s.cardHeight},null,8,x)]),(0,n._)("div",P,[S,(0,n.wy)((0,n._)("input",{type:"text",id:"name","onUpdate:modelValue":o[0]||(o[0]=e=>s.name=e),onChange:o[1]||(o[1]=(...e)=>l.updatePreview&&l.updatePreview(...e)),class:"w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300",required:""},null,544),[[r.nr,s.name]]),k,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":o[2]||(o[2]=e=>s.selectedPosition=e),onChange:o[3]||(o[3]=(...e)=>l.updatePreview&&l.updatePreview(...e)),class:"w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"},[D,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.positions,(e=>((0,n.wg)(),(0,n.iD)("option",{value:e.name,key:e.name},(0,m.zw)(e.name)+" ("+(0,m.zw)(e.short)+")",9,B)))),128))],544),[[r.bM,s.selectedPosition]]),E,(0,n.wy)((0,n._)("select",{"onUpdate:modelValue":o[4]||(o[4]=e=>s.selectedTeam=e),onChange:o[5]||(o[5]=(...e)=>l.updatePreview&&l.updatePreview(...e)),class:"w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"},[O,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.teams,(e=>((0,n.wg)(),(0,n.iD)("option",{value:e,key:e.name},(0,m.zw)(e.name),9,U)))),128))],544),[[r.bM,s.selectedTeam]]),R,(0,n._)("input",{type:"file",onChange:o[6]||(o[6]=(...e)=>l.handleImageUpload&&l.handleImageUpload(...e)),class:"w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"},null,32),(0,n._)("button",{class:"bg-pbe-blue-900 text-pbe-white-50 w-full p-2 border rounded",onClick:o[7]||(o[7]=(...e)=>l.openModal&&l.openModal(...e))},"Edit Image")]),s.isModalOpen?((0,n.wg)(),(0,n.j4)(i,{key:0,"image-url":s.playerImage,name:s.name,position:s.selectedPosition,team:s.selectedTeam,season:s.season,height:s.cardHeight,width:s.cardWidth,onClose:l.closeModal,onCroppedImage:l.updateImageUrl},null,8,["image-url","name","position","team","season","height","width","onClose","onCroppedImage"])):(0,n.kq)("",!0)])}a(6229),a(7330),a(2062);const L=[{name:"Buffalo Surge",logo:"buffalo-surge.png",primary_color:"#FEC800",secondary_color:"#4A281B"},{name:"New York Voyagers",logo:"new-york-voyagers.png",primary_color:"#0E1A42",secondary_color:"#BABF87"},{name:"Outer Banks Aviators",logo:"outer-banks-aviators.png",primary_color:"#1e4778",secondary_color:"#ce5428"},{name:"Providence Crabs",logo:"providence-crabs.png",primary_color:"#4280CE",secondary_color:"#FFBA00"},{name:"Boise Raptors",logo:"boise-raptors.png",primary_color:"#38116f",secondary_color:"#FFFFFF"},{name:"San Antonio Sloths",logo:"san-antonio-sloths.png",primary_color:"#87795E",secondary_color:"#000000"},{name:"Toronto Pathfinders",logo:"toronto-pathfinders.png",primary_color:"#006B3C",secondary_color:"#001D5E"},{name:"Vancouver Vandals",logo:"vancouver-vandals.png",primary_color:"#1E5229",secondary_color:"#E3BC23"},{name:"Detroit Demons",logo:"detroit-demons.png",primary_color:"#ff8b00",secondary_color:"#000000"},{name:"Indianapolis Apex",logo:"indianapolis-apex.png",primary_color:"#E30200",secondary_color:"#A5A5A5"},{name:"Lunar Base Space Rangers",logo:"lunar-base-space-rangers.png",primary_color:"#FCEC00",secondary_color:"#FFFFFF"},{name:"Nashville Stars",logo:"nashville-stars.png",primary_color:"AC0000",secondary_color:"#062c48"},{name:"Cancun Toros",logo:"cancun-toros.png",primary_color:"#ea2092",secondary_color:"#00aeef"},{name:"Death Valley Scorpions",logo:"death-valley-scorpions.png",primary_color:"#9F1C33",secondary_color:"#D7BE89"},{name:"New Orleans Rougarous",logo:"new-orleans-rougarous.png",primary_color:"#008804",secondary_color:"#411769"},{name:"Seattle Sea Serpents",logo:"seattle-sea-serpents.png",primary_color:"#004B49",secondary_color:"#DBCFB0"},{name:"Chicago Kingpins",logo:"chicago-kingpins.png",primary_color:"#8b0000",secondary_color:"#ffffff"},{name:"Florida Flamingos",logo:"florida-flamingos.png",primary_color:"#E27B8F",secondary_color:"#FFFFFF"},{name:"Louisville Lemurs",logo:"louisville-lemurs.png",primary_color:"#FFB314",secondary_color:"#050505"},{name:"Puerto Rico Ranas",logo:"puerto-rico-ranas.png",primary_color:"#07F821",secondary_color:"#F807DE"},{name:"State College Swift Steeds",logo:"swift-steeds.png",primary_color:"#070f7e",secondary_color:"#2792ff"},{name:"Amarillo Armadillos",logo:"amarillo-armadillos.png",primary_color:"#eccc23",secondary_color:"#010101"},{name:"Anchorage Wheelers",logo:"anchorage-wheelers.png",primary_color:"#3c3172",secondary_color:"#beab70"},{name:"Brew City Bears",logo:"brew-city-bears.png",primary_color:"#EEE1C6",secondary_color:"#2f241d"},{name:"California Firehawks",logo:"california-firehawks.png",primary_color:"#ec2627",secondary_color:"#ee7214"},{name:"Kansas City Hepcats",logo:"kansas-city-hepcats.png",primary_color:"#042461",secondary_color:"#6E9EEB"}],M=[{name:"Catcher",short:"C"},{name:"First Base",short:"1B"},{name:"Second Base",short:"2B"},{name:"Third Base",short:"3B"},{name:"Shortstop",short:"SS"},{name:"Left Field",short:"LF"},{name:"Right Field",short:"RF"},{name:"Center Field",short:"CF"},{name:"Designated Hitter",short:"DH"},{name:"Starting Pitcher",short:"SP"},{name:"Relief Pitcher",short:"RP"}],T=e=>((0,n.dD)("data-v-3de6ce8d"),e=e(),(0,n.Cn)(),e),j={class:"modal"},H={class:"modal-content bg-pbe-white-50 p-4 rounded-lg shadow-md relative max-h-screen"},$={class:"cropper-area bg-pbe-white-50 p-4 rounded-lg relative"},V={ref:"cropperCanvas",class:"cropper-canvas"},N={class:"preview-area"},W=T((()=>(0,n._)("p",{class:"block font-semibold mb-1 text-pbe-blue-900"},"Preview",-1))),K={class:"preview"},Y=["width","height"];function z(e,o,a,r,t,s){return(0,n.wg)(),(0,n.iD)("div",j,[(0,n._)("div",{class:"modal-overlay bg-black opacity-50",onClick:o[0]||(o[0]=o=>e.$emit("close"))}),(0,n._)("div",H,[(0,n._)("section",$,[(0,n._)("canvas",V,null,512)]),(0,n._)("section",N,[W,(0,n._)("div",K,[(0,n._)("canvas",{ref:"previewCanvas",class:"preview-canvas",width:a.width,height:a.height},null,8,Y)])]),(0,n._)("button",{onClick:o[1]||(o[1]=(...e)=>s.cropImageAndEmit&&s.cropImageAndEmit(...e)),class:"mt-4 bg-pbe-blue-900 text-white py-2 px-4 rounded"},"Crop Image")])])}var G=a(255),Z=a.n(G);function q(e,o,a){const r=document.createElement("canvas");r.width=e.width,r.height=e.height;const n=r.getContext("2d");n.drawImage(e,0,0);const t=n.getImageData(0,0,r.width,r.height),s=t.data,l=J(o),i=J(a);for(let d=0;d<s.length;d+=4){const e=s[d],o=s[d+1],a=s[d+2];e===l.r&&o===l.g&&a===l.b&&(s[d]=i.r,s[d+1]=i.g,s[d+2]=i.b)}n.putImageData(t,0,0);const c=new Image;return c.src=r.toDataURL(),c}function J(e){const o=parseInt(e.slice(1),16),a=o>>16&255,r=o>>8&255,n=255&o;return{r:a,g:r,b:n}}function Q(e,o,a,r,n,t){const s=e.getContext("2d");let l=new Image,i=new Image,c=new Image;l.src=`/images/templates/${o.id}.png`,i.src=`/images/teams/${a.logo}`,c.src=r;let d="#ffb314";"Default"!==a.name&&(l=q(l,d,a.primary_color)),Promise.all([new Promise((e=>l.onload=e)),new Promise((e=>i.onload=e)),new Promise((e=>c.onload=e))]).then((()=>(s.clearRect(0,0,e.width,e.height),s.drawImage(c,0,0,e.width,e.height),s.drawImage(l,0,0,e.width,e.height),s.drawImage(i,7,187,50,50),s.font="13px Arial",s.fillStyle=a.secondary_color||"#FFFFFF",s.fillText(n,69,215),s.font="9px Arial",s.fillStyle=a.secondary_color||"#FFFFFF",s.fillText(t,60,246),e.toDataURL())))}var X={data(){return{cropImg:""}},props:{imageUrl:String,name:String,position:String,team:Object,season:Object,height:Number,width:Number},mounted(){this.initCropper()},methods:{updatePreview(){const e=this.cropper.getCroppedCanvas().toDataURL(),o=this.$refs.previewCanvas;Q(o,this.season,this.team,e,this.name,this.position)},initCropper(){const e=this.$refs.cropperCanvas;this.cropper=new(Z())(e,{viewMode:1,aspectRatio:180/252,crop:this.updatePreview}),this.cropper.replace(this.imageUrl)},cropImageAndEmit(){this.cropImg=this.$refs.previewCanvas.toDataURL();const e=this.cropper.getCroppedCanvas().toDataURL();this.$emit("croppedImage",this.cropImg,e),this.$emit("close")}},beforeUnmount(){this.cropper&&this.cropper.destroy()}};const ee=(0,l.Z)(X,[["render",z],["__scopeId","data-v-3de6ce8d"]]);var oe=ee,ae={components:{ImageModal:oe},data(){return{name:"",positions:M,teams:L,season:w[this.$route.params.seasonId],selectedPosition:"",selectedTeam:{name:"Default",logo:"team-logo.png"},playerImage:"/images/blank-player.png",uploadedImage:null,uploadedImageUrl:"",isModalOpen:!1,cardHeight:252,cardWidth:180}},methods:{generateCardImage(){const e=this.$refs.cardCanvas;Q(e,this.season,this.selectedTeam,this.playerImage,this.name,this.selectedPosition)},updatePreview(){this.generateCardImage()},handleImageUpload(e){const o=e.target.files[0];o&&(this.playerImage=URL.createObjectURL(o),this.uploadedImage=o,this.uploadedImageUrl=URL.createObjectURL(o)),this.updatePreview()},openModal(){this.isModalOpen=!0},closeModal(){this.isModalOpen=!1},updateImageUrl(e,o){this.playerImage=o;const a=this.$refs.cardCanvas,r=a.getContext("2d"),n=new Image;n.onload=()=>{r.clearRect(0,0,a.width,a.height),r.drawImage(n,0,0)},n.src=e}},mounted(){this.generateCardImage()}};const re=(0,l.Z)(ae,[["render",A]]);var ne=re;const te=[{path:"/",component:_},{path:"/season/:seasonId",component:ne,name:"SeasonGenerator"}],se=(0,p.p7)({history:(0,p.PO)(),routes:te});var le=se;(0,r.ri)(d).use(le).mount("#app")}},o={};function a(r){var n=o[r];if(void 0!==n)return n.exports;var t=o[r]={exports:{}};return e[r].call(t.exports,t,t.exports,a),t.exports}a.m=e,function(){var e=[];a.O=function(o,r,n,t){if(!r){var s=1/0;for(d=0;d<e.length;d++){r=e[d][0],n=e[d][1],t=e[d][2];for(var l=!0,i=0;i<r.length;i++)(!1&t||s>=t)&&Object.keys(a.O).every((function(e){return a.O[e](r[i])}))?r.splice(i--,1):(l=!1,t<s&&(s=t));if(l){e.splice(d--,1);var c=n();void 0!==c&&(o=c)}}return o}t=t||0;for(var d=e.length;d>0&&e[d-1][2]>t;d--)e[d]=e[d-1];e[d]=[r,n,t]}}(),function(){a.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(o,{a:o}),o}}(),function(){a.d=function(e,o){for(var r in o)a.o(o,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={143:0};a.O.j=function(o){return 0===e[o]};var o=function(o,r){var n,t,s=r[0],l=r[1],i=r[2],c=0;if(s.some((function(o){return 0!==e[o]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(i)var d=i(a)}for(o&&o(r);c<s.length;c++)t=s[c],a.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return a.O(d)},r=self["webpackChunkbaseball_card_generator"]=self["webpackChunkbaseball_card_generator"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(3591)}));r=a.O(r)})();
//# sourceMappingURL=app.7d802c4d.js.map