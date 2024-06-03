import React, { useState } from "react";
import {
  createStyles,
  Container,
  Text,
  TextInput,
  Button,
} from "@mantine/core";
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
    marginTop: theme.spacing.sm,
  },
}));

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const { classes } = useStyles();

  const handleSignup = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else if (username && email && password) {
      onSignup(username, email, password);
    } else {
      setError("Please fill out all fields.");
    }
  };

  return (
    <Container className={classes.container}>
      <form className={classes.form} onSubmit={handleSignup}>
        <Text
          align="center"
          size="xl"
          weight={700}
          style={{ marginBottom: 20 }}
        >
          Signup
        </Text>
        {error && <Text color="red">{error}</Text>}
        <TextInput
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          // icon={<UserIcon />}
          required
          style={{ marginBottom: 10 }}
        />
        <TextInput
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          // icon={<MailIcon />}
          required
          style={{ marginBottom: 10 }}
        />
        <TextInput
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          // icon={<LockClosedIcon />}
          required
          style={{ marginBottom: 10 }}
        />
        <TextInput
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          // icon={<LockClosedIcon />}
          required
          style={{ marginBottom: 10 }}
        />
        <Button type="submit" fullWidth variant="filled" color="blue">
          Signup
        </Button>

        <Button fullWidth variant="ghost" size="sm" asChild>
          <Link href="/login">Already have an account ? Login</Link>
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

export default Signup;
