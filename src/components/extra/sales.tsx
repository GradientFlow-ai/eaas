import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faSearch, faVenus } from "@fortawesome/free-solid-svg-icons";
import { Card, ProgressBar } from "react-bootstrap";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Sales = () => (
  <div className="row">
    <div className="col-md-12">
      <Card className="mb-4">
        <Card.Header>Traffic &amp; Sales</Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col-sm-6">
              <div className="row">
                <div className="col-6">
                  <div className="border-start border-info mb-3 border-4 px-3">
                    <small className="text-black-50">New Clients</small>
                    <div className="fs-5 fw-semibold">9,123</div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="border-start border-danger mb-3 border-4 px-3">
                    <small className="text-black-50">Recurring Clients</small>
                    <div className="fs-5 fw-semibold">22,643</div>
                  </div>
                </div>
              </div>

              <hr className="mt-0" />

              <div className="row align-items-center mb-4">
                <div className="col-3">
                  <span className="text-black-50 small">Monday</span>
                </div>
                <div className="col">
                  <ProgressBar
                    className="progress-thin mb-1"
                    variant="primary"
                    now={34}
                  />
                  <ProgressBar
                    className="progress-thin"
                    variant="danger"
                    now={78}
                  />
                </div>
              </div>

              <div className="row align-items-center mb-4">
                <div className="col-3">
                  <span className="text-black-50 small">Tuesday</span>
                </div>
                <div className="col">
                  <ProgressBar
                    className="progress-thin mb-1"
                    variant="primary"
                    now={56}
                  />
                  <ProgressBar
                    className="progress-thin"
                    variant="danger"
                    now={94}
                  />
                </div>
              </div>

              <div className="row align-items-center mb-4">
                <div className="col-3">
                  <span className="text-black-50 small">Wednesday</span>
                </div>
                <div className="col">
                  <ProgressBar
                    className="progress-thin mb-1"
                    variant="primary"
                    now={12}
                  />
                  <ProgressBar
                    className="progress-thin"
                    variant="danger"
                    now={67}
                  />
                </div>
              </div>

              <div className="row align-items-center mb-4">
                <div className="col-3">
                  <span className="text-black-50 small">Thursday</span>
                </div>
                <div className="col">
                  <ProgressBar
                    className="progress-thin mb-1"
                    variant="primary"
                    now={43}
                  />
                  <ProgressBar
                    className="progress-thin"
                    variant="danger"
                    now={91}
                  />
                </div>
              </div>

              <div className="row align-items-center mb-4">
                <div className="col-3">
                  <span className="text-black-50 small">Friday</span>
                </div>
                <div className="col">
                  <ProgressBar
                    className="progress-thin mb-1"
                    variant="primary"
                    now={22}
                  />
                  <ProgressBar
                    className="progress-thin"
                    variant="danger"
                    now={73}
                  />
                </div>
              </div>

              <div className="row align-items-center mb-4">
                <div className="col-3">
                  <span className="text-black-50 small">Saturday</span>
                </div>
                <div className="col">
                  <ProgressBar
                    className="progress-thin mb-1"
                    variant="primary"
                    now={53}
                  />
                  <ProgressBar
                    className="progress-thin"
                    variant="danger"
                    now={82}
                  />
                </div>
              </div>

              <div className="row align-items-center mb-4">
                <div className="col-3">
                  <span className="text-black-50 small">Sunday</span>
                </div>
                <div className="col">
                  <ProgressBar
                    className="progress-thin mb-1"
                    variant="primary"
                    now={9}
                  />
                  <ProgressBar
                    className="progress-thin"
                    variant="danger"
                    now={69}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="row">
                <div className="col-6">
                  <div className="border-start border-warning mb-3 border-4 px-3">
                    <small className="text-black-50">Pageviews</small>
                    <div className="fs-5 fw-semibold">78,623</div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="border-start border-success mb-3 border-4 px-3">
                    <small className="text-black-50">Organic</small>
                    <div className="fs-5 fw-semibold">49,123</div>
                  </div>
                </div>
              </div>

              <hr className="mt-0" />

              <div className="mb-5">
                <div className="mb-3">
                  <div className="d-flex mb-1">
                    <div>
                      <FontAwesomeIcon
                        className="me-2"
                        icon={faMars}
                        fixedWidth
                      />
                      Male
                    </div>
                    <div className="ms-auto fw-semibold">43%</div>
                  </div>
                  <ProgressBar
                    className="progress-thin"
                    variant="warning"
                    now={43}
                  />
                </div>

                <div className="mb-3">
                  <div className="d-flex mb-1">
                    <div>
                      <FontAwesomeIcon
                        className="me-2"
                        icon={faVenus}
                        fixedWidth
                      />
                      Female
                    </div>
                    <div className="ms-auto fw-semibold">37%</div>
                  </div>
                  <ProgressBar
                    className="progress-thin"
                    variant="warning"
                    now={37}
                  />
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex mb-1">
                  <div>
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faSearch}
                      fixedWidth
                    />
                    Organic Search
                  </div>
                  <div className="ms-auto fw-semibold me-2">191.235</div>
                  <div className="text-black-50 small">(56%)</div>
                </div>
                <ProgressBar
                  className="progress-thin"
                  variant="success"
                  now={56}
                />
              </div>

              <div className="mb-3">
                <div className="d-flex mb-1">
                  <div>
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faFacebookF}
                      fixedWidth
                    />
                    Facebook
                  </div>
                  <div className="ms-auto fw-semibold me-2">51.223</div>
                  <div className="text-black-50 small">(15%)</div>
                </div>
                <ProgressBar
                  className="progress-thin"
                  variant="success"
                  now={15}
                />
              </div>

              <div className="mb-3">
                <div className="d-flex mb-1">
                  <div>
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faTwitter}
                      fixedWidth
                    />
                    Twitter
                  </div>
                  <div className="ms-auto fw-semibold me-2">37.564</div>
                  <div className="text-black-50 small">(11%)</div>
                </div>
                <ProgressBar
                  className="progress-thin"
                  variant="success"
                  now={11}
                />
              </div>

              <div className="mb-3">
                <div className="d-flex mb-1">
                  <div>
                    <FontAwesomeIcon
                      className="me-2"
                      icon={faLinkedinIn}
                      fixedWidth
                    />
                    LinkedIn
                  </div>
                  <div className="ms-auto fw-semibold me-2">27.319</div>
                  <div className="text-black-50 small">(8%)</div>
                </div>
                <ProgressBar
                  className="progress-thin"
                  variant="success"
                  now={8}
                />
              </div>
            </div>
          </div>

          <br />
        </Card.Body>
      </Card>
    </div>
  </div>
);
