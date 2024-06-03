import React, { useState } from "react";
import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Text,
  TextInput,
  Button,
} from "@mantine/core";
// import { LockClosedIcon } from "@heroicons/react/solid";
import Link from "next/link";

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
  },
}));

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { classes } = useStyles();

  const handleLogin = (event) => {
    event.preventDefault();
    if (username && password) {
      onLogin(username, password);
    } else {
      setError("Please enter both username and password.");
    }
  };

  return (
    <Container className={classes.container}>
      <form className={classes.form} onSubmit={handleLogin}>
        <Text
          align="center"
          size="xl"
          weight={700}
          style={{ marginBottom: 20 }}
        >
          Login
        </Text>
        {error && <Text color="red">{error}</Text>}
        <TextInput
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          //   icon={<LockClosedIcon />}
          required
          style={{ marginBottom: 10 }}
        />
        <TextInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          //   icon={<LockClosedIcon />}
          required
          style={{ marginBottom: 10 }}
        />
        <Button type="submit" fullWidth variant="filled" color="blue">
          Login
        </Button>

        <Button fullWidth variant="ghost" size="sm" asChild>
          <Link href="/signup">Don&apos;t have an account ? Register Here</Link>
        </Button>

        <Button fullWidth variant="ghost" size="sm" asChild>
          <Link href="/create">
            Want to try Invoice generation directly ? Click Here
          </Link>
        </Button>
      </form>
    </Container>
  );
};

export default Login;
