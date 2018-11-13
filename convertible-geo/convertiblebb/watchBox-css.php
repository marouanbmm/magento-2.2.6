/*
 * @CSS3 WATCHEEZY
 * @author Marc MILOCCO
 * @website http://www.watcheezy.com
 **/
 


@charset "utf-8";
/* CSS Document */



@viewport {
   width: device-width; /* largeur du viewport */
   zoom: 1; /* zoom initial à 1.0*/
}
 

  



  
#vwatch  div,#vwatch  span,#vwatch  object,#vwatch  iframe,#vwatch  h1,#vwatch  h2,#vwatch  h3,#vwatch  h4,#vwatch  h5,#vwatch  h6,#vwatch  p,#vwatch  blockquote,#vwatch  b,#vwatch  i,#vwatch  dl,#vwatch  dt,#vwatch  dd,#vwatch  ol,#vwatch  ul,#vwatch  li,#vwatch  fieldset,#vwatch  form,#vwatch  label,#vwatch  legend,#vwatch  table,#vwatch  caption,#vwatch  tbody,#vwatch  tfoot,#vwatch  thead,#vwatch  tr,#vwatch  th,#vwatch  td,#vwatch  article,#vwatch  aside,#vwatch  canvas,#vwatch  details,#vwatch  figcaption,#vwatch  figure,#vwatch  footer,#vwatch  header,#vwatch  hgroup,#vwatch  menu,#vwatch  nav,#vwatch  section,#vwatch  summary,#vwatch  time,#vwatch  mark,#vwatch  audio,#vwatch  video {
    line-height: 1em;
  margin:0;
  padding:0;
  -moz-box-sizing: initial;
    -webkit-box-sizing: initial; 
    box-sizing: initial; 
}

#vwatch table{border-collapse:collapse;border-spacing:0;}
#vwatch fieldset,img{border:0;}
#vwatch address,#vwatch caption,#vwatch cite,#vwatch code,#vwatch dfn,#vwatch em,#vwatch strong,#vwatch th,#vwatch var{font-style:normal;font-weight:normal;}
#vwatch li{list-style:none;}
#vwatch caption,th{text-align:left;}
#vwatch h1,#vwatch h2,#vwatch h3,#vwatch h4,#vwatch h5,#vwatch h6{font-size:100%;font-weight:normal;}
#vwatch q:before,#vwatch q:after{content:'';}
#vwatch abbr,#vwatch acronym{border:0;font-variant:normal;}
#vwatch sup{vertical-align:text-top;}
#vwatch sub{vertical-align:text-bottom;}
#vwatch input,#vwatch textarea,#vwatch select{background-color:#fff; font-family:inherit;font-size:inherit;font-weight:inherit;font-size:100%; border: 1px solid #c0c0c0;max-height:120px;max-width:calc(100% - 49px);max-width:-webkit-calc(100% - 49px);max-width:-moz-calc(100% - 9px); resize: none; max-height:34px; min-height:34px; -moz-box-sizing: initial;-webkit-box-sizing: initial; box-sizing: initial; }
#vwatch textarea{float: inherit;}
#vwatch legend{color:#000;}
#vwatch p{margin:0; padding:0;font-size:13px}
 
audio{width:0px;height:0px;}


/*---------------- CHARGEMENT DES ICONES DES LISTES ET DU CHAT --------------------*/
/* icone fichier attaché */
.wz_icone_attachment {
  fill: rgba(158,189,59,1);
    height: 19px;
    width: 30px;
}

.ui-icones{
  background-image: url(../img/icones/icones_interface.png);
  background-repeat: no-repeat;
}
/* for high resolution display */
@media only screen and (min--moz-device-pixel-ratio: 1.5),
only screen and (-o-min-device-pixel-ratio: 3/2),
only screen and (-webkit-min-device-pixel-ratio: 1.5),
only screen and (min-device-pixel-ratio: 1.5) {
    .ui-icones{
        background-image: url(../img/icones/icones_interface.svg);
        background-repeat: no-repeat;
    }
}

/*--- COULEUR DU TEXT ---*/
.WeZ_textCenter{text-align:center;}
#vwatch, #mydesk{color:#000;background:#FFF;}
#vwatch {
  line-height: 1em!important;
  color: inherit!important;
  font-family: Helvetica,Arial,sans-serif !important;
  font-size: 14px!important;
  font-style: normal;
  text-decoration: none;
  text-align: left;
}
.WeZ_displayblock{
  display:block;
}
#mydesk {
  clear: both;
  position: fixed;
  display: block;
  z-index: 100001;
  -webkit-box-shadow: 0px 3px 18px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 3px 18px rgba(0,0,0,0.2);
  box-shadow: 0px 3px 18px rgba(0,0,0,0.2);
    border-top-left-radius:0px;
  border-top-right-radius:0px;
  border-bottom-right-radius:0px;
  border-bottom-left-radius:0px;
    
}
#mydesk.desk_Bottom {
  /*overflow: hidden;*/
}
#mydesk.desk {
  display: block !important;
}
#mydesk.desk_Left,
#mydesk.desk_Right {
  /*overflow: inherit;*/
}

/*---------------------------------------------*/
/*--------- POSITION WATCHEEZY ----------------*/
/*---------------------------------------------*/
/* en bas */
#mydesk.desactive.desk_Bottom, #mydesk.tf_desactive.desk_Bottom {
  bottom: 0%;
  /*right: 10%;*/
  border:0px solid #0ff;
  width: 343px;/* cette largeur doit etre dynamique*/
}

#mydesk.open.desk_Bottom, #mydesk.tf_open.desk_Bottom  {
  bottom: 0%;
  height:calc(422px + 35px);
  width: 343px;/* cette largeur doit etre dynamique*/
}
  @media(min-height:480px){
    #mydesk.open.desk_Bottom, #mydesk.tf_open.desk_Bottom{
            max-height: calc(422px + 15px);
      max-height: moz-calc(422px + 15px);
          }
  }
  @media(min-height:550px){
    #mydesk.open.desk_Bottom, #mydesk.tf_open.desk_Bottom{
            max-height: calc(422px + 35px);
      max-height: moz-calc(422px + 35px);
          }
  }
  @media(min-height:700px){
    #mydesk.open.desk_Bottom, #mydesk.tf_open.desk_Bottom{
            max-height: calc(422px + 55px);
      max-height: moz-calc(422px + 55px);
          }
  }
  
.position_bottom_left{right: inherit ; left:0 ;}
.position_bottom_middle{right: inherit ; left:calc(50% - 171.5px);  left:moz-calc(50% - 171.5px);}
.position_bottom_right{right:0 ;}

/* à droite */
#mydesk.desactive.desk_Right, #mydesk.tf_desactive.desk_Right {
  top: 20%;
  right: 0%;
  max-height:310px;
}
/* à gauche */
#mydesk.desactive.desk_Left, #mydesk.tf_desactive.desk_Left {
  top: 20%;
  left: 0%;
  max-height:310px;
}
  @media(min-height:480px){
    #mydesk.desactive.desk_Right, #mydesk.tf_desactive.desk_Right, #mydesk.desactive.desk_Left, #mydesk.tf_desactive.desk_Left{
      max-height:380px;
    }
  }
  @media(min-height:550px){
    #mydesk.desactive.desk_Right, #mydesk.tf_desactive.desk_Right, #mydesk.desactive.desk_Left, #mydesk.tf_desactive.desk_Left{
      max-height:450px;
    }
  }
  @media(min-height:700px){
    #mydesk.desactive.desk_Right, #mydesk.tf_desactive.desk_Right, #mydesk.desactive.desk_Left, #mydesk.tf_desactive.desk_Left{
      max-height:560px;
    }
  }
/* overt à droite */
#mydesk.open.desk_Right, #mydesk.tf_open.desk_Right {
  top: 20%;
  right: 0%;
  max-height:310px;
  width:343px;
}

/* ouvert à gauche */
#mydesk.open.desk_Left, #mydesk.tf_open.desk_Left {
  top: 20%;
  left: 0%;
  max-height:310px;
  width:343px;
}
  @media(min-height:480px){
    #mydesk.open.desk_Right, #mydesk.tf_open.desk_Right, #mydesk.open.desk_Left, #mydesk.tf_open.desk_Left, #mydesk.desk_Right #mydesk-outer{
      max-height:340px;
    }
  }
  @media(min-height:550px){
    #mydesk.open.desk_Right, #mydesk.tf_open.desk_Right, #mydesk.open.desk_Left, #mydesk.tf_open.desk_Left, #mydesk.desk_Right #mydesk-outer{
      max-height:410px;
    }
  }
  @media(min-height:700px){
    #mydesk.open.desk_Right, #mydesk.tf_open.desk_Right, #mydesk.open.desk_Left, #mydesk.tf_open.desk_Left, #mydesk.desk_Right #mydesk-outer{
      max-height:520px;
    }
  }

/* overt à droite, gauche et bas + video rtc */
#mydesk.open.desk_Bottom.videoRtcOpen, #mydesk.tf_open.desk_Bottom.videoRtcOpen{
  width:314px;
}
#mydesk.open.desk_Left.videoRtcOpen,
#mydesk.open.desk_Right.videoRtcOpen,
#mydesk.tf_open.desk_Left.videoRtcOpen,
#mydesk.tf_open.desk_Right.videoRtcOpen {
  width:352px;
}

/*---------------------------------------------*/
/*--------- POSITION WATCHBOX ----------------*/
/*---------------------------------------------*/
/*--- watchBox content ---*/
/* en bas */
#mydesk.open.desk_Bottom #contentWatchBox, #mydesk.tf_open.desk_Bottom #contentWatchBox{
  height: calc(422px - 55px);
  height: moz-calc(422px - 55px);
}
  @media(min-height:480px){
    #mydesk.open.desk_Bottom #contentWatchBox, #mydesk.tf_open.desk_Bottom #contentWatchBox{
            height: calc(422px - 40px);
      height: moz-calc(422px - 40px);
          }
  }
  @media(min-height:550px){
    #mydesk.open.desk_Bottom #contentWatchBox, #mydesk.tf_open.desk_Bottom #contentWatchBox{
            height: calc(422px - 20px);
      height: moz-calc(422px - 20px);
          }
  }
  @media(min-height:700px){
    #mydesk.open.desk_Bottom #contentWatchBox, #mydesk.tf_open.desk_Bottom #contentWatchBox{
      height: calc(422px - 0px);
      height: moz-calc(422px - 0px);
    }
  }
/* à droite */
#mydesk.open.desk_Right.iconsOff #contentWatchBox, #mydesk.tf_open.desk_Right.iconsOff #contentWatchBox{
  height: calc(422px - 10px);
  height: moz-calc(422px - 10px);
}
#mydesk.open.desk_Right.iconsOn #contentWatchBox, #mydesk.tf_open.desk_Right.iconsOn #contentWatchBox{
  height: calc(422px - 11px);
  height: moz-calc(422px - 11px);
}
/* à gauche */
#mydesk.open.desk_Left.iconsOff #contentWatchBox, #mydesk.tf_open.desk_Left.iconsOff #contentWatchBox{
  height: calc(422px - 13px);
  height: moz-calc(422px - 13px);
}
#mydesk.open.desk_Left.iconsOn #contentWatchBox, #mydesk.tf_open.desk_Left.iconsOn #contentWatchBox{
  height: calc(422px - 11px);
  height: moz-calc(422px - 11px);
}
  
/*--------------------------------*/  
/*--- ONGLET WATCHEEZY ---*/
/*--------------------------------*/
#mydesk-outer{
  cursor:  pointer;
}
/* en bas */
#mydesk.desk_Bottom #mydesk-outer{
  width: 343px;
  height:37px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  border-top-left-radius:0px;
  border-top-right-radius:0px;
  border-bottom-right-radius:0px;
  border-bottom-left-radius:0px;
}
/* overt en bas + video rtc */
#mydesk.desk_Bottom.videoRtcOpen #mydesk-outer{
  width:314px;
}
/* à droite */
#mydesk.desk_Right #mydesk-outer{
  width: 38px;
  height: calc(200px + 3px);
  height: -webkit-calc(200px + 3px);
  height: -moz-calc(200px + 3px);
  max-height: calc(422px + 3px);
  max-height: -webkit-calc(422px + 3px);
  max-height: -moz-calc(422px + 3px);
  -webkit-box-shadow: 0px 3px 7px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 3px 7px rgba(0,0,0,0.3);
  box-shadow: 0px 3px 7px rgba(0,0,0,0.3);
  border-top-left-radius:0px;
  border-top-right-radius:0px;
  border-bottom-right-radius:0px;
  border-bottom-left-radius:0px;
}
#mydesk.open.desk_Right #mydesk-outer, #mydesk.tf_open.desk_Right #mydesk-outer{
  height: calc(200px + 3px);
  height: -webkit-calc(200px + 3px);
  height: -moz-calc(200px + 3px);
}
/* à gauche */
#mydesk.desk_Left #mydesk-outer{
  width: 38px;
  height:  200px;
  max-height: calc(422px + 3px);
  max-height: -webkit-calc(422px + 3px);
  max-height: -moz-calc(422px + 3px);
  -webkit-box-shadow: 0px 3px 7px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 3px 7px rgba(0,0,0,0.3);
  box-shadow: 0px 3px 7px rgba(0,0,0,0.3);
  border-top-left-radius:0px;
  border-top-right-radius:0px;
  border-bottom-right-radius:0px;
  border-bottom-left-radius:0px;
}
#mydesk.open.desk_Left #mydesk-outer, #mydesk.tf_open.desk_Left #mydesk-outer{
  width: 38px;
  float: right;
  height: 200px;
  max-height: calc(422px + 0px);
  max-height: -webkit-calc(422px + 0px);
  max-height: -moz-calc(422px + 0px);
  -webkit-box-shadow: 0px 3px 7px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 3px 7px rgba(0,0,0,0.3);
  box-shadow: 0px 3px 7px rgba(0,0,0,0.3);
}
/*----ONGLET FERMER ----*/
#mydesk.desk_Bottom.desactive #mydesk_title.wzclose, #mydesk.desk_Bottom.tf_desactive #mydesk_title.wzclose{
  display:block;
}
/*----ONGLET OUVERT ----*/
#mydesk.desk_Bottom.tf_open #mydesk_title,
#mydesk.desk_Bottom #mydesk_title.tf_open,
#mydesk.desk_Bottom.open #mydesk_title,
#mydesk.desk_Bottom #mydesk_title.open{
  display:none;
}

#mydesk.desk_Right .titleOuterMydesk {
  top:8px;
  left: 72px;
  position: absolute;
  list-style-type: none;
}
#mydesk.desk_Left .titleOuterMydesk {
  left: 78px;
  top:calc(200px - 30px);
  position: absolute;
  list-style-type: none;
}

#mydesk.desk_Bottom .titleOuterMydesk {
  top:10px;
  position: absolute;
  height:37px;
}

#mydesk.desk_Bottom .titleOuterMydesk span { 
  width:calc(343px - 80px);
  width:-webkit-calc(343px - 80px);
  width:-moz-calc(343px - 80px);
  display:inline-block;
  line-height:inherit;
  text-shadow:inherit !important;
  color:#ffffff;
    }
.titleOuterMydesk span { 
  width:100%;
  display:inline-block;
}
.mydesk_titleTab, .mydesk_titleTab p{
  color:#ffffff !important;
  font-family: Helvetica,Arial,sans-serif !important;
  font-size: 1.00em !important;
  font-weight: lighter !important;
  text-shadow: inherit;
  opacity:1;
}
.mydesk_titleTab, .mydesk_titleTab p:hover{
  opacity:1 !important;
}
#mydesk.desk_Bottom.listAgentsOff .mydesk_titleTab,
#mydesk.desk_Bottom.listAgentsOn.desactive .mydesk_titleTab,
#mydesk.desk_Bottom.listAgentsOn.tf_desactive .mydesk_titleTab{
  float:left;
  margin: 0px 0px 0px 10px;
  max-width: calc(100% - 90px);
  max-width: -webkit-calc(100% - 90px);
  max-width: -moz-calc(100% - 90px);
  width:343px;
}
#mydesk.desk_Bottom.listAgentsOn .mydesk_titleTab{
  float:left;
  margin: 0px 0px 0px 10px;
  max-width: calc(100% - 90px);
  max-width: -webkit-calc(100% - 90px);
  max-width: -moz-calc(100% - 90px);
  width:343px;
  margin: 0px 0px 0px 10px;
}

/* droite */
#mydesk.desk_Right.tf_desactive .mydesk_titleTab,
#mydesk.desk_Right.desactive .mydesk_titleTab{
    -moz-transform:rotate(-90deg);
    -webkit-transform:rotate(-90deg); 
    -o-transform:rotate(-90deg);
    -ms-transform : rotate(-90deg); 
  /*filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);*/
    float: right;
  /*bottom: 134px;*/
  position: absolute;
  height: 100%;
  width: calc(200px - 6px);
  width: -webkit-calc(200px - 6px);
  width: -moz-calc(200px - 6px);
  max-width: calc(422px - 6px);
  max-width: -webkit-calc(422px - 6px);
  max-width: -moz-calc(422px - 6px);
}

#mydesk.desk_Right .mydesk_titleTab{
    -moz-transform:rotate(-90deg);
    -webkit-transform:rotate(-90deg); 
    -o-transform:rotate(-90deg);
    -ms-transform : rotate(-90deg); 
  /*filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);*/
    float: right;
  /*bottom: 134px;*/
  position: absolute;
  height: 100%;
  width: calc(200px - 6px);
  width: -webkit-calc(200px - 6px);
  width: -moz-calc(200px - 6px);
  max-width: calc(422px - 6px);
  max-width: -webkit-calc(422px - 6px);
  max-width: -moz-calc(422px - 6px);
}

/* gauche*/
#mydesk.desk_Left.tf_desactive .mydesk_titleTab,
#mydesk.desk_Left.desactive .mydesk_titleTab{
    -moz-transform:rotate(-90deg);
    -webkit-transform:rotate(-90deg); 
    -o-transform:rotate(-90deg);
    -ms-transform : rotate(-90deg); 
  /*filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);*/
    float: right;
  /*bottom: 0px;
  position: absolute;
  height: 40px;*/
  width: calc(200px - 0px);
  width: -webkit-calc(200px - 0px);
  width: -moz-calc(200px - 0px);
  max-width: calc(422px - 0px);
  max-width: -webkit-calc(422px - 0px);
  max-width: -moz-calc(422px - 0px);
  
  height: calc(200px - 0px);
  height: -webkit-calc(200px - 0px);
  height: -moz-calc(200px - 0px);
  max-height: calc(422px - 0px);
  max-height: -webkit-calc(422px - 0px);
  max-height: -moz-calc(422px - 0px);
}
#mydesk.desk_Left .mydesk_titleTab{
    -moz-transform:rotate(-90deg);
    -webkit-transform:rotate(-90deg); 
    -o-transform:rotate(-90deg);
    -ms-transform : rotate(-90deg); 
  /*filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);*/
    float: right;
  /*bottom: 0px;
  position: absolute;
  height: 40px;*/
  width: calc(200px - 0px);
  width: -webkit-calc(200px - 0px);
  width: -moz-calc(200px - 0px);
  max-width: calc(422px - 0px);
  max-width: -webkit-calc(422px - 0px);
  max-width: -moz-calc(422px - 0px);
  
  height: calc(200px - 0px);
  height: -webkit-calc(200px - 0px);
  height: -moz-calc(200px - 0px);
  max-height: calc(422px - 0px);
  max-height: -webkit-calc(422px - 0px);
  max-height: -moz-calc(422px - 0px);
}


/* à droite */
#mydesk.desk_Right .mydesk_titleTab{
  left: 6px;
}
/* à gauche */
#mydesk.desk_Left .mydesk_titleTab {
  /*left: calc(200px - 112px);*/
}

/* à droite */
#mydesk.tf_desactive.desk_Right .mydesk_titleTab, #mydesk.desactive.desk_Right .mydesk_titleTab {

}

#mydesk.tf_open.desk_Bottom .mydesk_titleTab, #mydesk.open.desk_Bottom .mydesk_titleTab {
  display:none;
}
  
/*---- BOUTTON OUVRE ONGLET ---*/
#mydesk.desk_Bottom #mydesk_openMydesk{
  width:40px;
  height:37px;
  float:right;
  border-top-left-radius:0px;
  border-top-right-radius:0px;
  border-bottom-right-radius:0px;
  border-bottom-left-radius:0px;
}
#mydesk.desk_Right #mydesk_openMydesk{
  width:38px;
  height:36px;
  position: absolute;
  bottom:0px;
  border-top-left-radius:0px;
  border-top-right-radius:0px;
  border-bottom-right-radius:0px;
  border-bottom-left-radius:0px;
}
#mydesk.desk_Left #mydesk_openMydesk,
#mydesk.tf_desactive.desk_Left #mydesk_openMydesk,
#mydesk.desactive.desk_Left #mydesk_openMydesk{
  width:38px;
  height:36px;
  position: absolute;
  bottom:0px;
  border-top-left-radius:0px;
  border-top-right-radius:0px;
  border-bottom-right-radius:0px;
  border-bottom-left-radius:0px;
}
#mydesk.open.desk_Left #mydesk_openMydesk, #mydesk.tf_open.desk_Left #mydesk_openMydesk{
  width:38px;
  height:36px;
  position: absolute;
  bottom:0px;
  right:0px
}
#mydesk.desactive .icone_openMydesk, #mydesk.tf_desactive .icone_openMydesk{
  background-position: -189px -64px;
}
#mydesk.open.desk_Bottom .icone_openMydesk, #mydesk.tf_open.desk_Bottom .icone_openMydesk{
  background-position: 2px -92px;
}
#mydesk.open.desk_Right .icone_openMydesk, #mydesk.tf_open.desk_Right .icone_openMydesk{
  background-position: -29px -92px;
}
#mydesk.open.desk_Left .icone_openMydesk, #mydesk.tf_open.desk_Left .icone_openMydesk{
  background-position: -60px -92px;
}

/*---- BOUTTON OUVRE CALLBACK ---*/
#mydesk.desk_Bottom #mydesk_openCallback{
  width:40px;
  height:37px;
  float:right;
}
#mydesk.desk_Right #mydesk_openCallback{
  width:38px;
  height:36px;
  position: absolute;
  bottom:36px;
}
#mydesk.desactive.desk_Left #mydesk_openCallback, #mydesk.tf_desactive.desk_Left #mydesk_openCallback{
  width:38px;
  height:36px;
  position: absolute;
  bottom:36px;
}
#mydesk.open.desk_Left #mydesk_openCallback, #mydesk.tf_open.desk_Left #mydesk_openCallback{
  width:38px;
  height:36px;
  position: absolute;
  bottom:36px;
  right:0px
}
#mydesk.desactive .icone_openCallback,
#mydesk.open.desk_Bottom .icone_openCallback,
#mydesk.open.desk_Right .icone_openCallback,
#mydesk.open.desk_Left .icone_openCallback,
#mydesk.tf_desactive .icone_openCallback,
#mydesk.tf_open.desk_Bottom .icone_openCallback,
#mydesk.tf_open.desk_Right .icone_openCallback,
#mydesk.tf_open.desk_Left .icone_openCallback{
  background-position: -424px -162px;
}
#mydesk #mydesk_openCallback.inactif{display:none;}
#mydesk #mydesk_openCallback.actif{display:block;}

/*---- BOUTTON  CALLBACK CUSTOM---*/
    #bt-callback.pop{right:-15px;}
    #bt-callback.out{right:-15px;}



/*------------------------*/
/*----FOOTER WATCHEEZY ---*/
/*------------------------*/
.watcheezyFooter{
  width:59%;
  font-size:0.7em !important;
  line-height: 0.9em;
  text-align:center;
  margin:2px 0px 0px 0px !important;
  position:relative;
  bottom:0px;
}
#mydesk.desk_Bottom .watcheezyFooter{
  margin:6px auto 0px auto !important;
}
.watcheezyFooter a{text-decoration:none; font-size:1em !important; cursor:pointer;}
.watcheezyFooter a:hover{text-decoration:underline;}

