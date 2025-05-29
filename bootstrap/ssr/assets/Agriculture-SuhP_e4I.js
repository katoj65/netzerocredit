import { computed, withCtx, unref, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-C_aPQEHY.js";
import { Link } from "@inertiajs/vue3";
import "./ErrorMessageInline-DdL__BKJ.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@element-plus/icons-vue";
const _sfc_main = {
  __name: "Agriculture",
  __ssrInlineRender: true,
  props: {
    response: Object
  },
  setup(__props) {
    const props = __props;
    const farm = computed(() => props.response.farm.data);
    const profile = computed(() => props.response.sector.data);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nk-block-head nk-block-head-sm"${_scopeId}><div class="nk-block-between"${_scopeId}><div class="nk-block-head-content"${_scopeId}><h5 class="fw-bold text-capitalize"${_scopeId}>${ssrInterpolate(profile.value.name)}</h5><div class="nk-block-des text-soft"${_scopeId}><p${_scopeId}>Welcome to DashLite Dashboard Template.</p></div></div><div class="nk-block-head-content"${_scopeId}></div></div></div><div class="card p-0 m-0 border-0"${_scopeId}><div class="card-inner p-0"${_scopeId}><div class="tab-content mt-0"${_scopeId}><div class="tab-pane fade active show" id="payment-billing-tab-pane" role="tabpanel"${_scopeId}><div class="d-flex flex-wrap align-items-center justify-content-between mb-3"${_scopeId}><h5 class="mb-0"${_scopeId}> Sector Emitters </h5><ul class="d-flex gx-4"${_scopeId}><li${_scopeId}><a href="#cancelSubscriptionModal" class="btn btn-secondary"${_scopeId}>View more</a></li><li${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("verifier.create_farmer"),
              class: "btn btn-outline-secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`New Farm`);
                } else {
                  return [
                    createTextVNode("New Farm")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ul></div><div class="row g-gs"${_scopeId}><!--[-->`);
            ssrRenderList(profile.value.activities, (a, key) => {
              _push2(`<div class="col-xl-3 col-sm-6"${_scopeId}><div class="card"${_scopeId}><div class="card-inner"${_scopeId}><div class="text-base mb-1 text-capitalize"${_scopeId}>${ssrInterpolate(a.activity)}</div><h5${_scopeId}>25Mt CO2e</h5></div></div></div>`);
            });
            _push2(`<!--]--></div><div class="pt-1 pb-1 mb-3 mt-4"${_scopeId}><h5${_scopeId}>Registered Farms</h5></div><div class="row"${_scopeId}><div class="col-12 col-md-8"${_scopeId}><div class="card"${_scopeId}><table class="table table-middle mb-0"${_scopeId}><thead class="table-light"${_scopeId}><tr${_scopeId}><th class="tb-col"${_scopeId}><div class="fs-13px text-base"${_scopeId}>Subscription</div></th><th class="tb-col tb-col-md"${_scopeId}><div class="fs-13px text-base"${_scopeId}>Payment Date</div></th><th class="tb-col tb-col-sm"${_scopeId}><div class="fs-13px text-base"${_scopeId}>Total</div></th><th class="tb-col tb-col-sm"${_scopeId}><div class="fs-13px text-base"${_scopeId}>Status</div></th><th class="tb-col"${_scopeId}></th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(farm.value, (r, key) => {
              _push2(`<tr${_scopeId}><td class="tb-col"${_scopeId}><div class="caption-text"${_scopeId}>Starter - 12 Months <div class="d-sm-none dot bg-success"${_scopeId}></div></div></td><td class="tb-col tb-col-md"${_scopeId}><div class="fs-6 text-base d-inline-flex flex-wrap gap gx-2"${_scopeId}><span${_scopeId}>Feb 15,2023 </span> <span${_scopeId}>02:31 PM</span></div></td><td class="tb-col tb-col-sm"${_scopeId}><div class="fs-6 text-base"${_scopeId}>$23.00</div></td><td class="tb-col tb-col-sm"${_scopeId}><div class="badge bg-success-dim text-success rounded-pill"${_scopeId}>Paid</div></td><td class="tb-col tb-col-end"${_scopeId}><a href="#" class="link"${_scopeId}>Get Invoice</a></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div></div><div class="col-12 col-md-4"${_scopeId}><div class="card h-100"${_scopeId}><div class="card-inner h-100 stretch flex-column"${_scopeId}><div class="card-title-group"${_scopeId}><div class="card-title card-title-sm"${_scopeId}><h6 class="title"${_scopeId}>By Device</h6></div><div class="card-tools"${_scopeId}><div class="drodown"${_scopeId}><a href="#" class="dropdown-toggle dropdown-indicator btn btn-sm btn-outline-light btn-white" data-bs-toggle="dropdown"${_scopeId}>30 Days</a><div class="dropdown-menu dropdown-menu-end dropdown-menu-xs"${_scopeId}><ul class="link-list-opt no-bdr"${_scopeId}><li${_scopeId}><a href="#"${_scopeId}><span${_scopeId}>7 Days</span></a></li><li${_scopeId}><a href="#"${_scopeId}><span${_scopeId}>15 Days</span></a></li><li${_scopeId}><a href="#"${_scopeId}><span${_scopeId}>30 Days</span></a></li></ul></div></div></div></div><div class="device-status my-auto"${_scopeId}><div class="device-status-ck"${_scopeId}><canvas class="analytics-doughnut" id="deviceStatusData" width="618" height="320" style="${ssrRenderStyle({ "display": "block", "box-sizing": "border-box", "height": "160px", "width": "309px" })}"${_scopeId}></canvas></div><div class="device-status-group"${_scopeId}><div class="device-status-data"${_scopeId}><em data-color="#798bff" class="icon ni ni-monitor" style="${ssrRenderStyle({ "color": "rgb(121, 139, 255)" })}"${_scopeId}></em><div class="title"${_scopeId}>Desktop</div><div class="amount"${_scopeId}>84.5%</div><div class="change up text-danger"${_scopeId}><em class="icon ni ni-arrow-long-up"${_scopeId}></em>4.5%</div></div><div class="device-status-data"${_scopeId}><em data-color="#baaeff" class="icon ni ni-mobile" style="${ssrRenderStyle({ "color": "rgb(186, 174, 255)" })}"${_scopeId}></em><div class="title"${_scopeId}>Mobile</div><div class="amount"${_scopeId}>14.2%</div><div class="change up text-danger"${_scopeId}><em class="icon ni ni-arrow-long-up"${_scopeId}></em>133.2%</div></div><div class="device-status-data"${_scopeId}><em data-color="#7de1f8" class="icon ni ni-tablet" style="${ssrRenderStyle({ "color": "rgb(125, 225, 248)" })}"${_scopeId}></em><div class="title"${_scopeId}>Tablet</div><div class="amount"${_scopeId}>1.3%</div><div class="change up text-danger"${_scopeId}><em class="icon ni ni-arrow-long-up"${_scopeId}></em>25.3%</div></div></div></div></div></div></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "nk-block-head nk-block-head-sm" }, [
                createVNode("div", { class: "nk-block-between" }, [
                  createVNode("div", { class: "nk-block-head-content" }, [
                    createVNode("h5", { class: "fw-bold text-capitalize" }, toDisplayString(profile.value.name), 1),
                    createVNode("div", { class: "nk-block-des text-soft" }, [
                      createVNode("p", null, "Welcome to DashLite Dashboard Template.")
                    ])
                  ]),
                  createVNode("div", { class: "nk-block-head-content" })
                ])
              ]),
              createVNode("div", { class: "card p-0 m-0 border-0" }, [
                createVNode("div", { class: "card-inner p-0" }, [
                  createVNode("div", { class: "tab-content mt-0" }, [
                    createVNode("div", {
                      class: "tab-pane fade active show",
                      id: "payment-billing-tab-pane",
                      role: "tabpanel"
                    }, [
                      createVNode("div", { class: "d-flex flex-wrap align-items-center justify-content-between mb-3" }, [
                        createVNode("h5", { class: "mb-0" }, " Sector Emitters "),
                        createVNode("ul", { class: "d-flex gx-4" }, [
                          createVNode("li", null, [
                            createVNode("a", {
                              href: "#cancelSubscriptionModal",
                              class: "btn btn-secondary"
                            }, "View more")
                          ]),
                          createVNode("li", null, [
                            createVNode(unref(Link), {
                              href: _ctx.route("verifier.create_farmer"),
                              class: "btn btn-outline-secondary"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("New Farm")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "row g-gs" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(profile.value.activities, (a, key) => {
                          return openBlock(), createBlock("div", {
                            class: "col-xl-3 col-sm-6",
                            key
                          }, [
                            createVNode("div", { class: "card" }, [
                              createVNode("div", { class: "card-inner" }, [
                                createVNode("div", { class: "text-base mb-1 text-capitalize" }, toDisplayString(a.activity), 1),
                                createVNode("h5", null, "25Mt CO2e")
                              ])
                            ])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "pt-1 pb-1 mb-3 mt-4" }, [
                        createVNode("h5", null, "Registered Farms")
                      ]),
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-12 col-md-8" }, [
                          createVNode("div", { class: "card" }, [
                            createVNode("table", { class: "table table-middle mb-0" }, [
                              createVNode("thead", { class: "table-light" }, [
                                createVNode("tr", null, [
                                  createVNode("th", { class: "tb-col" }, [
                                    createVNode("div", { class: "fs-13px text-base" }, "Subscription")
                                  ]),
                                  createVNode("th", { class: "tb-col tb-col-md" }, [
                                    createVNode("div", { class: "fs-13px text-base" }, "Payment Date")
                                  ]),
                                  createVNode("th", { class: "tb-col tb-col-sm" }, [
                                    createVNode("div", { class: "fs-13px text-base" }, "Total")
                                  ]),
                                  createVNode("th", { class: "tb-col tb-col-sm" }, [
                                    createVNode("div", { class: "fs-13px text-base" }, "Status")
                                  ]),
                                  createVNode("th", { class: "tb-col" })
                                ])
                              ]),
                              createVNode("tbody", null, [
                                (openBlock(true), createBlock(Fragment, null, renderList(farm.value, (r, key) => {
                                  return openBlock(), createBlock("tr", { key }, [
                                    createVNode("td", { class: "tb-col" }, [
                                      createVNode("div", { class: "caption-text" }, [
                                        createTextVNode("Starter - 12 Months "),
                                        createVNode("div", { class: "d-sm-none dot bg-success" })
                                      ])
                                    ]),
                                    createVNode("td", { class: "tb-col tb-col-md" }, [
                                      createVNode("div", { class: "fs-6 text-base d-inline-flex flex-wrap gap gx-2" }, [
                                        createVNode("span", null, "Feb 15,2023 "),
                                        createTextVNode(),
                                        createVNode("span", null, "02:31 PM")
                                      ])
                                    ]),
                                    createVNode("td", { class: "tb-col tb-col-sm" }, [
                                      createVNode("div", { class: "fs-6 text-base" }, "$23.00")
                                    ]),
                                    createVNode("td", { class: "tb-col tb-col-sm" }, [
                                      createVNode("div", { class: "badge bg-success-dim text-success rounded-pill" }, "Paid")
                                    ]),
                                    createVNode("td", { class: "tb-col tb-col-end" }, [
                                      createVNode("a", {
                                        href: "#",
                                        class: "link"
                                      }, "Get Invoice")
                                    ])
                                  ]);
                                }), 128))
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-12 col-md-4" }, [
                          createVNode("div", { class: "card h-100" }, [
                            createVNode("div", { class: "card-inner h-100 stretch flex-column" }, [
                              createVNode("div", { class: "card-title-group" }, [
                                createVNode("div", { class: "card-title card-title-sm" }, [
                                  createVNode("h6", { class: "title" }, "By Device")
                                ]),
                                createVNode("div", { class: "card-tools" }, [
                                  createVNode("div", { class: "drodown" }, [
                                    createVNode("a", {
                                      href: "#",
                                      class: "dropdown-toggle dropdown-indicator btn btn-sm btn-outline-light btn-white",
                                      "data-bs-toggle": "dropdown"
                                    }, "30 Days"),
                                    createVNode("div", { class: "dropdown-menu dropdown-menu-end dropdown-menu-xs" }, [
                                      createVNode("ul", { class: "link-list-opt no-bdr" }, [
                                        createVNode("li", null, [
                                          createVNode("a", { href: "#" }, [
                                            createVNode("span", null, "7 Days")
                                          ])
                                        ]),
                                        createVNode("li", null, [
                                          createVNode("a", { href: "#" }, [
                                            createVNode("span", null, "15 Days")
                                          ])
                                        ]),
                                        createVNode("li", null, [
                                          createVNode("a", { href: "#" }, [
                                            createVNode("span", null, "30 Days")
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "device-status my-auto" }, [
                                createVNode("div", { class: "device-status-ck" }, [
                                  createVNode("canvas", {
                                    class: "analytics-doughnut",
                                    id: "deviceStatusData",
                                    width: "618",
                                    height: "320",
                                    style: { "display": "block", "box-sizing": "border-box", "height": "160px", "width": "309px" }
                                  })
                                ]),
                                createVNode("div", { class: "device-status-group" }, [
                                  createVNode("div", { class: "device-status-data" }, [
                                    createVNode("em", {
                                      "data-color": "#798bff",
                                      class: "icon ni ni-monitor",
                                      style: { "color": "rgb(121, 139, 255)" }
                                    }),
                                    createVNode("div", { class: "title" }, "Desktop"),
                                    createVNode("div", { class: "amount" }, "84.5%"),
                                    createVNode("div", { class: "change up text-danger" }, [
                                      createVNode("em", { class: "icon ni ni-arrow-long-up" }),
                                      createTextVNode("4.5%")
                                    ])
                                  ]),
                                  createVNode("div", { class: "device-status-data" }, [
                                    createVNode("em", {
                                      "data-color": "#baaeff",
                                      class: "icon ni ni-mobile",
                                      style: { "color": "rgb(186, 174, 255)" }
                                    }),
                                    createVNode("div", { class: "title" }, "Mobile"),
                                    createVNode("div", { class: "amount" }, "14.2%"),
                                    createVNode("div", { class: "change up text-danger" }, [
                                      createVNode("em", { class: "icon ni ni-arrow-long-up" }),
                                      createTextVNode("133.2%")
                                    ])
                                  ]),
                                  createVNode("div", { class: "device-status-data" }, [
                                    createVNode("em", {
                                      "data-color": "#7de1f8",
                                      class: "icon ni ni-tablet",
                                      style: { "color": "rgb(125, 225, 248)" }
                                    }),
                                    createVNode("div", { class: "title" }, "Tablet"),
                                    createVNode("div", { class: "amount" }, "1.3%"),
                                    createVNode("div", { class: "change up text-danger" }, [
                                      createVNode("em", { class: "icon ni ni-arrow-long-up" }),
                                      createTextVNode("25.3%")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Emissions/Agriculture.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
