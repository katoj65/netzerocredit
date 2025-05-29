import { reactive, computed, mergeProps, withCtx, unref, createVNode, toDisplayString, createBlock, openBlock, createTextVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-C_aPQEHY.js";
import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ErrorMessageInline-DdL__BKJ.js";
import "@element-plus/icons-vue";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    response: Array
  },
  setup(__props) {
    const props = __props;
    const menu = reactive([
      { title: "Agriculture", stats: "200Mt CO2e", subtitle: "100K Carbon Credits", icon: "" },
      { title: "Land Use & Forestry", stats: "200Mt CO2e", subtitle: "100K Carbon Credits", icon: "" },
      { title: "Energy", stats: "200Mt CO2e", subtitle: "100K Carbon Credits", icon: "" },
      { title: "Industrialisation", stats: "200Mt CO2e", subtitle: "100K Carbon Credits", icon: "" }
    ]);
    const farm = computed(() => props.response.farm.data);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Dashboard" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="row g-4" data-v-c3456dd3${_scopeId}><!--[-->`);
            ssrRenderList(menu, (m, key) => {
              _push2(`<div class="col-12 col-md-3" data-v-c3456dd3${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="card card-full" data-v-c3456dd3${_scopeId2}><div class="card-inner" data-v-c3456dd3${_scopeId2}><div class="d-flex align-items-center justify-content-between mb-1" data-v-c3456dd3${_scopeId2}><div class="fs-6 text-dark text-opacity-75 mb-0" data-v-c3456dd3${_scopeId2}>${ssrInterpolate(m.title)}</div><span class="link link-dark" data-v-c3456dd3${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 118" style="${ssrRenderStyle({ "width": "50px" })}" data-v-c3456dd3${_scopeId2}><path d="M8.916,94.745C-.318,79.153-2.164,58.569,2.382,40.578,7.155,21.69,19.045,9.451,35.162,4.32,46.609.676,58.716.331,70.456,1.845,84.683,3.68,99.57,8.694,108.892,21.408c10.03,13.679,12.071,34.71,10.747,52.054-1.173,15.359-7.441,27.489-19.231,34.494-10.689,6.351-22.92,8.733-34.715,10.331-16.181,2.192-34.195-.336-47.6-12.281A47.243,47.243,0,0,1,8.916,94.745Z" transform="translate(0 -1)" fill="#f6faff" data-v-c3456dd3${_scopeId2}></path><rect x="18" y="32" width="84" height="50" rx="4" ry="4" fill="#fff" data-v-c3456dd3${_scopeId2}></rect><rect x="26" y="44" width="20" height="12" rx="1" ry="1" fill="#e5effe" data-v-c3456dd3${_scopeId2}></rect><rect x="50" y="44" width="20" height="12" rx="1" ry="1" fill="#e5effe" data-v-c3456dd3${_scopeId2}></rect><rect x="74" y="44" width="20" height="12" rx="1" ry="1" fill="#e5effe" data-v-c3456dd3${_scopeId2}></rect><rect x="38" y="60" width="20" height="12" rx="1" ry="1" fill="#e5effe" data-v-c3456dd3${_scopeId2}></rect><rect x="62" y="60" width="20" height="12" rx="1" ry="1" fill="#e5effe" data-v-c3456dd3${_scopeId2}></rect><path d="M98,32H22a5.006,5.006,0,0,0-5,5V79a5.006,5.006,0,0,0,5,5H52v8H45a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H73a2,2,0,0,0,2-2V94a2,2,0,0,0-2-2H66V84H98a5.006,5.006,0,0,0,5-5V37A5.006,5.006,0,0,0,98,32ZM73,94v4H45V94Zm-9-2H54V84H64Zm37-13a3,3,0,0,1-3,3H22a3,3,0,0,1-3-3V37a3,3,0,0,1,3-3H98a3,3,0,0,1,3,3Z" transform="translate(0 -1)" fill="#798bff" data-v-c3456dd3${_scopeId2}></path><path d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z" transform="translate(0 -1)" fill="#6576ff" data-v-c3456dd3${_scopeId2}></path><path d="M61.444,41H40.111L33,48.143V19.7A3.632,3.632,0,0,1,36.556,16H61.444A3.632,3.632,0,0,1,65,19.7V37.3A3.632,3.632,0,0,1,61.444,41Z" transform="translate(0 -1)" fill="none" stroke="#6576ff" stroke-miterlimit="10" stroke-width="2" data-v-c3456dd3${_scopeId2}></path><line x1="40" y1="22" x2="57" y2="22" fill="none" stroke="#fffffe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-c3456dd3${_scopeId2}></line><line x1="40" y1="27" x2="57" y2="27" fill="none" stroke="#fffffe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-c3456dd3${_scopeId2}></line><line x1="40" y1="32" x2="50" y2="32" fill="none" stroke="#fffffe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-c3456dd3${_scopeId2}></line><line x1="30.5" y1="87.5" x2="30.5" y2="91.5" fill="none" stroke="#9cabff" stroke-linecap="round" stroke-linejoin="round" data-v-c3456dd3${_scopeId2}></line><line x1="28.5" y1="89.5" x2="32.5" y2="89.5" fill="none" stroke="#9cabff" stroke-linecap="round" stroke-linejoin="round" data-v-c3456dd3${_scopeId2}></line><line x1="79.5" y1="22.5" x2="79.5" y2="26.5" fill="none" stroke="#9cabff" stroke-linecap="round" stroke-linejoin="round" data-v-c3456dd3${_scopeId2}></line><line x1="77.5" y1="24.5" x2="81.5" y2="24.5" fill="none" stroke="#9cabff" stroke-linecap="round" stroke-linejoin="round" data-v-c3456dd3${_scopeId2}></line><circle cx="90.5" cy="97.5" r="3" fill="none" stroke="#9cabff" stroke-miterlimit="10" data-v-c3456dd3${_scopeId2}></circle><circle cx="24" cy="23" r="2.5" fill="none" stroke="#9cabff" stroke-miterlimit="10" data-v-c3456dd3${_scopeId2}></circle></svg></span></div><h5 class="fs-9 text-muted" style="${ssrRenderStyle({ "font-size": "17px" })}" data-v-c3456dd3${_scopeId2}>${ssrInterpolate(m.stats)} <small class="fs-3" data-v-c3456dd3${_scopeId2}></small></h5><div class="fs-7 text-dark text-opacity-75 mt-1" data-v-c3456dd3${_scopeId2}><span class="text-muted" data-v-c3456dd3${_scopeId2}>${ssrInterpolate(m.subtitle)}</span></div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "card card-full" }, [
                        createVNode("div", { class: "card-inner" }, [
                          createVNode("div", { class: "d-flex align-items-center justify-content-between mb-1" }, [
                            createVNode("div", { class: "fs-6 text-dark text-opacity-75 mb-0" }, toDisplayString(m.title), 1),
                            createVNode("span", { class: "link link-dark" }, [
                              (openBlock(), createBlock("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 120 118",
                                style: { "width": "50px" }
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
                            ])
                          ]),
                          createVNode("h5", {
                            class: "fs-9 text-muted",
                            style: { "font-size": "17px" }
                          }, [
                            createTextVNode(toDisplayString(m.stats) + " ", 1),
                            createVNode("small", { class: "fs-3" })
                          ]),
                          createVNode("div", { class: "fs-7 text-dark text-opacity-75 mt-1" }, [
                            createVNode("span", { class: "text-muted" }, toDisplayString(m.subtitle), 1)
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
            _push2(`<!--]--></div><div class="row mt-4" data-v-c3456dd3${_scopeId}><div class="col-lg-8" data-v-c3456dd3${_scopeId}><div class="card card-full h-100" id="card" data-v-c3456dd3${_scopeId}><div class="card-inner" data-v-c3456dd3${_scopeId}><div class="card-title-group" data-v-c3456dd3${_scopeId}><div class="card-title" data-v-c3456dd3${_scopeId}><h6 class="title" data-v-c3456dd3${_scopeId}><span data-v-c3456dd3${_scopeId}> FARMERS </span></h6></div><div class="card-tools" data-v-c3456dd3${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              class: "btn btn-outline-light",
              href: _ctx.route("verifier.create_farmer")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`New Farmer`);
                } else {
                  return [
                    createTextVNode("New Farmer")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="card-inner p-0" data-v-c3456dd3${_scopeId}></div><div class="card-inner-sm text-center d-sm-none" data-v-c3456dd3${_scopeId}><a href="#" class="btn btn-link btn-block" data-v-c3456dd3${_scopeId}>See History</a></div><div class="card-inner p-0" data-v-c3456dd3${_scopeId}><div class="nk-tb-list nk-tb-ulist is-compact" data-v-c3456dd3${_scopeId}><div class="nk-tb-item nk-tb-head" data-v-c3456dd3${_scopeId}><div class="nk-tb-col" data-v-c3456dd3${_scopeId}><span class="sub-text" data-v-c3456dd3${_scopeId}>Farm ID</span></div><div class="nk-tb-col tb-col-md" data-v-c3456dd3${_scopeId}><span class="sub-text" data-v-c3456dd3${_scopeId}>Telephone</span></div><div class="nk-tb-col tb-col-md" data-v-c3456dd3${_scopeId}><span class="sub-text" data-v-c3456dd3${_scopeId}>Location</span></div><div class="nk-tb-col tb-col-md" data-v-c3456dd3${_scopeId}><span class="sub-text" data-v-c3456dd3${_scopeId}>Land Size</span></div><div class="nk-tb-col" data-v-c3456dd3${_scopeId}><span class="sub-text" data-v-c3456dd3${_scopeId}>Land Ownership</span></div><div class="nk-tb-col" data-v-c3456dd3${_scopeId}><span class="sub-text" data-v-c3456dd3${_scopeId}></span></div><div class="nk-tb-col nk-tb-col-tools text-end" data-v-c3456dd3${_scopeId}></div></div><!--[-->`);
            ssrRenderList(farm.value, (f, key) => {
              _push2(`<div class="nk-tb-item" data-v-c3456dd3${_scopeId}><div class="nk-tb-col" data-v-c3456dd3${_scopeId}><span style="${ssrRenderStyle({ "text-transform": "capitalize" })}" data-v-c3456dd3${_scopeId}>${ssrInterpolate(f.farm_name)}</span></div><div class="nk-tb-col tb-col-md" data-v-c3456dd3${_scopeId}><span data-v-c3456dd3${_scopeId}>${ssrInterpolate(f.tel)}</span></div><div class="nk-tb-col tb-col-md" data-v-c3456dd3${_scopeId}><span data-v-c3456dd3${_scopeId}>${ssrInterpolate(f.district)}</span></div><div class="nk-tb-col tb-col-md" data-v-c3456dd3${_scopeId}><span data-v-c3456dd3${_scopeId}>${ssrInterpolate(f.farm_size)} Acres</span></div><div class="nk-tb-col" data-v-c3456dd3${_scopeId}><span data-v-c3456dd3${_scopeId}>${ssrInterpolate(f.land_ownership)}</span></div><div class="nk-tb-col" data-v-c3456dd3${_scopeId}><span class="text-success" data-v-c3456dd3${_scopeId}>Present</span></div><div class="nk-tb-col nk-tb-col-tools" data-v-c3456dd3${_scopeId}><ul class="nk-tb-actions gx-2" data-v-c3456dd3${_scopeId}><li class="nk-tb-action-hidden" data-v-c3456dd3${_scopeId}><a href="#" class="btn btn-sm btn-icon btn-trigger" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Send Email" data-bs-original-title="Send Email" data-v-c3456dd3${_scopeId}><em class="icon ni ni-mail-fill" data-v-c3456dd3${_scopeId}></em></a></li><li data-v-c3456dd3${_scopeId}><div class="drodown" data-v-c3456dd3${_scopeId}><a href="#" class="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-bs-toggle="dropdown" data-v-c3456dd3${_scopeId}><em class="icon ni ni-more-h" data-v-c3456dd3${_scopeId}></em></a><div class="dropdown-menu dropdown-menu-end" data-v-c3456dd3${_scopeId}><ul class="link-list-opt no-bdr" data-v-c3456dd3${_scopeId}><li data-v-c3456dd3${_scopeId}><a data-bs-toggle="modal" href="#employeeView" data-v-c3456dd3${_scopeId}><em class="icon ni ni-focus" data-v-c3456dd3${_scopeId}></em><span data-v-c3456dd3${_scopeId}>Quick View</span></a></li><li data-v-c3456dd3${_scopeId}><a data-bs-toggle="modal" href="#timeDelete" data-v-c3456dd3${_scopeId}><em class="icon ni ni-delete" data-v-c3456dd3${_scopeId}></em><span data-v-c3456dd3${_scopeId}>Delete</span></a></li></ul></div></div></li></ul></div></div>`);
            });
            _push2(`<!--]--></div></div></div></div><div class="col-lg-4" data-v-c3456dd3${_scopeId}><div class="card" id="card" data-v-c3456dd3${_scopeId}><div class="card-inner" data-v-c3456dd3${_scopeId}><div class="card-title-group mb-1" data-v-c3456dd3${_scopeId}><div class="card-title" data-v-c3456dd3${_scopeId}><h6 class="title" data-v-c3456dd3${_scopeId}>Investment Overview</h6><p data-v-c3456dd3${_scopeId}>The investment overview of your platform. <a href="#" data-v-c3456dd3${_scopeId}>All Investment</a></p></div></div><ul class="nav nav-tabs nav-tabs-card nav-tabs-xs" role="tablist" data-v-c3456dd3${_scopeId}><li class="nav-item" role="presentation" data-v-c3456dd3${_scopeId}><a class="nav-link active" data-bs-toggle="tab" href="#overview" aria-selected="true" role="tab" data-v-c3456dd3${_scopeId}>Overview</a></li><li class="nav-item" role="presentation" data-v-c3456dd3${_scopeId}><a class="nav-link" data-bs-toggle="tab" href="#thisyear" aria-selected="false" tabindex="-1" role="tab" data-v-c3456dd3${_scopeId}>This Year</a></li><li class="nav-item" role="presentation" data-v-c3456dd3${_scopeId}><a class="nav-link" data-bs-toggle="tab" href="#alltime" aria-selected="false" tabindex="-1" role="tab" data-v-c3456dd3${_scopeId}>All Time</a></li></ul><div class="tab-content mt-0" data-v-c3456dd3${_scopeId}><div class="tab-pane active" id="overview" role="tabpanel" data-v-c3456dd3${_scopeId}><div class="invest-ov gy-2" data-v-c3456dd3${_scopeId}><div class="subtitle" data-v-c3456dd3${_scopeId}>Currently Actived Investment</div><div class="invest-ov-details" data-v-c3456dd3${_scopeId}><div class="invest-ov-info" data-v-c3456dd3${_scopeId}><div class="amount" data-v-c3456dd3${_scopeId}>49,395.395 <span class="currency currency-usd" data-v-c3456dd3${_scopeId}>USD</span></div><div class="title" data-v-c3456dd3${_scopeId}>Amount</div></div><div class="invest-ov-stats" data-v-c3456dd3${_scopeId}><div data-v-c3456dd3${_scopeId}><span class="amount" data-v-c3456dd3${_scopeId}>56</span><span class="change up text-danger" data-v-c3456dd3${_scopeId}><em class="icon ni ni-arrow-long-up" data-v-c3456dd3${_scopeId}></em>1.93%</span></div><div class="title" data-v-c3456dd3${_scopeId}>Plans</div></div></div><div class="invest-ov-details" data-v-c3456dd3${_scopeId}><div class="invest-ov-info" data-v-c3456dd3${_scopeId}><div class="amount" data-v-c3456dd3${_scopeId}>49,395.395 <span class="currency currency-usd" data-v-c3456dd3${_scopeId}>USD</span></div><div class="title" data-v-c3456dd3${_scopeId}>Paid Profit</div></div></div></div><div class="invest-ov gy-2" data-v-c3456dd3${_scopeId}><div class="subtitle" data-v-c3456dd3${_scopeId}>Investment in this Month</div><div class="invest-ov-details" data-v-c3456dd3${_scopeId}><div class="invest-ov-info" data-v-c3456dd3${_scopeId}><div class="amount" data-v-c3456dd3${_scopeId}>49,395.395 <span class="currency currency-usd" data-v-c3456dd3${_scopeId}>USD</span></div><div class="title" data-v-c3456dd3${_scopeId}>Amount</div></div><div class="invest-ov-stats" data-v-c3456dd3${_scopeId}><div data-v-c3456dd3${_scopeId}><span class="amount" data-v-c3456dd3${_scopeId}>23</span><span class="change down text-danger" data-v-c3456dd3${_scopeId}><em class="icon ni ni-arrow-long-down" data-v-c3456dd3${_scopeId}></em>1.93%</span></div><div class="title" data-v-c3456dd3${_scopeId}>Plans</div></div></div></div></div><div class="tab-pane" id="thisyear" role="tabpanel" data-v-c3456dd3${_scopeId}><div class="invest-ov gy-2" data-v-c3456dd3${_scopeId}><div class="subtitle" data-v-c3456dd3${_scopeId}>Currently Actived Investment</div><div class="invest-ov-details" data-v-c3456dd3${_scopeId}><div class="invest-ov-info" data-v-c3456dd3${_scopeId}><div class="amount" data-v-c3456dd3${_scopeId}>89,395.395 <span class="currency currency-usd" data-v-c3456dd3${_scopeId}>USD</span></div><div class="title" data-v-c3456dd3${_scopeId}>Amount</div></div><div class="invest-ov-stats" data-v-c3456dd3${_scopeId}><div data-v-c3456dd3${_scopeId}><span class="amount" data-v-c3456dd3${_scopeId}>96</span><span class="change up text-danger" data-v-c3456dd3${_scopeId}><em class="icon ni ni-arrow-long-up" data-v-c3456dd3${_scopeId}></em>1.93%</span></div><div class="title" data-v-c3456dd3${_scopeId}>Plans</div></div></div><div class="invest-ov-details" data-v-c3456dd3${_scopeId}><div class="invest-ov-info" data-v-c3456dd3${_scopeId}><div class="amount" data-v-c3456dd3${_scopeId}>99,395.395 <span class="currency currency-usd" data-v-c3456dd3${_scopeId}>USD</span></div><div class="title" data-v-c3456dd3${_scopeId}>Paid Profit</div></div></div></div><div class="invest-ov gy-2" data-v-c3456dd3${_scopeId}><div class="subtitle" data-v-c3456dd3${_scopeId}>Investment in this Month</div><div class="invest-ov-details" data-v-c3456dd3${_scopeId}><div class="invest-ov-info" data-v-c3456dd3${_scopeId}><div class="amount" data-v-c3456dd3${_scopeId}>149,395.395 <span class="currency currency-usd" data-v-c3456dd3${_scopeId}>USD</span></div><div class="title" data-v-c3456dd3${_scopeId}>Amount</div></div><div class="invest-ov-stats" data-v-c3456dd3${_scopeId}><div data-v-c3456dd3${_scopeId}><span class="amount" data-v-c3456dd3${_scopeId}>83</span><span class="change down text-danger" data-v-c3456dd3${_scopeId}><em class="icon ni ni-arrow-long-down" data-v-c3456dd3${_scopeId}></em>1.93%</span></div><div class="title" data-v-c3456dd3${_scopeId}>Plans</div></div></div></div></div><div class="tab-pane" id="alltime" role="tabpanel" data-v-c3456dd3${_scopeId}><div class="invest-ov gy-2" data-v-c3456dd3${_scopeId}><div class="subtitle" data-v-c3456dd3${_scopeId}>Currently Actived Investment</div><div class="invest-ov-details" data-v-c3456dd3${_scopeId}><div class="invest-ov-info" data-v-c3456dd3${_scopeId}><div class="amount" data-v-c3456dd3${_scopeId}>249,395.395 <span class="currency currency-usd" data-v-c3456dd3${_scopeId}>USD</span></div><div class="title" data-v-c3456dd3${_scopeId}>Amount</div></div><div class="invest-ov-stats" data-v-c3456dd3${_scopeId}><div data-v-c3456dd3${_scopeId}><span class="amount" data-v-c3456dd3${_scopeId}>556</span><span class="change up text-danger" data-v-c3456dd3${_scopeId}><em class="icon ni ni-arrow-long-up" data-v-c3456dd3${_scopeId}></em>1.93%</span></div><div class="title" data-v-c3456dd3${_scopeId}>Plans</div></div></div><div class="invest-ov-details" data-v-c3456dd3${_scopeId}><div class="invest-ov-info" data-v-c3456dd3${_scopeId}><div class="amount" data-v-c3456dd3${_scopeId}>149,395.395 <span class="currency currency-usd" data-v-c3456dd3${_scopeId}>USD</span></div><div class="title" data-v-c3456dd3${_scopeId}>Paid Profit</div></div></div></div><div class="invest-ov gy-2" data-v-c3456dd3${_scopeId}><div class="subtitle" data-v-c3456dd3${_scopeId}>Investment in this Month</div><div class="invest-ov-details" data-v-c3456dd3${_scopeId}><div class="invest-ov-info" data-v-c3456dd3${_scopeId}><div class="amount" data-v-c3456dd3${_scopeId}>249,395.395 <span class="currency currency-usd" data-v-c3456dd3${_scopeId}>USD</span></div><div class="title" data-v-c3456dd3${_scopeId}>Amount</div></div><div class="invest-ov-stats" data-v-c3456dd3${_scopeId}><div data-v-c3456dd3${_scopeId}><span class="amount" data-v-c3456dd3${_scopeId}>223</span><span class="change down text-danger" data-v-c3456dd3${_scopeId}><em class="icon ni ni-arrow-long-down" data-v-c3456dd3${_scopeId}></em>1.93%</span></div><div class="title" data-v-c3456dd3${_scopeId}>Plans</div></div></div></div></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "row g-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(menu, (m, key) => {
                  return openBlock(), createBlock("div", {
                    class: "col-12 col-md-3",
                    key
                  }, [
                    createVNode(unref(Link), null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "card card-full" }, [
                          createVNode("div", { class: "card-inner" }, [
                            createVNode("div", { class: "d-flex align-items-center justify-content-between mb-1" }, [
                              createVNode("div", { class: "fs-6 text-dark text-opacity-75 mb-0" }, toDisplayString(m.title), 1),
                              createVNode("span", { class: "link link-dark" }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 120 118",
                                  style: { "width": "50px" }
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
                              ])
                            ]),
                            createVNode("h5", {
                              class: "fs-9 text-muted",
                              style: { "font-size": "17px" }
                            }, [
                              createTextVNode(toDisplayString(m.stats) + " ", 1),
                              createVNode("small", { class: "fs-3" })
                            ]),
                            createVNode("div", { class: "fs-7 text-dark text-opacity-75 mt-1" }, [
                              createVNode("span", { class: "text-muted" }, toDisplayString(m.subtitle), 1)
                            ])
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ]);
                }), 128))
              ]),
              createVNode("div", { class: "row mt-4" }, [
                createVNode("div", { class: "col-lg-8" }, [
                  createVNode("div", {
                    class: "card card-full h-100",
                    id: "card"
                  }, [
                    createVNode("div", { class: "card-inner" }, [
                      createVNode("div", { class: "card-title-group" }, [
                        createVNode("div", { class: "card-title" }, [
                          createVNode("h6", { class: "title" }, [
                            createVNode("span", null, " FARMERS ")
                          ])
                        ]),
                        createVNode("div", { class: "card-tools" }, [
                          createVNode(unref(Link), {
                            class: "btn btn-outline-light",
                            href: _ctx.route("verifier.create_farmer")
                          }, {
                            default: withCtx(() => [
                              createTextVNode("New Farmer")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "card-inner p-0" }),
                    createVNode("div", { class: "card-inner-sm text-center d-sm-none" }, [
                      createVNode("a", {
                        href: "#",
                        class: "btn btn-link btn-block"
                      }, "See History")
                    ]),
                    createVNode("div", { class: "card-inner p-0" }, [
                      createVNode("div", { class: "nk-tb-list nk-tb-ulist is-compact" }, [
                        createVNode("div", { class: "nk-tb-item nk-tb-head" }, [
                          createVNode("div", { class: "nk-tb-col" }, [
                            createVNode("span", { class: "sub-text" }, "Farm ID")
                          ]),
                          createVNode("div", { class: "nk-tb-col tb-col-md" }, [
                            createVNode("span", { class: "sub-text" }, "Telephone")
                          ]),
                          createVNode("div", { class: "nk-tb-col tb-col-md" }, [
                            createVNode("span", { class: "sub-text" }, "Location")
                          ]),
                          createVNode("div", { class: "nk-tb-col tb-col-md" }, [
                            createVNode("span", { class: "sub-text" }, "Land Size")
                          ]),
                          createVNode("div", { class: "nk-tb-col" }, [
                            createVNode("span", { class: "sub-text" }, "Land Ownership")
                          ]),
                          createVNode("div", { class: "nk-tb-col" }, [
                            createVNode("span", { class: "sub-text" })
                          ]),
                          createVNode("div", { class: "nk-tb-col nk-tb-col-tools text-end" })
                        ]),
                        (openBlock(true), createBlock(Fragment, null, renderList(farm.value, (f, key) => {
                          return openBlock(), createBlock("div", {
                            class: "nk-tb-item",
                            key
                          }, [
                            createVNode("div", { class: "nk-tb-col" }, [
                              createVNode("span", { style: { "text-transform": "capitalize" } }, toDisplayString(f.farm_name), 1)
                            ]),
                            createVNode("div", { class: "nk-tb-col tb-col-md" }, [
                              createVNode("span", null, toDisplayString(f.tel), 1)
                            ]),
                            createVNode("div", { class: "nk-tb-col tb-col-md" }, [
                              createVNode("span", null, toDisplayString(f.district), 1)
                            ]),
                            createVNode("div", { class: "nk-tb-col tb-col-md" }, [
                              createVNode("span", null, toDisplayString(f.farm_size) + " Acres", 1)
                            ]),
                            createVNode("div", { class: "nk-tb-col" }, [
                              createVNode("span", null, toDisplayString(f.land_ownership), 1)
                            ]),
                            createVNode("div", { class: "nk-tb-col" }, [
                              createVNode("span", { class: "text-success" }, "Present")
                            ]),
                            createVNode("div", { class: "nk-tb-col nk-tb-col-tools" }, [
                              createVNode("ul", { class: "nk-tb-actions gx-2" }, [
                                createVNode("li", { class: "nk-tb-action-hidden" }, [
                                  createVNode("a", {
                                    href: "#",
                                    class: "btn btn-sm btn-icon btn-trigger",
                                    "data-bs-toggle": "tooltip",
                                    "data-bs-placement": "top",
                                    "aria-label": "Send Email",
                                    "data-bs-original-title": "Send Email"
                                  }, [
                                    createVNode("em", { class: "icon ni ni-mail-fill" })
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("div", { class: "drodown" }, [
                                    createVNode("a", {
                                      href: "#",
                                      class: "btn btn-sm btn-icon btn-trigger dropdown-toggle",
                                      "data-bs-toggle": "dropdown"
                                    }, [
                                      createVNode("em", { class: "icon ni ni-more-h" })
                                    ]),
                                    createVNode("div", { class: "dropdown-menu dropdown-menu-end" }, [
                                      createVNode("ul", { class: "link-list-opt no-bdr" }, [
                                        createVNode("li", null, [
                                          createVNode("a", {
                                            "data-bs-toggle": "modal",
                                            href: "#employeeView"
                                          }, [
                                            createVNode("em", { class: "icon ni ni-focus" }),
                                            createVNode("span", null, "Quick View")
                                          ])
                                        ]),
                                        createVNode("li", null, [
                                          createVNode("a", {
                                            "data-bs-toggle": "modal",
                                            href: "#timeDelete"
                                          }, [
                                            createVNode("em", { class: "icon ni ni-delete" }),
                                            createVNode("span", null, "Delete")
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "col-lg-4" }, [
                  createVNode("div", {
                    class: "card",
                    id: "card"
                  }, [
                    createVNode("div", { class: "card-inner" }, [
                      createVNode("div", { class: "card-title-group mb-1" }, [
                        createVNode("div", { class: "card-title" }, [
                          createVNode("h6", { class: "title" }, "Investment Overview"),
                          createVNode("p", null, [
                            createTextVNode("The investment overview of your platform. "),
                            createVNode("a", { href: "#" }, "All Investment")
                          ])
                        ])
                      ]),
                      createVNode("ul", {
                        class: "nav nav-tabs nav-tabs-card nav-tabs-xs",
                        role: "tablist"
                      }, [
                        createVNode("li", {
                          class: "nav-item",
                          role: "presentation"
                        }, [
                          createVNode("a", {
                            class: "nav-link active",
                            "data-bs-toggle": "tab",
                            href: "#overview",
                            "aria-selected": "true",
                            role: "tab"
                          }, "Overview")
                        ]),
                        createVNode("li", {
                          class: "nav-item",
                          role: "presentation"
                        }, [
                          createVNode("a", {
                            class: "nav-link",
                            "data-bs-toggle": "tab",
                            href: "#thisyear",
                            "aria-selected": "false",
                            tabindex: "-1",
                            role: "tab"
                          }, "This Year")
                        ]),
                        createVNode("li", {
                          class: "nav-item",
                          role: "presentation"
                        }, [
                          createVNode("a", {
                            class: "nav-link",
                            "data-bs-toggle": "tab",
                            href: "#alltime",
                            "aria-selected": "false",
                            tabindex: "-1",
                            role: "tab"
                          }, "All Time")
                        ])
                      ]),
                      createVNode("div", { class: "tab-content mt-0" }, [
                        createVNode("div", {
                          class: "tab-pane active",
                          id: "overview",
                          role: "tabpanel"
                        }, [
                          createVNode("div", { class: "invest-ov gy-2" }, [
                            createVNode("div", { class: "subtitle" }, "Currently Actived Investment"),
                            createVNode("div", { class: "invest-ov-details" }, [
                              createVNode("div", { class: "invest-ov-info" }, [
                                createVNode("div", { class: "amount" }, [
                                  createTextVNode("49,395.395 "),
                                  createVNode("span", { class: "currency currency-usd" }, "USD")
                                ]),
                                createVNode("div", { class: "title" }, "Amount")
                              ]),
                              createVNode("div", { class: "invest-ov-stats" }, [
                                createVNode("div", null, [
                                  createVNode("span", { class: "amount" }, "56"),
                                  createVNode("span", { class: "change up text-danger" }, [
                                    createVNode("em", { class: "icon ni ni-arrow-long-up" }),
                                    createTextVNode("1.93%")
                                  ])
                                ]),
                                createVNode("div", { class: "title" }, "Plans")
                              ])
                            ]),
                            createVNode("div", { class: "invest-ov-details" }, [
                              createVNode("div", { class: "invest-ov-info" }, [
                                createVNode("div", { class: "amount" }, [
                                  createTextVNode("49,395.395 "),
                                  createVNode("span", { class: "currency currency-usd" }, "USD")
                                ]),
                                createVNode("div", { class: "title" }, "Paid Profit")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "invest-ov gy-2" }, [
                            createVNode("div", { class: "subtitle" }, "Investment in this Month"),
                            createVNode("div", { class: "invest-ov-details" }, [
                              createVNode("div", { class: "invest-ov-info" }, [
                                createVNode("div", { class: "amount" }, [
                                  createTextVNode("49,395.395 "),
                                  createVNode("span", { class: "currency currency-usd" }, "USD")
                                ]),
                                createVNode("div", { class: "title" }, "Amount")
                              ]),
                              createVNode("div", { class: "invest-ov-stats" }, [
                                createVNode("div", null, [
                                  createVNode("span", { class: "amount" }, "23"),
                                  createVNode("span", { class: "change down text-danger" }, [
                                    createVNode("em", { class: "icon ni ni-arrow-long-down" }),
                                    createTextVNode("1.93%")
                                  ])
                                ]),
                                createVNode("div", { class: "title" }, "Plans")
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", {
                          class: "tab-pane",
                          id: "thisyear",
                          role: "tabpanel"
                        }, [
                          createVNode("div", { class: "invest-ov gy-2" }, [
                            createVNode("div", { class: "subtitle" }, "Currently Actived Investment"),
                            createVNode("div", { class: "invest-ov-details" }, [
                              createVNode("div", { class: "invest-ov-info" }, [
                                createVNode("div", { class: "amount" }, [
                                  createTextVNode("89,395.395 "),
                                  createVNode("span", { class: "currency currency-usd" }, "USD")
                                ]),
                                createVNode("div", { class: "title" }, "Amount")
                              ]),
                              createVNode("div", { class: "invest-ov-stats" }, [
                                createVNode("div", null, [
                                  createVNode("span", { class: "amount" }, "96"),
                                  createVNode("span", { class: "change up text-danger" }, [
                                    createVNode("em", { class: "icon ni ni-arrow-long-up" }),
                                    createTextVNode("1.93%")
                                  ])
                                ]),
                                createVNode("div", { class: "title" }, "Plans")
                              ])
                            ]),
                            createVNode("div", { class: "invest-ov-details" }, [
                              createVNode("div", { class: "invest-ov-info" }, [
                                createVNode("div", { class: "amount" }, [
                                  createTextVNode("99,395.395 "),
                                  createVNode("span", { class: "currency currency-usd" }, "USD")
                                ]),
                                createVNode("div", { class: "title" }, "Paid Profit")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "invest-ov gy-2" }, [
                            createVNode("div", { class: "subtitle" }, "Investment in this Month"),
                            createVNode("div", { class: "invest-ov-details" }, [
                              createVNode("div", { class: "invest-ov-info" }, [
                                createVNode("div", { class: "amount" }, [
                                  createTextVNode("149,395.395 "),
                                  createVNode("span", { class: "currency currency-usd" }, "USD")
                                ]),
                                createVNode("div", { class: "title" }, "Amount")
                              ]),
                              createVNode("div", { class: "invest-ov-stats" }, [
                                createVNode("div", null, [
                                  createVNode("span", { class: "amount" }, "83"),
                                  createVNode("span", { class: "change down text-danger" }, [
                                    createVNode("em", { class: "icon ni ni-arrow-long-down" }),
                                    createTextVNode("1.93%")
                                  ])
                                ]),
                                createVNode("div", { class: "title" }, "Plans")
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", {
                          class: "tab-pane",
                          id: "alltime",
                          role: "tabpanel"
                        }, [
                          createVNode("div", { class: "invest-ov gy-2" }, [
                            createVNode("div", { class: "subtitle" }, "Currently Actived Investment"),
                            createVNode("div", { class: "invest-ov-details" }, [
                              createVNode("div", { class: "invest-ov-info" }, [
                                createVNode("div", { class: "amount" }, [
                                  createTextVNode("249,395.395 "),
                                  createVNode("span", { class: "currency currency-usd" }, "USD")
                                ]),
                                createVNode("div", { class: "title" }, "Amount")
                              ]),
                              createVNode("div", { class: "invest-ov-stats" }, [
                                createVNode("div", null, [
                                  createVNode("span", { class: "amount" }, "556"),
                                  createVNode("span", { class: "change up text-danger" }, [
                                    createVNode("em", { class: "icon ni ni-arrow-long-up" }),
                                    createTextVNode("1.93%")
                                  ])
                                ]),
                                createVNode("div", { class: "title" }, "Plans")
                              ])
                            ]),
                            createVNode("div", { class: "invest-ov-details" }, [
                              createVNode("div", { class: "invest-ov-info" }, [
                                createVNode("div", { class: "amount" }, [
                                  createTextVNode("149,395.395 "),
                                  createVNode("span", { class: "currency currency-usd" }, "USD")
                                ]),
                                createVNode("div", { class: "title" }, "Paid Profit")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "invest-ov gy-2" }, [
                            createVNode("div", { class: "subtitle" }, "Investment in this Month"),
                            createVNode("div", { class: "invest-ov-details" }, [
                              createVNode("div", { class: "invest-ov-info" }, [
                                createVNode("div", { class: "amount" }, [
                                  createTextVNode("249,395.395 "),
                                  createVNode("span", { class: "currency currency-usd" }, "USD")
                                ]),
                                createVNode("div", { class: "title" }, "Amount")
                              ]),
                              createVNode("div", { class: "invest-ov-stats" }, [
                                createVNode("div", null, [
                                  createVNode("span", { class: "amount" }, "223"),
                                  createVNode("span", { class: "change down text-danger" }, [
                                    createVNode("em", { class: "icon ni ni-arrow-long-down" }),
                                    createTextVNode("1.93%")
                                  ])
                                ]),
                                createVNode("div", { class: "title" }, "Plans")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c3456dd3"]]);
export {
  Dashboard as default
};