/*-----------------------------------------------*/
/*------------- WATCHEEZY PUSH ------------------*/
/*-----------------------------------------------*/
#mydesk-push{
  padding: 0px;
  font-size: 1em;
  line-height: 1em;
  border-radius: 8px;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  display: table;
  display: inline-block;
  word-wrap: break-word;
  width: 343px;
  min-height:80px;
  max-width: 343px;
  position: fixed;
  -webkit-box-shadow: 0px 3px 12px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 3px 12px rgba(0,0,0,0.3);
  box-shadow: 0px 3px 12px rgba(0,0,0,0.3);
  z-index:100000;
}
#mydesk-push.push_Bottom{
  bottom: 60px;
}
#mydesk-push.push_Right{
  top: 20%;
  right: 60px;
}
#mydesk-push.push_Left{
  top: 20%;
  left: 60px;
}
#mydesk-push.push_Center{
  position:fixed;
  left: 50%;
  margin-left:-225px;
  max-width:inherit!important;
  width:450px!important;
  top:50%;
  margin-top:-100px;
  height:200px!important;
  z-index: inherit !important;
}
#mydesk-push.desactive, #mydesk-push.tf_desactive{
  display:none !important;
}
#mydesk-push.open, #mydesk-push.tf_open{
  display:block !important;
}
#mydesk-push #closePush{
  position: absolute;
  top: 4px;
  right: 4px;
  border-radius: 8px;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  z-index: 6;
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-position: -96px -100px;  
}
#mydesk-push.showPush{
  display:block;
}
#mydesk-push.hidePush{
  display:none;
}
.pushclose{
    background : url(../img/icones/icones_interface.svg) #FFF no-repeat;
  background-position: -280px -95px;    
    position:absolute;
  right: 6px;
  top: 6px;
    width: 31px;
    height: 31px;
    border-radius: 15px;
}
.pushclose:hover{
  background-color:#999999;
  cursor:pointer;
}
#mydesk-push-photo {
  position:absolute;
  bottom: 0px;
  right: 0px;
  display:block;
  width:30%;
}
#mydesk-push-photo.photo_Center {
  bottom: 132px !important;
}
#mydesk-push-photo img{
  max-width:100%;
  float:right;
}
#mydesk-push:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
}
#mydesk-push.push_Bottom:before {
  right: 45%;
    top: 100%;
    border-left: 12px solid;
    border-top: 16px solid;
    border-right: 12px solid
}
#mydesk-push.push_Right:before {
  top: 45%;
  left: 100%;
  border-top: 12px solid;
  border-left: 16px solid;
  border-bottom: 12px solid;
}
#mydesk-push.push_Left:before {
  top: 45%;
  right: 100%;
  border-top: 12px solid;
  border-left: 16px solid;
  border-bottom: 12px solid;
}
#mydesk-push.push_Center:before {
  right: 5%;
  top: 100%;
  border-left: 12px solid;
  border-top: 16px solid;
  border-right: 12px solid;
}
.mydesk-text-push{
  display:block;
}
.mydesk-text-push p{}
.mydesk-title-push{
  color:#ffffff;
  font-family: Helvetica,Arial,sans-serif;
  font-size:1.2em;
  padding:10px !important;
  /*width:330px;*/
  line-height:inherit;
}
.title-push_Center{
  height:27px;
  width:90%;
  padding:24px 0 15px 20px!important;
}
.mydesk-content-push{
  color:#ffffff;
  padding:10px 0px 10px 10px !important;
}
.content-push_Center{
  padding:20px 0px 10px 20px !important;
}
#tab_settings #mydesk-push{
  padding: 0px;
  margin:40px 0px 10px 0px;
  font-size: 0.9em;
  line-height: 1em;
  border-radius: 8px;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  display: table;
  display: inline-block;
  word-wrap: break-word;
  width: 330px;
  min-height:80px;
  max-width: 330px;
  position: relative;
  right:0px;
  bottom:0px;
  -webkit-box-shadow: 0px 3px 12px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 3px 12px rgba(0,0,0,0.3);
  box-shadow: 0px 3px 12px rgba(0,0,0,0.3);
}
#tab_settings .mydesk-title-push{
  font-size:1.6em;
  padding:10px;
  width:330px;
  padding:10px 0px 10px 10px;
  line-height:inherit;
}
#tab_settings .mydesk-content-push{
  padding:10px 0px 10px 10px;
  font-family: Helvetica,Arial,sans-serif !important;
}

/*-----------------------------------------------*/
/*---------- WATCHEEZY CALLBACK SEUL ------------*/
/*-----------------------------------------------*/

#watchC2C{
  position: relative;
  overflow-y:auto;
  min-height:120px;
  overflow-x: hidden;
}
#watchC2C .mydesk-text-callback p{}
#watchC2C .mydesk-title-callback{
  color:#000/*#ffffff*/;
  font-family: Helvetica,Arial,sans-serif;
  font-size:1.1em;
  padding:10px !important;
  /*width:100%;*/
  line-height:inherit;
}

#watchC2C .mydesk-content-callback{
  color:#000;
  padding:10px 0px 10px 10px !important;
  max-width:68%;
}
#watchC2C .form-callback{padding: 0px 0px 0px 10px; display:block;}
#watchC2C .submit-callback, #watchC2C .tel-callback {margin:0px 0px 10px 0px;}
#watchC2C .form-control, #watchC2C .select2-search input[type=text] {
  height: 28px;
  width: 60%;
  padding: 0px 0px 0px 8px;
  margin: 0px 8px 0px 0px;
  font-size: 1.0em;
  color: #34495e;
  border: 1px solid #bdc3c7;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  box-shadow: none;
  -webkit-transition: border .25s linear,color .25s linear,background-color .25s linear;
  transition: border .25s linear,color .25s linear,background-color .25s linear;
}
#watchC2C .btn-callback {
  padding: 4px 10px 4px 10px;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -o-border-radius: 4px;
  cursor: pointer;
  border: 0px !important;
  line-height: 1em;
  font-size: 1.2em;
  font-weight: normal;
  display: -webkit-inline-box;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
#watchC2C .btn-callback.actif {
  display: -webkit-inline-box;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
#watchC2C .btn-callback.send {
    background: #E3328B;
  color: #ffffff;
}
.desk_Bottom #watchC2C{
  font-size:0.9em;
  /*height:422px;*/
}


/*-----------------------------------------------*/
/*---------- WATCHEEZY CALLBACK -----------------*/
/*-----------------------------------------------*/
#mydesk-callback{
  padding: 0px;
  font-size: 1em;
  line-height: 1em;
  border-radius: 8px;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  display: table;
  display: inline-block;
  word-wrap: break-word;
  width: 343px;
  min-height:80px;
  max-width: 343px;
  position: fixed;
  -webkit-box-shadow: 0px 3px 12px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 3px 12px rgba(0,0,0,0.3);
  box-shadow: 0px 3px 12px rgba(0,0,0,0.3);
  z-index:10000;
}
#mydesk-callback.callback_Bottom{
  bottom: 60px;
}
#mydesk-callback.callback_Right{
  top: 20%;
  right: 60px;
}
#mydesk-callback.callback_Left{
  top: 20%;
  left: 60px;
}
#mydesk-callback.callback_Center{
  position:fixed;
  left: 50%;
  margin-left:-225px;
  max-width:inherit!important;
  width:450px!important;
  top:50%;
  margin-top:-100px;
  height:200px!important;
  z-index: inherit !important;
}
#mydesk-callback.desactive, #mydesk-callback.tf_desactive{
  display:none !important;
}
#mydesk-callback.open, #mydesk-callback.tf_open{
  display:block !important;
}
#mydesk-callback #closeCallback{
  position: absolute;
  top: 4px;
  right: 4px;
  border-radius: 8px;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  z-index: 6;
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-position: -96px -100px;  
}
#mydesk-callback.showCallback{
  display:block;
}
#mydesk-callback.hideCallback{
  display:none;
}
#mydesk-callback-photo {
  position:absolute;
  bottom: 0px;
  right: 0px;
  display:block;
  width: 30%;
}
#mydesk-callback-photo.photo_Center {
  bottom: 132px !important;
}
#mydesk-callback-photo img{
  max-width:100%;
  float: right;
}
#mydesk-callback:before {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
}
#mydesk-callback.callback_Bottom:before {
  right: 45%;
    top: 100%;
    border-left: 12px solid;
    border-top: 16px solid;
    border-right: 12px solid
}
#mydesk-callback.callback_Right:before {
  top: 45%;
  left: 100%;
  border-top: 12px solid;
  border-left: 16px solid;
  border-bottom: 12px solid;
}
#mydesk-callback.callback_Left:before {
  top: 45%;
  right: 100%;
  border-top: 12px solid;
  border-right: 16px solid;
  border-bottom: 12px solid;
}
#mydesk-callback.callback_Center:before {
  right: 5%;
  top: 100%;
  border-left: 12px solid;
  border-top: 16px solid;
  border-right: 12px solid;
}
.mydesk-text-callback{
  display:block;
  text-align: left;
}
.mydesk-text-callback p{}
.mydesk-title-callback{
  color:#ffffff;
  font-family: Helvetica,Arial,sans-serif;
  font-size:1.1em;
  padding:10px !important;
  /*width:100%;*/
  line-height:inherit;
}
.title-callback_Center{
  height:27px;
  width:90%;
  padding:24px 0 15px 20px!important;
}
.mydesk-content-callback{
  color:#ffffff;
  padding:10px 0px 10px 10px !important;
}
.content-callback_Center{
  padding:20px 0px 10px 20px !important;
}
#tab_settings #mydesk-callback{
  padding: 0px;
  margin:40px 0px 10px 0px;
  font-size: 0.9em;
  line-height: 1em;
  border-radius: 8px;
  -moz-border-radius: 8px;
  -webkit-border-radius: 8px;
  display: table;
  display: inline-block;
  word-wrap: break-word;
  width: 330px;
  min-height:80px;
  max-width: 330px;
  position: relative;
  right:0px;
  bottom:0px;
  -webkit-box-shadow: 0px 3px 12px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 3px 12px rgba(0,0,0,0.3);
  box-shadow: 0px 3px 12px rgba(0,0,0,0.3);
}
#tab_settings .mydesk-title-callback{
  font-size:1.6em;
  padding:10px;
  width:330px;
  padding:10px 0px 10px 10px;
  line-height:inherit;
}
#tab_settings .mydesk-content-callback{
  padding:10px 0px 10px 10px;
  font-family: Helvetica,Arial,sans-serif !important;
}
#bckgnd_Center.bckgnd_Center{
  /*background-color: rgba(200, 200, 200, 0.7);*/
  background: url(img/hotesses/grid.png) repeat scroll 0 0 #222;
  opacity: 0.9;
  width:100%;
  height:100%;
  position:fixed;
  top:0;
  left:0;
  z-index:-1;
}

/*-----------------------------------------------*/
/*------ FORMULAIRE CALLBACK ---*/
/*-----------------------------------------------*/
.mydesk-callback .btn-callback.send {
  background: #e3328b; /* Old browsers */
  color: #ffffff;
}
.mydesk-callback .btn-callback.send:hover {
  background: #9EBD3B; /* Old browsers */
  color: #ffffff;
}
#mydesk-callback  .form-callback{padding: 0px 0px 0px 10px; display:block;}
#mydesk-callback .submit-callback, #mydesk-callback .tel-callback {margin:0px 0px 10px 0px;}
#mydesk-callback .form-control, #mydesk-callback .select2-search input[type=text] {
  height: 28px;
  width: 60%;
  padding: 0px 0px 0px 8px;
  margin: 0px 8px 0px 0px;
  font-size: 1.0em;
  color: #34495e;
  border: 1px solid #bdc3c7;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  box-shadow: none;
  -webkit-transition: border .25s linear,color .25s linear,background-color .25s linear;
  transition: border .25s linear,color .25s linear,background-color .25s linear;
}
#mydesk-callback .btn-callback {
  padding: 4px 10px 4px 10px;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -o-border-radius: 4px;
  cursor: pointer;
  border: 0px !important;
  line-height: 1em;
  font-size: 1.2em;
  font-weight: normal;
  display: -webkit-inline-box;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
#mydesk-callback .btn-callback.actif {
  display: -webkit-inline-box;
  display: -moz-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}
#callback_invit{max-width:250px;}
#mydesk-callback .actif {
  display: block;
}
#mydesk-callback .inactif {
  display: none;
}
#mydesk-callback .callback_ok {
  color:#ffffff;
}
#mydesk-callback .callback_error {
  color:#f02020;
  font-size: 0.9em;
}

/*-----------------------------------*/
/*---- FORMULAIRE AGENTS ABSENTS ----*/
/*-----------------------------------*/
#titleABS {line-height:1em;text-align: center; padding-top:5px}
.contentFormABS label{/*line-height:1em;*/}
#watchFormABS{
  position: relative;
  margin: 0px 10px 10px 10px !important;
  overflow-y:auto;
  overflow-x: hidden;
}

.contentFormABS input{max-height: 22px !important; min-height: 22px !important;}

.formABSErreur{border-color:red !important;}

.listAgentsOn #watchFormABS{
  margin: 38px 10px 10px 10px !important;
}
.listAgentsOff #watchFormABS{
  margin: 10px 10px 10px 10px !important;
}
.desk_Bottom #watchFormABS{
  font-size:0.9em;
  /*height:422px;*/
}

.subtitleAbs{
  display:inline-block;
  word-break: break-word;
}
.labelAbs{
  display:none;
}
  
.desk_Left #watchFormABS, .desk_Right #watchFormABS{
  /*height:422px;*/
  height:calc(422px - 15px);
  /*height:calc(422px + 37px);*/
  font-size:0.8em;
}
  @media(min-height:480px){
    .desk_Left #watchFormABS, .desk_Right #watchFormABS{
      /*height:422px;*/
      font-size:0.8em;
    }
  }
  @media(min-height:550px){
    .desk_Left #watchFormABS, .desk_Right #watchFormABS{
      /*height:422px;*/
      font-size:0.9em;
    }
  }
  @media(min-height:700px){
    .desk_Left #watchFormABS, .desk_Right #watchFormABS{
      /*height:422px;*/
      font-size:0.9em;
    }
  }
#watchFormABS .valeur{
  margin:12px 0px 0px 0px;
}
#watchFormABS .champABS, #watchFormABS .ABSMessage{
  width: 90%;
    max-width: 90%;
    padding: 4px;
    margin: 0px 0px 0px 7px;
}
#watchFormABS .smallinput{
  width: 41%;
      display: initial;
}
#watchFormABS.watchFormDisplay, #watchFormSATIS.watchFormDisplay, #watchFormLEAD.watchFormDisplay, #watchFormPRECHAT.watchFormDisplay, #watchC2C.watchFormDisplay{
  display:block;
  margin: 0px !important;
}
#watchFormABS.watchFormDisplayNone, #watchFormSATIS.watchFormDisplayNone, #watchFormLEAD.watchFormDisplayNone, #watchFormPRECHAT.watchFormDisplayNone, #watchC2C.watchFormDisplayNone{
  display:none;
}
.contentFormABS{
  font-size:1.1em;
}
#mydesk.desk_Bottom.listAgentsOn #watchFormABS.watchFormDisplay .contentFormABS{
  padding: 4px 10px 0px 6px;
  margin:0px;
}
#mydesk.desk_Left.listAgentsOn #watchFormABS.watchFormDisplay .contentFormABS,
#mydesk.desk_Right.listAgentsOn #watchFormABS.watchFormDisplay .contentFormABS{
  padding: 4px 10px 0px 6px;
  margin:0px;
}
#watchFormABS .btn {
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  font-family: Arial;
  font-size: /*1.2em*/15px;
  padding: 6px 16px 6px 16px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  text-indent: inherit;
  float: inherit;
  left:calc(50% - 43px);
}
#watchFormABS .btn_back {
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  font-family: Arial;
  font-size: /*1.2em*/15px;
  padding: 6px 16px 6px 16px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  text-indent: inherit;
  float: inherit;
  top: 20px;
    width: 60px;
    margin: auto;
}
.wb_messageRetour.inactif{
  display:none;
}

/*--- Retour form message absence ---*/
.sendMessageCallBack_Ok, .sendMessageCallBack_Ko{
  position: absolute;
    top: 0px;
    height: 100%;
    width: 100%;
    background-color: rgba(255,255,255,0.9);
    text-align: center;
}
.sendMessageCallBack_Ok{
  color:#417335;
}
.sendMessageCallBack_Ko{
  color:#e11111;
}

.wb_messageRetour{
    position: relative;
    top: calc(50% - 8px); 
}

/*------------------------------------------------*/
/*---- FORMULAIRE DE SATISFACTION ET POSTCHAT ----*/
/*------------------------------------------------*/
#mydesk #watchFormSATIS, #mydesk #watchFormLEAD, #mydesk #watchFormPRECHAT{
  padding: 0px !important;
  position: absolute;
  background-color: rgba(255,255,255,0.99);
  color: #000000;
  text-align: center;
  z-index:10;
}
#mydesk.desk_Left #watchFormSATIS,#mydesk.desk_Right #watchFormSATIS,#mydesk.desk_Left #watchFormLEAD,#mydesk.desk_Right #watchFormLEAD,#mydesk.desk_Left #watchFormPRECHAT,#mydesk.desk_Right #watchFormPRECHAT{
  top: 27px;
  right:0px;
  width: 100%;
  -webkit-box-shadow: 3px 5px 15px rgba(0,0,0,0.1);
  -moz-box-shadow: 3px 5px 15px rgba(0,0,0,0.1);
  box-shadow: 3px 5px 15px rgba(0,0,0,0.1);
  border-bottom-left-radius:  11px;
  border-bottom-right-radius:  11px;
  height:calc(422px - 58px);
}
#mydesk.desk_Bottom #watchFormSATIS,
#mydesk.desk_Bottom #watchFormLEAD,
#mydesk.desk_Bottom #watchFormPRECHAT{
  top: 22px;
  z-index:2;
  height:100%;
  max-height:calc(422px + 16px);
  max-height:-webkit-calc(422px + 16px);
  max-height:-moz-calc(422px + 16px);
  
}

#watchFormLEAD .formLEAD,
#watchFormPRECHAT .formLEAD{
  overflow-y: auto;
  background-color: #ffffff;
  display: block;
}
#watchFormLEAD .inputFormLEAD,
#watchFormPRECHAT .inputFormLEAD{
  max-height: inherit;
    min-height: inherit;
}

#mydesk.desk_Left #watchFormSATIS .formSATIS,
#mydesk.desk_Right #watchFormSATIS .formSATIS,
#mydesk.desk_Left #watchFormLEAD .formLEAD,
#mydesk.desk_Right #watchFormLEAD .formLEAD,
#mydesk.desk_Left #watchFormPRECHAT .formLEAD,
#mydesk.desk_Right #watchFormPRECHAT .formLEAD{
  max-height:calc(422px - 34px);
  max-height:-webkit-calc(422px - 34px);
  max-height:-moz-calc(422px - 34px);
}
#mydesk.desk_Bottom #watchFormSATIS .formSATIS,
#mydesk.desk_Bottom #watchFormPRECHAT .formLEAD,
#mydesk.desk_Bottom #watchFormLEAD .formLEAD{
    /*max-height:364px;

  max-height:calc(422px + 28px);
  max-height:-webkit-calc(422px + 28px);
  max-height:-moz-calc(422px + 28px);
  */
}
#mydesk.desk_Left #watchFormSATIS .formSATIS,
#mydesk.desk_Right #watchFormSATIS .formSATIS,
#mydesk.desk_Left #watchFormLEAD .formLEAD,
#mydesk.desk_Right #watchFormLEAD .formLEAD,
#mydesk.desk_Left #watchFormPRECHAT .formLEAD,
#mydesk.desk_Right #watchFormPRECHAT .formLEAD{
  /*width: 100%;
  height:355px;*/
}
#mydesk.desk_Bottom #watchFormSATIS .formSATIS,#mydesk.desk_Bottom #watchFormLEAD .formLEAD,#mydesk.desk_Bottom #watchFormPRECHAT .formLEAD{
  height:100%;
}
#watchFormSATIS fieldset,#watchFormLEAD fieldset,
#watchFormSATIS fieldset,#watchFormPRECHAT fieldset{
  margin: 12px 8px 14px 8px;
  background-color: rgba(0,0,0,0.05);
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -o-border-radius: 10px;
}
#watchFormSATIS .listeSATIS .txtListeSATIS{
    height: 24px;
  }
#mydesk.desk_Left #watchFormSATIS .titreSATIS,#mydesk.desk_Right #watchFormSATIS .titreSATIS,#mydesk.desk_Left #watchFormLEAD .titreLEAD,#mydesk.desk_Right #watchFormLEAD .titreLEAD,
,#mydesk.desk_Left #watchFormPRECHAT .titreLEAD,#mydesk.desk_Right #watchFormPRECHAT .titreLEAD{
  font-size: 1.3em;
  margin: 12px 4px 0px 4px;
}
#mydesk.desk_Bottom #watchFormSATIS .titreSATIS,#mydesk.desk_Bottom #watchFormLEAD .titreLEAD,#mydesk.desk_Bottom #watchFormPRECHAT .titreLEAD{
  font-size: 1em;
  margin: 14px 4px 16px 4px;
}
#watchFormSATIS .soustitreSATIS,#watchFormLEAD .soustitreLEAD,#watchFormPRECHAT .soustitreLEAD{
  font-size:1.0em;
  margin: 18px 4px 0px 4px
}
#watchFormSATIS .labelSATIS,#watchFormLEAD .labelLEAD,#watchFormPRECHAT .labelLEAD{
  font-size:1.0em;
  margin: 10px 4px 13px 4px;
  font-style: italic;
}
#watchFormSATIS .listeSATIS,#watchFormLEAD .listeLEAD,#watchFormPRECHAT .listeLEAD{
  display:-webkit-inline-box;
  display:inline-flex;
  font-size: 0.8em;
  min-height:60px;
}
#watchFormSATIS .listeSATIS li,#watchFormLEAD .listeLEAD li,#watchFormPRECHAT .listeLEAD li{
  margin: 4px 2px 4px 2px;
  width:33%;
}

#watchFormSATIS input[type="radio"] {
  background : 0;
    background-attachment : scroll;
    background-clip : border-box;
    background-color : transparent;
    background-image : none;
    background-origin : padding-box;
    background-position : 0 0;
    background-position-x : 0;
    background-position-y : 0;
    background-repeat : repeat;
    background-size : auto auto;
    bottom : auto;
    box-shadow : none;
    box-sizing : content-box;
    caption-side : top;
    clear : none;
    clip : auto;
    color : inherit;
    content : normal;
    counter-increment : none;
    counter-reset : none;
    cursor : auto;
    direction : ltr;
    display : inline;
    empty-cells : show;
    float : none;
    height : auto;
    left : auto;
    letter-spacing : normal;
    line-height : normal;
    list-style : none;
    list-style-image : none;
    list-style-position : outside;
    list-style-type : disc;
    margin : 0;
    margin-bottom : 0;
    margin-left : 0;
    margin-right : 0;
    margin-top : 0;
    max-height : none;
    max-width : none;
    min-height : 0;
    min-width : 0;
    opacity : 1;
    outline : 0;
    outline-color : invert;
    outline-style : none;
    outline-width : medium;
    overflow : visible;
    overflow-x : visible;
    overflow-y : visible;
    padding : 0;
    padding-bottom : 0;
    padding-left : 0;
    padding-right : 0;
    padding-top : 0;
    page-break-after : auto;
    page-break-before : auto;
    page-break-inside : auto;
    perspective : none;
    perspective-origin : 50% 50%;
    position : static;
    right : auto;
    tab-size : 8;
    table-layout : auto;
    top : auto;
    transform : none;
    transform-style : flat;
    transition : none;
    transition-delay : 0s;
    transition-duration : 0s;
    transition-property : none;
    transition-timing-function : ease;
    unicode-bidi : normal;
    vertical-align : baseline;
    visibility : visible;
    white-space : normal;
    widows : 0;
    width : auto;
    word-spacing : normal;
    z-index : auto;
   opacity: 0;
   -moz-opacity: 0;
   -webkit-opacity: 0;
   -o-opacity: 0;
}

#watchFormSATIS input[type="radio"] + label {
   position:relative;
   padding: 0 0 0 22px;
   font-size: 1em;
   line-height: 1em;
   cursor:pointer;
}

#watchFormSATIS input[type="radio"] + label:before {
   content:"";
   display:block;
   position:absolute;
   top:2px;
   left:-40%;
   height: 22px;
   width: 22px;
   background: white;
   border: 1px solid gray;
   border-radius: 12px;
   -webkit-border-radius: 12px;
   -moz-border-radius: 12px;
   -o-border-radius: 12px;
} 

#watchFormLEAD input[type="radio"],
#watchFormPRECHAT input[type="radio"] {
   position:absolute;
   opacity: 0;
   -moz-opacity: 0;
   -webkit-opacity: 0;
   -o-opacity: 0;
}
#watchFormLEAD input[type="radio"] + label {
   position:relative;
   padding: 0 0 0 22px;
   font-size: 1em;
   line-height: 1em;
   cursor:pointer;
}
#watchFormPRECHAT input[type="radio"] + label {
   position:relative;
   padding: 0 0 0 22px;
   font-size: 1em;
   line-height: 1em;
   cursor:pointer;
}
#watchFormLEAD input[type="radio"] + label:before {
   content:"";
   display:block;
   position:absolute;
   top:2px;
   left:10%;
   height: 22px;
   width: 22px;
   background: white;
   border: 1px solid gray;
   border-radius: 12px;
   -webkit-border-radius: 12px;
   -moz-border-radius: 12px;
   -o-border-radius: 12px;
}
#watchFormPRECHAT input[type="radio"] + label:before {
   content:"";
   display:block;
   position:absolute;
   top:2px;
   left:10%;
   height: 22px;
   width: 22px;
   background: white;
   border: 1px solid gray;
   border-radius: 12px;
   -webkit-border-radius: 12px;
   -moz-border-radius: 12px;
   -o-border-radius: 12px;
}
#watchFormSATIS .btnSATIS,#watchFormLEAD .btnLEAD,#watchFormPRECHAT .btnLEAD{
  margin: 2px 2px;
  padding: 4px 16px 4px 16px;
  border-radius: 2px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -o-border-radius: 4px;
  cursor:pointer;
}

#mydesk.desk_Bottom #communication.watchComDisplay{
  display:block;
  width:343px;
  height:calc(422px - 125px) !important;
  
}
#mydesk.desk_Left #communication.watchComDisplay,
#mydesk.desk_Right #communication.watchComDisplay{
  display:block;
  width:calc(343px - 38px);
  width:-webkit-calc(343px - 38px);
  width:-moz-calc(343px - 38px);
  /*
  max-height:calc(422px + 42px);
  max-height:-webkit-calc(422px + 42px);
  max-height:-moz-calc(422px + 42px);
  */
}
/* avec la video */
#mydesk.desk_Bottom.videoRtcOpen #communication.watchComDisplay,
#mydesk.desk_Left.videoRtcOpen #communication.watchComDisplay,
#mydesk.desk_Right.videoRtcOpen #communication.watchComDisplay{
  width:314px;
}

