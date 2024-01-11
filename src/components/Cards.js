import React from "react";
import { Stack, Card, Typography, MobileStepper, Box } from "@mui/material";

import Greed from "../assets/greed.png";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import VerifiedIcon from "@mui/icons-material/Verified";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function createTrendingListData(id, imgUrl, name, percentage, value) {
  return { id, imgUrl, name, percentage, value };
}

function createtopCommunityAccountsData(imgUrl, name, nickName) {
  return { imgUrl, name, nickName };
}

const trendingList = [
  createTrendingListData(
    1,
    "https://s2.coinmarketcap.com/static/img/coins/64x64/28933.png",
    "Xai XAI",
    "9.08%",
    "negative"
  ),
  createTrendingListData(
    2,
    "https://s2.coinmarketcap.com/static/img/coins/64x64/5804.png",
    "DeFiChain DFI",
    "0.99%",
    "positive"
  ),
  createTrendingListData(
    3,
    "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    "Eclair",
    "1.42%",
    "negative"
  ),
];

const topCommunityAccounts = [
  createtopCommunityAccountsData(
    "https://s3.coinmarketcap.com/static-gravity/image/d05bef4d18a54ddd9288671d00d985d1.png",
    "Watcher.Guru",
    "WatcherGuru"
  ),
  createtopCommunityAccountsData(
    "https://s3.coinmarketcap.com/static-gravity/image/b3c7a4cf55104a859a5a2fb20fe1bb2a.jpg",
    "BITCOINLFG",
    "bitcoinlfgo"
  ),
  createtopCommunityAccountsData(
    "https://s3.coinmarketcap.com/static/img/portraits/6302f191e4fba87c6424d7b2.png",
    "Satoshi_Club",
    "Satoshi_Club"
  ),
];

const Cards = () => {
  return (
    <Stack
      justifyContent="space-between"
      alignItems="flex-start"
      direction={{ xs: "column", sm: "row" }}
      gap={2}
      sx={{
        marginBottom: "24px",
      }}
    >
      <Card
        sx={{
          width: "100%",
          height: "160px",
          padding: "16px",
          borderRadius: "8px",
          boxShadow:
            "rgba(88, 102, 126, 0.08) 0px 4px 24px, rgba(88, 102, 126, 0.12) 0px 1px 2px",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack
            direction="row"
            alignItems="center"
            sx={{ paddingLeft: "9px" }}
          >
            <Box
              component="img"
              sx={{
                height: 20,
                width: 20,
                marginRight: "10px",
              }}
              alt="Trending"
              src="https://s2.coinmarketcap.com/static/cloud/img/TrendingIcon.png?_=74aa2c2"
            />
            <Typography variant="body1" fontWeight="bold">
              Trending
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" sx={{ color: "#3861FB" }}>
            <Typography variant="caption" fontWeight="bold">
              More
            </Typography>
            <NavigateNextRoundedIcon
              fontWeight="bold"
              sx={{ height: "16px", width: "16px" }}
            />
          </Stack>
        </Stack>
        {trendingList.map(trendingItem => (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ paddingLeft: "9px" }}
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ height: "40px" }}
            >
              <Typography variant="caption">{trendingItem.id}</Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Box
                  component="img"
                  sx={{
                    height: 24,
                    width: 24,
                    borderRadius: "50%",
                  }}
                  alt={trendingItem.name}
                  src={trendingItem.imgUrl}
                />
                <Typography variant="caption" fontWeight="bold">
                  {trendingItem.name}
                </Typography>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              {trendingItem.value === "positive" ? (
                <ArrowDropUpIcon sx={{ color: "#16c784" }} />
              ) : (
                <ArrowDropDownIcon sx={{ color: "#ea3943" }} />
              )}
              <Typography
                variant="caption"
                sx={{
                  color:
                    trendingItem.value === "positive" ? "#16c784" : "#ea3943",
                }}
              >
                {trendingItem.percentage}
              </Typography>
            </Stack>
          </Stack>
        ))}
        <MobileStepper
          variant="dots"
          steps={2}
          position="static"
          sx={{ justifyContent: "center", padding: "0" }}
        />
      </Card>
      <Card
        sx={{
          width: "100%",
          height: "160px",
          padding: "16px",
          borderRadius: "8px",
          boxShadow:
            "rgba(88, 102, 126, 0.08) 0px 4px 24px, rgba(88, 102, 126, 0.12) 0px 1px 2px",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center">
            <Typography
              variant="body1"
              sx={{
                height: 22,
                width: 20,
                marginRight: "5px",
              }}
            >
              ⭐️
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              Top Community Accounts
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" sx={{ color: "#3861FB" }}>
            <Typography variant="caption" fontWeight="bold">
              More
            </Typography>
            <NavigateNextRoundedIcon
              fontWeight="bold"
              sx={{ height: "16px", width: "16px" }}
            />
          </Stack>
        </Stack>
        {topCommunityAccounts.map(account => (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ height: "40px" }}
            >
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <Box
                  component="img"
                  sx={{
                    height: 24,
                    width: 24,
                    borderRadius: "50%",
                    marginRight: "7px",
                  }}
                  alt={account.name}
                  src={account.imgUrl}
                />
                <Typography variant="caption" fontWeight="bold">
                  {account.name}
                </Typography>
                <VerifiedIcon
                  sx={{
                    height: 15,
                    width: 15,
                    color: "#3861FB",
                  }}
                />
                <Typography variant="caption">@{account.nickName}</Typography>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="caption">{account.percentage}</Typography>
            </Stack>
          </Stack>
        ))}
        <MobileStepper
          variant="dots"
          steps={3}
          position="static"
          sx={{ justifyContent: "center", padding: "0" }}
        />
      </Card>
      <Card
        sx={{
          width: "100%",
          padding: "16px",
          borderRadius: "8px",
          height: "160px",
          boxShadow:
            "rgba(88, 102, 126, 0.08) 0px 4px 24px, rgba(88, 102, 126, 0.12) 0px 1px 2px",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center">
            <Typography variant="body1" fontWeight="bold">
              Fear & Greed Index
            </Typography>
            <InfoOutlinedIcon
              sx={{
                height: 22,
                width: 20,
              }}
            />
          </Stack>
          <Stack direction="row" alignItems="center" sx={{ color: "#3861FB" }}>
            <Typography variant="caption" fontWeight="bold">
              More
            </Typography>
            <NavigateNextRoundedIcon
              fontWeight="bold"
              sx={{ height: "16px", width: "16px" }}
            />
          </Stack>
        </Stack>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ paddingTop: "26px" }}
        >
          <Box
            component="img"
            alt="Greed"
            src={Greed}
            sx={{
              height: 89,
            }}
          />
        </Stack>
      </Card>
    </Stack>
  );
};

export default Cards;
