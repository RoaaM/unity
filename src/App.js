import { useCallback, useEffect, useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./App.css";

const App = () => {
  const {
    unityProvider,
    isLoaded,
    loadingProgression,
    sendMessage,
    addEventListener,
    removeEventListener,
    requestFullscreen,
    takeScreenshot,
    unload,
  } = useUnityContext({
    loaderUrl: "/unitybuild/bu.loader.js",
    dataUrl: "/unitybuild/bu.data",
    frameworkUrl: "/unitybuild/bu.framework.js",
    codeUrl: "/unitybuild/bu.wasm",
    webglContextAttributes: {
      preserveDrawingBuffer: true,
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.unityWrapper}>
        {isLoaded === false && (
          <div className={styles.loadingBar}>
            <div
              className={styles.loadingBarFill}
              style={{ width: loadingProgression * 100 }}
            />
          </div>
        )}
        <Unity
          unityProvider={unityProvider}
          style={{ display: isLoaded ? "block" : "none" }}
        />
      </div>
    </div>
  );
};

export default App;
