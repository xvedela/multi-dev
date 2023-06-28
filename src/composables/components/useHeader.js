import useArrows from "../useArrows.js";
import useNavigation from "./useNavigation.js";
import {reactive} from "vue";

const arrows = useArrows();
const links = useNavigation();
export default function useHeader() {
  return reactive({
    links,
    name: "Contact",
    title: `Let's Talk ${arrows.right}`,
    menu: '<i class="fa-solid fa-xl fa-bars text-white"/>',
    close: '<i class="fa-solid fa-xl fa-x"/>',
    arrows,
  });
};