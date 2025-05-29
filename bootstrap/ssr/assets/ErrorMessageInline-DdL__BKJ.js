import { ssrRenderAttrs, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext, mergeProps } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  components: {},
  props: {
    title: {},
    isLoading: {}
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($props.isLoading == true) {
    _push(`<button class="btn btn-lg btn-dark btn-block" type="submit"><div class="spinner-border m-0 p-0" role="status" style="${ssrRenderStyle({ "height": "20px", "width": "20px" })}"><span class="visually-hidden">Loading...</span></div></button>`);
  } else {
    _push(`<button class="btn btn-lg btn-dark btn-block">${ssrInterpolate($props.title)}</button>`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SubmitButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SubmitButton = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "ErrorMessageInline",
  __ssrInlineRender: true,
  props: {
    message: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.message != "") {
        _push(`<span${ssrRenderAttrs(mergeProps({ class: "p-1 m-1" }, _attrs))} data-v-97007512>${ssrInterpolate(__props.message)}</span>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ErrorMessageInline.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ErrorMessageInline = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-97007512"]]);
export {
  ErrorMessageInline as E,
  SubmitButton as S
};
