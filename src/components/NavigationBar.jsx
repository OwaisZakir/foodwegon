import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavigationBar() {
  return (
    <>
      <Navbar key={"lg"} expand={"lg"} className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">
            <span className="logo me-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="30"
                viewBox="0 0 28 30"
                fill="none"
              >
                <mask
                  id="mask0"
                  mask-type="alpha"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="28"
                  height="30"
                >
                  <path
                    d="M8.89415 26.3647C8.89415 28.366 7.27184 29.9883 5.27062 29.9883C3.2694 29.9883 1.64709 28.366 1.64709 26.3647C1.64709 24.3635 3.2694 22.7412 5.27062 22.7412C7.27184 22.7412 8.89415 24.3635 8.89415 26.3647Z"
                    fill="#C4C4C4"
                  />
                  <path
                    d="M26.3531 26.3647C26.3531 28.366 24.7308 29.9883 22.7296 29.9883C20.7284 29.9883 19.1061 28.366 19.1061 26.3647C19.1061 24.3635 20.7284 22.7412 22.7296 22.7412C24.7308 22.7412 26.3531 24.3635 26.3531 26.3647Z"
                    fill="#C4C4C4"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.1913 23.7058C25.4382 23.9345 25.4094 24.3209 25.1508 24.5363C23.7802 25.6779 22.0174 26.3647 20.0941 26.3647H19.7649C19.401 26.3647 19.0998 26.0671 19.1652 25.7091C19.4737 24.0209 20.9522 22.7412 22.7296 22.7412C23.68 22.7412 24.545 23.1071 25.1913 23.7058ZM27.0987 22.1282C26.8986 22.5093 26.3844 22.543 26.0504 22.2717C25.144 21.5354 23.9883 21.0942 22.7296 21.0942C20.0414 21.0942 17.8233 23.1066 17.4996 25.7072C17.4547 26.0682 17.164 26.3647 16.8002 26.3647H11.2C10.8361 26.3647 10.5455 26.0682 10.5006 25.7072C10.1769 23.1066 7.95876 21.0942 5.27059 21.0942C4.0118 21.0942 2.85608 21.5354 1.94969 22.2718C1.61563 22.5431 1.10145 22.5094 0.901402 22.1283C0.325709 21.0317 0 19.7833 0 18.4588V16.8116C0 16.4478 0.294965 16.1528 0.658823 16.1528H27.3412C27.705 16.1528 28 16.4478 28 16.8116V18.4588C28 19.7832 27.6743 21.0316 27.0987 22.1282ZM28 13.8469C28 14.2108 27.705 14.5057 27.3412 14.5057H0.658824C0.294965 14.5057 0 14.2108 0 13.8469V9.89402C0 9.53016 0.294965 9.2352 0.658823 9.2352H27.3412C27.705 9.2352 28 9.53016 28 9.89402V13.8469ZM7.90588 0.0117188C3.883 0.0117188 0.561907 3.0164 0.0643695 6.904C0.0168356 7.27541 0.318678 7.58814 0.693122 7.58814H27.3069C27.6813 7.58814 27.9832 7.27541 27.9356 6.904C27.4381 3.0164 24.117 0.0117188 20.0941 0.0117188H7.90588ZM5.27059 22.7412C7.04795 22.7412 8.52644 24.0209 8.83496 25.7091C8.90037 26.0671 8.59914 26.3647 8.23528 26.3647H7.90588C5.98268 26.3647 4.21987 25.6779 2.84928 24.5364C2.59074 24.321 2.56193 23.9345 2.80878 23.7059C3.45509 23.1072 4.3201 22.7412 5.27059 22.7412Z"
                    fill="#C4C4C4"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <rect
                    x="-1.64709"
                    y="-2.29395"
                    width="33.6"
                    height="10.8706"
                    fill="url(#paint0_linear)"
                  />
                  <rect
                    x="-1.64709"
                    y="15.4941"
                    width="33.6"
                    height="16.4706"
                    fill="#FFA833"
                  />
                  <rect
                    x="-1.64709"
                    y="8.57666"
                    width="33.6"
                    height="7.24706"
                    rx="3.62353"
                    fill="#F17228"
                  />
                  <rect
                    x="-23.0587"
                    y="22.7412"
                    width="31.9529"
                    height="7.24706"
                    fill="#F58D00"
                  />
                  <rect
                    x="19.1061"
                    y="22.7412"
                    width="31.9529"
                    height="7.24706"
                    fill="#F58D00"
                  />
                  <ellipse
                    cx="8.11249"
                    cy="2.82316"
                    rx="1"
                    ry="0.5"
                    transform="rotate(-20.8548 8.11249 2.82316)"
                    fill="white"
                  />
                  <ellipse cx="14" cy="2.5" rx="1" ry="0.5" fill="white" />
                  <ellipse
                    cx="19.1176"
                    cy="2.91225"
                    rx="1"
                    ry="0.5"
                    transform="rotate(28.1155 19.1176 2.91225)"
                    fill="white"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="15"
                    y1="-0.5"
                    x2="15"
                    y2="17"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFD16D" />
                    <stop offset="1" stop-color="#FF7A00" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span>FoodWegon</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"lg"}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${"lg"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"lg"}`}>
                <span className="logo me-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="30"
                    viewBox="0 0 28 30"
                    fill="none"
                  >
                    <mask
                      id="mask0"
                      mask-type="alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="28"
                      height="30"
                    >
                      <path
                        d="M8.89415 26.3647C8.89415 28.366 7.27184 29.9883 5.27062 29.9883C3.2694 29.9883 1.64709 28.366 1.64709 26.3647C1.64709 24.3635 3.2694 22.7412 5.27062 22.7412C7.27184 22.7412 8.89415 24.3635 8.89415 26.3647Z"
                        fill="#C4C4C4"
                      />
                      <path
                        d="M26.3531 26.3647C26.3531 28.366 24.7308 29.9883 22.7296 29.9883C20.7284 29.9883 19.1061 28.366 19.1061 26.3647C19.1061 24.3635 20.7284 22.7412 22.7296 22.7412C24.7308 22.7412 26.3531 24.3635 26.3531 26.3647Z"
                        fill="#C4C4C4"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M25.1913 23.7058C25.4382 23.9345 25.4094 24.3209 25.1508 24.5363C23.7802 25.6779 22.0174 26.3647 20.0941 26.3647H19.7649C19.401 26.3647 19.0998 26.0671 19.1652 25.7091C19.4737 24.0209 20.9522 22.7412 22.7296 22.7412C23.68 22.7412 24.545 23.1071 25.1913 23.7058ZM27.0987 22.1282C26.8986 22.5093 26.3844 22.543 26.0504 22.2717C25.144 21.5354 23.9883 21.0942 22.7296 21.0942C20.0414 21.0942 17.8233 23.1066 17.4996 25.7072C17.4547 26.0682 17.164 26.3647 16.8002 26.3647H11.2C10.8361 26.3647 10.5455 26.0682 10.5006 25.7072C10.1769 23.1066 7.95876 21.0942 5.27059 21.0942C4.0118 21.0942 2.85608 21.5354 1.94969 22.2718C1.61563 22.5431 1.10145 22.5094 0.901402 22.1283C0.325709 21.0317 0 19.7833 0 18.4588V16.8116C0 16.4478 0.294965 16.1528 0.658823 16.1528H27.3412C27.705 16.1528 28 16.4478 28 16.8116V18.4588C28 19.7832 27.6743 21.0316 27.0987 22.1282ZM28 13.8469C28 14.2108 27.705 14.5057 27.3412 14.5057H0.658824C0.294965 14.5057 0 14.2108 0 13.8469V9.89402C0 9.53016 0.294965 9.2352 0.658823 9.2352H27.3412C27.705 9.2352 28 9.53016 28 9.89402V13.8469ZM7.90588 0.0117188C3.883 0.0117188 0.561907 3.0164 0.0643695 6.904C0.0168356 7.27541 0.318678 7.58814 0.693122 7.58814H27.3069C27.6813 7.58814 27.9832 7.27541 27.9356 6.904C27.4381 3.0164 24.117 0.0117188 20.0941 0.0117188H7.90588ZM5.27059 22.7412C7.04795 22.7412 8.52644 24.0209 8.83496 25.7091C8.90037 26.0671 8.59914 26.3647 8.23528 26.3647H7.90588C5.98268 26.3647 4.21987 25.6779 2.84928 24.5364C2.59074 24.321 2.56193 23.9345 2.80878 23.7059C3.45509 23.1072 4.3201 22.7412 5.27059 22.7412Z"
                        fill="#C4C4C4"
                      />
                    </mask>
                    <g mask="url(#mask0)">
                      <rect
                        x="-1.64709"
                        y="-2.29395"
                        width="33.6"
                        height="10.8706"
                        fill="url(#paint0_linear)"
                      />
                      <rect
                        x="-1.64709"
                        y="15.4941"
                        width="33.6"
                        height="16.4706"
                        fill="#FFA833"
                      />
                      <rect
                        x="-1.64709"
                        y="8.57666"
                        width="33.6"
                        height="7.24706"
                        rx="3.62353"
                        fill="#F17228"
                      />
                      <rect
                        x="-23.0587"
                        y="22.7412"
                        width="31.9529"
                        height="7.24706"
                        fill="#F58D00"
                      />
                      <rect
                        x="19.1061"
                        y="22.7412"
                        width="31.9529"
                        height="7.24706"
                        fill="#F58D00"
                      />
                      <ellipse
                        cx="8.11249"
                        cy="2.82316"
                        rx="1"
                        ry="0.5"
                        transform="rotate(-20.8548 8.11249 2.82316)"
                        fill="white"
                      />
                      <ellipse cx="14" cy="2.5" rx="1" ry="0.5" fill="white" />
                      <ellipse
                        cx="19.1176"
                        cy="2.91225"
                        rx="1"
                        ry="0.5"
                        transform="rotate(28.1155 19.1176 2.91225)"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="15"
                        y1="-0.5"
                        x2="15"
                        y2="17"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FFD16D" />
                        <stop offset="1" stop-color="#FF7A00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span>FoodWegon</span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${"lg"}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Login</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
