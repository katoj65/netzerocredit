import { withCtx, unref, createVNode, createBlock, openBlock, toDisplayString, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-C_aPQEHY.js";
import { Link } from "@inertiajs/vue3";
import "./ErrorMessageInline-DdL__BKJ.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@element-plus/icons-vue";
const _sfc_main = {
  __name: "Emissions",
  __ssrInlineRender: true,
  props: {
    response: Object
  },
  setup(__props) {
    const props = __props;
    const emissions = props.response.emissions.data;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nk-block"${_scopeId}><div class="row g-gs"${_scopeId}><div class="col-12 col-md-12 pb-1"${_scopeId}><h5${_scopeId}>Emission Sectors</h5></div><!--[-->`);
            ssrRenderList(unref(emissions), (n, key) => {
              _push2(`<div class="col-12 col-md-4"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("emissions." + n.route)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="card featured-card h-100"${_scopeId2}><div class="card-inner"${_scopeId2}><div class="loan-icon w-20"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 118"${_scopeId2}><path d="M8.916,94.745C-.318,79.153-2.164,58.569,2.382,40.578,7.155,21.69,19.045,9.451,35.162,4.32,46.609.676,58.716.331,70.456,1.845,84.683,3.68,99.57,8.694,108.892,21.408c10.03,13.679,12.071,34.71,10.747,52.054-1.173,15.359-7.441,27.489-19.231,34.494-10.689,6.351-22.92,8.733-34.715,10.331-16.181,2.192-34.195-.336-47.6-12.281A47.243,47.243,0,0,1,8.916,94.745Z" transform="translate(0 -1)" fill="#f6faff"${_scopeId2}></path><rect x="18" y="32" width="84" height="50" rx="4" ry="4" fill="#fff"${_scopeId2}></rect><rect x="26" y="44" width="20" height="12" rx="1" ry="1" fill="#e5effe"${_scopeId2}></rect><rect x="50" y="44" width="20" height="12" rx="1" ry="1" fill="#e5effe"${_scopeId2}></rect><rect x="74" y="44" width="20" height="12" rx="1" ry="1" fill="#e5effe"${_scopeId2}></rect><rect x="38" y="60" width="20" height="12" rx="1" ry="1" fill="#e5effe"${_scopeId2}></rect><rect x="62" y="60" width="20" height="12" rx="1" ry="1" fill="#e5effe"${_scopeId2}></rect><path d="M98,32H22a5.006,5.006,0,0,0-5,5V79a5.006,5.006,0,0,0,5,5H52v8H45a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H73a2,2,0,0,0,2-2V94a2,2,0,0,0-2-2H66V84H98a5.006,5.006,0,0,0,5-5V37A5.006,5.006,0,0,0,98,32ZM73,94v4H45V94Zm-9-2H54V84H64Zm37-13a3,3,0,0,1-3,3H22a3,3,0,0,1-3-3V37a3,3,0,0,1,3-3H98a3,3,0,0,1,3,3Z" transform="translate(0 -1)" fill="#798bff"${_scopeId2}></path><path d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z" transform="translate(0 -1)" fill="#6576ff"${_scopeId2}></path><path d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z" transform="translate(0 -1)" fill="none" stroke="#6576ff" stroke-miterlimit="10" stroke-width="2"${_scopeId2}></path><line x1="40" y1="22" x2="57" y2="22" fill="none" stroke="#fffffe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId2}></line><line x1="40" y1="27" x2="57" y2="27" fill="none" stroke="#fffffe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId2}></line><line x1="40" y1="32" x2="50" y2="32" fill="none" stroke="#fffffe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${_scopeId2}></line><line x1="30.5" y1="87.5" x2="30.5" y2="91.5" fill="none" stroke="#9cabff" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></line><line x1="28.5" y1="89.5" x2="32.5" y2="89.5" fill="none" stroke="#9cabff" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></line><line x1="79.5" y1="22.5" x2="79.5" y2="26.5" fill="none" stroke="#9cabff" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></line><line x1="77.5" y1="24.5" x2="81.5" y2="24.5" fill="none" stroke="#9cabff" stroke-linecap="round" stroke-linejoin="round"${_scopeId2}></line><circle cx="90.5" cy="97.5" r="3" fill="none" stroke="#9cabff" stroke-miterlimit="10"${_scopeId2}></circle><circle cx="24" cy="23" r="2.5" fill="none" stroke="#9cabff" stroke-miterlimit="10"${_scopeId2}></circle></svg></div><h5 class="card-title mt-2 text-capitalize"${_scopeId2}>${ssrInterpolate(n.name)}</h5><ul class="list-styled"${_scopeId2}><li class="list-item"${_scopeId2}>Apartment purchase loan</li><li class="list-item"${_scopeId2}>Home equity loan</li><li class="list-item"${_scopeId2}>Construction loan</li></ul></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "card featured-card h-100" }, [
                        createVNode("div", { class: "card-inner" }, [
                          createVNode("div", { class: "loan-icon w-20" }, [
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
                          createVNode("h5", { class: "card-title mt-2 text-capitalize" }, toDisplayString(n.name), 1),
                          createVNode("ul", { class: "list-styled" }, [
                            createVNode("li", { class: "list-item" }, "Apartment purchase loan"),
                            createVNode("li", { class: "list-item" }, "Home equity loan"),
                            createVNode("li", { class: "list-item" }, "Construction loan")
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "nk-block" }, [
                createVNode("div", { class: "row g-gs" }, [
                  createVNode("div", { class: "col-12 col-md-12 pb-1" }, [
                    createVNode("h5", null, "Emission Sectors")
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(emissions), (n, key) => {
                    return openBlock(), createBlock("div", {
                      class: "col-12 col-md-4",
                      key
                    }, [
                      createVNode(unref(Link), {
                        href: _ctx.route("emissions." + n.route)
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "card featured-card h-100" }, [
                            createVNode("div", { class: "card-inner" }, [
                              createVNode("div", { class: "loan-icon w-20" }, [
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
                              createVNode("h5", { class: "card-title mt-2 text-capitalize" }, toDisplayString(n.name), 1),
                              createVNode("ul", { class: "list-styled" }, [
                                createVNode("li", { class: "list-item" }, "Apartment purchase loan"),
                                createVNode("li", { class: "list-item" }, "Home equity loan"),
                                createVNode("li", { class: "list-item" }, "Construction loan")
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ]);
                  }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Emissions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
