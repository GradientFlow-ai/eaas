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
import React from "react";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Tooltip,
  Filler,
);

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const DataChart = () => (
  <Card className="mb-4">
    <Card.Body>
      <div className="d-flex justify-content-between">
        <div>
          <h4 className="mb-0">Traffic</h4>
          <div className="small text-black-50">January - July 2021</div>
        </div>
        <div className="d-none d-md-block">
          <ButtonGroup aria-label="Toolbar with buttons" className="mx-3">
            <input
              className="btn-check"
              id="option1"
              type="radio"
              name="options"
              autoComplete="off"
            />
            <label className="btn btn-outline-secondary" htmlFor="option1">
              Day
            </label>
            <input
              className="btn-check"
              id="option2"
              type="radio"
              name="options"
              autoComplete="off"
              defaultChecked
            />
            <label
              className="btn btn-outline-secondary active"
              htmlFor="option2"
            >
              Month
            </label>
            <input
              className="btn-check"
              id="option3"
              type="radio"
              name="options"
              autoComplete="off"
            />
            <label className="btn btn-outline-secondary" htmlFor="option3">
              Year
            </label>
          </ButtonGroup>
          <Button variant="primary">
            <FontAwesomeIcon icon={faDownload} fixedWidth />
          </Button>
        </div>
      </div>
      <div
        style={{
          height: "300px",
          marginTop: "40px",
        }}
      >
        <Line
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
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                borderColor: "rgba(13, 202, 240, 1)",
                pointHoverBackgroundColor: "#fff",
                borderWidth: 2,
                data: [
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                ],
                fill: true,
              },
              {
                label: "My Second dataset",
                borderColor: "rgba(25, 135, 84, 1)",
                pointHoverBackgroundColor: "#fff",
                borderWidth: 2,
                data: [
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                  random(50, 200),
                ],
              },
              {
                label: "My Third dataset",
                borderColor: "rgba(220, 53, 69, 1)",
                pointHoverBackgroundColor: "#fff",
                borderWidth: 1,
                borderDash: [8, 5],
                data: [65, 65, 65, 65, 65, 65, 65],
              },
            ],
          }}
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
                  drawOnChartArea: false,
                },
              },
              y: {
                beginAtZero: true,
                max: 250,
                ticks: {
                  maxTicksLimit: 5,
                  stepSize: Math.ceil(250 / 5),
                },
              },
            },
            elements: {
              line: {
                tension: 0.4,
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
              },
            },
          }}
        />
      </div>
    </Card.Body>
    <Card.Footer>
      <div className="row row-cols-1 row-cols-md-5 text-center">
        <div className="col mb-sm-2 mb-0">
          <div className="text-black-50">Visits</div>
          <div className="fw-semibold">29.703 Users (40%)</div>
          <ProgressBar
            className="progress-thin mt-2"
            variant="success"
            now={40}
          />
        </div>
        <div className="col mb-sm-2 mb-0">
          <div className="text-black-50">Unique</div>
          <div className="fw-semibold">24.093 Users (20%)</div>
          <ProgressBar className="progress-thin mt-2" variant="info" now={20} />
        </div>
        <div className="col mb-sm-2 mb-0">
          <div className="text-black-50">Page views</div>
          <div className="fw-semibold">78.706 Views (60%)</div>
          <ProgressBar
            className="progress-thin mt-2"
            variant="warning"
            now={60}
          />
        </div>
        <div className="col mb-sm-2 mb-0">
          <div className="text-black-50">New Users</div>
          <div className="fw-semibold">22.123 Users (80%)</div>
          <ProgressBar
            className="progress-thin mt-2"
            variant="danger"
            now={80}
          />
        </div>
        <div className="col mb-sm-2 mb-0">
          <div className="text-black-50">Bounce Rate</div>
          <div className="fw-semibold">40.15%</div>
          <ProgressBar
            className="progress-thin mt-2"
            variant="primary"
            now={40}
          />
        </div>
      </div>
    </Card.Footer>
  </Card>
);
