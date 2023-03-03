import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { Button } from "react-bootstrap";
import SidebarNav from "./SidebarNav";

export default function Sidebar(props: { isShow: boolean; isShowMd: boolean }) {
  const { isShow, isShowMd } = props;
  const [isNarrow, setIsNarrow] = useState(false);

  const toggleIsNarrow = () => {
    const newValue = !isNarrow;
    localStorage.setItem("isNarrow", newValue ? "true" : "false");
    setIsNarrow(newValue);
  };

  // On first time load only
  useEffect(() => {
    if (localStorage.getItem("isNarrow")) {
      setIsNarrow(localStorage.getItem("isNarrow") === "true");
    }
  }, [setIsNarrow]);

  return (
    <div
      className={classNames("sidebar d-flex flex-column position-fixed h-100", {
        "sidebar-narrow": isNarrow,
        show: isShow,
        "md-hide": !isShowMd,
      })}
      id="sidebar"
    >
      <div className="sidebar-nav flex-fill">
        <SidebarNav />
      </div>

      <Button
        variant="link"
        className="sidebar-toggler d-none d-md-inline-block rounded-0 pe-4 fw-bold text-end shadow-none"
        onClick={toggleIsNarrow}
        type="button"
        aria-label="sidebar toggler"
      >
        <FontAwesomeIcon
          className="sidebar-toggler-chevron"
          icon={faAngleLeft}
          fontSize={24}
        />
      </Button>
    </div>
  );
}

export const SidebarOverlay = (props: {
  isShowSidebar: boolean;
  toggleSidebar: () => void;
}) => {
  const { isShowSidebar, toggleSidebar } = props;

  return (
    <div
      tabIndex={-1}
      aria-hidden
      className={classNames(
        "sidebar-overlay position-fixed bg-dark w-100 h-100 top-0 opacity-50",
        {
          "d-none": !isShowSidebar,
        },
      )}
      onClick={toggleSidebar}
    />
  );
};
