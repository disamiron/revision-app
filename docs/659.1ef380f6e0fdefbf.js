"use strict";(self.webpackChunkrevision_app=self.webpackChunkrevision_app||[]).push([[659],{9659:(R,v,s)=>{s.r(v),s.d(v,{DashboardModule:()=>B});var d=s(6895),c=s(9197),r=s(136),a=s(4006),C=s(9186),t=s(4650),p=s(4859),l=s(9549),g=s(4144),m=s(7392),h=s(5412);function x(n,i){1&n&&(t.TgZ(0,"button",5)(1,"mat-icon"),t._uU(2,"stop"),t.qZA(),t._uU(3," \u0417\u0430\u043a\u043e\u043d\u0447\u0438\u0442\u044c \u0440\u0435\u0432\u0438\u0437\u0438\u044e "),t.qZA())}let M=(()=>{class n{constructor(e){this.data=e,this.urlValues=r.K}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.WI))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-menu"]],decls:16,vars:2,consts:[[1,"modal"],[1,"modal__buttons"],["mat-dialog-close","cancel",3,"routerLink"],["mat-stroked-button","","color","primary",1,"button","white"],["class","button","mat-raised-button","","color","warn",4,"ngIf"],["mat-raised-button","","color","warn",1,"button"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"a",2)(3,"button",3)(4,"mat-icon"),t._uU(5,"search"),t.qZA(),t._uU(6," \u041f\u043e\u0438\u0441\u043a "),t.qZA()(),t.TgZ(7,"button",3)(8,"mat-icon"),t._uU(9," insert_drive_file"),t.qZA(),t._uU(10," \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c "),t.qZA(),t.TgZ(11,"button",3)(12,"mat-icon"),t._uU(13,"save_alt"),t.qZA(),t._uU(14," \u0421\u043a\u0430\u0447\u0430\u0442\u044c "),t.qZA(),t.YNc(15,x,4,0,"button",4),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("routerLink",o.urlValues.dashboard+"/"+o.urlValues.revision+"/"+o.data.revisionId+"/"+o.urlValues.search),t.xp6(13),t.Q6J("ngIf",o.data.isThereRevision))},dependencies:[d.O5,c.yS,p.lW,h.ZT,m.Hw],styles:["[_nghost-%COMP%]{background-color:#791c1cf2!important}.modal[_ngcontent-%COMP%]{box-sizing:border-box;max-width:600px;min-width:270px;min-height:200px;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:20px}.modal__buttons[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:20px;margin:30px 0 20px;box-sizing:border-box;min-width:95%}.modal__buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%], .modal__buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{height:60px;width:100%;max-width:400px;border-radius:10px}.modal__buttons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]     .mat-button-wrapper, .modal__buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]     .mat-button-wrapper{margin-right:10px}.white[_ngcontent-%COMP%]{background:#fff}"]}),n})();function I(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",3),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.toRevision())}),t.TgZ(1,"mat-icon"),t._uU(2," speaker_phone"),t.qZA()()}}let _=(()=>{class n{constructor(e,o){this._dialog=e,this._router=o,this.revisionId=null,this.productId=null,this.searchPage=!1,this.urlValues=r.K}goHome(){this._router.navigateByUrl(r.K.dashboard)}toRevision(){this._router.navigateByUrl(r.K.dashboard+"/"+r.K.revision+"/"+this.revisionId)}showMenu(){this._dialog.open(M,{data:{isThereRevision:!0,revisionId:this.revisionId}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.uw),t.Y36(c.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-footer-menu"]],inputs:{revisionId:"revisionId",productId:"productId",searchPage:"searchPage"},decls:8,vars:1,consts:[[1,"footer-menu"],["mat-mini-fab","","color","white",3,"click"],["mat-fab","","color","primary","class","big",3,"click",4,"ngIf"],["mat-fab","","color","primary",1,"big",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return o.goHome()}),t.TgZ(2,"mat-icon"),t._uU(3,"home"),t.qZA()(),t.YNc(4,I,3,0,"button",2),t.TgZ(5,"button",1),t.NdJ("click",function(){return o.showMenu()}),t.TgZ(6,"mat-icon"),t._uU(7,"menu"),t.qZA()()()),2&e&&(t.xp6(4),t.Q6J("ngIf",o.productId||o.searchPage))},dependencies:[d.O5,p.lW,m.Hw],styles:["[_nghost-%COMP%]{display:flex;justify-content:center}.footer-menu[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end;min-width:290px;max-width:400px;width:100%;height:40px}.big[_ngcontent-%COMP%]{width:80px;height:80px}"]}),n})();function Z(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"form",6)(1,"mat-form-field",7)(2,"mat-label"),t._uU(3,"\u0428\u0442\u0440\u0438\u0445-\u043a\u043e\u0434 \u0438\u043b\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u0434"),t.qZA(),t._UZ(4,"input",8),t.qZA(),t.TgZ(5,"button",9),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.submit())}),t._uU(6," \u0414\u0430\u043b\u0435\u0435 "),t.TgZ(7,"mat-icon"),t._uU(8,"library_add"),t.qZA()()()}if(2&n){const e=t.oxw();t.Q6J("formGroup",e.manuallForm),t.xp6(1),t.Q6J("color","white"),t.xp6(4),t.Q6J("disabled",e.manuallForm.invalid)}}function y(n,i){if(1&n&&(t.TgZ(0,"h2"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.barcodeValue)}}let P=(()=>{class n{constructor(e,o,u){this._fb=e,this._router=o,this._activatedRoute=u,this.barcodeValue=null,this.started=!1,this.isManuallLogic=!1,this.isLoading=!0,this.config={decoder:{readers:["ean_reader"]},frequency:5},this.manuallForm=this._fb.group({barcode:[null,a.kI.required]}),this.revisionId=this._activatedRoute.snapshot.paramMap.get("revisionId")}ngAfterViewInit(){this.barcodeScanner.start()}onValueChanges(e){"ean_13"===e.codeResult.format&&e?.codeResult?.code&&"4"===e.codeResult?.code[0]&&(this.manuallForm.patchValue({barcode:e.codeResult.code}),this.submit())}submit(){this.manuallForm.invalid||this._router.navigateByUrl(r.K.dashboard+"/"+r.K.revision+"/"+this.revisionId+"/"+r.K.product+"/"+this.manuallForm.value.barcode)}changeEnterOption(){this.isLoading||(this.isManuallLogic=!this.isManuallLogic,this.isManuallLogic?(this.barcodeScanner.stop(),this.started=!1):(this.isLoading=!0,this.barcodeScanner.start()))}barcodeScanStarted(){this.started=!0,this.isLoading=!1}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.qu),t.Y36(c.F0),t.Y36(c.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-barcode-scanner"]],viewQuery:function(e,o){if(1&e&&t.Gf(C.al,5),2&e){let u;t.iGM(u=t.CRH())&&(o.barcodeScanner=u.first)}},decls:11,vars:8,consts:[[1,"content"],[3,"config","valueChanges","started"],[3,"formGroup",4,"ngIf"],[4,"ngIf"],["mat-raised-button","","color","primary",1,"manual-key",3,"disabled","click"],[3,"revisionId"],[3,"formGroup"],["appearance","fill",3,"color"],["type","number","formControlName","barcode","matInput",""],["mat-raised-button","","color","accent",1,"h50",3,"disabled","click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2),t.qZA(),t.TgZ(3,"barcode-scanner-livestream",1),t.NdJ("valueChanges",function(b){return o.onValueChanges(b)})("started",function(){return o.barcodeScanStarted()}),t.qZA(),t.YNc(4,Z,9,3,"form",2),t.YNc(5,y,2,1,"h2",3),t.TgZ(6,"button",4),t.NdJ("click",function(){return o.changeEnterOption()}),t._uU(7),t.TgZ(8,"mat-icon"),t._uU(9),t.qZA()()(),t._UZ(10,"app-footer-menu",5)),2&e&&(t.xp6(2),t.hij(" ",o.isManuallLogic?"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0448\u0442\u0440\u0438\u0445 \u043a\u043e\u0434 \u0438\u043b\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u0434":"\u041e\u0442\u0441\u043a\u0430\u043d\u0438\u0440\u0443\u0439\u0442\u0435 \u0442\u043e\u0432\u0430\u0440"," "),t.xp6(1),t.Q6J("config",o.config),t.xp6(1),t.Q6J("ngIf",o.isManuallLogic),t.xp6(1),t.Q6J("ngIf",o.barcodeValue),t.xp6(1),t.Q6J("disabled",o.isLoading),t.xp6(1),t.hij(" ",o.isManuallLogic?"\u0421\u043a\u0430\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c":"\u0420\u0443\u0447\u043d\u043e\u0439 \u0432\u0432\u043e\u0434"," "),t.xp6(2),t.hij(" ",o.isManuallLogic?"speaker_phone":"keyboard",""),t.xp6(1),t.Q6J("revisionId",o.revisionId))},dependencies:[d.O5,p.lW,l.KE,l.hX,g.Nt,m.Hw,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.sg,a.u,C.al,_],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:560px;height:88vh;align-items:center}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;height:100%;overflow-y:auto}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}.content[_ngcontent-%COMP%]   .manual-key[_ngcontent-%COMP%]{position:absolute;top:66vh;z-index:2}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:300px}"]}),n})();var O=s(7009);let T=(()=>{class n{constructor(e,o,u,b){this._fb=e,this._activatedRoute=o,this._snackBar=u,this._router=b,this.productForm=this._fb.group({productId:[null],barcode:[null],productName:[null],quantity:[null,a.kI.required]}),this.revisionId=this._activatedRoute.snapshot.paramMap.get("revisionId"),this.productId=this._activatedRoute.snapshot.paramMap.get("productId")}ngOnInit(){this.productForm.patchValue({barcode:this.productId,productName:"Coca-cola 1\u043b."}),this.productForm.controls.barcode.disable(),this.productForm.controls.productName.disable()}sumbit(){this._snackBar.open("\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d. \u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b.","\u0417\u0430\u043a\u0440\u044b\u0442\u044c",{duration:3e3}),this._router.navigateByUrl(r.K.dashboard+"/"+r.K.revision+"/"+this.revisionId)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.qu),t.Y36(c.gz),t.Y36(O.ux),t.Y36(c.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-product-form"]],decls:21,vars:7,consts:[[1,"content"],[3,"formGroup"],["appearance","fill",3,"color"],["formControlName","barcode","matInput",""],["formControlName","productName","matInput",""],["type","number","formControlName","quantity","matInput",""],["mat-raised-button","","color","accent",1,"h50",3,"disabled","click"],[3,"revisionId","productId"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430"),t.qZA(),t.TgZ(3,"form",1)(4,"mat-form-field",2)(5,"mat-label"),t._uU(6,"\u0428\u0442\u0440\u0438\u0445-\u043a\u043e\u0434"),t.qZA(),t._UZ(7,"input",3),t.qZA(),t.TgZ(8,"mat-form-field",2)(9,"mat-label"),t._uU(10,"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430"),t.qZA(),t._UZ(11,"input",4),t.qZA(),t.TgZ(12,"mat-form-field",2)(13,"mat-label"),t._uU(14,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),t.qZA(),t._UZ(15,"input",5),t.qZA(),t.TgZ(16,"button",6),t.NdJ("click",function(){return o.sumbit()}),t._uU(17," \u0413\u043e\u0442\u043e\u0432\u043e "),t.TgZ(18,"mat-icon"),t._uU(19,"library_add"),t.qZA()()()(),t._UZ(20,"app-footer-menu",7)),2&e&&(t.xp6(3),t.Q6J("formGroup",o.productForm),t.xp6(1),t.Q6J("color","white"),t.xp6(4),t.Q6J("color","white"),t.xp6(4),t.Q6J("color","white"),t.xp6(4),t.Q6J("disabled",o.productForm.invalid),t.xp6(4),t.Q6J("revisionId",o.revisionId)("productId",o.productId))},dependencies:[p.lW,l.KE,l.hX,g.Nt,m.Hw,a._Y,a.Fj,a.wV,a.JJ,a.JL,a.sg,a.u,_],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:560px;height:88vh;align-items:center}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;height:100%;overflow-y:auto}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:300px}"]}),n})(),A=(()=>{class n{constructor(e,o){this._fb=e,this._activatedRoute=o,this.searchFormGroup=this._fb.group({searchValue:[null]}),this.revisionId=this._activatedRoute.snapshot.paramMap.get("revisionId")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.qu),t.Y36(c.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-revision-search"]],decls:9,vars:3,consts:[[1,"content"],[3,"formGroup"],["matInput","","formControlName","searchValue"],[3,"revisionId","searchPage"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0440\u0435\u0432\u0438\u0437\u0438\u0438"),t.qZA(),t.TgZ(3,"form",1)(4,"mat-form-field")(5,"mat-label"),t._uU(6,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0448\u0442\u0440\u0438\u0445-\u043a\u043e\u0434 \u0438\u043b\u0438 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u0434"),t.qZA(),t._UZ(7,"input",2),t.qZA()()(),t._UZ(8,"app-footer-menu",3)),2&e&&(t.xp6(3),t.Q6J("formGroup",o.searchFormGroup),t.xp6(5),t.Q6J("revisionId",o.revisionId)("searchPage",!0))},dependencies:[l.KE,l.hX,g.Nt,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,_],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:560px;height:88vh;align-items:center}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;height:100%;overflow-y:auto}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}.content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{min-width:300px}"]}),n})();const F=[{shopId:"3fa85f64-5717-4562-b3fc-2c963f66afa6",name:"Fix price",address:"\u0422\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442\u043d\u044b\u0439 \u043f\u0435\u0440., 1, \u043b\u0438\u0442. \u0410, \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0420\u043e\u0441\u0441\u0438\u044f, 191119",revisionId:"3fa85f64-5717-4562-b3fc-2c963f66afa6",isThereRevision:!0},{shopId:"3fa85f64-5717-4562-b3fc-2c963f66afa6",name:"Fix Price, \u0442\u043e\u0432\u0430\u0440\u044b \u0434\u043b\u044f \u0434\u043e\u043c\u0430",address:"\u0443\u043b. \u0421\u043e\u0432\u0435\u0442\u0441\u043a\u0430\u044f, 10, \u041a\u043e\u0440\u044f\u0436\u043c\u0430, \u0410\u0440\u0445\u0430\u043d\u0433\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u043e\u0431\u043b., \u0420\u043e\u0441\u0441\u0438\u044f, 165650",revisionId:"3fa85f64-5717-4562-b3fc-2c963f66afa6",isThereRevision:!0},{shopId:"3fa85f64-5717-4562-b3fc-2c963f66afa6",name:"Fix price Cyber Market",address:"\u041a\u043e\u043d\u0434\u0440\u0430\u0442\u044c\u0435\u0432\u0441\u043a\u0438\u0439\u043f\u0440-\u0442, \u0434. 40 \u043b\u0438\u0442. \u0410, \u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0420\u043e\u0441\u0441\u0438\u044f, 195197",revisionId:"3fa85f64-5717-4562-b3fc-2c963f66afa6",isThereRevision:!1},{shopId:"3fa85f64-5717-4562-b3fc-2c963f66afa6",name:"Fix price MEGAPOLIS",address:"\u041a\u043e\u0440\u044f\u0436\u043c\u0430, \u0422\u0426 MEGAPOLIS",revisionId:"3fa85f64-5717-4562-b3fc-2c963f66afa6",isThereRevision:!1},{shopId:"3fa85f64-5717-4562-b3fc-2c963f66afa6",name:"Fix price MEGAPOLIS",address:"\u041a\u043e\u0440\u044f\u0436\u043c\u0430, \u0422\u0426 MEGAPOLIS",revisionId:"3fa85f64-5717-4562-b3fc-2c963f66afa6",isThereRevision:!1},{shopId:"3fa85f64-5717-4562-b3fc-2c963f66afa6",name:"Fix price MEGAPOLIS",address:"\u041a\u043e\u0440\u044f\u0436\u043c\u0430, \u0422\u0426 MEGAPOLIS",revisionId:"3fa85f64-5717-4562-b3fc-2c963f66afa6",isThereRevision:!1},{shopId:"3fa85f64-5717-4562-b3fc-2c963f66afa6",name:"Fix price MEGAPOLIS",address:"\u041a\u043e\u0440\u044f\u0436\u043c\u0430, \u0422\u0426 MEGAPOLIS",revisionId:"3fa85f64-5717-4562-b3fc-2c963f66afa6",isThereRevision:!1}];var f=s(3546);function w(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"mat-card",1),t.NdJ("click",function(){t.CHM(e);const u=t.oxw();return t.KtG(u.shop.isThereRevision?u.navigateToRevision():u.showMenu())}),t.TgZ(1,"mat-card-header")(2,"mat-card-title"),t._uU(3),t.qZA(),t.TgZ(4,"mat-card-subtitle"),t._uU(5),t.qZA()(),t._UZ(6,"div",2),t.qZA()}if(2&n){const e=t.oxw();t.ekj("pointer",e.shop.isThereRevision||e.isModerator)("active",e.shop.isThereRevision),t.xp6(3),t.hij("",e.shop.name," "),t.xp6(2),t.Oqu(e.shop.address),t.xp6(1),t.ekj("green",e.shop.isThereRevision)}}let E=(()=>{class n{constructor(e,o){this._dialog=e,this._router=o,this.shop=null,this.isModerator=!0}navigateToRevision(){this._router.navigateByUrl(r.K.dashboard+"/"+r.K.revision+"/"+this.shop?.revisionId)}showMenu(){this._dialog.open(M,{data:{...this.shop}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.uw),t.Y36(c.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-shop-card"]],inputs:{shop:"shop"},decls:1,vars:1,consts:[[3,"pointer","active","click",4,"ngIf"],[3,"click"],[1,"indicator"]],template:function(e,o){1&e&&t.YNc(0,w,7,8,"mat-card",0),2&e&&t.Q6J("ngIf",o.shop)},dependencies:[d.O5,f.a8,f.dk,f.n5,f.$j],styles:[".mat-card[_ngcontent-%COMP%]{min-width:290px;max-width:600px;min-height:80px;display:flex;align-items:center;justify-content:space-between;background-color:#ebebeb}.mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]{margin-right:25px}.mat-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{display:flex;align-items:center}.indicator[_ngcontent-%COMP%]{position:absolute;top:20px;right:15px;width:15px;height:15px;background-color:#8b6868;border-radius:50%}.green[_ngcontent-%COMP%]{animation:blink 2s linear infinite}.pointer[_ngcontent-%COMP%]{cursor:pointer}.active[_ngcontent-%COMP%]{background-color:#fff}@keyframes blink{0%{background-color:#26d820}50%{background-color:#5f7e5f}51%{background-color:#5f7e5f}to{background-color:#26d820}}"]}),n})();function S(n,i){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"app-shop-card",3),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("shop",e)}}const U=[{path:"",component:(()=>{class n{constructor(){this.shopList=F}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-shop-list"]],decls:5,vars:1,consts:[[1,"content"],[1,"shop-list"],[4,"ngFor","ngForOf"],[3,"shop"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"\u0421\u043f\u0438\u0441\u043e\u043a \u043c\u0430\u0433\u0430\u0437\u0438\u043d\u043e\u0432"),t.qZA(),t.TgZ(3,"div",1),t.YNc(4,S,2,1,"div",2),t.qZA()()),2&e&&(t.xp6(4),t.Q6J("ngForOf",o.shopList))},dependencies:[d.sg,E],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:560px;height:88vh;align-items:center}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;height:100%;overflow-y:auto}.content[_ngcontent-%COMP%]   .shop-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}"]}),n})()},{path:`${r.K.revision}/:revisionId`,component:P},{path:`${r.K.revision}/:revisionId/${r.K.product}/:productId`,component:T},{path:`${r.K.revision}/:revisionId/${r.K.search}`,component:A}];let J=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.Bz.forChild(U),c.Bz]}),n})();var k=s(4442);let B=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,J,k.m]}),n})()}}]);