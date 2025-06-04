import React from "react";
import styles from "./index.module.css";
import Container from "../../ui/Container";
import ReachOut from "../../components/ReachOut";
import SectionTitle from "../../shared/SectionTitle";
import ContactFrom from "../../components/ContactFrom";
const Contact = () => {
  return (
    <>
      <section className={styles.section_contact}>
        <Container>
          <ReachOut />
        </Container>
      </section>
      <section className={styles.section_title}>
        <Container>
          <div className={styles.row}>
            <SectionTitle
              title="Contact Us"
              to="/home"
              linkName="Home"
              name="Contact Us"
            />
          </div>
        </Container>
      </section>
      <section className={styles.section_form}>
        <Container>
          <ContactFrom />
        </Container>
      </section>
    </>
  );
};

export default Contact;
