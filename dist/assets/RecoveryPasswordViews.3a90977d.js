import{B as _,_ as u}from"./vee-validate-rules.esm.ecbc3ab4.js";import{e as l,r as p,f as c,g as d,i,l as s,q as a,u as f,x as w,y as v}from"./index.741dba9b.js";import{F as V}from"./FormInputPassword.a7c04589.js";import{_ as x}from"./FormInputPasswordConfirm.vue_vue_type_script_setup_true_lang.7cbfeb83.js";const h={class:"row"},y={class:"col-12"},g={class:"col-12"},B={class:"row justify-content-center py-3"},C={class:"col-12 col-lg-7 text-center"},F=l({__name:"RecoveryPasswordForm",setup(m){const n=t=>{console.log(t),t?v.push({name:"Login"}):console.log("Las contrase\xF1as no coinciden")},o=p({password:"",passwordConfirm:""});return(t,e)=>(c(),d(f(w),{class:"px-3",onSubmit:n},{default:i(()=>[s("div",h,[s("div",y,[a(V,{modelValue:o.value.password,"onUpdate:modelValue":e[0]||(e[0]=r=>o.value.password=r)},null,8,["modelValue"])]),s("div",g,[a(x,{modelValue:o.value.passwordConfirm,"onUpdate:modelValue":e[1]||(e[1]=r=>o.value.passwordConfirm=r)},null,8,["modelValue"])])]),s("div",B,[s("div",C,[a(_)])])]),_:1}))}}),$=l({__name:"RecoveryPasswordViews",setup(m){return(n,o)=>(c(),d(u,{title:"Recovery Password"},{"form-components":i(()=>[a(F)]),_:1}))}});export{$ as default};
