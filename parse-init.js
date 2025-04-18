(function initializeParseImmediately() {
  if (typeof window === "undefined") return;

  function initParseSDK() {
    const appId = "wDJ3vqYdEg1W16sL9Z5IiCJ691BT9PwviXHdhZQF";
    const jsKey = "DdSGADz4KBMR2UHPiztUWGbkFQsv1ZyqkiSu1n2Z";
    const serverURL = "https://parseapi.back4app.com";

    if (!window.Parse._initialized) {
      window.Parse.initialize(appId, jsKey);
      window.Parse.serverURL = serverURL;
      window.Parse.User.enableUnsafeCurrentUser();
      window.Parse.enableLocalDatastore();
      window.Parse._initialized = true;
      console.log("[parse-init.js] ✅ Parse initialisé !");
      window.dispatchEvent(new CustomEvent("parseInitialized"));
    }
  }

  if (window.Parse) {
    initParseSDK();
  } else {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/parse/dist/parse.min.js";
    script.async = true;
    script.onload = () => {
      console.log("[parse-init.js] ✅ Parse SDK chargé via CDN");
      initParseSDK();
    };
    script.onerror = () => {
      console.error("[parse-init.js] ❌ Échec du chargement du SDK Parse");
    };
    document.head.appendChild(script);
  }
})();
