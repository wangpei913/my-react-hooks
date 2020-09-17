import React from "react";
import { matchRoutes } from "react-router-config";
import RouteConfig from "../route/router";

const Breadcrumb = ({ locationPath, onMatchedRoutes }) => {
  let matchedRoutes = matchRoutes(RouteConfig, locationPath);
  if (typeof onMatchedRoutes === "function") {
    matchedRoutes = onMatchedRoutes(matchedRoutes);
  }
  return (
    <nav>
      <ul className="breadcrumb">
        {matchedRoutes.map((matchRoute, i) => {
          const { path, title } = matchRoute.route;
          const isActive = path === locationPath;
          return isActive ? (
            <li key={i} className="breadcrumb-item active">
              {matchedRoutes.length > 2 && (
                <i style={{ padding: "0 8px" }}>/</i>
              )}
              {title}
            </li>
          ) : (
            <li key={i} className="breadcrumb-item">
              {title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
