(this.webpackJsonpfaucet=this.webpackJsonpfaucet||[]).push([[0],{16:function(e,t,a){},18:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a.n(s),n=a(11),i=a.n(n),r=(a(16),a(4)),l=a.n(r),d=a(10),o=a(5),h=a(6),u=a(1),m=a(8),j=a(7),b=(a(18),a(3)),f=a.n(b),p=a(0),x=(c.a.Component,function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).mySubmitHandler=function(e){if(e.preventDefault(),s.state.isVerified){s.setState({message:"Loading...."});s.test(s.state.username)}else alert("Please verify that you are a human!")},s.mySubmitHandler1=function(e){e.preventDefault(),console.log(s.state.username1);s.test1(s.state.username1)},s.myChangeHandler=function(e){s.setState({username:e.target.value})},s.myChangeHandler1=function(e){s.setState({username1:e.target.value})},s.state={msg:{},res:"",isVerified:!1,account:!0,info:"",account_number:"",mnemonic:"",name:"",pubkey:"",show:!1},s.test=s.test.bind(Object(u.a)(s)),s.mySubmitHandler=s.mySubmitHandler.bind(Object(u.a)(s)),s.myChangeHandler=s.myChangeHandler.bind(Object(u.a)(s)),s.mySubmitHandler1=s.mySubmitHandler1.bind(Object(u.a)(s)),s.myChangeHandler1=s.myChangeHandler1.bind(Object(u.a)(s)),s.recaptchaLoaded1=s.recaptchaLoaded1.bind(Object(u.a)(s)),s.verifyCallback1=s.verifyCallback1.bind(Object(u.a)(s)),s.recaptchaLoaded2=s.recaptchaLoaded2.bind(Object(u.a)(s)),s.verifyCallback2=s.verifyCallback2.bind(Object(u.a)(s)),s}return Object(h.a)(a,[{key:"recaptchaLoaded1",value:function(){console.log("capcha successfully loaded")}},{key:"recaptchaLoaded2",value:function(){console.log("capcha successfully loaded")}},{key:"verifyCallback1",value:function(e){e&&this.setState({isVerified:!0})}},{key:"verifyCallback2",value:function(e){e&&this.setState({isVerified:!0})}},{key:"test",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var a,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={accAddress:t},e.next=3,fetch("api1",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)});case 3:return s=e.sent,e.next=6,s.json();case 6:(c=e.sent)&&this.setState({msg:c.msg,res:c.res.txhash,isLoaded:!0});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"test1",value:function(){var e=Object(d.a)(l.a.mark((function e(t){var a,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={accName:t},e.next=3,fetch("api2",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)});case 3:return s=e.sent,e.next=6,s.json();case 6:(c=e.sent)&&(console.log(c.msg),this.setState({info:c.msg,account_number:c.res.accAddress,mnemonic:c.res.mnemonic,name:c.res.name,pubkey:c.res.pubkey,show:!0,isLoaded:!0}));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.isLoaded,t=(this.state.account,this.state.show);return e?t?Object(p.jsx)("div",{className:"container mt-4",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"offset-md-2 col-md-8 offset-md-2",children:Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{class:"card mt-3",children:[Object(p.jsxs)("div",{class:"card-header",children:["Information: ",Object(p.jsxs)("h4",{children:[" ",this.state.info]})]}),Object(p.jsxs)("div",{class:"card-body",children:[Object(p.jsxs)("h6",{class:"card-title",children:["Name: ",this.state.name]}),Object(p.jsxs)("h6",{class:"card-title",children:["Account Address: ",this.state.account_number]}),Object(p.jsxs)("h6",{class:"card-title",children:["Mnemonic: ",this.state.mnemonic]}),Object(p.jsxs)("h6",{class:"card-title",children:["Pubkey: ",this.state.pubkey]}),Object(p.jsx)("button",{className:"btn btn-warning",onClick:function(){return window.location.reload(!1)},children:"Click to reload!"})]})]})})})})}):Object(p.jsx)("div",{className:"container mt-4",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"offset-md-2 col-md-8 offset-md-2",children:Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("div",{class:"card mt-3",children:[Object(p.jsx)("div",{class:"card-header",children:"Information"}),Object(p.jsxs)("div",{class:"card-body",children:[Object(p.jsxs)("h5",{class:"card-title",children:["Response: ",this.state.msg]}),Object(p.jsxs)("h5",{class:"card-title",children:["Txhash ",this.state.res]}),Object(p.jsx)("button",{className:"btn btn-warning",onClick:function(){return window.location.reload(!1)},children:"Click to reload!"})]})]})})})})}):Object(p.jsx)("div",{className:"container  mt-4",children:Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-8",children:Object(p.jsxs)("div",{className:"jumbotron",children:[Object(p.jsx)("h1",{children:" Faucet"}),Object(p.jsx)("h3",{children:"What is the Faucet?"}),Object(p.jsx)("p",{className:"text-justify cc",children:"The faucet is a web-based service that provides test ada to users of the testnet. While these tokens have no 'real world' value, they enable users to experiment with Cardano testnet features, without having to spend real ada on the mainnet."}),Object(p.jsx)("h3",{children:"To request tokens using the faucet:"}),Object(p.jsx)("p",{className:"text-justify cc",children:" 1) Enter the address of the account where you want to top up funds."}),Object(p.jsx)("p",{className:"text-justify cc",children:" 2) If you have been issued with an API key, please enter this to access any additional funds you may have been allocated."}),Object(p.jsxs)("p",{className:"text-justify cc",children:[" 3) Click ",Object(p.jsx)("strong",{children:"Request funds"}),"."]}),Object(p.jsx)("p",{className:"text-justify cc",children:" 4) Funds will be in the testnet account you specified within a few minutes"}),Object(p.jsx)("p",{className:"text-justify cc",children:"We have applied a daily faucet limit of 1000 test ada a day for each testnet user to ensure everyone has access to funds."}),Object(p.jsx)("form",{onSubmit:this.mySubmitHandler,children:Object(p.jsxs)("div",{class:"form-group",children:[Object(p.jsx)("label",{className:"cc",children:"Enter Account Address to get Tidep"}),Object(p.jsx)("input",{type:"text",placeholder:"Enter Account Address",className:"form-control col-md-4",onChange:this.myChangeHandler,required:!0}),Object(p.jsx)("input",{type:"submit",className:"btn btn-info mt-3"}),Object(p.jsx)(f.a,{elementID:"a1",sitekey:"6Le_SZAcAAAAANMWdmDJKQgoaF1QwXWZR6I9Ulxi",render:"explicit",onloadCallback:this.recaptchaLoaded1,verifyCallback:this.verifyCallback1})]})}),Object(p.jsxs)("h2",{className:"mt-3",children:[" ",this.state.message]}),Object(p.jsx)("p",{className:"text-justify cc",children:"When you have finished using your test tokens, please return them to the faucet so that other members of the community can use them. Please return your test tokens to this address:"}),Object(p.jsx)("p",{className:"text-dark cc1",children:Object(p.jsx)("strong",{children:"addr_test1qqr585tvlc7ylnqvz8pyqwauzrdu0mxag3m7q56grgmgu7sxu2hyfhlkwuxupa9d5085eunq2qywy7hvmvej456flknswgndm3"})})]})}),Object(p.jsxs)("div",{className:"col-md-4 pt-5",children:[Object(p.jsx)("h1",{children:"Create Wallet"}),Object(p.jsx)("p",{className:"text-dark cc",children:Object(p.jsx)("strong",{children:"TO create new wallet please fill the below form"})}),Object(p.jsx)("p",{className:"text-danger",children:Object(p.jsx)("strong",{children:"* Please save information somewhere safe after account got created!"})}),Object(p.jsx)("form",{onSubmit:this.mySubmitHandler1,children:Object(p.jsxs)("div",{className:"form-group",children:[Object(p.jsx)("label",{className:"cc",children:"Enter UserName"}),Object(p.jsx)("input",{type:"text",placeholder:"Enter User Name",className:"form-control col-md-4",onChange:this.myChangeHandler1,required:!0}),Object(p.jsx)(f.a,{elementID:"a2",sitekey:"6Le_SZAcAAAAANMWdmDJKQgoaF1QwXWZR6I9Ulxi",render:"explicit",onloadCallback:this.recaptchaLoaded2,verifyCallback:this.verifyCallback2}),Object(p.jsx)("input",{type:"submit",className:"btn btn-info mt-3"})]})})]})]})})}}]),a}(c.a.Component)),y=x,O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))};a(20);i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),O()}},[[21,1,2]]]);
//# sourceMappingURL=main.6584cedb.chunk.js.map