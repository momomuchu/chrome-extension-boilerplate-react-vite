import { createRoot } from "react-dom/client";
import App from "@src/pages/content/components/Demo/app";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import { attachTwindStyle } from "@src/shared/style/twind";

refreshOnUpdate("pages/content");

const root = document.createElement("div");
root.id = "beguide";
// Set inline CSS styles for absolute positioning
root.style.position = "fixed";
root.style.top = "0px"; // Adjust the top position as needed
root.style.right = "0px"; // Adjust the left position as needed
// Set other inline CSS styles
root.style.width = "500px";
root.style.height = "100%";
root.style.backgroundColor = "#333333";
root.style.color = "black";
root.style.fontSize = "16px";
root.style.padding = "10px";
document.body.append(root);

const rootIntoShadow = document.createElement("div");
rootIntoShadow.id = "shadow-root";
rootIntoShadow.style.marginLeft = "30px";
rootIntoShadow.style.marginRight = "30px";

const shadowRoot = root.attachShadow({ mode: "open" });
shadowRoot.appendChild(rootIntoShadow);

/**
 * https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite/pull/174
 *
 * In the firefox environment, the adoptedStyleSheets bug may prevent contentStyle from being applied properly.
 * Please refer to the PR link above and go back to the contentStyle.css implementation, or raise a PR if you have a better way to improve it.
 */
attachTwindStyle(rootIntoShadow, shadowRoot);

createRoot(rootIntoShadow).render(<App />);
