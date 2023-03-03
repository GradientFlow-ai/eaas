import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Breadcrumb from "@layout/AdminLayout/Breadcrumb/Breadcrumb";
import HeaderFeaturedNav from "@layout/AdminLayout/Header/HeaderFeaturedNav";
import HeaderNotificationNav from "@layout/AdminLayout/Header/HeaderNotificationNav";
import HeaderProfileNav from "@layout/AdminLayout/Header/HeaderProfileNav";
import { Button, Container } from "react-bootstrap";

type HeaderProps = {
  toggleSidebar: () => void;
  toggleSidebarMd: () => void;
};

export default function Header(props: HeaderProps) {
  const { toggleSidebar, toggleSidebarMd } = props;

  return (
    <header className="header sticky-top border-bottom mb-4 p-2">
      <div className="header-navbar container flex items-center">
        <div className="header-nav ms-auto">
          <HeaderNotificationNav />
        </div>
        <div className="header-nav ms-2">
          <HeaderProfileNav />
        </div>
      </div>
      <div className="header-divider border-top ms-n2 me-n2 my-2" />
      <div className="fluid container">
        <Breadcrumb />
      </div>
    </header>
  );
}
