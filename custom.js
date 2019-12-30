console.info("A sheep is running...");

function isCapslock(e) {
  const IS_MAC = /Mac/.test(navigator.platform);

  const charCode = e.charCode;
  const shiftKey = e.shiftKey;

  if (charCode >= 97 && charCode <= 122) {
    capsLock = shiftKey;
  } else if (charCode >= 65 && charCode <= 90 && !(shiftKey && IS_MAC)) {
    capsLock = !shiftKey;
  }

  return capsLock;
}

function renderDot() {
  const node = document.createElement("div");

  node.id = "chrome-plugin-caplock-dot";
  node.style.width = "20px";
  node.style.height = "4px";
  node.style.position = "fixed";
  node.style.left = "50%";
  node.style.top = "-1px";
  node.style.marginLeft = "-4px";
  node.style.zIndex = "9999";
  node.style.transition = "background-color .2s linear";

  document.body.append(node);

  return node;
}

const node = renderDot();

document.addEventListener("keypress", e => {
  const focusEl = document.activeElement;
  const isUpper = isCapslock(e);

  if (focusEl.tagName === "INPUT" || focusEl.tagName === "TEXTAREA") {
    if (isUpper) {
      node.style.backgroundColor = "#14eca7";
    } else {
      node.style.backgroundColor = "#fb7c7c";
    }
  } else {
    node.style.backgroundColor = "transparent";
  }
});