#communication.watchComDisplayNone{
  display:none;
}
#communication.focusOn{
  /*display:block;*/
}
#communication.focusOff{
  /*display:none;*/
  /*height: 360px;*/
}
#communication.watchComDisplay.wb-open{
  margin: 0px 0px 0px 0px;
}
#mydesk.desk_Bottom #communication.watchComDisplay.wb-close{
  margin: 0px 0px 0px 0px;
  /*height:176px;*/
}
#mydesk.desk_Left #communication.watchComDisplay.wb-close{
  margin: 0px 0px 0px 0px;
  /*height:180px;*/
}
#mydesk.desactive #contentDesk, #mydesk.tf_desactive #contentDesk{
  display:none;
  padding:0px;
  margin:0px;
}
#mydesk.open #contentDesk, #mydesk.tf_open #contentDesk{
  display:block;
  padding: 0px 0px 0px 0px;
}
#mydesk.open.desk_Bottom #contentDesk, #mydesk.tf_open.desk_Bottom #contentDesk{
  width:100%;
  height : calc(422px + 10px);
  /*height:100%;*/
}
#mydesk.open.desk_Right #contentDesk, #mydesk.tf_open.desk_Right #contentDesk{
  width:calc(100% - 38px);
  width:-webkit-calc(100% - 38px);
  width:-moz-calc(100% - 38px);
  min-height:200px;
  border:0px solid #0f0;
  position:absolute;
  /*top:34px;*/
  top:0px;
  left:38px;
  z-index:3;
  -webkit-box-shadow: 0px 3px 18px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 3px 18px rgba(0,0,0,0.2);
  box-shadow: 0px 3px 18px rgba(0,0,0,0.2);
}
#mydesk.open.desk_Right.videoRtcClose #contentDesk, #mydesk.tf_open.desk_Right.videoRtcClose #contentDesk{
  height:calc(422px + 3px);
  height:-webkit-calc(422px + 3px);
  height:-moz-calc(422px + 3px);
}
#mydesk.open.desk_Right.videoRtcOpen #contentDesk, #mydesk.open.desk_Right.videoRtcOpen #contentDesk{
  height:460px;
}


#mydesk.open.desk_Left #contentDesk, #mydesk.tf_open.desk_Left #contentDesk{
  width:calc(100% - 38px);
  width:-webkit-calc(100% - 38px);
  width:-moz-calc(100% - 38px);
  min-height:200px;
  border:0px solid #0f0;
  position:absolute;
  /*top:34px;*/
  top:0px;
  -webkit-box-shadow: 0px 3px 18px rgba(0,0,0,0.2);
  -moz-box-shadow: 0px 3px 18px rgba(0,0,0,0.2);
  box-shadow: 0px 3px 18px rgba(0,0,0,0.2);
  left:0px;
  z-index:3;
}
#mydesk.open.desk_Left.videoRtcClose #contentDesk, #mydesk.tf_open.desk_Left.videoRtcClose #contentDesk{
  height:calc(422px - 0px);
  height:-webkit-calc(422px - 0px);
  height:-moz-calc(422px - 0px);
}
#mydesk.open.desk_Left.videoRtcOpen #contentDesk, #mydesk.tf_open.desk_Left.videoRtcOpen #contentDesk{
  height:460px;
}




/*---------------------------------------------*/
/*--- barre de titre watchBox ---*/
/*---------------------------------------------*/
#WatchBox-titleBar{
  position:absolute;
  top:0px;
  width: calc(100% - 0px);
  height:37px;
  z-index :10;
}
/* en bas */
#mydesk.desk_Bottom #WatchBox-titleBar{
  border-top-left-radius:0px;
  border-top-right-radius:0px;
  border-bottom-right-radius:0px;
  border-bottom-left-radius:0px;
  width: calc(100% - 80px);
  width: -moz-calc(100% - 80px);
}
/* à droite */
#mydesk.desk_Right #WatchBox-titleBar{
  background-color:rgba(227,50,139,0.8);
}
/* à gauche */
#mydesk.desk_Left #WatchBox-titleBar{
  background-color:rgba(227,50,139,0.8);
}

#WatchBox-titleBar .contentTitleBar{
}
#WatchBox-iconeListeAgents{
}
/* info de l'agent en mode déployé connecté */
.imageCurrentAgentContainer{
}
.imageCurrentAgent{
  width:37px;
  height:37px;
  float:left;
}
/* en bas */
#mydesk.desk_Bottom .imageCurrentAgent{
  border-top-left-radius:0px;
  border-top-right-radius:0px;
  border-bottom-right-radius:0px;
  border-bottom-left-radius:0px;
}

.descCurrentAgentContainer{
  float:left;
  diplay:inline-block;
  margin: 3px 0 0 5px !important;
  font-size:0.9em;
  word-wrap: break-word;
}
#mydesk.desk_Left .descCurrentAgentContainer, #mydesk.desk_Right .descCurrentAgentContainer{
  max-width:calc(343px - 80px);/* largeur total - 2 largeur icones - largeur photo */
}
#mydesk.desk_Bottom .descCurrentAgentContainer{
  max-width:calc(343px - 122px);/* largeur total - 2 largeur icones - largeur photo */
}
.currentAgentName{
  color:#ffffff ;
}
.currentAgentJob{
  color:rgba(255,255,255,0.7) ;
  font-style: italic;
}





/*------------------------------*/
/*----   LISTE DES AGENTS   ----*/
/*------------------------------*/
#contentListAgent{
  position:absolute;
  z-index: 110;
  top: 0px;
  /*width:calc(343px - 36px);*/
}

/*en bas*/
#mydesk.open.desk_Bottom #contentListAgent, #mydesk.tf_open.desk_Bottom #contentListAgent{
  border-top-left-radius:0px;
  border-top-right-radius:0px;
  border-bottom-right-radius:0px;
  border-bottom-left-radius:0px;
}


#contentListAgent.inactif .contenerListeAgent{display:none;}
#contentListAgent.actif .contenerListeAgent{display:block;}

#mydesk.listAgentsOff #contentListAgent, #mydesk.listAgentsOn.desactive #contentListAgent{
  display:none;
}
#mydesk.listAgentsOn #contentListAgent.inactif{
  display:block;
  background-color: rgba(255,255,255,0);
}
#mydesk.listAgentsOn.open #contentListAgent.actif,
#mydesk.listAgentsOn.tf_open #contentListAgent.actif,
#mydesk.listAgentsOn #contentListAgent.inactif:hover{
  width:100%;
  display:block;
  background-color: rgba(255,255,255,0.92);
    border-top-left-radius:0px;
  }
#mydesk.listAgentsOn #contentListAgent.inactif:hover{background-color: rgba(255,255,255,0);}

#mydesk.listAgentsOn #contentListAgent.inactif .contenerListeAgent{
  display:none;
}
#mydesk.listAgentsOn #contentListAgent.actif .contenerListeAgent{
  min-height: calc(422px - 54px);
  min-height: -webkit-calc(422px - 54px);
  min-height: -moz-calc(422px - 54px);
  max-height: calc(422px - 54px);
  max-height: -webkit-calc(422px - 54px);
  max-height: -moz-calc(422px - 54px);
  overflow-y: auto;
  overflow-x: hidden;
}
#mydesk.listAgentsOn.desk_Right #contentListAgent.actif .contenerListeAgent{
  display:block;
  width: calc(343px - 36px);
  width: -webkit-calc(343px - 36px);
  width: -moz-calc(343px - 36px);
}
#mydesk.listAgentsOn.desk_Left #contentListAgent.actif .contenerListeAgent{
  display:block;
  width: calc(343px - 38px);
  width: -webkit-calc(343px - 38px);
  width: -moz-calc(343px - 38px);
}
/*avec la video */
#mydesk.listAgentsOn.desk_Bottom.videoRtcOpen #contentListAgent.actif .contenerListeAgent,
#mydesk.listAgentsOn.desk_Left.videoRtcOpen #contentListAgent.actif .contenerListeAgent,
#mydesk.listAgentsOn.desk_Right.videoRtcOpen #contentListAgent.actif .contenerListeAgent{
  width: 314px;
}

.dl_listeAgent{
  line-height: 1em;
}

#mydesk.listAgentsOn #contentListAgent.afficheOff{
  display:none;
}
#mydesk.wb_online.listAgentsOn #contentListAgent.afficheOn{
  display:block;
}
#mydesk.wb_offline.listAgentsOn #contentListAgent.afficheOn{
  display:none;
}

#mydesk.listAgentsOn #contentListAgent.inactif{
  height: 37px !important;
    border-top-left-radius:0px;
  }
#mydesk.listAgentsOn .contener {
  /*height: calc(422px + 19px);*/
  /*max-height: calc(422px + 19px);*/
  /*min-height: 184px;*/
  -webkit-box-shadow: -7px 0px 25px -5px rgba(0,0,0,0.05) inset;
  -moz-box-shadow: -7px 0px 25px -5px rgba(0,0,0,0.05) inset;
  box-shadow: -7px 0px 25px -5px rgba(0,0,0,0.05) inset;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
}
#contentListAgent .icone_listeAgent{
  height:37px;
  width:38px;
  cursor: pointer;
  background-position: -135px -91px;
  opacity: 0.0;
    filter: alpha(opacity=0); /* For IE8 and earlier */
    border-top-left-radius:0px;
  }
.icone_listeAgent.inactif:hover{
  background-color:rgba(255,255,255,0.2);
}
.icone_listeAgent.actif{
  background-color:rgba(255,255,255,0.2);
}
.icone_listeAgent.actif:hover{
  background-color:rgba(255,255,255,0.4);
}

#contentListAgent .icone_listeAgent.affiche{
  opacity: 0.9;
    filter: alpha(opacity=90); /* For IE8 and earlier */
}
#contentListAgent .icone_listeAgent.cache{
  opacity: 0.0;
    filter: alpha(opacity=0); /* For IE8 and earlier */
}
#contentListAgent .icone_listeAgent:hover{
  opacity: 1;
    filter: alpha(opacity=100); /* For IE8 and earlier */
}
.desk_Left #contentListAgent .icone_listeAgent{
  /*float: right;*/
  /*right: -37px;*/
  position: relative;
}
#contentListAgent .icone_listeAgent:hover{}
#contentListAgent .mydesk_listAgent{
  padding: 0px;
  line-height: 1em;
}
#contentListAgent .mydesk_listAgent li{
  display:-webkit-box;
  display:-webkit-inline-box;
  display:-moz-inline-box;
  padding: 0px 0px 0px 0px;
  margin: 2px 0px 0px 1px;
  background:none;
}
#contentListAgent .mydesk_listAgent li.online,
#contentListAgent .mydesk_listAgent li.offline.device,
#contentListAgent .mydesk_listAgent li.busy.device{
  cursor: pointer;
  background-color:rgba(0,0,0,0.06);
}
#contentListAgent .mydesk_listAgent li.busy{
  cursor: pointer;
  background-color:rgba(255,0,0,0.06);
}
#contentListAgent .mydesk_listAgent li.offline{
  background-color:rgba(0,0,0,0.01);
}
#contentListAgent .mydesk_listAgent li.online:hover{
  background-color:rgba(0,0,0,0.1);
}
#contentListAgent .mydesk_listAgent li.busy:hover{
  background-color:rgba(255,0,0,0.1);
}
#mydesk #contentListAgent .mydesk_listAgent li{
  width:100%;
}
#agent_img.imageAgent{}
#contentListAgent .imageListeAgent{
  /*width:37px;
  height:37px;
  float:left;*/
}
#contentListAgent .imageListeAgent img{
  max-width:37px;
  max-height:37px;
  width:37px;
}
#contentListAgent .nomListeAgent{
  display: block;
  /*width:85%;*/
  height:37px;
}
#contentListAgent .offline.device .nomListeAgent,
#contentListAgent .busy.device .nomListeAgent{
    position: relative;
  /*width:100%;*/
  left:calc(-343px + 28px);
}
#contentListAgent .listeAgentName{
  display: block;
  font-size: 1.1em;
  margin: 4px 0px 0px 4px;
}
#contentListAgent .listeAgentJob{
  display: block;
  color: #000000;
  font-size: 0.9em;
  font-style: italic;
  margin: 0px 0px 0px 4px;
}
#listAgentMydesk .offline .imageListeAgent{
  opacity:0.2;
}
#listAgentMydesk .online .imageListeAgent,
#listAgentMydesk .offline.device .imageListeAgent,
#listAgentMydesk .busy.device .imageListeAgent{
  opacity:0.9;
}

/*---------------------------------------------*/
/*--- CHAT WATCHBOX ---*/
/*---------------------------------------------*/
/*--- chat content ---*/
#WatchBox-contentChat{
  float:left;
  width:100%;
  padding:0px;
  position:relative;
  z-index:1;
  height: calc(100% - 10px);
}
/* en bas */
#mydesk.desk_Bottom #WatchBox-contentChat{  }
/* à droite */
#mydesk.desk_Right #WatchBox-contentChat{ height: 100%; top:37px;}
/* à gauche */
#mydesk.desk_Left #WatchBox-contentChat{  height: 100%; top:37px;}

/* toolBar du module */
#mydesk.iconsOn #WatchBox-toolsBar{ display:block; }
#mydesk.iconsOff #WatchBox-toolsBar{ display:none; }


/* -----------bar d'icone chatBox position horizontal--------------- */
#WatchBox-navBarChat.wz_horizontal{  
    width: 100%;
    position: absolute;
    bottom: 25px;
  z-index:100;
  overflow:hidden;
}
#WatchBox-navBarChat.wz_horizontal{  
  box-shadow: 0px -2px 3px rgba(0,0,0,0.1);
}
#WatchBox-navBarChat.wz_horizontal.close{  
  height: 0px;
  -webkit-transition: height 0.35s ease-out; 
  -moz-transition: height 0.35s ease-out; 
  -ms-transition: height 0.35s ease-out; 
  -o-transition: height 0.35s ease-out; 
  transition: height 0.35s ease-out;
  background-color:#ffffff;
}
.wz_horizontal #printChat, .wz_horizontal #emailChat, .wz_horizontal #saveChat{
    float:left;
    width: 30px;
    height: 30px;
    cursor: pointer;
    /*border-radius: 15px;*/
    /*border: 1px solid rgba(227,50,139,1);*/
  background-color: rgba(227,50,139,0);
  transition: height 2s ease-in .5s;
}
.wz_horizontal #printChat:hover, .wz_horizontal #emailChat:hover, .wz_horizontal #saveChat:hover{
  background-color: rgba(227,50,139,0.02);
}
#WatchBox-navBarChat.wz_horizontal.open{
  height:31px;
  -webkit-transition: height 0.35s ease-in; 
  -moz-transition: height 0.35s ease-in; 
  -ms-transition: height 0.35s ease-in; 
  -o-transition: height 0.35s ease-in; 
  transition: height 0.35s ease-in;
  background-color:#fefefe;
}
/*
#WatchBox-contentChat:hover #WatchBox-navBarChat.wz_horizontal{
  height:28px;
  -webkit-transition: height 0.35s ease-in; 
  -moz-transition: height 0.35s ease-in; 
  -ms-transition: height 0.35s ease-in; 
  -o-transition: height 0.35s ease-in; 
  transition: height 0.35s ease-in; 
}
*/
.wz_horizontal .content_iconeCopyChat, .wz_horizontal .content_iconeSaveChat, .wz_horizontal .content_iconeEmailChat{position: relative;  padding-top: 4px !important; padding-left: 4px !important;}

/* -----------bar d'icone chatBox position vertical--------------- */
#WatchBox-navBarChat.wz_vertical{  
  height: 100%;
  -webkit-transition: width 0.35s ease-out; 
  -moz-transition: width 0.35s ease-out; 
  -ms-transition: width 0.35s ease-out; 
  -o-transition: width 0.35s ease-out; 
  transition: width 0.35s ease-out;
    width: 0px;
    right:100%;
    position: absolute;
    bottom: 58px;
  z-index:100;
  overflow:hidden;
}
.wz_vertical #printChat{
    position: absolute;
    bottom: 2px;
  left:6px;
    width: 28px;
    height: 24px;
    cursor: pointer;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    background-color:rgba(227,50,139,1);
  transition: height 2s ease-in .5s;
}
.wz_vertical #printChat:hover{
  background-color:rgba(227,50,139,1);
}
#WatchBox-contentChat:hover #WatchBox-navBarChat.wz_vertical{
  width:34px;
  -webkit-transition: width 0.35s ease-in; 
  -moz-transition: width 0.35s ease-in; 
  -ms-transition: width 0.35s ease-in; 
  -o-transition: width 0.35s ease-in; 
  transition: width 0.35s ease-in; 
}
.wz_vertical .content_iconeCopyChat{padding-top: 1px !important; padding-left: 2px !important;}
.wz-SVGiconeChat{
  /*stroke:rgba(227,50,139,1)*/
  fill:rgba(158,189,59,1);
}
.wz-nameBtSaveChat{
  font-size: 9px !important;
    font-family: sans-serif !important;
    font-weight: 400 !important;
}
.wz-nameBtSaveChat{
    float: right;
    position: absolute;
  transform:translateY(-50%);
    right: 0px;
    top: 50%;
    width: calc(100% - 26px);
}




  
#WatchBox-toolsBar{height:34px; width:100%; background-color:#333;}

#WatchBox-conversation{width:100%; overflow:auto; position:absolute;}

/* en  bas */
/* incones off */
#mydesk.open.desk_Bottom.iconsOff #WatchBox-conversation, #mydesk.tf_open.desk_Bottom.iconsOff #WatchBox-conversation{
  height: calc(422px - 40px);
  height: moz-calc(422px - 40px);
}

  @media(max-device-heigth:480px){
    #mydesk.open.desk_Bottom.iconsOff #WatchBox-conversation, #mydesk.tf_open.desk_Bottom.iconsOff #WatchBox-conversation{
      height: calc(422px - 75px);
      height: moz-calc(422px - 75px);
    }
  }
  @media(max-device-heigth : 550px){
    #mydesk.open.desk_Bottom.iconsOff #WatchBox-conversation, #mydesk.tf_open.desk_Bottom.iconsOff #WatchBox-conversation{
      height: calc(422px - 55px);
      height: moz-calc(422px - 55px);
    }
  }
  @media(max-device-heigth : 700px){
    #mydesk.open.desk_Bottom.iconsOff #WatchBox-conversation, #mydesk.tf_open.desk_Bottom.iconsOff #WatchBox-conversation{
      height: calc(422px - 35px);
      height: moz-calc(422px - 35px);
    }
  }
incones on */
#mydesk.open.desk_Bottom.iconsOn #WatchBox-conversation, #mydesk.tf_open.desk_Bottom.iconsOn #WatchBox-conversation{
  height: calc(422px - 124px);
  height: moz-calc(422px - 124px);
}
  @media(min-height:480px){
    #mydesk.open.desk_Bottom.iconsOn #WatchBox-conversation, #mydesk.tf_open.desk_Bottom.iconsOn #WatchBox-conversation{
      height: calc(422px - 109px);
      height: moz-calc(422px - 109px);
    }
  }
  @media(min-height:550px){
    #mydesk.open.desk_Bottom.iconsOn #WatchBox-conversation, #mydesk.tf_open.desk_Bottom.iconsOn #WatchBox-conversation{
      height: calc(422px - 89px);
      height: moz-calc(422px - 89px);
    }
  }
  @media(min-height:700px){
    #mydesk.open.desk_Bottom.iconsOn #WatchBox-conversation, #mydesk.tf_open.desk_Bottom.iconsOn #WatchBox-conversation{
      height: calc(422px - 69px);
      height: moz-calc(422px - 69px);
    }
  }
/* à droite */
/* incones off */
#mydesk.open.desk_Right.iconsOff #WatchBox-conversation, #mydesk.tf_open.desk_Right.iconsOff #WatchBox-conversation{
  height: calc(422px - 85px);
  height: moz-calc(422px - 85px);
}
/* incones on */
#mydesk.open.desk_Right.iconsOn #WatchBox-conversation, #mydesk.tf_open.desk_Right.iconsOn #WatchBox-conversation{
  height: calc(422px - 120px);
  height: moz-calc(422px - 120px);
}
/* à gauche */
/* incones off */
#mydesk.open.desk_Left.iconsOff #WatchBox-conversation, #mydesk.tf_open.desk_Left.iconsOff #WatchBox-conversation{
  height: calc(422px - 88px);
  height: moz-calc(422px - 88px);
}
/* incones on */
#mydesk.open.desk_Left.iconsOn #WatchBox-conversation, #mydesk.tf_open.desk_Left.iconsOn #WatchBox-conversation{
  height: calc(422px - 120px);
  height: moz-calc(422px - 120px);
}

#WatchBox-conversation .botButton{
  border: 1px solid grey;
  border-radius: 6px;
  padding: 2px;
  margin: 0 10px; 
  background-color: #f1f1f1;
  cursor: pointer;
}
/*.fondIconeZoomImg {background-color: rgba(227,50,139,1);}*/
/*.contentZoomImg svg{ width:22px; height:22px; }*/
.contentZoomImg .white_color{ fill: rgba(227,50,139,1); }
.cornerZoomImg{
  width: 0;
  height: 0;
  border-bottom: 36px solid rgba(227,50,139,1);
  border-right: 36px solid transparent;
  /*box-shadow: -1px 1px 5px 0px rgba(0,0,0,0.3) !important;*/
}

#WatchBox-conversation .txtChat{
  padding:0px;
  margin:2px 4px 2px 4px;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -o-hyphens: auto;
  hyphens: auto;
  word-wrap: break-word;
  line-height:1.1em !important;
   
 
}


#WatchBox-optionChat{
  /*border:1px solid rgba(227,50,139,1);*/
    width: 37px;
    height: 27px;
    position: absolute;
  display: inline-flex;
    top: 50px;
    left: 3px;
  cursor:pointer;
  
    
}
#WatchBox-optionChat:hover{}

.iconeOptionChatPlus {position: relative; display: inline-block;width: 15px;height: 15px;overflow: hidden; top:-25px; left:0px; background-color: transparent; }
.iconeOptionChatPlus svg{;width:15px;height: 15px}
.iconeOptionChatPlus #bt_preftools path{fill: rgba(227,50,139,1);width:15px;height: 15px}
/*
.iconeOptionChatPlus::before, .iconeOptionChatPlus::after {content: '';position: absolute;height: 2px;width: 100%;top: 50%;left: 0;margin-top: -1px;background: rgba(227,50,139,1);}
.iconeOptionChatPlus::before {transform: rotate(90deg);}
.iconeOptionChatPlus::after {}
*/
.iconeOptionChatMoins {position: relative; display: inline-block;width: 22px;height: 22px;overflow: hidden; top:-25px; left:0px; border-radius: 13px; background-color: rgba(227,50,139,1);}
.iconeOptionChatMoins svg{;width:15px;height: 15px}
.iconeOptionChatMoins #bt_preftools path{fill: rgba(158,189,59,1); width:22px;height: 22px}
/*
.iconeOptionChatMoins::before {content: '';position: absolute;height: 2px;width: 100%;top: 50%;left: 0;margin-top: -1px;background: rgba(227,50,139,1);}
.iconeOptionChatMoins::before {transform: rotate(0deg);}
*/


/*.iconeOptionChatPlus::before {-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);-o-transform: rotate(45deg);transform: rotate(45deg);}
.iconeOptionChatPlus::after {-webkit-transform: rotate(-45deg);-moz-transform: rotate(-45deg);-ms-transform: rotate(-45deg);-o-transform: rotate(-45deg);transform: rotate(-45deg);*/
#WatchBox-MessageWrapper{
  position:absolute;
  width:100%;
  height:60px;
}
/* en bas */
#mydesk.open.desk_Bottom #WatchBox-MessageWrapper,
#mydesk.tf_open.desk_Bottom #WatchBox-MessageWrapper{bottom:-40px;}
/* à droite */
#mydesk.open.desk_Right #WatchBox-MessageWrapper,
#mydesk.tf_open.desk_Right #WatchBox-MessageWrapper{bottom:36px;}

  /* à gauche */
#mydesk.open.desk_Left #WatchBox-MessageWrapper,
#mydesk.tf_open.desk_Left #WatchBox-MessageWrapper{bottom:36px;}
#WatchBox-message{
  width: calc(100% - 50px);
  margin: 0px 0px -14px 4px !important;
  height: 60px;
  padding: 2px !important;
}
#WatchBox-chatSend{
  position: absolute;
  top:0px;
  right:0px;
  /*background-color: #90D1E5;*/
  /*background-color:rgba(227,50,139,1);*/
  cursor: pointer;
  width: 20px;
  height: 20px;
  /*border-bottom-right-radius: 3px;*/
}
#WatchBox-chatSend:hover #bt_envoi polygon{
  fill:rgba(227,50,139,1);
}
#WatchBox-chatSend.inactif #bt_envoi polygon{
  fill: #b9b9b9;
  cursor: default;
}
#WatchBox-chatSend.typing #bt_envoi polygon{ 
  fill: rgba(227,50,139, .8); 
  }
.icone_sendMessage{
  background-position: -299px 6px;
  background-repeat: no-repeat;
}
#WatchBox-chatupload svg#icon_upload {
    transform: rotate(45deg);
}

#WatchBox-chatupload{
  position: absolute;
  top:0px;
  right:20px;
  /*background-color: #90D1E5;*/
  /*background-color:rgba(227,50,139,1);*/
  cursor: pointer;
  width: 20px;
  height: 20px;
  /*border-bottom-right-radius: 3px;*/
}
#WatchBox-chatupload #icon_upload {
  fill:rgba(227,50,139,0.5);
}
#WatchBox-chatupload #icon_upload:hover {
  fill:rgba(227,50,139,1);
}
#WatchBox-chatupload #icon_upload polygon{
    /*border-radius: 50% !important;
    width: 20px;
    height: 20px;*/
    fill:rgba(227,50,139,1);
}
#WatchBox-chatupload:hover #icon_upload path.tronbone{
  fill:rgba(227,50,139,1);
}
#WatchBox-chatupload.inactif #icon_upload path.tronbone{
  fill: #b9b9b9;
  cursor: default;
}
#WatchBox-chatupload.typing #icon_upload path.tronbone{ 
  fill: rgba(227,50,139, .8); 
}
/*---------------------------------------------*/
/*------MESSAGE SYSTEME------*/
/*---------------------------------------------*/
.messageSystem{
  padding: 10px 2px 10px 2px;
    position: relative;
    float: right;
    width: 98%;
    display: inline-block;
}
.messageSystem .icone_MessageSystem{height:32px; width:32px; background-position: -34px -69px; background-repeat: no-repeat;float: left; margin-right: 2px;}
.messageSystem .timestamp_System{display:none;}
.messageSystem .message_System{font-size: 0.84em; font-style: italic; line-height: 0.9em;}


