import * as yup from "yup";
import { Box, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Provider/context/Auth";

const style = {
  border: "black solid 2px",
  borderRadius: "8px",
  padding: "20px",
  width: 400,
  height: "60vh",
  backgroundColor: "white",
  form: {
    height: "80%",
    display: "flex",
    flexDirection: "column" as "column",
    alignItems: "stretch",
    justifyContent: "space-evenly",
  },
};

export interface UserData {
  email: string;
  password: string;
}

export const Login = () => {
  console.log(useAuth());
  const { signIn } = useAuth();

  const personSchema = yup.object({
    email: yup.string().nullable().notRequired().email(),
    password: yup.string().nullable().notRequired(),
  });

  const { register, handleSubmit } = useForm<UserData>({
    resolver: yupResolver(personSchema),
  });

  const handleButton = (data: UserData) => {
    signIn(data);
  };

  return (
    <Box sx={style}>
      <form onSubmit={handleSubmit(handleButton)}>
        <TextField placeholder="" {...register("email")} />
        <TextField type="password" placeholder="" {...register("password")} />
        <Button variant="outlined" color="secondary" type="submit">
          Entrar
        </Button>
      </form>
    </Box>
  );
};
