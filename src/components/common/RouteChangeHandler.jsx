import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function RouteChangeHandler() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    const mainContent = document.getElementById("main-content");

    if (mainContent) {
      mainContent.focus({
        preventScroll: true,
      });
    }
  }, [pathname]);

  return null;
}

export default RouteChangeHandler;