/*---------------------------------------------*/
/*--- message visiteur ---*/
/*---------------------------------------------*/
.messageVisiteur {
  position: relative;
  color: #000000;
  float: right;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  margin: 1px 6px 14px 30px !important;
  padding: 4px 4px 6px 4px !important;
  background: #f0f0f0;
  max-width: 80%;
  min-width: 60%;
  display: inline-block;
}
.messageVisiteur:before {
  content: "";
  position: absolute;
  right: 8px;
  top: 100%;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-top: 8px solid #f0f0f0;
  border-right: 0px solid transparent;
}
.messageVisiteur.offline {
  background: #ebebeb;
}
.messageVisiteur.offline:before {
  border-top: 8px solid #ebebeb;
}
.messageVisiteur.offline .nom_Visiteur {
  color:#a8a8a8;
}

.nom_Visiteur{
  color:#E3328B;
  font-size:0.8em;
  margin:0px 0px 2px 4px !important;
}
.message_Visiteur{
  font-size:0.9em;
  max-width: 230px;
}
.message_Visiteur img{
  width: 100%;
}
.timestamp_Visiteur{
  font-size:0.6em;
  color:#555;
  font-style: italic;
  position: absolute;
  top: 4px;
  right: 6px;
}

/*---------------------------------------------*/
/*--- message Agent ---*/
/*---------------------------------------------*/

.WZ-chatAgentIMG{position:absolute; top:-4px; left:-52px;width:40px; height:40px; border-radius:20px; -moz-border-radius:20px; -webkit-border-radius: 20px;}
.messageAgent.chatIMG{margin-left:56px !important;}

.messageAgent {
  position: relative;
  color: #ffffff;
  float: left;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  margin: 9px 30px 8px 6px !important;
  padding: 4px 4px 6px 4px !important;
  background-color:#E3328B;
  max-width: 80%;
  min-width: 60%;
  display: inline-block;
}
.messageAgent:before {
  content: "";
  position: absolute;
  left: 8px;
  top: -8px;
  width: 0;
  height: 0;
  border-left: 8px solid #E3328B;
  border-top: 8px solid transparent;
  border-right: 0px solid transparent;
}
.messageAgent.chatIMG:before {
  content:"";
  position: absolute;
  left:inherit;
  right: 100%;
  top: 12px;
  width: 0;
  height: 0;
  border-left: inherit;
  border-top: 4px solid transparent;
  border-right: 10px solid #E3328B;
  border-bottom: 4px solid transparent;
}
.messageAgent.offline {
  background: #a0a0a0;
}
.messageAgent.offline.chatIMG:before {
  border-right: 10px solid #a0a0a0;
}
.messageAgent.offline:before {
  border-left: 8px solid #a0a0a0;
}
/*---------------------------------------------*/
/*-------------- special Bot Robot ------------*/
/*---------------------------------------------*/

.notifFromBot{
  font-size: x-small;
  display: inline-block;
  width: 100%;
  text-align: center;
}

.botImageAndLabel { display: inline-block; width: 100%;}
#oldConv.inactif {opacity: 0.5;}
#oldConv.actif {opacity: 1;}

/*---------------------------------------------*/
/*------------ FIN special Bot Robot ----------*/
/*---------------------------------------------*/
.nom_Agent{
  color:#ffffff;
  font-size:0.8em;
  margin:0px 0px 2px 4px !important;
}
.message_Agent{
  font-size:0.9em;
}
.timestamp_Agent{
  font-size:0.6em;
  color:#555;
  font-style: italic;
  position: absolute;
  top: 4px;
  right: 6px;
}

.WZMessageActif{
  opacity: 1;
  filter: alpha(opacity=100); /* For IE8 and earlier */
  z-index: 1;
}

.WZMessageInactif{
  opacity: 0.6;
  filter: alpha(opacity=50); /* For IE8 and earlier */
}

/*--- ajoute un espace en dessous de la derniere bulle de chat ---*/
.messageSystem.WZ_endMessage{margin-bottom:30px !important;}

/*-------------------------------------------------------------*/
/*  Affichage des dates dans le chat   */
/*-------------------------------------------------------------*/
.dates-marqueur{
    float: right;
    width: 100%;
  height: 0px;
} 
.wz-marqueur-sticky{height:20px}

.dates-messages {
  position: -webkit-sticky;
    position: sticky;
    top: 0px;
  padding: 4px 0px 4px 0px !important;
    margin-bottom: 10px !important;
    background-color: #fafafa;
    text-align: center;
  font-size: 0.8em;
    width: 100%;
  color:rgb(227,50,139);
  float: right;
}


/*---------------------------------------------*/
/*--- message Server Watcheezy ---*/
/*---------------------------------------------*/
.statusMessageVisiteur {
    position: relative;
    float: right;
    font-size: 0.8em;
    right: 30px;
    top: -10px;
  max-width: 80%;
    min-width: 60%;
    text-align: right;
}

/*---------------------------------------------*/
/*--- message Server Watcheezy ---*/
/*---------------------------------------------*/
.messageWatcheezy {
  position: relative;
  color: #b45a5a;
  float: left;
  margin:0px 0px 10px 0px !important;
  width: 98%;
  display: inline-block;
}
.nom_Watcheezy{
  font-weight: bold;
  font-size:0.8em;
  margin: 0px 0px 0px 6px !important;
}
.message_Watcheezy{
  font-size:1em;
  margin: 0px 0px 0px 6px;
}
.timestamp_Watcheezy{
  font-size:0.6em;
  color:#555;
  font-style: italic;
  position: absolute;
  top: 0px;
  right: 6px;
}

/*---------------------------------------------*/
/*--- isTyping ---*/
/*---------------------------------------------*/
#WatchBox-content-isTyping{
  height: 56px;
  width: 100%;
  position: absolute;
  bottom: 39px;
} 
#WatchBox-content-isTyping.actif{
  display:block;
}
#WatchBox-content-isTyping.inactif{
  display:none;
}

/*--- bulle isTyping ---*/
.isTyping {
  position: relative;
  color: #ffffff;
  float: left;
  border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  margin: 0px 30px 14px 6px !important;
  padding: 4px 4px 4px 4px !important;
  background-color:#E3328B;
  max-width: 80%;
  min-width: 24%;
  display: inline-block;
}
.isTyping:before {
  content: "";
  position: absolute;
  left: 8px;
  top: -8px;
  width: 0;
  height: 0;
  border-left: 8px solid #E3328B;
  border-top: 8px solid transparent;
  border-right: 0px solid transparent;
}
.isTyping_nom{
  color:#fff;
  font-weight: bold;
  font-size:0.8em;
  margin:0px 0px 2px 0px;
}

/*--- isTyping animation ---*/
.WatchBox-istyping {
  margin: 2px auto 0 !important;
  /*text-align: center;*/
}
.WatchBox-istyping > div {
  width: 12px;
  height: 12px;
  margin-right: 2px;
  background-color: #fff;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
  animation: bouncedelay 1.4s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.WatchBox-istyping .bounce1 {
  -webkit-animation-delay: -0.48s;
  animation-delay: -0.48s;
}
.WatchBox-istyping .bounce2 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.5); opacity: .5; }
  40% { -webkit-transform: scale(1.0); opacity: 1; }
}
@keyframes bouncedelay {
  0%, 80%, 100% { 
    transform: scale(0.5);
    -webkit-transform: scale(0.5);
    opacity: .5;
  } 40% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
    opacity: 1;
  }
}

/*-----------------------------------------------------------------------------------------*/
/*------------------------------- TEMPLATES COLOR WATCHEEZY -------------------------------*/
/*-----------------------------------------------------------------------------------------*/
/* boutton open watcheezy */
#mydesk.mydesk-template #mydesk_openMydesk{
  background-color:rgba(227,50,139,0.4);
}
#mydesk.mydesk-template #mydesk_openMydesk:hover{
  background-color:rgba(227,50,139,0.5);
}

#mydesk.open.mydesk-template.desk_Bottom #mydesk-outer, #mydesk.desactive.mydesk-template.desk_Bottom #mydesk-outer,
#mydesk.tf_open.mydesk-template.desk_Bottom #mydesk-outer, #mydesk.tf_desactive.mydesk-template.desk_Bottom #mydesk-outer{
  background: #E3328B; /* Old browsers */
  background: -moz-linear-gradient(left,  #e3328b 0%, #E3328B 25%, #E3328B 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, right top, color-stop(0%,#e3328b), color-stop(25%,#E3328B), color-stop(100%,#E3328B)); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(left,  #e3328b 0%,#E3328B 25%,#E3328B 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(left,  #e3328b 0%,#E3328B 25%,#E3328B 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(left,  #e3328b 0%,#E3328B 25%,#E3328B 100%); /* IE10+ */
  background: linear-gradient(to right,  #e3328b 0%,#E3328B 25%,#E3328B 100%); /* W3C */
  /*filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e3328b', endColorstr='#E3328B',GradientType=1 );*/ /* IE6-9 */
}
#mydesk.open.mydesk-template.desk_Right #mydesk-outer, #mydesk.open.mydesk-template.desk_Left #mydesk-outer, #mydesk.desactive.mydesk-template.desk_Right #mydesk-outer, #mydesk.desactive.mydesk-template.desk_Left #mydesk-outer,
#mydesk.tf_open.mydesk-template.desk_Right #mydesk-outer, #mydesk.tf_open.mydesk-template.desk_Left #mydesk-outer, #mydesk.tf_desactive.mydesk-template.desk_Right #mydesk-outer, #mydesk.tf_desactive.mydesk-template.desk_Left #mydesk-outer{
  background: #E3328B; /* Old browsers */
  background: -moz-linear-gradient(top,  #E3328B 0%, #E3328B 70%, #e3328b 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#E3328B), color-stop(70%,#E3328B), color-stop(100%,#e3328b)); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top,  #E3328B 0%,#E3328B 70%,#e3328b 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top,  #E3328B 0%,#E3328B 70%,#e3328b 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top,  #E3328B 0%,#E3328B 70%,#e3328b 100%); /* IE10+ */
  background: linear-gradient(to bottom,  #E3328B 0%,#E3328B 70%,#e3328b 100%); /* W3C */
  /*filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#E3328B', endColorstr='#e3328b',GradientType=0 );*/ /* IE6-9 */
}

#mydesk.mydesk-template #contentDesk{
  background: #ffffff; /* Old browsers */
}


/*-----------------------------------*/
/*--- PUSH ---*/
/*-----------------------------------*/
#mydesk-push.mydesk-push {
  background: #E3328B; /* Old browsers */
  background: -moz-linear-gradient(top,  #E3328B 0%, #333333 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#E3328B), color-stop(100%,#333333)); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top,  #E3328B 0%,#333333 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top,  #E3328B 0%,#333333 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top,  #E3328B 0%,#333333 100%); /* IE10+ */
  background: linear-gradient(to bottom,  #E3328B 0%,#333333 100%); /* W3C */
  /*filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#E3328B', endColorstr='#333333',GradientType=0 );*/ /* IE6-9 */
}
#mydesk-push.mydesk-push.push_Bottom:before,
#mydesk-push.mydesk-push.push_BottomRight:before,
#mydesk-push.mydesk-push.push_BottomLeft:before {
  border-color: #333;
  border-left-color: transparent;
  border-right-color: transparent;
}
#mydesk-push.mydesk-push.push_Right:before {
  border-color: #333;
  border-top-color: transparent;
  border-bottom-color: transparent;
}
#mydesk-push.mydesk-push.push_Left:before {
  border-color: #333;
  border-top-color: transparent;
  border-bottom-color: transparent;
}
#mydesk-push.mydesk-push.push_Center:before {
  border-color: #333;
  border-top-color: transparent;
  border-bottom-color: transparent;
}
#mydesk-push.mydesk-push .mydesk-title-push{
  border-radius: 8px 8px 0px 0px;
  -moz-border-radius: 8px 8px 0px 0px;
  -webkit-border-radius: 8px 8px 0px 0px;
  background: #E3328B; /* Old browsers */
  background: -moz-linear-gradient(left,  #e3328b 0%, #E3328B 25%, #E3328B 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, right top, color-stop(0%,#e3328b), color-stop(25%,#E3328B), color-stop(100%,#E3328B)); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(left,  #e3328b 0%,#E3328B 25%,#E3328B 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(left,  #e3328b 0%,#E3328B 25%,#E3328B 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(left,  #e3328b 0%,#E3328B 25%,#E3328B 100%); /* IE10+ */
  background: linear-gradient(to right,  #e3328b 0%,#E3328B 25%,#E3328B 100%); /* W3C */
  /*filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e3328b', endColorstr='#E3328B',GradientType=1 );*/ /* IE6-9 */
}
#mydesk-push.mydesk-push .mydesk-content-push{
  max-width:68%;
}
#mydesk-push.mydesk-push  #closePush{
  background-color: #e3328b;
}

#push_layer{
  display:none;
  position:fixed;
  -webkit-backface-visibility: hidden;
  cursor:pointer;
  width:100%;
  height:100%;
  z-index:100002;
  top:0;
  left:0;
  background:rgba(0,10,5,0.7);
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  transition: all ease 0.5s;
}
#push_layer.overlay_open{
  display:block;
}
#push_layer.overlay_close{
  display:none;
}

#push_centered{
  display:none;
  position:fixed;
  -webkit-backface-visibility: hidden;
  cursor:pointer;
  width:100%;
  height:100%;
  z-index:100003;
  top:0;
  left:0;
  /*background:rgba(0,10,5,0.7);*/
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  transition: all ease 0.5s;
}
#push_centered.overlay_open{
  display:block;
}
#push_centered.overlay_close{
  display:none;
}
#push_centered.open{
  display:block;
}
#push_centered .push_active{
  position:absolute;
  z-index:100003;
  width:auto;
  top:50%;
  left:50%;
  -webkit-transform:translate(-50%,-50%);
  -moz-transform:translate(-50%,-50%);
  transform:translate(-50%,-50%);
  padding:0;
  text-align:center;
  background:none;
  -webkit-border-radius:5px;
  -moz-border-radius:5px;
  border-radius:5px;
  cursor:auto;
     -webkit-text-shadow: rgba(255,255,255,0.01) 0 0 1px;
     -webkit-text-stroke: rgba(255,255,255,0.01) 0.1px;
     -webkit-text-stroke-width: 0.1px;
}

#pushRedPicture {
  cursor: pointer;
  width: 100% !important;
  height: 100% !important;
  line-height: 100vh !important;
}

#pushRedImg {
  max-width: 96%;
  max-height: 96%;
  vertical-align: middle;
}

/*-----------------------------------*/
/*--- CALLBACK ---*/
/*-----------------------------------*/
#mydesk .mydesk-outer  #mydesk_openCallback{
  background-color:rgba(227,50,139,0.3);
}
#mydesk .mydesk-outer  #mydesk_openCallback:hover{
  background-color:rgba(227,50,139,0.5);
}
#mydesk-callback.mydesk-callback {
  background: #E3328B; /* Old browsers */
  background: -moz-linear-gradient(top,  #E3328B 0%, #333333 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#E3328B), color-stop(100%,#333333)); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(top,  #E3328B 0%,#333333 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(top,  #E3328B 0%,#333333 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(top,  #E3328B 0%,#333333 100%); /* IE10+ */
  background: linear-gradient(to bottom,  #E3328B 0%,#333333 100%); /* W3C */
  /*filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#E3328B', endColorstr='#333333',GradientType=0 );*/ /* IE6-9 */
}
#mydesk-callback.mydesk-callback.callback_Bottom:before,
#mydesk-callback.mydesk-callback.callback_BottomRight:before,
#mydesk-callback.mydesk-callback.callback_BottomLeft:before {
  border-color: #333;
  border-left-color: transparent;
  border-right-color: transparent;
}
#mydesk-callback.mydesk-callback.callback_Right:before {
  border-color: #333;
  border-top-color: transparent;
  border-bottom-color: transparent;
}
#mydesk-callback.mydesk-callback.callback_Left:before {
  border-color: #333;
  border-top-color: transparent;
  border-bottom-color: transparent;
}
#mydesk-callback.mydesk-callback.callback_Center:before {
  border-color: #333;
  border-top-color: transparent;
  border-bottom-color: transparent;
}
#mydesk-callback.mydesk-callback .mydesk-title-callback{
  border-radius: 8px 8px 0px 0px;
  -moz-border-radius: 8px 8px 0px 0px;
  -webkit-border-radius: 8px 8px 0px 0px;
  background: #E3328B; /* Old browsers */
  background: -moz-linear-gradient(left,  #e3328b 0%, #E3328B 25%, #E3328B 100%); /* FF3.6+ */
  background: -webkit-gradient(linear, left top, right top, color-stop(0%,#e3328b), color-stop(25%,#E3328B), color-stop(100%,#E3328B)); /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(left,  #e3328b 0%,#E3328B 25%,#E3328B 100%); /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(left,  #e3328b 0%,#E3328B 25%,#E3328B 100%); /* Opera 11.10+ */
  background: -ms-linear-gradient(left,  #e3328b 0%,#E3328B 25%,#E3328B 100%); /* IE10+ */
  background: linear-gradient(to right,  #e3328b 0%,#E3328B 25%,#E3328B 100%); /* W3C */
  /*filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e3328b', endColorstr='#E3328B',GradientType=1 );*/ /* IE6-9 */
}
#mydesk-callback.mydesk-callback .mydesk-content-callback{
  max-width:68%;
}
#mydesk-callback.mydesk-callback  #closeCallback{
  background-color: #e3328b;
}
#mydesk.mydesk-template .watcheezyFooter a{
  color:#e3328b;
}
#mydesk.mydesk-template #watchFormABS .btn,
#mydesk.mydesk-template #watchFormABS .btn_back  {
background: #e3328b;
border-radius: 4px;
-webkit-border-radius: 4px;
color: #ffffff;
cursor: pointer;
border: 0px !important;
font-size: 1.0em;
font-weight: normal;
position: absolute;
left: 10px;
right: 10px;
bottom: 20px;
font-weight: normal;
}

#mydesk.mydesk-template #watchFormABS .btn:hover {
  background: rgba(227,50,139,1);
  text-decoration: none;
}

/*-----------------------------------*/
/*--- formulaire lead ---*/
/*-----------------------------------*/
#mydesk.mydesk-template #watchFormLEAD .reactivLEAD{
  border: 1px solid rgba(227,50,139,0.8);
}
#mydesk.mydesk-template #watchFormLEAD .reactivLEAD input,
#mydesk.mydesk-template #watchFormLEAD .reactivLEAD textarea{
  padding: 6px 2px 6px 2px;
  margin: 1px 0px 8px 0px;
  border: 1px solid #e3328b !important;
  width: calc(100% - 20px) !important;
}
#mydesk.mydesk-template #watchFormLEAD .contentFormLEAD{
  margin: 0px 0px 10px 0px;
}

#mydesk.mydesk-template #watchFormLEAD .btnSATIS{
  font-family: Arial;
  font-size: 1.2em;
  padding: 4px 16px 4px 16px;
  margin: 0px 10px 0px 10px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  text-indent: inherit;
  float: inherit;
  border: 0px solid !important;
  background: #e3328b;
  color:#ffffff;
  
}

/*-----------------------------------*/
/*--- formulaire prechat ---*/
/*-----------------------------------*/
#mydesk.mydesk-template #watchFormPRECHAT .reactivLEAD{
  border: 1px solid rgba(227,50,139,0.8);
}
#mydesk.mydesk-template #watchFormPRECHAT .reactivLEAD input,
#mydesk.mydesk-template #watchFormPRECHAT .reactivLEAD textarea{
  /*padding: 6px 2px 6px 2px;
  margin: 1px 0px 8px 0px;*/
  border: 1px solid #e3328b !important;
  width: calc(100% - 20px) !important;
}
#mydesk.mydesk-template #watchFormPRECHAT .contentFormLEAD{
  margin: 0px 0px 10px 0px;
}

#mydesk.mydesk-template #watchFormPRECHAT .btnSATIS{
  font-family: Arial;
  font-size: 1.2em;
  padding: 4px 16px 4px 16px;
  margin: 0px 10px 0px 10px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  text-indent: inherit;
  float: inherit;
  border: 0px solid !important;
  background: #e3328b;
  color:#ffffff;
  
}
/* Error formulaire préChat*/
input.errorInput{
  border: 1px solid red!important;
}
/*-----------------------------------*/
/*--- formulaire satisfaction ---*/
/*-----------------------------------*/
#mydesk.mydesk-template #watchFormSATIS fieldset,#mydesk.mydesk-template #watchFormLEAD fieldset,#mydesk.mydesk-template #watchFormPRECHAT fieldset{
  border: 1px solid rgba(227,50,139,0.8);
}
#mydesk.mydesk-template #watchFormSATIS input[type="radio"]:checked + label:before {
   background: #e3328b;
}
#mydesk.mydesk-template #watchFormLEAD input[type="radio"]:checked + label:before {
   background: #e3328b;
}
#mydesk.mydesk-template #watchFormPRECHAT input[type="radio"]:checked + label:before {
   background: #e3328b;
}
#mydesk.mydesk-template  #watchFormSATIS  .btnSATIS,#mydesk.mydesk-template  #watchFormLEAD  .btnLEAD,#mydesk.mydesk-template  #watchFormPRECHAT  .btnLEAD{
  background-color: #e3328b;
  color:#ffffff;
  border: 1px solid #e3328b !important;
}

/* Bouton liste agents */
#mydesk.mydesk-template  #contentListAgent .icone_listeAgent{
  background-color: #e3328b;
}
#mydesk.mydesk-template  #contentListAgent .icone_listeAgent:hover{
  background-color: rgba(227,50,139,0.8);
}
#mydesk.mydesk-template  #contentListAgent .listeAgentName{
  color: #e3328b;
}
#mydesk.mydesk-template #watchFormSATIS .titreSATIS,#mydesk.mydesk-template #watchFormLEAD .titreLEAD,#mydesk.mydesk-template #watchFormPRECHAT .titreLEAD{
  color: #e3328b;
}

/*------ FORMULAIRE CALLBACK ---*/
#mydesk-callback .form-callback{padding: 0px 0px 0px 10px; display:block;}
#mydesk-callback .submit-callback, #mydesk-callback .tel-callback {margin:0px 0px 10px 0px;}
#mydesk-callback .form-control, #mydesk-callback .select2-search input[type=text] {
  height: 33px;
  width: 60%;
  padding: 0px 0px 0px 8px;
  margin: 0px 8px 0px 0px;
  font-size: 1.0em;
  color: #34495e;
  border: 1px solid #bdc3c7;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  -o-border-radius: 6px;
  box-shadow: none;
  -webkit-transition: border .25s linear,color .25s linear,background-color .25s linear;
  transition: border .25s linear,color .25s linear,background-color .25s linear;
}
#mydesk-callback .btn-callback {
  padding: 6px 20px 6px 20px;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -o-border-radius: 4px;
  cursor: pointer;
  border: 0px !important;
  font-size: 1.0em;
  font-weight: normal;
}

/*--- cnil ---*/
.watcheezyCnil{
  font-size: 0.6em;
  background-color: rgba(1,1,1,0.15);
  padding: 4px 4px 4px 4px !important;
  margin: 4px !important;
  border-radius: 1px;
  -webkit-border-radius: 1px;
  -moz-border-radius: 1px;
  -o-border-radius: 1px;
  position: relative;
  /*bottom: -62px;*/
}
#mydesk.desk_Bottom .watcheezyCnil{bottom: 0px;}
.txtCnil{display: block;width: 96%;}
.watcheezyCloseCnil{float:right;font-size:1.4em;cursor:pointer; position: absolute; bottom: 21px; right:9px;}

/*---------------------------------------------*/
/*--- WATCHBOX reconnexion socket ---*/
/*---------------------------------------------*/
.wz_connexionSocket{
  text-align: center;
  position: absolute;
  top: 92px;
  width: 100%;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: rgba(255,255,255,0.9);
  height: calc(422px - 56px);
  z-index: 10;
}
#mydesk.desk_Right .wz_connexionSocket, #mydesk.desk_Left .wz_connexionSocket{
  height: calc(422px - 58px);
}
.wz_titleReconnexion {
  text-align: center;
  padding-bottom: 14px !important;
  padding-top: 20px !important;
  font-size: 1.3em;
}
.wz_contentReconnexion {
  text-align: center;
  padding: 10px !important;
}
.wz_contentP{
  margin:0px 0px 8px 0px !important;
}
.wz_btsConnexion {
  padding: 8px 0px 8px 0px;
}
.wz-btReconnexion {
  margin: 2px 8px;
  padding: 4px 16px 4px 16px;
  border-radius: 2px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -o-border-radius: 2px;
  cursor:pointer;
}
.wz-btReconnexionNo {
  background-color: #dddddd;
  margin: 2px 8px;
  padding: 4px 16px 4px 16px;
  border-radius: 2px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -o-border-radius: 2px;
  cursor:pointer;
  min-height: 2em !important;
  margin-bottom: 20px;
}
.wz-btReconnexionNo:hover {
  background-color: #eeeeee;
}
#mydesk.mydesk-template  .wz-btReconnexion{
  background-color: #e3328b;
  text-transform: uppercase;
  transition : background-color 500ms ease-out;
  color:#ffffff;
  border: 0px solid #e3328b !important;
  min-height: 2em !important;
  margin-bottom: 20px;
}
#mydesk.mydesk-template  .wz-btReconnexion:hover{
  background-color: #9EBD3B;
  text-transform: uppercase;
  transition : background-color 500ms ease-out;
  color:#ffffff;
  border: 0px solid #e3328b !important;
}

