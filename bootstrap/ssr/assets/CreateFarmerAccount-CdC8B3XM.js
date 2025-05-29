import { resolveComponent, withCtx, unref, createTextVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-C_aPQEHY.js";
import { useForm } from "@inertiajs/vue3";
import { E as ErrorMessageInline, S as SubmitButton } from "./ErrorMessageInline-DdL__BKJ.js";
import { C as CardHeader } from "./CardHeader-CKiwtpDp.js";
import "@element-plus/icons-vue";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "CreateFarmerAccount",
  __ssrInlineRender: true,
  props: {
    response: Object
  },
  setup(__props) {
    const form = useForm({
      firstname: "",
      lastname: "",
      gender: "",
      tel: "",
      email: "",
      district: "",
      parish: "",
      village: "",
      dob: ""
    });
    const gender = [{ name: "Male" }, { name: "Female" }, { name: "Other" }];
    const submit = () => {
      form.post(route("post.farmer"), {});
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_select = resolveComponent("el-select");
      const _component_el_option = resolveComponent("el-option");
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="row"${_scopeId}><div class="col-md-1 col-12"${_scopeId}></div><div class="col-md-8 col-12"${_scopeId}><form${_scopeId}><div class="card mt-3" id="card"${_scopeId}>`);
            _push2(ssrRenderComponent(CardHeader, { title: "Register New Farmer" }, null, _parent2, _scopeId));
            _push2(`<div class="card-inner"${_scopeId}><div class="row gy-4 p-3"${_scopeId}><div class="col-sm-6"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="fname"${_scopeId}>First Name `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.firstname
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}><input type="text" class="form-control required" id="fname" placeholder="Enter first name"${ssrRenderAttr("value", unref(form).firstname)}${_scopeId}></div></div></div><div class="col-sm-6"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="lname"${_scopeId}>Last Name `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.lastname
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}><input type="text" class="form-control required" id="lname" placeholder="Enter last name"${ssrRenderAttr("value", unref(form).lastname)}${_scopeId}></div></div></div><div class="col-sm-6"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="dob"${_scopeId}>Date of Birth `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.dob
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}><input type="date" class="form-control required" id="dob" placeholder="Enter first name"${ssrRenderAttr("value", unref(form).dob)}${_scopeId}></div></div></div><div class="col-sm-6"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="gender"${_scopeId}>Gender `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.gender
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_select, {
              placeholder: "Select",
              size: "large",
              style: { "width": "100%" },
              modelValue: unref(form).gender,
              "onUpdate:modelValue": ($event) => unref(form).gender = $event,
              id: "gender"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(gender, (g, key) => {
                    _push3(ssrRenderComponent(_component_el_option, {
                      key,
                      value: g.name
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(g.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(g.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(gender, (g, key) => {
                      return createVNode(_component_el_option, {
                        key,
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
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="col-sm-6"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="tel"${_scopeId}>Telephone `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.tel
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}><input type="text" class="form-control required" id="tel" placeholder="Enter telephone number"${ssrRenderAttr("value", unref(form).tel)}${_scopeId}></div></div></div><div class="col-sm-6"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="address"${_scopeId}>Email Address `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}><input type="text" class="form-control required" id="address" placeholder="Enter email address"${ssrRenderAttr("value", unref(form).email)}${_scopeId}></div></div></div><div class="col-sm-6"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="district"${_scopeId}>District `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.district
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}><input type="text" class="form-control required" id="district" placeholder="Enter district"${ssrRenderAttr("value", unref(form).district)}${_scopeId}></div></div></div><div class="col-sm-6"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="parish"${_scopeId}>Parish `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.parish
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}><input type="text" class="form-control required" id="parish" placeholder="Enter parish"${ssrRenderAttr("value", unref(form).parish)}${_scopeId}></div></div></div><div class="col-sm-12"${_scopeId}><div class="form-group"${_scopeId}><label class="form-label" for="village"${_scopeId}>Village `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.village
            }, null, _parent2, _scopeId));
            _push2(`</label><div class="form-control-wrap"${_scopeId}><input type="text" class="form-control required" id="village" placeholder="Enter village"${ssrRenderAttr("value", unref(form).village)}${_scopeId}></div></div></div><div class="col-sm-4 mt-5"${_scopeId}><div class="form-group"${_scopeId}><div class="form-control-wrap"${_scopeId}>`);
            _push2(ssrRenderComponent(SubmitButton, {
              title: "Save",
              isLoading: unref(form).processing
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div></div></div></form></div><div class="col-md-1 col-12"${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "row" }, [
                  createVNode("div", { class: "col-md-1 col-12" }),
                  createVNode("div", { class: "col-md-8 col-12" }, [
                    createVNode("form", {
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, [
                      createVNode("div", {
                        class: "card mt-3",
                        id: "card"
                      }, [
                        createVNode(CardHeader, { title: "Register New Farmer" }),
                        createVNode("div", { class: "card-inner" }, [
                          createVNode("div", { class: "row gy-4 p-3" }, [
                            createVNode("div", { class: "col-sm-6" }, [
                              createVNode("div", { class: "form-group" }, [
                                createVNode("label", {
                                  class: "form-label",
                                  for: "fname"
                                }, [
                                  createTextVNode("First Name "),
                                  createVNode(ErrorMessageInline, {
                                    message: unref(form).errors.firstname
                                  }, null, 8, ["message"])
                                ]),
                                createVNode("div", { class: "form-control-wrap" }, [
                                  withDirectives(createVNode("input", {
                                    type: "text",
                                    class: "form-control required",
                                    id: "fname",
                                    placeholder: "Enter first name",
                                    "onUpdate:modelValue": ($event) => unref(form).firstname = $event
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(form).firstname]
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "col-sm-6" }, [
                              createVNode("div", { class: "form-group" }, [
                                createVNode("label", {
                                  class: "form-label",
                                  for: "lname"
                                }, [
                                  createTextVNode("Last Name "),
                                  createVNode(ErrorMessageInline, {
                                    message: unref(form).errors.lastname
                                  }, null, 8, ["message"])
                                ]),
                                createVNode("div", { class: "form-control-wrap" }, [
                                  withDirectives(createVNode("input", {
                                    type: "text",
                                    class: "form-control required",
                                    id: "lname",
                                    placeholder: "Enter last name",
                                    "onUpdate:modelValue": ($event) => unref(form).lastname = $event
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(form).lastname]
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "col-sm-6" }, [
                              createVNode("div", { class: "form-group" }, [
                                createVNode("label", {
                                  class: "form-label",
                                  for: "dob"
                                }, [
                                  createTextVNode("Date of Birth "),
                                  createVNode(ErrorMessageInline, {
                                    message: unref(form).errors.dob
                                  }, null, 8, ["message"])
                                ]),
                                createVNode("div", { class: "form-control-wrap" }, [
                                  withDirectives(createVNode("input", {
                                    type: "date",
                                    class: "form-control required",
                                    id: "dob",
                                    placeholder: "Enter first name",
                                    "onUpdate:modelValue": ($event) => unref(form).dob = $event
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(form).dob]
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "col-sm-6" }, [
                              createVNode("div", { class: "form-group" }, [
                                createVNode("label", {
                                  class: "form-label",
                                  for: "gender"
                                }, [
                                  createTextVNode("Gender "),
                                  createVNode(ErrorMessageInline, {
                                    message: unref(form).errors.gender
                                  }, null, 8, ["message"])
                                ]),
                                createVNode("div", { class: "form-control-wrap" }, [
                                  createVNode(_component_el_select, {
                                    placeholder: "Select",
                                    size: "large",
                                    style: { "width": "100%" },
                                    modelValue: unref(form).gender,
                                    "onUpdate:modelValue": ($event) => unref(form).gender = $event,
                                    id: "gender"
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(), createBlock(Fragment, null, renderList(gender, (g, key) => {
                                        return createVNode(_component_el_option, {
                                          key,
                                          value: g.name
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(g.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 64))
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
                                  for: "tel"
                                }, [
                                  createTextVNode("Telephone "),
                                  createVNode(ErrorMessageInline, {
                                    message: unref(form).errors.tel
                                  }, null, 8, ["message"])
                                ]),
                                createVNode("div", { class: "form-control-wrap" }, [
                                  withDirectives(createVNode("input", {
                                    type: "text",
                                    class: "form-control required",
                                    id: "tel",
                                    placeholder: "Enter telephone number",
                                    "onUpdate:modelValue": ($event) => unref(form).tel = $event
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(form).tel]
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "col-sm-6" }, [
                              createVNode("div", { class: "form-group" }, [
                                createVNode("label", {
                                  class: "form-label",
                                  for: "address"
                                }, [
                                  createTextVNode("Email Address "),
                                  createVNode(ErrorMessageInline, {
                                    message: unref(form).errors.email
                                  }, null, 8, ["message"])
                                ]),
                                createVNode("div", { class: "form-control-wrap" }, [
                                  withDirectives(createVNode("input", {
                                    type: "text",
                                    class: "form-control required",
                                    id: "address",
                                    placeholder: "Enter email address",
                                    "onUpdate:modelValue": ($event) => unref(form).email = $event
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(form).email]
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "col-sm-6" }, [
                              createVNode("div", { class: "form-group" }, [
                                createVNode("label", {
                                  class: "form-label",
                                  for: "district"
                                }, [
                                  createTextVNode("District "),
                                  createVNode(ErrorMessageInline, {
                                    message: unref(form).errors.district
                                  }, null, 8, ["message"])
                                ]),
                                createVNode("div", { class: "form-control-wrap" }, [
                                  withDirectives(createVNode("input", {
                                    type: "text",
                                    class: "form-control required",
                                    id: "district",
                                    placeholder: "Enter district",
                                    "onUpdate:modelValue": ($event) => unref(form).district = $event
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(form).district]
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "col-sm-6" }, [
                              createVNode("div", { class: "form-group" }, [
                                createVNode("label", {
                                  class: "form-label",
                                  for: "parish"
                                }, [
                                  createTextVNode("Parish "),
                                  createVNode(ErrorMessageInline, {
                                    message: unref(form).errors.parish
                                  }, null, 8, ["message"])
                                ]),
                                createVNode("div", { class: "form-control-wrap" }, [
                                  withDirectives(createVNode("input", {
                                    type: "text",
                                    class: "form-control required",
                                    id: "parish",
                                    placeholder: "Enter parish",
                                    "onUpdate:modelValue": ($event) => unref(form).parish = $event
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(form).parish]
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "col-sm-12" }, [
                              createVNode("div", { class: "form-group" }, [
                                createVNode("label", {
                                  class: "form-label",
                                  for: "village"
                                }, [
                                  createTextVNode("Village "),
                                  createVNode(ErrorMessageInline, {
                                    message: unref(form).errors.village
                                  }, null, 8, ["message"])
                                ]),
                                createVNode("div", { class: "form-control-wrap" }, [
                                  withDirectives(createVNode("input", {
                                    type: "text",
                                    class: "form-control required",
                                    id: "village",
                                    placeholder: "Enter village",
                                    "onUpdate:modelValue": ($event) => unref(form).village = $event
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(form).village]
                                  ])
                                ])
                              ])
                            ]),
                            createVNode("div", { class: "col-sm-4 mt-5" }, [
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
                        ])
                      ])
                    ], 32)
                  ]),
                  createVNode("div", { class: "col-md-1 col-12" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Verifier/CreateFarmerAccount.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
