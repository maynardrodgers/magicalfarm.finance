(this.webpackJsonpmagicalfarmfinance=this.webpackJsonpmagicalfarmfinance||[]).push([[25],{1565:function(t,e,r){"use strict";r.r(e),r.d(e,"PortisConnector",(function(){return s}));var n=r(752),o=r(12);function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var a={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan",100:"xdai",30:"orchid",31:"orchidTestnet",99:"core",77:"sokol",61:"classic",8:"ubiq",108:"thundercore",18:"thundercoreTestnet",163:"lightstreams",122:"fuse",15001:"maticTestnet"},s=function(t){var e,n;function s(e){var r,n=e.dAppId,i=e.networks,s=e.config,u=void 0===s?{}:s,h=i.map((function(t){return"number"===typeof t?t:Number(t.chainId)}));return h.every((function(t){return!!a[t]}))||Object(o.default)(!1),(r=t.call(this,{supportedChainIds:h})||this).dAppId=n,r.networks=i,r.config=u,r.handleOnLogout=r.handleOnLogout.bind(c(r)),r.handleOnActiveWalletChanged=r.handleOnActiveWalletChanged.bind(c(r)),r.handleOnError=r.handleOnError.bind(c(r)),r}n=t,(e=s).prototype=Object.create(n.prototype),e.prototype.constructor=e,i(e,n);var u=s.prototype;return u.handleOnLogout=function(){this.emitDeactivate()},u.handleOnActiveWalletChanged=function(t){this.emitUpdate({account:t})},u.handleOnError=function(t){this.emitError(t)},u.activate=function(){try{var t=this,e=function(){return t.portis.onLogout(t.handleOnLogout),t.portis.onActiveWalletChanged(t.handleOnActiveWalletChanged),t.portis.onError(t.handleOnError),Promise.resolve(t.portis.provider.enable().then((function(t){return t[0]}))).then((function(e){return{provider:t.portis.provider,account:e}}))},n=function(){if(!t.portis)return Promise.resolve(r.e(21).then(r.t.bind(null,1379,7)).then((function(t){var e;return null!=(e=null==t?void 0:t.default)?e:t}))).then((function(e){t.portis=new e(t.dAppId,"number"===typeof t.networks[0]?a[t.networks[0]]:t.networks[0],t.config)}))}();return Promise.resolve(n&&n.then?n.then(e):e())}catch(o){return Promise.reject(o)}},u.getProvider=function(){try{return Promise.resolve(this.portis.provider)}catch(t){return Promise.reject(t)}},u.getChainId=function(){try{return Promise.resolve(this.portis.provider.send("eth_chainId"))}catch(t){return Promise.reject(t)}},u.getAccount=function(){try{return Promise.resolve(this.portis.provider.send("eth_accounts").then((function(t){return t[0]})))}catch(t){return Promise.reject(t)}},u.deactivate=function(){this.portis.onLogout((function(){})),this.portis.onActiveWalletChanged((function(){})),this.portis.onError((function(){}))},u.changeNetwork=function(t,e){try{return"number"===typeof t?(a[t]||Object(o.default)(!1),this.portis.changeNetwork(a[t],e),this.emitUpdate({chainId:t})):(this.portis.changeNetwork(t,e),this.emitUpdate({chainId:Number(t.chainId)})),Promise.resolve()}catch(r){return Promise.reject(r)}},u.close=function(){try{var t=this;return Promise.resolve(t.portis.logout()).then((function(){t.emitDeactivate()}))}catch(e){return Promise.reject(e)}},s}(n.a)},752:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(94),o=r(97);var i=function(t){var e,r;function n(e){var r,n=(void 0===e?{}:e).supportedChainIds;return(r=t.call(this)||this).supportedChainIds=n,r}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var i=n.prototype;return i.emitUpdate=function(t){this.emit(o.a.Update,t)},i.emitError=function(t){this.emit(o.a.Error,t)},i.emitDeactivate=function(){this.emit(o.a.Deactivate)},n}(n.EventEmitter)}}]);
//# sourceMappingURL=25.4f1fdd36.chunk.js.map