#mydesk.desactive div#dialogReconnexion{
  display:none;
}
/*---------------------------------------------*/
/*--- WATCHBOX "offline" ou "online" ---*/
/*---------------------------------------------*/
#mydesk.wb_online #watcheBox_offline{display:none;}
#mydesk.open.wb_offline #watcheBox_offline,
#mydesk.tf_open.wb_offline #watcheBox_offline{display:block;}
#mydesk.desactive.wb_offline #watcheBox_offline{display:none;}
#watcheBox_offline{
  width: 100%; 
  z-index: 100;  
  position: absolute; 
  background-color: rgba(255,255,255,0.9);
}
#watcheBoxContentOffline{
  display: block; 
  height: calc(422px + 0px);
  height: moz-calc(422px + 0px);
  text-align: center;
  color: #000 !important;
  margin: 20px !important;
  font-weight: bold;
  line-height: 1.2em;
  font-size:1em;
  position:relative;
  top:80px;
}
#watcheBoxContentOffline .title_error{
  margin-bottom:10px;
  font-size:1.2em;
}
#watcheBoxContentOffline .content_error{
  font-weight:400;
}

/*--- animation connexion ---*/
@-webkit-keyframes arc {
  0% { border-width: 20px;}
  25% { border-width: 3px;}
  50% {-webkit-transform: rotate(27deg); transform: rotate(27deg); border-width: 20px;}
  75% {border-width: 3px;}
  100% {border-width: 20px;}
}
@keyframes arc {
  0% {border-width: 20px;}
  25% {border-width: 3px;}
  50% {-webkit-transform: rotate(27deg); transform: rotate(27deg); border-width: 20px;}
  75% {border-width: 3px;}
  100% {border-width: 20px;}
}
.cube-2d {
  background-color: #000;
}
.arc {
  position: absolute;
  top: 10px;
  left: calc(50% - 171.5px);
  width: 343px;
  height: 70px;
  overflow: hidden;
}

.arc-cube {
  -moz-box-sizing: border-box !important;
  -webkit-box-sizing: border-box !important; 
  box-sizing: border-box !important; 
  position: absolute;
  bottom: -60px;
  left: calc(50% - 60px);
  margin-left: 0px;
  width: 120px;
  height: 120px;
  border-style: solid;
  border-top-color: transparent;
  border-right-color: #95c247;
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  -webkit-animation: arc 2s ease-in-out infinite;
          animation: arc 2s ease-in-out infinite;
  -webkit-transform: rotate(-200deg);
      -ms-transform: rotate(-200deg);
          transform: rotate(-200deg);
}

/* Si le push bleu est une image*/
#pushPicture{
  position :fixed;
  left:40%;
  top:30%;
  z-index:inherit!important;
}

#mydesk-push.pushImg{
  width:0px;
}

#mydesk-push.pushImg #closePush{
  width:0px;
}

#mydesk-push.pushImg #standard_push{
  display:none;
}

#mydesk-push.pushImg.push_Bottom:before
{
  border-left:none;
  border-top:none;
}

/* Si l'onglet rétracté est une image*/
#mydesk.outerIsImg.desactive,
#mydesk.outerIsImg.tf_desactive

{
  box-shadow:none;
  -webkit-box-shadow:none;
}
#mydesk.outerIsImg.desactive #mydesk-outer,
#mydesk.outerIsImg.tf_desactive #mydesk-outer
{
  height:0px;
}
#mydesk.outerIsImg.desactive #mydesk_openMydesk,
#mydesk.outerIsImg.tf_desactive #mydesk_openMydesk
{
  display:none;
}

#mydesk.outerIsImg.open #mydesk-outer,
#mydesk.outerIsImg.tf_open #mydesk-outer
{
  height:37px;
}

#mydesk.outerIsImg #mydesk_openCallback
{
  display:none;
}

/*---------------------- icones ---------------------------*/
/*  iphone */
.iconeWatcheezyIphone {
  font-size: 12px;
    border-left: 2px solid #e3328b;
    border-right: 2px solid #e3328b;
    height: 20px;
    position: relative;
    width: 17px;
    left: 45px;
    top: 7px;
}
.iphoneSendNotification{ width: 17px !important; height: 24px !important;}
.iconeWatcheezyIphone:after,
.iconeWatcheezyIphone:before {
  content: '';
  left: -.2em;
  position: absolute;
  width: 1.8em;
}
.iconeWatcheezyIphone:after {
  background-color: #e3328b;
  border-radius: .25em .25em 0 0;
  height: .4em;
  top: -.4em;
}
.iconeWatcheezyIphone:before {
  background-image: -webkit-radial-gradient(circle, transparent 12%, #e3328b 12%);
  background-image: -moz-radial-gradient(circle, transparent 12%, #e3328b 12%);
  background-image: -o-radial-gradient(circle, transparent 12%, #e3328b 12%);
  background-image: -ms-radial-gradient(circle, transparent 12%, #e3328b 12%);
  background-image: radial-gradient(circle, transparent 12%, #e3328b 12%);
  border-radius: 0 0 .25em .25em;
  bottom: -.7em;
  height: .7em;
}

/*  notification  */
.notificationIphone{ height:0px; width:0px; position:relative; top:0px; left:40px;}
.notificationIphone:before{content:''; height:7px; width:15px; display:block; position:absolute; top:13px; left:8px; z-index:1; line-height:6px; background:#E3328B; border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px; color:#fff; text-align:center;}
.mobileListeAgent{width:343px;  height: 37px; cursor: pointer; position: relative; left: -38px; z-index:10;}
.mobileListeAgent:hover{background-color:rgba(0,0,0,0.05);}
#avatarNotification{
    max-width: 37px;
    max-height: 37px;
    position: absolute;
    left: calc(50% - 40px);
  left: moz-calc(50% - 40px);
    top: 12px;
}
#avatarNotification img{max-width: 100%; height: auto;}

/*  formulaire d'envois d'une notification  */  
#contentListAgent .formNotification {position:absolute; top:0px; width:100%; background-color:#eee; z-index:100; height: calc(422px + 55px); height: moz-calc(422px + 55px);}
#contentNotificationAgent{background-color: #fff; margin: 0px 6px 0px 6px !important;}
#iconeNotificationAgent{
  margin:0px 0px 10px 0px !important;
  height:40px;
  left: calc(50% - 44px);
  left: moz-calc(50% - 44px);
    position: relative;
  top:10px;
}
#WatchBox-NotificationMessage{
  position: relative;
    width: calc(100% - 66px);
    margin: 10px 0px 10px 10px !important;
    height: 34px;
    padding: 2px !important;
}
#txt-NotificationMessage{
  position: relative;
    text-align: center;
  margin-top: 20px !important;
  padding: 8px 8px 6px 8px !important;
}
#WatchBox-notificationSend{
  position: relative;
    float: right;
    top: 10px;
    right: 10px;
    background-color: rgba(222,188,148,0.4);
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-bottom-right-radius: 3px;
}
#WatchBox-notificationSend:hover{
  background-color:rgba(227,50,139,0.5);
}
#WatchBox-notificationSend.inactif{
  background-color: #b9b9b9;
  cursor: default;
}
#iconeNotificationClose {
  width: 30px;
    height: 30px;
    float: left;
  cursor:pointer;
}
#iconeNotificationClose:hover {background-color:rgba(255,255,255,0.3);}
.icone_closeNotification{
    background-position: -280px -95px;
    background-repeat: no-repeat;
}
#RetourNotificationWatcheezy {
    position: absolute;
    top: 60px;
    height: 77%;
    z-index: 100;
    padding: 14px 14px 0px 14px !important;
    text-align: center;
    background-color: #eee;
    margin: 0px 6px 0px 6px !important;
}
/*--------------------------------------------------
 LOADING WATCHEEZY
----------------------------------------------------*/
.watcheezyCanvasLoader{
  position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    z-index: 10000;
    background-color: #fff;
  padding: 20px !important;
    border-radius: 6px;
  moz-border-radius: 6px;
  top: moz-calc(50% - 50px);
    left: moz-calc(50% - 50px);
}

/*--------------------------------------------------
 CHATBOX CUSTOM DEPLOYE
----------------------------------------------------*/
#mydesk.customCbox 
{
  background:none;
  box-shadow:none;
  -webkit-box-shadow:none;
  -moz-box-shadow:none;
}

#mydesk.customCbox.open #mydesk-outer,
#mydesk.customCbox.tf_open #mydesk-outer
{
  display:none;
}
  
#mydesk.customCbox.open #WatchBox-titleBar,
#mydesk.customCbox.tf_open #WatchBox-titleBar
{
  display:none;
} 

#mydesk.open.desk_Bottom.customCbox #WatchBox-MessageWrapper,  
#mydesk.tf_open.desk_Bottom.customCbox #WatchBox-MessageWrapper{
  bottom:-35px;
}
#mydesk.open.desk_Bottom.iconsOff.customCbox #WatchBox-conversation, #mydesk.tf_open.desk_Bottom.iconsOff.customCbox #WatchBox-conversation,
#mydesk.tf_open.desk_Bottom.iconsOff.customCbox #WatchBox-conversation{
  height: inherit!important;
  margin-top:97px;
  max-height:222px;
  width: 84%;
}
#mydesk.open.desk_Bottom.iconsOff.customCbox #WatchBox-contentChat, #mydesk.tf_open.desk_Bottom.iconsOff.customCbox #WatchBox-contentChat,
#mydesk.tf_open.desk_Bottom.iconsOff.customCbox #WatchBox-contentChat{ 
  height: calc(100% - 76px);
  padding-left: 18px;
}

#mydesk.open.desk_Bottom.iconsOff.customCbox #watcheezyFooter,
#mydesk.tf_open.desk_Bottom.iconsOff.customCbox #watcheezyFooter{
  display:none;
}

#mydesk.open.desk_Bottom.iconsOff.customCbox #contentDesk,
#mydesk.tf_open.desk_Bottom.iconsOff.customCbox #contentDesk{
  background:inherit;
}
#mydesk.open.desk_Bottom.iconsOff.customCbox #WatchBox-MessageWrapper, #mydesk.tf_open.desk_Bottom.iconsOff.customCbox #WatchBox-conversation,
#mydesk.tf_open.desk_Bottom.iconsOff.customCbox #WatchBox-MessageWrapper{
  width: 85%;
}
#mydesk.open.desk_Bottom.iconsOff.customCbox .dates-messages-2,
#mydesk.tf_open.desk_Bottom.iconsOff.customCbox .dates-messages-2{
  width: 99%!important;
}
#mydesk.open.desk_Bottom.iconsOff.customCbox .dates-messages,
#mydesk.tf_open.desk_Bottom.iconsOff.customCbox .dates-messages{
  width: 99%!important;
  margin: 4px 0px 0 2px;
  position:relative!important;
}
#mydesk.open.desk_Bottom.iconsOff.customCbox #customClickToClose,
#mydesk.tf_open.desk_Bottom.iconsOff.customCbox #customClickToClose{
    width: 27px;
  height:27px;
    position: absolute;
    /*top: 50px; // gilles.png*/
    top: 1px;
    /*right: 17px;  // gilles.png*/
    right: 1px;    
  z-index: 3;
}
#mydesk.open.desk_Bottom.iconsOff.customCbox #customClickToClose:hover,
#mydesk.tf_open.desk_Bottom.iconsOff.customCbox #customClickToClose:hover{
  cursor:pointer;
}
#mydesk.open.desk_Bottom.iconsOff.customCbox .wz-date-sticky,
#mydesk.tf_open.desk_Bottom.iconsOff.customCbox .wz-date-sticky
{
  display:none;
}
#mydesk.open.desk_Bottom.iconsOff.customCbox #customClickToThirdState,
#mydesk.tf_open.desk_Bottom.iconsOff.customCbox #customClickToThirdState {
    width: 27px;
    height: 27px;
    position: absolute;
    top: 21px;
    right: 32px;
    z-index: 3;
}
#mydesk.open.desk_Bottom.iconsOff.customCbox #customClickToThirdState:hover,
#mydesk.tf_open.desk_Bottom.iconsOff.customCbox #customClickToThirdState:hover{
  cursor:pointer;
}

/*--------------------------------------------------
 CHATBOX LOADING
----------------------------------------------------*/
.positioning {
  margin: 50px auto !important;
  position: relative;
}

.loader-spinner {
  width: 72px;
  height: 72px;
}
.loader-spinner div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.loader-spinner div:before {
  display: block;
  width: 15%;
  height: 15%;
  margin: 0 auto;
  content: "";
  border-radius: 100%;
  background-color: #E3328B;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-animation: spinner 1.2s infinite ease-in-out both;
          animation: spinner 1.2s infinite ease-in-out both;
}
.loader-spinner div:nth-child(2) {
  -webkit-transform: rotate(30deg);
          transform: rotate(30deg);
}
.loader-spinner div:nth-child(2):before {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s;
}
.loader-spinner div:nth-child(3) {
  -webkit-transform: rotate(60deg);
          transform: rotate(60deg);
}
.loader-spinner div:nth-child(3):before {
  -webkit-animation-delay: -1.0s;
          animation-delay: -1.0s;
}
.loader-spinner div:nth-child(4) {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}
.loader-spinner div:nth-child(4):before {
  -webkit-animation-delay: -.9s;
          animation-delay: -.9s;
}
.loader-spinner div:nth-child(5) {
  -webkit-transform: rotate(120deg);
          transform: rotate(120deg);
}
.loader-spinner div:nth-child(5):before {
  -webkit-animation-delay: -.8s;
          animation-delay: -.8s;
}
.loader-spinner div:nth-child(6) {
  -webkit-transform: rotate(150deg);
          transform: rotate(150deg);
}
.loader-spinner div:nth-child(6):before {
  -webkit-animation-delay: -.7s;
          animation-delay: -.7s;
}
.loader-spinner div:nth-child(7) {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}
.loader-spinner div:nth-child(7):before {
  -webkit-animation-delay: -.6s;
          animation-delay: -.6s;
}
.loader-spinner div:nth-child(8) {
  -webkit-transform: rotate(210deg);
          transform: rotate(210deg);
}
.loader-spinner div:nth-child(8):before {
  -webkit-animation-delay: -.5s;
          animation-delay: -.5s;
}
.loader-spinner div:nth-child(9) {
  -webkit-transform: rotate(240deg);
          transform: rotate(240deg);
}
.loader-spinner div:nth-child(9):before {
  -webkit-animation-delay: -.4s;
          animation-delay: -.4s;
}
.loader-spinner div:nth-child(10) {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}
.loader-spinner div:nth-child(10):before {
  -webkit-animation-delay: -.3s;
          animation-delay: -.3s;
}
.loader-spinner div:nth-child(11) {
  -webkit-transform: rotate(300deg);
          transform: rotate(300deg);
}
.loader-spinner div:nth-child(11):before {
  -webkit-animation-delay: -.2s;
          animation-delay: -.2s;
}
.loader-spinner div:nth-child(12) {
  -webkit-transform: rotate(330deg);
          transform: rotate(330deg);
}
.loader-spinner div:nth-child(12):before {
  -webkit-animation-delay: -.1s;
          animation-delay: -.1s;
}

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: scale(0, 0);
            transform: scale(0, 0);
  }
  10% {
    -webkit-transform: scale(0, 0);
            transform: scale(0, 0);
  }
  50% {
    -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
  }
  90% {
    -webkit-transform: scale(0, 0);
            transform: scale(0, 0);
  }
  100% {
    -webkit-transform: scale(0, 0);
            transform: scale(0, 0);
  }
}

@keyframes spinner {
  0% {
    -webkit-transform: scale(0, 0);
            transform: scale(0, 0);
  }
  10% {
    -webkit-transform: scale(0, 0);
            transform: scale(0, 0);
  }
  50% {
    -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
  }
  90% {
    -webkit-transform: scale(0, 0);
            transform: scale(0, 0);
  }
  100% {
    -webkit-transform: scale(0, 0);
            transform: scale(0, 0);
  }
}

.WZcontentLoading {
    position: absolute;
    top: 0px;
    height: 100%;
    width: 100%;
    background-color: #fff;
}

/*--------------------------------------------------
 CHATBOX CUSTOM RETRACTE
----------------------------------------------------*/
#mydesk.open.desk_Bottom.iconsOff.customCbox #watchFormABS,
#mydesk.tf_open.desk_Bottom.iconsOff.customCbox #watchFormABS{
  height:434px!important;
}
#mydesk.open.desk_Bottom.iconsOff.customCbox .contentFormABS,
#mydesk.tf_open.desk_Bottom.iconsOff.customCbox .contentFormABS{
  margin: 101px 0 0 15px;
  width: 94%;
}
#mydesk.mydesk-template.customCbox #watchFormABS .btn
{
  margin-top: 10px;
    display: inline-block;
}

/*-----------------------------------------------*/
/*------ Badge module watcheezy ---*/
/*-----------------------------------------------*/
@keyframes newmessage{
  0% {
    transform:  translate(0px,0px)  ;
  }
  15% {
    transform:  translate(0px,-10px)  ;
  }
  30% {
    transform:  translate(0px,0px)  ;
  }
  
  100% {
    transform:  translate(0px,0px)  ;
  }
  }
}

@-moz-keyframes newmessage{
  
  0% {
    -moz-transform:  translate(0px,0px)  ;
  }
  15% {
    -moz-transform:  translate(0px,-10px)  ;
  }
  30% {
    -moz-transform:  translate(0px,0px)  ;
  }
  
  100% {
    -moz-transform:  translate(0px,0px)  ;
  }
}

@-webkit-keyframes newmessage {
  
   0% {
    -webkit-transform:  translate(0px,0px)  ;
  }
  15% {
    -webkit-transform:  translate(0px,-10px)  ;
  }
  30% {
    -webkit-transform:  translate(0px,0px)  ;
  }
  
  100% {
    -webkit-transform:  translate(0px,0px)  ;
  }
}

@-o-keyframes newmessage {
 
   0% {
    -o-transform:  translate(0px,0px)  ;
  }
  15% {
    -o-transform:  translate(0px,-10px)  ;
  }
  30% {
    -o-transform:  translate(0px,0px)  ;
  }
  
  100% {
    -o-transform:  translate(0px,0px)  ;
  }
}

@-ms-keyframes newmessage {
  
   0% {
    -ms-transform:  translate(0px,0px)  ;
  }
  15% {
    -ms-transform:  translate(0px,-10px)  ;
  }
  30% {
    -ms-transform:  translate(0px,0px)  ;
  }
  
  100% {
    -ms-transform:  translate(0px,0px)  ;
  }
}

.wz-badge{
  z-index:100;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: absolute;
  font-weight: 500;
  font-size: 12px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 0px solid #fff;
  background-color:rgb(255, 0, 0)!important;
  color: rgb(255, 0, 0);
  animation: newmessage linear 1s;
  animation-iteration-count: 5;
  transform-origin: 50% 50%;
  -webkit-animation: newmessage linear 1s;
  -webkit-animation-iteration-count: 5;
  -webkit-transform-origin: 50% 50%;
  -moz-animation: newmessage linear 1s;
  -moz-animation-iteration-count: 5;
  -moz-transform-origin: 50% 50%;
  -o-animation: newmessage linear 1s;
  -o-animation-iteration-count: 5;
  -o-transform-origin: 50% 50%;
  -ms-animation: newmessage linear 1s;
  -ms-animation-iteration-count: 5;
  -ms-transform-origin: 50% 50%;
}

.desk_Bottom .wz-badge{
    bottom: 24px;
    right: calc(343px - 11px);
}
.desk_Bottom.position_bottom_left .wz-badge{
  bottom: 24px;
    right: -14px;
}

.desk_Right .wz-badge{
  bottom: inherit;
  top:-14px;
    right: 26px;
}

.desk_Left .wz-badge{
  bottom: inherit;
  top:-14px;
    right: -14px;
}

.wz-badge.inactif{display:none;}



/*--------------------------------------------------
 POUR ECRAN UNIQUEMENT 375px de large
----------------------------------------------------*/
@media only screen and ( max-device-width: 375px ){
  #vwatch, #mydesk {
    color: #000;
    background: transparent;
  }
  #mydesk {
    clear: both;
    position: fixed;
    display: block;
    z-index: 99999;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  #mydesk.desactive,
  #mydesk.tf_desactive {
    -webkit-box-shadow: inherit;
    -moz-box-shadow: inherit;
  }
  #mydesk.open,
  #mydesk.tf_open{
    -webkit-box-shadow: 0px 3px 18px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 3px 18px rgba(0,0,0,0.2);
  }
  /* à droite */
  #mydesk.desactive.desk_Right { bottom: 10px; right: 22px; top:inherit;}
  /* à gauche */
  #mydesk.desactive.desk_Left { bottom: 10px; right: 22px; left:inherit; top:inherit;}
  
  #mydesk.desactive.mydesk-template.desk_Left #mydesk-outer,
  #mydesk.desactive.mydesk-template.desk_Right #mydesk-outer,
  #mydesk.desactive.mydesk-template.desk_Bottom #mydesk-outer{
    background: transparent; /* Old browsers */
  }
  #mydesk.open.position_bottom_middle,
  #mydesk.open.position_bottom_left,
  #mydesk.open.position_bottom_right,
  #mydesk.tf_open.position_bottom_middle,
  #mydesk.tf_open.position_bottom_left,
  #mydesk.tf_open.position_bottom_right  {
    right: inherit;
    left: calc(50% - 171.5px);
  }
  #mydesk.desactive .mydesk_titleTab, #mydesk.tf_desactive .mydesk_titleTab{display:none !important;}
  #mydesk.desactive.desk_Right #mydesk-outer,
  #mydesk.desactive.desk_Left #mydesk-outer,
  #mydesk.tf_desactive.desk_Right #mydesk-outer,
  #mydesk.tf_desactive.desk_Left #mydesk-outer{
    width: 45px;
    height: 45px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  #mydesk.desactive .icone_openMydesk, #mydesk.tf_desactive .icone_openMydesk {background: #E3328B; /* Old browsers */}
  #mydesk.desactive #mydesk_openCallback.actif, #mydesk.tf_desactive #mydesk_openCallback.actif { display: none; }
  /*---------------------------------------------*/
  /*--- icone chat en forme de bulle ---*/
  /*---------------------------------------------*/
  #mydesk.desactive.desk_Right #mydesk_openMydesk,
  #mydesk.desactive.desk_Left #mydesk_openMydesk,
  #mydesk.desactive.desk_Bottom #mydesk_openMydesk,
  #mydesk.tf_desactive.desk_Right #mydesk_openMydesk,
  #mydesk.tf_desactive.desk_Left #mydesk_openMydesk,
  #mydesk.tf_desactive.desk_Bottom #mydesk_openMydesk{
    color: #fff;
    border-radius: 17px;
    -moz-border-radius: 17px;
    -webkit-border-radius: 17px;
    background: #E3328B;
    width: 40px;
    height: 22px;
    text-align: right;
    font-size: 1em;
    padding-right: 13px;
    padding-top: 9px;
    padding-left: 0px;
    margin-right: 10px;
    margin-bottom: 13px;
  }
  #mydesk.desactive.desk_Right #mydesk_openMydesk:before,
  #mydesk.desactive.desk_Left #mydesk_openMydesk:before,
  #mydesk.tf_desactive.desk_Right #mydesk_openMydesk:before,
  #mydesk.tf_desactive.desk_Left #mydesk_openMydesk:before{
    content: "";
    position: absolute;
    right: 15px;
    top: 31px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-top: 8px solid #E3328B;
    border-right: 0px solid transparent;
  }
  #mydesk.desactive.desk_Bottom #mydesk_openMydesk:before,
  #mydesk.tf_desactive.desk_Bottom #mydesk_openMydesk:before{
    content: "";
    position: absolute;
    right: 31px;
    bottom: 6px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-top: 8px solid #E3328B;
    border-right: 0px solid transparent;
  }
  #mydesk.desactive.desk_Right #mydesk_openMydesk:after,
  #mydesk.desactive.desk_Left #mydesk_openMydesk:after,
  #mydesk.desactive.desk_Bottom #mydesk_openMydesk:after,
  #mydesk.tf_desactive.desk_Right #mydesk_openMydesk:after,
  #mydesk.tf_desactive.desk_Left #mydesk_openMydesk:after,
  #mydesk.tf_desactive.desk_Bottom #mydesk_openMydesk:after{
    content: "Chat";
  }

  #mydesk.desactive.desk_Bottom #mydesk-outer, #mydesk.tf_desactive.desk_Bottom #mydesk-outer  {width: 60px;}
  #mydesk.desactive.desk_Bottom, #mydesk.tf_desactive.desk_Bottom {width: 70px;}
  #mydesk.desactive.position_bottom_left, #mydesk.desactive.position_bottom_middle, #mydesk.tf_desactive.position_bottom_left, #mydesk.tf_desactive.position_bottom_middle {right: 0px; left: inherit; bottom: 6px;}
  #mydesk.desactive.position_bottom_right {bottom: 6px;}
  
  /*--- PUSH ---*/
  #mydesk-push.push_Bottom,
  #mydesk-push.push_Right,
  #mydesk-push.push_Center,
  #mydesk-push.push_Left{
    bottom: 70px;
    top:inherit;
    visibility:hidden;
  }
  #mydesk-push.push_Left,
  #mydesk-push.push_Bottom.position_bottom_left,
  #mydesk-push.push_Center,
  #mydesk-push.push_Bottom.position_bottom_middle{
    right: 2px;
    left:inherit;
    margin-left:4px;
  }
  #mydesk-push.push_Right,
  #mydesk-push.push_Center,
  #mydesk-push.push_Bottom.position_bottom_right{
    right: 2px;
    margin-right:4px;
  }
  #mydesk-push.push_Bottom:before,
  #mydesk-push.push_Right:before,
  #mydesk-push.push_Center,
  #mydesk-push.push_Left:before{
    right: 35px;
    top: 100%;
    border-left: 12px solid transparent !important;
    border-top: 16px solid;
    border-right: 12px solid transparent !important;
    border-bottom: none !important;
    /*border-top-color:inherit !important;*/
  }
  #mydesk-push{
    width: 290px;
    max-width: 290px;
  }
  .mydesk-title-push{
    font-size:1.4em;
    width: 282px;
    max-width: 282px;
    padding:8px 4px 8px 4px !important;
    line-height:inherit;
  }
  .mydesk-content-push{
    padding:4px 4px 4px 4px !important;
    max-width:200px;
  }
  #mydesk-push #closePush{
    border-radius: 18px;
    -moz-border-radius: 18px;
    -webkit-border-radius: 18px;
    width: 35px;
    height: 35px;
    background-position: -337px -63px;  
  }
  #mydesk-push {
    min-height: 160px;
  }
  
  /*---- BOUTTON OUVRE CALLBACK ---*/
  #mydesk.desk_Bottom #mydesk_openCallback{
    width:40px;
    height:37px;
    float:right;
  }

  /*--- CALLBACK ---*/
  #mydesk-callback.callback_Bottom,
  #mydesk-callback.callback_Right,
  #mydesk-callback.callback_Center,
  #mydesk-callback.callback_Left{
    bottom: 70px;
    top:inherit;
  }
  #mydesk-callback.callback_Left,
  #mydesk-callback.callback_Bottom.position_bottom_left,
  #mydesk-callback.callback_Center,
  #mydesk-callback.callback_Bottom.position_bottom_middle{
    right: 2px;
    left:inherit;
    margin-left:4px;
  }
  #mydesk-callback.callback_Right,
  #mydesk-callback.callback_Center,
  #mydesk-callback.callback_Bottom.position_bottom_right{
    right: 2px;
    margin-right:4px;
  }
  #mydesk-callback.callback_Bottom:before,
  #mydesk-callback.callback_Right:before,
  #mydesk-callback.callback_Center,
  #mydesk-callback.callback_Left:before {
    right: 35px;
    top: 100%;
    border-left: 12px solid transparent !important;
    border-top: 16px solid;
    border-right: 12px solid transparent !important;
    border-bottom: none !important;
    /*border-top-color:inherit !important;*/
  }
  #mydesk-callback{
    width: 290px;
    max-width: 290px;
  }
  .mydesk-title-callback{
    font-size:1.4em;
    width: 282px;
    max-width: 282px;
    padding:8px 4px 8px 4px !important;
    line-height:inherit;
  }
  .mydesk-content-callback{
    padding:4px 4px 4px 4px !important;
    max-width:200px;
  }
  #mydesk-callback #closeCallback{
    border-radius: 18px;
    -moz-border-radius: 18px;
    -webkit-border-radius: 18px;
    width: 35px;
    height: 35px;
    background-position: -337px -63px;  
  }
  #mydesk-callback {
    min-height: 160px;
  }
}

