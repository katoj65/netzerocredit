import { resolveComponent, mergeProps, useSSRContext, computed, withCtx, unref, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./AppLayout-C_aPQEHY.js";
import { Link } from "@inertiajs/vue3";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar as Bar$1 } from "vue-chartjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ErrorMessageInline-DdL__BKJ.js";
import "@element-plus/icons-vue";
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const _sfc_main$1 = {
  name: "App",
  components: {
    Bar: Bar$1
  },
  data() {
    return {
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40, 70],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 99, 132, 0.4)"
          }
        ]
      },
      options: {
        responsive: true
      }
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Bar = resolveComponent("Bar", true);
  _push(ssrRenderComponent(_component_Bar, mergeProps({
    data: $data.data,
    options: $data.options
  }, _attrs), null, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Charts/Bar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Bar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
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
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
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
            _push2(`<!--]--></tbody></table></div></div><div class="col-12 col-md-4"${_scopeId}>`);
            _push2(ssrRenderComponent(Bar, null, null, _parent2, _scopeId));
            _push2(`</div></div></div></div></div></div>`);
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
                          createVNode(Bar)
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
