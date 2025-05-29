import { Link } from "@inertiajs/vue3";
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  components: { Link },
  data() {
    return {
      logo: "http://localhost/netzerocredit/resources/images/logo4.png",
      background: "http://localhost/netzerocredit/resources/images/image1.png",
      icons: "http://localhost/netzerocredit/resources/icons/",
      image: "http://localhost/netzerocredit/resources/images/"
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "nk-main",
    style: { "overflow": "auto" }
  }, _attrs))} data-v-ca55f55d><header class="header has-header-main-s1" id="home" style="${ssrRenderStyle({ "background-image": "url('http://localhost/netzerocredit/resources/images/image1.png')", "background-size": "cover" })}" data-v-ca55f55d><div class="border-0 header-main header-main-s1 is-sticky is-transparent" style="${ssrRenderStyle({ "position": "fixed", "width": "100%", "background": "white", "box-shadow": "2px 2px 10px black" })}" data-v-ca55f55d><div class="container header-container" data-v-ca55f55d><div class="header-wrap" data-v-ca55f55d><div class="header-logo" data-v-ca55f55d><a href="html/index.html" class="logo-link" data-v-ca55f55d><img class="logo-light"${ssrRenderAttr("src", $data.logo)} srcset="" alt="logo" style="${ssrRenderStyle({ "width": "100px" })}" data-v-ca55f55d><img class="logo-dark logo-img"${ssrRenderAttr("src", $data.logo)} srcset="" alt="logo-dark" style="${ssrRenderStyle({ "height": "100px" })}" data-v-ca55f55d></a></div><div class="header-toggle" data-v-ca55f55d><button class="menu-toggler" data-target="mainNav" data-v-ca55f55d><em class="menu-on icon ni ni-menu" data-v-ca55f55d></em><em class="menu-off icon ni ni-cross" data-v-ca55f55d></em></button></div><nav class="header-menu" data-content="mainNav" data-v-ca55f55d><ul class="menu-list ms-lg-auto" data-v-ca55f55d><li class="menu-item" data-v-ca55f55d>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "menu-link bold",
    href: _ctx.route("index")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Home `);
      } else {
        return [
          createTextVNode(" Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="menu-item" data-v-ca55f55d><a href="#" class="menu-link menu-toggle bold" data-v-ca55f55d>About</a><div class="menu-sub" data-v-ca55f55d><ul class="menu-list" data-v-ca55f55d><li class="menu-item" data-v-ca55f55d><a href="html/index.html" class="menu-link" data-v-ca55f55d>NetZero Initiative</a></li><li class="menu-item" data-v-ca55f55d><a href="html/index-v2.html" class="menu-link" data-v-ca55f55d>Our Mission</a></li><li class="menu-item" data-v-ca55f55d><a href="html/index-v3.html" class="menu-link" data-v-ca55f55d>Carbon Credit</a></li><li class="menu-item" data-v-ca55f55d><a href="html/index-v4.html" class="menu-link" data-v-ca55f55d>MRV Services</a></li><li class="menu-item" data-v-ca55f55d><a href="html/index-v5.html" class="menu-link" data-v-ca55f55d>Climate Finance</a></li><li class="menu-item" data-v-ca55f55d><a href="html/index-v6.html" class="menu-link" data-v-ca55f55d>Green Investiment</a></li><li class="menu-item" data-v-ca55f55d><a href="html/index-v6.html" class="menu-link" data-v-ca55f55d>Beneficiaries</a></li><li class="menu-item" data-v-ca55f55d><a href="html/index-v6.html" class="menu-link" data-v-ca55f55d>Partners</a></li></ul></div></li><li class="menu-item" data-v-ca55f55d><a href="#" class="menu-link bold" data-v-ca55f55d>Contact</a></li><li class="menu-item" data-v-ca55f55d><a href="#home" class="menu-link bold" data-v-ca55f55d>Carbon Markets</a></li><li class="menu-item" data-v-ca55f55d><a href="#pricing" class="menu-link bold" data-v-ca55f55d>Projects</a></li><li class="menu-item" data-v-ca55f55d><a href="#reviews" class="menu-link bold" data-v-ca55f55d>Report</a></li></ul><ul class="menu-btns" data-v-ca55f55d><li style="${ssrRenderStyle({ "float": "left" })}" data-v-ca55f55d><a href="" data-v-ca55f55d><i class="bi bi-search" style="${ssrRenderStyle({ "font-size": "25px", "color": "black" })}" data-v-ca55f55d></i></a></li><li style="${ssrRenderStyle({ "float": "left" })}" data-v-ca55f55d>`);
  _push(ssrRenderComponent(_component_Link, {
    class: "btn btn-dark",
    href: _ctx.route("login")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` LogIn `);
      } else {
        return [
          createTextVNode(" LogIn ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></div></div></div><div class="header-content my-auto py-5" style="${ssrRenderStyle({})}" data-v-ca55f55d><div class="container" data-v-ca55f55d><div class="row flex-lg-row-reverse align-items-center justify-content-between g-gs" data-v-ca55f55d><div class="col-lg-6 mb-n3 mb-lg-0" data-v-ca55f55d><div class="header-image header-image-s2" data-v-ca55f55d></div></div><div class="col-lg-5 col-md-10" data-v-ca55f55d><div class="header-caption" data-v-ca55f55d><h1 class="header-title bold" style="${ssrRenderStyle({ "color": "white", "text-shadow": "3px 3px 3px black", "font-family": "sans-serif" })}" data-v-ca55f55d>The Climate Finance Operating System (CFOS)</h1><div class="header-text" data-v-ca55f55d><p class="bold" style="${ssrRenderStyle({ "color": "white", "text-shadow": "3px 3px 3px black", "font-family": "sans-serif", "font-size": "25px" })}" data-v-ca55f55d>Turn your climate action into income with verified carbon credits. </p></div><ul class="header-action btns-inline" data-v-ca55f55d><li data-v-ca55f55d><a href="#" class="btn btn-dark btn-lg" data-v-ca55f55d><span data-v-ca55f55d>Calculate Footprint</span></a></li><li data-v-ca55f55d><a href="#" class="link link-block link-gray" style="${ssrRenderStyle({ "font-size": "20px", "color": "white", "text-shadow": "3px 3px 3px black", "font-family": "sans-serif" })}" data-v-ca55f55d><em class="icon icon-lg ni ni-play-circle" style="${ssrRenderStyle({ "color": "white", "font-size": "30px" })}" data-v-ca55f55d></em><span style="${ssrRenderStyle({ "color": "white" })}" data-v-ca55f55d>Watch video</span></a></li></ul></div></div></div></div></div><div class="header-brand pb-4 pt-2 pb-lg-5" data-v-ca55f55d><div class="container" data-v-ca55f55d><div class="row align-items-center g-gs" data-v-ca55f55d><div class="col-4 col-md-2" data-v-ca55f55d><div class="brand-item" data-v-ca55f55d><img src="" alt="" data-v-ca55f55d></div></div><div class="col-4 col-md-2" data-v-ca55f55d><div class="brand-item" data-v-ca55f55d><img src="" alt="" data-v-ca55f55d></div></div><div class="col-4 col-md-2" data-v-ca55f55d><div class="brand-item" data-v-ca55f55d><img src="" alt="" data-v-ca55f55d></div></div><div class="col-4 col-md-2" data-v-ca55f55d><div class="brand-item" data-v-ca55f55d><img src="" alt="" data-v-ca55f55d></div></div><div class="col-4 col-md-2" data-v-ca55f55d><div class="brand-item" data-v-ca55f55d><img src="" alt="" data-v-ca55f55d></div></div></div></div></div></header>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<footer class="footer bg-dark" id="footer" data-v-ca55f55d><div class="container" data-v-ca55f55d><div class="row g-3 align-items-center justify-content-md-between py-4 py-md-5" data-v-ca55f55d><div class="col-md-3" data-v-ca55f55d><div class="footer-logo" data-v-ca55f55d><a href="html/index.html" class="logo-link" data-v-ca55f55d><img class="logo-light logo-img"${ssrRenderAttr("src", $data.logo)} srcset="" alt="logo" data-v-ca55f55d><img class="logo-dark logo-img"${ssrRenderAttr("src", $data.logo)} srcset="" alt="logo-dark" data-v-ca55f55d></a></div></div><div class="col-md-9 d-flex justify-content-md-end" data-v-ca55f55d><ul class="link-inline gx-4" data-v-ca55f55d><li data-v-ca55f55d><a href="#" data-v-ca55f55d>How it works</a></li><li data-v-ca55f55d><a href="#" data-v-ca55f55d>Service</a></li><li data-v-ca55f55d><a href="#" data-v-ca55f55d>Help</a></li><li data-v-ca55f55d><a href="#" data-v-ca55f55d>Contact</a></li></ul></div></div><hr class="hr border-light mb-0 mt-n1" data-v-ca55f55d><div class="row g-3 align-items-center justify-content-md-between py-4" data-v-ca55f55d><div class="col-md-8" data-v-ca55f55d><div class="text-base" data-v-ca55f55d>Copyright © 2024. Template Made by <a class="text-base fw-bold" href="#" data-v-ca55f55d>Softnio</a></div></div><div class="col-md-4 d-flex justify-content-md-end" data-v-ca55f55d><ul class="social" data-v-ca55f55d><li data-v-ca55f55d><a href="#" data-v-ca55f55d><em class="icon ni ni-twitter" data-v-ca55f55d></em></a></li><li data-v-ca55f55d><a href="#" data-v-ca55f55d><em class="icon ni ni-facebook-f" data-v-ca55f55d></em></a></li><li data-v-ca55f55d><a href="#" data-v-ca55f55d><em class="icon ni ni-instagram" data-v-ca55f55d></em></a></li><li data-v-ca55f55d><a href="#" data-v-ca55f55d><em class="icon ni ni-pinterest" data-v-ca55f55d></em></a></li></ul></div></div></div></footer></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/HomeLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HomeLayout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ca55f55d"]]);
const _sfc_main = {
  components: { Link, HomeLayout },
  data() {
    return {
      logo: "http://localhost/netzerocredit/resources/images/logo4.png",
      background: "http://localhost/netzerocredit/resources/images/image1.png",
      icons: "http://localhost/netzerocredit/resources/icons/",
      image: "http://localhost/netzerocredit/resources/images/"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_home_layout = resolveComponent("home-layout");
  _push(ssrRenderComponent(_component_home_layout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<section class="section section-service pb-0" id="service" style="${ssrRenderStyle({ "margin-top": "-50px" })}" data-v-6bcdd77d${_scopeId}><div class="container" data-v-6bcdd77d${_scopeId}><div class="row justify-content-center text-center" style="${ssrRenderStyle({})}" data-v-6bcdd77d${_scopeId}><div class="col-sm-7 col-md-6 col-9" data-v-6bcdd77d${_scopeId}><div class="section-head" data-v-6bcdd77d${_scopeId}><h3 class="title bold" style="${ssrRenderStyle({ "font-weight": "bold", "font-family": "sans-serif" })}" data-v-6bcdd77d${_scopeId}><strong class="bold" data-v-6bcdd77d${_scopeId}> OUR SERVICES</strong></h3></div></div></div><div class="section-content" data-v-6bcdd77d${_scopeId}><div class="row justify-content-center text-center g-gs" data-v-6bcdd77d${_scopeId}><div class="col-9 col-sm-7 col-md-4" data-v-6bcdd77d${_scopeId}><div class="service service-s2" data-v-6bcdd77d${_scopeId}><div class="service-icon styled-icon styled-icon-s2" data-v-6bcdd77d${_scopeId}><img${ssrRenderAttr("src", $data.icons + "graph.png")} data-v-6bcdd77d${_scopeId}></div><div class="service-text" data-v-6bcdd77d${_scopeId}><h4 class="title bold" data-v-6bcdd77d${_scopeId}>MRV Services</h4><p data-v-6bcdd77d${_scopeId}> Our MRV system enables accurate tracking of carbon reduction activities on farms and agricultural projects. Using simple, farmer-friendly data collection tools, we help you measure your climate impact, generate reports, and ensure compliance with national and international standards all in one place. </p></div></div></div><div class="col-9 col-sm-7 col-md-4" data-v-6bcdd77d${_scopeId}><div class="service service-s2" data-v-6bcdd77d${_scopeId}><div class="service-icon styled-icon styled-icon-s2" data-v-6bcdd77d${_scopeId}><img${ssrRenderAttr("src", $data.icons + "investment.png")} data-v-6bcdd77d${_scopeId}></div><div class="service-text" data-v-6bcdd77d${_scopeId}><h4 class="title bold" data-v-6bcdd77d${_scopeId}>Carbon Credit</h4><p data-v-6bcdd77d${_scopeId}> We connect your verified carbon reductions to buyers on local and global carbon markets. Whether you&#39;re a farmer, cooperative, or project developer, our platform helps you access climate finance and generate new revenue streams from sustainable practices. </p></div></div></div><div class="col-9 col-sm-7 col-md-4" data-v-6bcdd77d${_scopeId}><div class="service service-s2" data-v-6bcdd77d${_scopeId}><div class="service-icon styled-icon styled-icon-s2" data-v-6bcdd77d${_scopeId}><img${ssrRenderAttr("src", $data.icons + "partnership.png")} data-v-6bcdd77d${_scopeId}></div><div class="service-text" data-v-6bcdd77d${_scopeId}><h4 class="title bold" data-v-6bcdd77d${_scopeId}>Climate Investment</h4><p data-v-6bcdd77d${_scopeId}>Beyond credits, we connect climate-smart projects to investors and financial institutions interested in green agriculture. Whether you need upfront capital or long-term investment, we help position your project for success.</p></div></div></div></div></div></div></section><section class="section section-feature pb-5 mb-5" id="feature" style="${ssrRenderStyle({ "margin-top": "-55px" })}" data-v-6bcdd77d${_scopeId}><div class="container" data-v-6bcdd77d${_scopeId}><div class="row align-items-center justify-content-lg-between g-gs" style="${ssrRenderStyle({ "border-top": "solid 10px #f5f6fa" })}" data-v-6bcdd77d${_scopeId}><div class="col-lg-5" style="${ssrRenderStyle({ "padding": "10px" })}" data-v-6bcdd77d${_scopeId}><div class="img-block img-block-s1" data-v-6bcdd77d${_scopeId}><img${ssrRenderAttr("src", $data.image + "drought.jpg")} alt="img" style="${ssrRenderStyle({ "width": "100%" })}" data-v-6bcdd77d${_scopeId}></div></div><div class="col-lg-7" data-v-6bcdd77d${_scopeId}><div class="text-block me-xl-5" data-v-6bcdd77d${_scopeId}><h3 style="${ssrRenderStyle({ "padding": "0", "line-height": "45px", "word-spacing": "8px" })}" class="bold" data-v-6bcdd77d${_scopeId}> DRIVING CLIMATE FINANCE FOR PEOPLE, PLANET, AND PROSPERITY </h3><p data-v-6bcdd77d${_scopeId}> We believe that climate action is most powerful when it delivers real benefits to people, protects the planet, and unlocks lasting prosperity. </p><p data-v-6bcdd77d${_scopeId}> Our platform connects smallholder-led climate projects to high-integrity carbon markets and climate investment opportunities, enabling communities to earn from verified emissions reductions. </p><ul class="btns-inline" data-v-6bcdd77d${_scopeId}><li data-v-6bcdd77d${_scopeId}><a href="#" class="btn btn-lg btn-dark" data-v-6bcdd77d${_scopeId}><span data-v-6bcdd77d${_scopeId}>Learn More</span></a></li></ul></div></div></div></div></section><section class="section section-pricing" id="pricing" style="${ssrRenderStyle({ "border-top": "solid 10px #f5f6fa" })}" data-v-6bcdd77d${_scopeId}><div class="container" data-v-6bcdd77d${_scopeId}><div class="row justify-content-center" data-v-6bcdd77d${_scopeId}><div class="col-lg-7" data-v-6bcdd77d${_scopeId}><div class="section-head text-center" data-v-6bcdd77d${_scopeId}><h3 class="title" data-v-6bcdd77d${_scopeId}>WHO WE WORK WITH</h3><p data-v-6bcdd77d${_scopeId}>We work hand-in-hand with a diverse network of partners,from farmers and grassroots organisations to policymakers and investors to scale climate solutions that are locally driven and globally relevant.</p></div></div></div><div class="row justify-content-center justify-content-lg-between align-items-center g-gs" data-v-6bcdd77d${_scopeId}><div class="col-xl-3 col-sm-6" data-v-6bcdd77d${_scopeId}><div class="pricing pricing-s2 card card-shadow round-md" data-v-6bcdd77d${_scopeId}><div class="card-inner card-inner-lg" data-v-6bcdd77d${_scopeId}><h5 class="pricing-title" data-v-6bcdd77d${_scopeId}>Smallholder Farmers &amp; Cooperatives</h5><span class="sub-title" data-v-6bcdd77d${_scopeId}>Only for first month</span><hr class="hr border-light" data-v-6bcdd77d${_scopeId}><ul class="pricing-feature list list-nostyle" data-v-6bcdd77d${_scopeId}><li data-v-6bcdd77d${_scopeId}>Limited Acess Library</li><li data-v-6bcdd77d${_scopeId}>Hotline Support 24/7</li><li data-v-6bcdd77d${_scopeId}>Additional Features</li><li data-v-6bcdd77d${_scopeId}>eCommerce Store</li></ul><div class="pricing-action" data-v-6bcdd77d${_scopeId}><a href="#" class="btn btn-outline-dark btn-lg btn-round" data-v-6bcdd77d${_scopeId}><span data-v-6bcdd77d${_scopeId}>Purchase Now</span></a></div></div></div></div><div class="col-xl-3 col-sm-6" data-v-6bcdd77d${_scopeId}><div class="pricing pricing-s2 card card-shadow round-md" data-v-6bcdd77d${_scopeId}><div class="card-inner card-inner-lg" data-v-6bcdd77d${_scopeId}><h5 class="pricing-title" data-v-6bcdd77d${_scopeId}>Businesses &amp; NGOs</h5><span class="sub-title" data-v-6bcdd77d${_scopeId}>Only for first month</span><hr class="hr border-light" data-v-6bcdd77d${_scopeId}><ul class="pricing-feature list list-nostyle" data-v-6bcdd77d${_scopeId}><li data-v-6bcdd77d${_scopeId}>Limited Acess Library</li><li data-v-6bcdd77d${_scopeId}>Hotline Support 24/7</li><li data-v-6bcdd77d${_scopeId}>Additional Features</li><li data-v-6bcdd77d${_scopeId}>eCommerce Store</li></ul><div class="pricing-action" data-v-6bcdd77d${_scopeId}><a href="#" class="btn btn-outline-dark btn-lg btn-round" data-v-6bcdd77d${_scopeId}><span data-v-6bcdd77d${_scopeId}>Purchase Now</span></a></div></div></div></div><div class="col-xl-3 col-sm-6" data-v-6bcdd77d${_scopeId}><div class="pricing pricing-s2 card card-shadow round-md" data-v-6bcdd77d${_scopeId}><div class="card-inner card-inner-lg" data-v-6bcdd77d${_scopeId}><h5 class="pricing-title" data-v-6bcdd77d${_scopeId}>Governments &amp; Local Authorities</h5><span class="sub-title" data-v-6bcdd77d${_scopeId}>Only for first month</span><hr class="hr border-light" data-v-6bcdd77d${_scopeId}><ul class="pricing-feature list list-nostyle" data-v-6bcdd77d${_scopeId}><li data-v-6bcdd77d${_scopeId}>Limited Acess Library</li><li data-v-6bcdd77d${_scopeId}>Hotline Support 24/7</li><li data-v-6bcdd77d${_scopeId}>Additional Features</li><li data-v-6bcdd77d${_scopeId}>eCommerce Store</li></ul><div class="pricing-action" data-v-6bcdd77d${_scopeId}><a href="#" class="btn btn-outline-dark btn-lg btn-round" data-v-6bcdd77d${_scopeId}><span data-v-6bcdd77d${_scopeId}>Purchase Now</span></a></div></div></div></div><div class="col-xl-3 col-sm-6" data-v-6bcdd77d${_scopeId}><div class="pricing pricing-s2 card card-shadow round-md" data-v-6bcdd77d${_scopeId}><div class="card-inner card-inner-lg" data-v-6bcdd77d${_scopeId}><h5 class="pricing-title" data-v-6bcdd77d${_scopeId}>Investors, Donors &amp; Carbon Credit Buyers</h5><span class="sub-title" data-v-6bcdd77d${_scopeId}>Only for first month</span><hr class="hr border-light" data-v-6bcdd77d${_scopeId}><ul class="pricing-feature list list-nostyle" data-v-6bcdd77d${_scopeId}><li data-v-6bcdd77d${_scopeId}>Limited Acess Library</li><li data-v-6bcdd77d${_scopeId}>Hotline Support 24/7</li><li data-v-6bcdd77d${_scopeId}>Additional Features</li><li data-v-6bcdd77d${_scopeId}>eCommerce Store</li></ul><div class="pricing-action" data-v-6bcdd77d${_scopeId}><a href="#" class="btn btn-outline-dark btn-lg btn-round" data-v-6bcdd77d${_scopeId}><span data-v-6bcdd77d${_scopeId}>Purchase Now</span></a></div></div></div></div></div></div></section>`);
      } else {
        return [
          createVNode("section", {
            class: "section section-service pb-0",
            id: "service",
            style: { "margin-top": "-50px" }
          }, [
            createVNode("div", { class: "container" }, [
              createVNode("div", {
                class: "row justify-content-center text-center",
                style: {}
              }, [
                createVNode("div", { class: "col-sm-7 col-md-6 col-9" }, [
                  createVNode("div", { class: "section-head" }, [
                    createVNode("h3", {
                      class: "title bold",
                      style: { "font-weight": "bold", "font-family": "sans-serif" }
                    }, [
                      createVNode("strong", { class: "bold" }, " OUR SERVICES")
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "section-content" }, [
                createVNode("div", { class: "row justify-content-center text-center g-gs" }, [
                  createVNode("div", { class: "col-9 col-sm-7 col-md-4" }, [
                    createVNode("div", { class: "service service-s2" }, [
                      createVNode("div", { class: "service-icon styled-icon styled-icon-s2" }, [
                        createVNode("img", {
                          src: $data.icons + "graph.png"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "service-text" }, [
                        createVNode("h4", { class: "title bold" }, "MRV Services"),
                        createVNode("p", null, " Our MRV system enables accurate tracking of carbon reduction activities on farms and agricultural projects. Using simple, farmer-friendly data collection tools, we help you measure your climate impact, generate reports, and ensure compliance with national and international standards all in one place. ")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-9 col-sm-7 col-md-4" }, [
                    createVNode("div", { class: "service service-s2" }, [
                      createVNode("div", { class: "service-icon styled-icon styled-icon-s2" }, [
                        createVNode("img", {
                          src: $data.icons + "investment.png"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "service-text" }, [
                        createVNode("h4", { class: "title bold" }, "Carbon Credit"),
                        createVNode("p", null, " We connect your verified carbon reductions to buyers on local and global carbon markets. Whether you're a farmer, cooperative, or project developer, our platform helps you access climate finance and generate new revenue streams from sustainable practices. ")
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-9 col-sm-7 col-md-4" }, [
                    createVNode("div", { class: "service service-s2" }, [
                      createVNode("div", { class: "service-icon styled-icon styled-icon-s2" }, [
                        createVNode("img", {
                          src: $data.icons + "partnership.png"
                        }, null, 8, ["src"])
                      ]),
                      createVNode("div", { class: "service-text" }, [
                        createVNode("h4", { class: "title bold" }, "Climate Investment"),
                        createVNode("p", null, "Beyond credits, we connect climate-smart projects to investors and financial institutions interested in green agriculture. Whether you need upfront capital or long-term investment, we help position your project for success.")
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          createVNode("section", {
            class: "section section-feature pb-5 mb-5",
            id: "feature",
            style: { "margin-top": "-55px" }
          }, [
            createVNode("div", { class: "container" }, [
              createVNode("div", {
                class: "row align-items-center justify-content-lg-between g-gs",
                style: { "border-top": "solid 10px #f5f6fa" }
              }, [
                createVNode("div", {
                  class: "col-lg-5",
                  style: { "padding": "10px" }
                }, [
                  createVNode("div", { class: "img-block img-block-s1" }, [
                    createVNode("img", {
                      src: $data.image + "drought.jpg",
                      alt: "img",
                      style: { "width": "100%" }
                    }, null, 8, ["src"])
                  ])
                ]),
                createVNode("div", { class: "col-lg-7" }, [
                  createVNode("div", { class: "text-block me-xl-5" }, [
                    createVNode("h3", {
                      style: { "padding": "0", "line-height": "45px", "word-spacing": "8px" },
                      class: "bold"
                    }, " DRIVING CLIMATE FINANCE FOR PEOPLE, PLANET, AND PROSPERITY "),
                    createVNode("p", null, " We believe that climate action is most powerful when it delivers real benefits to people, protects the planet, and unlocks lasting prosperity. "),
                    createVNode("p", null, " Our platform connects smallholder-led climate projects to high-integrity carbon markets and climate investment opportunities, enabling communities to earn from verified emissions reductions. "),
                    createVNode("ul", { class: "btns-inline" }, [
                      createVNode("li", null, [
                        createVNode("a", {
                          href: "#",
                          class: "btn btn-lg btn-dark"
                        }, [
                          createVNode("span", null, "Learn More")
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ]),
          createVNode("section", {
            class: "section section-pricing",
            id: "pricing",
            style: { "border-top": "solid 10px #f5f6fa" }
          }, [
            createVNode("div", { class: "container" }, [
              createVNode("div", { class: "row justify-content-center" }, [
                createVNode("div", { class: "col-lg-7" }, [
                  createVNode("div", { class: "section-head text-center" }, [
                    createVNode("h3", { class: "title" }, "WHO WE WORK WITH"),
                    createVNode("p", null, "We work hand-in-hand with a diverse network of partners,from farmers and grassroots organisations to policymakers and investors to scale climate solutions that are locally driven and globally relevant.")
                  ])
                ])
              ]),
              createVNode("div", { class: "row justify-content-center justify-content-lg-between align-items-center g-gs" }, [
                createVNode("div", { class: "col-xl-3 col-sm-6" }, [
                  createVNode("div", { class: "pricing pricing-s2 card card-shadow round-md" }, [
                    createVNode("div", { class: "card-inner card-inner-lg" }, [
                      createVNode("h5", { class: "pricing-title" }, "Smallholder Farmers & Cooperatives"),
                      createVNode("span", { class: "sub-title" }, "Only for first month"),
                      createVNode("hr", { class: "hr border-light" }),
                      createVNode("ul", { class: "pricing-feature list list-nostyle" }, [
                        createVNode("li", null, "Limited Acess Library"),
                        createVNode("li", null, "Hotline Support 24/7"),
                        createVNode("li", null, "Additional Features"),
                        createVNode("li", null, "eCommerce Store")
                      ]),
                      createVNode("div", { class: "pricing-action" }, [
                        createVNode("a", {
                          href: "#",
                          class: "btn btn-outline-dark btn-lg btn-round"
                        }, [
                          createVNode("span", null, "Purchase Now")
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "col-xl-3 col-sm-6" }, [
                  createVNode("div", { class: "pricing pricing-s2 card card-shadow round-md" }, [
                    createVNode("div", { class: "card-inner card-inner-lg" }, [
                      createVNode("h5", { class: "pricing-title" }, "Businesses & NGOs"),
                      createVNode("span", { class: "sub-title" }, "Only for first month"),
                      createVNode("hr", { class: "hr border-light" }),
                      createVNode("ul", { class: "pricing-feature list list-nostyle" }, [
                        createVNode("li", null, "Limited Acess Library"),
                        createVNode("li", null, "Hotline Support 24/7"),
                        createVNode("li", null, "Additional Features"),
                        createVNode("li", null, "eCommerce Store")
                      ]),
                      createVNode("div", { class: "pricing-action" }, [
                        createVNode("a", {
                          href: "#",
                          class: "btn btn-outline-dark btn-lg btn-round"
                        }, [
                          createVNode("span", null, "Purchase Now")
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "col-xl-3 col-sm-6" }, [
                  createVNode("div", { class: "pricing pricing-s2 card card-shadow round-md" }, [
                    createVNode("div", { class: "card-inner card-inner-lg" }, [
                      createVNode("h5", { class: "pricing-title" }, "Governments & Local Authorities"),
                      createVNode("span", { class: "sub-title" }, "Only for first month"),
                      createVNode("hr", { class: "hr border-light" }),
                      createVNode("ul", { class: "pricing-feature list list-nostyle" }, [
                        createVNode("li", null, "Limited Acess Library"),
                        createVNode("li", null, "Hotline Support 24/7"),
                        createVNode("li", null, "Additional Features"),
                        createVNode("li", null, "eCommerce Store")
                      ]),
                      createVNode("div", { class: "pricing-action" }, [
                        createVNode("a", {
                          href: "#",
                          class: "btn btn-outline-dark btn-lg btn-round"
                        }, [
                          createVNode("span", null, "Purchase Now")
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "col-xl-3 col-sm-6" }, [
                  createVNode("div", { class: "pricing pricing-s2 card card-shadow round-md" }, [
                    createVNode("div", { class: "card-inner card-inner-lg" }, [
                      createVNode("h5", { class: "pricing-title" }, "Investors, Donors & Carbon Credit Buyers"),
                      createVNode("span", { class: "sub-title" }, "Only for first month"),
                      createVNode("hr", { class: "hr border-light" }),
                      createVNode("ul", { class: "pricing-feature list list-nostyle" }, [
                        createVNode("li", null, "Limited Acess Library"),
                        createVNode("li", null, "Hotline Support 24/7"),
                        createVNode("li", null, "Additional Features"),
                        createVNode("li", null, "eCommerce Store")
                      ]),
                      createVNode("div", { class: "pricing-action" }, [
                        createVNode("a", {
                          href: "#",
                          class: "btn btn-outline-dark btn-lg btn-round"
                        }, [
                          createVNode("span", null, "Purchase Now")
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6bcdd77d"]]);
export {
  Index as default
};
