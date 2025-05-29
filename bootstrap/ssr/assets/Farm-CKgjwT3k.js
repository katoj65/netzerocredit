import { computed, withCtx, createVNode, unref, toDisplayString, createTextVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-C_aPQEHY.js";
import { C as CardHeader } from "./CardHeader-CKiwtpDp.js";
import { S as SubmitButton } from "./ErrorMessageInline-DdL__BKJ.js";
import { useForm } from "@inertiajs/vue3";
import { ElNotification } from "element-plus";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "@element-plus/icons-vue";
const _sfc_main = {
  __name: "Farm",
  __ssrInlineRender: true,
  props: {
    title: String,
    response: Array
  },
  setup(__props) {
    const props = __props;
    const farm = computed(() => props.response.farm.data);
    var date = /* @__PURE__ */ new Date();
    date = date.getDate() + " - " + date.getMonth() + " - " + date.getFullYear();
    const form = useForm({
      farm_id: props.response.farm.data.farm_id
    });
    const submit = () => {
      form.put(
        route("update_farm_status"),
        {
          onSuccess: () => {
            ElNotification({
              title: "Successful",
              message: "Farm details have been verified.",
              type: "success"
            });
          }
        }
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="nk-block" data-v-cec7c528${_scopeId}><div class="row g-gs" data-v-cec7c528${_scopeId}><div class="col-lg-4 col-xl-4 col-xxl-3" data-v-cec7c528${_scopeId}><div class="card h-100" data-v-cec7c528${_scopeId}><div class="card-inner-group" data-v-cec7c528${_scopeId}><div class="card-inner border-0" data-v-cec7c528${_scopeId}><div class="user-card user-card-s2 border-0" data-v-cec7c528${_scopeId}><div class="user-avatar lg bg-dark" data-v-cec7c528${_scopeId}><em class="icon ni ni-user-fill" data-v-cec7c528${_scopeId}></em></div><div class="user-info" data-v-cec7c528${_scopeId}><div class="badge bg-light rounded-pill ucap" data-v-cec7c528${_scopeId}>${ssrInterpolate(farm.value.role)}</div><h5 class="ff-base fw-medium" data-v-cec7c528${_scopeId}>${ssrInterpolate(farm.value.firstname)} ${ssrInterpolate(farm.value.lastname)}</h5><span class="sub-text" data-v-cec7c528${_scopeId}>TEL: ${ssrInterpolate(farm.value.tel)}</span></div></div></div><div class="card-inner border-0" data-v-cec7c528${_scopeId}><div class="row text-center" data-v-cec7c528${_scopeId}><div class="col-4" data-v-cec7c528${_scopeId}><div class="profile-stats" data-v-cec7c528${_scopeId}><span class="amount" data-v-cec7c528${_scopeId}>0</span><span class="sub-text" data-v-cec7c528${_scopeId}>Credit Issued</span></div></div><div class="col-4" data-v-cec7c528${_scopeId}><div class="profile-stats" data-v-cec7c528${_scopeId}><span class="amount" data-v-cec7c528${_scopeId}>0</span><span class="sub-text" data-v-cec7c528${_scopeId}>Active</span></div></div><div class="col-4" data-v-cec7c528${_scopeId}><div class="profile-stats" data-v-cec7c528${_scopeId}><span class="amount" data-v-cec7c528${_scopeId}>0</span><span class="sub-text" data-v-cec7c528${_scopeId}>Retired</span></div></div></div></div><div class="card-inner border-0" data-v-cec7c528${_scopeId}><h6 class="overline-title mb-2" data-v-cec7c528${_scopeId}>Farmer Details</h6><div class="row g-3" data-v-cec7c528${_scopeId}><div class="col-sm-6 col-md-4 col-lg-12" data-v-cec7c528${_scopeId}><span class="lead-text" data-v-cec7c528${_scopeId}>Gender:</span><span data-v-cec7c528${_scopeId}>${ssrInterpolate(farm.value.gender)}</span></div><div class="col-sm-6 col-md-4 col-lg-12" data-v-cec7c528${_scopeId}><span class="lead-text" data-v-cec7c528${_scopeId}>Date of Birth:</span><span data-v-cec7c528${_scopeId}>${ssrInterpolate(farm.value.dob)}</span></div><div class="col-sm-6 col-md-4 col-lg-12" data-v-cec7c528${_scopeId}><span class="lead-text" data-v-cec7c528${_scopeId}>Contacts:</span><span data-v-cec7c528${_scopeId}>${ssrInterpolate(farm.value.email)} <br data-v-cec7c528${_scopeId}> ${ssrInterpolate(farm.value.tel)}</span></div><div class="col-sm-6 col-md-4 col-lg-12" data-v-cec7c528${_scopeId}><span class="lead-text" data-v-cec7c528${_scopeId}>District:</span><span data-v-cec7c528${_scopeId}>${ssrInterpolate(farm.value.district)}</span></div><div class="col-sm-6 col-md-4 col-lg-12" data-v-cec7c528${_scopeId}><span class="lead-text" data-v-cec7c528${_scopeId}>Parish:</span><span data-v-cec7c528${_scopeId}>${ssrInterpolate(farm.value.parish)}</span></div><div class="col-sm-6 col-md-4 col-lg-12" data-v-cec7c528${_scopeId}><span class="lead-text" data-v-cec7c528${_scopeId}>Village</span><span data-v-cec7c528${_scopeId}>${ssrInterpolate(farm.value.village)}</span></div><div class="col-sm-6 col-md-4 col-lg-12" data-v-cec7c528${_scopeId}><span class="lead-text" data-v-cec7c528${_scopeId}>Registration Date:</span><span data-v-cec7c528${_scopeId}></span></div></div></div></div></div></div><div class="col-lg-8 col-xl-8 col-xxl-9" data-v-cec7c528${_scopeId}><div class="card h-100" data-v-cec7c528${_scopeId}>`);
            _push2(ssrRenderComponent(CardHeader, { title: "Verify Farm Details" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<a href="" class="text-white p-1 m-0" data-v-cec7c528${_scopeId2}><i class="bi bi-pencil-square" style="${ssrRenderStyle({ "font-size": "20px" })}" data-v-cec7c528${_scopeId2}></i></a>`);
                } else {
                  return [
                    createVNode("a", {
                      href: "",
                      class: "text-white p-1 m-0"
                    }, [
                      createVNode("i", {
                        class: "bi bi-pencil-square",
                        style: { "font-size": "20px" }
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="card-inner" data-v-cec7c528${_scopeId}><div class="nk-block" data-v-cec7c528${_scopeId}><h6 class="ff-base fw-medium" style="${ssrRenderStyle({ "text-transform": "capitalize" })}" data-v-cec7c528${_scopeId}>${ssrInterpolate(farm.value.farm_name)}</h6><div class="card border-0 h-100" data-v-cec7c528${_scopeId}><ul class="data-list is-compact" data-v-cec7c528${_scopeId}><li class="data-item border-0" data-v-cec7c528${_scopeId}><div class="data-col" data-v-cec7c528${_scopeId}><div class="data-label" data-v-cec7c528${_scopeId}>Farm Size</div><div class="data-value" data-v-cec7c528${_scopeId}>${ssrInterpolate(farm.value.farm_size)} Acres </div></div></li><li class="data-item border-0" data-v-cec7c528${_scopeId}><div class="data-col" data-v-cec7c528${_scopeId}><div class="data-label" data-v-cec7c528${_scopeId}>Type of Farm </div><div class="data-value" data-v-cec7c528${_scopeId}>${ssrInterpolate(farm.value.farm_type)}</div></div></li><li class="data-item border-0" data-v-cec7c528${_scopeId}><div class="data-col" data-v-cec7c528${_scopeId}><div class="data-label" data-v-cec7c528${_scopeId}>Farm Items</div><div class="data-value" data-v-cec7c528${_scopeId}>${ssrInterpolate(farm.value.farm_items)}</div></div></li><li class="data-item border-0" data-v-cec7c528${_scopeId}><div class="data-col" data-v-cec7c528${_scopeId}><div class="data-label" data-v-cec7c528${_scopeId}>Land Ownership </div><div class="data-value" data-v-cec7c528${_scopeId}>${ssrInterpolate(farm.value.land_ownership)}</div></div></li><li class="data-item border-0" data-v-cec7c528${_scopeId}><div class="data-col" data-v-cec7c528${_scopeId}><div class="data-label" data-v-cec7c528${_scopeId}>Farm Sustainable Practices </div><div class="data-value" data-v-cec7c528${_scopeId}><!--[-->`);
            ssrRenderList(farm.value.sustainable_practice, (i, key) => {
              _push2(`<span class="badge bg-outline-secondary" style="${ssrRenderStyle({ "font-size": "13px", "margin": "3px", "padding": "5px" })}" data-v-cec7c528${_scopeId}>${ssrInterpolate(i)}</span>`);
            });
            _push2(`<!--]--></div></div></li><li class="data-item border-0" data-v-cec7c528${_scopeId}><div class="data-col" data-v-cec7c528${_scopeId}><div class="data-label" data-v-cec7c528${_scopeId}>Number of Trees on Farm </div><div class="data-value" data-v-cec7c528${_scopeId}>${ssrInterpolate(farm.value.count_trees)}</div></div></li><li class="data-item border-0" data-v-cec7c528${_scopeId}><div class="data-col" data-v-cec7c528${_scopeId}><div class="data-label" data-v-cec7c528${_scopeId}>Number of Animals on Farm</div><div class="data-value" data-v-cec7c528${_scopeId}>${ssrInterpolate(farm.value.count_animals)}</div></div></li><li class="data-item border-0" data-v-cec7c528${_scopeId}><div class="data-col" data-v-cec7c528${_scopeId}><div class="data-label" data-v-cec7c528${_scopeId}>Soil Quality</div><div class="data-value" data-v-cec7c528${_scopeId}>${ssrInterpolate(farm.value.soil_quality)}</div></div></li><li class="data-item border-0" data-v-cec7c528${_scopeId}><div class="data-col" data-v-cec7c528${_scopeId}><div class="data-label" data-v-cec7c528${_scopeId}>Water Sources </div><div class="data-value" data-v-cec7c528${_scopeId}>${ssrInterpolate(farm.value.water_source)}</div></div></li><li class="data-item border-0" data-v-cec7c528${_scopeId}><div class="data-col" data-v-cec7c528${_scopeId}><div class="data-label" data-v-cec7c528${_scopeId}>Climate Challenge</div><div class="data-value text-break" data-v-cec7c528${_scopeId}><!--[-->`);
            ssrRenderList(farm.value.climate_challenge, (r, key) => {
              _push2(`<span class="badge bg-outline-secondary" style="${ssrRenderStyle({ "font-size": "13px", "margin": "3px", "padding": "5px" })}" data-v-cec7c528${_scopeId}>${ssrInterpolate(r)}</span>`);
            });
            _push2(`<!--]--></div></div></li><li class="data-item" data-v-cec7c528${_scopeId}><div class="data-col" data-v-cec7c528${_scopeId}><div class="data-label" data-v-cec7c528${_scopeId}>Farm Location</div><div class="data-value" data-v-cec7c528${_scopeId}><a href="https://t.me/tokenlite" target="_blank" data-v-cec7c528${_scopeId}>View Map</a></div></div></li></ul></div></div><div class="nk-block" data-v-cec7c528${_scopeId}><h6 class="lead-text mb-3" data-v-cec7c528${_scopeId}>Verify Farm Data</h6><div class="row g-3" data-v-cec7c528${_scopeId}><div class="col-xl-12 col-xxl-4" data-v-cec7c528${_scopeId}><div class="card" data-v-cec7c528${_scopeId}><div class="card-inner" data-v-cec7c528${_scopeId}><div class="d-flex align-items-center justify-content-between" data-v-cec7c528${_scopeId}><div class="d-flex align-items-center" data-v-cec7c528${_scopeId}><div class="icon-circle icon-circle-lg bg-secondary" data-v-cec7c528${_scopeId}>`);
            if (farm.value.status == "pending") {
              _push2(`<i class="bi bi-shield-exclamation text-white" data-v-cec7c528${_scopeId}></i>`);
            } else if (farm.value.status == "verified") {
              _push2(`<i class="bi bi-check-circle text-white" data-v-cec7c528${_scopeId}></i>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="ms-3" data-v-cec7c528${_scopeId}><h6 class="lead-text" data-v-cec7c528${_scopeId}>Verify farmer&#39;s information</h6><span class="lead-text text-muted" data-v-cec7c528${_scopeId}>Date: ${ssrInterpolate(unref(date))}</span></div></div>`);
            if (farm.value.status == "pending") {
              _push2(`<ul class="btn-toolbar justify-center gx-1 me-n1 flex-nowrap" data-v-cec7c528${_scopeId}><li data-v-cec7c528${_scopeId}><form data-v-cec7c528${_scopeId}>`);
              _push2(ssrRenderComponent(SubmitButton, {
                title: "Verify",
                isLoading: unref(form).processing
              }, null, _parent2, _scopeId));
              _push2(`</form></li></ul>`);
            } else if (farm.value.status == "verified") {
              _push2(`<span class="text-success text-bold" data-v-cec7c528${_scopeId}>Verified</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div></div></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "nk-block" }, [
                createVNode("div", { class: "row g-gs" }, [
                  createVNode("div", { class: "col-lg-4 col-xl-4 col-xxl-3" }, [
                    createVNode("div", { class: "card h-100" }, [
                      createVNode("div", { class: "card-inner-group" }, [
                        createVNode("div", { class: "card-inner border-0" }, [
                          createVNode("div", { class: "user-card user-card-s2 border-0" }, [
                            createVNode("div", { class: "user-avatar lg bg-dark" }, [
                              createVNode("em", { class: "icon ni ni-user-fill" })
                            ]),
                            createVNode("div", { class: "user-info" }, [
                              createVNode("div", { class: "badge bg-light rounded-pill ucap" }, toDisplayString(farm.value.role), 1),
                              createVNode("h5", { class: "ff-base fw-medium" }, toDisplayString(farm.value.firstname) + " " + toDisplayString(farm.value.lastname), 1),
                              createVNode("span", { class: "sub-text" }, "TEL: " + toDisplayString(farm.value.tel), 1)
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "card-inner border-0" }, [
                          createVNode("div", { class: "row text-center" }, [
                            createVNode("div", { class: "col-4" }, [
                              createVNode("div", { class: "profile-stats" }, [
                                createVNode("span", { class: "amount" }, "0"),
                                createVNode("span", { class: "sub-text" }, "Credit Issued")
                              ])
                            ]),
                            createVNode("div", { class: "col-4" }, [
                              createVNode("div", { class: "profile-stats" }, [
                                createVNode("span", { class: "amount" }, "0"),
                                createVNode("span", { class: "sub-text" }, "Active")
                              ])
                            ]),
                            createVNode("div", { class: "col-4" }, [
                              createVNode("div", { class: "profile-stats" }, [
                                createVNode("span", { class: "amount" }, "0"),
                                createVNode("span", { class: "sub-text" }, "Retired")
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "card-inner border-0" }, [
                          createVNode("h6", { class: "overline-title mb-2" }, "Farmer Details"),
                          createVNode("div", { class: "row g-3" }, [
                            createVNode("div", { class: "col-sm-6 col-md-4 col-lg-12" }, [
                              createVNode("span", { class: "lead-text" }, "Gender:"),
                              createVNode("span", null, toDisplayString(farm.value.gender), 1)
                            ]),
                            createVNode("div", { class: "col-sm-6 col-md-4 col-lg-12" }, [
                              createVNode("span", { class: "lead-text" }, "Date of Birth:"),
                              createVNode("span", null, toDisplayString(farm.value.dob), 1)
                            ]),
                            createVNode("div", { class: "col-sm-6 col-md-4 col-lg-12" }, [
                              createVNode("span", { class: "lead-text" }, "Contacts:"),
                              createVNode("span", null, [
                                createTextVNode(toDisplayString(farm.value.email) + " ", 1),
                                createVNode("br"),
                                createTextVNode(" " + toDisplayString(farm.value.tel), 1)
                              ])
                            ]),
                            createVNode("div", { class: "col-sm-6 col-md-4 col-lg-12" }, [
                              createVNode("span", { class: "lead-text" }, "District:"),
                              createVNode("span", null, toDisplayString(farm.value.district), 1)
                            ]),
                            createVNode("div", { class: "col-sm-6 col-md-4 col-lg-12" }, [
                              createVNode("span", { class: "lead-text" }, "Parish:"),
                              createVNode("span", null, toDisplayString(farm.value.parish), 1)
                            ]),
                            createVNode("div", { class: "col-sm-6 col-md-4 col-lg-12" }, [
                              createVNode("span", { class: "lead-text" }, "Village"),
                              createVNode("span", null, toDisplayString(farm.value.village), 1)
                            ]),
                            createVNode("div", { class: "col-sm-6 col-md-4 col-lg-12" }, [
                              createVNode("span", { class: "lead-text" }, "Registration Date:"),
                              createVNode("span")
                            ])
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "col-lg-8 col-xl-8 col-xxl-9" }, [
                    createVNode("div", { class: "card h-100" }, [
                      createVNode(CardHeader, { title: "Verify Farm Details" }, {
                        default: withCtx(() => [
                          createVNode("a", {
                            href: "",
                            class: "text-white p-1 m-0"
                          }, [
                            createVNode("i", {
                              class: "bi bi-pencil-square",
                              style: { "font-size": "20px" }
                            })
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode("div", { class: "card-inner" }, [
                        createVNode("div", { class: "nk-block" }, [
                          createVNode("h6", {
                            class: "ff-base fw-medium",
                            style: { "text-transform": "capitalize" }
                          }, toDisplayString(farm.value.farm_name), 1),
                          createVNode("div", { class: "card border-0 h-100" }, [
                            createVNode("ul", { class: "data-list is-compact" }, [
                              createVNode("li", { class: "data-item border-0" }, [
                                createVNode("div", { class: "data-col" }, [
                                  createVNode("div", { class: "data-label" }, "Farm Size"),
                                  createVNode("div", { class: "data-value" }, toDisplayString(farm.value.farm_size) + " Acres ", 1)
                                ])
                              ]),
                              createVNode("li", { class: "data-item border-0" }, [
                                createVNode("div", { class: "data-col" }, [
                                  createVNode("div", { class: "data-label" }, "Type of Farm "),
                                  createVNode("div", { class: "data-value" }, toDisplayString(farm.value.farm_type), 1)
                                ])
                              ]),
                              createVNode("li", { class: "data-item border-0" }, [
                                createVNode("div", { class: "data-col" }, [
                                  createVNode("div", { class: "data-label" }, "Farm Items"),
                                  createVNode("div", { class: "data-value" }, toDisplayString(farm.value.farm_items), 1)
                                ])
                              ]),
                              createVNode("li", { class: "data-item border-0" }, [
                                createVNode("div", { class: "data-col" }, [
                                  createVNode("div", { class: "data-label" }, "Land Ownership "),
                                  createVNode("div", { class: "data-value" }, toDisplayString(farm.value.land_ownership), 1)
                                ])
                              ]),
                              createVNode("li", { class: "data-item border-0" }, [
                                createVNode("div", { class: "data-col" }, [
                                  createVNode("div", { class: "data-label" }, "Farm Sustainable Practices "),
                                  createVNode("div", { class: "data-value" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(farm.value.sustainable_practice, (i, key) => {
                                      return openBlock(), createBlock("span", {
                                        class: "badge bg-outline-secondary",
                                        key,
                                        style: { "font-size": "13px", "margin": "3px", "padding": "5px" }
                                      }, toDisplayString(i), 1);
                                    }), 128))
                                  ])
                                ])
                              ]),
                              createVNode("li", { class: "data-item border-0" }, [
                                createVNode("div", { class: "data-col" }, [
                                  createVNode("div", { class: "data-label" }, "Number of Trees on Farm "),
                                  createVNode("div", { class: "data-value" }, toDisplayString(farm.value.count_trees), 1)
                                ])
                              ]),
                              createVNode("li", { class: "data-item border-0" }, [
                                createVNode("div", { class: "data-col" }, [
                                  createVNode("div", { class: "data-label" }, "Number of Animals on Farm"),
                                  createVNode("div", { class: "data-value" }, toDisplayString(farm.value.count_animals), 1)
                                ])
                              ]),
                              createVNode("li", { class: "data-item border-0" }, [
                                createVNode("div", { class: "data-col" }, [
                                  createVNode("div", { class: "data-label" }, "Soil Quality"),
                                  createVNode("div", { class: "data-value" }, toDisplayString(farm.value.soil_quality), 1)
                                ])
                              ]),
                              createVNode("li", { class: "data-item border-0" }, [
                                createVNode("div", { class: "data-col" }, [
                                  createVNode("div", { class: "data-label" }, "Water Sources "),
                                  createVNode("div", { class: "data-value" }, toDisplayString(farm.value.water_source), 1)
                                ])
                              ]),
                              createVNode("li", { class: "data-item border-0" }, [
                                createVNode("div", { class: "data-col" }, [
                                  createVNode("div", { class: "data-label" }, "Climate Challenge"),
                                  createVNode("div", { class: "data-value text-break" }, [
                                    (openBlock(true), createBlock(Fragment, null, renderList(farm.value.climate_challenge, (r, key) => {
                                      return openBlock(), createBlock("span", {
                                        class: "badge bg-outline-secondary",
                                        key,
                                        style: { "font-size": "13px", "margin": "3px", "padding": "5px" }
                                      }, toDisplayString(r), 1);
                                    }), 128))
                                  ])
                                ])
                              ]),
                              createVNode("li", { class: "data-item" }, [
                                createVNode("div", { class: "data-col" }, [
                                  createVNode("div", { class: "data-label" }, "Farm Location"),
                                  createVNode("div", { class: "data-value" }, [
                                    createVNode("a", {
                                      href: "https://t.me/tokenlite",
                                      target: "_blank"
                                    }, "View Map")
                                  ])
                                ])
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "nk-block" }, [
                          createVNode("h6", { class: "lead-text mb-3" }, "Verify Farm Data"),
                          createVNode("div", { class: "row g-3" }, [
                            createVNode("div", { class: "col-xl-12 col-xxl-4" }, [
                              createVNode("div", { class: "card" }, [
                                createVNode("div", { class: "card-inner" }, [
                                  createVNode("div", { class: "d-flex align-items-center justify-content-between" }, [
                                    createVNode("div", { class: "d-flex align-items-center" }, [
                                      createVNode("div", { class: "icon-circle icon-circle-lg bg-secondary" }, [
                                        farm.value.status == "pending" ? (openBlock(), createBlock("i", {
                                          key: 0,
                                          class: "bi bi-shield-exclamation text-white"
                                        })) : farm.value.status == "verified" ? (openBlock(), createBlock("i", {
                                          key: 1,
                                          class: "bi bi-check-circle text-white"
                                        })) : createCommentVNode("", true)
                                      ]),
                                      createVNode("div", { class: "ms-3" }, [
                                        createVNode("h6", { class: "lead-text" }, "Verify farmer's information"),
                                        createVNode("span", { class: "lead-text text-muted" }, "Date: " + toDisplayString(unref(date)), 1)
                                      ])
                                    ]),
                                    farm.value.status == "pending" ? (openBlock(), createBlock("ul", {
                                      key: 0,
                                      class: "btn-toolbar justify-center gx-1 me-n1 flex-nowrap"
                                    }, [
                                      createVNode("li", null, [
                                        createVNode("form", {
                                          onSubmit: withModifiers(submit, ["prevent"])
                                        }, [
                                          createVNode(SubmitButton, {
                                            title: "Verify",
                                            isLoading: unref(form).processing
                                          }, null, 8, ["isLoading"])
                                        ], 32)
                                      ])
                                    ])) : farm.value.status == "verified" ? (openBlock(), createBlock("span", {
                                      key: 1,
                                      class: "text-success text-bold"
                                    }, "Verified")) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Verifier/Farm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Farm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-cec7c528"]]);
export {
  Farm as default
};
