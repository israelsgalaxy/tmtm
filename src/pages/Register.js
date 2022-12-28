import { FormControl, InputLabel, Input, Button } from '@mui/material';

function SignUpForm() {
  function handleSubmit(event) {
    event.preventDefault();
    // Add code to handle form submission here
  }

  return (
    <form>
      <FormControl>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input id="email" type="email" />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" type="password" />
      </FormControl>

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Sign Up
      </Button>
    </form>
  );
}

export default SignUpForm;