import { resolveComponent, unref, withCtx, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createVNode, useSSRContext, mergeProps, computed } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { usePage, useForm, Link } from "@inertiajs/vue3";
import { E as ErrorMessageInline, S as SubmitButton } from "./ErrorMessageInline-DdL__BKJ.js";
import { Search } from "@element-plus/icons-vue";
const _sfc_main$3 = {
  __name: "UserRoleModal",
  __ssrInlineRender: true,
  props: {
    user: Object
  },
  setup(__props) {
    const page = usePage();
    const roles = page.props.response.roles;
    const form = useForm({
      role: "",
      gender: ""
    });
    const gender = [{ name: "Male" }, { name: "Female" }, { name: "Other" }];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_select = resolveComponent("el-select");
      const _component_el_option = resolveComponent("el-option");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.user.role == "verify") {
        _push(`<div class="modal" id="modalDefault" style="${ssrRenderStyle({ "display": "block", "position": "fixed", "background": "rgba(0, 0, 0, 0.5)" })}"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header border-0"><h5 class="modal-title">Create Your Profile </h5></div><div class="modal-body"><div class="team pb-1 mb-4"><div class="user-card user-card-s2"><div class="user-avatar lg bg-dark"><span><em class="icon ni ni-user-alt-fill"></em></span></div><div class="user-info"><h4>${ssrInterpolate(__props.user.firstname)} ${ssrInterpolate(__props.user.lastname)}</h4><span style="${ssrRenderStyle({ "font-size": "14px" })}">${ssrInterpolate(__props.user.tel)}</span></div></div></div><form><div class="card card-preview border-0"><div class="card-inner"><div class="preview-block"><div class="col-sm-12"><div class="form-group"><label class="form-label" for="default-06"> Select Gender: `);
        _push(ssrRenderComponent(ErrorMessageInline, {
          message: unref(form).errors.gender
        }, null, _parent));
        _push(`</label><div class="form-control-wrap">`);
        _push(ssrRenderComponent(_component_el_select, {
          placeholder: "Select",
          size: "large",
          style: { "width": "100%", "text-transform": "capitalize" },
          modelValue: unref(form).gender,
          "onUpdate:modelValue": ($event) => unref(form).gender = $event
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(gender, (g, key) => {
                _push2(ssrRenderComponent(_component_el_option, {
                  key,
                  style: {},
                  value: g.name
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(g.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(g.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(), createBlock(Fragment, null, renderList(gender, (g, key) => {
                  return createVNode(_component_el_option, {
                    key,
                    style: {},
                    value: g.name
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(g.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["value"]);
                }), 64))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="form-group"><label class="form-label" for="default-06"> You are signing up as: `);
        _push(ssrRenderComponent(ErrorMessageInline, {
          message: unref(form).errors.role
        }, null, _parent));
        _push(`</label><div class="form-control-wrap">`);
        _push(ssrRenderComponent(_component_el_select, {
          placeholder: "Select",
          size: "large",
          style: { "width": "100%", "text-transform": "capitalize" },
          modelValue: unref(form).role,
          "onUpdate:modelValue": ($event) => unref(form).role = $event
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(roles), (r, key) => {
                _push2(ssrRenderComponent(_component_el_option, {
                  key,
                  style: { "text-transform": "capitalize" },
                  value: r.name
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(r.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(r.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(roles), (r, key) => {
                  return openBlock(), createBlock(_component_el_option, {
                    key,
                    style: { "text-transform": "capitalize" },
                    value: r.name
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(r.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["value"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div><div class="form-group">`);
        _push(ssrRenderComponent(SubmitButton, {
          title: "Save",
          isLoading: unref(form).processing
        }, null, _parent));
        _push(`</div></div></div></div></div></form></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/UserRoleModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "SignoutButton",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><form><button type="submit">Sign Out</button></form></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SignoutButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  setup(__props) {
    const form = useForm({
      input: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_icon = resolveComponent("el-icon");
      _push(ssrRenderComponent(_component_el_input, mergeProps({
        modelValue: unref(form).input,
        "onUpdate:modelValue": ($event) => unref(form).input = $event,
        style: { "width": "100%", "border": "none" },
        placeholder: "Search",
        id: "search",
        class: "el-input__wrapper"
      }, _attrs), {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_icon, { class: "el-input__icon" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(Search), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(Search))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_icon, { class: "el-input__icon" }, {
                default: withCtx(() => [
                  createVNode(unref(Search))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SearchBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const logo = "http://localhost/netzerocredit/resources/images/logo2.png";
const _sfc_main = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  props: {},
  setup(__props) {
    const page = usePage();
    const user = computed(() => page.props.auth.user);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "nk-body npc-general has-sidebar no-touch nk-nio-theme as-mobile" }, _attrs))}><div class="nk-app-root"><div class="nk-main"><div class="nk-sidebar nk-sidebar-fixed nk-sidebar-mobile" data-content="sidebarMenu"><div class="nk-sidebar-element nk-sidebar-head border-0"><div class="nk-menu-trigger"><a href="#" class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em class="icon ni ni-arrow-left"></em></a><a href="#" class="nk-nav-compact nk-quick-nav-icon d-none d-xl-inline-flex" data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a></div><div class="nk-sidebar-brand border-0"><a href="html/index.html" class="logo-link nk-sidebar-logo" style="${ssrRenderStyle({ "padding": "5px", "margin-top": "10px" })}"><img class="logo-light logo-img"${ssrRenderAttr("src", logo)} srcset="" alt="logo"><img class="logo-dark logo-img"${ssrRenderAttr("src", logo)} srcset=""></a></div></div><div class="nk-sidebar-element nk-sidebar-body"><div class="nk-sidebar-content"><div class="nk-sidebar-menu simplebar-scrollable-y" data-simplebar="init"><div class="simplebar-wrapper" style="${ssrRenderStyle({ "margin": "-24px 0px -48px" })}"><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style="${ssrRenderStyle({ "right": "0px", "bottom": "0px" })}"><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style="${ssrRenderStyle({ "height": "100%", "overflow": "hidden scroll" })}"><div class="simplebar-content" style="${ssrRenderStyle({ "padding": "24px 0px 48px" })}"><ul class="nk-menu"><li class="nk-menu-heading"><h6 class="overline-title text-primary-alt">Use-Case Preview</h6></li><li class="nk-menu-item"><a href="html/crm/index.html" class="nk-menu-link"><span class="nk-menu-icon"><em class="icon ni ni-user-list"></em></span><span class="nk-menu-text">CRM Panel</span><span class="nk-menu-badge">HOT</span></a></li><li class="nk-menu-item"><a href="html/hotel/index.html" class="nk-menu-link"><span class="nk-menu-icon"><em class="icon ni ni-building"></em></span><span class="nk-menu-text">Hotel Management</span><span class="nk-menu-badge">HOT</span></a></li><li class="nk-menu-heading"><h6 class="overline-title text-primary-alt">Dashboards</h6></li><li class="nk-menu-item"><a href="html/index.html" class="nk-menu-link"><span class="nk-menu-icon"><em class="icon ni ni-dashlite"></em></span><span class="nk-menu-text">Default Dashboard</span></a></li><li class="nk-menu-item"><a href="html/index-crypto.html" class="nk-menu-link"><span class="nk-menu-icon"><em class="icon ni ni-bitcoin-cash"></em></span><span class="nk-menu-text">Crypto Dashboard</span></a></li><li class="nk-menu-item"><a href="html/index-analytics.html" class="nk-menu-link"><span class="nk-menu-icon"><em class="icon ni ni-growth"></em></span><span class="nk-menu-text">Analytics Dashboard</span></a></li><li class="nk-menu-item"><a href="html/index-invest.html" class="nk-menu-link"><span class="nk-menu-icon"><em class="icon ni ni-coins"></em></span><span class="nk-menu-text">Invest Dashboard</span></a></li><li class="nk-menu-heading"><h6 class="overline-title text-primary-alt">Pre-Built Pages</h6></li><li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-tile-thumb"></em></span><span class="nk-menu-text">Projects</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/project-card.html" class="nk-menu-link"><span class="nk-menu-text">Project Cards</span></a></li><li class="nk-menu-item"><a href="html/project-list.html" class="nk-menu-link"><span class="nk-menu-text">Project List</span></a></li></ul></li><li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-users"></em></span><span class="nk-menu-text">User Manage</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/user-list-regular.html" class="nk-menu-link"><span class="nk-menu-text">User List - Regular</span></a></li><li class="nk-menu-item"><a href="html/user-list-compact.html" class="nk-menu-link"><span class="nk-menu-text">User List - Compact</span></a></li><li class="nk-menu-item"><a href="html/user-details-regular.html" class="nk-menu-link"><span class="nk-menu-text">User Details - Regular</span></a></li><li class="nk-menu-item"><a href="html/user-profile-regular.html" class="nk-menu-link"><span class="nk-menu-text">User Profile - Regular</span></a></li><li class="nk-menu-item"><a href="html/user-card.html" class="nk-menu-link"><span class="nk-menu-text">User Contact - Card</span></a></li></ul></li><li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-user-list"></em></span><span class="nk-menu-text">Customers</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/customer-list.html" class="nk-menu-link"><span class="nk-menu-text">Customer List</span></a></li><li class="nk-menu-item"><a href="html/customer-details.html" class="nk-menu-link"><span class="nk-menu-text">Customer Details</span></a></li></ul></li><li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-file-docs"></em></span><span class="nk-menu-text">AML / KYCs</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/kyc-list-regular.html" class="nk-menu-link"><span class="nk-menu-text">KYC List - Regular</span></a></li><li class="nk-menu-item"><a href="html/kyc-details-regular.html" class="nk-menu-link"><span class="nk-menu-text">KYC Details - Regular</span></a></li></ul></li><li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-tranx"></em></span><span class="nk-menu-text">Transactions</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/transaction-basic.html" class="nk-menu-link"><span class="nk-menu-text">Tranx List - Basic</span></a></li><li class="nk-menu-item"><a href="html/transaction-crypto.html" class="nk-menu-link"><span class="nk-menu-text">Tranx List - Crypto</span></a></li></ul></li><li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-grid-alt"></em></span><span class="nk-menu-text">Applications</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/apps-messages.html" class="nk-menu-link"><span class="nk-menu-text">Messages</span></a></li><li class="nk-menu-item"><a href="html/apps-inbox.html" class="nk-menu-link"><span class="nk-menu-text">Inbox / Mail</span></a></li><li class="nk-menu-item"><a href="html/apps-file-manager.html" class="nk-menu-link"><span class="nk-menu-text">File Manager</span></a></li><li class="nk-menu-item"><a href="html/apps-chats.html" class="nk-menu-link"><span class="nk-menu-text">Chats / Messenger</span></a></li><li class="nk-menu-item"><a href="html/apps-calendar.html" class="nk-menu-link"><span class="nk-menu-text">Calendar</span></a></li><li class="nk-menu-item"><a href="html/apps-kanban.html" class="nk-menu-link"><span class="nk-menu-text">Kanban Board</span></a></li></ul></li><li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-file-docs"></em></span><span class="nk-menu-text">Invoice</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/invoice-list.html" class="nk-menu-link"><span class="nk-menu-text">Invoice List</span></a></li><li class="nk-menu-item"><a href="html/invoice-details.html" class="nk-menu-link"><span class="nk-menu-text">Invoice Details</span></a></li></ul></li><li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-card-view"></em></span><span class="nk-menu-text">Products</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/product-list.html" class="nk-menu-link"><span class="nk-menu-text">Product List</span></a></li><li class="nk-menu-item"><a href="html/product-card.html" class="nk-menu-link"><span class="nk-menu-text">Product Card</span></a></li><li class="nk-menu-item"><a href="html/product-details.html" class="nk-menu-link"><span class="nk-menu-text">Product Details</span></a></li></ul></li><li class="nk-menu-item"><a href="html/pricing-table.html" class="nk-menu-link"><span class="nk-menu-icon"><em class="icon ni ni-view-col"></em></span><span class="nk-menu-text">Pricing Table</span></a></li><li class="nk-menu-item"><a href="html/gallery.html" class="nk-menu-link"><span class="nk-menu-icon"><em class="icon ni ni-img"></em></span><span class="nk-menu-text">Image Gallery</span></a></li><li class="nk-menu-heading"><h6 class="overline-title text-primary-alt">Misc Pages</h6></li><li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-signin"></em></span><span class="nk-menu-text">Auth Pages</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/pages/auths/auth-login.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Login / Signin</span></a></li><li class="nk-menu-item"><a href="html/pages/auths/auth-register.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Register / Signup</span></a></li><li class="nk-menu-item"><a href="html/pages/auths/auth-reset.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Forgot Password</span></a></li><li class="nk-menu-item"><a href="html/pages/auths/auth-success.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Success / Confirm</span></a></li><li class="nk-menu-item"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-text">Classic Version - v2</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/pages/auths/auth-login-v2.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Login / Signin</span></a></li><li class="nk-menu-item"><a href="html/pages/auths/auth-register-v2.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Register / Signup</span></a></li><li class="nk-menu-item"><a href="html/pages/auths/auth-reset-v2.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Forgot Password</span></a></li><li class="nk-menu-item"><a href="html/pages/auths/auth-success-v2.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Success / Confirm</span></a></li></ul></li><li class="nk-menu-item"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-text">No Slider Version - v3</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/pages/auths/auth-login-v3.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Login / Signin</span></a></li><li class="nk-menu-item"><a href="html/pages/auths/auth-register-v3.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Register / Signup</span></a></li><li class="nk-menu-item"><a href="html/pages/auths/auth-reset-v3.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Forgot Password</span></a></li><li class="nk-menu-item"><a href="html/pages/auths/auth-success-v3.html" class="nk-menu-link" target="_blank"><span class="nk-menu-text">Success / Confirm</span></a></li></ul></li></ul></li><li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-files"></em></span><span class="nk-menu-text">Error Pages</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/pages/errors/404-classic.html" target="_blank" class="nk-menu-link"><span class="nk-menu-text">404 Classic</span></a></li><li class="nk-menu-item"><a href="html/pages/errors/504-classic.html" target="_blank" class="nk-menu-link"><span class="nk-menu-text">504 Classic</span></a></li><li class="nk-menu-item"><a href="html/pages/errors/404-s1.html" target="_blank" class="nk-menu-link"><span class="nk-menu-text">404 Modern</span></a></li><li class="nk-menu-item"><a href="html/pages/errors/504-s1.html" target="_blank" class="nk-menu-link"><span class="nk-menu-text">504 Modern</span></a></li></ul></li><li class="nk-menu-item has-sub active current-page"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-files"></em></span><span class="nk-menu-text">Other Pages</span></a><ul class="nk-menu-sub" style="${ssrRenderStyle({ "display": "block" })}"><li class="nk-menu-item active current-page"><a href="html/_blank.html" class="nk-menu-link"><span class="nk-menu-text">Blank / Startup</span></a></li><li class="nk-menu-item"><a href="html/pages/faqs.html" class="nk-menu-link"><span class="nk-menu-text">Faqs / Help</span></a></li><li class="nk-menu-item"><a href="html/pages/terms-policy.html" class="nk-menu-link"><span class="nk-menu-text">Terms / Policy</span></a></li><li class="nk-menu-item"><a href="html/pages/regular-v1.html" class="nk-menu-link"><span class="nk-menu-text">Regular Page - v1</span></a></li><li class="nk-menu-item"><a href="html/pages/regular-v2.html" class="nk-menu-link"><span class="nk-menu-text">Regular Page - v2</span></a></li></ul></li><li class="nk-menu-heading"><h6 class="overline-title text-primary-alt">Components</h6></li><li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-layers"></em></span><span class="nk-menu-text">Ui Elements</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/components/elements/alerts.html" class="nk-menu-link"><span class="nk-menu-text">Alerts</span></a></li><li class="nk-menu-item"><a href="html/components/elements/accordions.html" class="nk-menu-link"><span class="nk-menu-text">Accordions</span></a></li><li class="nk-menu-item"><a href="html/components/elements/avatar.html" class="nk-menu-link"><span class="nk-menu-text">Avatar</span></a></li><li class="nk-menu-item"><a href="html/components/elements/badges.html" class="nk-menu-link"><span class="nk-menu-text">Badges</span></a></li><li class="nk-menu-item"><a href="html/components/elements/buttons.html" class="nk-menu-link"><span class="nk-menu-text">Buttons</span></a></li><li class="nk-menu-item"><a href="html/components/elements/buttons-group.html" class="nk-menu-link"><span class="nk-menu-text">Button Group</span></a></li><li class="nk-menu-item"><a href="html/components/elements/breadcrumb.html" class="nk-menu-link"><span class="nk-menu-text">Breadcrumb</span></a></li><li class="nk-menu-item"><a href="html/components/elements/cards.html" class="nk-menu-link"><span class="nk-menu-text">Cards</span></a></li><li class="nk-menu-item"><a href="html/components/elements/carousel.html" class="nk-menu-link"><span class="nk-menu-text">Carousel</span></a></li><li class="nk-menu-item"><a href="html/components/elements/list-dropdown.html" class="nk-menu-link"><span class="nk-menu-text">List Dropdown</span></a></li><li class="nk-menu-item"><a href="html/components/elements/modals.html" class="nk-menu-link"><span class="nk-menu-text">Modals</span></a></li><li class="nk-menu-item"><a href="html/components/elements/pagination.html" class="nk-menu-link"><span class="nk-menu-text">Pagination</span></a></li><li class="nk-menu-item"><a href="html/components/elements/popover.html" class="nk-menu-link"><span class="nk-menu-text">Popovers</span></a></li><li class="nk-menu-item"><a href="html/components/elements/progress.html" class="nk-menu-link"><span class="nk-menu-text">Progress</span></a></li><li class="nk-menu-item"><a href="html/components/elements/preloader.html" class="nk-menu-link"><span class="nk-menu-text">Preloader</span> <span class="nk-menu-badge">New</span></a></li><li class="nk-menu-item"><a href="html/components/elements/placeholders.html" class="nk-menu-link"><span class="nk-menu-text">Placeholders</span> <span class="nk-menu-badge">New</span></a></li><li class="nk-menu-item"><a href="html/components/elements/spinner.html" class="nk-menu-link"><span class="nk-menu-text">Spinner</span></a></li><li class="nk-menu-item"><a href="html/components/elements/tabs.html" class="nk-menu-link"><span class="nk-menu-text">Tabs</span></a></li><li class="nk-menu-item"><a href="html/components/elements/toast.html" class="nk-menu-link"><span class="nk-menu-text">Toasts</span></a></li><li class="nk-menu-item"><a href="html/components/elements/tooltip.html" class="nk-menu-link"><span class="nk-menu-text">Tooltip</span></a></li><li class="nk-menu-item"><a href="html/components/elements/typography.html" class="nk-menu-link"><span class="nk-menu-text">Typography</span></a></li><li class="nk-menu-item"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-text">Utilities</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/components/elements/util-border.html" class="nk-menu-link"><span class="nk-menu-text">Border</span></a></li><li class="nk-menu-item"><a href="html/components/elements/util-colors.html" class="nk-menu-link"><span class="nk-menu-text">Colors</span></a></li><li class="nk-menu-item"><a href="html/components/elements/util-display.html" class="nk-menu-link"><span class="nk-menu-text">Display</span></a></li><li class="nk-menu-item"><a href="html/components/elements/util-embeded.html" class="nk-menu-link"><span class="nk-menu-text">Embeded</span></a></li><li class="nk-menu-item"><a href="html/components/elements/util-flex.html" class="nk-menu-link"><span class="nk-menu-text">Flex</span></a></li><li class="nk-menu-item"><a href="html/components/elements/util-text.html" class="nk-menu-link"><span class="nk-menu-text">Text</span></a></li><li class="nk-menu-item"><a href="html/components/elements/util-sizing.html" class="nk-menu-link"><span class="nk-menu-text">Sizing</span></a></li><li class="nk-menu-item"><a href="html/components/elements/util-spacing.html" class="nk-menu-link"><span class="nk-menu-text">Spacing</span></a></li><li class="nk-menu-item"><a href="html/components/elements/util-others.html" class="nk-menu-link"><span class="nk-menu-text">Others</span></a></li></ul></li></ul></li><li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-dot-box"></em></span><span class="nk-menu-text">Crafted Icons</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/components/misc/svg-icons.html" class="nk-menu-link"><span class="nk-menu-text">SVG Icon - Exclusive</span></a></li><li class="nk-menu-item"><a href="html/components/misc/nioicon.html" class="nk-menu-link"><span class="nk-menu-text">Nioicon - HandCrafted</span></a></li></ul></li><li class="nk-menu-item"><a href="html/components/misc/icons.html" class="nk-menu-link"><span class="nk-menu-icon"><em class="icon ni ni-menu-circled"></em></span><span class="nk-menu-text">Icon Libraries</span></a></li><li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-table-view"></em></span><span class="nk-menu-text">Tables</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/components/tables/table-basic.html" class="nk-menu-link"><span class="nk-menu-text">Basic Tables</span></a></li><li class="nk-menu-item"><a href="html/components/tables/table-special.html" class="nk-menu-link"><span class="nk-menu-text">Special Tables</span></a></li><li class="nk-menu-item"><a href="html/components/tables/table-datatable.html" class="nk-menu-link"><span class="nk-menu-text">DataTables</span></a></li></ul></li><li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-card-view"></em></span><span class="nk-menu-text">Forms</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/components/forms/form-elements.html" class="nk-menu-link"><span class="nk-menu-text">Form Elements</span></a></li><li class="nk-menu-item"><a href="html/components/forms/checkbox-radio.html" class="nk-menu-link"><span class="nk-menu-text">Checkbox Radio</span></a></li><li class="nk-menu-item"><a href="html/components/forms/advanced-controls.html" class="nk-menu-link"><span class="nk-menu-text">Advanced Controls</span></a></li><li class="nk-menu-item"><a href="html/components/forms/input-group.html" class="nk-menu-link"><span class="nk-menu-text">Input Group</span></a></li><li class="nk-menu-item"><a href="html/components/forms/form-upload.html" class="nk-menu-link"><span class="nk-menu-text">Form Upload</span></a></li><li class="nk-menu-item"><a href="html/components/forms/datetime-picker.html" class="nk-menu-link"><span class="nk-menu-text">Date &amp; Time Picker</span></a></li><li class="nk-menu-item"><a href="html/components/forms/number-spinner.html" class="nk-menu-link"><span class="nk-menu-text">Number Spinner</span></a></li><li class="nk-menu-item"><a href="html/components/forms/nouislider.html" class="nk-menu-link"><span class="nk-menu-text">noUiSlider</span></a></li><li class="nk-menu-item"><a href="html/components/forms/form-layouts.html" class="nk-menu-link"><span class="nk-menu-text">Form Layouts</span></a></li><li class="nk-menu-item"><a href="html/components/forms/form-validation.html" class="nk-menu-link"><span class="nk-menu-text">Form Validation</span></a></li><li class="nk-menu-item"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-text">Wizard</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/components/forms/form-wizard.html" class="nk-menu-link"><span class="nk-menu-text">Basic Demo</span></a></li><li class="nk-menu-item"><a href="html/components/forms/wizard/create-project.html" class="nk-menu-link"><span class="nk-menu-text">Create Project</span></a></li><li class="nk-menu-item"><a href="html/components/forms/wizard/create-profile.html" class="nk-menu-link"><span class="nk-menu-text">Create Profile</span></a></li><li class="nk-menu-item"><a href="html/components/forms/wizard/two-factor-auth.html" class="nk-menu-link"><span class="nk-menu-text">Two Factor Auth</span></a></li><li class="nk-menu-item"><a target="_blank" href="html/components/forms/wizard/survey-v1.html" class="nk-menu-link"><span class="nk-menu-text">Survey</span></a></li><li class="nk-menu-item"><a target="_blank" href="html/components/forms/wizard/survey-v2.html" class="nk-menu-link"><span class="nk-menu-text">Survey v2</span></a></li></ul></li><li class="nk-menu-item"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-text">Rich Editor</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/components/forms/form-summernote.html" class="nk-menu-link"><span class="nk-menu-text">Summernote</span></a></li><li class="nk-menu-item"><a href="html/components/forms/form-quill.html" class="nk-menu-link"><span class="nk-menu-text">Quill</span></a></li><li class="nk-menu-item"><a href="html/components/forms/form-tinymce.html" class="nk-menu-link"><span class="nk-menu-text">Tinymce</span></a></li></ul></li></ul></li><li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-pie"></em></span><span class="nk-menu-text">Charts</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/components/charts/chartjs.html" class="nk-menu-link"><span class="nk-menu-text">Chart JS</span></a></li><li class="nk-menu-item"><a href="html/components/charts/knob.html" class="nk-menu-link"><span class="nk-menu-text">Knob JS</span></a></li></ul></li><li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-puzzle"></em></span><span class="nk-menu-text">Widgets</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/components/widgets/cards.html" class="nk-menu-link"><span class="nk-menu-text">Card Widgets</span></a></li><li class="nk-menu-item"><a href="html/components/widgets/charts.html" class="nk-menu-link"><span class="nk-menu-text">Chart Widgets</span></a></li><li class="nk-menu-item"><a href="html/components/widgets/ratings.html" class="nk-menu-link"><span class="nk-menu-text">Ratings Widgets</span></a></li></ul></li><li class="nk-menu-item has-sub"><a href="#" class="nk-menu-link nk-menu-toggle"><span class="nk-menu-icon"><em class="icon ni ni-block-over"></em></span><span class="nk-menu-text">Miscellaneous</span></a><ul class="nk-menu-sub"><li class="nk-menu-item"><a href="html/components/misc/slick-sliders.html" class="nk-menu-link"><span class="nk-menu-text">Slick Slider</span></a></li><li class="nk-menu-item"><a href="html/components/misc/toastr.html" class="nk-menu-link"><span class="nk-menu-text">Toastr</span></a></li><li class="nk-menu-item"><a href="html/components/misc/sweet-alert.html" class="nk-menu-link"><span class="nk-menu-text">Sweet Alert</span></a></li><li class="nk-menu-item"><a href="html/components/misc/js-tree.html" class="nk-menu-link"><span class="nk-menu-text">jsTree</span></a></li><li class="nk-menu-item"><a href="html/components/misc/dual-listbox.html" class="nk-menu-link"><span class="nk-menu-text">Dual Listbox</span></a></li><li class="nk-menu-item"><a href="html/components/misc/dragula.html" class="nk-menu-link"><span class="nk-menu-text">Dragula</span></a></li><li class="nk-menu-item"><a href="html/components/misc/map.html" class="nk-menu-link"><span class="nk-menu-text">Google Map</span></a></li></ul></li><li class="nk-menu-item"><a href="html/email-templates.html" class="nk-menu-link"><span class="nk-menu-icon"><em class="icon ni ni-text-rich"></em></span><span class="nk-menu-text">Email Template</span></a></li></ul></div></div></div></div><div class="simplebar-placeholder" style="${ssrRenderStyle({ "width": "289px", "height": "1816px" })}"></div></div><div class="simplebar-track simplebar-horizontal" style="${ssrRenderStyle({ "visibility": "hidden" })}"><div class="simplebar-scrollbar" style="${ssrRenderStyle({ "width": "0px", "display": "none" })}"></div></div><div class="simplebar-track simplebar-vertical" style="${ssrRenderStyle({ "visibility": "visible" })}"><div class="simplebar-scrollbar" style="${ssrRenderStyle({ "height": "199px", "transform": "translate3d(0px, 377px, 0px)", "display": "block" })}"></div></div></div></div></div></div><div class="nk-wrap"><div class="nk-header nk-header-fixed bg-white"><div class="container-fluid"><div class="nk-header-wrap"><div class="nk-menu-trigger d-xl-none ms-n1"><a href="#" class="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a></div><div class="nk-header-brand d-xl-none"><a href="html/index.html" class="logo-link"><img class="logo-light logo-img"${ssrRenderAttr("src", logo)} srcset="" alt="logo"><img class="logo-dark logo-img"${ssrRenderAttr("src", logo)} srcset="" alt="logo-dark"></a></div><div class="nk-header-news d-none d-xl-block"><div class="nk-news-list">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "nk-news-item",
        href: _ctx.route("carbon.markets")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nk-news-icon"${_scopeId}><em class="icon ni ni-coins"${_scopeId}></em></div><div class="nk-news-text"${_scopeId}><p${_scopeId}>Carbon Markets<span class="ml-3"${_scopeId}> A overview of our is now available on YouTube</span></p><em class="icon ni ni-external"${_scopeId}></em></div>`);
          } else {
            return [
              createVNode("div", { class: "nk-news-icon" }, [
                createVNode("em", { class: "icon ni ni-coins" })
              ]),
              createVNode("div", { class: "nk-news-text" }, [
                createVNode("p", null, [
                  createTextVNode("Carbon Markets"),
                  createVNode("span", { class: "ml-3" }, " A overview of our is now available on YouTube")
                ]),
                createVNode("em", { class: "icon ni ni-external" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="nk-header-tools"><ul class="nk-quick-nav"><li class="d-none d-sm-block me-n1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard"),
        class: "pr-2",
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<em class="icon ni ni-home-fill" style="${ssrRenderStyle({ "font-size": "25px", "color": "#aeb6bf" })}"${_scopeId}></em>`);
          } else {
            return [
              createVNode("em", {
                class: "icon ni ni-home-fill",
                style: { "font-size": "25px", "color": "#aeb6bf" }
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="d-none d-sm-block me-n1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("search"),
        class: "pr-2",
        active: _ctx.route().current("search")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<em class="icon ni ni-search" style="${ssrRenderStyle({ "font-size": "25px", "color": "#aeb6bf" })}"${_scopeId}></em>`);
          } else {
            return [
              createVNode("em", {
                class: "icon ni ni-search",
                style: { "font-size": "25px", "color": "#aeb6bf" }
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="d-none d-sm-block me-n1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("emissions"),
        class: "pr-2",
        active: _ctx.route().current("notification")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<em class="icon ni ni-grid" style="${ssrRenderStyle({ "font-size": "25px", "color": "#aeb6bf" })}"${_scopeId}></em>`);
          } else {
            return [
              createVNode("em", {
                class: "icon ni ni-grid",
                style: { "font-size": "25px", "color": "#aeb6bf" }
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="d-none d-sm-block me-n1 pr-3">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("notification"),
        class: "pr-2",
        active: _ctx.route().current("notification")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<em class="icon ni ni-bell-fill" style="${ssrRenderStyle({ "font-size": "25px", "color": "#aeb6bf" })}"${_scopeId}></em>`);
          } else {
            return [
              createVNode("em", {
                class: "icon ni ni-bell-fill",
                style: { "font-size": "25px", "color": "#aeb6bf" }
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="dropdown user-dropdown"><a href="#" class="dropdown-toggle" data-bs-toggle="dropdown" style="${ssrRenderStyle({ "background": "white", "border-radius": "20px", "padding": "4px" })}"><div class="user-toggle"><div class="user-avatar sm bg-dark"><em class="icon ni ni-user-alt-fill"></em></div><div class="user-info d-none d-md-block"><div class="user-status" style="${ssrRenderStyle({ "text-transform": "capitalize", "color": "green" })}">${ssrInterpolate(user.value.role)}</div><div class="user-name dropdown-indicator" style="${ssrRenderStyle({ "font-size": "15px" })}">${ssrInterpolate(user.value.firstname)}</div></div></div></a><div class="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1 border-0"><div class="dropdown-inner"><ul class="link-list"><li><a href="html/user-profile-regular.html"><em class="icon ni ni-user-alt"></em><span>View Profile</span></a></li><li><a href="html/user-profile-setting.html"><em class="icon ni ni-setting-alt"></em><span>Account Setting</span></a></li><li><a href="html/user-profile-activity.html"><em class="icon ni ni-activity-alt"></em><span>Login Activity</span></a></li><li><a class="dark-switch" href="#"><em class="icon ni ni-moon"></em><span>Dark Mode</span></a></li></ul></div><div class="dropdown-inner"><ul class="link-list"><li>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</li></ul></div></div></li></ul></div></div></div></div><div class="nk-content pt-2"><div class="container-fluid pt-0"><div class="nk-content-inner pt-0"><div class="nk-content-body pt-2">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div></div><div class="nk-footer"><div class="container-fluid"><div class="nk-footer-wrap"><div class="nk-footer-copyright"> © 2024 DashLite. Template by <a href="https://softnio.com" target="_blank">Softnio</a></div><div class="nk-footer-links"><ul class="nav nav-sm"><li class="nav-item dropup"><a href="#" class="dropdown-toggle dropdown-indicator has-indicator nav-link text-base" data-bs-toggle="dropdown" data-offset="0,10"><span>English</span></a><div class="dropdown-menu dropdown-menu-sm dropdown-menu-end"><ul class="language-list"><li><a href="#" class="language-item"><span class="language-name">English</span></a></li><li><a href="#" class="language-item"><span class="language-name">Español</span></a></li><li><a href="#" class="language-item"><span class="language-name">Français</span></a></li><li><a href="#" class="language-item"><span class="language-name">Türkçe</span></a></li></ul></div></li><li class="nav-item"><a data-bs-toggle="modal" href="#region" class="nav-link"><em class="icon ni ni-globe"></em><span class="ms-1">Select Region</span></a></li></ul></div></div></div></div></div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$3, { user: user.value }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
