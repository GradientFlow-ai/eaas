import { PropsWithChildren } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import { Badge, Dropdown, Nav, NavItem } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCreditCard,
  faEnvelopeOpen,
  faFile,
  faMessage,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGear,
  faListCheck,
  faLock,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

type NavItemProps = {
  icon: IconDefinition;
} & PropsWithChildren;

const ProfileDropdownItem = (props: NavItemProps) => {
  const { icon, children } = props;

  return (
    <>
      <FontAwesomeIcon className="me-2" icon={icon} fixedWidth />
      {children}
    </>
  );
};

const AccountSection = () => (
  <>
    <Dropdown.Header className="bg-light fw-bold rounded-top">
      Account
    </Dropdown.Header>
    <Link href="/" passHref legacyBehavior>
      <Dropdown.Item>
        <ProfileDropdownItem icon={faBell}>
          Updates
          <Badge bg="info" className="ms-2">
            42
          </Badge>
        </ProfileDropdownItem>
      </Dropdown.Item>
    </Link>
    <Link href="/" passHref legacyBehavior>
      <Dropdown.Item>
        <ProfileDropdownItem icon={faEnvelopeOpen}>
          Updates
          <Badge bg="success" className="ms-2">
            42
          </Badge>
        </ProfileDropdownItem>
      </Dropdown.Item>
    </Link>
    <Link href="/" passHref legacyBehavior>
      <Dropdown.Item>
        <ProfileDropdownItem icon={faListCheck}>
          Tasks
          <Badge bg="danger" className="ms-2">
            42
          </Badge>
        </ProfileDropdownItem>
      </Dropdown.Item>
    </Link>
    <Link href="/" passHref legacyBehavior>
      <Dropdown.Item>
        <ProfileDropdownItem icon={faMessage}>
          Messages
          <Badge bg="warning" className="ms-2">
            42
          </Badge>
        </ProfileDropdownItem>
      </Dropdown.Item>
    </Link>
  </>
);

export default function HeaderProfileNav() {
  const router = useRouter();
  const { data: session } = useSession();
  const { email, image } = session?.user || {};

  if (!email) return null;

  return (
    <Nav>
      <Dropdown as={NavItem}>
        <Dropdown.Toggle
          variant="link"
          bsPrefix="shadow-none"
          className="rounded-0 py-0 px-2"
          id="dropdown-profile"
        >
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-gray-300 transition-all duration-75 focus:outline-none active:scale-95 sm:h-9 sm:w-9">
            <Image width={40} height={40} src={image as string} alt={email} />
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className="pt-0">
          <Dropdown.Header className="bg-light fw-bold">
            Settings
          </Dropdown.Header>
          <Link href="/profile" passHref legacyBehavior>
            <Dropdown.Item>
              <ProfileDropdownItem icon={faUser}>Profile</ProfileDropdownItem>
            </Dropdown.Item>
          </Link>

          <Link href="/" passHref legacyBehavior>
            <Dropdown.Item>
              <ProfileDropdownItem icon={faCreditCard}>
                Payments
              </ProfileDropdownItem>
            </Dropdown.Item>
          </Link>
          <Link href="/" passHref legacyBehavior>
            <Dropdown.Item>
              <ProfileDropdownItem icon={faFile}>Projects</ProfileDropdownItem>
            </Dropdown.Item>
          </Link>

          <Dropdown.Divider />

          <Dropdown.Item onClick={() => signOut()}>
            <ProfileDropdownItem icon={faPowerOff}>Logout</ProfileDropdownItem>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Nav>
  );
}
