import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { Card, Dropdown } from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";

const randomCharts = () => (
  <div className="row">
    <div className="col-sm-6 col-lg-3">
      <Card bg="primary" text="white" className="mb-4">
        <Card.Body className="d-flex justify-content-between align-items-start pb-0">
          <div>
            <div className="fs-4 fw-semibold">
              26K
              <span className="fs-6 ms-2 fw-normal">
                (-12.4%
                <FontAwesomeIcon icon={faArrowDown} fixedWidth />)
              </span>
            </div>
            <div>Users</div>
          </div>
          <Dropdown align="end">
            <Dropdown.Toggle
              as="button"
              bsPrefix="btn"
              className="btn-link rounded-0 p-0 text-white shadow-none"
              id="dropdown-chart1"
            >
              <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
        <div className="mx-3 mt-3" style={{ height: "70px" }}>
          <Line
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  min: 30,
                  max: 89,
                  display: false,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
              elements: {
                line: {
                  borderWidth: 1,
                  tension: 0.4,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }}
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
              ],
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: "transparent",
                  borderColor: "rgba(255,255,255,.55)",
                  data: [65, 59, 84, 84, 51, 55, 40],
                },
              ],
            }}
          />
        </div>
      </Card>
    </div>

    <div className="col-sm-6 col-lg-3">
      <Card bg="info" text="white" className="mb-4">
        <Card.Body className="d-flex justify-content-between align-items-start pb-0">
          <div>
            <div className="fs-4 fw-semibold">
              $6.200
              <span className="fs-6 ms-2 fw-normal">
                (40.9%
                <FontAwesomeIcon icon={faArrowUp} fixedWidth />)
              </span>
            </div>
            <div>Income</div>
          </div>
          <Dropdown align="end">
            <Dropdown.Toggle
              as="button"
              bsPrefix="btn"
              className="btn-link rounded-0 p-0 text-white shadow-none"
              id="dropdown-chart2"
            >
              <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
        <div className="mx-3 mt-3" style={{ height: "70px" }}>
          <Line
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  min: -9,
                  max: 39,
                  display: false,
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
              elements: {
                line: {
                  borderWidth: 1,
                },
                point: {
                  radius: 4,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }}
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
              ],
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: "transparent",
                  borderColor: "rgba(255,255,255,.55)",
                  data: [1, 18, 9, 17, 34, 22, 11],
                },
              ],
            }}
          />
        </div>
      </Card>
    </div>

    <div className="col-sm-6 col-lg-3">
      <Card bg="warning" text="white" className="mb-4">
        <Card.Body className="d-flex justify-content-between align-items-start pb-0">
          <div>
            <div className="fs-4 fw-semibold">
              2.49%
              <span className="fs-6 ms-2 fw-normal">
                (84.7%
                <FontAwesomeIcon icon={faArrowUp} fixedWidth />)
              </span>
            </div>
            <div>Conversion Rate</div>
          </div>
          <Dropdown align="end">
            <Dropdown.Toggle
              as="button"
              bsPrefix="btn"
              className="btn-link rounded-0 p-0 text-white shadow-none"
              id="dropdown-chart3"
            >
              <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
        <div className="mx-3 mt-3" style={{ height: "70px" }}>
          <Line
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
              scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                },
              },
              elements: {
                line: {
                  borderWidth: 2,
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                },
              },
            }}
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
              ],
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: "rgba(255,255,255,.2)",
                  borderColor: "rgba(255,255,255,.55)",
                  data: [78, 81, 80, 45, 34, 12, 40],
                  fill: true,
                },
              ],
            }}
          />
        </div>
      </Card>
    </div>

    <div className="col-sm-6 col-lg-3">
      <Card bg="danger" text="white" className="mb-4">
        <Card.Body className="d-flex justify-content-between align-items-start pb-0">
          <div>
            <div className="fs-4 fw-semibold">
              44K
              <span className="fs-6 ms-2 fw-normal">
                (-23.6%
                <FontAwesomeIcon icon={faArrowDown} fixedWidth />)
              </span>
            </div>
            <div>Sessions</div>
          </div>
          <Dropdown align="end">
            <Dropdown.Toggle
              as="button"
              bsPrefix="btn"
              className="btn-link rounded-0 p-0 text-white shadow-none"
              id="dropdown-chart4"
            >
              <FontAwesomeIcon fixedWidth icon={faEllipsisVertical} />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
        <div className="mx-3 mt-3" style={{ height: "70px" }}>
          <Bar
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    display: false,
                    drawTicks: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    display: false,
                    drawTicks: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
              },
            }}
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
                "January",
                "February",
                "March",
                "April",
              ],
              datasets: [
                {
                  label: "My First dataset",
                  backgroundColor: "rgba(255,255,255,.2)",
                  borderColor: "rgba(255,255,255,.55)",
                  data: [
                    78,
                    81,
                    80,
                    45,
                    34,
                    12,
                    40,
                    85,
                    65,
                    23,
                    12,
                    98,
                    34,
                    84,
                    67,
                    82,
                  ],
                  barPercentage: 0.6,
                },
              ],
            }}
          />
        </div>
      </Card>
    </div>
  </div>
);
