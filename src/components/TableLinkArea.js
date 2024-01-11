import React from "react";
import { Button, ButtonGroup, Divider, Stack, Typography } from "@mui/material";

import AppsIcon from "@mui/icons-material/Apps";
import ListIcon from "@mui/icons-material/List";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TuneIcon from "@mui/icons-material/Tune";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import WindowIcon from "@mui/icons-material/Window";

const TableLinkArea = () => {
  return (
    <Stack direction="row" justifyContent="space-between" py={2}>
      <Stack direction="row" spacing={0.5}>
        <Button
          defaultChecked
          startIcon={
            <AppsIcon
              sx={{
                width: "20px",
                height: "20px",
              }}
            />
          }
          sx={{
            textTransform: "capitalize",
            fontSize: "12px",
            color: "#58667E",
            padding: "0 14px",
            borderRadius: "8px",
            height: "32px",
            "& .MuiButton-startIcon": { marginRight: "4px" },
            "&, &.MuiButton-checked": {
              color: "rgb(56, 97, 251)",
              backgroundColor: "rgb(240, 246, 255)",
            },
          }}
        >
          Cryptocurrencies
        </Button>
        <Button
          startIcon={
            <ListIcon
              sx={{
                width: "20px",
                height: "20px",
              }}
            />
          }
          sx={{
            textTransform: "capitalize",
            fontSize: "12px",
            color: "#58667E",
            padding: "0 14px",
            borderRadius: "8px",
            height: "32px",
            "& .MuiButton-startIcon": { marginRight: "4px" },
          }}
        >
          Categories
        </Button>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            height: "20px",
            alignSelf: "center",
            marginLeft: "12px !important",
            marginRight: "12px !important",
          }}
        />
        <Button
          sx={{
            textTransform: "capitalize",
            fontSize: "12px",
            color: "#58667E",
            padding: "0 14px",
            borderRadius: "8px",
            marginRight: "4px !important",
            height: "32px",
          }}
        >
          🔥 Solana Ecosystem
        </Button>
        <Button
          sx={{
            textTransform: "capitalize",
            fontSize: "12px",
            color: "#58667E",
            padding: "0 14px",
            borderRadius: "8px",
            marginRight: "4px !important",
            height: "32px",
          }}
        >
          🔥 BRC-20
        </Button>
        <Button
          sx={{
            textTransform: "capitalize",
            fontSize: "12px",
            color: "#58667E",
            padding: "0 14px",
            borderRadius: "8px",
            marginRight: "4px !important",
            height: "32px",
          }}
        >
          🔥 Gaming
        </Button>
        <Button
          sx={{
            textTransform: "capitalize",
            fontSize: "12px",
            color: "#58667E",
            padding: "0 14px",
            borderRadius: "8px",
            marginRight: "4px !important",
            height: "32px",
          }}
        >
          🔥 DePin
        </Button>
      </Stack>
      <Stack direction="row" spacing={0.5} alignItems="center">
        <Typography variant="caption">Show rows</Typography>
        <Button
          endIcon={
            <KeyboardArrowDownIcon
              sx={{
                width: "20px",
                height: "20px",
              }}
            />
          }
          sx={{
            textTransform: "capitalize",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#58667E",
            padding: "0 14px",
            borderRadius: "8px",
            height: "32px",
            backgroundColor: "rgb(239, 242, 245)",
            "& .MuiButton-endIcon": { marginLeft: "2px" },
          }}
        >
          100
        </Button>
        <Button
          startIcon={
            <TuneIcon
              sx={{
                width: "20px",
                height: "20px",
              }}
            />
          }
          sx={{
            textTransform: "capitalize",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#58667E",
            padding: "0 14px",
            borderRadius: "8px",
            height: "32px",
            backgroundColor: "rgb(239, 242, 245)",
            "& .MuiButton-startIcon": { marginRight: "2px" },
          }}
        >
          Filter
        </Button>
        <Button
          startIcon={
            <ViewColumnIcon
              sx={{
                width: "20px",
                height: "20px",
              }}
            />
          }
          sx={{
            textTransform: "capitalize",
            fontSize: "12px",
            fontWeight: "bold",
            color: "#58667E",
            padding: "0 14px",
            borderRadius: "8px",
            height: "32px",
            backgroundColor: "rgb(239, 242, 245)",
            "& .MuiButton-startIcon": { marginRight: "2px" },
          }}
        >
          Customize
        </Button>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button
            size="small"
            aria-label="select merge strategy"
            aria-haspopup="menu"
            sx={{
              textTransform: "capitalize",
              fontSize: "8px",
              fontWeight: "bold",
              color: "#58667E",
              borderRadius: "8px",
              height: "32px",
              backgroundColor: "rgb(239, 242, 245)",
            }}
          >
            <ViewHeadlineIcon height={0.5} width={0.5} />
          </Button>
          <Button
            size="small"
            aria-label="select merge strategy"
            aria-haspopup="menu"
            sx={{
              textTransform: "capitalize",
              fontSize: "8px",
              fontWeight: "bold",
              color: "#58667E",
              borderRadius: "8px",
              height: "32px",
              backgroundColor: "rgb(239, 242, 245)",
            }}
          >
            <WindowIcon />
          </Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
};

export default TableLinkArea;
