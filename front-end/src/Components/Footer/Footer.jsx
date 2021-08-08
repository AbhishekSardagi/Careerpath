import React from "react";

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Lower,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box style={{ width: "100%" }}>
      <Container>
        <Row>
          <Column>
            <Heading>ABOUT</Heading>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
          </Column>
          <Column>
            <Heading>HELP</Heading>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Complain </FooterLink>
          </Column>
          <Column>
            <Heading>POLICY</Heading>
            <FooterLink href="#">Terms and Condition</FooterLink>
            <FooterLink href="#">Security</FooterLink>
            <FooterLink href="#">Privacy</FooterLink>
          </Column>
          <Column>
            <Heading>SOCIAL</Heading>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">Instagram </FooterLink>
            <FooterLink href="#">YouTube </FooterLink>
          </Column>
          <Column>
            <Heading>Mail Us:</Heading>
            <FooterLink href="#">careerpath@careerpath.com</FooterLink>
          </Column>
          <Column>
            <Heading>Registered Office Address:</Heading>
            <FooterLink href="#">
              CareerPath Privited Limited, Near Mohanpur Road Silchar, Guwahati
              Assam
            </FooterLink>
          </Column>
        </Row>
      </Container>

      <Lower>© 2021 careerpath.com </Lower>
    </Box>
  );
};
export { Footer };
