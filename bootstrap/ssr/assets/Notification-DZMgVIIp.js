import { reactive, withCtx, createVNode, createTextVNode, createBlock, openBlock, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-C_aPQEHY.js";
import "@inertiajs/vue3";
import "./ErrorMessageInline-DdL__BKJ.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@element-plus/icons-vue";
const _sfc_main = {
  __name: "Notification",
  __ssrInlineRender: true,
  setup(__props) {
    reactive([
      { title: "Agriculture", stats: "200Mt CO2e", subtitle: "100K Carbon Credits", icon: "" },
      { title: "Land Use & Forestry", stats: "200Mt CO2e", subtitle: "100K Carbon Credits", icon: "" },
      { title: "Energy", stats: "200Mt CO2e", subtitle: "100K Carbon Credits", icon: "" },
      { title: "Industrialisation", stats: "200Mt CO2e", subtitle: "100K Carbon Credits", icon: "" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nk-content nk-content-fluid"${_scopeId}><div class="container-xl wide-lg"${_scopeId}><div class="nk-content-body"${_scopeId}><div class="nk-block-head"${_scopeId}><div class="nk-block-head-sub"${_scopeId}><span${_scopeId}>Welcome!</span></div><div class="nk-block-between-md g-4"${_scopeId}><div class="nk-block-head-content"${_scopeId}><h2 class="nk-block-title fw-normal"${_scopeId}>Abu Bin Ishityak</h2><div class="nk-block-des"${_scopeId}><p${_scopeId}>At a glance summary of your account. Have fun!</p></div></div><div class="nk-block-head-content"${_scopeId}><ul class="nk-block-tools gx-3"${_scopeId}><li${_scopeId}><a href="#" class="btn btn-primary"${_scopeId}><span${_scopeId}>Deposit</span> <em class="icon ni ni-arrow-long-right"${_scopeId}></em></a></li><li${_scopeId}><a href="#" class="btn btn-white btn-light"${_scopeId}><span${_scopeId}>Buy / Sell</span> <em class="icon ni ni-arrow-long-right d-none d-sm-inline-block"${_scopeId}></em></a></li><li class="opt-menu-md dropdown"${_scopeId}><a href="#" class="btn btn-white btn-light btn-icon" data-bs-toggle="dropdown"${_scopeId}><em class="icon ni ni-setting"${_scopeId}></em></a><div class="dropdown-menu dropdown-menu-end"${_scopeId}><ul class="link-list-opt no-bdr"${_scopeId}><li${_scopeId}><a href="#"${_scopeId}><em class="icon ni ni-coin-alt"${_scopeId}></em><span${_scopeId}>Curreny Settings</span></a></li><li${_scopeId}><a href="#"${_scopeId}><em class="icon ni ni-notify"${_scopeId}></em><span${_scopeId}>Push Notification</span></a></li></ul></div></li></ul></div></div></div><div class="nk-block"${_scopeId}><div class="row gy-gs"${_scopeId}><div class="col-lg-5 col-xl-4"${_scopeId}><div class="nk-block"${_scopeId}><div class="nk-block-head-xs"${_scopeId}><div class="nk-block-head-content"${_scopeId}><h5 class="nk-block-title title"${_scopeId}>Overview</h5></div></div><div class="nk-block"${_scopeId}><div class="card card-bordered text-light is-dark h-100"${_scopeId}><div class="card-inner"${_scopeId}><div class="nk-wg7"${_scopeId}><div class="nk-wg7-stats"${_scopeId}><div class="nk-wg7-title"${_scopeId}>Available balance in USD</div><div class="number-lg amount"${_scopeId}>179,850.950</div></div><div class="nk-wg7-stats-group"${_scopeId}><div class="nk-wg7-stats w-50"${_scopeId}><div class="nk-wg7-title"${_scopeId}>Wallets</div><div class="number-lg"${_scopeId}>5</div></div><div class="nk-wg7-stats w-50"${_scopeId}><div class="nk-wg7-title"${_scopeId}>Transactions</div><div class="number"${_scopeId}>34,405</div></div></div><div class="nk-wg7-foot"${_scopeId}><span class="nk-wg7-note"${_scopeId}>Last activity at <span${_scopeId}>19 Nov, 2019</span></span></div></div></div></div></div></div></div><div class="col-lg-7 col-xl-8"${_scopeId}><div class="nk-block"${_scopeId}><div class="nk-block-head-xs"${_scopeId}><div class="nk-block-between-md g-2"${_scopeId}><div class="nk-block-head-content"${_scopeId}><h5 class="nk-block-title title"${_scopeId}>Digital Wallets</h5></div><div class="nk-block-head-content"${_scopeId}><a href="html/crypto/wallets.html" class="link link-primary"${_scopeId}>See All</a></div></div></div><div class="row g-2"${_scopeId}><div class="col-sm-4"${_scopeId}><div class="card bg-light"${_scopeId}><div class="nk-wgw sm"${_scopeId}><a class="nk-wgw-inner" href="html/crypto/wallet-bitcoin.html"${_scopeId}><div class="nk-wgw-name"${_scopeId}><div class="nk-wgw-icon"${_scopeId}><em class="icon ni ni-sign-btc"${_scopeId}></em></div><h5 class="nk-wgw-title title"${_scopeId}>NioWallet</h5></div><div class="nk-wgw-balance"${_scopeId}><div class="amount"${_scopeId}>4.434953<span class="currency currency-nio"${_scopeId}>NIO</span></div></div></a></div></div></div><div class="col-sm-4"${_scopeId}><div class="card bg-light"${_scopeId}><div class="nk-wgw sm"${_scopeId}><a class="nk-wgw-inner" href="html/crypto/wallet-bitcoin.html"${_scopeId}><div class="nk-wgw-name"${_scopeId}><div class="nk-wgw-icon"${_scopeId}><em class="icon ni ni-sign-btc"${_scopeId}></em></div><h5 class="nk-wgw-title title"${_scopeId}>Bitcoin Wallet</h5></div><div class="nk-wgw-balance"${_scopeId}><div class="amount"${_scopeId}>4.434953<span class="currency currency-btc"${_scopeId}>BTC</span></div></div></a></div></div></div><div class="col-sm-4"${_scopeId}><div class="card bg-light"${_scopeId}><div class="nk-wgw sm"${_scopeId}><a class="nk-wgw-inner" href="html/crypto/wallet-bitcoin.html"${_scopeId}><div class="nk-wgw-name"${_scopeId}><div class="nk-wgw-icon"${_scopeId}><em class="icon ni ni-sign-eth"${_scopeId}></em></div><h5 class="nk-wgw-title title"${_scopeId}>Ethereum Wallet</h5></div><div class="nk-wgw-balance"${_scopeId}><div class="amount"${_scopeId}>0.000560<span class="currency currency-eth"${_scopeId}>ETH</span></div></div></a></div></div></div></div></div><div class="nk-block nk-block-md"${_scopeId}><div class="nk-block-head-xs"${_scopeId}><div class="nk-block-between-md g-2"${_scopeId}><div class="nk-block-head-content"${_scopeId}><h6 class="nk-block-title title"${_scopeId}>Fiat Accounts</h6></div><div class="nk-block-head-content"${_scopeId}><a href="html/crypto/wallets.html" class="link link-primary"${_scopeId}>See All</a></div></div></div><div class="row g-2"${_scopeId}><div class="col-sm-4"${_scopeId}><div class="card bg-light"${_scopeId}><div class="nk-wgw sm"${_scopeId}><a class="nk-wgw-inner" href="html/crypto/wallet-bitcoin.html"${_scopeId}><div class="nk-wgw-name"${_scopeId}><div class="nk-wgw-icon"${_scopeId}><em class="icon ni ni-sign-btc"${_scopeId}></em></div><h5 class="nk-wgw-title title"${_scopeId}>NioWallet</h5></div><div class="nk-wgw-balance"${_scopeId}><div class="amount"${_scopeId}>4.434953<span class="currency currency-nio"${_scopeId}>NIO</span></div></div></a></div></div></div><div class="col-sm-4"${_scopeId}><div class="card bg-light"${_scopeId}><div class="nk-wgw sm"${_scopeId}><a class="nk-wgw-inner" href="html/crypto/wallet-bitcoin.html"${_scopeId}><div class="nk-wgw-name"${_scopeId}><div class="nk-wgw-icon"${_scopeId}><em class="icon ni ni-sign-btc"${_scopeId}></em></div><h5 class="nk-wgw-title title"${_scopeId}>Bitcoin Wallet</h5></div><div class="nk-wgw-balance"${_scopeId}><div class="amount"${_scopeId}>4.434953<span class="currency currency-btc"${_scopeId}>BTC</span></div></div></a></div></div></div><div class="col-sm-4"${_scopeId}><div class="card bg-light"${_scopeId}><div class="nk-wgw sm"${_scopeId}><a class="nk-wgw-inner" href="html/crypto/wallet-bitcoin.html"${_scopeId}><div class="nk-wgw-name"${_scopeId}><div class="nk-wgw-icon"${_scopeId}><em class="icon ni ni-sign-eth"${_scopeId}></em></div><h5 class="nk-wgw-title title"${_scopeId}>Ethereum Wallet</h5></div><div class="nk-wgw-balance"${_scopeId}><div class="amount"${_scopeId}>0.000560<span class="currency currency-eth"${_scopeId}>ETH</span></div></div></a></div></div></div></div></div></div></div></div><div class="nk-block nk-block-lg"${_scopeId}><div class="row gy-gs"${_scopeId}><div class="col-md-6"${_scopeId}><div class="card-head"${_scopeId}><div class="card-title mb-0"${_scopeId}><h5 class="title"${_scopeId}>Recent Activities</h5></div><div class="card-tools"${_scopeId}><ul class="card-tools-nav"${_scopeId}><li${_scopeId}><a href="#"${_scopeId}>Buy</a></li><li${_scopeId}><a href="#"${_scopeId}>Sell</a></li><li class="active"${_scopeId}><a href="#"${_scopeId}>All</a></li></ul></div></div><div class="tranx-list card card-bordered"${_scopeId}><div class="tranx-item"${_scopeId}><div class="tranx-col"${_scopeId}><div class="tranx-info"${_scopeId}><div class="tranx-data"${_scopeId}><div class="tranx-label"${_scopeId}>Buy Bitcoin <em class="tranx-icon sm icon ni ni-sign-btc"${_scopeId}></em></div><div class="tranx-date"${_scopeId}>Nov 12, 2019 11:34 PM</div></div></div></div><div class="tranx-col"${_scopeId}><div class="tranx-amount"${_scopeId}><div class="number"${_scopeId}>0.5384 <span class="currency currency-btc"${_scopeId}>BTC</span></div><div class="number-sm"${_scopeId}>3,980.93 <span class="currency currency-usd"${_scopeId}>USD</span></div></div></div></div><div class="tranx-item"${_scopeId}><div class="tranx-col"${_scopeId}><div class="tranx-info"${_scopeId}><div class="tranx-data"${_scopeId}><div class="tranx-label"${_scopeId}>Buy Ehtereum <span class="tranx-icon sm"${_scopeId}><img src="" alt=""${_scopeId}></span></div><div class="tranx-date"${_scopeId}>Nov 12, 2019 11:34 PM</div></div></div></div><div class="tranx-col"${_scopeId}><div class="tranx-amount"${_scopeId}><div class="number"${_scopeId}>1.538405 <span class="currency currency-btc"${_scopeId}>ETH</span></div><div class="number-sm"${_scopeId}>1,176.34 <span class="currency currency-usd"${_scopeId}>USD</span></div></div></div></div><div class="tranx-item"${_scopeId}><div class="tranx-col"${_scopeId}><div class="tranx-info"${_scopeId}><div class="tranx-data"${_scopeId}><div class="tranx-label"${_scopeId}>Buy Bitcoin <em class="tranx-icon sm icon ni ni-sign-btc"${_scopeId}></em></div><div class="tranx-date"${_scopeId}>Nov 12, 2019 11:34 PM</div></div></div></div><div class="tranx-col"${_scopeId}><div class="tranx-amount"${_scopeId}><div class="number"${_scopeId}>0.5384 <span class="currency currency-btc"${_scopeId}>BTC</span></div><div class="number-sm"${_scopeId}>3,980.93 <span class="currency currency-usd"${_scopeId}>USD</span></div></div></div></div><div class="tranx-item"${_scopeId}><div class="tranx-col"${_scopeId}><div class="tranx-info"${_scopeId}><div class="tranx-data"${_scopeId}><div class="tranx-label"${_scopeId}>Buy Ehtereum <span class="tranx-icon sm"${_scopeId}><img src="" alt=""${_scopeId}></span></div><div class="tranx-date"${_scopeId}>Nov 12, 2019 11:34 PM</div></div></div></div><div class="tranx-col"${_scopeId}><div class="tranx-amount"${_scopeId}><div class="number"${_scopeId}>1.538405 <span class="currency currency-btc"${_scopeId}>ETH</span></div><div class="number-sm"${_scopeId}>1,176.34 <span class="currency currency-usd"${_scopeId}>USD</span></div></div></div></div></div></div><div class="col-md-6"${_scopeId}><div class="card-head"${_scopeId}><div class="card-title mb-0"${_scopeId}><h5 class="title"${_scopeId}>Balance Flow</h5></div><div class="card-tools"${_scopeId}><ul class="card-tools-nav"${_scopeId}><li${_scopeId}><a href="#"${_scopeId}>This Month</a></li><li class="active"${_scopeId}><a href="#"${_scopeId}>This Years</a></li></ul></div></div><div class="card card-bordered"${_scopeId}><div class="card-inner"${_scopeId}><div class="nk-wg4"${_scopeId}><div class="nk-wg4-group justify-center gy-3 gx-4"${_scopeId}><div class="nk-wg4-item"${_scopeId}><div class="sub-text"${_scopeId}><div class="dot dot-lg sq" data-bg="#5ce0aa" style="${ssrRenderStyle({ "background": "rgb(92, 224, 170)" })}"${_scopeId}></div> <span${_scopeId}>Received</span></div></div><div class="nk-wg4-item"${_scopeId}><div class="sub-text"${_scopeId}><div class="dot dot-lg sq" data-bg="#798bff" style="${ssrRenderStyle({ "background": "rgb(121, 139, 255)" })}"${_scopeId}></div> <span${_scopeId}>Send</span></div></div><div class="nk-wg4-item"${_scopeId}><div class="sub-text"${_scopeId}><div class="dot dot-lg sq" data-bg="#f6ca3e" style="${ssrRenderStyle({ "background": "rgb(246, 202, 62)" })}"${_scopeId}></div><span${_scopeId}>Withdraw</span></div></div></div></div><div class="nk-ck3"${_scopeId}><canvas class="chart-account-summary" id="summaryBalance" width="622" height="320" style="${ssrRenderStyle({ "display": "block", "box-sizing": "border-box", "height": "160px", "width": "311px" })}"${_scopeId}></canvas></div></div></div></div></div></div><div class="nk-block"${_scopeId}><div class="card card-bordered"${_scopeId}><div class="nk-refwg"${_scopeId}><div class="nk-refwg-invite card-inner"${_scopeId}><div class="nk-refwg-head g-3"${_scopeId}><div class="nk-refwg-title"${_scopeId}><h5 class="title"${_scopeId}>Refer Us &amp; Earn</h5><div class="title-sub"${_scopeId}>Use the bellow link to invite your friends.</div></div><div class="nk-refwg-action"${_scopeId}><a href="#" class="btn btn-primary"${_scopeId}>Invite</a></div></div><div class="nk-refwg-url"${_scopeId}><div class="form-control-wrap"${_scopeId}><div class="form-clip clipboard-init" data-clipboard-target="#refUrl" data-success="Copied" data-text="Copy Link"${_scopeId}><em class="clipboard-icon icon ni ni-copy"${_scopeId}></em> <span class="clipboard-text"${_scopeId}>Copy Link</span></div><div class="form-icon"${_scopeId}><em class="icon ni ni-link-alt"${_scopeId}></em></div><input type="text" class="form-control copy-text" id="refUrl" value="https://dashlite.net/?ref=4945KD48"${_scopeId}></div></div></div><div class="nk-refwg-stats card-inner bg-lighter"${_scopeId}><div class="nk-refwg-group g-3"${_scopeId}><div class="nk-refwg-name"${_scopeId}><h6 class="title"${_scopeId}>My Referral <em class="icon ni ni-info" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Referral Informations" data-bs-original-title="Referral Informations"${_scopeId}></em></h6></div><div class="nk-refwg-info g-3"${_scopeId}><div class="nk-refwg-sub"${_scopeId}><div class="title"${_scopeId}>394</div><div class="sub-text"${_scopeId}>Total Joined</div></div><div class="nk-refwg-sub"${_scopeId}><div class="title"${_scopeId}>548.49</div><div class="sub-text"${_scopeId}>Referral Earn</div></div></div><div class="nk-refwg-more dropdown mt-n1 me-n1"${_scopeId}><a href="#" class="btn btn-icon btn-trigger" data-bs-toggle="dropdown"${_scopeId}><em class="icon ni ni-more-h"${_scopeId}></em></a><div class="dropdown-menu dropdown-menu-xs dropdown-menu-end"${_scopeId}><ul class="link-list-plain sm"${_scopeId}><li${_scopeId}><a href="#"${_scopeId}>7 days</a></li><li${_scopeId}><a href="#"${_scopeId}>15 Days</a></li><li${_scopeId}><a href="#"${_scopeId}>30 Days</a></li></ul></div></div></div><div class="nk-refwg-ck"${_scopeId}><canvas class="chart-refer-stats" id="refBarChart" width="622" height="100" style="${ssrRenderStyle({ "display": "block", "box-sizing": "border-box", "height": "50px", "width": "311px" })}"${_scopeId}></canvas></div></div></div></div></div><div class="nk-block"${_scopeId}><div class="card card-bordered"${_scopeId}><div class="card-inner card-inner-lg"${_scopeId}><div class="align-center flex-wrap flex-md-nowrap g-4"${_scopeId}><div class="nk-block-image w-120px flex-shrink-0"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 118"${_scopeId}><path d="M8.916,94.745C-.318,79.153-2.164,58.569,2.382,40.578,7.155,21.69,19.045,9.451,35.162,4.32,46.609.676,58.716.331,70.456,1.845,84.683,3.68,99.57,8.694,108.892,21.408c10.03,13.679,12.071,34.71,10.747,52.054-1.173,15.359-7.441,27.489-19.231,34.494-10.689,6.351-22.92,8.733-34.715,10.331-16.181,2.192-34.195-.336-47.6-12.281A47.243,47.243,0,0,1,8.916,94.745Z" transform="translate(0 -1)" fill="#f6faff"${_scopeId}></path><rect x="18" y="32" width="84" height="50" rx="4" ry="4" fill="#fff"${_scopeId}></rect><rect x="26" y="44" width="20" height="12" rx="1" ry="1" fill="#e5effe"${_scopeId}></rect><rect x="50" y="44" width="20" height="12" rx="1" ry="1" fill="#e5effe"${_scopeId}></rect><rect x="74" y="44" width="20" height="12" rx="1" ry="1" fill="#e5effe"${_scopeId}></rect><rect x="38" y="60" width="20" height="12" rx="1" ry="1" fill="#e5effe"${_scopeId}></rect><rect x="62" y="60" width="20" height="12" rx="1" ry="1" fill="#e5effe"${_scopeId}></rect><path d="M98,32H22a5.006,5.006,0,0,0-5,5V79a5.006,5.006,0,0,0,5,5H52v8H45a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H73a2,2,0,0,0,2-2V94a2,2,0,0,0-2-2H66V84H98a5.006,5.006,0,0,0,5-5V37A5.006,5.006,0,0,0,98,32ZM73,94v4H45V94Zm-9-2H54V84H64Zm37-13a3,3,0,0,1-3,3H22a3,3,0,0,1-3-3V37a3,3,0,0,1,3-3H98a3,3,0,0,1,3,3Z" transform="translate(0 -1)" fill="#798bff"${_scopeId}></path><path d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z" transform="translate(0 -1)" fill="#6576ff"${_scopeId}></path><path d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z" transform="translate(0 -1)" fill="none" stroke="#6576ff" stroke-miterlimit="10" stroke-width="2"${_scopeId}></path><line x1="40" y1="22" x2="57" y2="22" fill="none" stroke="#fffffe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId}></line><line x1="40" y1="27" x2="57" y2="27" fill="none" stroke="#fffffe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId}></line><line x1="40" y1="32" x2="50" y2="32" fill="none" stroke="#fffffe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId}></line><line x1="30.5" y1="87.5" x2="30.5" y2="91.5" fill="none" stroke="#9cabff" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></line><line x1="28.5" y1="89.5" x2="32.5" y2="89.5" fill="none" stroke="#9cabff" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></line><line x1="79.5" y1="22.5" x2="79.5" y2="26.5" fill="none" stroke="#9cabff" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></line><line x1="77.5" y1="24.5" x2="81.5" y2="24.5" fill="none" stroke="#9cabff" stroke-linecap="round" stroke-linejoin="round"${_scopeId}></line><circle cx="90.5" cy="97.5" r="3" fill="none" stroke="#9cabff" stroke-miterlimit="10"${_scopeId}></circle><circle cx="24" cy="23" r="2.5" fill="none" stroke="#9cabff" stroke-miterlimit="10"${_scopeId}></circle></svg></div><div class="nk-block-content"${_scopeId}><div class="nk-block-content-head px-lg-4"${_scopeId}><h5${_scopeId}>We’re here to help you!</h5><p class="text-soft"${_scopeId}>Ask a question or file a support ticket, manage request, report an issues. Our team support team will get back to you by email.</p></div></div><div class="nk-block-content flex-shrink-0"${_scopeId}><a href="#" class="btn btn-lg btn-outline-primary"${_scopeId}>Get Support Now</a></div></div></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "nk-content nk-content-fluid" }, [
                createVNode("div", { class: "container-xl wide-lg" }, [
                  createVNode("div", { class: "nk-content-body" }, [
                    createVNode("div", { class: "nk-block-head" }, [
                      createVNode("div", { class: "nk-block-head-sub" }, [
                        createVNode("span", null, "Welcome!")
                      ]),
                      createVNode("div", { class: "nk-block-between-md g-4" }, [
                        createVNode("div", { class: "nk-block-head-content" }, [
                          createVNode("h2", { class: "nk-block-title fw-normal" }, "Abu Bin Ishityak"),
                          createVNode("div", { class: "nk-block-des" }, [
                            createVNode("p", null, "At a glance summary of your account. Have fun!")
                          ])
                        ]),
                        createVNode("div", { class: "nk-block-head-content" }, [
                          createVNode("ul", { class: "nk-block-tools gx-3" }, [
                            createVNode("li", null, [
                              createVNode("a", {
                                href: "#",
                                class: "btn btn-primary"
                              }, [
                                createVNode("span", null, "Deposit"),
                                createTextVNode(),
                                createVNode("em", { class: "icon ni ni-arrow-long-right" })
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("a", {
                                href: "#",
                                class: "btn btn-white btn-light"
                              }, [
                                createVNode("span", null, "Buy / Sell"),
                                createTextVNode(),
                                createVNode("em", { class: "icon ni ni-arrow-long-right d-none d-sm-inline-block" })
                              ])
                            ]),
                            createVNode("li", { class: "opt-menu-md dropdown" }, [
                              createVNode("a", {
                                href: "#",
                                class: "btn btn-white btn-light btn-icon",
                                "data-bs-toggle": "dropdown"
                              }, [
                                createVNode("em", { class: "icon ni ni-setting" })
                              ]),
                              createVNode("div", { class: "dropdown-menu dropdown-menu-end" }, [
                                createVNode("ul", { class: "link-list-opt no-bdr" }, [
                                  createVNode("li", null, [
                                    createVNode("a", { href: "#" }, [
                                      createVNode("em", { class: "icon ni ni-coin-alt" }),
                                      createVNode("span", null, "Curreny Settings")
                                    ])
                                  ]),
                                  createVNode("li", null, [
                                    createVNode("a", { href: "#" }, [
                                      createVNode("em", { class: "icon ni ni-notify" }),
                                      createVNode("span", null, "Push Notification")
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "nk-block" }, [
                      createVNode("div", { class: "row gy-gs" }, [
                        createVNode("div", { class: "col-lg-5 col-xl-4" }, [
                          createVNode("div", { class: "nk-block" }, [
                            createVNode("div", { class: "nk-block-head-xs" }, [
                              createVNode("div", { class: "nk-block-head-content" }, [
                                createVNode("h5", { class: "nk-block-title title" }, "Overview")
                              ])
                            ]),
                            createVNode("div", { class: "nk-block" }, [
                              createVNode("div", { class: "card card-bordered text-light is-dark h-100" }, [
                                createVNode("div", { class: "card-inner" }, [
                                  createVNode("div", { class: "nk-wg7" }, [
                                    createVNode("div", { class: "nk-wg7-stats" }, [
                                      createVNode("div", { class: "nk-wg7-title" }, "Available balance in USD"),
                                      createVNode("div", { class: "number-lg amount" }, "179,850.950")
                                    ]),
                                    createVNode("div", { class: "nk-wg7-stats-group" }, [
                                      createVNode("div", { class: "nk-wg7-stats w-50" }, [
                                        createVNode("div", { class: "nk-wg7-title" }, "Wallets"),
                                        createVNode("div", { class: "number-lg" }, "5")
                                      ]),
                                      createVNode("div", { class: "nk-wg7-stats w-50" }, [
                                        createVNode("div", { class: "nk-wg7-title" }, "Transactions"),
                                        createVNode("div", { class: "number" }, "34,405")
                                      ])
                                    ]),
                                    createVNode("div", { class: "nk-wg7-foot" }, [
                                      createVNode("span", { class: "nk-wg7-note" }, [
                                        createTextVNode("Last activity at "),
                                        createVNode("span", null, "19 Nov, 2019")
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-lg-7 col-xl-8" }, [
                          createVNode("div", { class: "nk-block" }, [
                            createVNode("div", { class: "nk-block-head-xs" }, [
                              createVNode("div", { class: "nk-block-between-md g-2" }, [
                                createVNode("div", { class: "nk-block-head-content" }, [
                                  createVNode("h5", { class: "nk-block-title title" }, "Digital Wallets")
                                ]),
                                createVNode("div", { class: "nk-block-head-content" }, [
                                  createVNode("a", {
                                    href: "html/crypto/wallets.html",
                                    class: "link link-primary"
                                  }, "See All")
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "row g-2" }, [
                              createVNode("div", { class: "col-sm-4" }, [
                                createVNode("div", { class: "card bg-light" }, [
                                  createVNode("div", { class: "nk-wgw sm" }, [
                                    createVNode("a", {
                                      class: "nk-wgw-inner",
                                      href: "html/crypto/wallet-bitcoin.html"
                                    }, [
                                      createVNode("div", { class: "nk-wgw-name" }, [
                                        createVNode("div", { class: "nk-wgw-icon" }, [
                                          createVNode("em", { class: "icon ni ni-sign-btc" })
                                        ]),
                                        createVNode("h5", { class: "nk-wgw-title title" }, "NioWallet")
                                      ]),
                                      createVNode("div", { class: "nk-wgw-balance" }, [
                                        createVNode("div", { class: "amount" }, [
                                          createTextVNode("4.434953"),
                                          createVNode("span", { class: "currency currency-nio" }, "NIO")
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "col-sm-4" }, [
                                createVNode("div", { class: "card bg-light" }, [
                                  createVNode("div", { class: "nk-wgw sm" }, [
                                    createVNode("a", {
                                      class: "nk-wgw-inner",
                                      href: "html/crypto/wallet-bitcoin.html"
                                    }, [
                                      createVNode("div", { class: "nk-wgw-name" }, [
                                        createVNode("div", { class: "nk-wgw-icon" }, [
                                          createVNode("em", { class: "icon ni ni-sign-btc" })
                                        ]),
                                        createVNode("h5", { class: "nk-wgw-title title" }, "Bitcoin Wallet")
                                      ]),
                                      createVNode("div", { class: "nk-wgw-balance" }, [
                                        createVNode("div", { class: "amount" }, [
                                          createTextVNode("4.434953"),
                                          createVNode("span", { class: "currency currency-btc" }, "BTC")
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "col-sm-4" }, [
                                createVNode("div", { class: "card bg-light" }, [
                                  createVNode("div", { class: "nk-wgw sm" }, [
                                    createVNode("a", {
                                      class: "nk-wgw-inner",
                                      href: "html/crypto/wallet-bitcoin.html"
                                    }, [
                                      createVNode("div", { class: "nk-wgw-name" }, [
                                        createVNode("div", { class: "nk-wgw-icon" }, [
                                          createVNode("em", { class: "icon ni ni-sign-eth" })
                                        ]),
                                        createVNode("h5", { class: "nk-wgw-title title" }, "Ethereum Wallet")
                                      ]),
                                      createVNode("div", { class: "nk-wgw-balance" }, [
                                        createVNode("div", { class: "amount" }, [
                                          createTextVNode("0.000560"),
                                          createVNode("span", { class: "currency currency-eth" }, "ETH")
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "nk-block nk-block-md" }, [
                            createVNode("div", { class: "nk-block-head-xs" }, [
                              createVNode("div", { class: "nk-block-between-md g-2" }, [
                                createVNode("div", { class: "nk-block-head-content" }, [
                                  createVNode("h6", { class: "nk-block-title title" }, "Fiat Accounts")
                                ]),
                                createVNode("div", { class: "nk-block-head-content" }, [
                                  createVNode("a", {
                                    href: "html/crypto/wallets.html",
                                    class: "link link-primary"
                                  }, "See All")
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "row g-2" }, [
                              createVNode("div", { class: "col-sm-4" }, [
                                createVNode("div", { class: "card bg-light" }, [
                                  createVNode("div", { class: "nk-wgw sm" }, [
                                    createVNode("a", {
                                      class: "nk-wgw-inner",
                                      href: "html/crypto/wallet-bitcoin.html"
                                    }, [
                                      createVNode("div", { class: "nk-wgw-name" }, [
                                        createVNode("div", { class: "nk-wgw-icon" }, [
                                          createVNode("em", { class: "icon ni ni-sign-btc" })
                                        ]),
                                        createVNode("h5", { class: "nk-wgw-title title" }, "NioWallet")
                                      ]),
                                      createVNode("div", { class: "nk-wgw-balance" }, [
                                        createVNode("div", { class: "amount" }, [
                                          createTextVNode("4.434953"),
                                          createVNode("span", { class: "currency currency-nio" }, "NIO")
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "col-sm-4" }, [
                                createVNode("div", { class: "card bg-light" }, [
                                  createVNode("div", { class: "nk-wgw sm" }, [
                                    createVNode("a", {
                                      class: "nk-wgw-inner",
                                      href: "html/crypto/wallet-bitcoin.html"
                                    }, [
                                      createVNode("div", { class: "nk-wgw-name" }, [
                                        createVNode("div", { class: "nk-wgw-icon" }, [
                                          createVNode("em", { class: "icon ni ni-sign-btc" })
                                        ]),
                                        createVNode("h5", { class: "nk-wgw-title title" }, "Bitcoin Wallet")
                                      ]),
                                      createVNode("div", { class: "nk-wgw-balance" }, [
                                        createVNode("div", { class: "amount" }, [
                                          createTextVNode("4.434953"),
                                          createVNode("span", { class: "currency currency-btc" }, "BTC")
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "col-sm-4" }, [
                                createVNode("div", { class: "card bg-light" }, [
                                  createVNode("div", { class: "nk-wgw sm" }, [
                                    createVNode("a", {
                                      class: "nk-wgw-inner",
                                      href: "html/crypto/wallet-bitcoin.html"
                                    }, [
                                      createVNode("div", { class: "nk-wgw-name" }, [
                                        createVNode("div", { class: "nk-wgw-icon" }, [
                                          createVNode("em", { class: "icon ni ni-sign-eth" })
                                        ]),
                                        createVNode("h5", { class: "nk-wgw-title title" }, "Ethereum Wallet")
                                      ]),
                                      createVNode("div", { class: "nk-wgw-balance" }, [
                                        createVNode("div", { class: "amount" }, [
                                          createTextVNode("0.000560"),
                                          createVNode("span", { class: "currency currency-eth" }, "ETH")
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "nk-block nk-block-lg" }, [
                      createVNode("div", { class: "row gy-gs" }, [
                        createVNode("div", { class: "col-md-6" }, [
                          createVNode("div", { class: "card-head" }, [
                            createVNode("div", { class: "card-title mb-0" }, [
                              createVNode("h5", { class: "title" }, "Recent Activities")
                            ]),
                            createVNode("div", { class: "card-tools" }, [
                              createVNode("ul", { class: "card-tools-nav" }, [
                                createVNode("li", null, [
                                  createVNode("a", { href: "#" }, "Buy")
                                ]),
                                createVNode("li", null, [
                                  createVNode("a", { href: "#" }, "Sell")
                                ]),
                                createVNode("li", { class: "active" }, [
                                  createVNode("a", { href: "#" }, "All")
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "tranx-list card card-bordered" }, [
                            createVNode("div", { class: "tranx-item" }, [
                              createVNode("div", { class: "tranx-col" }, [
                                createVNode("div", { class: "tranx-info" }, [
                                  createVNode("div", { class: "tranx-data" }, [
                                    createVNode("div", { class: "tranx-label" }, [
                                      createTextVNode("Buy Bitcoin "),
                                      createVNode("em", { class: "tranx-icon sm icon ni ni-sign-btc" })
                                    ]),
                                    createVNode("div", { class: "tranx-date" }, "Nov 12, 2019 11:34 PM")
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "tranx-col" }, [
                                createVNode("div", { class: "tranx-amount" }, [
                                  createVNode("div", { class: "number" }, [
                                    createTextVNode("0.5384 "),
                                    createVNode("span", { class: "currency currency-btc" }, "BTC")
                                  ]),
                                  createVNode("div", { class: "number-sm" }, [
                                    createTextVNode("3,980.93 "),
                                    createVNode("span", { class: "currency currency-usd" }, "USD")
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "tranx-item" }, [
                              createVNode("div", { class: "tranx-col" }, [
                                createVNode("div", { class: "tranx-info" }, [
                                  createVNode("div", { class: "tranx-data" }, [
                                    createVNode("div", { class: "tranx-label" }, [
                                      createTextVNode("Buy Ehtereum "),
                                      createVNode("span", { class: "tranx-icon sm" }, [
                                        createVNode("img", {
                                          src: "",
                                          alt: ""
                                        })
                                      ])
                                    ]),
                                    createVNode("div", { class: "tranx-date" }, "Nov 12, 2019 11:34 PM")
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "tranx-col" }, [
                                createVNode("div", { class: "tranx-amount" }, [
                                  createVNode("div", { class: "number" }, [
                                    createTextVNode("1.538405 "),
                                    createVNode("span", { class: "currency currency-btc" }, "ETH")
                                  ]),
                                  createVNode("div", { class: "number-sm" }, [
                                    createTextVNode("1,176.34 "),
                                    createVNode("span", { class: "currency currency-usd" }, "USD")
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "tranx-item" }, [
                              createVNode("div", { class: "tranx-col" }, [
                                createVNode("div", { class: "tranx-info" }, [
                                  createVNode("div", { class: "tranx-data" }, [
                                    createVNode("div", { class: "tranx-label" }, [
                                      createTextVNode("Buy Bitcoin "),
                                      createVNode("em", { class: "tranx-icon sm icon ni ni-sign-btc" })
                                    ]),
                                    createVNode("div", { class: "tranx-date" }, "Nov 12, 2019 11:34 PM")
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "tranx-col" }, [
                                createVNode("div", { class: "tranx-amount" }, [
                                  createVNode("div", { class: "number" }, [
                                    createTextVNode("0.5384 "),
                                    createVNode("span", { class: "currency currency-btc" }, "BTC")
                                  ]),
                                  createVNode("div", { class: "number-sm" }, [
                                    createTextVNode("3,980.93 "),
                                    createVNode("span", { class: "currency currency-usd" }, "USD")
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "tranx-item" }, [
                              createVNode("div", { class: "tranx-col" }, [
                                createVNode("div", { class: "tranx-info" }, [
                                  createVNode("div", { class: "tranx-data" }, [
                                    createVNode("div", { class: "tranx-label" }, [
                                      createTextVNode("Buy Ehtereum "),
                                      createVNode("span", { class: "tranx-icon sm" }, [
                                        createVNode("img", {
                                          src: "",
                                          alt: ""
                                        })
                                      ])
                                    ]),
                                    createVNode("div", { class: "tranx-date" }, "Nov 12, 2019 11:34 PM")
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "tranx-col" }, [
                                createVNode("div", { class: "tranx-amount" }, [
                                  createVNode("div", { class: "number" }, [
                                    createTextVNode("1.538405 "),
                                    createVNode("span", { class: "currency currency-btc" }, "ETH")
                                  ]),
                                  createVNode("div", { class: "number-sm" }, [
                                    createTextVNode("1,176.34 "),
                                    createVNode("span", { class: "currency currency-usd" }, "USD")
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-md-6" }, [
                          createVNode("div", { class: "card-head" }, [
                            createVNode("div", { class: "card-title mb-0" }, [
                              createVNode("h5", { class: "title" }, "Balance Flow")
                            ]),
                            createVNode("div", { class: "card-tools" }, [
                              createVNode("ul", { class: "card-tools-nav" }, [
                                createVNode("li", null, [
                                  createVNode("a", { href: "#" }, "This Month")
                                ]),
                                createVNode("li", { class: "active" }, [
                                  createVNode("a", { href: "#" }, "This Years")
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "card card-bordered" }, [
                            createVNode("div", { class: "card-inner" }, [
                              createVNode("div", { class: "nk-wg4" }, [
                                createVNode("div", { class: "nk-wg4-group justify-center gy-3 gx-4" }, [
                                  createVNode("div", { class: "nk-wg4-item" }, [
                                    createVNode("div", { class: "sub-text" }, [
                                      createVNode("div", {
                                        class: "dot dot-lg sq",
                                        "data-bg": "#5ce0aa",
                                        style: { "background": "rgb(92, 224, 170)" }
                                      }),
                                      createTextVNode(),
                                      createVNode("span", null, "Received")
                                    ])
                                  ]),
                                  createVNode("div", { class: "nk-wg4-item" }, [
                                    createVNode("div", { class: "sub-text" }, [
                                      createVNode("div", {
                                        class: "dot dot-lg sq",
                                        "data-bg": "#798bff",
                                        style: { "background": "rgb(121, 139, 255)" }
                                      }),
                                      createTextVNode(),
                                      createVNode("span", null, "Send")
                                    ])
                                  ]),
                                  createVNode("div", { class: "nk-wg4-item" }, [
                                    createVNode("div", { class: "sub-text" }, [
                                      createVNode("div", {
                                        class: "dot dot-lg sq",
                                        "data-bg": "#f6ca3e",
                                        style: { "background": "rgb(246, 202, 62)" }
                                      }),
                                      createVNode("span", null, "Withdraw")
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "nk-ck3" }, [
                                createVNode("canvas", {
                                  class: "chart-account-summary",
                                  id: "summaryBalance",
                                  width: "622",
                                  height: "320",
                                  style: { "display": "block", "box-sizing": "border-box", "height": "160px", "width": "311px" }
                                })
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "nk-block" }, [
                      createVNode("div", { class: "card card-bordered" }, [
                        createVNode("div", { class: "nk-refwg" }, [
                          createVNode("div", { class: "nk-refwg-invite card-inner" }, [
                            createVNode("div", { class: "nk-refwg-head g-3" }, [
                              createVNode("div", { class: "nk-refwg-title" }, [
                                createVNode("h5", { class: "title" }, "Refer Us & Earn"),
                                createVNode("div", { class: "title-sub" }, "Use the bellow link to invite your friends.")
                              ]),
                              createVNode("div", { class: "nk-refwg-action" }, [
                                createVNode("a", {
                                  href: "#",
                                  class: "btn btn-primary"
                                }, "Invite")
                              ])
                            ]),
                            createVNode("div", { class: "nk-refwg-url" }, [
                              createVNode("div", { class: "form-control-wrap" }, [
                                createVNode("div", {
                                  class: "form-clip clipboard-init",
                                  "data-clipboard-target": "#refUrl",
                                  "data-success": "Copied",
                                  "data-text": "Copy Link"
                                }, [
                                  createVNode("em", { class: "clipboard-icon icon ni ni-copy" }),
                                  createTextVNode(),
                                  createVNode("span", { class: "clipboard-text" }, "Copy Link")
                                ]),
                                createVNode("div", { class: "form-icon" }, [
                                  createVNode("em", { class: "icon ni ni-link-alt" })
                                ]),
                                createVNode("input", {
                                  type: "text",
                                  class: "form-control copy-text",
                                  id: "refUrl",
                                  value: "https://dashlite.net/?ref=4945KD48"
                                })
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "nk-refwg-stats card-inner bg-lighter" }, [
                            createVNode("div", { class: "nk-refwg-group g-3" }, [
                              createVNode("div", { class: "nk-refwg-name" }, [
                                createVNode("h6", { class: "title" }, [
                                  createTextVNode("My Referral "),
                                  createVNode("em", {
                                    class: "icon ni ni-info",
                                    "data-bs-toggle": "tooltip",
                                    "data-bs-placement": "right",
                                    "aria-label": "Referral Informations",
                                    "data-bs-original-title": "Referral Informations"
                                  })
                                ])
                              ]),
                              createVNode("div", { class: "nk-refwg-info g-3" }, [
                                createVNode("div", { class: "nk-refwg-sub" }, [
                                  createVNode("div", { class: "title" }, "394"),
                                  createVNode("div", { class: "sub-text" }, "Total Joined")
                                ]),
                                createVNode("div", { class: "nk-refwg-sub" }, [
                                  createVNode("div", { class: "title" }, "548.49"),
                                  createVNode("div", { class: "sub-text" }, "Referral Earn")
                                ])
                              ]),
                              createVNode("div", { class: "nk-refwg-more dropdown mt-n1 me-n1" }, [
                                createVNode("a", {
                                  href: "#",
                                  class: "btn btn-icon btn-trigger",
                                  "data-bs-toggle": "dropdown"
                                }, [
                                  createVNode("em", { class: "icon ni ni-more-h" })
                                ]),
                                createVNode("div", { class: "dropdown-menu dropdown-menu-xs dropdown-menu-end" }, [
                                  createVNode("ul", { class: "link-list-plain sm" }, [
                                    createVNode("li", null, [
                                      createVNode("a", { href: "#" }, "7 days")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("a", { href: "#" }, "15 Days")
                                    ]),
                                    createVNode("li", null, [
                                      createVNode("a", { href: "#" }, "30 Days")
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "nk-refwg-ck" }, [
                              createVNode("canvas", {
                                class: "chart-refer-stats",
                                id: "refBarChart",
                                width: "622",
                                height: "100",
                                style: { "display": "block", "box-sizing": "border-box", "height": "50px", "width": "311px" }
                              })
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "nk-block" }, [
                      createVNode("div", { class: "card card-bordered" }, [
                        createVNode("div", { class: "card-inner card-inner-lg" }, [
                          createVNode("div", { class: "align-center flex-wrap flex-md-nowrap g-4" }, [
                            createVNode("div", { class: "nk-block-image w-120px flex-shrink-0" }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 120 118"
                              }, [
                                createVNode("path", {
                                  d: "M8.916,94.745C-.318,79.153-2.164,58.569,2.382,40.578,7.155,21.69,19.045,9.451,35.162,4.32,46.609.676,58.716.331,70.456,1.845,84.683,3.68,99.57,8.694,108.892,21.408c10.03,13.679,12.071,34.71,10.747,52.054-1.173,15.359-7.441,27.489-19.231,34.494-10.689,6.351-22.92,8.733-34.715,10.331-16.181,2.192-34.195-.336-47.6-12.281A47.243,47.243,0,0,1,8.916,94.745Z",
                                  transform: "translate(0 -1)",
                                  fill: "#f6faff"
                                }),
                                createVNode("rect", {
                                  x: "18",
                                  y: "32",
                                  width: "84",
                                  height: "50",
                                  rx: "4",
                                  ry: "4",
                                  fill: "#fff"
                                }),
                                createVNode("rect", {
                                  x: "26",
                                  y: "44",
                                  width: "20",
                                  height: "12",
                                  rx: "1",
                                  ry: "1",
                                  fill: "#e5effe"
                                }),
                                createVNode("rect", {
                                  x: "50",
                                  y: "44",
                                  width: "20",
                                  height: "12",
                                  rx: "1",
                                  ry: "1",
                                  fill: "#e5effe"
                                }),
                                createVNode("rect", {
                                  x: "74",
                                  y: "44",
                                  width: "20",
                                  height: "12",
                                  rx: "1",
                                  ry: "1",
                                  fill: "#e5effe"
                                }),
                                createVNode("rect", {
                                  x: "38",
                                  y: "60",
                                  width: "20",
                                  height: "12",
                                  rx: "1",
                                  ry: "1",
                                  fill: "#e5effe"
                                }),
                                createVNode("rect", {
                                  x: "62",
                                  y: "60",
                                  width: "20",
                                  height: "12",
                                  rx: "1",
                                  ry: "1",
                                  fill: "#e5effe"
                                }),
                                createVNode("path", {
                                  d: "M98,32H22a5.006,5.006,0,0,0-5,5V79a5.006,5.006,0,0,0,5,5H52v8H45a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H73a2,2,0,0,0,2-2V94a2,2,0,0,0-2-2H66V84H98a5.006,5.006,0,0,0,5-5V37A5.006,5.006,0,0,0,98,32ZM73,94v4H45V94Zm-9-2H54V84H64Zm37-13a3,3,0,0,1-3,3H22a3,3,0,0,1-3-3V37a3,3,0,0,1,3-3H98a3,3,0,0,1,3,3Z",
                                  transform: "translate(0 -1)",
                                  fill: "#798bff"
                                }),
                                createVNode("path", {
                                  d: "M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z",
                                  transform: "translate(0 -1)",
                                  fill: "#6576ff"
                                }),
                                createVNode("path", {
                                  d: "M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z",
                                  transform: "translate(0 -1)",
                                  fill: "none",
                                  stroke: "#6576ff",
                                  "stroke-miterlimit": "10",
                                  "stroke-width": "2"
                                }),
                                createVNode("line", {
                                  x1: "40",
                                  y1: "22",
                                  x2: "57",
                                  y2: "22",
                                  fill: "none",
                                  stroke: "#fffffe",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2"
                                }),
                                createVNode("line", {
                                  x1: "40",
                                  y1: "27",
                                  x2: "57",
                                  y2: "27",
                                  fill: "none",
                                  stroke: "#fffffe",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2"
                                }),
                                createVNode("line", {
                                  x1: "40",
                                  y1: "32",
                                  x2: "50",
                                  y2: "32",
                                  fill: "none",
                                  stroke: "#fffffe",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2"
                                }),
                                createVNode("line", {
                                  x1: "30.5",
                                  y1: "87.5",
                                  x2: "30.5",
                                  y2: "91.5",
                                  fill: "none",
                                  stroke: "#9cabff",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }),
                                createVNode("line", {
                                  x1: "28.5",
                                  y1: "89.5",
                                  x2: "32.5",
                                  y2: "89.5",
                                  fill: "none",
                                  stroke: "#9cabff",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }),
                                createVNode("line", {
                                  x1: "79.5",
                                  y1: "22.5",
                                  x2: "79.5",
                                  y2: "26.5",
                                  fill: "none",
                                  stroke: "#9cabff",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }),
                                createVNode("line", {
                                  x1: "77.5",
                                  y1: "24.5",
                                  x2: "81.5",
                                  y2: "24.5",
                                  fill: "none",
                                  stroke: "#9cabff",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round"
                                }),
                                createVNode("circle", {
                                  cx: "90.5",
                                  cy: "97.5",
                                  r: "3",
                                  fill: "none",
                                  stroke: "#9cabff",
                                  "stroke-miterlimit": "10"
                                }),
                                createVNode("circle", {
                                  cx: "24",
                                  cy: "23",
                                  r: "2.5",
                                  fill: "none",
                                  stroke: "#9cabff",
                                  "stroke-miterlimit": "10"
                                })
                              ]))
                            ]),
                            createVNode("div", { class: "nk-block-content" }, [
                              createVNode("div", { class: "nk-block-content-head px-lg-4" }, [
                                createVNode("h5", null, "We’re here to help you!"),
                                createVNode("p", { class: "text-soft" }, "Ask a question or file a support ticket, manage request, report an issues. Our team support team will get back to you by email.")
                              ])
                            ]),
                            createVNode("div", { class: "nk-block-content flex-shrink-0" }, [
                              createVNode("a", {
                                href: "#",
                                class: "btn btn-lg btn-outline-primary"
                              }, "Get Support Now")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Notification.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
