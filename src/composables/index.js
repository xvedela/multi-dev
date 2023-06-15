import useHeader from "./useHeader.js";
import useFooter from "./useFooter.js";
import useContact from "./useContact.js";
import useArrows from "./useArrows.js";

const composables = {
  'header': useHeader(),
  'footer': useFooter(),
  'contact': useContact(),
  'arrows': useArrows(),
}

export default (name) => (composables[name]);