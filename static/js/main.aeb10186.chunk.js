(this["webpackJsonp@golf/frontend"]=this["webpackJsonp@golf/frontend"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},111:function(e,t,n){},135:function(e,t,n){},142:function(e,t,n){},154:function(e,t,n){},156:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(35),o=n.n(i),c=(n(97),n(98),n(45)),r=n(37),l=n(12),u=n(165),d=n.p+"static/media/logo192.7e8b8d59.png",h=(n(102),n(103),n(163)),m=n(80),b=n(78),j=n.n(b),p=n.p+"static/media/arch.0ce9d5c8.jpeg",f=n(1),g=function(){return Object(f.jsxs)("article",{children:[Object(f.jsx)(h.a,{className:"d-flex-row justify-content-around",children:Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsx)("h1",{className:"header",children:"Golf it!"})}),Object(f.jsx)("br",{}),Object(f.jsxs)("div",{className:"text-center",children:[Object(f.jsx)("h5",{className:"subheader",children:"A game designed to show off your code-fu"}),Object(f.jsxs)("p",{className:"paragraph",children:["by solving problems in the least number of ",Object(f.jsx)("b",{children:"characters."})]})]})]})})}),Object(f.jsx)(h.a,{className:"d-flex parent justify-content-center",children:Object(f.jsx)(j.a,{className:"Tilt",options:{max:25,easing:"cubic-bezier(.17,.67,.74,.76)"},children:Object(f.jsxs)("div",{className:"parent-div h-100 w-100",children:[Object(f.jsx)("div",{className:"glow"}),Object(f.jsx)("img",{src:p,alt:"",className:"arch"})]})})}),Object(f.jsx)(h.a,{className:"d-flex justify-content-center",children:Object(f.jsx)(r.b,{to:"/game",children:Object(f.jsx)(m.a,{className:"play",children:"Play!"})})})]})},O=n(11),x=n(16),y=n(18),v=n(8),w=n.n(v),S=(n(111),n(5)),A=n(46),C=n(6),N=n(7),k=n(81),T=n.n(k),R=n(89),E={data:{questions:[{questionName:"Adam's Bot",description:"Adam has always wanted to design a robot. Now, since he has accquirred the skills, he can fulfill his childhood dream. However, there are some flaws in the bot and it ignores some of the commands recived by it. Help Adam find the number of different co-ordinates the bot could end up at.",question:"#### Problem Statement\n Adam is a tech enthusiast and an electrical engineer. Adam has also been in love with the idea of robots since his childhood, Adam has always wanted to design a robot. Now, since he has accquirred the skills, he can fulfill his childhood dream. After a few weeks, Adam designs a basic bot than can only move in 4 directions(Up, Down, Left and Right). The bot is controlled remotely using a remote control which sends the signals to the bot to move either Left or Right or Up or Down. However, there are some flaws in the bot and it ignores some of the commands recived by it. Given an input signal( a combination of 'U', 'D', 'L' or 'R' commands), Adam wants to know the number of different co-ordinates the bot could end up at. The initial co-ordinates of the bot are (0,0).  \n\n **Input Format**\n\n The first line of the input will be an integer N which will denote the number of commands. The second line of input will be a string of length N comprising of 'U','D','L' and 'R'. \n\n **Output Format**\n\n The output will be an integer denoting the number of possible co-ordinates the bot could end up at.  \n\n **Constraints**\n\n 1<=N<=10^5 \n\n **Sample Input**\n\n 4 RRDU \n\n **Sample Output**\n\n 9 \n\n **Explanation**\n\n Some of the final possible co-ordinates can be (2,0), (1,1), (1,-1), (0,0) etc. ",id:"1"},{questionName:"Candy Store",description:"Can you successfully pick your order from a Candy Store from an infinite line of Candy Stores in front of you?",question:"#### Problem Statement\n There is an infinite line of Candy Stores in front of you. All of the stores are numbered- Store 0, Store 1, Store 2.... and so on. You have to pick your order from Candy Store S. However, to reach the correct store you have to either skip forward or backward by p or q stores multiple times. You are standing in front of Candy Store 0 right now. Can you successfully pick your order from Candy Store S? If you can, print 1. If not, print 0.  \n\n **Input Format**\n\n The first line contains an integer T, the number of test cases. The first line of each test case contains an integer S which denotes the Candy Store where you should end up at. The second line of each test case contains an integer p . The third line of each test case contains an integer q . \n\n **Output Format**\n\n The output is an integer : 1 or 0, to show if you could successfully pick your order from Candy Store S or not. <br /> \n\n **Constraints**\n\n 1<T<=10000 1<=S,p,q<=10^18 \n\n **Sample Input**\n\n 1 11 2 5 <br /> \n\n **Sample Output**\n\n 1 \n\n **Explanation**\n\n You have to go to Candy Store 11. The steps are as follows, - Skip forward to Candy Store 5 (+5) - Skip forward to Candy Store 10 (+5) - Skip forward to Candy Store 15 (+5) - Skip backwards to Candy Store 13 (-2) - Skip backwards to Candy Store 11 (-2) 11= 5+5+5-2-2 So, the output is 1 as it is possible to reach Candy Store 11.  ",id:"2"},{questionName:"Chocolate",description:"Can you find the pieces of chocolate you get, from a bar you and your friend are sharing? But to get those you have to play a game.",question:"#### Problem Statement\n Your friend has N pieces of chocolate and he is willing to share some with you, but to get those you have to play a game. The game goes a follow, you keep dividing the pieces into 2 equal halves(without breaking any piece) and giving one half to  your friend until there is no piece remaining. Whenever you divide the pieces into 2 equal halves you can eat the leftover piece  if any. Find the pieces of chocolate you end up getting to eat. \n\n **Input Format**\n\n First line contains an integer T, the number of test cases.  T lines follow, each line contains a positive integer N.  \n\n **Output Format**\n\n For each test case print a single line containing the number of pieces of chocolate u get to eat.  \n\n **Constraints**\n\n 1<=T<=10^4  1<=N<=10^15 \n\n **Sample Input**\n\n 2 1 6  \n\n **Sample Output**\n\n 1 2 \n\n **Explanation**\n\n In the first test case, there is only 1 piece of chocolate so u can divide it into 2 equal halves of 0 pieces and eat the leftover 1 piece. In the second test case, you can divide 6 pieces of chocolate into equal halves of 3 pieces each. Giving one half to your friend now you have 3 pieces which u can divide into 2 halves of 1 piece each and eat the leftover piece. Giving one half to your friend u have 1 piece left which you will end up eating as explained in the first test case. ",id:"3"},{questionName:"ConMan",description:"Jac is a thief who specializes in breaking into safes. On one particular case, he encounters a safe with a strange combination lock. Help him defeat this lock!",question:"#### Problem Statement\n Jac is a thief who specializes in breaking into safes. On one particular case, he encounters a safe with a strange combination lock. The screen would display a series of 'T' numbers and for each number he had to sum up the digits in the even or odd places of the number, subject to if the number was displayed in an even or odd row respectively. Print the sum of even digits of a number or an odd number depending if line number is even or odd. The First line is numbered 1. \n\n **Input Format**\n\n First line contains an integer T, the number of test cases.  T lines follow, each line contains a positive integer A.  \n\n **Output Format**\n\n If the line number is even, then print the sum of digits in even positions of A, else, print the sum of digits in odd positions of A.  \n\n **Constraints**\n\n 1<=A<=10^15 1<=T<=10^4 \n\n **Sample Input**\n\n 2 121342 121342 \n\n **Sample Output**\n\n 6 7 \n\n **Explanation**\n\n The left most digit of a number is the first digit. 121342 is in row 1, which is an odd numbered row so the output will be 1+1+4 = 6, which is the sum of digits in the odd places of the number. 121342 is in row 2, which is an even numbered row so the output would be 2+3+2 = 7 , which is the sum of digits in the even places of the number. ",id:"4"},{questionName:"Simple Champagne Tower",description:"Rosa's and her sister Lisa decided to make a Champagne Tower for a party. After making the Simple Champagne Tower, Lisa starts filling the glasses of the tower with Dom Perignon- Rosa's favourite champagne. How many glasses can they fill?",question:"#### Problem Statement\n Rosa's 21st birthday is coming up and her family is planning an amazing party for her. Her sister Lisa decides to make a Champagne Tower for the party. As Lisa has never tried this before, the structure of her tower is quite simple. It will be a triangular tower with N levels. The number of champagne glasses in each level is equal to the level number. The maximum capacity of each champagne glass is 100ml. After making the Simple Champagne Tower, Lisa starts filling the glasses of the tower with Dom Perignon- Rosa's favourite champagne. She starts pouring into the topmost glass at the rate of 100ml per second. Once a glass becomes full, the champagne pours over along its edges equally into the two glasses immediately under it. After K seconds, Lisa's mother asks her - 'How many glasses have you completely filled so far?' What is Lisa's answer? \n\n **Input Format**\n\n The first line contains an integer T, the number of test cases. The first line of each test case is an integer N which is equal to the number of levels in Lisa's Champagne Tower. The second line of each test case is an integer K which denotes the number of seconds after Lisa started pouring the champagne when her mother asked her the question. \n\n **Output Format**\n\n The output is an integer which denotes the number of completely filled champagne glasses after K seconds. \n\n **Constraints**\n\n 1<=T<=10  1<=N<=1000 1<=K<=5000 \n\n **Sample Input**\n\n 1 3 2 \n\n **Sample Output**\n\n 1 \n\n **Explanation**\n\n The Champagne Tower with N=3 looks like     A    B C   D E F where A...F are champagne glasses.  Given K=2, - When K=1, glass A will be completely filled. - When K=2, glasses B and C will both be half-filled. Hence, after K=2, the number of completely filled champagne glasses=1. ",id:"5"}]}},L={WELCOME:"welcome",ERROR:"player:error",ACK:"player:ack",PLAYER:{CONNECTED:"player:connected"},ROOM:{JOINED:"room:joined",TYPE:"room:type",SUCCESS:"room:success"}},q={CONNECTION:"connection",PLAYER:{JOIN:"player:join",TYPE:"player:type",REJOIN:"player:rejoin",SUCCESS:"player:success"}},I=function(){function e(){var t=this;Object(C.a)(this,e),this.rest=T.a.create({baseURL:"https://golf-it.ashikka.tech",responseType:"json"}),this.sock=Object(R.a)("".concat("wss://golf-it-ws.ashikka.tech","/player")),this.sock.on(L.PLAYER.CONNECTED,(function(e){var n=localStorage.getItem("PREV_CLIENT_ID");n?(t.sock.id=n,t.sock.connect()):localStorage.setItem("PREV_CLIENT_ID",e),console.log("[SOCK] (Connected)",t.sock.id)})),this.sock.on(L.ERROR,console.error.bind(e,"[SOCK] (Error)"))}return Object(N.a)(e,[{key:"socket",get:function(){return this.sock}},{key:"clientID",get:function(){return this.socket.id}},{key:"createRoom",value:function(){var e=Object(x.a)(w.a.mark((function e(){var t,n=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},e.next=3,this.rest.post("/room/create",{clientId:this.clientID,payload:t});case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"findRoom",value:function(){var e=Object(x.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",{});case 2:return e.next=4,this.rest.get("/room/".concat(t));case 4:return e.abrupt("return",e.sent.data);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getQuestions",value:function(){var e=Object(x.a)(w.a.mark((function e(){var t=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.length>0&&void 0!==t[0]?t[0]:void 0,e.abrupt("return",E);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getQuestionByID",value:function(){var e=Object(x.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E.data.questions.filter((function(e){return e.id===t})).shift());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"executeCode",value:function(){var e=Object(x.a)(w.a.mark((function e(t){var n,s,a,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.questionName,s=t.code,a=t.language,i=t.submitTime,e.abrupt("return",this.rest.post("/code/submission/".concat(n),{code:s,language:a,submitTime:i}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"registerListener",value:function(e,t){return this.sock.on(e,t)}},{key:"joinRoom",value:function(){var e=Object(x.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.findRoom(t);case 2:return n=e.sent,this.sock.emit(q.PLAYER.JOIN,t),this.room=n,this._rid=t,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"typeRoom",value:function(){var e=Object(x.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.sock.emit(q.PLAYER.TYPE,this._rid,t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"successRoom",value:function(){var e=Object(x.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.sock.emit(q.PLAYER.SUCCESS,this._rid,this.clientID,t);case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onRoomType",value:function(e){return this.registerListener(L.ROOM.TYPE,e)}},{key:"onRoomJoin",value:function(e){return this.registerListener(L.ROOM.JOINED,e)}},{key:"onSuccessRoom",value:function(e){return this.registerListener(L.ROOM.SUCCESS,e)}}]),e}(),F=new I,P=Object(A.b)("questions/get",Object(x.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=F.getQuestions(),e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})))),B=Object(A.c)({name:"questions",initialState:{data:null},reducers:{},extraReducers:Object(S.a)({},P.fulfilled,(function(e,t){return e.data=t.payload,e}))}).reducer,U=n(164),D=n(168),K=(n(135),n(166)),J=function(e){return Object(f.jsx)(U.a,{sm:12,className:"d-flex justify-content-center align-items-center",children:Object(f.jsx)(D.a,{className:"card question-card p-2",style:{textAlign:"left"},children:Object(f.jsx)(D.a.Body,{children:Object(f.jsxs)(h.a,{children:[Object(f.jsxs)(U.a,{md:8,sm:12,children:[Object(f.jsx)(D.a.Title,{className:"card-title",children:Object(f.jsx)("h2",{children:Object(f.jsx)("b",{children:e.questionName})})}),Object(f.jsx)(K.a,{children:e.question})]}),Object(f.jsx)(U.a,{md:4,sm:12,style:{textAlign:"right"},children:Object(f.jsx)(m.a,{onClick:e.onChoose,children:"Choose"})})]})})})})},Y=function(){var e=Object(c.b)(),t=Object(c.c)((function(e){return e.questions}));Object(s.useEffect)((function(){e(P())}),[e,t]);var n=Object(s.useState)(),a=Object(y.a)(n,2),i=a[0],o=a[1],u=Object(s.useState)(),d=Object(y.a)(u,2),b=d[0],j=d[1],p=Object(s.useState)([]),g=Object(y.a)(p,2),v=g[0],S=g[1],A=Object(l.f)().location,C=Object(s.useCallback)(function(){var e=Object(x.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(t),e.prev=1,e.next=4,F.createRoom({question:t});case 4:n=e.sent,j(n),S([F.clientID]),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),[]),N=new URLSearchParams(A.search);!b&&N.has("r")&&j(N.get("r")),Object(s.useEffect)((function(){b&&(console.log("[SOCK]","(Join)",b),F.joinRoom(b).then(function(){var e=Object(x.a)(w.a.mark((function e(t){var n,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.question,s=t.players,o(n),S(s);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[b]),Object(s.useEffect)((function(){F.onRoomJoin((function(e){v.includes(e)||S([].concat(Object(O.a)(v),[e]))}))}),[v]);return i||b?Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(h.a,{className:"justify-content-center mt-5",style:{margin:"auto",maxWidth:"800px"},children:Object(f.jsxs)("div",{className:"waiting-room d-flex flex-column justify-content-around",style:{padding:"4em"},children:[Object(f.jsx)("h1",{children:Object(f.jsx)("b",{children:"Invite"})}),Object(f.jsx)("p",{children:"Invite players by sending this link!"}),v.length<2?Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{style:{padding:"0.5em 1em",border:"1px solid gray",borderRadius:"0.5em",backgroundColor:"#00000060"},children:Object(f.jsxs)("code",{children:[window.location.href,"?r=",b]})}),Object(f.jsx)("span",{children:Object(f.jsx)(m.a,{style:{margin:"0 1em"},onClick:function(){navigator.clipboard.writeText("".concat(window.location.href,"?r=").concat(b))},children:"Copy"})}),Object(f.jsx)("br",{}),Object(f.jsx)("br",{}),Object(f.jsx)("p",{children:"Waiting for players to join"})]}):Object(f.jsx)(r.b,{to:"/start",children:Object(f.jsx)(m.a,{size:"lg",children:"Start Game"})})]})})}):Object(f.jsxs)(h.a,{children:[Object(f.jsxs)("div",{className:"mt-5 mb-5",children:[Object(f.jsx)("h1",{children:Object(f.jsx)("b",{children:"Challenges"})}),Object(f.jsx)("p",{children:"Choose a challenge below and invite a friend to solve it with you!"})]}),t.data&&t.data.data.questions.map((function(e){return Object(f.jsx)(J,{questionName:e.questionName,question:e.description,onChoose:function(){C(e)}},e.id)}))]})},Q=n(65),M=n.n(Q),G=n(167),H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABLElEQVRIie3UMU7DQBCF4X/sNXABR6ICFAsJKTRwAASIJhScxzSYhhshmrig4gCAiEiQ0oGoqbDjoUjSxCRZK3aKyK/c9ejT7KwX6tRZt8gqkGY/ahijDyr8vO/cngA4q0Ado7HCEbA1WTdVokEv9B2XDtACul4mV5O9yo466IW+YzZjRA+Brqdy+roXfVUKL0IrgW3Q0mFbtFS4CFoaXBTNwfuDmycQb5jS/giibxt08p8KtBReslTObWqnHxADeuwYjZv9qFEVmoOz5LeNyrNAyzX6eDC43p5VGPRC33XpyPhx2FC5sEXhnxlPz8slOXvbvfuc943NTBfCi/Ay0JnwLDxJNC0DnQtD/vKMCwpfpMIw5DqHJTu1hmHUuWv0HmCYyuUyndaps775A58gu4VipAyoAAAAAElFTkSuQmCC",W="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABgUlEQVRIie2VQUoDQRBF34+BPoAuxFPE3CJGECFBhIBZGj2OoheISjQEXcS5xZgbKHiKAZ1yoUjU7p4O6EbyNwPdPf91fapmYKml/psU2iga7a5UnguK0jh2s+w2xbBobu9i5ZmgbtjAPWRj37mab9FAkp2BVg1tSLopmq29amhrT1ZeC9aBNaHz0FkvWGBAObdUl2kYg79DNQTqc8uvC4EBTBoALynwAPTFpKOFwS6fTgzb98Avima79wlttLu+Ss2s7/LpJOQfbK5P481WR+jqh7HUp6SQ7NIDPXCz7CLmWwmGcJQfz2/xWs/l2ajKMwkMwcrnlVTpwuAK+EJQiDSXV1YLX7QW2fMoPepGu+tppHm9mtR3+XT4a+C/aK7KqGNzmjLnIUUrDsT7pZFicx6LPfJ32tqRGJMQZfCTaXTc7P7O5x+MuiZOU6AALs9GJuvxPXZxEvQPbZSwkgKNwS08AZHmMgbAM/BoRielU12ejczoAE/As6HDqneWWur/6A26Q92j19h+TQAAAABJRU5ErkJggg==",z=n.p+"static/media/loading.8bce630c.gif",X=(n(142),function(e){var t=e.status,n=e.compilerResponse;return"hidden"===t?null:"compiling"===t?Object(f.jsxs)(h.a,{className:"d-flex w-25 flex-row justify-content-center compiling-box",children:[Object(f.jsx)("h4",{children:"Compiling..."}),Object(f.jsx)("img",{className:"w-25 h-25",src:z,alt:"loading.gif"})]}):Object(f.jsxs)("div",{className:"w-50 mt-5",style:{background:"linear-gradient(180deg, #28292c 0%, rgba(39, 40, 43, 0.82) 100%)",boxShadow:"0px 13px 40px #00000030, 0px 4px 4px #00000020",borderRadius:"16px",padding:"1rem"},children:[n.tests.map((function(e,t){return 0===t?"Fail"===e.remarks?Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"d-flex flex-row justify-content-around",children:[Object(f.jsxs)("div",{className:"case-box",children:[Object(f.jsx)("div",{className:"test-case-box",children:"Sample Test Case"}),Object(f.jsx)("div",{className:"icon-div",children:Object(f.jsx)("img",{src:W,alt:"CROSS",className:"icon"})})]}),Object(f.jsxs)("div",{className:"sample-case-detail mt-5",children:[Object(f.jsx)("b",{children:"Expected Output:"})," ",e.expectedOutput,Object(f.jsx)("br",{}),Object(f.jsx)("b",{children:"Obtained Output:"})," ",e.obtainedOutput,Object(f.jsx)("br",{}),Object(f.jsx)("b",{children:"Error:"})," ",e.error?e.error:"No error"]})]})}):"Time limit exceeded"===e.remarks?Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("div",{className:"d-flex flex-row justify-content-around",children:[Object(f.jsxs)("div",{className:"case-box",children:[Object(f.jsx)("div",{className:"test-case-box",children:"Sample Test Case"}),Object(f.jsx)("div",{className:"icon-div",children:Object(f.jsx)("img",{src:W,alt:"CROSS",className:"icon"})})]}),Object(f.jsx)("div",{className:"sample-case-detail",children:"TIMEOUT ERROR"})]})}):Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{className:"d-flex flex-row justify-content-around",children:Object(f.jsxs)("div",{className:"case-box",children:[Object(f.jsx)("div",{className:"test-case-box",children:"Sample Test Case"}),Object(f.jsx)("div",{className:"icon-div",children:Object(f.jsx)("img",{src:H,alt:"CROSS",className:"icon"})})]})})}):Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("div",{style:{marginLeft:"2.7rem"},children:Object(f.jsxs)("div",{className:"case-box",children:[Object(f.jsxs)("div",{className:"test-case-box",children:["Test Case ",t+1]}),Object(f.jsx)("div",{className:"icon-div",children:Object(f.jsx)("img",{src:"Fail"===e.remarks||"Time limit exceeded"===e.remarks?W:H,alt:"CROSS",className:"icon"})})]})})})})),Object(f.jsx)("div",{className:"".concat(n.tests.find((function(e){return"Fail"===e.remarks||"Time limit exceeded"===e.remarks}))?"red":"green"," result"),children:n.tests.find((function(e){return"Fail"===e.remarks||"Time limit exceeded"===e.remarks}))?"SUBMISSION UNSUCCESSFUL":"SUBMISSION SUCCESSFUL"})]})}),V=(n(143),n(144),n(145),n(146),n(147),n(148),n(149),n(150),n(151),n(152),n(153),n(154),function(){var e=Object(s.useState)({}),t=Object(y.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)("hidden"),o=Object(y.a)(i,2),c=o[0],r=o[1],l=Object(s.useState)({}),u=Object(y.a)(l,2),d=u[0],b=u[1],j=F.room.question,p=Object(s.useState)("Language"),g=Object(y.a)(p,2),O=g[0],v=g[1],S="";S="C"===O||"Cplusplus"===O?"c_cpp":O;var A=Object(s.useState)(String()),C=Object(y.a)(A,2),N=C[0],k=C[1],T=Object(s.useState)(0),R=Object(y.a)(T,2),E=R[0],L=R[1],q=Object(s.useState)(),I=Object(y.a)(q,2),P=I[0],B=I[1],D=Object(s.useState)(String()),J=Object(y.a)(D,2),Y=J[0],Q=J[1],H=Object(s.useState)(),W=Object(y.a)(H,2),z=W[0],V=W[1],Z=Object(s.useState)(),_=Object(y.a)(Z,2),$=_[0],ee=_[1];console.log($),Object(s.useEffect)((function(){F.onRoomType(Q),F.onSuccessRoom((function(e,t){e!==F.clientID&&(V(!0),ee(t))}))}),[]);var te=function(){var e=Object(x.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({status:"compiling",tests:[]}),e.next=3,F.executeCode({questionName:j.questionName,code:N,language:O,submitTime:Date.now()});case 3:"success"===(t=e.sent).data.status&&(F.successRoom(t),B(!0)),a(t.data.compilerResponse);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){b(n),d.id?r("results"):"compiling"===d.status?r("compiling"):r("hidden")}),[n,d,c]),Object(f.jsxs)("article",{id:"code-page",children:[!!z&&Object(f.jsx)("section",{className:"game-end-glass",id:"box-of-shame",children:Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:Object(f.jsx)("b",{children:"You Lost :("})}),Object(f.jsx)("p",{children:"The competitor won by solving all test cases successfully, before you."})]})}),!!P&&Object(f.jsx)("section",{className:"game-end-glass",id:"box-of-glory",children:Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:Object(f.jsx)("b",{children:"You WIN :)"})}),Object(f.jsx)("p",{children:"You won by solving all test cases successfully!."})]})}),Object(f.jsx)(h.a,{className:"d-flex mt-5",style:{textAlign:"left"},children:j&&Object(f.jsx)("h1",{children:Object(f.jsx)("b",{children:j.questionName})})}),Object(f.jsx)(h.a,{className:"d-flex mt-2",style:{textAlign:"left"},children:j&&Object(f.jsx)("p",{children:Object(f.jsx)(K.a,{children:j.question})})}),Object(f.jsxs)(h.a,{className:"mt-5",children:[Object(f.jsxs)(U.a,{md:7,sm:12,style:{minHeight:"50em"},children:[Object(f.jsx)(h.a,{className:"mb-3",children:Object(f.jsxs)("div",{className:"d-flex flex-row align-items-center justify-content-between",children:[Object(f.jsx)("div",{className:"d-flex flex-row justify-content-start align-items-center",children:Object(f.jsxs)(G.a,{className:"",children:[Object(f.jsx)(G.a.Toggle,{className:"dropbtn",id:"dropdown-basic",children:O}),Object(f.jsx)(G.a.Menu,{className:"dropdown-content",children:["Bash","Brainfuck","C","Cplusplus","Golfscript","Java","Javascript","O5ABE1","Perl","Python","Ruby","Rust","Swift"].map((function(e){return Object(f.jsx)(G.a.Item,{onClick:function(e){return v(e.target.text)},children:e})}))})]})}),Object(f.jsx)("div",{children:Object(f.jsxs)("b",{children:[E," Characters"]})}),Object(f.jsx)(m.a,{style:{width:"8rem"},type:"button",className:"submit-button",onClick:function(){return 0===N.length?alert("Please enter your code"):te(),null},children:"Run"})]})}),Object(f.jsx)(h.a,{style:{width:"100%",margin:0},children:Object(f.jsx)(M.a,{className:"my-editor",value:N,onChange:function(e){F.typeRoom(e),k(e),L(e.length)},mode:S.toLowerCase(),theme:"monokai",name:"coding-space",highlightActiveLine:!0,showGutter:!0,fontSize:18,showPrintMargin:!1,editorProps:{$blockScrolling:!1},setOptions:{enableEmmet:!0,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})})]}),Object(f.jsx)(U.a,{md:1,sm:12}),Object(f.jsxs)(U.a,{md:4,sm:12,children:[Object(f.jsx)("div",{style:{height:"4em",textAlign:"left"},children:Object(f.jsx)("b",{children:"Competitor"})}),Object(f.jsx)(M.a,{className:"their-editor",value:Y,mode:S.toLowerCase(),theme:"chaos",name:"coding-space-2",highlightActiveLine:!0,showGutter:!0,fontSize:16,showPrintMargin:!1,editorProps:{$blockScrolling:!1},setOptions:{enableEmmet:!0,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})]})]}),Object(f.jsx)(h.a,{className:"justify-content-start p-5",children:Object(f.jsx)("div",{children:Object(f.jsx)(X,{status:c,compilerResponse:d})})})]})});var Z=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"d-flex-row justify-content-around p-4 m-0 navbar",children:Object(f.jsx)("img",{src:d,alt:"GOLF",className:"logo"})}),Object(f.jsx)(r.a,{basename:"/golf-it",children:Object(f.jsx)(u.a,{className:"App",children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{exact:!0,path:"/",children:Object(f.jsx)(g,{})}),Object(f.jsx)(l.a,{path:"/game",children:Object(f.jsx)(Y,{})}),Object(f.jsx)(l.a,{exact:!0,path:"/start",children:Object(f.jsx)(V,{})})]})})})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,169)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),s(e),a(e),i(e),o(e)}))},$=Object(A.a)({reducer:{questions:B}});o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(c.a,{store:$,children:Object(f.jsx)(Z,{})})}),document.getElementById("root")),_()},98:function(e,t,n){}},[[156,1,2]]]);
//# sourceMappingURL=main.aeb10186.chunk.js.map