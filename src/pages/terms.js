import React from "react"
import SEO from "../components/seo"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  float: {
    position: "fixed",
    top: 100,
    right: 30,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}))

const TermsPage = () => {
  const classes = useStyles()

  return (
    <>
      <SEO title="Terms and Condition" />
      <h1>Terms and Conditions</h1>
      <p>
        Published by:
        <br />
        SEAMEO SEN
        <br />
        Level 2, Kompleks Anjung Hikmah IPG
        <br />
        Kampus Perempuan Melayu
        <br />
        Jalan Durian Daun
        <br />
        75400 Melaka MALAYSIA
        <br />
        Tel: +606-2818242
        <br />
        Fax: +606-2820187
        <br />
      </p>
      <p>
        All rights reserved. No part of this publication may be reproduced,
        stored in a retrieval system or transmitted in any form or by any means,
        electronic, mechanical, photocopying, recording or otherwise without
        either the prior written permission of the publisher. Request for
        permission should be addressed in writing to SEAMEO SEN.
      </p>
      <div className={classes.float}>
        <a
          href="https://www.trendcounter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://www.trendcounter.com/w/track/04b9173500.png"
            alt="Web Analytics"
          />
        </a>
      </div>
    </>
  )
}

export default TermsPage
