import { withCtx, unref, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { H as HomeLayout2 } from "./HomeLayout2-EHqoeNz9.js";
import { E as ErrorMessageInline, S as SubmitButton } from "./ErrorMessageInline-DdL__BKJ.js";
import { useForm, Link } from "@inertiajs/vue3";
import { C as CardHeader } from "./CardHeader-CKiwtpDp.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    const form = useForm({
      firstname: "",
      lastname: "",
      tel: "",
      email: "",
      password: "",
      password_confirmation: "",
      terms: false
    });
    form.processing;
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(HomeLayout2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-5 mt-5"${_scopeId}><div class="row mt-5"${_scopeId}><div class="col-12 col-md-2"${_scopeId}></div><div class="col-12 col-md-8"${_scopeId}><div class="row"${_scopeId}><div class="col-12 col-md-3"${_scopeId}></div><div class="col-12 col-md-6"${_scopeId}><div class="card mt-5"${_scopeId}>`);
            _push2(ssrRenderComponent(CardHeader, { title: "Create Account" }, null, _parent2, _scopeId));
            _push2(`<div class="card-inner card-inner-lg"${_scopeId}><form${_scopeId}><div class="form-group"${_scopeId}><div class="form-label-group"${_scopeId}><label class="form-label" for="default-03"${_scopeId}>First Name `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.firstname
            }, null, _parent2, _scopeId));
            _push2(`</label></div><div class="form-control-wrap"${_scopeId}><input type="text" class="form-control form-control-lg" id="default-03" placeholder="Enter your first name"${ssrRenderAttr("value", unref(form).firstname)}${_scopeId}></div></div><div class="form-group"${_scopeId}><div class="form-label-group"${_scopeId}><label class="form-label" for="default-04"${_scopeId}>Last Name `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.lastname
            }, null, _parent2, _scopeId));
            _push2(`</label></div><div class="form-control-wrap"${_scopeId}><input type="text" class="form-control form-control-lg" id="default-04" placeholder="Enter your last name"${ssrRenderAttr("value", unref(form).lastname)}${_scopeId}></div></div><div class="form-group"${_scopeId}><div class="form-label-group"${_scopeId}><label class="form-label" for="default-05"${_scopeId}>Telephone Number `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.tel
            }, null, _parent2, _scopeId));
            _push2(`</label></div><div class="form-control-wrap"${_scopeId}><input type="number" class="form-control form-control-lg" id="default-05" placeholder="Enter your telephone number"${ssrRenderAttr("value", unref(form).tel)}${_scopeId}></div></div><div class="form-group"${_scopeId}><div class="form-label-group"${_scopeId}><label class="form-label" for="default-01"${_scopeId}>Email or Telephone (Username) `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</label></div><div class="form-control-wrap"${_scopeId}><input type="text" class="form-control form-control-lg" id="default-01" placeholder="Enter your email address or telephone"${ssrRenderAttr("value", unref(form).email)}${_scopeId}></div></div><div class="form-group"${_scopeId}><div class="form-label-group"${_scopeId}><label class="form-label" for="password"${_scopeId}>Password `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</label></div><div class="form-control-wrap"${_scopeId}><input type="password" class="form-control form-control-lg" id="password" placeholder="Enter your password"${ssrRenderAttr("value", unref(form).password)}${_scopeId}></div></div><div class="form-group"${_scopeId}><div class="form-label-group"${_scopeId}><label class="form-label" for="password2"${_scopeId}>Confirm Password</label></div><div class="form-control-wrap"${_scopeId}><input type="password" class="form-control form-control-lg" id="password2" placeholder="Confirm password"${ssrRenderAttr("value", unref(form).password_confirmation)}${_scopeId}></div></div><div class="form-group"${_scopeId}>`);
            _push2(ssrRenderComponent(SubmitButton, {
              title: "Sign Up",
              isLoading: unref(form).processing
            }, null, _parent2, _scopeId));
            _push2(`</div></form><div class="form-note-s2 text-center pt-4"${_scopeId}>Already have account? `);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Sign In`);
                } else {
                  return [
                    createTextVNode("Sign In")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="text-center pt-4 pb-3"${_scopeId}><h6 class="overline-title overline-title-sap"${_scopeId}><span${_scopeId}>OR</span></h6></div><ul class="nav justify-center gx-4"${_scopeId}><li class="nav-item"${_scopeId}><a class="link link-primary fw-normal py-2 px-3" href="#"${_scopeId}>Facebook</a></li><li class="nav-item"${_scopeId}><a class="link link-primary fw-normal py-2 px-3" href="#"${_scopeId}>Google</a></li></ul></div></div></div><div class="col-12 col-md-3"${_scopeId}></div></div></div><div class="col-12 col-md-2"${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-5 mt-5" }, [
                createVNode("div", { class: "row mt-5" }, [
                  createVNode("div", { class: "col-12 col-md-2" }),
                  createVNode("div", { class: "col-12 col-md-8" }, [
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "col-12 col-md-3" }),
                      createVNode("div", { class: "col-12 col-md-6" }, [
                        createVNode("div", { class: "card mt-5" }, [
                          createVNode(CardHeader, { title: "Create Account" }),
                          createVNode("div", { class: "card-inner card-inner-lg" }, [
                            createVNode("form", {
                              onSubmit: withModifiers(submit, ["prevent"])
                            }, [
                              createVNode("div", { class: "form-group" }, [
                                createVNode("div", { class: "form-label-group" }, [
                                  createVNode("label", {
                                    class: "form-label",
                                    for: "default-03"
                                  }, [
                                    createTextVNode("First Name "),
                                    createVNode(ErrorMessageInline, {
                                      message: unref(form).errors.firstname
                                    }, null, 8, ["message"])
                                  ])
                                ]),
                                createVNode("div", { class: "form-control-wrap" }, [
                                  withDirectives(createVNode("input", {
                                    type: "text",
                                    class: "form-control form-control-lg",
                                    id: "default-03",
                                    placeholder: "Enter your first name",
                                    "onUpdate:modelValue": ($event) => unref(form).firstname = $event
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(form).firstname]
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "form-group" }, [
                                createVNode("div", { class: "form-label-group" }, [
                                  createVNode("label", {
                                    class: "form-label",
                                    for: "default-04"
                                  }, [
                                    createTextVNode("Last Name "),
                                    createVNode(ErrorMessageInline, {
                                      message: unref(form).errors.lastname
                                    }, null, 8, ["message"])
                                  ])
                                ]),
                                createVNode("div", { class: "form-control-wrap" }, [
                                  withDirectives(createVNode("input", {
                                    type: "text",
                                    class: "form-control form-control-lg",
                                    id: "default-04",
                                    placeholder: "Enter your last name",
                                    "onUpdate:modelValue": ($event) => unref(form).lastname = $event
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(form).lastname]
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "form-group" }, [
                                createVNode("div", { class: "form-label-group" }, [
                                  createVNode("label", {
                                    class: "form-label",
                                    for: "default-05"
                                  }, [
                                    createTextVNode("Telephone Number "),
                                    createVNode(ErrorMessageInline, {
                                      message: unref(form).errors.tel
                                    }, null, 8, ["message"])
                                  ])
                                ]),
                                createVNode("div", { class: "form-control-wrap" }, [
                                  withDirectives(createVNode("input", {
                                    type: "number",
                                    class: "form-control form-control-lg",
                                    id: "default-05",
                                    placeholder: "Enter your telephone number",
                                    "onUpdate:modelValue": ($event) => unref(form).tel = $event
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(form).tel]
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "form-group" }, [
                                createVNode("div", { class: "form-label-group" }, [
                                  createVNode("label", {
                                    class: "form-label",
                                    for: "default-01"
                                  }, [
                                    createTextVNode("Email or Telephone (Username) "),
                                    createVNode(ErrorMessageInline, {
                                      message: unref(form).errors.email
                                    }, null, 8, ["message"])
                                  ])
                                ]),
                                createVNode("div", { class: "form-control-wrap" }, [
                                  withDirectives(createVNode("input", {
                                    type: "text",
                                    class: "form-control form-control-lg",
                                    id: "default-01",
                                    placeholder: "Enter your email address or telephone",
                                    "onUpdate:modelValue": ($event) => unref(form).email = $event
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(form).email]
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "form-group" }, [
                                createVNode("div", { class: "form-label-group" }, [
                                  createVNode("label", {
                                    class: "form-label",
                                    for: "password"
                                  }, [
                                    createTextVNode("Password "),
                                    createVNode(ErrorMessageInline, {
                                      message: unref(form).errors.password
                                    }, null, 8, ["message"])
                                  ])
                                ]),
                                createVNode("div", { class: "form-control-wrap" }, [
                                  withDirectives(createVNode("input", {
                                    type: "password",
                                    class: "form-control form-control-lg",
                                    id: "password",
                                    placeholder: "Enter your password",
                                    "onUpdate:modelValue": ($event) => unref(form).password = $event
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(form).password]
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "form-group" }, [
                                createVNode("div", { class: "form-label-group" }, [
                                  createVNode("label", {
                                    class: "form-label",
                                    for: "password2"
                                  }, "Confirm Password")
                                ]),
                                createVNode("div", { class: "form-control-wrap" }, [
                                  withDirectives(createVNode("input", {
                                    type: "password",
                                    class: "form-control form-control-lg",
                                    id: "password2",
                                    placeholder: "Confirm password",
                                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(form).password_confirmation]
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "form-group" }, [
                                createVNode(SubmitButton, {
                                  title: "Sign Up",
                                  isLoading: unref(form).processing
                                }, null, 8, ["isLoading"])
                              ])
                            ], 32),
                            createVNode("div", { class: "form-note-s2 text-center pt-4" }, [
                              createTextVNode("Already have account? "),
                              createVNode(unref(Link), {
                                href: _ctx.route("login")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Sign In")
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ]),
                            createVNode("div", { class: "text-center pt-4 pb-3" }, [
                              createVNode("h6", { class: "overline-title overline-title-sap" }, [
                                createVNode("span", null, "OR")
                              ])
                            ]),
                            createVNode("ul", { class: "nav justify-center gx-4" }, [
                              createVNode("li", { class: "nav-item" }, [
                                createVNode("a", {
                                  class: "link link-primary fw-normal py-2 px-3",
                                  href: "#"
                                }, "Facebook")
                              ]),
                              createVNode("li", { class: "nav-item" }, [
                                createVNode("a", {
                                  class: "link link-primary fw-normal py-2 px-3",
                                  href: "#"
                                }, "Google")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-12 col-md-3" })
                    ])
                  ]),
                  createVNode("div", { class: "col-12 col-md-2" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
