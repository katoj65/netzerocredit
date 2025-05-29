import { withCtx, unref, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { H as HomeLayout2 } from "./HomeLayout2-EHqoeNz9.js";
import { E as ErrorMessageInline, S as SubmitButton } from "./ErrorMessageInline-DdL__BKJ.js";
import { useForm, Link } from "@inertiajs/vue3";
import "./CardHeader-CKiwtpDp.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.transform((data) => ({
        ...data,
        remember: form.remember ? "on" : ""
      })).post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(HomeLayout2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-5 mt-5"${_scopeId}><div class="row mt-5"${_scopeId}><div class="col-12 col-md-2"${_scopeId}></div><div class="col-12 col-md-8"${_scopeId}><div class="row"${_scopeId}><div class="col-12 col-md-2"${_scopeId}></div><div class="col-12 col-md-8"${_scopeId}><div class="card m-5"${_scopeId}><div class="card-header card-header-color text-white card-title-dark" style="${ssrRenderStyle({ "background": "#5d6d7e" })}"${_scopeId}><div class="card-inner p-1"${_scopeId}><div class="card-title-group"${_scopeId}><div class="card-title"${_scopeId}><h4 class="title ff-base fw-medium"${_scopeId}>Sign In </h4></div></div></div></div><div class="card-inner card-inner-lg"${_scopeId}><p${_scopeId}>Access the NetZero Credit account using your email or telephone number.</p><form class="pt-2"${_scopeId}><div class="form-group"${_scopeId}><div class="form-label-group"${_scopeId}><label class="form-label" for="default-01"${_scopeId}>Email or Telephone `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</label></div><div class="form-control-wrap"${_scopeId}><input type="text" class="form-control form-control-lg" id="default-01" placeholder="Enter your email address or telephone"${ssrRenderAttr("value", unref(form).email)}${_scopeId}></div></div><div class="form-group"${_scopeId}><div class="form-label-group"${_scopeId}><label class="form-label" for="password"${_scopeId}>Password `);
            _push2(ssrRenderComponent(ErrorMessageInline, {
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</label><a class="link link-primary link-sm" href="html/pages/auths/auth-reset-v2.html"${_scopeId}>Forgot Password?</a></div><div class="form-control-wrap"${_scopeId}><input type="password" class="form-control form-control-lg" id="password" placeholder="Enter your password"${ssrRenderAttr("value", unref(form).password)}${_scopeId}></div></div><div class="form-group"${_scopeId}>`);
            _push2(ssrRenderComponent(SubmitButton, {
              title: "Submit",
              isLoading: unref(form).processing
            }, null, _parent2, _scopeId));
            _push2(`</div></form><div class="form-note-s2 text-center pt-4"${_scopeId}> New on our platform? `);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Create an account`);
                } else {
                  return [
                    createTextVNode("Create an account")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="text-center pt-4 pb-3"${_scopeId}><h6 class="overline-title overline-title-sap"${_scopeId}><span${_scopeId}>OR</span></h6></div><ul class="nav justify-center gx-4"${_scopeId}><li class="nav-item"${_scopeId}><a class="link link-primary fw-normal py-2 px-3" href="#"${_scopeId}>Facebook</a></li><li class="nav-item"${_scopeId}><a class="link link-primary fw-normal py-2 px-3" href="#"${_scopeId}>Google</a></li></ul></div></div></div><div class="col-12 col-md-2"${_scopeId}></div></div></div><div class="col-12 col-md-2"${_scopeId}></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-5 mt-5" }, [
                createVNode("div", { class: "row mt-5" }, [
                  createVNode("div", { class: "col-12 col-md-2" }),
                  createVNode("div", { class: "col-12 col-md-8" }, [
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "col-12 col-md-2" }),
                      createVNode("div", { class: "col-12 col-md-8" }, [
                        createVNode("div", { class: "card m-5" }, [
                          createVNode("div", {
                            class: "card-header card-header-color text-white card-title-dark",
                            style: { "background": "#5d6d7e" }
                          }, [
                            createVNode("div", { class: "card-inner p-1" }, [
                              createVNode("div", { class: "card-title-group" }, [
                                createVNode("div", { class: "card-title" }, [
                                  createVNode("h4", { class: "title ff-base fw-medium" }, "Sign In ")
                                ])
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "card-inner card-inner-lg" }, [
                            createVNode("p", null, "Access the NetZero Credit account using your email or telephone number."),
                            createVNode("form", {
                              onSubmit: withModifiers(submit, ["prevent"]),
                              class: "pt-2"
                            }, [
                              createVNode("div", { class: "form-group" }, [
                                createVNode("div", { class: "form-label-group" }, [
                                  createVNode("label", {
                                    class: "form-label",
                                    for: "default-01"
                                  }, [
                                    createTextVNode("Email or Telephone "),
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
                                  ]),
                                  createVNode("a", {
                                    class: "link link-primary link-sm",
                                    href: "html/pages/auths/auth-reset-v2.html"
                                  }, "Forgot Password?")
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
                                createVNode(SubmitButton, {
                                  title: "Submit",
                                  isLoading: unref(form).processing
                                }, null, 8, ["isLoading"])
                              ])
                            ], 32),
                            createVNode("div", { class: "form-note-s2 text-center pt-4" }, [
                              createTextVNode(" New on our platform? "),
                              createVNode(unref(Link), {
                                href: _ctx.route("register")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Create an account")
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
                      createVNode("div", { class: "col-12 col-md-2" })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
