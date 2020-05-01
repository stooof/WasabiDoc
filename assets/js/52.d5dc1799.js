(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{264:function(t,a,e){"use strict";e.r(a);var l=e(17),o=Object(l.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"wallet-load"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wallet-load"}},[t._v("#")]),t._v(" Wallet Load")]),t._v(" "),e("p",[t._v("There are two ways of loading your wallets in Wasabi, and you can load multiple wallets at the same time.\nThe synchronization of your wallet happens fast and is very private by default.")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#loading-wallet-step-by-step"}},[t._v("Loading wallet step-by-step")]),e("ul",[e("li",[e("a",{attrs:{href:"#wallet-explorer"}},[t._v("Wallet Explorer")])]),e("li",[e("a",{attrs:{href:"#wallet-manager"}},[t._v("Wallet Manager")])])])]),e("li",[e("a",{attrs:{href:"#synchronization"}},[t._v("Synchronization")]),e("ul",[e("li",[e("a",{attrs:{href:"#filter-download"}},[t._v("Filter download")])]),e("li",[e("a",{attrs:{href:"#filter-scanning"}},[t._v("Filter scanning")])]),e("li",[e("a",{attrs:{href:"#block-download"}},[t._v("Block download")])])])])])]),e("p"),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"loading-wallet-step-by-step"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loading-wallet-step-by-step"}},[t._v("#")]),t._v(" Loading wallet step-by-step")]),t._v(" "),e("h3",{attrs:{id:"wallet-explorer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wallet-explorer"}},[t._v("#")]),t._v(" Wallet Explorer")]),t._v(" "),e("p",[t._v("On the right side of Wasabi is the "),e("code",[t._v("Wallet Explorer")]),t._v(", where you see an alphabetically sorted list of all the previously "),e("RouterLink",{attrs:{to:"/using-wasabi/WalletGeneration.html"}},[t._v("generated")]),t._v(" wallets.")],1),t._v(" "),e("p",[e("img",{attrs:{src:"/WalletExplorerUnloaded.png",alt:""}})]),t._v(" "),e("p",[t._v("You can load a wallet simply by double-clicking on it or by right-clicking on it and then choosing "),e("code",[t._v("Load Wallet")]),t._v(".\nA coin will appear on the wallet icon to indicate the loaded wallets.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/WalletExplorerLoaded.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"wallet-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wallet-manager"}},[t._v("#")]),t._v(" Wallet Manager")]),t._v(" "),e("p",[t._v("Alternatively, you can double click a wallet in the "),e("code",[t._v("Load Wallet")]),t._v(" tab, or select it and click the "),e("code",[t._v("load wallet")]),t._v(" button.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/WalletManagerLoadWallet.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"synchronization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#synchronization"}},[t._v("#")]),t._v(" Synchronization")]),t._v(" "),e("h3",{attrs:{id:"filter-download"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter-download"}},[t._v("#")]),t._v(" Filter download")]),t._v(" "),e("p",[t._v("As soon as you start Wasabi, it connects to the backend server with a new Tor identity and requests the "),e("RouterLink",{attrs:{to:"/using-wasabi/BIPs.html#bip-158-compact-block-filters-for-light-clients"}},[t._v("BIP 158 block filters")]),t._v(".\nAt the first start, this can take a couple of minutes because all filters need to be downloaded, but for the subsequent starts, this is faster as only the most recent filters are requested.")],1),t._v(" "),e("h3",{attrs:{id:"filter-scanning"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter-scanning"}},[t._v("#")]),t._v(" Filter scanning")]),t._v(" "),e("p",[t._v("When you load a wallet, it checks if the generated addresses within the gap limit hit against a block filter.\nMost filters do not hit, and then the wallet is certain that this block does not contain a transaction of yours so it will not download it.\nIf a transaction of yours is in a block, then the corresponding filter will always be hit, and the wallet will know this is a relevant block for you.\nThere can be a small chance for a false positive where the filter matches, but the block actually does not contain a transaction.")]),t._v(" "),e("h3",{attrs:{id:"block-download"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-download"}},[t._v("#")]),t._v(" Block download")]),t._v(" "),e("p",[t._v("When a block filter hits, either a true match or a false positive, then this block is important for you, so the wallet will download it.\nIf you have "),e("RouterLink",{attrs:{to:"/using-wasabi/BitcoinFullNode.html"}},[t._v("a Bitcoin full node connected")]),t._v(", then it will fetch the verified block locally.\nIf not, then Wasabi will connect to a random Bitcoin P2P node with a new Tor identity, request only this block for download, and then disconnect.\nIn this step, your Wasabi behaves like any other full node, and cannot be differentiated.")],1)])}),[],!1,null,null,null);a.default=o.exports}}]);