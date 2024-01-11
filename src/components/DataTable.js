import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { visuallyHidden } from "@mui/utils";
import { Stack, Typography } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

import Statistics from "../assets/statistics.png";

function createData(
  id,
  imageUrl,
  name,
  abbreviation,
  price,
  lastHour,
  lastDay,
  lastWeek,
  marketCap,
  volume,
  volume2,
  circulatingSupply
) {
  return {
    id,
    imageUrl,
    name,
    abbreviation,
    price,
    lastHour,
    lastDay,
    lastWeek,
    marketCap,
    volume,
    volume2,
    circulatingSupply,
  };
}

const rows = [
  createData(
    1,
    "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    "Bitcoin",
    "BTC",
    "$48,436.22",
    "2.49%",
    "7.87%",
    "10.93%",
    "$949,141,716,051",
    "$56,857,828,299",
    "1,201,916 BTC",
    "19,595,600 BTC"
  ),
  createData(
    2,
    "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    "Ethereum",
    "ETH",
    "$2,661.93",
    "0.71%",
    "11.64%",
    "17.47%",
    "$319,917,037,417",
    "$31,548,463,035",
    "11,950,831 ETH",
    "120,182, 462 ETH"
  ),
  createData(
    3,
    "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
    "Tether",
    "USDT",
    "$1.00",
    "0.05%",
    "0.04%",
    "0.01%",
    "$94,685,899,614",
    "$94,639,795,394",
    "94,601,701,252 USDT",
    "94,619,119,046 USDT"
  ),
  createData(
    4,
    "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    "BNB",
    "BNB",
    "$315.18",
    "0.29%",
    "7.82%",
    "1.95%",
    "$47,809,792,129",
    "$$1,483,561,926",
    "4,692,249 BNB",
    "151,690,263 BNB"
  ),
  createData(
    5,
    "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
    "Solana",
    "SOL",
    "$106.29",
    "1.00%",
    "14.65%",
    "4.23%",
    "$45,936,552,213",
    "$5,293,800,177",
    "49,808,305 SOL",
    "432,193,825 SOL"
  ),
  createData(
    6,
    "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
    "XRP",
    "XRP",
    "$0.29%",
    "11.07%",
    "5.56%",
    "$33,421,803,168",
    "$2,828,928,238",
    "$2,828,928,238",
    "4,575,854,772 XRP",
    "54,210,437,480 XRP"
  ),
  createData(
    7,
    "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
    "USDC",
    "USDC",
    "$0.9998",
    "0.02%",
    "0.04%",
    "0.04%",
    "$25,243,779,306",
    "$11,157,440,620",
    "11,154,622,601 USDC",
    "25,235,503928 USD"
  ),
  createData(
    8,
    "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
    "Cardano",
    "ADA",
    "$0.6029",
    "0.03%",
    "21.32%",
    "6.13%",
    "$21,332,474,173",
    "$1,488,456,381",
    "2,432,256,130 ADA",
    "35,385,690,725 ADA"
  ),
  createData(
    9,
    "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png",
    "Avalanche",
    "AVAX",
    "$41.59",
    "4.09%",
    "22.83%",
    "10.02%",
    "$15,249,174,330",
    "$1,430,510,601",
    "35,751,267 AVAX",
    "366,630,427 AVAX"
  ),
  createData(
    10,
    "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
    "Dogecoin",
    "DOGE",
    "$0.08415",
    "0.03%",
    "$13.26%",
    "4.08%",
    "$12,474,263,377",
    "$941,609,686",
    "10,941,651,934 DOGE",
    "142,608,616,384 DOGE"
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "#",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "1h %",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "24h %",
  },
  {
    id: "7d",
    numeric: true,
    disablePadding: false,
    label: "7d %",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Market Cap",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Volume(24h)",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Circulating Supply",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Last 7 Days",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {headCells.map(headCell => (
          <TableCell
            sx={{ fontSize: "12px", fontWeight: "bold" }}
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        icon={<StarBorderIcon />}
                        checkedIcon={<StarIcon />}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row" padding="none">
                      {row.id}
                    </TableCell>
                    <TableCell align="left">
                      <Stack direction="row">
                        <Box
                          component="img"
                          sx={{
                            height: 20,
                            width: 20,
                            marginRight: "5px",
                          }}
                          alt="Trending"
                          src={row.imageUrl}
                        />

                        <Typography variant="subtitle2" fontWeight="bold">
                          {row.name}
                        </Typography>
                        <Typography variant="subtitle2" ml={1}>
                          {row.abbreviation}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="subtitle2" fontWeight="bold">
                        {row.price}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Stack direction="row" alignItems="center">
                        <ArrowDropDownIcon sx={{ color: "#ea3943" }} />
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#ea3943",
                          }}
                        >
                          {row.lastHour}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      <Stack direction="row" alignItems="center">
                        <ArrowDropDownIcon sx={{ color: "#ea3943" }} />
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#ea3943",
                          }}
                        >
                          {row.lastDay}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      <Stack direction="row" alignItems="center">
                        <ArrowDropDownIcon sx={{ color: "#ea3943" }} />
                        <Typography
                          variant="caption"
                          sx={{
                            color: "#ea3943",
                          }}
                        >
                          {row.lastWeek}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      <Typography variant="caption">{row.marketCap}</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Stack direction="column" alignItems="right">
                        <Typography variant="caption">{row.volume}</Typography>
                        <Typography variant="caption">{row.volume2}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">{row.circulatingSupply}</TableCell>
                    <TableCell align="right">
                      <Stack justifyContent="center" alignItems="center">
                        <Box
                          component="img"
                          alt="statistics"
                          src={Statistics}
                          sx={{
                            height: 53,
                          }}
                        />
                      </Stack>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
        />
      </Paper>
    </Box>
  );
}
