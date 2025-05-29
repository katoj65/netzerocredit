import { withCtx, unref, createTextVNode, createVNode, createBlock, openBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-C_aPQEHY.js";
import { Link } from "@inertiajs/vue3";
import "./ErrorMessageInline-DdL__BKJ.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@element-plus/icons-vue";
const _sfc_main = {
  __name: "CarbonMarkets",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="card card-stretch"${_scopeId}><div class="card-inner-group"${_scopeId}><div class="card-inner position-relative card-tools-toggle"${_scopeId}><div class="card-title-group"${_scopeId}><div class="card-tools"${_scopeId}><div class="form-inline flex-nowrap gx-3"${_scopeId}><div class="form-wrap"${_scopeId}><h6${_scopeId}> Carbon Markets </h6></div></div></div><div class="card-tools me-n1"${_scopeId}><ul class="btn-toolbar gx-1"${_scopeId}><li${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), { class: "text-muted" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Voluntary Market`);
                } else {
                  return [
                    createTextVNode("Voluntary Market")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li class="btn-toolbar-sep"${_scopeId}></li><li${_scopeId}><div class="toggle-wrap"${_scopeId}><div class="toggle-content" data-content="cardTools"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), { class: "text-muted" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Compliance Market`);
                } else {
                  return [
                    createTextVNode("Compliance Market")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></li></ul></div></div><div class="card-search search-wrap" data-search="search"${_scopeId}><div class="card-body"${_scopeId}><div class="search-content"${_scopeId}></div></div></div></div><div class="card-inner p-0"${_scopeId}><div class="nk-tb-list nk-tb-ulist is-compact"${_scopeId}><div class="nk-tb-item nk-tb-head"${_scopeId}><div class="nk-tb-col nk-tb-col-check"${_scopeId}><div class="custom-control custom-control-sm custom-checkbox notext"${_scopeId}></div></div><div class="nk-tb-col"${_scopeId}><span class="sub-text"${_scopeId}>Project ID</span></div><div class="nk-tb-col tb-col-md"${_scopeId}><span class="sub-text"${_scopeId}>Category</span></div><div class="nk-tb-col tb-col-sm"${_scopeId}><span class="sub-text"${_scopeId}>Contact</span></div><div class="nk-tb-col tb-col-lg"${_scopeId}><span class="sub-text"${_scopeId}>Address</span></div><div class="nk-tb-col tb-col-lg"${_scopeId}><span class="sub-text"${_scopeId}>Active Credits</span></div><div class="nk-tb-col tb-col-lg"${_scopeId}><span class="sub-text"${_scopeId}>Retired Credits</span></div><div class="nk-tb-col"${_scopeId}><span class="sub-text"${_scopeId}>Status</span></div><div class="nk-tb-col nk-tb-col-tools text-end"${_scopeId}><div class="dropdown"${_scopeId}><a href="#" class="btn btn-xs btn-outline-light btn-icon dropdown-toggle" data-bs-toggle="dropdown" data-offset="0,5"${_scopeId}><em class="icon ni ni-plus"${_scopeId}></em></a><div class="dropdown-menu dropdown-menu-xs dropdown-menu-end"${_scopeId}><ul class="link-tidy sm no-bdr"${_scopeId}><li${_scopeId}><div class="custom-control custom-control-sm custom-checkbox checked"${_scopeId}><input type="checkbox" class="custom-control-input" checked="" id="ph"${_scopeId}><label class="custom-control-label" for="ph"${_scopeId}>Phone</label></div></li><li${_scopeId}><div class="custom-control custom-control-sm custom-checkbox"${_scopeId}><input type="checkbox" class="custom-control-input" id="vri"${_scopeId}><label class="custom-control-label" for="vri"${_scopeId}>Verified</label></div></li><li${_scopeId}><div class="custom-control custom-control-sm custom-checkbox"${_scopeId}><input type="checkbox" class="custom-control-input" id="st"${_scopeId}><label class="custom-control-label" for="st"${_scopeId}>Status</label></div></li></ul></div></div></div></div><!--[-->`);
            ssrRenderList(30, (n, key) => {
              _push2(`<div class="nk-tb-item"${_scopeId}><div class="nk-tb-col nk-tb-col-check"${_scopeId}><div class="custom-control custom-control-sm custom-checkbox notext"${_scopeId}></div></div><div class="nk-tb-col"${_scopeId}><div class="user-card"${_scopeId}><div class="user-avatar sm bg-light"${_scopeId}><div class="user-avatar sm bg-success-dim"${_scopeId}><span${_scopeId}>WT</span></div></div><div class="user-name"${_scopeId}><span class="tb-lead"${_scopeId}>WB Time</span></div></div></div><div class="nk-tb-col tb-col-md"${_scopeId}><span class="badge bg-outline-gray"${_scopeId}>Cold Lead</span></div><div class="nk-tb-col tb-col-sm"${_scopeId}><span class="tb-lead"${_scopeId}>Manager</span><span class="sub-text"${_scopeId}>patrick@example.com</span><span class="sub-text"${_scopeId}>+942 238-4474</span></div><div class="nk-tb-col tb-col-lg"${_scopeId}><span${_scopeId}>United States</span><span class="sub-text"${_scopeId}>Branch-1</span></div><div class="nk-tb-col tb-col-lg"${_scopeId}><ul class="list-status"${_scopeId}><li${_scopeId}><em class="icon text-dim ni ni-check-circle"${_scopeId}></em> <span${_scopeId}>1</span></li></ul></div><div class="nk-tb-col tb-col-lg"${_scopeId}><ul class="list-status"${_scopeId}><li${_scopeId}><em class="icon text-success ni ni-check-circle"${_scopeId}></em> <span${_scopeId}>0</span></li></ul></div><div class="nk-tb-col"${_scopeId}><span class="tb-status text-warning"${_scopeId}>Pending</span></div><div class="nk-tb-col nk-tb-col-tools"${_scopeId}><ul class="nk-tb-actions gx-2"${_scopeId}><li class="nk-tb-action-hidden"${_scopeId}><a href="#" class="btn btn-sm btn-icon btn-trigger" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Send Email" data-bs-original-title="Send Email"${_scopeId}><em class="icon ni ni-mail-fill"${_scopeId}></em></a></li><li${_scopeId}><div class="drodown"${_scopeId}><a href="#" class="btn btn-sm btn-icon btn-trigger dropdown-toggle" data-bs-toggle="dropdown"${_scopeId}><em class="icon ni ni-more-h"${_scopeId}></em></a><div class="dropdown-menu dropdown-menu-end"${_scopeId}><ul class="link-list-opt no-bdr"${_scopeId}><li${_scopeId}><a href="#"${_scopeId}><em class="icon ni ni-eye"${_scopeId}></em><span${_scopeId}>View Details</span></a></li><li${_scopeId}><a data-bs-toggle="modal" href="#editOrgLead"${_scopeId}><em class="icon ni ni-edit"${_scopeId}></em><span${_scopeId}>Edit</span></a></li><li${_scopeId}><a data-bs-toggle="modal" href="#deleteLead"${_scopeId}><em class="icon ni ni-delete"${_scopeId}></em><span${_scopeId}>Delete</span></a></li></ul></div></div></li></ul></div></div>`);
            });
            _push2(`<!--]--></div></div><div class="card-inner"${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "card card-stretch" }, [
                createVNode("div", { class: "card-inner-group" }, [
                  createVNode("div", { class: "card-inner position-relative card-tools-toggle" }, [
                    createVNode("div", { class: "card-title-group" }, [
                      createVNode("div", { class: "card-tools" }, [
                        createVNode("div", { class: "form-inline flex-nowrap gx-3" }, [
                          createVNode("div", { class: "form-wrap" }, [
                            createVNode("h6", null, " Carbon Markets ")
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "card-tools me-n1" }, [
                        createVNode("ul", { class: "btn-toolbar gx-1" }, [
                          createVNode("li", null, [
                            createVNode(unref(Link), { class: "text-muted" }, {
                              default: withCtx(() => [
                                createTextVNode("Voluntary Market")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("li", { class: "btn-toolbar-sep" }),
                          createVNode("li", null, [
                            createVNode("div", { class: "toggle-wrap" }, [
                              createVNode("div", {
                                class: "toggle-content",
                                "data-content": "cardTools"
                              }, [
                                createVNode(unref(Link), { class: "text-muted" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Compliance Market")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", {
                      class: "card-search search-wrap",
                      "data-search": "search"
                    }, [
                      createVNode("div", { class: "card-body" }, [
                        createVNode("div", { class: "search-content" })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "card-inner p-0" }, [
                    createVNode("div", { class: "nk-tb-list nk-tb-ulist is-compact" }, [
                      createVNode("div", { class: "nk-tb-item nk-tb-head" }, [
                        createVNode("div", { class: "nk-tb-col nk-tb-col-check" }, [
                          createVNode("div", { class: "custom-control custom-control-sm custom-checkbox notext" })
                        ]),
                        createVNode("div", { class: "nk-tb-col" }, [
                          createVNode("span", { class: "sub-text" }, "Project ID")
                        ]),
                        createVNode("div", { class: "nk-tb-col tb-col-md" }, [
                          createVNode("span", { class: "sub-text" }, "Category")
                        ]),
                        createVNode("div", { class: "nk-tb-col tb-col-sm" }, [
                          createVNode("span", { class: "sub-text" }, "Contact")
                        ]),
                        createVNode("div", { class: "nk-tb-col tb-col-lg" }, [
                          createVNode("span", { class: "sub-text" }, "Address")
                        ]),
                        createVNode("div", { class: "nk-tb-col tb-col-lg" }, [
                          createVNode("span", { class: "sub-text" }, "Active Credits")
                        ]),
                        createVNode("div", { class: "nk-tb-col tb-col-lg" }, [
                          createVNode("span", { class: "sub-text" }, "Retired Credits")
                        ]),
                        createVNode("div", { class: "nk-tb-col" }, [
                          createVNode("span", { class: "sub-text" }, "Status")
                        ]),
                        createVNode("div", { class: "nk-tb-col nk-tb-col-tools text-end" }, [
                          createVNode("div", { class: "dropdown" }, [
                            createVNode("a", {
                              href: "#",
                              class: "btn btn-xs btn-outline-light btn-icon dropdown-toggle",
                              "data-bs-toggle": "dropdown",
                              "data-offset": "0,5"
                            }, [
                              createVNode("em", { class: "icon ni ni-plus" })
                            ]),
                            createVNode("div", { class: "dropdown-menu dropdown-menu-xs dropdown-menu-end" }, [
                              createVNode("ul", { class: "link-tidy sm no-bdr" }, [
                                createVNode("li", null, [
                                  createVNode("div", { class: "custom-control custom-control-sm custom-checkbox checked" }, [
                                    createVNode("input", {
                                      type: "checkbox",
                                      class: "custom-control-input",
                                      checked: "",
                                      id: "ph"
                                    }),
                                    createVNode("label", {
                                      class: "custom-control-label",
                                      for: "ph"
                                    }, "Phone")
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("div", { class: "custom-control custom-control-sm custom-checkbox" }, [
                                    createVNode("input", {
                                      type: "checkbox",
                                      class: "custom-control-input",
                                      id: "vri"
                                    }),
                                    createVNode("label", {
                                      class: "custom-control-label",
                                      for: "vri"
                                    }, "Verified")
                                  ])
                                ]),
                                createVNode("li", null, [
                                  createVNode("div", { class: "custom-control custom-control-sm custom-checkbox" }, [
                                    createVNode("input", {
                                      type: "checkbox",
                                      class: "custom-control-input",
                                      id: "st"
                                    }),
                                    createVNode("label", {
                                      class: "custom-control-label",
                                      for: "st"
                                    }, "Status")
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      (openBlock(), createBlock(Fragment, null, renderList(30, (n, key) => {
                        return createVNode("div", {
                          class: "nk-tb-item",
                          key
                        }, [
                          createVNode("div", { class: "nk-tb-col nk-tb-col-check" }, [
                            createVNode("div", { class: "custom-control custom-control-sm custom-checkbox notext" })
                          ]),
                          createVNode("div", { class: "nk-tb-col" }, [
                            createVNode("div", { class: "user-card" }, [
                              createVNode("div", { class: "user-avatar sm bg-light" }, [
                                createVNode("div", { class: "user-avatar sm bg-success-dim" }, [
                                  createVNode("span", null, "WT")
                                ])
                              ]),
                              createVNode("div", { class: "user-name" }, [
                                createVNode("span", { class: "tb-lead" }, "WB Time")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "nk-tb-col tb-col-md" }, [
                            createVNode("span", { class: "badge bg-outline-gray" }, "Cold Lead")
                          ]),
                          createVNode("div", { class: "nk-tb-col tb-col-sm" }, [
                            createVNode("span", { class: "tb-lead" }, "Manager"),
                            createVNode("span", { class: "sub-text" }, "patrick@example.com"),
                            createVNode("span", { class: "sub-text" }, "+942 238-4474")
                          ]),
                          createVNode("div", { class: "nk-tb-col tb-col-lg" }, [
                            createVNode("span", null, "United States"),
                            createVNode("span", { class: "sub-text" }, "Branch-1")
                          ]),
                          createVNode("div", { class: "nk-tb-col tb-col-lg" }, [
                            createVNode("ul", { class: "list-status" }, [
                              createVNode("li", null, [
                                createVNode("em", { class: "icon text-dim ni ni-check-circle" }),
                                createTextVNode(),
                                createVNode("span", null, "1")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "nk-tb-col tb-col-lg" }, [
                            createVNode("ul", { class: "list-status" }, [
                              createVNode("li", null, [
                                createVNode("em", { class: "icon text-success ni ni-check-circle" }),
                                createTextVNode(),
                                createVNode("span", null, "0")
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "nk-tb-col" }, [
                            createVNode("span", { class: "tb-status text-warning" }, "Pending")
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
                                        createVNode("a", { href: "#" }, [
                                          createVNode("em", { class: "icon ni ni-eye" }),
                                          createVNode("span", null, "View Details")
                                        ])
                                      ]),
                                      createVNode("li", null, [
                                        createVNode("a", {
                                          "data-bs-toggle": "modal",
                                          href: "#editOrgLead"
                                        }, [
                                          createVNode("em", { class: "icon ni ni-edit" }),
                                          createVNode("span", null, "Edit")
                                        ])
                                      ]),
                                      createVNode("li", null, [
                                        createVNode("a", {
                                          "data-bs-toggle": "modal",
                                          href: "#deleteLead"
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
                      }), 64))
                    ])
                  ]),
                  createVNode("div", { class: "card-inner" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Market/CarbonMarkets.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
