import { useAuth } from "../../Provider/context/Auth";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/system";

const style = {
  border: "black solid 2px",
  borderRadius: "8px",
  padding: "20px",
  backgroundColor: "white",
};

const Dashboard = () => {
  const { Logout } = useAuth();
  return (
    <>
      <Box sx={style}>
        <Button variant="outlined" onClick={Logout}>
          Logout
        </Button>
      </Box>
    </>
  );
};

export default Dashboard;