/*--------------------------------------------------
 POUR ECRAN UNIQUEMENT 320px de large
----------------------------------------------------*/
@media only screen and ( max-device-width: 320px ){
  #vwatch, #mydesk {
    color: #000;
    background: transparent;
  }
  #mydesk {
    clear: both;
    position: fixed;
    display: block;
    z-index: 99999;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  #mydesk.open.desk_Right,
  #mydesk.open.desk_Left,
  #mydesk.open.desk_Bottom,
  #mydesk.tf_open.desk_Right,
  #mydesk.tf_open.desk_Left,
  #mydesk.tf_open.desk_Bottom{
    top:inherit;
    bottom: 0%;
    left: 0%;
    width: 100%;
    height: 262px;
    max-height: inherit;
  }

  @media only screen and ( max-device-height: 320px ){
    #mydesk.open.desk_Right,
    #mydesk.open.desk_Left,
	#mydesk.open.desk_Bottom,
	#mydesk.tf_open.desk_Right,
    #mydesk.tf_open.desk_Left,
    #mydesk.tf_open.desk_Bottom{
      width: 343px;
      max-height: 262px;
    }
  }

  #mydesk.open, #mydesk.tf_open{
    -webkit-box-shadow: 0px 3px 18px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 3px 18px rgba(0,0,0,0.2);
  }
  #mydesk.desactive.desk_Right #mydesk-outer,
  #mydesk.desactive.desk_Left #mydesk-outer,
  #mydesk.tf_desactive.desk_Right #mydesk-outer,
  #mydesk.tf_desactive.desk_Left #mydesk-outer {
    /* width: 38px; */
    height: 37px;
    -webkit-box-shadow: 0px 3px 7px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 3px 7px rgba(0,0,0,0.3);
    box-shadow: 0px 3px 7px rgba(0,0,0,0.3);
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  #mydesk.desactive.desk_Bottom #mydesk-outer,
  #mydesk.tf_desactive.desk_Bottom #mydesk-outer   {
    width: 60px;
    height: 37px;
    -webkit-box-shadow:inherit;
    -moz-box-shadow:inherit;
    box-shadow:inherit;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  
  #mydesk.open.desk_Right #mydesk-outer,
  #mydesk.open.desk_Left #mydesk-outer,
  #mydesk.tf_open.desk_Right #mydesk-outer,
  #mydesk.tf_open.desk_Left #mydesk-outer   {
    height: 262px;
    max-height:inherit;
  }
  
  #mydesk.open.desk_Right.videoRtcClose #contentDesk,
  #mydesk.open.desk_Left.videoRtcClose #contentDesk,
  #mydesk.tf_open.desk_Right.videoRtcClose #contentDesk,
  #mydesk.tf_open.desk_Left.videoRtcClose #contentDesk {
    height:262px;
    max-height:inherit;
  }

  #mydesk.open.desk_Right #mydesk_openMydesk,
  #mydesk.open.desk_Left #mydesk_openMydesk,
  #mydesk.open.desk_Bottom #mydesk_openMydesk,
  #mydesk.tf_open.desk_Right #mydesk_openMydesk,
  #mydesk.tf_open.desk_Left #mydesk_openMydesk,
  #mydesk.tf_open.desk_Bottom #mydesk_openMydesk {

  }
  #mydesk.open.position_bottom_middle,
  #mydesk.open.position_bottom_left,
  #mydesk.open.position_bottom_right,
  #mydesk.tf_open.position_bottom_middle,
  #mydesk.tf_open.position_bottom_left,
  #mydesk.tf_open.position_bottom_right {
    right: inherit;
    left: 0px;
  }
  #mydesk.desactive.position_bottom_middle,
  #mydesk.desactive.position_bottom_left,
  #mydesk.desactive.position_bottom_right,
  #mydesk.tf_desactive.position_bottom_middle,
  #mydesk.tf_desactive.position_bottom_left,
  #mydesk.tf_desactive.position_bottom_right {
    right: 0px;
    left: inherit;
    width: inherit;
  }
  #mydesk.desactive.desk_Bottom, 
  #mydesk.tf_desactive.desk_Bottom {
    bottom: 0%;
    width: 70px;
  }

  #mydesk.desk_Left #communication.watchComDisplay,
  #mydesk.desk_Right #communication.watchComDisplay {
    display: block;
    width: calc(320px - 38px);
    width: -webkit-calc(320px - 38px);
    width: -moz-calc(320px - 38px);
  }

  #mydesk.desactive,
  #mydesk.tf_desactive  {
    -webkit-box-shadow: inherit;
    -moz-box-shadow: inherit;
  }
  /* à droite */
  #mydesk.desactive.desk_Right,
  #mydesk.tf_desactive.desk_Right { bottom: 10px; right: 22px; top:inherit;}
  /* à gauche */
  #mydesk.desactive.desk_Left,
  #mydesk.tf_desactive.desk_Left { bottom: 10px; right: 22px; left:inherit; top:inherit;}
  
  #mydesk.desactive.mydesk-template.desk_Left #mydesk-outer,
  #mydesk.desactive.mydesk-template.desk_Right #mydesk-outer,
  #mydesk.desactive.mydesk-template.desk_Bottom #mydesk-outer,
  #mydesk.tf_desactive.mydesk-template.desk_Left #mydesk-outer,
  #mydesk.tf_desactive.mydesk-template.desk_Right #mydesk-outer,
  #mydesk.tf_desactive.mydesk-template.desk_Bottom #mydesk-outer{
    background: transparent; /* Old browsers */
  }
  
  #mydesk.desactive .mydesk_titleTab,
  #mydesk.tf_desactive .mydesk_titleTab{display:none;}
  #mydesk.open.desk_Bottom #mydesk-outer,
  #mydesk.tf_open.desk_Bottom #mydesk-outer,
  #mydesk.desk_Bottom #communication.watchComDisplay  {
    width: 100% !important;
  }
  #mydesk.open.desk_Right.iconsOff #contentWatchBox,
  #mydesk.open.desk_Left.iconsOff #contentWatchBox,
  #mydesk.tf_open.desk_Right.iconsOff #contentWatchBox,
  #mydesk.tf_open.desk_Left.iconsOff #contentWatchBox{
    height: calc(260px - 10px);
    height: moz-calc(260px - 10px);
  }
  #mydesk.open.desk_Right.iconsOff #WatchBox-conversation,
  #mydesk.open.desk_Left.iconsOff #WatchBox-conversation,
  #mydesk.tf_open.desk_Right.iconsOff #WatchBox-conversation,
  #mydesk.tf_open.desk_Left.iconsOff #WatchBox-conversation{
    height: calc(260px - 85px);
    height: moz-calc(260px - 85px);
  }
  #mydesk.open.desk_Bottom.iconsOff #contentWatchBox,
  #mydesk.tf_open.desk_Bottom.iconsOff #contentWatchBox{
    height: calc(220px - 10px);
    height: moz-calc(220px - 10px);
  }
  
  #mydesk.open.desk_Bottom.iconsOff #WatchBox-conversation,
  #mydesk.tf_open.desk_Bottom.iconsOff #WatchBox-conversation {
    height: calc(260px - 85px);
    height: moz-calc(260px - 85px);
  }
  #mydesk.desactive.desk_Right #mydesk-outer,
  #mydesk.desactive.desk_Left #mydesk-outer,    
  #mydesk.tf_desactive.desk_Right #mydesk-outer,
  #mydesk.tf_desactive.desk_Left #mydesk-outer {
    width: 45px;
    height: 45px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  #mydesk.desactive .icone_openMydesk, #mydesk.tf_desactive .icone_openMydesk {background: #E3328B; /* Old browsers */}
  #mydesk.desactive #mydesk_openCallback.actif, #mydesk.tf_desactive #mydesk_openCallback.actif { display: none; }
  /*---------------------------------------------*/
  /*--- icone chat en forme de bulle ---*/
  /*---------------------------------------------*/
  #mydesk.desactive.desk_Right #mydesk_openMydesk,
  #mydesk.desactive.desk_Left #mydesk_openMydesk,
  #mydesk.desactive.desk_Bottom #mydesk_openMydesk,
  #mydesk.tf_desactive.desk_Right #mydesk_openMydesk,
  #mydesk.tf_desactive.desk_Left #mydesk_openMydesk,
  #mydesk.tf_desactive.desk_Bottom #mydesk_openMydesk{
    color: #fff;
    border-radius: 17px;
    -moz-border-radius: 17px;
    -webkit-border-radius: 17px;
    background: #E3328B;
    width: 40px;
    height: 22px;
    text-align: right;
    font-size: 1em;
    padding-right: 13px;
    padding-top: 9px;
    padding-left: 0px;
    margin-right: 10px;
    margin-bottom: 13px;
  }
  #mydesk.desactive.desk_Right #mydesk_openMydesk:before,
  #mydesk.desactive.desk_Left #mydesk_openMydesk:before,
  #mydesk.tf_desactive.desk_Right #mydesk_openMydesk:before,
  #mydesk.tf_desactive.desk_Left #mydesk_openMydesk:before{
    content: "";
    position: absolute;
    right: 15px;
    top: 31px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-top: 8px solid #E3328B;
    border-right: 0px solid transparent;
  }
  
  #mydesk.desactive.desk_Bottom #mydesk_openMydesk:before,
  #mydesk.tf_desactive.desk_Bottom #mydesk_openMydesk:before{
    content: "";
    position: absolute;
    right: 31px;
    bottom: 6px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-top: 8px solid #E3328B;
    border-right: 0px solid transparent;
  }
  #mydesk.desactive.desk_Right #mydesk_openMydesk:after,
  #mydesk.desactive.desk_Left #mydesk_openMydesk:after,
  #mydesk.desactive.desk_Bottom #mydesk_openMydesk:after,
  #mydesk.tf_desactive.desk_Right #mydesk_openMydesk:after,
  #mydesk.tf_desactive.desk_Left #mydesk_openMydesk:after,
  #mydesk.tf_desactive.desk_Bottom #mydesk_openMydesk:after{
    content: "Chat";
  }
  #mydesk.desactive.position_bottom_left, #mydesk.desactive.position_bottom_middle,
  #mydesk.tf_desactive.position_bottom_left, #mydesk.tf_desactive.position_bottom_middle {right: 0px; left: inherit; bottom: 6px;}
  #mydesk.desactive.position_bottom_right,  
  #mydesk.tf_desactive.position_bottom_right {bottom: 6px;}
}

/*--------------------------------------------------
 POUR ECRAN UNIQUEMENT 414px de large ou de hauteur
----------------------------------------------------*/
@media only screen and ( max-device-height: 414px ){
  #vwatch, #mydesk {
    color: #000;
    background: transparent;
  }
  #mydesk {
    clear: both;
    position: fixed;
    display: block;
    z-index: 99999;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
  #mydesk.open.desk_Right,
  #mydesk.open.desk_Left,
  #mydesk.open.desk_Bottom,
  #mydesk.tf_open.desk_Right,
  #mydesk.tf_open.desk_Left,
  #mydesk.tf_open.desk_Bottom{
    top:inherit;
    bottom: 0%;
    left: 0%;
    width: 343px;
    height: 262px;
    max-height: inherit;
  }
  
  #mydesk.open,
  #mydesk.tf_open{
    -webkit-box-shadow: 0px 3px 18px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 3px 18px rgba(0,0,0,0.2);
  }
  #mydesk.desactive.desk_Right #mydesk-outer,
  #mydesk.desactive.desk_Left #mydesk-outer,
  #mydesk.tf_desactive.desk_Right #mydesk-outer,
  #mydesk.tf_desactive.desk_Left #mydesk-outer {
    /* width: 38px; */
    height: 37px;
    -webkit-box-shadow: 0px 3px 7px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 3px 7px rgba(0,0,0,0.3);
    box-shadow: 0px 3px 7px rgba(0,0,0,0.3);
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  #mydesk.desactive.desk_Bottom #mydesk-outer,
  #mydesk.tf_desactive.desk_Bottom #mydesk-outer   {
    width: 60px;
    height: 37px;
    -webkit-box-shadow:inherit;
    -moz-box-shadow:inherit;
    box-shadow:inherit;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  #mydesk.open.desk_Right #mydesk-outer,
  #mydesk.open.desk_Left #mydesk-outer,
  #mydesk.tf_open.desk_Right #mydesk-outer,
  #mydesk.tf_open.desk_Left #mydesk-outer  {
    height: 262px;
    max-height:inherit;
  }
  #mydesk.open.desk_Right.videoRtcClose #contentDesk,
  #mydesk.open.desk_Left.videoRtcClose #contentDesk,
  #mydesk.tf_open.desk_Right.videoRtcClose #contentDesk,
  #mydesk.tf_open.desk_Left.videoRtcClose #contentDesk {
    height:262px;
    max-height:inherit;
  }

  #mydesk.open.desk_Right #mydesk_openMydesk,
  #mydesk.open.desk_Left #mydesk_openMydesk,
  #mydesk.open.desk_Bottom #mydesk_openMydesk,
  #mydesk.tf_open.desk_Right #mydesk_openMydesk,
  #mydesk.tf_open.desk_Left #mydesk_openMydesk,
  #mydesk.tf_open.desk_Bottom #mydesk_openMydesk {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
  }
  #mydesk.open.position_bottom_middle,
  #mydesk.open.position_bottom_left,
  #mydesk.open.position_bottom_right,
  #mydesk.tf_open.position_bottom_middle,
  #mydesk.tf_open.position_bottom_left,
  #mydesk.tf_open.position_bottom_right  {
    right: inherit;
    left: calc(50% - 171.5px);
  }
  #mydesk.desactive.position_bottom_middle,
  #mydesk.desactive.position_bottom_left,
  #mydesk.desactive.position_bottom_right,
  #mydesk.tf_desactive.position_bottom_middle,
  #mydesk.tf_desactive.position_bottom_left,
  #mydesk.tf_desactive.position_bottom_right {
    right: 0px;
    left: inherit;
    width: inherit;
  }
  #mydesk.desactive.desk_Bottom ,
  #mydesk.tf_desactive.desk_Bottom {
    bottom: 0%;
    width: 70px;
  }

  #mydesk.desk_Left #communication.watchComDisplay,
  #mydesk.desk_Right #communication.watchComDisplay {
    display: block;
    width: calc(320px - 38px);
    width: -webkit-calc(320px - 38px);
    width: -moz-calc(320px - 38px);
  }

  #mydesk.desactive,
  #mydesk.tf_desactive {
    -webkit-box-shadow: inherit;
    -moz-box-shadow: inherit;
  }
  /* à droite */
  #mydesk.desactive.desk_Right,
  #mydesk.tf_desactive.desk_Right { bottom: 10px; right: 22px; top:inherit;}
  /* à gauche */
  #mydesk.desactive.desk_Left,
  #mydesk.tf_desactive.desk_Left { bottom: 10px; right: 22px; left:inherit; top:inherit;}
  
  #mydesk.desactive.mydesk-template.desk_Left #mydesk-outer,
  #mydesk.desactive.mydesk-template.desk_Right #mydesk-outer,
  #mydesk.desactive.mydesk-template.desk_Bottom #mydesk-outer, 
  #mydesk.tf_desactive.mydesk-template.desk_Left #mydesk-outer,
  #mydesk.tf_desactive.mydesk-template.desk_Right #mydesk-outer,
  #mydesk.tf_desactive.mydesk-template.desk_Bottom #mydesk-outer{
    background: transparent; /* Old browsers */
  }
  
  #mydesk.desk_Bottom.desactive .mydesk_titleTab.wzclose{display:none;}
  #mydesk.open.desk_Bottom #mydesk-outer,
  #mydesk.tf_open.desk_Bottom #mydesk-outer,
  #mydesk.desk_Bottom #communication.watchComDisplay  {
    width: 100% !important;
  }
  #mydesk.open.desk_Right.iconsOff #contentWatchBox,
  #mydesk.open.desk_Left.iconsOff #contentWatchBox,
  #mydesk.tf_open.desk_Right.iconsOff #contentWatchBox,
  #mydesk.tf_open.desk_Left.iconsOff #contentWatchBox{
    height: calc(260px - 10px);
    height: moz-calc(260px - 10px);
  }
  #mydesk.open.desk_Right.iconsOff #WatchBox-conversation,
  #mydesk.open.desk_Left.iconsOff #WatchBox-conversation,
  #mydesk.tf_open.desk_Right.iconsOff #WatchBox-conversation,
  #mydesk.tf_open.desk_Left.iconsOff #WatchBox-conversation{
    height: calc(260px - 85px);
    height: moz-calc(260px - 85px);
  }

  #mydesk.open.desk_Bottom.iconsOff #contentWatchBox,
  #mydesk.tf_open.desk_Bottom.iconsOff #contentWatchBox{
    height: calc(220px - 10px);
    height: moz-calc(220px - 10px);
  }
  
  #mydesk.open.desk_Bottom.iconsOff #WatchBox-conversation,
  #mydesk.tf_open.desk_Bottom.iconsOff #WatchBox-conversation {
    height: calc(260px - 85px);
    height: moz-calc(260px - 85px);
  }
	  
  #mydesk.desactive.desk_Right #mydesk-outer,
  #mydesk.desactive.desk_Left #mydesk-outer,
  #mydesk.tf_desactive.desk_Right #mydesk-outer,
  #mydesk.tf_desactive.desk_Left #mydesk-outer {
    width: 45px;
    height: 45px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  #mydesk.desactive .icone_openMydesk, #mydesk.tf_desactive .icone_openMydesk {background: #E3328B; /* Old browsers */}
  #mydesk.desactive #mydesk_openCallback.actif ,#mydesk.tf_desactive #mydesk_openCallback.actif { display: none; }
  /*---------------------------------------------*/
  /*--- icone chat en forme de bulle ---*/
  /*---------------------------------------------*/
  #mydesk.desactive.desk_Right #mydesk_openMydesk,
  #mydesk.desactive.desk_Left #mydesk_openMydesk,
  #mydesk.desactive.desk_Bottom #mydesk_openMydesk,
  #mydesk.tf_desactive.desk_Right #mydesk_openMydesk,
  #mydesk.tf_desactive.desk_Left #mydesk_openMydesk,
  #mydesk.tf_desactive.desk_Bottom #mydesk_openMydesk{
    color: #fff;
    border-radius: 17px;
    -moz-border-radius: 17px;
    -webkit-border-radius: 17px;
    background: #E3328B;
    width: 40px;
    height: 22px;
    text-align: right;
    font-size: 1em;
    padding-right: 13px;
    padding-top: 9px;
    padding-left: 0px;
    margin-right: 10px;
    margin-bottom: 13px;
  }
  #mydesk.desactive.desk_Right #mydesk_openMydesk:before,
  #mydesk.desactive.desk_Left #mydesk_openMydesk:before,
  #mydesk.tf_desactive.desk_Right #mydesk_openMydesk:before,
  #mydesk.tf_desactive.desk_Left #mydesk_openMydesk:before{
    content: "";
    position: absolute;
    right: 15px;
    top: 31px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-top: 8px solid #E3328B;
    border-right: 0px solid transparent;
  }
  #mydesk.desactive.desk_Bottom #mydesk_openMydesk:before,
  #mydesk.tf_desactive.desk_Bottom #mydesk_openMydesk:before{
    content: "";
    position: absolute;
    right: 31px;
    bottom: 6px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-top: 8px solid #E3328B;
    border-right: 0px solid transparent;
  }
  #mydesk.desactive.desk_Right #mydesk_openMydesk:after,
  #mydesk.desactive.desk_Left #mydesk_openMydesk:after,
  #mydesk.desactive.desk_Bottom #mydesk_openMydesk:after,
  #mydesk.tf_desactive.desk_Right #mydesk_openMydesk:after,
  #mydesk.tf_desactive.desk_Left #mydesk_openMydesk:after,
  #mydesk.tf_desactive.desk_Bottom #mydesk_openMydesk:after{
    content: "Chat";
  }
  
}
 
    
  
  
  







 


 






 






/* modif affichage modile pour orpi*/




#watchFormSATIS input[type="radio"]
{
  opacity: 1 !important;
  -webkit-appearance: none;
  -webkit-opacity:1 !important;
  -moz-appearance: none;
     outline: none !important;
     background:url(../img/icones/icones_interface.svg) !important;
     background-repeat: no-repeat !important;
     min-width: 27px;
     min-height:27px;
     width: 27px;
     height:27px;
     border:1px dashed rgba(227,50,139,0);
     cursor:pointer;
     border-radius: 13px;
     display: -webkit-inline-box;
     transform: scale(1.6);
     transition: transform 300ms ease-in;
}
#watchFormSATIS input[type="radio"]:hover{
  transition: transform 300ms ease-out;
  transform: scale(1.8);
/*border:1px dashed rgba(227,50,139,0.8);*/
}
#watchFormSATIS input[value="1"]
{
    background-position: -374px -284px!important

}
#watchFormSATIS input[value="2"]
{
    background-position: -348px -284px!important

}
#watchFormSATIS input[value="3"]
{
 background-position: -322px -284px!important
}

#watchFormSATIS  input[type="radio"]:checked{
   background-position: -402px -284px!important
}
#watchFormSATIS li label{
  margin-top:5px;
  display: none;
}
#watchFormSATIS .listeSATIS{
  width:80%;
  max-height: 30px;
  min-height: 30px;
}
#watchFormSATIS .listeSATIS li{
  height: 30px;
}
#watchFormSATIS fieldset{
  margin-bottom: 0px !important;
  margin-top: 0px !important;
  background-color: none;
  background: none;
  border:0px !important;
}
#watchFormSATIS .titreSATIS{
  font-size: 0.9em !important;
    padding: 12px 14px 12px 14px
    margin: 0px 4px 0px 4px;

}
#watchFormSATIS .labelSATIS{
  font-size:0.8em;
}
#mydesk.mydesk-template  #watchFormSATIS  .btnSATIS{
  margin-top:10px;
}






.wz-SVGiconeChat{
  /*stroke:rgba(227,50,139,1)*/
  fill:rgba(158,189,59,1);
  stroke:none;
}
#mydesk.open.desk_Bottom.iconsOff #WatchBox-conversation, #mydesk.tf_open.desk_Bottom.iconsOff #WatchBox-conversation{
  height: calc(422px - 90px);
  height: moz-calc(422px - 90px);
}
#WatchBox-optionChat{
  width: 15px;
    height: 15px;
    position: absolute;
  display: inline-flex;
    top: 50px;
    left: 3px;
  cursor:pointer;
  
    
}
#WatchBox-optionChat:hover{}

