//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_654F||null!=window.HYPE_dtl_654F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-654.full.min.js":"HYPE-654.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_654"+c,"HYPE_dtl_654"+c,a,d),false==!0&&(a=a||k("HYPE_w_654","HYPE_wdtl_654","HYPE-654.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_654","HYPE-654.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"initializeMain",source:"function(hypeDocument, element, event) {\t\n\tCURRENTLYSPINNING = false;\n\tPAYTABLEDISPLAYED = false;\n\tTOTALAMOUNT = 2000;\n\tWAGER = 100;\n\thypeDocument.getElementById(\"payTableSlider\").style.top = \"90px\";\n\thypeDocument.getElementById(\"payTableSlider\").style.left = \"-800px\";\n\thypeDocument.getElementById(\"infoIcon\").style.backgroundPosition = \"0px 0px\";\n\thypeDocument.getElementById(\"display1\").style.backgroundPosition = \"0px 50px\";\n\thypeDocument.getElementById(\"display2\").style.backgroundPosition = \"0px 50px\";\n\thypeDocument.getElementById(\"display3\").style.backgroundPosition = \"0px 50px\";\n\thypeDocument.getElementById(\"display1Background\").style.backgroundColor = \"#FFFFFF\";\n\thypeDocument.getElementById(\"display2Background\").style.backgroundColor = \"#FFFFFF\";\n\thypeDocument.getElementById(\"display3Background\").style.backgroundColor = \"#FFFFFF\";\n\thypeDocument.getElementById(\"grandTotal\").innerHTML = TOTALAMOUNT;\n\thypeDocument.getElementById(\"betAmount\").innerHTML = WAGER;\n\t\n\t$(\"#spinButton\").click( function() {\n\t\tif ((CURRENTLYSPINNING == false) && (PAYTABLEDISPLAYED == false)) {\n\t\t\tif (WAGER > TOTALAMOUNT) {\n\t\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t\t\talert(\"INSUFFICIENT FUNDS\");\n\t\t\t} else {\n\t\t\t\tCURRENTLYSPINNING = true;\n\t\t\t\tROUNDSPLAYED++ ;\n\t\t\t\tif (SECRETBUTTONVALUE == 0) {\n\t\t\t\t\tvar result1 = Math.floor(Math.random()*40);\n\t\t\t\t\tvar result2 = Math.floor(Math.random()*40);\n\t\t\t\t\tvar result3 = Math.floor(Math.random()*40);\n\t\t\t\t} else if (SECRETBUTTONVALUE == 1) { // FORCE THREE CHERRIES\n\t\t\t\t\tvar result1 = 9;  \n\t\t\t\t\tvar result2 = 9;  \n\t\t\t\t\tvar result3 = 9;\n\t\t\t\t} else if (SECRETBUTTONVALUE == 2) { // FORCE THREE SEVENS\n\t\t\t\t\tvar result1 = 13; \n\t\t\t\t\tvar result2 = 13; \n\t\t\t\t\tvar result3 = 13;\n\t\t\t\t}\n\t\t\t\tSECRETBUTTONVALUE = 0;\n\t\t\t\t\n\t\t\t\tif (result1 < 8) {\tvar temp1 = (-150*result1) - 25; } \n\t\t\t\telse {\t\t\t\tresult1 = result1 % 8; var temp1 = (-150*result1) - 100; }\n\t\t\t\tif (result2 < 8) {\tvar temp2 = (-150*result2) - 25; } \n\t\t\t\telse {\t\t\t\tresult2 = result2 % 8; var temp2 = (-150*result2) - 100; }\n\t\t\t\tif (result3 < 8) {\tvar temp3 = (-150*result3) - 25; } \n\t\t\t\telse {\t\t\t\tresult3 = result3 % 8; var temp3 = (-150*result3) - 100; }\n\t\t\t\tcalcPayout(temp1, temp2, temp3);\n\t\t\t\n\t\t\t\ttemp1 = temp1 - 2400;\n\t\t\t\ttemp2 = temp2 - 4800;\n\t\t\t\ttemp3 = temp3 - 7200;\n\t\t\t\tvar string1 = temp1 + \"px\";\n\t\t\t\tvar string2 = temp2 + \"px\";\n\t\t\t\tvar string3 = temp3 + \"px\";\n\t\t\t\t$(\"#display1\").animate({ backgroundPositionY: string1}, 1000);\n\t\t\t\t$(\"#display2\").animate({ backgroundPositionY: string2}, 2000);\n\t\t\t\t$(\"#display3\").animate({ backgroundPositionY: string3}, 3000);\n\t\n\t\t\t\tsetTimeout( function() {\n\t\t\t\t\ttemp1 = temp1 + 3600;\n\t\t\t\t\ttemp2 = temp2 + 6000;\n\t\t\t\t\ttemp3 = temp3 + 8400;\n\t\t\t\t\thypeDocument.getElementById(\"display1\").style.backgroundPositionY = temp1 + \"px\";\n\t\t\t\t\thypeDocument.getElementById(\"display2\").style.backgroundPositionY = temp2 + \"px\";\n\t\t\t\t\thypeDocument.getElementById(\"display3\").style.backgroundPositionY = temp3 + \"px\";\n\t\t\t\t\tCURRENTLYSPINNING = false;\n\t\t\t\t}, 3050);\n\t\t\t}\n\t\t}\n\t});\n\t\n\t$(\"#infoIcon\").click( function() {\n\t\tif ((CURRENTLYSPINNING == false) && (PAYTABLEDISPLAYED == false)) { // SHOW THE PAY TABLE\n\t\t\tPAYTABLEDISPLAYED  = true;\n\t\t\t$(\"#payTableSlider\").animate({ left: \"0px\"}, 300);\n\t\t\thypeDocument.getElementById(\"infoIcon\").style.backgroundPositionX = \"-50px\";\n\t\t} else if ((CURRENTLYSPINNING == false) && (PAYTABLEDISPLAYED == true)) { // HIDE THE PAY TABLE\n\t\t\t$(\"#payTableSlider\").animate({ left: \"-800px\"}, 300, function() {\n\t\t\t\thypeDocument.getElementById(\"infoIcon\").style.backgroundPositionX = \"0px\";\n\t\t\t\tPAYTABLEDISPLAYED  = false;\n\t\t\t});\n\t\t}\n\t});\n\t\n\t$(\"#decreaseBet\").click( function() {\n\t\tif (CURRENTLYSPINNING == false) {\n\t\t\tif (WAGER == 1000) { WAGER = 500; }\n\t\t\telse if (WAGER == 500) { WAGER = 100; }\n\t\t\telse if (WAGER == 100) { WAGER = 50; }\n\t\t\telse if (WAGER == 50) { WAGER = 10; }\n\t\t\thypeDocument.getElementById(\"betAmount\").innerHTML = WAGER;\n\t\t}\n\t});\n\t\n\t$(\"#increaseBet\").click( function() {\n\t\tif (CURRENTLYSPINNING == false) {\n\t\t\tif (WAGER == 10) { WAGER = 50; }\n\t\t\telse if (WAGER == 50) { WAGER = 100; }\n\t\t\telse if (WAGER == 100) { WAGER = 500; }\n\t\t\telse if (WAGER == 500) { WAGER = 1000; }\n\t\t\thypeDocument.getElementById(\"betAmount\").innerHTML = WAGER;\n\t\t}\n\t});\n\t\n\tfunction calcPayout(inputA, inputB, inputC) {\n\t\tMULTIPLIER = 0;\n\t\tSOUNDRESULT = \"lose\"; \n\t\tif ((inputA == -850) && (inputB == -850) && (inputC == -850)) { // THREE SEVENS\n\t\t\tMULTIPLIER = 100;\n\t\t\tSOUNDRESULT = \"big\"; \n\t\t} else if ((inputA == -250) && (inputB == -250) && (inputC == -250)) { // THREE CHERRIES\n\t\t\tMULTIPLIER = 50;\n\t\t\tSOUNDRESULT = \"big\"; \n\t\t} else if  (((inputA == -100) && (inputB == -100) && (inputC == -100)) || \n\t\t\t\t\t((inputA == -400) && (inputB == -400) && (inputC == -400)) || \n\t\t\t\t\t((inputA == -550) && (inputB == -550) && (inputC == -550)) || \n\t\t\t\t\t((inputA == -700) && (inputB == -700) && (inputC == -700)) || \n\t\t\t\t\t((inputA == -1000) && (inputB == -1000) && (inputC == -1000)) || \n\t\t\t\t\t((inputA == -1150) && (inputB == -1150) && (inputC == -1150))) { // 3 OF A KIND - MYSTERY MULTIPLIER\n\t\t\tMULTIPLIER = 25;\n\t\t\tSOUNDRESULT = \"big\"; \n\t\t} else if ( ((inputA == -850) && (inputB == -850)) || \n\t\t\t\t\t((inputA == -850) && (inputC == -850)) || \n\t\t\t\t\t((inputB == -850) && (inputC == -850))) { // TWO SEVENS\n\t\t\t\tMULTIPLIER = 10;\n\t\t\t\tSOUNDRESULT = \"small\"; \n\t\t} else if ( ((inputA == -250) && (inputB == -250)) || \n\t\t\t\t\t((inputA == -250) && (inputC == -250)) || \n\t\t\t\t\t((inputB == -250) && (inputC == -250))) { // TWO CHERRIES\n\t\t\t\tMULTIPLIER = 5;\n\t\t\t\tSOUNDRESULT = \"small\"; \n\t\t} else if ((inputA == -850) || (inputB == -850) || (inputC == -850)) { // ONE SEVEN\n\t\t\t\tMULTIPLIER = 2;\n\t\t\t\tSOUNDRESULT = \"small\";\n\t\t} else if ((inputA == -250) || (inputB == -250) || (inputC == -250)) { // ONE CHERRY\n\t\t\t\tMULTIPLIER = 1;\n\t\t\t\tSOUNDRESULT = \"small\"; \n\t\t}\n\t\t\n\t\tif (MULTIPLIER == 0) {\n\t\t\tTOTALAMOUNT = TOTALAMOUNT - WAGER;\n\t\t} else {\n\t\t\tvar amountWon = WAGER * MULTIPLIER;\n\t\t\tif (amountWon > BIGGESTWIN) {\n\t\t\t\tBIGGESTWIN = amountWon;\n\t\t\t}\n\t\t\tTOTALAMOUNT = TOTALAMOUNT + amountWon;\n\t\t\tif (TOTALAMOUNT > MAXTOTALAMOUNT) {\n\t\t\t\tMAXTOTALAMOUNT = TOTALAMOUNT;\n\t\t\t}\t\n\t\t}\n\t\t\n\t\tsetTimeout( function() {\n\t\t\tincrementGrandTotal();\n\t\t\thypeDocument.getElementById(\"winAmount\").innerHTML = (WAGER * MULTIPLIER);\n\t\t\tif (SOUNDRESULT == \"small\") {\n\t\t\t\thypeDocument.startTimelineNamed('smallWin');\n\t\t\t\ttoggleBackground(4);\n\t\t\t} else if (SOUNDRESULT == \"big\") {\n\t\t\t\thypeDocument.startTimelineNamed('bigWin');\n\t\t\t\ttoggleBackground(12);\n\t\t\t} else if (SOUNDRESULT == \"lose\") {\n\t\t\t\thypeDocument.startTimelineNamed('lose');\n\t\t\t}\t\t\t\n\t\t}, 3200);\n\t}\t\n\t\n\tfunction toggleBackground(totalCount) {\n\t\tvar currentCount = 0;\n\t\tflashInterval = setInterval( function() {\n\t\t\tif (currentCount < totalCount) {\n\t\t\t\tcurrentCount++;\n\t\t\t\thypeDocument.getElementById(\"display1Background\").style.backgroundColor = \"#FF0000\";\n\t\t\t\thypeDocument.getElementById(\"display2Background\").style.backgroundColor = \"#FF0000\";\n\t\t\t\thypeDocument.getElementById(\"display3Background\").style.backgroundColor = \"#FF0000\";\n\t\t\t\tsetTimeout(function() {\n\t\t\t\t\thypeDocument.getElementById(\"display1Background\").style.backgroundColor = \"#FFFFFF\";\n\t\t\t\t\thypeDocument.getElementById(\"display2Background\").style.backgroundColor = \"#FFFFFF\";\n\t\t\t\t\thypeDocument.getElementById(\"display3Background\").style.backgroundColor = \"#FFFFFF\";\n\t\t\t\t}, 100);\n\t\t\t} else {\n\t\t\t\tclearInterval(flashInterval);\n\t\t\t}\n\t\t}, 200);\n\t}\n\t\n\tfunction incrementGrandTotal() {\n\t\tif (MULTIPLIER == 0) {\n\t\t\tvar tempIncrement = Math.round(-1 * (WAGER/8));\n\t\t} else {\n\t\t\tvar tempIncrement = Math.round((WAGER * MULTIPLIER)/8);\n\t\t}\n\t\tINTERVALCYCLE = 0;\n\t\tINCREMENTINTERVAL = setInterval( function() {\n\t\t\tif (INTERVALCYCLE < 8) {\n\t\t\t\tINTERVALCYCLE++;\n\t\t\t\tvar temp2 = parseInt(hypeDocument.getElementById(\"grandTotal\").innerHTML);\n\t\t\t\thypeDocument.getElementById(\"grandTotal\").innerHTML = temp2 + tempIncrement;\t\t\n\t\t\t} else {\n\t\t\t\thypeDocument.getElementById(\"grandTotal\").innerHTML = TOTALAMOUNT;\n\t\t\t\tINTERVALCYCLE = 0;\n\t\t\t\tclearInterval(INCREMENTINTERVAL);\n\t\t\t}\n\t\t}, 80);\n\t}\n\t\t\t\n}",identifier:"67"},{name:"initializeSummary",source:"function(hypeDocument, element, event) {\t\n\tdocument.getElementById(\"summary2b\").innerHTML = ROUNDSPLAYED;\n\tdocument.getElementById(\"summary3b\").innerHTML = \"$ \" + TOTALAMOUNT;\n\tdocument.getElementById(\"summary4b\").innerHTML = \"$ \" + MAXTOTALAMOUNT;\n\tdocument.getElementById(\"summary5b\").innerHTML = \"$ \" + BIGGESTWIN;\n\t\n}",identifier:"147"},{name:"setEasterEgg",source:"function(hypeDocument, element, event) {\t\n\tif (element.id == \"secretButton1\") {\n\t\tSECRETBUTTONVALUE = 1;\n\t} else if (element.id == \"secretButton2\") {\n\t\tSECRETBUTTONVALUE = 2;\n\t}\n\n}",identifier:"149"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_654"+c](f,g,{"-2":{n:"blank.gif"},"18":{p:1,n:"sonicrun%20large%20transparent.png",g:"100",t:"@1x"},"10":{p:1,n:"cashoutIconSmall.png",g:"145",t:"@1x"},"19":{p:2,n:"yellow-1.mp3",g:"345",t:"audio/mpeg"},"11":{p:1,n:"cashoutIconBig.png",g:"152",o:true,t:"@1x"},"0":{p:1,n:"topBackground.png",g:"42",t:"@1x"},"12":{p:1,n:"cashoutIconBig_2x.png",g:"152",o:true,t:"@2x"},"1":{p:1,n:"bottomBackground.png",g:"44",t:"@1x"},"20":{p:2,n:"winBig.mp3",g:"346",t:"audio/mpeg"},"2":{p:1,n:"infoIcon.png",g:"47",t:"@1x"},"13":{p:2,n:"yellow.mp3",g:"177",t:"audio/mpeg"},"3":{p:1,n:"marqueBorder1.png",g:"60",t:"@1x"},"21":{p:2,n:"winSmall-1.mp3",g:"347",t:"audio/mpeg"},"14":{p:1,n:"title1.png",g:"84",t:"@1x"},"4":{p:1,n:"leftArrow.png",g:"62",t:"@1x"},"5":{p:1,n:"rightArrow.png",g:"64",t:"@1x"},"15":{p:1,n:"slotsText.png",g:"190",t:"@1x"},"22":{p:2,n:"lost.mp3",g:"348",t:"audio/mpeg"},"6":{p:1,n:"strip1.png",g:"66",t:"@1x"},"16":{p:1,n:"payTableSonic.png",g:"128",t:"@1x"},"7":{n:"jquery.js"},"-1":{n:"PIE.htc"},"8":{p:2,n:"badBeep.mp3",g:"74",t:"audio/mpeg"},"17":{p:1,n:"payTableSonic-1.png",g:"70",t:"@1x"},"9":{p:1,n:"infoIcon2.png",g:"125",t:"@1x"}},l,["<link href='https://fonts.googleapis.com/css?family=Holtwood+One+SC&subset=latin' rel='stylesheet' type='text/css'>"],e,[{n:"splash",o:"81",X:[0]},{n:"splash2",o:"119",X:[1]},{n:"main",o:"1",X:[2]},{n:"summary",o:"131",X:[3]},{n:"credits",o:"159",X:[4]}],
[{o:"83",p:"600px",cA:false,Y:800,Z:600,L:[],c:"#BBB",bY:1,d:800,U:{},T:{"88_hover":{q:false,z:1,i:"88_hover",n:"88_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#8D28FF",o:"350"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#9C02FF",o:"350"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#9C02FF",o:"350"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#9C02FF",o:"350"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#9C02FF",o:"350"},{f:"c",y:0,z:1,i:"g",e:"#BBB",s:"#E2ADF1",o:"350"},{y:1,i:"G",s:"#FF2600",z:0,o:"350",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"350",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"350",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"350",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"350",f:"c"},{y:1,i:"g",s:"#BBB",z:0,o:"350",f:"c"}],f:30,b:[]},"89_hover":{q:false,z:1,i:"89_hover",n:"89_hover",a:[{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#9C02FF",o:"349"},{f:"c",y:0,z:1,i:"g",e:"#BBB",s:"#E2ADF1",o:"349"},{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#8D28FF",o:"349"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#9C02FF",o:"349"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#9C02FF",o:"349"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#9C02FF",o:"349"},{y:1,i:"A",s:"#FF2600",z:0,o:"349",f:"c"},{y:1,i:"g",s:"#BBB",z:0,o:"349",f:"c"},{y:1,i:"G",s:"#FF2600",z:0,o:"349",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"349",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"349",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"349",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:9,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"b",y:1,z:1,i:"a",e:800,s:-100,o:"352"},{f:"c",y:1.21,z:1,i:"e",e:1,s:0,o:"354"},{y:2,i:"a",s:800,z:0,o:"352",f:"c"},{y:2.21,i:"e",s:1,z:0,o:"354",f:"c"},{f:"b",y:4,z:1,i:"a",e:800,s:-100,o:"353"},{f:"c",y:4.21,z:1,i:"e",e:1,s:0,o:"355"},{y:5,i:"a",s:800,z:0,o:"353",f:"c"},{y:5.21,i:"e",s:1,z:0,o:"355",f:"c"},{f:"g",y:6,z:1.15,i:"a",e:168,s:800,o:"356"},{y:7.15,i:"a",s:168,z:0,o:"356",f:"c"},{f:"c",y:8,z:1,i:"e",e:1,s:0,o:"350"},{f:"c",y:8,z:1,i:"e",e:1,s:0,o:"349"},{y:9,i:"e",s:1,z:0,o:"350",f:"c"},{y:9,i:"e",s:1,z:0,o:"349",f:"c"}],f:30,b:[]}},bZ:180,O:["351","354","352","356","355","353","350","349"],n:"Untitled Layout","_":0,v:{"356":{p:"no-repeat",c:464,q:"100% 100%",d:100,r:"inline",gg:0,f:0,h:"190",aY:0,j:"absolute",x:"visible",k:"div",dB:"img",z:2,Q:0,R:"#000",S:0,a:800,T:0,b:200},"349":{b:460,z:5,K:"Solid",c:208,L:"Solid",d:58,gg:"2",M:10,e:0,bD:"none",N:10,aS:6,dB:"button",O:10,g:"#E2ADF1",aU:6,P:10,aT:6,Q:0,aV:6,i:"creditsButton",R:"#000",j:"absolute",S:3,k:"div",aI:25,T:3,aJ:25,aK:25,aL:25,A:"#9C02FF",B:"#9C02FF",aM:"89_hover",r:"inline",C:"#9C02FF",Z:"break-word",s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",D:"#9C02FF",t:48,u:"normal",F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"159"}]},v:"bold",G:"#8D28FF",aP:"pointer",w:"Credits",x:"visible",I:"Solid",a:460,y:"preserve",J:"Solid"},"352":{h:"100",p:"no-repeat",x:"visible",a:-100,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:19,b:88,i:"chip1",d:100,k:"div",aY:720,c:100},"355":{aU:8,bB:3,G:"#00F",aV:8,r:"inline",bC:3,e:0,s:"Futura,Verdana,sans-serif",t:72,Z:"break-word",i:"zoneText",w:"ZONE\n",j:"absolute",x:"visible",yy:"nowrap",aZ:0,y:"preserve",k:"div",z:6,aS:8,aT:8,a:286,bA:"#000",b:297},"351":{h:"84",p:"no-repeat",x:"visible",a:100,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,i:"title1",b:50,d:400,k:"div",c:600},"354":{aU:8,bB:3,G:"#00F",c:295,aV:8,r:"inline",d:96,e:0,s:"Futura,Verdana,sans-serif",bC:3,t:72,Z:"break-word",w:"CASINO<br>",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:7,aS:8,aT:8,a:244,bA:"#000",b:82},"350":{b:460,z:4,K:"Solid",c:208,L:"Solid",d:58,gg:"2",M:10,e:0,bD:"none",N:10,aS:6,dB:"button",O:10,g:"#E2ADF1",aU:6,P:10,aT:6,Q:0,aV:6,i:"playButton",R:"#000",j:"absolute",S:3,k:"div",aI:25,T:3,aJ:25,aK:25,aL:25,A:"#9C02FF",B:"#9C02FF",aM:"88_hover",r:"inline",C:"#9C02FF",Z:"break-word",s:"'Gill Sans','Lucida Grande',Helvetica,sans-serif",D:"#9C02FF",t:48,u:"normal",F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"119"}]},v:"bold",G:"#8D28FF",aP:"pointer",w:"Play",x:"visible",I:"Solid",a:100,y:"preserve",J:"Solid"},"353":{h:"100",p:"no-repeat",x:"visible",a:-100,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:18,b:308,i:"chip2",d:100,k:"div",aY:720,c:100}}},{o:"121",p:"600px",cA:false,Y:800,Z:600,L:[],c:"#BBB",bY:1,d:800,U:{},T:{"130_hover":{q:false,z:1,i:"130_hover",n:"130_hover",a:[{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#000",o:"361"},{f:"c",y:0,z:1,i:"g",e:"#BBB",s:"#E8EBED",o:"361"},{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#0433FF",o:"361"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#000",o:"361"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#000",o:"361"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#000",o:"361"},{y:1,i:"A",s:"#FF2600",z:0,o:"361",f:"c"},{y:1,i:"g",s:"#BBB",z:0,o:"361",f:"c"},{y:1,i:"G",s:"#FF2600",z:0,o:"361",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"361",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"361",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"361",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:8,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:1,i:"e",e:0,s:0,o:"359"},{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"365"},{f:"c",y:1,z:1,i:"e",e:1,s:0,o:"363"},{f:"c",y:1,z:1,i:"e",e:1,s:0,o:"360"},{y:1,i:"e",s:1,z:0,o:"365",f:"c"},{f:"c",y:1,z:1,i:"e",e:1,s:0,o:"359"},{y:2,i:"e",s:1,z:0,o:"363",f:"c"},{y:2,i:"e",s:1,z:0,o:"360",f:"c"},{y:2,i:"e",s:1,z:0,o:"359",f:"c"},{f:"c",y:3,z:1,i:"e",e:1,s:0,o:"364"},{y:4,i:"e",s:1,z:0,o:"364",f:"c"},{f:"c",y:5,z:1,i:"e",e:1,s:0,o:"362"},{f:"c",y:5,z:1,i:"e",e:1,s:0,o:"358"},{f:"c",y:5,z:1,i:"e",e:1,s:0,o:"357"},{y:6,i:"e",s:1,z:0,o:"362",f:"c"},{y:6,i:"e",s:1,z:0,o:"358",f:"c"},{y:6,i:"e",s:1,z:0,o:"357",f:"c"},{f:"c",y:7,z:1,i:"e",e:1,s:0,o:"361"},{y:8,i:"e",s:1,z:0,o:"361",f:"c"}],f:30,b:[]}},bZ:180,O:["365","363","359","364","360","362","357","358","361"],n:"Untitled Layout","_":1,v:{"359":{aU:8,bB:1,G:"#0433FF",c:154,aV:8,r:"inline",d:59,e:0,s:"Futura,Verdana,sans-serif",bC:1,t:48,Z:"break-word",i:"textPart1",w:"Click\n",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:3,aS:8,aT:8,a:16,bA:"#000",F:"center",b:30},"362":{h:"152",p:"no-repeat",x:"visible",a:190,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:8,b:350,i:"cashIcon2",d:100,k:"div",c:100,e:0},"365":{c:330,d:600,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#00FDFF",L:"Solid",M:0,i:"background1",N:0,A:"#FF2600",x:"visible",j:"absolute",B:"#FF2600",P:0,O:0,C:"#FF2600",z:1,k:"div",D:"#FF2600",a:0,b:0},"358":{aU:8,bB:1,G:"#0433FF",c:314,aV:8,r:"inline",d:74,e:0,s:"'Holtwood One SC'",bC:1,t:36,Z:"break-word",i:"textPart4",w:"TO CASH OUT",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:9,aS:8,aT:8,a:0,bA:"#000",F:"center",b:450},"361":{b:470,z:10,K:"Solid",c:208,L:"Solid",d:58,aS:6,M:10,e:0,bD:"none",N:10,aT:6,dB:"button",O:10,g:"#E8EBED",aU:6,P:10,aV:6,i:"playButton2",j:"absolute",k:"div",aI:25,aJ:25,aK:25,aL:25,A:"#000",B:"#000",aM:"130_hover",r:"inline",C:"#000",Z:"break-word",s:"'Holtwood One SC'",D:"#000",t:36,u:"normal",F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"1"}]},v:"normal",G:"#0433FF",aP:"pointer",w:"PLAY",x:"visible",I:"Solid",a:435,y:"preserve",J:"Solid"},"364":{h:"128",p:"no-repeat",x:"visible",a:330,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:6,b:50,i:"splashPayTable",d:375,k:"div",c:470,e:0},"357":{aU:8,bB:1,G:"#0433FF",c:154,aV:8,r:"inline",d:59,e:0,s:"'Holtwood One SC'",bC:1,t:36,Z:"break-word",i:"textPart3",w:"CLICK\n",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:7,aS:8,aT:8,a:0,bA:"#000",F:"center",b:360},"360":{aU:8,bB:1,G:"#0433FF",c:314,aV:8,r:"inline",d:124,e:0,s:"Futura,Verdana,sans-serif",bC:1,t:48,Z:"break-word",i:"textPart2",w:"for payout<br>amounts",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:5,aS:8,aT:8,a:0,bA:"#000",F:"center",b:105},"363":{h:"125",p:"no-repeat",x:"visible",a:179,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:4,b:18,i:"infoIcon2",d:100,k:"div",c:100,e:0}}},{A:{a:[{p:4,h:"67"}]},o:"3",p:"600px",cA:false,Y:800,Z:600,c:"#23C81F",L:[],bY:1,d:800,U:{},T:{"75":{q:false,z:0,i:"75",n:"smallWin",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"347",q:false}]},o:"75"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"177",q:false}]},o:"kTimelineDefaultIdentifier"}],f:30,b:[]},"73":{q:false,z:0,i:"73",n:"badBeep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"74",q:false}]},o:"73"}],f:30,b:[]},"77":{q:false,z:0,i:"77",n:"bigWin",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"346",q:false}]},o:"77"}],f:30,b:[]},"79":{q:false,z:0,i:"79",n:"lose",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"348",q:false}]},o:"79"}],f:30,b:[]}},bZ:180,O:["378","376","382","366","393","369","377","383","392","391","372","389","375","368","380","374","371","384","385","388","394","381","386","390","387","367","379","370","373"],n:"Untitled Layout","_":2,v:{"377":{h:"70",p:"no-repeat",x:"visible",a:50,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:2,bF:"376",b:50,d:320,i:"payTable",k:"div",c:700},"369":{b:20,z:13,K:"Solid",c:238,L:"Solid",d:38,aS:6,M:5,bD:"none",N:5,aT:6,dB:"button",O:5,g:"#FFF",aU:6,P:5,aV:6,i:"grandTotal",j:"absolute",k:"div",aI:20,aJ:20,aK:20,aL:20,A:"#000",Y:40,B:"#000",Z:"break-word",r:"inline",C:"#000",s:"'Arial Black',Gadget,Sans-Serif",D:"#000",t:24,F:"center",G:"#000",aP:"pointer",w:"0",x:"visible",I:"Solid",a:270,y:"preserve",J:"Solid"},"381":{b:515,z:8,K:"None",c:138,L:"None",d:38,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,g:"#FF2600",aU:6,P:0,aV:6,i:"winAmount",j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:40,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"'Arial Black',Gadget,Sans-Serif",D:"#A0A0A0",t:18,F:"center",G:"#000",aP:"pointer",w:"0",x:"visible",I:"None",a:125,y:"preserve",J:"None"},"373":{aU:8,G:"#000",c:84,aV:8,r:"inline",d:19,s:"'Arial Black',Gadget,Sans-Serif",t:16,Y:23,Z:"break-word",i:"betLabel",w:"BET\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:7,aS:8,aT:8,a:350,F:"center",b:560},"394":{p:"repeat",c:50,d:50,I:"None",J:"None",K:"None",L:"None",h:"47",M:0,i:"infoIcon",N:0,A:"#D8DDE4",j:"absolute",x:"hidden",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:5,k:"div",D:"#D8DDE4",a:50,b:515},"386":{b:515,z:9,K:"None",c:23,L:"None",d:38,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,g:"#FF2600",aU:6,P:0,aV:6,i:"decreaseBet",j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:30,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"'Arial Black',Gadget,Sans-Serif",D:"#A0A0A0",t:24,F:"center",G:"#000",aP:"pointer",w:"-",x:"visible",I:"None",a:300,y:"preserve",J:"None"},"378":{c:770,d:390,I:"Solid",J:"Solid",K:"Solid",g:"#009051",L:"Solid",M:15,i:"sliderBackground",bF:"376",N:15,A:"#0096FF",x:"visible",j:"absolute",B:"#0096FF",P:15,O:15,C:"#0096FF",z:1,aJ:40,D:"#0096FF",aK:40,k:"div",aI:40,a:0,aL:40,b:0},"390":{b:515,z:12,K:"None",c:88,L:"None",d:38,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,g:"#FF2600",aU:6,P:0,aV:6,i:"betAmount",j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:40,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"'Arial Black',Gadget,Sans-Serif",D:"#A0A0A0",t:18,F:"center",G:"#000",aP:"pointer",w:"0",x:"visible",I:"None",a:350,y:"preserve",J:"None"},"382":{h:"42",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:3,i:"topBackground",b:0,d:100,k:"div",c:800},"374":{c:175,d:300,I:"Solid",J:"Solid",K:"Solid",g:"#FFF",L:"Solid",M:5,i:"display3Background",N:5,aI:15,A:"#FFF",x:"visible",j:"absolute",B:"#FFF",P:5,O:5,C:"#FFF",z:16,aJ:15,D:"#FFF",aK:15,k:"div",a:520,aL:15,b:145},"366":{c:50,d:600,I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,i:"leftBackground",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:2,k:"div",D:"#D8DDE4",a:0,b:0},"387":{b:515,z:10,K:"None",c:23,L:"None",d:38,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,g:"#FF2600",aU:6,P:0,aV:6,i:"increaseBet",j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:35,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"'Arial Black',Gadget,Sans-Serif",D:"#A0A0A0",t:24,F:"center",G:"#000",aP:"pointer",w:"+",x:"visible",I:"None",a:465,y:"preserve",J:"None"},"379":{h:"145",p:"no-repeat",x:"visible",a:700,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:27,i:"cashout",b:515,d:50,aA:{a:[{d:1.1,p:1,g:1,e:"131"}]},k:"div",c:50,aP:"pointer"},"370":{aU:8,G:"#000",c:134,aV:8,r:"inline",d:19,s:"'Arial Black',Gadget,Sans-Serif",t:16,Y:23,Z:"break-word",i:"winLabel",w:"WIN",j:"absolute",x:"visible",k:"div",y:"preserve",z:6,aS:8,aT:8,a:125,F:"center",b:560},"391":{c:30,d:30,I:"None",J:"None",K:"None",g:"#000",L:"None",aP:"pointer",M:0,i:"secretButton1",N:0,A:"#FF2600",x:"visible",j:"absolute",B:"#FF2600",P:0,O:0,C:"#FF2600",z:24,dB:"button",D:"#FF2600",aA:{a:[{p:4,h:"149"}]},k:"div",a:760,b:100},"383":{c:30,d:30,I:"Solid",J:"Solid",K:"Solid",g:"#000",L:"Solid",aP:"pointer",M:0,i:"secretButton2",N:0,A:"#FF2600",x:"visible",j:"absolute",B:"#FF2600",P:0,O:0,C:"#FF2600",z:25,dB:"button",D:"#FF2600",aA:{a:[{p:4,h:"149"}]},k:"div",a:10,b:100},"375":{p:"repeat",c:175,d:300,I:"Solid",J:"Solid",K:"Solid",L:"Solid",h:"66",M:5,i:"display2",N:5,aI:15,A:"#000",j:"absolute",x:"hidden",B:"#000",O:5,P:5,C:"#000",z:18,aJ:15,D:"#000",aK:15,k:"div",a:307,aL:15,b:145},"367":{b:515,z:11,K:"None",c:138,L:"None",d:38,aS:6,M:0,bD:"none",N:0,aT:6,dB:"button",O:0,g:"#FF2600",aU:6,P:0,aV:6,i:"spinButton",j:"absolute",k:"div",aI:4,aJ:4,aK:4,aL:4,A:"#A0A0A0",Y:35,B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",s:"'Arial Black',Gadget,Sans-Serif",D:"#A0A0A0",t:24,F:"center",G:"#000",aP:"pointer",w:"SPIN",x:"visible",I:"None",a:525,y:"preserve",J:"None"},"388":{h:"44",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:4,i:"bottomBackground",b:500,d:100,k:"div",c:800},"371":{h:"62",p:"no-repeat",x:"visible",a:75,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:22,i:"leftArrow",b:275,d:50,k:"div",c:25},"392":{h:"60",p:"no-repeat",x:"visible",a:50,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:21,i:"marqueBorder",b:100,d:400,k:"div",c:700},"384":{h:"64",p:"no-repeat",x:"visible",a:701,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:23,i:"rightArrow",b:275,d:50,k:"div",c:25},"376":{x:"visible",k:"div",c:800,d:420,z:26,i:"payTableSlider",r:"inline",a:0,j:"absolute",b:0},"368":{c:175,d:300,I:"Solid",J:"Solid",K:"Solid",g:"#FFF",L:"Solid",M:5,i:"display2Background",N:5,aI:15,A:"#FFF",x:"visible",j:"absolute",B:"#FFF",P:5,O:5,C:"#FFF",z:15,aJ:15,D:"#FFF",aK:15,k:"div",a:307,aL:15,b:145},"389":{c:175,d:300,I:"Solid",J:"Solid",K:"Solid",g:"#FFF",L:"Solid",M:5,i:"display1Background",N:5,aI:15,A:"#FFF",x:"visible",j:"absolute",B:"#FFF",P:5,O:5,C:"#FFF",z:14,aJ:15,D:"#FFF",aK:15,k:"div",a:95,aL:15,b:145},"380":{p:"repeat",c:175,d:300,I:"Solid",J:"Solid",K:"Solid",L:"Solid",h:"66",M:5,i:"display3",N:5,aI:15,A:"#000",j:"absolute",x:"hidden",B:"#000",O:5,P:5,C:"#000",z:19,aJ:15,D:"#000",aK:15,k:"div",a:520,aL:15,b:145},"372":{p:"repeat",c:175,d:300,I:"Solid",J:"Solid",K:"Solid",L:"Solid",h:"66",M:5,i:"display1",N:5,aI:15,A:"#000",j:"absolute",x:"hidden",B:"#000",O:5,P:5,C:"#000",z:17,aJ:15,D:"#000",aK:15,k:"div",a:95,aL:15,b:145},"393":{c:50,d:600,I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,i:"rightBackground",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:1,k:"div",D:"#D8DDE4",a:750,b:0},"385":{c:610,d:2,I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,i:"resultsLine",N:0,A:"#000",x:"visible",j:"absolute",B:"#000",P:0,O:0,C:"#000",z:20,k:"div",D:"#000",a:95,b:299}}},{A:{a:[{p:4,h:"147"}]},o:"133",p:"600px",cA:false,Y:800,Z:600,c:"#CFB900",L:[],bY:1,d:800,U:{},T:{"144_hover":{q:false,z:1,i:"144_hover",n:"144_hover",a:[{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#7400FF",o:"403"},{f:"c",y:0,z:1,i:"g",e:"#BBB",s:"#E3B0F1",o:"403"},{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#7B00FF",o:"403"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#7400FF",o:"403"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#7400FF",o:"403"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#7400FF",o:"403"},{y:1,i:"D",s:"#FF2600",z:0,o:"403",f:"c"},{y:1,i:"g",s:"#BBB",z:0,o:"403",f:"c"},{y:1,i:"G",s:"#FF2600",z:0,o:"403",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"403",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"403",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"403",f:"c"}],f:30,b:[]},"176_hover":{q:false,z:1,i:"176_hover",n:"176_hover",a:[{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#7400FF",o:"396"},{f:"c",y:0,z:1,i:"g",e:"#BBB",s:"#E3B0F1",o:"396"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#7400FF",o:"396"},{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#7B00FF",o:"396"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#7400FF",o:"396"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#7400FF",o:"396"},{y:1,i:"B",s:"#FF2600",z:0,o:"396",f:"c"},{y:1,i:"g",s:"#BBB",z:0,o:"396",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"396",f:"c"},{y:1,i:"G",s:"#FF2600",z:0,o:"396",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"396",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"396",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:12,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"400"},{f:"c",y:1,z:0.15,i:"e",e:1,s:0,o:"404"},{y:1,i:"e",s:1,z:0,o:"400",f:"c"},{y:1.15,i:"e",s:1,z:0,o:"404",f:"c"},{f:"c",y:2,z:0.15,i:"e",e:1,s:0,o:"397"},{y:2.15,i:"e",s:1,z:0,o:"397",f:"c"},{f:"c",y:3.15,z:0.15,i:"e",e:1,s:0,o:"399"},{y:4,i:"e",s:1,z:0,o:"399",f:"c"},{f:"c",y:4.15,z:0.15,i:"e",e:1,s:0,o:"401"},{y:5,i:"e",s:1,z:0,o:"401",f:"c"},{f:"c",y:6,z:0.15,i:"e",e:1,s:0,o:"402"},{y:6.15,i:"e",s:1,z:0,o:"402",f:"c"},{f:"c",y:7,z:0.15,i:"e",e:1,s:0,o:"405"},{y:7.15,i:"e",s:1,z:0,o:"405",f:"c"},{f:"c",y:8,z:0.15,i:"e",e:1,s:0,o:"395"},{y:8.15,i:"e",s:1,z:0,o:"395",f:"c"},{f:"c",y:9.15,z:0.15,i:"e",e:1,s:0,o:"398"},{y:10,i:"e",s:1,z:0,o:"398",f:"c"},{f:"c",y:11.15,z:0.15,i:"e",e:1,s:0,o:"403"},{f:"c",y:11.15,z:0.15,i:"e",e:1,s:0,o:"396"},{y:12,i:"e",s:1,z:0,o:"403",f:"c"},{y:12,i:"e",s:1,z:0,o:"396",f:"c"}],f:30,b:[]}},bZ:180,O:["400","404","397","399","401","402","405","395","398","396","403"],n:"Untitled Layout","_":3,v:{"395":{aU:8,G:"#D500FE",c:484,aV:8,r:"inline",d:44,e:0,s:"Futura,Verdana,sans-serif",t:30,Z:"break-word",i:"summary5a",w:"Largest single win:\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:10,aS:8,aT:8,a:50,b:390},"398":{aU:8,G:"#0097B2",c:234,aV:8,r:"inline",d:44,e:0,s:"Futura,Verdana,sans-serif",t:30,Z:"break-word",i:"summary5b",w:"$ 00000\n\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:11,aS:8,aT:8,a:550,b:390},"401":{aU:8,G:"#0097B2",c:234,aV:8,r:"inline",d:44,e:0,s:"Futura,Verdana,sans-serif",t:30,Z:"break-word",i:"summary3b",w:"$ 00000\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:7,aS:8,aT:8,a:550,b:230},"404":{aU:8,G:"#D500FE",c:484,aV:8,r:"inline",d:44,e:0,s:"Futura,Verdana,sans-serif",t:30,Z:"break-word",i:"summary2a",w:"Total rounds played:\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:50,b:150},"397":{aU:8,G:"#0097B2",c:234,aV:8,r:"inline",d:44,e:0,s:"Futura,Verdana,sans-serif",t:30,Z:"break-word",i:"summary2b",w:"0\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:5,aS:8,aT:8,a:550,b:150},"400":{aU:8,bB:2,G:"#DD4EFD",c:559,aV:8,r:"inline",d:94,e:0,s:"Futura,Verdana,sans-serif",bC:2,t:64,Z:"break-word",i:"summary1",w:"SUMMARY",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,aT:8,a:225,bA:"#000",F:"center",b:16},"403":{b:487,z:12,K:"Solid",c:195,L:"Solid",d:52,gg:"2",M:10,e:0,bD:"none",N:10,aS:6,dB:"button",O:10,g:"#E3B0F1",aU:6,P:10,aT:6,Q:0,aV:6,i:"creditsButton2",R:"#000",j:"absolute",S:3,k:"div",aI:25,T:3,aJ:25,aK:25,aL:25,A:"#7400FF",B:"#7400FF",aM:"144_hover",r:"inline",C:"#7400FF",Z:"break-word",s:"Futura,Verdana,sans-serif",D:"#7400FF",t:40,u:"normal",F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"159"}]},v:"bold",G:"#7B00FF",aP:"pointer",w:"Credits\n",x:"visible",I:"Solid",a:448,y:"preserve",J:"Solid"},"396":{b:487,z:13,K:"Solid",c:195,L:"Solid",d:52,gg:"2",M:10,e:0,bD:"none",N:10,aS:6,dB:"button",O:10,g:"#E3B0F1",aU:6,P:10,aT:6,Q:0,aV:6,i:"titleButton2",R:"#000",j:"absolute",S:3,k:"div",aI:25,T:3,aJ:25,aK:25,aL:25,A:"#7400FF",B:"#7400FF",aM:"176_hover",r:"inline",C:"#7400FF",Z:"break-word",s:"Futura,Verdana,sans-serif",D:"#7400FF",t:40,u:"normal",F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"81"}]},v:"bold",G:"#7B00FF",aP:"pointer",w:"Title",x:"visible",I:"Solid",a:111,y:"preserve",J:"Solid"},"399":{aU:8,G:"#D500FE",c:484,aV:8,r:"inline",d:44,e:0,s:"Futura,Verdana,sans-serif",t:30,Z:"break-word",i:"summary3a",w:"Final grand total:\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:6,aS:8,aT:8,a:50,b:230},"402":{aU:8,G:"#D500FE",c:484,aV:8,r:"inline",d:44,e:0,s:"Futura,Verdana,sans-serif",t:30,Z:"break-word",i:"summary4a",w:"Max grand total:\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:8,aS:8,aT:8,a:50,b:310},"405":{aU:8,G:"#0097B2",c:234,aV:8,r:"inline",d:44,e:0,s:"Futura,Verdana,sans-serif",t:30,Z:"break-word",i:"summary4b",w:"$ 00000\n",j:"absolute",x:"visible",k:"div",y:"preserve",z:9,aS:8,aT:8,a:550,b:310}}},{o:"161",p:"600px",cA:false,Y:800,Z:600,L:[],c:"#00FFE6",bY:1,d:800,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:4,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",y:0,z:3,i:"e",e:0,s:0,o:"407"},{f:"c",y:0,z:1,i:"a",e:29,s:29,o:"409"},{f:"c",y:0,z:1,i:"a",e:429,s:800,o:"408"},{f:"c",y:0,z:1,i:"b",e:16,s:16,o:"408"},{f:"c",y:1,z:1,i:"b",e:133,s:-302,o:"409"},{f:"c",y:1,z:1,i:"a",e:29,s:29,o:"409"},{y:1,i:"a",s:429,z:0,o:"408",f:"c"},{y:1,i:"b",s:16,z:0,o:"408",f:"c"},{y:2,i:"b",s:133,z:0,o:"409",f:"c"},{y:2,i:"a",s:29,z:0,o:"409",f:"c"},{f:"c",y:2,z:1,i:"a",e:367,s:352,o:"406"},{f:"c",y:2,z:1,i:"b",e:122,s:616,o:"406"},{f:"c",y:3,z:1,i:"e",e:1,s:0,o:"407"},{y:3,i:"a",s:367,z:0,o:"406",f:"c"},{y:3,i:"b",s:122,z:0,o:"406",f:"c"},{y:4,i:"e",s:1,z:0,o:"407",f:"c"}],f:30,b:[]}},bZ:180,O:["408","406","409","407"],n:"Untitled Layout","_":4,v:{"408":{aU:8,bB:2,G:"#C600FF",c:322,aV:8,r:"inline",d:117,bC:2,s:"Futura,Verdana,sans-serif",t:64,Z:"break-word",w:"CREDITS",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:1,aS:8,aT:8,a:800,bA:"#000",b:16},"409":{aV:8,w:"Code &amp; Template\n<br><br>\nDesign\n<br><br>Music<br><br>\nSonic the Hedgehog\n<br><br>\nSpecial Thanks",x:"visible",a:29,Z:"break-word",y:"preserve",j:"absolute",r:"inline",b:-302,z:2,s:"Futura,Verdana,sans-serif",d:451,aS:8,t:24,aT:8,k:"div",aU:8,G:"#C900FF",c:384},"406":{aU:8,G:"#F60000",c:384,aV:8,r:"inline",d:451,s:"Futura,Verdana,sans-serif",t:24,Z:"break-word",w:"Darren Pearson\n<br><br>\nLukas Mundt\n<br><br>cyba<br><br>\nSEGA\n<br><br>\nSaint Paul College<br>\nTony R.<br>\nMatt R.<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:3,aS:8,aT:8,a:352,F:"right",b:616},"407":{b:502,z:4,K:"Solid",c:180,L:"Solid",d:46,gg:"2",M:6,e:0,bD:"none",N:6,aS:6,dB:"button",O:6,g:"#D690F6",aU:6,P:6,aT:6,Q:0,aV:6,R:"#000",j:"absolute",S:3,k:"div",aI:25,T:3,aJ:25,aK:25,aL:25,A:"#002BFF",B:"#002BFF",Z:"break-word",r:"inline",C:"#002BFF",s:"Futura,Verdana,sans-serif",D:"#002BFF",t:36,F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"81"}]},v:"bold",G:"#0035FF",aP:"pointer",w:"Title",x:"visible",I:"Solid",a:327,y:"preserve",J:"Solid"}}}],{},h,{g:{p:0,q:[[0,0,0.0425,0.22,0.089,1.373,0.169,1.373],[0.169,1.373,0.223,1.373,0.2656,0.868,0.356,0.868],[0.356,0.868,0.4085,0.868,0.457,1.047,0.544,1.047],[0.544,1.047,0.5976,1.047,0.637,0.984,0.731,0.984],[0.731,0.984,0.794,0.984,0.829,1.006,0.919,1.006],[0.919,1.006,0.953,1.006,1,1,1,1]]}},null,false,true,-1,true,true,true,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
