import React from "react";
import img from "../asset/navimg.png";

function Navbar() {
  const navbarStyle = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="">
      <nav style={navbarStyle} className="navbar navbar-expand-lg nav-style">
        <a class="navbar-brand" href="#">
          <svg
            width="167"
            height="26"
            viewBox="0 0 167 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="27"
              y="-0.00012207"
              width="18.3846"
              height="18.3846"
              transform="rotate(45 27 -0.00012207)"
              fill="#211F50"
            />
            <rect
              x="13"
              y="-0.00012207"
              width="18.3846"
              height="18.3846"
              transform="rotate(45 13 -0.00012207)"
              fill="#E2A4EC"
            />
            <path
              d="M48.7498 7.47159V4.04545H63.5027V7.47159H58.2101V21.5H54.051V7.47159H48.7498ZM65.5631 21.5V4.04545H77.7335V7.47159H69.7818V11.0511H77.1114V14.4858H69.7818V18.0739H77.7335V21.5H65.5631ZM89.8102 9.27841C89.7534 8.65341 89.5006 8.16761 89.0517 7.82102C88.6085 7.46875 87.975 7.29261 87.1511 7.29261C86.6057 7.29261 86.1511 7.36364 85.7875 7.50568C85.4239 7.64773 85.1511 7.84375 84.9693 8.09375C84.7875 8.33807 84.6937 8.61932 84.6881 8.9375C84.6767 9.19886 84.7278 9.42898 84.8415 9.62784C84.9608 9.8267 85.1312 10.0028 85.3528 10.1562C85.5801 10.304 85.8528 10.4347 86.171 10.5483C86.4892 10.6619 86.8471 10.7614 87.2449 10.8466L88.7449 11.1875C89.6085 11.375 90.3699 11.625 91.029 11.9375C91.6937 12.25 92.2506 12.6222 92.6994 13.054C93.154 13.4858 93.4977 13.983 93.7307 14.5455C93.9636 15.108 94.0829 15.7386 94.0886 16.4375C94.0829 17.5398 93.8045 18.4858 93.2534 19.2756C92.7023 20.0653 91.9096 20.6705 90.8756 21.0909C89.8471 21.5114 88.6057 21.7216 87.1511 21.7216C85.6909 21.7216 84.4182 21.5028 83.3329 21.0653C82.2477 20.6278 81.404 19.9631 80.8017 19.071C80.1994 18.179 79.8898 17.0511 79.8727 15.6875H83.9125C83.9466 16.25 84.0971 16.7188 84.3642 17.0938C84.6312 17.4688 84.9977 17.7528 85.4636 17.946C85.9352 18.1392 86.4807 18.2358 87.1 18.2358C87.6682 18.2358 88.1511 18.1591 88.5489 18.0057C88.9523 17.8523 89.2619 17.6392 89.4778 17.3665C89.6937 17.0937 89.8045 16.7812 89.8102 16.429C89.8045 16.0994 89.7023 15.8182 89.5034 15.5852C89.3045 15.3466 88.9977 15.142 88.5829 14.9716C88.1739 14.7955 87.6511 14.6335 87.0148 14.4858L85.1909 14.0597C83.6795 13.7131 82.4892 13.1534 81.6199 12.3807C80.7506 11.6023 80.3187 10.5511 80.3244 9.22727C80.3187 8.14773 80.6085 7.2017 81.1937 6.3892C81.779 5.5767 82.5886 4.94318 83.6227 4.48864C84.6568 4.03409 85.8358 3.80682 87.1596 3.80682C88.5119 3.80682 89.6852 4.03693 90.6795 4.49716C91.6795 4.9517 92.4551 5.59091 93.0062 6.41477C93.5574 7.23864 93.8386 8.19318 93.85 9.27841H89.8102ZM95.6483 7.47159V4.04545H110.401V7.47159H105.109V21.5H100.949V7.47159H95.6483ZM121.393 21.5H116.859L122.748 4.04545H128.365L134.254 21.5H129.72L125.621 8.44318H125.484L121.393 21.5ZM120.788 14.6307H130.265V17.8352H120.788V14.6307ZM136.133 21.5V4.04545H143.344C144.65 4.04545 145.778 4.30114 146.727 4.8125C147.682 5.31818 148.417 6.02557 148.935 6.93466C149.452 7.83807 149.71 8.8892 149.71 10.0881C149.71 11.2926 149.446 12.3466 148.917 13.25C148.395 14.1477 147.648 14.8437 146.676 15.3381C145.704 15.8324 144.551 16.0795 143.216 16.0795H138.767V12.7557H142.432C143.068 12.7557 143.599 12.6449 144.025 12.4233C144.457 12.2017 144.784 11.892 145.006 11.4943C145.227 11.0909 145.338 10.6222 145.338 10.0881C145.338 9.54829 145.227 9.08239 145.006 8.69034C144.784 8.29261 144.457 7.9858 144.025 7.76989C143.594 7.55398 143.062 7.44602 142.432 7.44602H140.352V21.5H136.133ZM151.79 21.5V4.04545H159C160.307 4.04545 161.435 4.30114 162.383 4.8125C163.338 5.31818 164.074 6.02557 164.591 6.93466C165.108 7.83807 165.366 8.8892 165.366 10.0881C165.366 11.2926 165.102 12.3466 164.574 13.25C164.051 14.1477 163.304 14.8437 162.332 15.3381C161.361 15.8324 160.207 16.0795 158.872 16.0795H154.423V12.7557H158.088C158.724 12.7557 159.256 12.6449 159.682 12.4233C160.113 12.2017 160.44 11.892 160.662 11.4943C160.883 11.0909 160.994 10.6222 160.994 10.0881C160.994 9.54829 160.883 9.08239 160.662 8.69034C160.44 8.29261 160.113 7.9858 159.682 7.76989C159.25 7.55398 158.719 7.44602 158.088 7.44602H156.008V21.5H151.79Z"
              fill="black"
            />
          </svg>
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-5">
            <li class="nav-item active">
              <a className="nav-link text-dark mx-3 fs-6 fw-bold" href="#">
                SERVICES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3 fs-6 fw-bold text-dark" href="#">
                FEATURES
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-3 fs-6 fw-bold text-dark" href="#">
                DEMO
              </a>
            </li>
            <button
              class="btn dark-button fw-6 fs-bold text-dark"
              type="submit"
            >
              Activate dark mode
            </button>
          </ul>
        </div>
        <button class="btn login-button text-white mx-5" type="submit">
          LOGIN
        </button>

        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 10H38"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M2 19.5H38"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M2 29H38"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </nav>
    </div>
  );
}

export default Navbar;
