(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema3"],{1185:function(e,t,a){e.exports=a.p+"img/26.21b18804.png"},1244:function(e,t,a){e.exports=a.p+"img/34.ad314a2c.svg"},"20a4":function(e,t,a){"use strict";t["a"]={data:()=>({mainId:Math.floor(Math.random()*10**10),selected:0,elements:[],stateStr:"",rendered:!1,firstSelection:!0}),watch:{menuState(){this.domUpdated()}},created(){window.addEventListener("resize",this.domUpdated)},mounted(){this.$nextTick(()=>{this.crearElementos()})},computed:{menuState(){return this.$store.getters.isMenuOpen},navObj(){if(!this.elements.length||!this.secuencial)return{};const e=this.elements.map(e=>e.id),t=e.indexOf(this.selected);if(t<0)return{};const a={};return 0===t?a.next=e[t+1]:(t+1===e.length||(a.next=e[t+1]),a.back=e[t-1]),a}},beforeDestroy(){window.removeEventListener("resize",this.domUpdated)},updated(){this.$nextTick(()=>{this.getStateStr()!=this.stateStr&&this.crearElementos()})},methods:{crearElementos(){return this.$slots.default&&this.$slots.default.length?(this.domUpdated(),this.elements=this.$slots.default.map((e,t)=>{const a=e.data&&e.data.attrs?e.data.attrs:[];return{id:this.mainId+t+1,elm:e.elm,...a}}),this.firstSelection&&(this.selected=this.selected>0?this.selected:this.elements[0].id),void(this.stateStr=this.getStateStr())):[]},getActiveHeight(e){return this.$refs[e][0].scrollHeight+"px"},getStateStr(){return this.$slots.default.map(e=>e.elm.outerHTML).join("")},domUpdated(){this.rendered=!1,setTimeout(()=>{this.rendered=!0},100)}}}},2370:function(e,t,a){e.exports=a.p+"img/33.e67f70d5.png"},"2d57":function(e,t,a){e.exports=a.p+"img/27.f613601a.svg"},"3f47":function(e,t,a){e.exports=a.p+"img/28.a7f576ef.png"},"59d8":function(e,t,a){e.exports=a.p+"img/36.3aa90910.png"},"629f":function(e,t,a){e.exports=a.p+"img/39.252b0177.png"},"6fe1":function(e,t,a){e.exports=a.p+"img/35.43ffb13f.png"},8564:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"slyder-a"},["a"===e.tipo?t("div",{staticClass:"slyder-a__tipo-a"},[e.navObj.next?t("div",{staticClass:"slyder-a__btn--sigt",on:{click:function(t){e.selected=e.navObj.next},mouseover:function(t){e.mostrarIndicador=!1}}},[e.mostrarIndicador?t("div",{staticClass:"indicador__container indicador--left"},[t("div",{staticClass:"indicador--click"})]):e._e()]):e._e(),e.navObj.back?t("div",{staticClass:"slyder-a__btn--atrs",on:{click:function(t){e.selected=e.navObj.back}}}):e._e(),t("div",{staticClass:"slyder-a__bullets"},e._l(e.elements,(function(a){return t("div",{key:"sl-blt-key-"+a.id,staticClass:"slyder-a__bullets__item",class:{"slyder-a__bullets__item--active":e.selected===a.id},on:{click:function(t){e.selected=a.id}}})})),0)]):e._e(),e.elements.length&&e.rendered?t("ScrollHorizontal",{attrs:{selectedId:"sl-"+e.selected,"item-full-width":""}},e._l(e.elements,(function(e){return t("div",{directives:[{name:"child",rawName:"v-child",value:e.elm,expression:"item.elm"}],key:"sl-key-"+e.id,staticClass:"slyder-a__item",attrs:{id:"sl-"+e.id}})})),0):e._e(),"b"===e.tipo?t("div",{staticClass:"slyder-a__tipo-b mt-3"},[t("div",{staticClass:"slyder-a__btn--atrs",class:{hide:!e.navObj.back},on:{click:function(t){e.selected=e.navObj.back}}}),t("div",{staticClass:"slyder-a__bullets"},e._l(e.elements,(function(a){return t("div",{key:"sl-blt-key-"+a.id,staticClass:"slyder-a__bullets__item",class:{"slyder-a__bullets__item--active":e.selected===a.id},on:{click:function(t){e.selected=a.id}}})})),0),t("div",{staticClass:"slyder-a__btn--sigt",class:{hide:!e.navObj.next},on:{click:function(t){e.selected=e.navObj.next},mouseover:function(t){e.mostrarIndicador=!1}}},[e.mostrarIndicador?t("div",{staticClass:"indicador__container indicador--left"},[t("div",{staticClass:"indicador--click"})]):e._e()])]):e._e(),t("div",{staticClass:"hidden-slot"},[e._t("default")],2)],1)},i=[],n=function(){var e=this,t=e._self._c;return t("div",{ref:"hContainer",staticClass:"horizontal-scroll__wrapper"},[t("div",{staticClass:"horizontal-scroll",class:[{"horizontal-scroll--item-fw":e.itemFullWidth},{row:e.row}],style:[{transform:`translate(${e.scrollVal}px,0px)`}]},[e._t("default")],2)])},c=[],o={name:"ScrollHorizontal",props:{selectedId:{type:String,default:""},itemFullWidth:{type:Boolean,default:!1},row:{type:Boolean,default:!1}},data(){return{scrollVal:0,ids:[]}},watch:{selectedId(e){e.length&&this.scroll()}},mounted(){this.getCords(),this.scroll(),window.addEventListener("resize",this.scroll)},updated(){this.getCords()},beforeDestroy(){window.removeEventListener("resize",this.scroll)},methods:{scroll(){var e;const t=null===(e=this.ids.find(e=>e.id===this.selectedId))||void 0===e?void 0:e.id,a=document.getElementById(t);if(!Object.keys(this.$slots.default).length||!this.selectedId.length||null===a)return;const s=this.$refs.hContainer,i=a.offsetWidth*this.ids.length;let n=a.offsetLeft;const c=s.offsetWidth/a.offsetWidth;c>1&&i-n<s.offsetWidth&&(n=i-s.offsetWidth),this.scrollVal=1===this.ids.length?0:-n},getCords(){this.$slots.default&&(this.ids=this.$slots.default.map(e=>({id:e.elm.id,key:e.key})))}}},l=o,r=(a("fff0"),a("2877")),d=Object(r["a"])(l,n,c,!1,null,"2a7d1721",null),m=d.exports,u=a("20a4"),p={name:"SlyderA",components:{ScrollHorizontal:m},mixins:[u["a"]],props:{tipo:{type:String,default:"a"}},data:()=>({mostrarIndicador:!0,secuencial:!0})},v=p,f=Object(r["a"])(v,s,i,!1,null,null,null);t["a"]=f.exports},a84e:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"acordion"},[e._l(e.elements,(function(a,s){return t("div",{key:a.id,staticClass:"p-3 pb-0 p-md-4 pb-md-0 mb-3",class:e.cardClass(a.id)},[t("div",{staticClass:"acordion__header mb-3 mb-md-4",on:{click:function(t){e.selected=e.selected!=a.id?a.id:0},mouseover:function(t){e.mostrarIndicador=(!e.mostrarIndicador||1!==s)&&e.mostrarIndicador}}},[t("div",{staticClass:"d-flex align-items-center"},["a"===e.tipo?t("div",{staticClass:"acordion__accion"},[t("div",{staticClass:"acordion__accion__btn--a h3 mb-0 me-3"},[e.selected===a.id?t("i",{staticClass:"fas fa-minus"}):t("i",{staticClass:"fas fa-plus"}),e.mostrarIndicador&&1===s?t("div",{staticClass:"indicador__container"},[t("div",{staticClass:"indicador--click indicador--sm"})]):e._e()])]):e._e(),t("div",{staticClass:"acordion__titulo"},[t("h3",{staticClass:"mb-0",domProps:{innerHTML:e._s(a.titulo)}})])]),"b"===e.tipo?t("div",{staticClass:"acordion__accion"},[t("div",{staticClass:"acordion__accion__btn--b h3 mb-0"},[e.selected===a.id?t("i",{staticClass:"fas fa-angle-up"}):t("i",{staticClass:"fas fa-angle-down"}),e.mostrarIndicador&&1===s?t("div",{staticClass:"indicador__container indicador--left"},[t("div",{staticClass:"indicador--click indicador--sm"})]):e._e()])]):e._e()]),t("div",{staticClass:"acordion__contenido",style:{height:e.rendered&&e.selected===a.id?e.getActiveHeight(a.id):0}},[t("div",{directives:[{name:"child",rawName:"v-child",value:a.elm,expression:"elm.elm"}],ref:a.id,refInFor:!0,staticClass:"acordion__contenido__item pb-3 pb-md-4"})])])})),t("div",{staticClass:"hidden-slot"},[e._t("default")],2)],2)},i=[],n=(a("14d9"),a("20a4")),c={name:"AcordionA",mixins:[n["a"]],props:{claseTarjeta:{type:String,default:""},tipo:{type:String,default:"a"}},data:()=>({mostrarIndicador:!0}),mounted(){this.$nextTick(()=>{setTimeout(()=>{this.domUpdated()},5e3)})},methods:{cardClass(e){const t=[];return this.claseTarjeta.length?t.push(this.claseTarjeta):t.push("tarjeta tarjeta--blanca"),this.selected===e&&t.push("acordion__activo"),t}}},o=c,l=a("2877"),r=Object(l["a"])(o,s,i,!1,null,null,null);t["a"]=r.exports},aac1:function(e,t){e.exports="data:image/png;base64,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"},bec2:function(e,t,a){},c5e4:function(e,t,a){e.exports=a.p+"img/37.4122669b.png"},c868:function(e,t){e.exports="data:image/png;base64,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"},ca0a:function(e,t,a){e.exports=a.p+"img/30.f63fe9d3.png"},d4b3:function(e,t,a){e.exports=a.p+"img/31.7ae3acd7.png"},e770:function(e,t,a){e.exports=a.p+"img/38.5004ed44.png"},eb46:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"curso-main-container pb-3"},[t("BannerInterno"),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[e._m(0),e._m(1),t("Separador"),e._m(2),t("p",{staticClass:"mb-5"},[e._v("Los planos y diagramas constituyen el primer nivel de documentación técnica y ofrecen una representación gráfica del sistema de cableado estructurado. Estos documentos son menester tanto en la fase de planificación como en la ejecución y el mantenimiento de la instalación.")]),e._m(3),t("div",{staticClass:"row justify-content-center mb-4"},[t("div",{staticClass:"col-lg-9 my-lg-0 my-3"},[t("AcordionA",{attrs:{tipo:"a","clase-tarjeta":"tarjeta bg3"}},[t("div",{attrs:{titulo:"Planos de distribución "}},[t("p",[e._v("Muestran la disposición física de los cables, puntos de conexión, paneles de parcheo ("),t("i",[e._v("patch panels")]),e._v(") y dispositivos finales en el área de trabajo. Permiten una visualización clara de las rutas de los cables y la ubicación de los puntos de acceso, lo que facilita la instalación y evita errores de distribución. Estos planos también son útiles para identificar posibles puntos de interferencia o colisiones con otras instalaciones.")])]),t("div",{attrs:{titulo:"Diagramas de conexión "}},[t("p",[e._v("Estos diagramas detallan la interconexión de cada componente dentro del sistema de cableado estructurado. Especifican las conexiones entre los cables y los equipos, mostrando cómo se enlazan los elementos de la red y las posiciones de los puertos en los paneles de parcheo y los equipos de red. También incluyen información sobre la asignación de colores para el cableado y otros aspectos técnicos para el ensamblaje de las conexiones. ")])]),t("div",{attrs:{titulo:"Simbología eléctrica y de telecomunicaciones "}},[t("p",[e._v("La correcta interpretación de la simbología empleada en los planos y diagramas garantiza la precisión en la instalación. Esta simbología estandarizada permite que todos los técnicos comprendan el diseño independientemente de su experiencia previa con el proyecto. Entre los símbolos más comunes se encuentran los de puntos de acceso de red, paneles de conexión, fuentes de energía, y dispositivos específicos de red.")])])])],1),e._m(4)]),e._m(5),t("Separador"),e._m(6),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-9 my-lg-0 my-3"},[e._m(7),t("TabsC",{staticClass:"color-acento-botones mb-5"},[t("div",{staticClass:"tarjeta color-acento-botones--borde p-4 mb-3",attrs:{titulo:"Requisitos de los materiales"}},[t("p",{staticClass:"mb-0"},[e._v("Este documento enumera todos los materiales necesarios para la instalación, incluyendo tipos de cables (con sus respectivas categorías), conectores, paneles de parcheo, canaletas, y soportes, entre otros. Cada material debe cumplir con estándares internacionales (como TIA/EIA o ISO/IEC) y normativas nacionales aplicables. Esto garantiza que los componentes son de alta calidad y adecuados para el entorno de instalación.")])]),t("div",{staticClass:"tarjeta color-acento-botones--borde p-4 mb-3",attrs:{titulo:"Especificaciones de rendimiento"}},[t("p",{staticClass:"mb-0"},[e._v("Las especificaciones de rendimiento establecen los parámetros mínimos de calidad para cada componente del sistema. Por ejemplo, en el caso de los cables de par trenzado, las especificaciones de rendimiento incluyen valores de atenuación, diafonía ("),t("i",[e._v("crosstalk")]),e._v(") y capacidad de transmisión de datos según la categoría del cable. En cables de fibra óptica, las especificaciones técnicas deben cubrir aspectos como el tipo de fibra, la distancia máxima de transmisión y las características de atenuación óptica.")])]),t("div",{staticClass:"tarjeta color-acento-botones--borde p-4 mb-3",attrs:{titulo:"Requisitos de instalación"}},[t("p",{staticClass:"mb-0"},[e._v("Las especificaciones técnicas también deben incluir instrucciones sobre el manejo y la instalación de los materiales. Esto abarca detalles como el radio mínimo de curvatura para los cables, la distancia de separación recomendada entre cables de datos y de energía, y el tipo de terminación en los conectores. Estos requisitos aseguran que los materiales y procedimientos utilizados no comprometan el rendimiento del sistema y que el cableado sea durable. ")])])])],1),e._m(8)]),e._m(9),t("Separador"),e._m(10),e._m(11),e._m(12),t("div",{staticClass:"row bg5 align-items-center mb-5"},[t("div",{staticClass:"px-lg-5 px-4"},[t("div",{staticClass:"bgw brad p-5 my-5"},[t("SlyderA",{attrs:{tipo:"b"}},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-6 my-2"},[t("h5",{staticClass:"mb-4"},[e._v("Pruebas de continuidad y conexión: ")]),t("p",[e._v("Estas pruebas verifican que todos los cables están conectados correctamente y no presentan cortes, cortocircuitos o empalmes incorrectos. La continuidad asegura que cada punto de conexión funciona adecuadamente y que los datos podrán fluir sin interrupciones en todo el sistema. Se utilizan dispositivos de prueba, como verificadores de continuidad, para realizar estas pruebas de forma precisa. ")])]),t("div",{staticClass:"col-lg-5 my-2"},[t("img",{staticClass:"img-a img-t",attrs:{src:a("6fe1"),alt:""}})])]),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-6 my-2"},[t("h5",{staticClass:"mb-4"},[e._v("Pruebas de rendimiento (certificación de cableado): ")]),t("p",[e._v("Este protocolo de verificación implica la realización de pruebas específicas para comprobar que el sistema cumple con los estándares de rendimiento establecidos. Estas pruebas incluyen la medición de parámetros como la atenuación, la pérdida de retorno y la diafonía en cables de par trenzado. En instalaciones de fibra óptica, se mide la atenuación óptica y se verifica la integridad de las conexiones mediante reflectometría en el dominio del tiempo (OTDR).")])]),t("div",{staticClass:"col-lg-5 my-2"},[t("img",{staticClass:"img-a img-t",attrs:{src:a("59d8"),alt:""}})])]),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-6 my-2"},[t("h5",{staticClass:"mb-4"},[e._v("Verificación de cumplimiento normativo: ")]),t("p",[e._v("Una parte fundamental de los protocolos de verificación es asegurar que la instalación cumple con las normativas locales e internacionales, como el RETIE en Colombia. Esto implica revisar que la infraestructura de cableado cumple con los criterios de seguridad, la separación adecuada de cables de energía y de datos, y otros parámetros que eviten posibles fallos eléctricos o riesgos de interferencia.")])]),t("div",{staticClass:"col-lg-5 my-2"},[t("img",{staticClass:"img-a img-t",attrs:{src:a("c5e4"),alt:""}})])]),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-6 my-2"},[t("h5",{staticClass:"mb-4"},[e._v("Elaboración de reportes de verificación: ")]),t("p",[e._v("Al finalizar las pruebas, se debe documentar el resultado en reportes que detallen cada una de las mediciones realizadas, los parámetros evaluados y los valores obtenidos. Este reporte sirve como comprobante de que la instalación ha sido revisada exhaustivamente y es conforme a los requisitos técnicos y normativos. Además, permite llevar un registro que facilita futuras inspecciones y mantenimiento del sistema.")])]),t("div",{staticClass:"col-lg-5 my-2"},[t("img",{staticClass:"img-a img-t",attrs:{src:a("e770"),alt:""}})])])])],1)])]),e._m(13)],1)],1)},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"titulo-principal color-acento-contenido"},[t("div",{staticClass:"titulo-principal__numero"},[t("span",[e._v("3")])]),t("h1",[e._v("Documentación técnica")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row justify-content-center align-items-center"},[t("div",{staticClass:"col-lg-auto pt-lg-0 pt-md-4"},[t("img",{staticClass:"img-a img-t",attrs:{src:a("fab4"),alt:""}})]),t("div",{staticClass:"col pt-lg-0 pt-md-4"},[t("p",{staticClass:"mb-0"},[e._v("La documentación técnica es una herramienta de carácter superior en el proceso de instalación y mantenimiento del cableado estructurado, ya que facilita la organización, el seguimiento y el cumplimiento de los estándares de calidad y normativos. Además, asegura que cualquier técnico o ingeniero que trabaje en el sistema pueda interpretar y dar continuidad al proyecto. Este apartado cubre los elementos necesarios para la creación de documentación precisa y completa, que será necesario en la ejecución y en el mantenimiento a largo plazo de la instalación.")])]),t("div",{staticClass:"col-lg-auto pt-lg-0 pt-md-4"},[t("img",{staticClass:"img-a img-t",attrs:{src:a("1185"),alt:""}})])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_3_1"}},[t("h2",[e._v("3.1 Planos y diagramas")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row bg4 align-items-center mb-5 pb-3"},[t("div",{staticClass:"px-lg-5 px-4"},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-8"},[t("div",{staticClass:"titulo-sexto color-acento-botones"},[t("h5",[e._v("Figura 2.")]),t("span",[e._v("Clasificación de documentación técnica")])]),t("div",{staticClass:"mb-2"},[t("img",{staticClass:"img-a img-t",attrs:{src:a("2d57"),alt:"La Figura 2 se denomina «Clasificación de documentación técnica» y presenta la funcionalidad principal de los planos y diagramas."}})]),t("figcaption",[e._v("Fuente: OIT, 2024. ")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-lg-3 my-lg-0 my-3"},[t("img",{staticClass:"img-a img-t",attrs:{src:a("3f47"),alt:""}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-10"},[t("div",{staticClass:"row justify-content-center bg1 p-4 brad"},[t("div",{staticClass:"col-lg-auto j1"},[t("img",{staticClass:"img-a img-t",attrs:{src:a("aac1"),alt:""}})]),t("div",{staticClass:"col pt-lg-0 pt-md-4 j1"},[t("p",{staticClass:"mb-0"},[e._v("El uso de planos y diagramas detallados y correctamente etiquetados es fundamental para evitar errores en la instalación y garantizar un sistema de cableado estructurado ordenado y fácil de mantener. ")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_3_2"}},[t("h2",[e._v("3.2 Especificaciones técnicas")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row justify-content-center align-items-center mb-4"},[t("div",{staticClass:"col-lg-auto"},[t("img",{staticClass:"img-a img-t",attrs:{src:a("ca0a"),alt:""}})]),t("div",{staticClass:"col pt-lg-0 pt-md-4"},[t("p",{staticClass:"mb-0"},[e._v("Las especificaciones técnicas son documentos que detallan los requisitos de cada componente del sistema, los materiales a utilizar y los estándares de calidad y rendimiento que deben cumplirse en la instalación. Su propósito es asegurar que todos los aspectos técnicos del cableado estructurado sigan criterios de desempeño y normativos específicos.")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-lg-3 my-lg-0 my-3"},[t("img",{staticClass:"img-a img-t",attrs:{src:a("d4b3"),alt:""}})])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-10"},[t("div",{staticClass:"row justify-content-center bg1 p-4 brad"},[t("div",{staticClass:"col-lg-auto j1"},[t("img",{staticClass:"img-a img-t",attrs:{src:a("c868"),alt:""}})]),t("div",{staticClass:"col pt-lg-0 pt-md-4 j1"},[t("p",{staticClass:"mb-0"},[e._v("Las especificaciones técnicas sirven de guía para que los técnicos y los supervisores puedan validar que todos los elementos cumplen con los requisitos normativos y de rendimiento antes, durante y después de la instalación. ")])])])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_3_3"}},[t("h2",[e._v("3.3 Protocolos de verificación")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row justify-content-center align-items-center mb-5"},[t("div",{staticClass:"col-lg-auto pt-lg-0 pt-md-4"},[t("img",{staticClass:"img-a img-t",attrs:{src:a("2370"),alt:""}})]),t("div",{staticClass:"col"},[t("p",{staticClass:"mb-0"},[e._v("Los protocolos de verificación constituyen el conjunto de procedimientos y pruebas que deben llevarse a cabo para garantizar que la instalación cumple con los estándares técnicos y normativos, y para validar que el sistema funcionará adecuadamente una vez puesto en operación. Los protocolos aseguran que la instalación ha sido ejecutada conforme a las especificaciones, brindando un respaldo documentado de la calidad del trabajo realizado.")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row justify-content-center mb-5"},[t("div",{staticClass:"col-lg-8"},[t("div",{staticClass:"titulo-sexto color-acento-botones"},[t("h5",[e._v("Figura 3.")]),t("span",[e._v("Procedimientos y pruebas de verificación")])]),t("div",{staticClass:"mb-2"},[t("img",{staticClass:"img-a img-t",attrs:{src:a("1244"),alt:"La Figura 2 se denomina «Clasificación de documentación técnica» y presenta la funcionalidad principal de los planos y diagramas."}})]),t("figcaption",[e._v("Fuente: OIT, 2024. ")])])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-10"},[t("div",{staticClass:"row justify-content-center bg1 p-4 brad"},[t("div",{staticClass:"col-lg-auto j1"},[t("img",{staticClass:"img-a img-t",attrs:{src:a("629f"),alt:""}})]),t("div",{staticClass:"col pt-lg-0 pt-md-4 j1"},[t("p",{staticClass:"mb-0"},[e._v("Los protocolos de verificación garantizan que el sistema de cableado estructurado ha sido instalado de acuerdo con las normativas y los estándares de calidad. También proporcionan una base de referencia para el mantenimiento, asegurando que cualquier eventualidad futura pueda ser resuelta con eficiencia. ")])])])])])}],n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tabs-c"},[t("div",{staticClass:"tabs-c__header"},[t("div",{staticClass:"row m-0"},e._l(e.elements,(function(a,s){return t("div",{key:"tabs-c-menu-"+a.id,staticClass:"col-sm-6 col-lg-4 col-xl tabs-c__tab py-3",class:{"tabs-c__tab--active":e.selected===a.id},attrs:{role:"button"},on:{click:function(t){e.selected=a.id},mouseover:function(t){e.mostrarIndicador=!(e.mostrarIndicador&&s>=1)&&e.mostrarIndicador}}},[e.mostrarIndicador&&1===s?t("div",{staticClass:"indicador__container"},[t("div",{staticClass:"indicador--click"})]):e._e(),t("span",{domProps:{innerHTML:e._s(a.titulo)}})])})),0)]),e._l(e.elements,(function(a){return t("div",{directives:[{name:"show",rawName:"v-show",value:e.selected===a.id,expression:"selected === elm.id"},{name:"child",rawName:"v-child",value:a.elm,expression:"elm.elm"}],key:"tabs-content-"+a.id,staticClass:"tabs-c__content-item"})})),t("div",{staticClass:"hidden-slot"},[e._t("default")],2)],2)},c=[],o=a("20a4"),l={name:"TabsC",mixins:[o["a"]],data:()=>({mostrarIndicador:!0})},r=l,d=a("2877"),m=Object(d["a"])(r,n,c,!1,null,null,null),u=m.exports,p=a("a84e"),v=a("8564"),f={name:"Tema3",components:{TabsC:u,AcordionA:p["a"],SlyderA:v["a"]},data:()=>({}),mounted(){this.$nextTick(()=>{this.$aosRefresh()})},updated(){this.$aosRefresh()}},g=f,b=Object(d["a"])(g,s,i,!1,null,null,null);t["default"]=b.exports},fab4:function(e,t,a){e.exports=a.p+"img/25.cf8288f3.png"},fff0:function(e,t,a){"use strict";a("bec2")}}]);
//# sourceMappingURL=tema3.6597e82f.js.map