/*.iconeOptionChatPlus {position: relative; display: inline-block;width: 15px;height: 15px;overflow: hidden; top:-25px; left:0px; border-radius: 13px;background-color: transparent; }
.iconeOptionChatPlus svg{;width:15px;height: 15px}
.iconeOptionChatPlus #bt_preftools path{fill: rgba(227,50,139,1);width:15px;height: 15px}

.iconeOptionChatPlus::before, .iconeOptionChatPlus::after {content: none;position: absolute;height: 2px;width: 100%;top: 50%;left: 0;margin-top: -1px;background: rgba(227,50,139,1);}
/*.iconeOptionChatPlus::before {transform: rotate(90deg);}
.iconeOptionChatPlus::after {}
*/
/*.iconeOptionChatMoins {position: relative; display: inline-block;width: 15px;height: 15px;overflow: hidden; top:-25px; left:0px; border-radius: 13px; background-color: rgba(227,50,139,1);}
.iconeOptionChatMoins svg{;width:15px;height: 15px}
.iconeOptionChatMoins #bt_preftools path{fill: rgba(158,189,59,1); width:15px;height: 15px}
/*
.iconeOptionChatMoins::before {content: '';position: absolute;height: 2px;width: 100%;top: 50%;left: 0;margin-top: -1px;background: rgba(227,50,139,1);}
.iconeOptionChatMoins::before {transform: rotate(0deg);}
*/

#WatchBox-message{
  width: calc(100% - 80px);
  margin: 0px 0px -14px 4px !important;
  height: 60px;
  padding: 5px 2px 2px 2px !important;
}
.icone_sendMessage{
  background-position:-100px -277px;
  background-repeat: no-repeat;
}
/*
#WatchBox-chatSend {
    /*top:28px !important;*/
    
  }
*/
#WatchBox-message{
  width: calc(100% - 20px);
  margin: 0px 0px -8px 8px !important;
  height: 20px !important;
  padding: 2px !important;
}


/* -----------bar d'icone chatBox position horizontal--------------- */
#WatchBox-navBarChat.wz_horizontal{  
    bottom: 14px !important;
    left:27px;
}
#WatchBox-navBarChat.wz_horizontal{  
  /*box-shadow: 0px -2px 3px rgba(0,0,0,0.1);*/
} 
#WatchBox-navBarChat.wz_horizontal.close{  
  height: 27px;
  width: 0px;
  -webkit-transition: width 0.35s ease-out; 
  -moz-transition: width 0.35s ease-out; 
  -ms-transition: width 0.35s ease-out; 
  -o-transition: width 0.35s ease-out; 
  transition: width 0.35s ease-out;
  background-color:rgba(227,50,139,1);
  border-bottom-right-radius: 13px;
  border-top-right-radius: 13px;
}
.wz_horizontal #printChat, .wz_horizontal #emailChat, .wz_horizontal #saveChat{
    float:left;
    width: 27px;
    height: 27px;
    cursor: pointer;
    /*border-radius: 15px;*/
    /*border: 1px solid rgba(227,50,139,1);*/
  background-color: rgba(227,50,139,0);
  transition: width 2s ease-in .5s;
}
.wz_horizontal #printChat:hover, .wz_horizontal #emailChat:hover, .wz_horizontal #saveChat:hover{
  background-color: rgba(227,50,139,1);
}
#WatchBox-navBarChat.wz_horizontal.open{
  height:27px;
  width: 90px;
  -webkit-transition: all 0.35s ease-in; 
  -moz-transition: all 0.35s ease-in; 
  -ms-transition: all 0.35s ease-in; 
  -o-transition: all 0.35s ease-in; 
  transition: all 0.35s ease-in;
  background-color:rgba(227,50,139,1);
  border-bottom-right-radius: 13px;
  border-top-right-radius: 13px;
  
}
.wz_horizontal .content_iconeCopyChat, .wz_horizontal .content_iconeSaveChat, .wz_horizontal .content_iconeEmailChat{position: relative;  padding-top: 0px !important; padding-left: 4px !important;}

.wz-SVGiconeChat{
  /*stroke:rgba(227,50,139,1)*/
  fill:rgba(158,189,59,1);
}
.wz-SVGiconeChat:hover{
  /*stroke:rgba(227,50,139,1)*/
  fill:rgba(111,125,17,1);

}
/*
.iconeOptionChatPlus {position: relative; display: inline-block;width: 27px;height: 27px;overflow: hidden; top:0px; left:0px; border-radius: 13px;background-color: transparent; transition: all 0.30s ease-in}
.iconeOptionChatPlus svg{;width:22px;height: 27px; transition: all 0.40s ease-out;transform: rotate(60deg)}
.iconeOptionChatPlus #bt_preftools path{fill: rgba(227,50,139,1);width:22px;height: 22px}
.iconeOptionChatMoins {position: relative; display: inline-block;width: 37px;height: 27px;overflow: hidden; top:0px; left:0px; border-radius: 13px; background-color: rgba(227,50,139,1);}
.iconeOptionChatMoins svg{;width:22px;height: 27px; transform: rotate(-60deg);transition: all 0.40s ease-in}
.iconeOptionChatMoins #bt_preftools path{fill: rgba(227,50,139,1); width:22px;height: 22px}
*/
#mydesk{
      background: none;
      border-radius:21px;
      /*box-shadow: 0px 3px 18px rgba(0,0,0,0.5) !important;*/
  } 
  #mydesk.desk_Right {
  margin-right: 0px !important;
  margin-bottom: 0px !important;
  }
  /*#mydesk.desk_Bottom {
  margin-right: 10px !important;
  margin-bottom: 10px !important;
  }*/
  #mydesk.desk_Bottom {
  margin-right: 0px !important;
  margin-bottom: 0px !important;
  }

textarea#WatchBox-message{
        background:none !important;
      border:none !important;
      min-width: calc(100% - 80px)!important;
      max-width: calc(100% - 70px)!important;
      min-height: 60px !important;
      height: 60px !important;
      max-height: 60px !important;
      outline: none;
  }
  
  #WatchBox-chatSend #bt_envoi polygon{
      /*border-radius: 50%;*/
      width: 20px;
      height: 20px;
      fill:rgba(158,189,59,1);
  }
  .icone_sendMessage {
  /*background-position: -103px -279px;*/
  background-position: -393px -339px;
  }
  #WatchBox-chatSend:hover #bt_envoi polygon {
      /*border-radius: 50%;*/
      fill:rgba(227,50,139,1);
  }
  /* en  bas */
/* incones off */
#mydesk.open.desk_Bottom.iconsOff #WatchBox-conversation, #mydesk.tf_open.desk_Bottom.iconsOff #WatchBox-conversation{
  height: calc(422px - 125px) !important;
  height: moz-calc(422px - 125px)!important;
}
  
/* incones on */
#mydesk.open.desk_Bottom.iconsOn #WatchBox-conversation, #mydesk.tf_open.desk_Bottom.iconsOn #WatchBox-conversation{
  height: calc(422px - 125px)!important;
  height: moz-calc(422px - 125px)!important;
}
#mydesk.open.desk_Bottom.agoffline #WatchBox-MessageWrapper, #mydesk.tf_open.desk_Bottom.agoffline #WatchBox-MessageWrapper{
display:none;
}
#mydesk.open.desk_Bottom.agoffline.wzbot #WatchBox-MessageWrapper, #mydesk.tf_open.desk_Bottom.agoffline.wzbot #WatchBox-MessageWrapper{
display:block;
}
#mydesk.open.desk_Bottom #WatchBox-MessageWrapper, #mydesk.tf_open.desk_Bottom #WatchBox-MessageWrapper{
bottom: -40px;
}
#mydesk.desactive, #mydesk.tf_desactive{

box-shadow: none !important;

}
@media only screen and ( max-device-width: 440px ){
  
  #iconeOptionChat{display:none}
#WatchBox-chatSend {
   /* top: 15px !important;*/
}
 .wz-badge{
 display:none;
}
}



#mydesk.desk_Right .wz_connexionSocket {
    text-align: center;
    position: absolute;
    top: 37px;
    width: 80%;
    background-color: rgba(255,255,255,0.9);
    height: 100%;
    left: 38px;
    z-index: 10;
} 

#mydesk.open.desk_Bottom.iconsOff #WatchBox-conversation, #mydesk.tf_open.desk_Bottom.iconsOff #WatchBox-conversation{
  height: calc(422px - 65px) !important;
  height: moz-calc(422px - 65px)!important;
}
  
/* incones on */
#mydesk.open.desk_Bottom.iconsOn #WatchBox-conversation, #mydesk.tf_open.desk_Bottom.iconsOn #WatchBox-conversation{
  height: calc(422px - 65px)!important;
  height: moz-calc(422px - 65px)!important;
}
#mydesk.open.desk_Bottom #WatchBox-MessageWrapper, #mydesk.tf_open.desk_Bottom #WatchBox-MessageWrapper{
bottom: -40px;
}
#WatchBox-navBarChat.wz_horizontal {
    bottom: -14px !important;
    left: 27px;
}
#mydesk.desk_Right #WatchBox-navBarChat.wz_horizontal {
    bottom: 17px !important;
    left: 27px;
}
#mydesk.open.desk_Right #WatchBox-MessageWrapper, #mydesk.tf_open.desk_Right #WatchBox-MessageWrapper{
  bottom: 49px;
}
#mydesk.open.desk_Right.iconsOff #WatchBox-conversation, #mydesk.tf_open.desk_Right.iconsOff #WatchBox-conversation{
  height: calc(422px - 85px) !important;
  height: moz-calc(422px - 85px)!important;
}


div#mydesk.agoffline #dialogReconnexion {
    display: none;
}

/* WATCHEEZY EN MODE POPIN */
#mydesk.popin {
  max-height:inherit!important;
  width: 100%!important;
  height: 100%!important;
}
#mydesk.popin #communication{
  width: inherit!important;
}
#mydesk.popin #WatchBoxContainer, #mydesk.popin #contentWatchBox{
  height: 96%!important;
}
#mydesk.popin #WatchBox-conversation{
  height: 80%!important;
}
#mydesk.popin #WatchBox-optionChat{
  display:none;
}
#mydesk.popin #chatboxsvg{
  display:none;
}
/* FIN WATCHEEZY EN MODE POPIN */


  /* FB messenger */

          /* FB messenger avec image chat custom */
          #mydesk.desk_Bottom.agoffline.fbmess #watchFormABS.watchFormDisplay{ margin-top:-40px !important; }
		  #mydesk.agoffline.outerIsImg.desactive.fbmess #mydesk-outer,
		  #mydesk.agoffline.outerIsImg.tf_desactive.fbmess #mydesk-outer{height:60px;}
		  #mydesk.agoffline.desactive.outerIsImg.fbmess #widgetsvg,
		  #mydesk.agoffline.tf_desactive.outerIsImg.fbmess #widgetsvg{display: block !important;}
		  #mydesk.desactive.agoffline.fbmess #mydesk_title.wzclose, 
		  #mydesk.tf_desactive.agoffline.fbmess #mydesk_title.wzclose{display: none;}
          #mydesk.agoffline.customCbox.fbmess.desk_Bottom #watchFormABS{transform: translateY(0);background-size: cover !important;}          
		  #mydesk.open.desk_Bottom.customCbox.agoffline.fbmess #contentDesk,
		  #mydesk.tf_open.desk_Bottom.customCbox.agoffline.fbmess #contentDesk
		  { margin-top: 24px !important}
		  #mydesk.open.desk_Bottom.iconsOff.customCbox.fbmess #customClickToClose, #mydesk.open.desk_Bottom.iconsOff.customCbox.fbmess #customClickToThirdState,
		  #mydesk.tf_open.desk_Bottom.iconsOff.customCbox.fbmess #customClickToClose, #mydesk.tf_open.desk_Bottom.iconsOff.customCbox.fbmess #customClickToThirdState
		  {top:-7px !important;}
		  #mydesk.open.desk_Bottom.iconsOff.customCbox.fbmess #customClickToClose, #mydesk.tf_open.desk_Bottom.iconsOff.customCbox.fbmess #customClickToClose
		  {width: 37px; height: 37px;}

          .fmess.desk_Bottom #watchFormABS { transform: translateY(6px); height: 106px !important; }
          #mydesk.desk_Bottom.agoffline.fbmess #chatboxsvg { height: 100px; top: -30px !important; box-shadow: none !important; }
		  #mydesk.open.desk_Bottom.desk_Bottom.agoffline.fbmess, 
		  #mydesk.tf_open.desk_Bottom.desk_Bottom.agoffline.fbmess { height: calc(44px + 92px) !important; min-height: calc(44px + 92px) !important; max-height: calc(110px + 35px) !important; }
          #mydesk.desk_Bottom.agoffline.fbmess #zoneMessage rect { display: none; }
          #mydesk.desk_Bottom.agoffline.fbmess #bghead { transform: translate(0px, 30px); }
		  #mydesk.open.desk_Bottom.agoffline.fbmess #contentDesk,
		  #mydesk.tf_open.desk_Bottom.agoffline.fbmess #contentDesk 
		  { margin-top: 64px !important; background: #FFF !important; height: 110px !important; min-height: 110px; border-bottom-left-radius: 11px; border-bottom-right-radius: 11px; }
		  #mydesk.open.desk_Bottom.agoffline.fbmess #headmiddle, #mydesk.open.desk_Bottom.agoffline.fbmess #headright, #mydesk.open.desk_Bottom.agoffline.fbmess #headleft, 
		  #mydesk.tf_open.desk_Bottom.agoffline.fbmess #headmiddle, #mydesk.tf_open.desk_Bottom.agoffline.fbmess #headright, #mydesk.tf_open.desk_Bottom.agoffline.fbmess #headleft 
		  { fill: #FFF !important; }
		  #mydesk.open.desk_Bottom.agoffline.fbmess #reduire, #mydesk.open.desk_Bottom.agoffline.fbmess #closecross,
		  #mydesk.tf_open.desk_Bottom.agoffline.fbmess #reduire, #mydesk.tf_open.desk_Bottom.agoffline.fbmess #closecross 
		  { display: none; }
		  #mydesk.open.desk_Bottom.agoffline.fbmess #crosslight,
		  #mydesk.tf_open.desk_Bottom.agoffline.fbmess #crosslight 
		  { fill: #0084ff !important; transform: translate(5px, 34px); display: block; }
		  #mydesk.open.desk_Bottom.agoffline.fbmess #mabs1, #mydesk.open.desk_Bottom.agoffline.fbmess #mabs2,
		  #mydesk.tf_open.desk_Bottom.agoffline.fbmess #mabs1, #mydesk.tf_open.desk_Bottom.agoffline.fbmess #mabs2
		  {color:#0084ff;} 
		  #mydesk.open.desk_Bottom.agoffline.fbmess #icon-messenger,
		  #mydesk.tf_open.desk_Bottom.agoffline.fbmess #icon-messenger 
		  { display: block; transform: translate(35%, -21px); }
          @keyframes opening {
            0% { transform: scale(0) translate(38px, -5px); }
            10% { transform: scale(0) translate(38px, -5px); }
            95% { transform: scale(0.8) translate(38px, -5px); }
            100% { transform: scale(0.8) translate(38px, -5px); }
          }
          @keyframes opening2 {
            0% { transform: scale(0) translate(-100px, 65px); }
            10% { transform: scale(0) translate(-100px, 35px); }
            95% { transform: scale(1) translate(-100px, 0); }
            100% { transform: scale(1) translate(-100px, -5px); }
		  }
		  #mydesk.desactive.desk_Bottom.agoffline.fbmess #icon-messenger,
          #mydesk.tf_desactive.desk_Bottom.agoffline.fbmess #icon-messenger { display: block; transform: scale(0); transform-origin: 90% 30px; animation-name: opening; animation-duration: 1s; animation-delay: 3s; animation-fill-mode: forwards; animation-iteration-count: 1; }
		  #mydesk.desactive.desk_Bottom.position_bottom_middle.agoffline.fbmess #icon-messenger, 
		  #mydesk.tf_desactive.desk_Bottom.position_bottom_middle.agoffline.fbmess #icon-messenger { display: block; transform: scale(0); transform-origin: 157px 120px; animation-name: opening2; animation-duration: 1s; animation-delay: 3s; animation-fill-mode: forwards; animation-iteration-count: 1; }
          #mydesk.desk_Bottom.agoffline.fbmess .titleOuterMydesk, #mydesk.desk_Bottom.agoffline.fbmess #icon-off, #mydesk.desk_Bottom.agoffline.fbmess #Base-horz, #mydesk.desk_Bottom.agoffline.fbmess #iconopen, #mydesk.desk_Bottom.agoffline.fbmess #iconclosed, #mydesk.desk_Bottom.agoffline.fbmess #icon-on, #mydesk.desk_Bottom.agoffline.fbmess #icon-off { display: none !important; }
          
          @media(max-width:420px) {
			#mydesk.open.agoffline.customCbox.fbmess div#deskTitle,
            #mydesk.tf_open.agoffline.customCbox.fbmess div#deskTitle {top: 2px !important;}
			#mydesk.desactive.desk_Bottom.agoffline.fbmess #icon-messenger,
			#mydesk.tf_desactive.desk_Bottom.agoffline.fbmess #icon-messenger { display: block; transform-origin: 0 0; transform: translate(-175px, 0) scale(.8);  /*transform-origin: 50% 30px;*/ animation-name: none !important; }
			#mydesk.open.desk_Bottom.agoffline.fbmess #contentDesk,
			#mydesk.tf_open.desk_Bottom.agoffline.fbmess #contentDesk { margin-top: 13px !important; }
            .desk_Bottom #watchFormABS.fbMessenger { transform: translateY(-4px); height: calc(343px  - 10px) !important; }
            .fb_iframe_widget { margin: 10px auto !important; }
			#mydesk.desactive.desk_Bottom.position_bottom_middle.agoffline.fbmess #icon-messenger,
			#mydesk.tf_desactive.desk_Bottom.position_bottom_middle.agoffline.fbmess #icon-messenger { display: block; transform: scale(.8); transform-origin: 0px 0px; animation-name: none; }
          }

          @keyframes showcallback {
            0% { transform: scale(0) translate(20px, -20px); }
            99% { transform: scale(1.1) translate(20px, -20px); }
            100% { transform: scale(1) translate(20px, -20px); }
          }
          #mydesk.desk_Bottom.agoffline.fbmess #iconcallback { transform-origin: 258px 20px; transform: scale(0); animation-name: showcallback; animation-duration: 1s; animation-delay: 2s; animation-fill-mode: forwards; animation-iteration-count: 1; }
          #mydesk.desk_Bottom.agoffline.fbmess #fondcallback { fill: #4CDA64 !important; }
          #mydesk.desk_Bottom.agoffline.fbmess #icocallback { fill: #FFF !important; }
          #mydesk.fbmess { border-radius: 11px !important; }

          /* Fenetre de Callback avec FB messenger */
          #mydesk-callback.fbMessenger.agonline { background: #FFF !important; border: 1px solid rgba(227,50,139, 0.4); }
          #mydesk-callback.fbMessenger.agonline .mydesk-title-callback { background: #FFF !important; color: rgba(227,50,139, 1); text-align: center; border-bottom: 1px solid rgba(227,50,139, 0.1); }
          #mydesk-callback.fbMessenger.agonline #closeCallback { width: 17px; height: 17px; background-position: -54px -291px; border-radius: 0; -moz-border-radius: 0; -webkit-border-radius: 0; }
          #mydesk-callback.fbMessenger.agonline #mydesk-callback-photo { display: none; }
          #mydesk-callback.mydesk-callback.callback_Bottom.fbMessenger.agonline:before, #mydesk-callback.mydesk-callback.callback_BottomRight.fbMessenger.agonline:before, #mydesk-callback.mydesk-callback.callback_BottomLeft.fbMessenger.agonline:before { border-left: 12px solid; border-top: 12px solid; border-right: 10px solid; border-color: rgba(227,50,139, 0.4); border-left-color: transparent; border-right-color: transparent; right: 45%; }
          #mydesk-callback.fbMessenger.agonline:after { content: ""; position: absolute; width: 0; height: 0; }
          #mydesk-callback.mydesk-callback.callback_Bottom.fbMessenger.agonline:after, #mydesk-callback.mydesk-callback.callback_BottomRight.fbMessenger.agonline:after, #mydesk-callback.mydesk-callback.callback_BottomLeft.fbMessenger.agonline:after { border-left: 12px solid; border-top: 12px solid; border-right: 10px solid; border-color: #FFF; border-left-color: transparent; border-right-color: transparent; top: calc(100% - 2px); right: 45%; }
          #mydesk-callback.fbMessenger.agonline .form-control { height: 33px; width: 48.5% !important; padding: 0 0 0 0 !important; margin: 0 0 0 0 !important; -webkit-border-radius: 0; -moz-border-radius: 0; -o-border-radius: 0; border-left-color: transparent; border-right-color: transparent; border-top-color: transparent; }
          #mydesk-callback.fbMessenger.agonline #callee { width: 100% !important; padding: 0 0 1px 0; margin: 0 0 2px 0 !important; max-width: 100% !important; }
          #mydesk-callback.fbMessenger.agonline .btn-callback.actif { display: block; text-align: center; padding: 10px 0; }
          #mydesk-callback.fbMessenger.agonline .form-callback { padding: 0 10px 0 10px !important; }
          @keyframes opencallback {
            0% { bottom: 90px; opacity: 0; }
            100% { bottom: 70px; opacity: 1; }
          }
          #mydesk-callback.fbMessenger.agonline.open, #mydesk-callback.fbMessenger.agonline.tf_open { animation-name: opencallback; animation-duration: 1s; animation-fill-mode: forwards; animation-iteration-count: 1; }
          #mydesk-callback.mydesk-callback .mydesk-content-callback { color: rgba(227,50,139, 1); max-width: 90% !important; }
          #mydesk-callback.callbackimg.mydesk-callback .mydesk-content-callback { color: rgba(227,50,139, 1); max-width: 70% !important; }

          /* Agent offline */
          #mydesk-callback.fbMessenger.agoffline { background: #FFF !important; border: 1px solid rgba(227,50,139, 0.4); }
          #mydesk-callback.fbMessenger.agoffline .mydesk-title-callback { background: #FFF !important; color: rgba(227,50,139, 1); text-align: center; border-bottom: 1px solid rgba(227,50,139, 0.1); }
          #mydesk-callback.fbMessenger.agoffline #closeCallback { width: 17px; height: 17px; background-position: -54px -291px; border-radius: 0; -moz-border-radius: 0; -webkit-border-radius: 0; }
          #mydesk-callback.fbMessenger.agoffline #mydesk-callback-photo { display: none; }
          #mydesk-callback.mydesk-callback.callback_Bottom.fbMessenger.agoffline:before, #mydesk-callback.mydesk-callback.callback_BottomRight.fbMessenger.agoffline:before, #mydesk-callback.mydesk-callback.callback_BottomLeft.fbMessenger.agoffline:before { border-left: 12px solid; border-top: 12px solid; border-right: 10px solid; border-color: rgba(227,50,139, 0.4); border-left-color: transparent; border-right-color: transparent; right: 19%; }
          #mydesk-callback.fbMessenger.agoffline:after { content: ""; position: absolute; width: 0; height: 0; }
          #mydesk-callback.mydesk-callback.callback_Bottom.fbMessenger.agoffline:after, #mydesk-callback.mydesk-callback.callback_BottomRight.fbMessenger.agoffline:after, #mydesk-callback.mydesk-callback.callback_BottomLeft.fbMessenger.agoffline:after { border-left: 12px solid; border-top: 12px solid; border-right: 10px solid; border-color: #FFF; border-left-color: transparent; border-right-color: transparent; top: calc(100% - 2px); right: 19%; }
          #mydesk-callback.fbMessenger.agoffline .form-control { height: 33px; width: 48.5% !important; padding: 0 0 0 0 !important; margin: 0 0 0 0 !important; -webkit-border-radius: 0; -moz-border-radius: 0; -o-border-radius: 0; border-left-color: transparent; border-right-color: transparent; border-top-color: transparent; }
          #mydesk-callback.fbMessenger.agoffline #callee { width: 100% !important; padding: 0 0 1px 0; margin: 0 0 2px 0 !important; max-width: 100% !important; }
          #mydesk-callback.fbMessenger.agoffline .btn-callback.actif { display: block; text-align: center; padding: 10px 0; }
          #mydesk-callback.fbMessenger.agoffline .form-callback { padding: 0 10px 0 10px !important; }
          @keyframes opencallback {
            0% { bottom: 100px; opacity: 0; }
            100% { bottom: 85px; opacity: 1; }
		  }
		  #mydesk-callback.fbMessenger.agoffline.wzclose.open,
          #mydesk-callback.fbMessenger.agoffline.wzclose.tf_open { animation-name: opencallback; animation-duration: 1s; animation-fill-mode: forwards; animation-iteration-count: 1; }
          @keyframes opencallback2 {
            0% { bottom: calc(422 + 100px); opacity: 0; }
            100% { bottom: calc(422 + 85px); opacity: 1; }
		  }
		  #mydesk-callback.fbMessenger.wzopen.open,
          #mydesk-callback.fbMessenger.wzopen.tf_open { animation-name: opencallback2; animation-duration: 1s; animation-fill-mode: forwards; animation-iteration-count: 1; }

          /* callback sans messenger*/
          #mydesk-callback.agonline { background: #FFF !important; border: 1px solid rgba(227,50,139, 0.4); }
          #mydesk-callback.agonline .mydesk-title-callback { background: #FFF !important; color: rgba(227,50,139, 1); text-align: center; border-bottom: 1px solid rgba(227,50,139, 0.1); }
          #mydesk-callback.agonline #closeCallback { width: 17px; height: 17px; background-position: -54px -291px; border-radius: 0; -moz-border-radius: 0; -webkit-border-radius: 0; }
          #mydesk-callback.agonline #mydesk-callback-photo {  /*display: none;*/ }
          #mydesk-callback.mydesk-callback.callback_Bottom.agonline:before, #mydesk-callback.mydesk-callback.callback_BottomRight.agonline:before, #mydesk-callback.mydesk-callback.callback_BottomLeft.agonline:before { border-left: 12px solid; border-top: 12px solid; border-right: 10px solid; border-color: rgba(227,50,139, 0.4); border-left-color: transparent; border-right-color: transparent; right: 45%; }
          #mydesk-callback.agonline:after { content: ""; position: absolute; width: 0; height: 0; }
          #mydesk-callback.mydesk-callback.callback_Bottom.agonline:after, #mydesk-callback.mydesk-callback.callback_BottomRight.agonline:after, #mydesk-callback.mydesk-callback.callback_BottomLeft.agonline:after { border-left: 12px solid; border-top: 12px solid; border-right: 10px solid; border-color: #FFF; border-left-color: transparent; border-right-color: transparent; top: calc(100% - 2px); right: 45%; }
          #mydesk-callback.agonline .form-control { height: 33px; width: 48.5% !important; padding: 0 0 0 0 !important; margin: 0 0 0 0 !important; -webkit-border-radius: 0; -moz-border-radius: 0; -o-border-radius: 0; border-left-color: transparent; border-right-color: transparent; border-top-color: transparent; }
          #mydesk-callback.agonline #callee { width: 100% !important; padding: 0 0 1px 0; margin: 0 0 2px 0 !important; max-width: 100% !important; }
          #mydesk-callback.agonline .btn-callback.actif { display: block; text-align: center; padding: 10px 0; }
          #mydesk-callback.agonline .form-callback { padding: 0 10px 0 10px !important; }
          @keyframes opencallback {
            0% { bottom: 90px; opacity: 0; }
            100% { bottom: 70px; opacity: 1; }
          }
          #mydesk-callback.agonline.open { animation-name: opencallback; animation-duration: 1s; animation-fill-mode: forwards; animation-iteration-count: 1; }
          #mydesk-callback.mydesk-callback .mydesk-content-callback, #mydesk-callback .callback_ok { color: rgba(227,50,139, 1); max-width: 90% !important; }
          #mydesk-callback.callbackimg.mydesk-callback .mydesk-content-callback, #mydesk-callback .callback_ok { color: rgba(227,50,139, 1); max-width: 70% !important; }
          #mydesk-callback.agoffline { background: #FFF !important; border: 1px solid rgba(227,50,139, 0.4); }
          #mydesk-callback.agoffline .mydesk-title-callback { background: #FFF !important; color: rgba(227,50,139, 1); text-align: center; border-bottom: 1px solid rgba(227,50,139, 0.1); }
          #mydesk-callback.agoffline #closeCallback { width: 17px; height: 17px; background-position: -54px -291px; border-radius: 0; -moz-border-radius: 0; -webkit-border-radius: 0; }
          #mydesk-callback.agoffline #mydesk-callback-photo {  /*display: none;*/ }
          #mydesk-callback.mydesk-callback.callback_Bottom.agoffline:before, #mydesk-callback.mydesk-callback.callback_BottomRight.agoffline:before, #mydesk-callback.mydesk-callback.callback_BottomLeft.agoffline:before { border-left: 12px solid; border-top: 12px solid; border-right: 10px solid; border-color: rgba(227,50,139, 0.4); border-left-color: transparent; border-right-color: transparent; right: 45%; }
          #mydesk-callback.agoffline:after { content: ""; position: absolute; width: 0; height: 0; }
          #mydesk-callback.mydesk-callback.callback_Bottom.agoffline:after, #mydesk-callback.mydesk-callback.callback_BottomRight.agoffline:after, #mydesk-callback.mydesk-callback.callback_BottomLeft.agoffline:after { border-left: 12px solid; border-top: 12px solid; border-right: 10px solid; border-color: #FFF; border-left-color: transparent; border-right-color: transparent; top: calc(100% - 2px); right: 45%; }
          #mydesk-callback.agoffline .form-control { height: 33px; width: 48.5% !important; padding: 0 0 0 0 !important; margin: 0 0 0 0 !important; -webkit-border-radius: 0; -moz-border-radius: 0; -o-border-radius: 0; border-left-color: transparent; border-right-color: transparent; border-top-color: transparent; }
          #mydesk-callback.agoffline #callee { width: 100% !important; padding: 0 0 1px 0; margin: 0 0 2px 0 !important; max-width: 100% !important; }
          #mydesk-callback.agoffline .btn-callback.actif { display: block; text-align: center; padding: 10px 0; }
          #mydesk-callback.agoffline .form-callback { padding: 0 10px 0 10px !important; }
          @keyframes opencallback {
            0% { bottom: 100px; opacity: 0; }
            100% { bottom: 85px; opacity: 1; }
          }
          #mydesk-callback.agoffline.wzclose.open { animation-name: opencallback; animation-duration: 1s; animation-fill-mode: forwards; animation-iteration-count: 1; }
          @keyframes opencallback2 {
            0% { bottom: calc(422 + 100px); opacity: 0; }
            100% { bottom: calc(422 + 85px); opacity: 1; }
          }
          #mydesk-callback.wzopen.open { animation-name: opencallback2; animation-duration: 1s; animation-fill-mode: forwards; animation-iteration-count: 1; }
          .callback_Right { min-height: 140px; max-height: 195px; }
          #mydesk-callback.mydesk-callback.callback_Right:before { border-color: #fff; border-top-color: transparent; border-bottom-color: transparent; /* border-color: rgba(227,50,139,0.4);*/ }

          
        
/*--- pointer agent pour cobrowsing ---*/
#AdminPointer {
  transition: all .2s;
    z-index: 10002;
    width: 20px;
    height: 20px;
    border-radius: 0 50% 50% 50%;
  /*
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  vertical-align: middle;
  */
    background-color: #5BC5F2;
    position: absolute;
}
#pointerNameAdmin {
    top: 1px;
    font-size: 0.8em;
    position: relative;
    background-color: rgba(245, 245, 245, 0.5);
    width: 120px;
    border-radius: 4px;
    color: #000;
}
/**** position du nom à droite par defaut ****/
#pointerNameAdmin.posRight {
  left: 24px;
  text-align: left;
  padding-left: 6px;
}
/**** position du nom à auche ****/
#pointerNameAdmin.posLeft {
  right: 124px;
  text-align: right;
  padding-right: 6px;
}

