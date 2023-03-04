import type { NextPage } from "next";
import Image from "next/image";
import { AdminLayout } from "@/components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faDownload,
  faEllipsisVertical,
  faMars,
  faSearch,
  faUsers,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  ButtonGroup,
  Card,
  Dropdown,
  ProgressBar,
} from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import {
  faCcAmex,
  faCcApplePay,
  faCcPaypal,
  faCcStripe,
  faCcVisa,
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Home: NextPage = () => (
  <AdminLayout>
    <div className="row">
      <div className="col-sm-6 col-lg-4">
        <Card
          className="mb-4"
          style={{ "--bs-card-cap-bg": "#3b5998" } as React.CSSProperties}
        >
          <Card.Header className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon
              icon={faFacebookF}
              fixedWidth
              size="3x"
              className="my-4 text-white"
            />
          </Card.Header>
          <Card.Body>
            <div className="row text-center">
              <div className="col">
                <div className="fs-5 fw-semibold">89k</div>
                <div className="text-uppercase text-black-50 small">
                  friends
                </div>
              </div>
              <div className="vr p-0" />
              <div className="col">
                <div className="fs-5 fw-semibold">459</div>
                <div className="text-uppercase text-black-50 small">feeds</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-4">
        <Card
          className="mb-4"
          style={{ "--bs-card-cap-bg": "#00aced" } as React.CSSProperties}
        >
          <Card.Header className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon
              icon={faTwitter}
              fixedWidth
              size="3x"
              className="my-4 text-white"
            />
          </Card.Header>
          <Card.Body>
            <div className="row text-center">
              <div className="col">
                <div className="fs-5 fw-semibold">973k</div>
                <div className="text-uppercase text-black-50 small">
                  followers
                </div>
              </div>
              <div className="vr p-0" />
              <div className="col">
                <div className="fs-5 fw-semibold">1.792</div>
                <div className="text-uppercase text-black-50 small">tweets</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-4">
        <Card
          className="mb-4"
          style={{ "--bs-card-cap-bg": "#4875b4" } as React.CSSProperties}
        >
          <Card.Header className="d-flex justify-content-center align-items-center">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              fixedWidth
              size="3x"
              className="my-4 text-white"
            />
          </Card.Header>
          <Card.Body>
            <div className="row text-center">
              <div className="col">
                <div className="fs-5 fw-semibold">500+</div>
                <div className="text-uppercase text-black-50 small">
                  contacts
                </div>
              </div>
              <div className="vr p-0" />
              <div className="col">
                <div className="fs-5 fw-semibold">292</div>
                <div className="text-uppercase text-black-50 small">feeds</div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  </AdminLayout>
);

export default Home;
