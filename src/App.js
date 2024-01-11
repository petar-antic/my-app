import { Stack, Container, Typography, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";
import Cards from "./components/Cards";
import TableLinkArea from "./components/TableLinkArea";
import DataTable from "./components/DataTable";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 48,
  height: 24,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 3,
    "&.Mui-checked": {
      transform: "translateX(24px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#CFD6E4" : "#3861FB",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 18,
    height: 18,
    borderRadius: 9,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 24 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

function App() {
  return (
    <div className="App">
      <Container
        maxWidth={false}
        sx={{ maxWidth: "1402px", padding: "0, 16px", margin: "0, auto" }}
      >
        <Stack direction="row" justifyContent="space-between" spacing={2}>
          <Stack
            spacing={1}
            py="24px"
            sx={{
              marginBottom: "6px",
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Today's Cryptocurrency Prices by Market Cap
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              The global crypto market cap is $1.68T, a 2.03% decrease over the
              last day.
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} pt="32px">
            <Typography variant="body2" gutterBottom>
              Highlights
            </Typography>
            <AntSwitch
              defaultChecked
              inputProps={{ "aria-label": "ant design" }}
            />
          </Stack>
        </Stack>
        <Cards />
        <TableLinkArea />
        <DataTable />
      </Container>
    </div>
  );
}

export default App;