#AdminPointer:before {
    content: '';
    /* position: absolute; */
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #FFF;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }
#AdminPointer:after {
    content: '';
    pointer-events: none;
}
.ClickPointer{
    opacity: 0;
    position: absolute;
    width: 1px;
    height: 1px;
    border-radius: 100px;
    border: 4px solid #5BC5F2;
    text-align: center;
    z-index: 10001;
}
.ClickPointer.click{
    animation:anim 0.8s;
    -webkit-animation:anim 0.8s;
}
@keyframes anim{
  50%{
    width: 50px;
    height: 50px;
    margin-top: -25px;
    margin-left: -25px;
    opacity: 0.8;
  }
  100%{
    opacity: 0;
  }
}
@-webkit-keyframes anim{
  50%{
    width: 50px;
    height: 50px;
    margin-top: -25px;
    margin-left: -25px;
    opacity: 0.8;
  }
  100%{
    opacity: 0;
  }
}

/*--------- cobrowsing --------*/
@media screen and ( min-width: 1024px ){
  #CobrowsingActif.Actif {
    width: 60%;
  }
  .tf_titleCobrowsing {
    width: 50%;
    min-width: 350px;
    font-size: 1.5em;
  }
  .tf_btn_Cobrowsing{
    width: 100px;
  }
}

@media screen and ( min-width: 640px ) and ( max-width: 1024px ){
  #CobrowsingActif.Actif {
    width: 80%;
  }
  .tf_titleCobrowsing {
    width: 50%;
    min-width: 300px;
    font-size: 1.2em;
  }
  .tf_btn_Cobrowsing{
    width: 100px;
  }
}
@media screen and ( min-width: 320px ) and ( max-width: 640px ){
  #CobrowsingActif.Actif {
    width: 98%;
  }
  .tf_titleCobrowsing {
    width: 40%;
    min-width: 150px;
    font-size: 1.0em;
  }
  .tf_btn_Cobrowsing{
    width: 90px;
  }
}
@media screen and ( max-width: 320px ){
  #CobrowsingActif.Actif {
    width: 316px;
  }
  .tf_titleCobrowsing {
    width: 130px;
    min-width: 120px;
    font-size: 0.9em;
  }
  .tf_btn_Cobrowsing{
    width: 80px;
  }
}


  #CobrowsingActif{
    display: -webkit-inline-box;
    display: inline-flex;
    margin: 6px 0px 0px 6px;
    height: 60px !important;
    border-radius: 30px;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 1000000000;
    overflow: hidden;
    -webkit-box-shadow: 0px 3px 12px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 3px 12px rgba(0,0,0,0.3);
    box-shadow: 0px 3px 12px rgba(0,0,0,0.3);
    -webkit-transition: width 0.5s ease, opacity 0.5s ease, background-color 0.5s ease;
    -moz-transition: width 0.5s ease, opacity 0.5s ease, background-color 0.5s ease;
    -o-transition: width 0.5s ease, opacity 0.5s ease, background-color 0.5s ease;
    transition: width 0.5s ease, opacity 0.5s ease, background-color 0.5s ease;
  }

  #CobrowsingActif.Actif {
    background-color: #e3328b;
  }

  #CobrowsingActif.Inactif {
    background-color: #E3328B;
    width: 60px;
  }
  /*--- icone cobrowsing Menu---*/
  #tf_actionCobrowsing {
    width: 60px;
    height: 60px;
    position: absolute;
    z-index: 10;
    border-radius: 30px;
    cursor: pointer;
  }
  #tf_actionCobrowsing:hover {
    background-color: rgba(255, 255, 255, 0.1)
  }
  
  .tf_iconeCobrowsing{
    border: 1px solid;
    width: 50px;
    height: 40px;
    float: left;
    cursor: pointer;
  }
  .tf_tv_icon {
    color: #fff;
    position: absolute;
    width: 24px;
    height: 16px;
    border-radius: 2px;
    border: solid 1px currentColor;
  }
  .tf_tv_icon:before {
    content: '';
    position: absolute;
    left: 12px;
    bottom: -4px;
    width: 1px;
    height: 3px;
    background-color: currentColor;
  }
  .tf_tv_icon:after {
    content: '';
    position: absolute;
    left: 9px;
    bottom: -4px;
    width: 7px;
    height: 1px;
    background-color: currentColor;
  }
  .tf_tv1{
    margin-top: 18px;
    margin-left: 11px;
  }
  .tf_tv2{
    margin-top: 25px;
    margin-left: 24px;
    background-color: #fff;
  }
  /*--------------------------------*/
  /*--- icone cobrowsing fenetre Demande---*/
  #tf_iconeDemandeCobrowsing {
    width: 60px;
    height: 60px;
    position: relative;
    left: calc(50% - 30px);
    z-index: 10;
    border-radius: 30px;
    cursor: pointer;
    background-color: #e3328b;
  }

  .tf_tv_iconDemande {
    color: #fff;
    position: absolute;
    width: 24px;
    height: 16px;
    border-radius: 2px;
    border: solid 1px currentColor;
  }
  .tf_tv_iconDemande:before {
    content: '';
    position: absolute;
    left: 12px;
    bottom: -4px;
    width: 1px;
    height: 3px;
    background-color: currentColor;
  }
  .tf_tv_iconDemande:after {
    content: '';
    position: absolute;
    left: 9px;
    bottom: -4px;
    width: 7px;
    height: 1px;
    background-color: currentColor;
  }
  .tf_tv01{
    margin-top: 18px !important;
    margin-left: 11px !important;
  }
  .tf_tv02{
    margin-top: 25px !important;
    margin-left: 24px !important;
    background-color: #fff;
  }
  /*--------------------------------*/
  
  .tf_titleCobrowsing {
    float: left;
    text-align: center;
    color: #fff;
    margin-top: 20px;
    margin-left: 54px;
  }
  .tf_btn_Cobrowsing{
    float: left;
    height: 32px !important;
    display: block;
    text-align: center;
    margin-top: 15px;
    line-height: 32px;
    padding: 0px;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -o-border-radius: 4px;
    cursor: pointer;
    border: 0px !important;
    font-size: 15px;
    font-weight: normal;
    background-color:#fff;
    color: #E3328B;
  }

  #tf_btn_MenuCobrowsing {
    color: #fff;
    position: relative;
    right: 6px;
    margin-top: 20px;
    margin-right: 12px;
    width: 21px;
    height: 21px;
    cursor: pointer;
    opacity:0;
    transition: position 0.5s ease, opacity 3s ease;
  }
  #tf_btn_MenuCobrowsing.Actif {
    position: absolute;
    opacity:1;
  }
  #tf_btn_MenuCobrowsing:before {
    content: '';
    position: absolute;
    top: 10px;
    width: 21px;
    height: 1px;
    background-color: currentColor;
    -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
  }
  #tf_btn_MenuCobrowsing:after {
    content: '';
    position: absolute;
    top: 10px;
    width: 21px;
    height: 1px;
    background-color: currentColor;
    -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
  }

/*--------- FIN cobrowsing --------*/

.wz_SendFileDropZone {
    position: absolute;
    left: calc(50% - 16px);
    top: 58px !important;
    z-index: 10000;
}
/*-----------------------------------		*/
/*--- 		Drop File 	 ---			*/
/*-----------------------------------		*/
.dropzone{
	position:absolute;top:0;
	-webkit-box-sizing:border-box;
	box-sizing:border-box;
	background-color:rgba(247, 243, 243, 0.8);
	color:#262626;
	width:100%;
	height:calc(100% - 113px);
	z-index:100;
	text-align:center
}
.dropzone .dz-preview:hover .dz-image img {
    -webkit-transform: scale(1) !important;
    -moz-transform: scale(1) !important;
    -ms-transform: scale(1) !important;
    -o-transform: scale(1) !important;
    transform: scale(1) !important;
    -webkit-filter: blur(0px) !important;
    filter: blur(0px) !important;
}

.dropzone .dz-preview {
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin: 0px !important;
    min-height: 100px;
    /* left: 50%; */
    margin-top: calc(50% - 50px) !important;
}
.dz-image{
	text-align: center;
}
.dz-image img{
	border: 5px #FFF solid;
}
.dropzone .dz-preview .dz-image {
    border-radius: 0px !important;
    overflow: hidden;
    min-height: 120px;
    min-width: 120px;
    position: relative;
    display: block;
	z-index: 10;
	border: 5px #FFF solid;
}
.dz-remove{
	width: 25px;
    height: 25px;
    position: absolute;
    top: -10px;
    right: -10px;
    z-index: 1003;
    background-color:rgba(227,50,139,1);
	border-radius: 50%;
}
.dz-remove svg{
	margin: 5px;
	width: 15px;
	height : 15px
}
#WatchBox-chatSendDropZone svg{
	width: 100%;
    height: auto;
    margin: 1px;
    fill: rgba(158,189,59,1);
}

#WatchBox-chatSendDropZone{
	background-color: rgba(227,50,139,1);
	border-radius : 50%;
	top: calc(50px + 16px /2);
	width: calc(343px / 8);
	height: calc(343px / 8);
	left:calc(50% - 29px );
	z-index: 1001;
	position: absolute;
}
.dz-progress {
  
	top: 84% !important;
	border: rgba(227,50,139,1) 2px solid;
  
}
svg.wz_icone_attachment{
	fill:rgba(158,189,59,1);
	fill: rgba(255,255,255,1);
    width: calc(343px / 8);
    transform: rotate(-45deg);
    margin: 10px;
}
span.formatFile {
    display: inline-block;
    height: 50px;
    line-height: 50px;
    padding-right: 15px;
    float: right;
}

a#filednwl:hover svg, a#filednwl:hover span{
	text-decoration: none;
	color: rgba(111,125,17,1);
	fill:rgba(111,125,17,1);
}
a#imgdnwl {
    display: block;
    position: relative;
}

#tfzoomin{
  display:none; 
  position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100006;
    background-color: rgba(227,50,139,0.5);
}

#tfzoomin svg {
    display:none;
    width: 50px;
    position: absolute;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    fill:rgba(158,189,59,1);
}
a#imgdnwl:hover #tfzoomin, a#imgdnwl:hover #tfzoomin svg{
  display:block;
}
.wz_SendFileDropZone.superInactif {
  display: none !important;
}
.wz_SendFileDropZone.superActif {
  display: block !important;
}
#wz_dropzone.dropzone {
  /*height: 100% !important;
  min-height: 100% !important;
*/
height: calc(422px - 125px);
top: 0 !important;
}
#WatchBox-chatSendDropZone{
  border-radius: 50%;
  position: absolute;
  top:0px;
  right:2px;
  /*background-color: #90D1E5;*/
  background-color:rgba(158,189,59,1);
  cursor: pointer;
  width: 45px;
  height: 45px;
}
#WatchBox-chatSendDropZone:hover{
  background-color:rgba(227,50,139,1);
}
#WatchBox-chatSendDropZone.inactif{
  background-color: #b9b9b9;
  cursor: default;
}


/* Transition Emoji Picker */
@keyframes animationEmoji{
  0% {
    opacity:0;
    transform: translate(0px,0px) scaleX(0.00) scaleY(0.00);
  }
  100% {
    opacity:1;
    transform: translate(0px,-100px) scaleX(1.00) scaleY(1.00);
  }
}
#picker_panel:before{
content: "";
position: absolute;
left: inherit;
right: 100%;
top: calc(100% - 28px);
width: 0;
height: 0;
border-left: inherit;
border-top: 8px solid transparent;
border-right: 10px solid #FFF;
border-bottom: 8px solid transparent;
}

/*maison du convertible*/
#vwatch, #mydesk, .mydesk_titleTab, .mydesk_titleTab p{
	font-family: "proxima-nova Semibold",sans-serif !important;
}
#mydesk.desk_Bottom .titleOuterMydesk span{

	width: calc(325px - 110px);
    width: -webkit-calc(325px - 110px);
}
 .mydesk_titleTab p{
 	font-weight:600 !important;
 }

.icone_openMydesk{
	background-image: url(customcss/media/btchat-mdc.svg) !important;
	width: 51px !important;
    height: 37px;
	background-repeat: no-repeat;
	background-position:0px 0px !important; 
}
.icone_openCallback{
	background-image: url(customcss/media/btchat-mdc.svg) !important;
	width: 51px !important;
    height: 37px;
	background-repeat: no-repeat;
	background-position:-227px -2px !important 
}


#mydesk.open.mydesk-template.desk_Bottom #mydesk-outer{
	background:#efefef;
	border:1px #bababa solid;
}
#contentDesk{
	border-left:1px #bababa solid;
	border-right:1px #bababa solid;
	border-bottom:1px #bababa solid;
}
#mydesk.mydesk-template #mydesk_openMydesk, #mydesk.mydesk-template #mydesk_openMydesk:hover{
	background: none;
}
#mydesk.desk_Bottom #mydesk-outer{
	width: calc(343px - 0px);

}
#mydesk.open.desk_Bottom .icone_openMydesk{
    background-position: -55px 0px !important
}
#WatchBox-optionChat{
	display: none;
}
textarea#WatchBox-message{
	min-width: calc(100% - 70px);
	max-width: calc(100% - 90px);
	border-bottom-left-radius: 0px;
	background-color: #FFF !important;
    line-height: 25px;
}
#mydesk.mydesk-template #contentDesk{
	background: #bababa;
}
#WatchBox-conversation{
	background: #FFF;
}
#WatchBox-chatSend {
    top: 0px !important;
}
#mydesk.open.desk_Bottom.iconsOff #WatchBox-conversation{
	height: calc(422px - 35px) !important;
    height: moz-calc(422px - 35px)!important;
}
#mydesk.open.desk_Bottom #WatchBox-MessageWrapper{
	 bottom: -24px;
}
#WatchBox-chatSend, #WatchBox-chatSend:hover{
	border-radius:0;
	background-color: #bababa;
}
.icone_sendMessage{
	background-image: url(customcss/media/btchat-mdc.svg) !important;
	width: 51px !important;
	background-repeat: no-repeat;
	background-position:0px 0px !important; 
}
.currentAgentName{
	text-transform: uppercase;
	font-weight: 600;
	color: #d13076 !important;
	font-size:15px!important;
	padding-left:10px !important;
}
.currentAgentJob {
    color: #727272;
    font-style: normal;
    font-size:11px !important;
}
#watchFormABS.watchFormDisplay{
	height: 280px;
}
#mydesk.mydesk-template #watchFormABS .btn, #mydesk.mydesk-template #watchFormABS .btn_back{
	height: 36px;
	width: calc(100% - 20px);
	display: block !important;

}
#watchFormABS .btn{
	height: 36px;
	font-family: "proxima-nova Semibold",sans-serif !important;s
	display: block !important;
    margin: 0 7px;
    text-align: center;
    left: inherit;
    padding:6px 10px !important;
}
#mydesk.agoffline #contentDesk {
    background: #ffffff !important;
}
#mydesk.agonline #contentDesk {
    background: #bababa !important;
}
#mydesk.agoffline #contentListAgent{
	display:none !important;
}
#mydesk.agoffline #contentListAgent .icone_listeAgent{
	display: none!important;
}
#mydesk.open .mydesk-outer #mydesk_openCallback{
/*	display:none !important;*/
	background-color: #efefef !important;
}
#mydesk.open .icone_openCallback{
	background-position:-181px -2px !important; 
}

input[name=msg_company]{
	display: none !important;
}
#watchFormABS input[type="text"], #watchFormABS textarea{
	border-radius: 0px;
	border:1px #bababa solid;
	box-shadow:0px 0px 0px !important;
}
#ABSTexteTel{
	width: 48%;
    margin-top: -76px !important;
    margin-left: 47% !important;
}
#ABSTexteMessage{
	margin-top: 57px !important;
}
#titleABS{
	margin-left: 7px !important;
	margin-right: 7px !important;
	margin-bottom: 20px !important;
	margin-top: 20px !important;
}
#ABSTexteMessage textarea{
	    max-height: 54px !important;
    min-height: 54px !important;
}
#mydesk.desk_Bottom.listAgentsOn #watchFormABS.watchFormDisplay .contentFormABS{
	    padding: 0;
    width: calc(100% - 30px);
    margin: 0 auto !important;
}
#mydesk-callback{
	border-radius: 0px !important;
}
#mydesk-callback.mydesk-callback .mydesk-title-callback{
	background:#efefef;
	border:1px #bababa solid;
	border-radius: 0px !important;
}
#mydesk-callback-photo{
	display: none;
}
#callee{
	border:1px #bababa solid;
	border-radius: 0px !important;
}
.wz_connexionSocket {
    text-align: center;
    position: absolute;
    top: 40px;
    width: 100%;
    background-color: rgba(255,255,255,0.9);
    height: calc(100% - 40px);
    z-index: 10;
}
#mabs1, #mabs2{
	font-style: italic;
	color:#bababa;
} 
#mydesk-callback #closeCallback {
    position: absolute;
    top: 0px;
    right: 4px;
    border-radius: 0px;
    -moz-border-radius: 0px;
    -webkit-border-radius: 0px;
    z-index: 6;
    cursor: pointer;
    width: 51px !important;
    height: 35px;
    background-position: -50px 0px !important;
}
#closeCallback.hideCallback{
	background-image: url(customcss/media/btchat-mdc.svg) !important;
}
#mydesk-callback.mydesk-callback #closeCallback{
	background-color:transparent !important;
}
#mydesk-callback.callback_Bottom:before{
	display: none;
}
#mydesk-callback.mydesk-callback{
	background:#FFF !important;
	border:1px #bababa solid !important;
}
#mydesk-callback.mydesk-callback .mydesk-title-callback{
	border-top:0px #bababa solid !important;
	border-left:0px #bababa solid !important;
	border-right:0px #bababa solid !important;
	color: #efefef !important;
}
#mydesk-callback.mydesk-callback .mydesk-content-callback{
	max-width:68%;
	margin: 0 auto;
	text-align: center;
	font-style: italic;
	color:#bababa;
} 
#mydesk-callback .btn-callback.actif {
    display: block;
    width: 35%;
    text-align: center;
    font-weight: 600;
   }

   #callback_invit {
   max-width:auto;
}
#mydesk-callback .actif{
	display: inline-block;
}
#mydesk-callback .form-control, #mydesk-callback .select2-search input[type=text]{
	height: 33px;
    width: 100%;
    max-width:100%;
    padding: 0px 0px 0px 10px;
    margin: 0px 0px 0px 0px;
}
#callback_invit {
    max-width: inherit !important;
}
.submit-callback{
	float: right;
}
.tel-callback{
	width: 41%;
    float: left;
}
#mydesk-callback .btn-callback {
    padding: 11px 20px 11px 20px
}
#mydesk-callback .btn-callback.actif {
    display: block;
  	width: auto;
    /* height: 24px; */
    border-radius: 0px;
    text-align: center;
    margin-right: 10px;
}
.descCurrentAgentContainer{
	margin: 7px 0 0 5px !important;
}
.imageCurrentAgent{
	height:38px;
}
#mydesk-callback .submit-callback{
	width: 52%;
	text-transform: uppercase;
	font-weight: 600;


}
#mydesk-callback.agoffline .mydesk-title-callback {
  background: #efefef !important;
    color: rgba(227,50,139,1) !important;
}
    .wz_attachmentsMedia{max-width: 224px;}