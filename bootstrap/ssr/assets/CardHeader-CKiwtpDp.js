import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "CardHeader",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card-header bg-white" }, _attrs))} data-v-04346248><div class="card-inner p-1" data-v-04346248><div class="card-title-group" data-v-04346248><div class="card-title" data-v-04346248><h6 class="title ff-base fw-medium" data-v-04346248>${ssrInterpolate(__props.title)}</h6></div><div class="card-tools" data-v-04346248>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CardHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CardHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-04346248"]]);
export {
  CardHeader as C
};
