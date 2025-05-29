import { useSSRContext, computed, resolveComponent, withCtx, unref, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createVNode, withModifiers, withDirectives, vModelText } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./AppLayout-C_aPQEHY.js";
import { useForm } from "@inertiajs/vue3";
import { E as ErrorMessageInline, S as SubmitButton } from "./ErrorMessageInline-DdL__BKJ.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { C as CardHeader } from "./CardHeader-CKiwtpDp.js";
import "@element-plus/icons-vue";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AuthUser.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AuthUser = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "CreateFarmerProfile",
  __ssrInlineRender: true,
  props: {
    response: Object
  },
  setup(__props) {
    const props = __props;
    const farm_type = computed(() => props.response.farm_type);
    const user = computed(() => props.response.user);
    const land = computed(() => props.response.ownership);
    const practice = computed(() => props.response.practices);
    const soil = computed(() => props.response.soil);
    const water = computed(() => props.response.water);
    const challenge = computed(() => props.response.challenge);
    const userID = computed(() => props.response.user.id);
    const form = useForm({
      user_id: userID,
      name: "",
      size: "",
      type: "",
      items: "",
      land: "",
      sustain: "",
      tree: "",
      animal: "",
      soil: "",
      water: "",
      climate: "",
      geo: ""
    });
    const submit = () => {
      form.post(route("verifier.create-farmer-profile"), {});
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_select = resolveComponent("el-select");
      const _component_el_option = resolveComponent("el-option");
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(AuthUser, null, null, _parent2, _scopeId));
            _push2(`<div class="row"${_scopeId}><div class="col-12"${_scopeId}><div class="row g-gs"${_scopeId}><div class="col-lg-4 col-xl-4 col-xxl-3"${_scopeId}><div class="card h-100"${_scopeId}><div class="card-inner-group border-0"${_scopeId}><div class="card-inner border-0"${_scopeId}><div class="user-card user-card-s2 border-0"${_scopeId}><div class="user-avatar lg bg-dark"${_scopeId}><em class="icon ni ni-user-fill"${_scopeId}></em></div><div class="user-info"${_scopeId}><div class="badge bg-light rounded-pill ucap"${_scopeId}>${ssrInterpolate(user.value.role)}</div><h5 class="ff-base fw-medium"${_scopeId}>${ssrInterpolate(user.value.firstname)} ${ssrInterpolate(user.value.lastname)}</h5><span class="sub-text"${_scopeId}>TEL: ${ssrInterpolate(user.value.tel)}</span></div></div></div><div class="card-inner border-0"${_scopeId}><h6 class="overline-title mb-2"${_scopeId}>Details</h6><div class="row g-3"${_scopeId}><div class="col-sm-6 col-md-4 col-lg-12"${_scopeId}><span class="lead-text"${_scopeId}>Gender:</span><span${_scopeId}>${ssrInterpolate(user.value.gender)}</span></div><div class="col-sm-6 col-md-4 col-lg-12"${_scopeId}><span class="lead-text"${_scopeId}>Date of Birth:</span><span${_scopeId}>${ssrInterpolate(user.value.dob)}</span></div><div class="col-sm-6 col-md-4 col-lg-12"${_scopeId}><span class="lead-text"${_scopeId}>Contacts:</span><span${_scopeId}>${ssrInterpolate(user.value.email)} <br${_scopeId}> ${ssrInterpolate(user.value.tel)}</span></div><div class="col-sm-6 col-md-4 col-lg-12"${_scopeId}><span class="lead-text"${_scopeId}>District:</span><span${_scopeId}>${ssrInterpolate(user.value.district)}</span></div><div class="col-sm-6 col-md-4 col-lg-12"${_scopeId}><span class="lead-text"${_scopeId}>Parish:</span><span${_scopeId}>${ssrInterpolate(user.value.parish)}</span></div><div class="col-sm-6 col-md-4 col-lg-12"${_scopeId}><span class="lead-text"${_scopeId}>Village</span><span${_scopeId}>${ssrInterpolate(user.value.village)}</span></div><div class="col-sm-6 col-md-4 col-lg-12"${_scopeId}><span class="lead-text"${_scopeId}>Registration date:</span><span${_scopeId}>${ssrInterpolate(user.value.created_at)}</span></div></div></div></div></div></div><div class="col-lg-8 col-xl-8 col-xxl-9"${_scopeId}><div class="card h-100"${_scopeId}>`);
            _push2(ssrRenderComponent(CardHeader, { title: "Farm Details" }, null, _parent2, _scopeId));
            _push2(`<div class="card-inner m-3 pt-0"${_scopeId}><div class="nk-block pt-0"${_scopeId}><div class="profile-balance"${_scopeId}><div class="profile-balance-group gx-4"${_scopeId}><div class="profile-balance-sub"${_scopeId}><p class="mt-2"${_scopeId}>Fill in the detailed information about the farm / garden.</p></div></div></div></div><div${_scopeId}><form class="mt-4"${_scopeId}><div class="row gy-4"${_scopeId}><div class="col-sm-12"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="fname1"${_scopeId}>Farm/ Garden Name or Identification `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}><input type="text" class="form-control required" id="fname1" placeholder="Enter farm name / garden or identification"${ssrRenderAttr("value", unref(form).name)}${_scopeId}></div></div></div><div class="col-sm-6"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="fsize"${_scopeId}>Size of Farm `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.size
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}><input type="number" class="form-control required" id="fsize" placeholder="Enter farm size (acre)"${ssrRenderAttr("value", unref(form).size)}${_scopeId}></div></div></div><div class="col-sm-6"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="ftype"${_scopeId}>Farm Type `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.type
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_select, {
              placeholder: "Select",
              size: "large",
              style: { "width": "100%", "text-transform": "capitalize" },
              id: "ftype",
              modelValue: unref(form).type,
              "onUpdate:modelValue": ($event) => unref(form).type = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(farm_type.value, (ft, key) => {
                    _push3(ssrRenderComponent(_component_el_option, {
                      key,
                      style: { "text-transform": "capitalize" },
                      value: ft.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(ft.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(ft.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(farm_type.value, (ft, key) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key,
                        style: { "text-transform": "capitalize" },
                        value: ft.name
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(ft.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="col-sm-12"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="crop"${_scopeId}> Type of Crops Grown or Aminals Rared `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.items
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}><input type="text" class="form-control required" id="crop" placeholder="Enter the type of crops / animals"${ssrRenderAttr("value", unref(form).items)}${_scopeId}></div></div></div><div class="col-sm-12"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="land"${_scopeId}>Land Ownership `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.land
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_select, {
              placeholder: "Select",
              size: "large",
              style: { "width": "100%", "text-transform": "capitalize" },
              id: "land",
              modelValue: unref(form).land,
              "onUpdate:modelValue": ($event) => unref(form).land = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(land.value, (l, key) => {
                    _push3(ssrRenderComponent(_component_el_option, {
                      key,
                      style: { "text-transform": "capitalize" },
                      value: l.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(l.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(l.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(land.value, (l, key) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key,
                        style: { "text-transform": "capitalize" },
                        value: l.name
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(l.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="col-sm-12"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="practice"${_scopeId}>Sustainable Agricultural Practices `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.sustain
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_select, {
              placeholder: "Select",
              size: "large",
              multiple: "",
              style: { "width": "100%", "text-transform": "capitalize" },
              id: "practice",
              modelValue: unref(form).sustain,
              "onUpdate:modelValue": ($event) => unref(form).sustain = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(practice.value, (s, key) => {
                    _push3(ssrRenderComponent(_component_el_option, {
                      key,
                      style: { "text-transform": "capitalize" },
                      value: s.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(s.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(s.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(practice.value, (s, key) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key,
                        style: { "text-transform": "capitalize" },
                        value: s.name
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(s.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="col-sm-6"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="tree"${_scopeId}>Trees Available `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.tree
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}><input type="number" class="form-control required" id="tree" placeholder="Enter the number of trees if any"${ssrRenderAttr("value", unref(form).tree)}${_scopeId}></div></div></div><div class="col-sm-6"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="animal"${_scopeId}>Livestock Available `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.animal
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}><input type="number" class="form-control required" id="animal" placeholder="Enter the number of animals if any"${ssrRenderAttr("value", unref(form).animal)}${_scopeId}></div></div></div><div class="col-sm-6"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="soil"${_scopeId}>Soil Condition `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.soil
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_select, {
              placeholder: "Select",
              size: "large",
              style: { "width": "100%", "text-transform": "capitalize" },
              id: "soil",
              modelValue: unref(form).soil,
              "onUpdate:modelValue": ($event) => unref(form).soil = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(soil.value, (o, key) => {
                    _push3(ssrRenderComponent(_component_el_option, {
                      key,
                      style: { "text-transform": "capitalize" },
                      value: o.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(o.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(o.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(soil.value, (o, key) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key,
                        style: { "text-transform": "capitalize" },
                        value: o.name
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(o.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="col-sm-6"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="water"${_scopeId}>Water Sources `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.water
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_select, {
              placeholder: "Select",
              size: "large",
              style: { "width": "100%", "text-transform": "capitalize" },
              id: "water",
              modelValue: unref(form).water,
              "onUpdate:modelValue": ($event) => unref(form).water = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(water.value, (w, key) => {
                    _push3(ssrRenderComponent(_component_el_option, {
                      key,
                      style: { "text-transform": "capitalize" },
                      value: w.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(w.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(w.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(water.value, (w, key) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key,
                        style: { "text-transform": "capitalize" },
                        value: w.name
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(w.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="col-sm-6"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="challenge"${_scopeId}>Climate Challenge `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.climate
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_select, {
              multiple: "",
              placeholder: "Select",
              size: "large",
              style: { "width": "100%", "text-transform": "capitalize" },
              id: "challenge",
              modelValue: unref(form).climate,
              "onUpdate:modelValue": ($event) => unref(form).climate = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(challenge.value, (c, key) => {
                    _push3(ssrRenderComponent(_component_el_option, {
                      key,
                      style: { "text-transform": "capitalize" },
                      value: c.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(c.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(c.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(challenge.value, (c, key) => {
                      return openBlock(), createBlock(_component_el_option, {
                        key,
                        style: { "text-transform": "capitalize" },
                        value: c.name
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(c.name), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="col-sm-6"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="geo"${_scopeId}>Geo-location `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.geo
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}><input type="number" class="form-control required" id="geo" placeholder="Enter geo-location cordinates"${ssrRenderAttr("value", unref(form).geo)}${_scopeId}></div></div></div><div class="col-sm-3 mt-4"${_scopeId}><div class="form-group"${_scopeId}><div class="form-control-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(SubmitButton, {
              title: "Save",
              isLoading: unref(form).processing
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div></form></div></div></div></div></div></div></div>`);
          } else {
            return [
              createVNode(AuthUser),
              createVNode("div", { class: "row" }, [
                createVNode("div", { class: "col-12" }, [
                  createVNode("div", { class: "row g-gs" }, [
                    createVNode("div", { class: "col-lg-4 col-xl-4 col-xxl-3" }, [
                      createVNode("div", { class: "card h-100" }, [
                        createVNode("div", { class: "card-inner-group border-0" }, [
                          createVNode("div", { class: "card-inner border-0" }, [
                            createVNode("div", { class: "user-card user-card-s2 border-0" }, [
                              createVNode("div", { class: "user-avatar lg bg-dark" }, [
                                createVNode("em", { class: "icon ni ni-user-fill" })
                              ]),
                              createVNode("div", { class: "user-info" }, [
                                createVNode("div", { class: "badge bg-light rounded-pill ucap" }, toDisplayString(user.value.role), 1),
                                createVNode("h5", { class: "ff-base fw-medium" }, toDisplayString(user.value.firstname) + " " + toDisplayString(user.value.lastname), 1),
                                createVNode("span", { class: "sub-text" }, "TEL: " + toDisplayString(user.value.tel), 1)
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "card-inner border-0" }, [
                            createVNode("h6", { class: "overline-title mb-2" }, "Details"),
                            createVNode("div", { class: "row g-3" }, [
                              createVNode("div", { class: "col-sm-6 col-md-4 col-lg-12" }, [
                                createVNode("span", { class: "lead-text" }, "Gender:"),
                                createVNode("span", null, toDisplayString(user.value.gender), 1)
                              ]),
                              createVNode("div", { class: "col-sm-6 col-md-4 col-lg-12" }, [
                                createVNode("span", { class: "lead-text" }, "Date of Birth:"),
                                createVNode("span", null, toDisplayString(user.value.dob), 1)
                              ]),
                              createVNode("div", { class: "col-sm-6 col-md-4 col-lg-12" }, [
                                createVNode("span", { class: "lead-text" }, "Contacts:"),
                                createVNode("span", null, [
                                  createTextVNode(toDisplayString(user.value.email) + " ", 1),
                                  createVNode("br"),
                                  createTextVNode(" " + toDisplayString(user.value.tel), 1)
                                ])
                              ]),
                              createVNode("div", { class: "col-sm-6 col-md-4 col-lg-12" }, [
                                createVNode("span", { class: "lead-text" }, "District:"),
                                createVNode("span", null, toDisplayString(user.value.district), 1)
                              ]),
                              createVNode("div", { class: "col-sm-6 col-md-4 col-lg-12" }, [
                                createVNode("span", { class: "lead-text" }, "Parish:"),
                                createVNode("span", null, toDisplayString(user.value.parish), 1)
                              ]),
                              createVNode("div", { class: "col-sm-6 col-md-4 col-lg-12" }, [
                                createVNode("span", { class: "lead-text" }, "Village"),
                                createVNode("span", null, toDisplayString(user.value.village), 1)
                              ]),
                              createVNode("div", { class: "col-sm-6 col-md-4 col-lg-12" }, [
                                createVNode("span", { class: "lead-text" }, "Registration date:"),
                                createVNode("span", null, toDisplayString(user.value.created_at), 1)
                              ])
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "col-lg-8 col-xl-8 col-xxl-9" }, [
                      createVNode("div", { class: "card h-100" }, [
                        createVNode(CardHeader, { title: "Farm Details" }),
                        createVNode("div", { class: "card-inner m-3 pt-0" }, [
                          createVNode("div", { class: "nk-block pt-0" }, [
                            createVNode("div", { class: "profile-balance" }, [
                              createVNode("div", { class: "profile-balance-group gx-4" }, [
                                createVNode("div", { class: "profile-balance-sub" }, [
                                  createVNode("p", { class: "mt-2" }, "Fill in the detailed information about the farm / garden.")
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", null, [
                            createVNode("form", {
                              onSubmit: withModifiers(submit, ["prevent"]),
                              class: "mt-4"
                            }, [
                              createVNode("div", { class: "row gy-4" }, [
                                createVNode("div", { class: "col-sm-12" }, [
                                  createVNode("div", { class: "form-group" }, [
                                    createVNode("label", {
                                      class: "form-label",
                                      for: "fname1"
                                    }, [
                                      createTextVNode("Farm/ Garden Name or Identification "),
                                      createVNode(ErrorMessageInline, {
                                        message: unref(form).errors.name
                                      }, null, 8, ["message"])
                                    ]),
                                    createVNode("div", { class: "form-control-wrap" }, [
                                      withDirectives(createVNode("input", {
                                        type: "text",
                                        class: "form-control required",
                                        id: "fname1",
                                        placeholder: "Enter farm name / garden or identification",
                                        "onUpdate:modelValue": ($event) => unref(form).name = $event
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(form).name]
                                      ])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "col-sm-6" }, [
                                  createVNode("div", { class: "form-group" }, [
                                    createVNode("label", {
                                      class: "form-label",
                                      for: "fsize"
                                    }, [
                                      createTextVNode("Size of Farm "),
                                      createVNode(ErrorMessageInline, {
                                        message: unref(form).errors.size
                                      }, null, 8, ["message"])
                                    ]),
                                    createVNode("div", { class: "form-control-wrap" }, [
                                      withDirectives(createVNode("input", {
                                        type: "number",
                                        class: "form-control required",
                                        id: "fsize",
                                        placeholder: "Enter farm size (acre)",
                                        "onUpdate:modelValue": ($event) => unref(form).size = $event
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(form).size]
                                      ])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "col-sm-6" }, [
                                  createVNode("div", { class: "form-group" }, [
                                    createVNode("label", {
                                      class: "form-label",
                                      for: "ftype"
                                    }, [
                                      createTextVNode("Farm Type "),
                                      createVNode(ErrorMessageInline, {
                                        message: unref(form).errors.type
                                      }, null, 8, ["message"])
                                    ]),
                                    createVNode("div", { class: "form-control-wrap" }, [
                                      createVNode(_component_el_select, {
                                        placeholder: "Select",
                                        size: "large",
                                        style: { "width": "100%", "text-transform": "capitalize" },
                                        id: "ftype",
                                        modelValue: unref(form).type,
                                        "onUpdate:modelValue": ($event) => unref(form).type = $event
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(farm_type.value, (ft, key) => {
                                            return openBlock(), createBlock(_component_el_option, {
                                              key,
                                              style: { "text-transform": "capitalize" },
                                              value: ft.name
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(ft.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "col-sm-12" }, [
                                  createVNode("div", { class: "form-group" }, [
                                    createVNode("label", {
                                      class: "form-label",
                                      for: "crop"
                                    }, [
                                      createTextVNode(" Type of Crops Grown or Aminals Rared "),
                                      createVNode(ErrorMessageInline, {
                                        message: unref(form).errors.items
                                      }, null, 8, ["message"])
                                    ]),
                                    createVNode("div", { class: "form-control-wrap" }, [
                                      withDirectives(createVNode("input", {
                                        type: "text",
                                        class: "form-control required",
                                        id: "crop",
                                        placeholder: "Enter the type of crops / animals",
                                        "onUpdate:modelValue": ($event) => unref(form).items = $event
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(form).items]
                                      ])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "col-sm-12" }, [
                                  createVNode("div", { class: "form-group" }, [
                                    createVNode("label", {
                                      class: "form-label",
                                      for: "land"
                                    }, [
                                      createTextVNode("Land Ownership "),
                                      createVNode(ErrorMessageInline, {
                                        message: unref(form).errors.land
                                      }, null, 8, ["message"])
                                    ]),
                                    createVNode("div", { class: "form-control-wrap" }, [
                                      createVNode(_component_el_select, {
                                        placeholder: "Select",
                                        size: "large",
                                        style: { "width": "100%", "text-transform": "capitalize" },
                                        id: "land",
                                        modelValue: unref(form).land,
                                        "onUpdate:modelValue": ($event) => unref(form).land = $event
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(land.value, (l, key) => {
                                            return openBlock(), createBlock(_component_el_option, {
                                              key,
                                              style: { "text-transform": "capitalize" },
                                              value: l.name
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(l.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "col-sm-12" }, [
                                  createVNode("div", { class: "form-group" }, [
                                    createVNode("label", {
                                      class: "form-label",
                                      for: "practice"
                                    }, [
                                      createTextVNode("Sustainable Agricultural Practices "),
                                      createVNode(ErrorMessageInline, {
                                        message: unref(form).errors.sustain
                                      }, null, 8, ["message"])
                                    ]),
                                    createVNode("div", { class: "form-control-wrap" }, [
                                      createVNode(_component_el_select, {
                                        placeholder: "Select",
                                        size: "large",
                                        multiple: "",
                                        style: { "width": "100%", "text-transform": "capitalize" },
                                        id: "practice",
                                        modelValue: unref(form).sustain,
                                        "onUpdate:modelValue": ($event) => unref(form).sustain = $event
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(practice.value, (s, key) => {
                                            return openBlock(), createBlock(_component_el_option, {
                                              key,
                                              style: { "text-transform": "capitalize" },
                                              value: s.name
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(s.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "col-sm-6" }, [
                                  createVNode("div", { class: "form-group" }, [
                                    createVNode("label", {
                                      class: "form-label",
                                      for: "tree"
                                    }, [
                                      createTextVNode("Trees Available "),
                                      createVNode(ErrorMessageInline, {
                                        message: unref(form).errors.tree
                                      }, null, 8, ["message"])
                                    ]),
                                    createVNode("div", { class: "form-control-wrap" }, [
                                      withDirectives(createVNode("input", {
                                        type: "number",
                                        class: "form-control required",
                                        id: "tree",
                                        placeholder: "Enter the number of trees if any",
                                        "onUpdate:modelValue": ($event) => unref(form).tree = $event
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(form).tree]
                                      ])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "col-sm-6" }, [
                                  createVNode("div", { class: "form-group" }, [
                                    createVNode("label", {
                                      class: "form-label",
                                      for: "animal"
                                    }, [
                                      createTextVNode("Livestock Available "),
                                      createVNode(ErrorMessageInline, {
                                        message: unref(form).errors.animal
                                      }, null, 8, ["message"])
                                    ]),
                                    createVNode("div", { class: "form-control-wrap" }, [
                                      withDirectives(createVNode("input", {
                                        type: "number",
                                        class: "form-control required",
                                        id: "animal",
                                        placeholder: "Enter the number of animals if any",
                                        "onUpdate:modelValue": ($event) => unref(form).animal = $event
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(form).animal]
                                      ])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "col-sm-6" }, [
                                  createVNode("div", { class: "form-group" }, [
                                    createVNode("label", {
                                      class: "form-label",
                                      for: "soil"
                                    }, [
                                      createTextVNode("Soil Condition "),
                                      createVNode(ErrorMessageInline, {
                                        message: unref(form).errors.soil
                                      }, null, 8, ["message"])
                                    ]),
                                    createVNode("div", { class: "form-control-wrap" }, [
                                      createVNode(_component_el_select, {
                                        placeholder: "Select",
                                        size: "large",
                                        style: { "width": "100%", "text-transform": "capitalize" },
                                        id: "soil",
                                        modelValue: unref(form).soil,
                                        "onUpdate:modelValue": ($event) => unref(form).soil = $event
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(soil.value, (o, key) => {
                                            return openBlock(), createBlock(_component_el_option, {
                                              key,
                                              style: { "text-transform": "capitalize" },
                                              value: o.name
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(o.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "col-sm-6" }, [
                                  createVNode("div", { class: "form-group" }, [
                                    createVNode("label", {
                                      class: "form-label",
                                      for: "water"
                                    }, [
                                      createTextVNode("Water Sources "),
                                      createVNode(ErrorMessageInline, {
                                        message: unref(form).errors.water
                                      }, null, 8, ["message"])
                                    ]),
                                    createVNode("div", { class: "form-control-wrap" }, [
                                      createVNode(_component_el_select, {
                                        placeholder: "Select",
                                        size: "large",
                                        style: { "width": "100%", "text-transform": "capitalize" },
                                        id: "water",
                                        modelValue: unref(form).water,
                                        "onUpdate:modelValue": ($event) => unref(form).water = $event
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(water.value, (w, key) => {
                                            return openBlock(), createBlock(_component_el_option, {
                                              key,
                                              style: { "text-transform": "capitalize" },
                                              value: w.name
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(w.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "col-sm-6" }, [
                                  createVNode("div", { class: "form-group" }, [
                                    createVNode("label", {
                                      class: "form-label",
                                      for: "challenge"
                                    }, [
                                      createTextVNode("Climate Challenge "),
                                      createVNode(ErrorMessageInline, {
                                        message: unref(form).errors.climate
                                      }, null, 8, ["message"])
                                    ]),
                                    createVNode("div", { class: "form-control-wrap" }, [
                                      createVNode(_component_el_select, {
                                        multiple: "",
                                        placeholder: "Select",
                                        size: "large",
                                        style: { "width": "100%", "text-transform": "capitalize" },
                                        id: "challenge",
                                        modelValue: unref(form).climate,
                                        "onUpdate:modelValue": ($event) => unref(form).climate = $event
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(challenge.value, (c, key) => {
                                            return openBlock(), createBlock(_component_el_option, {
                                              key,
                                              style: { "text-transform": "capitalize" },
                                              value: c.name
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(c.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "col-sm-6" }, [
                                  createVNode("div", { class: "form-group" }, [
                                    createVNode("label", {
                                      class: "form-label",
                                      for: "geo"
                                    }, [
                                      createTextVNode("Geo-location "),
                                      createVNode(ErrorMessageInline, {
                                        message: unref(form).errors.geo
                                      }, null, 8, ["message"])
                                    ]),
                                    createVNode("div", { class: "form-control-wrap" }, [
                                      withDirectives(createVNode("input", {
                                        type: "number",
                                        class: "form-control required",
                                        id: "geo",
                                        placeholder: "Enter geo-location cordinates",
                                        "onUpdate:modelValue": ($event) => unref(form).geo = $event
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(form).geo]
                                      ])
                                    ])
                                  ])
                                ]),
                                createVNode("div", { class: "col-sm-3 mt-4" }, [
                                  createVNode("div", { class: "form-group" }, [
                                    createVNode("div", { class: "form-control-wrap" }, [
                                      createVNode(SubmitButton, {
                                        title: "Save",
                                        isLoading: unref(form).processing
                                      }, null, 8, ["isLoading"])
                                    ])
                                  ])
                                ])
                              ])
                            ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Verifier/CreateFarmerProfile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
