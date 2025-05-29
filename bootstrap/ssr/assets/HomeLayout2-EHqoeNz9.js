import { Link } from "@inertiajs/vue3";
import { resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "nk-main",
    style: { "overflow": "auto" }
  }, _attrs))}><header class="" id="home"><div class="border-bottom header-main header-main-s1 is-sticky is-transparent" style="${ssrRenderStyle({ "position": "fixed", "width": "100%", "background": "white", "box-shadow": "2px 2px 10px #dbdfea" })}"><div class="container header-container"><div class="header-wrap"><div class="header-logo"><a href="html/index.html" class="logo-link"><img class="logo-light"${ssrRenderAttr("src", $data.logo)} srcset="" alt="logo" style="${ssrRenderStyle({ "width": "100px" })}"><img class="logo-dark logo-img"${ssrRenderAttr("src", $data.logo)} srcset="" alt="logo-dark" style="${ssrRenderStyle({ "height": "100px" })}"></a></div><div class="header-toggle"><button class="menu-toggler" data-target="mainNav"><em class="menu-on icon ni ni-menu"></em><em class="menu-off icon ni ni-cross"></em></button></div><nav class="header-menu" data-content="mainNav"><ul class="menu-list ms-lg-auto"><li class="menu-item">`);
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
  _push(`</li><li class="menu-item"><a href="#" class="menu-link menu-toggle bold">About</a><div class="menu-sub"><ul class="menu-list"><li class="menu-item"><a href="html/index.html" class="menu-link">NetZero Initiative</a></li><li class="menu-item"><a href="html/index-v2.html" class="menu-link">Our Mission</a></li><li class="menu-item"><a href="html/index-v3.html" class="menu-link">Carbon Credit</a></li><li class="menu-item"><a href="html/index-v4.html" class="menu-link">MRV Services</a></li><li class="menu-item"><a href="html/index-v5.html" class="menu-link">Climate Finance</a></li><li class="menu-item"><a href="html/index-v6.html" class="menu-link">Green Investiment</a></li><li class="menu-item"><a href="html/index-v6.html" class="menu-link">Beneficiaries</a></li><li class="menu-item"><a href="html/index-v6.html" class="menu-link">Partners</a></li></ul></div></li><li class="menu-item"><a href="#" class="menu-link bold">Contact</a></li><li class="menu-item"><a href="#home" class="menu-link bold">Carbon Markets</a></li><li class="menu-item"><a href="#pricing" class="menu-link bold">Projects</a></li><li class="menu-item"><a href="#reviews" class="menu-link bold">Report</a></li></ul><ul class="menu-btns"><li style="${ssrRenderStyle({ "float": "left" })}"><a href=""><i class="bi bi-search" style="${ssrRenderStyle({ "font-size": "25px", "color": "black" })}"></i></a></li><li style="${ssrRenderStyle({ "float": "left" })}">`);
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
  _push(`</li></ul></nav></div></div></div></header><div style="${ssrRenderStyle({ "padding-top": "10px" })}">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div><footer class="footer bg-dark" id="footer"><div class="container"><div class="row g-3 align-items-center justify-content-md-between py-4 py-md-5"><div class="col-md-3"><div class="footer-logo"><a href="html/index.html" class="logo-link"><img class="logo-light logo-img"${ssrRenderAttr("src", $data.logo)} srcset="" alt="logo"><img class="logo-dark logo-img"${ssrRenderAttr("src", $data.logo)} srcset="" alt="logo-dark"></a></div></div><div class="col-md-9 d-flex justify-content-md-end"><ul class="link-inline gx-4"><li><a href="#">How it works</a></li><li><a href="#">Service</a></li><li><a href="#">Help</a></li><li><a href="#">Contact</a></li></ul></div></div><hr class="hr border-light mb-0 mt-n1"><div class="row g-3 align-items-center justify-content-md-between py-4"><div class="col-md-8"><div class="text-base">Copyright © 2024. Template Made by <a class="text-base fw-bold" href="#">Softnio</a></div></div><div class="col-md-4 d-flex justify-content-md-end"><ul class="social"><li><a href="#"><em class="icon ni ni-twitter"></em></a></li><li><a href="#"><em class="icon ni ni-facebook-f"></em></a></li><li><a href="#"><em class="icon ni ni-instagram"></em></a></li><li><a href="#"><em class="icon ni ni-pinterest"></em></a></li></ul></div></div></div></footer></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/HomeLayout2.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomeLayout2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  HomeLayout2 as H
};
