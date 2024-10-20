import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";
const Testinomial = () => {
  return (
    <MDBContainer className="my-5">
      <MDBCarousel showControls>
        <MDBCarouselItem className="active text-center ">
          <MDBContainer
            fluid
            className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded"
          >
            <MDBRow className="d-flex justify-content-center">
              <MDBCol md="10">
                <MDBCard>
                  <MDBCardBody className="m-3">
                    <MDBRow>
                      <MDBCol
                        lg="4"
                        className="d-flex justify-content-center align-items-center mb-4 mb-lg-0"
                      >
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                          className="rounded-circle img-fluid shadow-1"
                          alt="woman avatar"
                          width="200"
                          height="200"
                        />
                      </MDBCol>
                      <MDBCol lg="8">
                        {" "}
                        <p className="text-muted fw-light mb-4">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Id quam sapiente molestiae numquam quas,
                          voluptates omnis nulla ea odio quia similique corrupti
                          magnam.
                        </p>
                        <p className="fw-bold lead mb-2">
                          <strong>Anna Smith</strong>
                        </p>
                        <p className="fw-bold text-muted mb-0">
                          Product manager
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBCarouselItem>
        <MDBCarouselItem className=" text-center ">
          <MDBContainer
            fluid
            className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded"
          >
            <MDBRow className="d-flex justify-content-center">
              <MDBCol md="10">
                <MDBCard>
                  <MDBCardBody className="m-3">
                    <MDBRow>
                      <MDBCol
                        lg="4"
                        className="d-flex justify-content-center align-items-center mb-4 mb-lg-0"
                      >
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                          className="rounded-circle img-fluid shadow-1"
                          alt="woman avatar"
                          width="200"
                          height="200"
                        />
                      </MDBCol>
                      <MDBCol lg="8">
                        <p className="text-muted fw-light mb-4">sameer</p>
                        <p className="fw-bold lead mb-2">
                          <strong>Anna Smith</strong>
                        </p>
                        <p className="fw-bold text-muted mb-0">
                          Product manager
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBCarouselItem>
        <MDBCarouselItem className=" text-center ">
          <MDBContainer
            fluid
            className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded"
          >
            <MDBRow className="d-flex justify-content-center">
              <MDBCol md="10">
                <MDBCard>
                  <MDBCardBody className="m-3">
                    <MDBRow>
                      <MDBCol
                        lg="4"
                        className="d-flex justify-content-center align-items-center mb-4 mb-lg-0"
                      >
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                          className="rounded-circle img-fluid shadow-1"
                          alt="woman avatar"
                          width="200"
                          height="200"
                        />
                      </MDBCol>
                      <MDBCol lg="8">
                        {" "}
                        <p className="text-muted fw-light mb-4">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Id quam sapiente molestiae numquam quas,
                          voluptates omnis nulla ea odio quia similique corrupti
                          magnam.
                        </p>
                        <p className="fw-bold lead mb-2">
                          <strong>Anna Smith</strong>
                        </p>
                        <p className="fw-bold text-muted mb-0">
                          Product manager
                        </p>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBCarouselItem>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Testinomial;
