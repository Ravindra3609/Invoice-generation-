import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { createStyles, Container, Group, Button } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  },
  form: {
    maxWidth: 400,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    width: "100%",
    marginBottom: theme.spacing.lg,
  },
}));

const Home: NextPage = () => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <div>
      <Container className={classes.container}>
        <div className={classes.form}>
          <Link href="/create" passHref>
            <Button
              size="lg"
              component="a"
              variant={router.pathname === "/login" ? "filled" : "subtle"}
              className={classes.button}
            >
              Try Invoice Generation without login
            </Button>
          </Link>
          <Link href="/login" passHref>
            <Button
              size="lg"
              component="a"
              variant={router.pathname === "/login" ? "filled" : "subtle"}
              className={classes.button}
            >
              Login
            </Button>
          </Link>
          <Link href="/signup" passHref>
            <Button
              size="lg"
              component="a"
              variant={router.pathname === "/signup" ? "filled" : "subtle"}
              className={classes.button}
            >
              Register Here
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Home;
