import { Workbox } from "workbox-window";

export default function registerSW() {
  if ("production" !== process.env.NODE_ENV) return;
  if (!("serviceWorker" in navigator)) return;

  const wb = new Workbox("sw.js");

  wb.addEventListener("installed", (event) => {
    if (event.isUpdate) {
      // if (confirm("New update is available, Click Ok to refresh")) {
      //   window.location.reload();
      // }
    }
  });

  wb.register();
}
