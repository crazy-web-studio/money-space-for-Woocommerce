(()=>{var e={788:e=>{e.exports=["@woocommerce/admin-layout","@woocommerce/block-templates","@woocommerce/components","@woocommerce/csv-export","@woocommerce/currency","@woocommerce/customer-effort-score","@woocommerce/data","@woocommerce/date","@woocommerce/dependency-extraction-webpack-plugin","@woocommerce/eslint-plugin","@woocommerce/experimental","@woocommerce/explat","@woocommerce/extend-cart-checkout-block","@woocommerce/navigation","@woocommerce/notices","@woocommerce/number","@woocommerce/product-editor","@woocommerce/tracks","@woocommerce/blocks-checkout","@woocommerce/blocks-components","@woocommerce/block-data","@woocommerce/blocks-registry","@woocommerce/settings"]}},t={};function c(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,c),a.exports}(()=>{"use strict";const e=window.React,t=window.wc.wcSettings,r=window.wp.htmlEntities,o=window.wc.wcBlocksRegistry;c(788);const a=window.wp.element,n="moneyspace",l=(0,t.getSetting)(`${n}_data`,{}),m=(0,r.decodeEntities)(l.title),d={name:n,label:(0,e.createElement)((({components:t,title:c,icons:r,id:o})=>{Array.isArray(r)||(r=[r]);const{PaymentMethodLabel:a,PaymentMethodIcons:n}=t;return(0,e.createElement)("div",{className:`wc-moneyspace-blocks-payment-method__label ${o}`},(0,e.createElement)(a,{text:c}),(0,e.createElement)(n,{icons:r}))}),{id:n,title:m,icons:l.icons}),content:(0,e.createElement)((t=>{const c={ccNo:"",ccName:"",ccExpMonth:"",ccExpYear:"",ccCVV:"",cardYear:"",minCardYear:(new Date).getFullYear()};var r=!1;null!==document.getElementById("radio-control-wc-payment-method-options-moneyspace")&&(r=document.getElementById("radio-control-wc-payment-method-options-moneyspace").checked);const[o,n]=(0,a.useState)(c),l=[1,2,3,4,5,6,7,8,9,10,11,12];(0,a.useEffect)((()=>{var e=m();console.log("cc_format",e)}));const m=()=>{for(var e=o.ccNo,t=e.replace(/\s+/g,"").replace(/[^0-9]/gi,"").match(/\d{4,16}/g),c=t&&t[0]||"",r=[],a=0,n=c.length;a<n;a+=4)r.push(c.substring(a,a+4));return r.length?r.join(" "):e},d=e=>t=>{n({...o,[e]:t.target.value})};return(0,e.createElement)("div",{class:"container ms-box",id:"credit-card-form"},(0,e.createElement)("div",{class:"card"},(0,e.createElement)("div",{class:"card-body"},(0,e.createElement)("div",null,(0,e.createElement)("input",{type:"hidden",id:"mspay",name:"mspay"}),(0,e.createElement)("div",{class:"form-group"},(0,e.createElement)("label",{for:"txtCardNumber"},"MNS_CC_NO ",(0,e.createElement)("abbr",{class:"required",title:"required"},"*")),(0,e.createElement)("input",{type:"text",class:"form-control",value:o.ccNo,onChange:d("ccNo"),id:"txtCardNumber",name:"cardNumber",required:"validateCardNumber()",onKeyDown:e=>{if(!/^[0-9]*$/.test(e.key)&&8!=e.keyCode)return e.preventDefault()},placeholder:"0000 0000 0000 0000"})),(0,e.createElement)("div",{class:"form-group"},(0,e.createElement)("label",{for:"txtHolder"},"MNS_CC_NAME ",(0,e.createElement)("abbr",{class:"required",title:"required"},"*")),(0,e.createElement)("input",{type:"text",class:"form-control",value:o.ccName,onChange:d("ccName"),id:"txtHolder",name:"cardHolder",required:"validateCardHolder()",keypress:"checkCardName",placeholder:"TONY ELSDEN"})),(0,e.createElement)("div",{class:"row"},(0,e.createElement)("div",{class:"col-md-6"},(0,e.createElement)("div",{class:"form-group"},(0,e.createElement)("label",{for:"txtExpDate"},"MNS_CC_EXP ",(0,e.createElement)("abbr",{class:"required",title:"required"},"*")),(0,e.createElement)("div",{class:"input-group"},(0,e.createElement)("select",{value:o.ccExpMonth,onChange:d("ccExpMonth"),id:"txtExpDate",name:"cardExpDate",class:"form-control",required:"validateCardExpDate()"},(0,e.createElement)("option",{value:"",disabled:!0,selected:!0},"Month"),l.map((t=>(0,e.createElement)("option",{value:t,disabled:t<(c.cardYear===c.minCardYear?(new Date).getMonth()+1:1)},t<10?"0"+t:t)))),(0,e.createElement)("select",{value:o.ccExpYear,onChange:d("ccExpYear"),id:"txtExpDateYear",name:"cardExpDateYear",class:"form-control",required:"validateCardExpYear()"},(0,e.createElement)("option",{value:"",disabled:!0,selected:!0},"Year"),l.map(((t,c)=>(0,e.createElement)("option",{value:c+o.minCardYear},c+o.minCardYear))))))),(0,e.createElement)("div",{class:"col-md-6"},(0,e.createElement)("div",{class:"form-group"},(0,e.createElement)("label",{for:"txtCVV"},"MNS_CC_CVV ",(0,e.createElement)("abbr",{class:"required",title:"required"},"*")),(0,e.createElement)("input",{type:"password",class:"form-control",value:o.ccCVV,onChange:d("ccCVV"),id:"txtCVV",name:"cardCVV",maxLength:3,onKeyDown:e=>{if(!/^[0-9]*$/.test(e.key)&&8!=e.keyCode)return e.preventDefault()},placeholder:"000",required:!(0!=o.ccCVV.length||!r)}))))))))}),null),edit:(0,e.createElement)((()=>(0,r.decodeEntities)(l.description||"")),null),ariaLabel:m,paymentMethodId:n,canMakePayment:()=>!0,supports:{features:l.supports}};(0,o.registerPaymentMethod)(d)})()})();