import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, CardContent, Skeleton, Stack, Typography } from "@mui/material";
import { getUserDetails } from "../Data/Data";
import { UserDetail } from "../Interface";
import { defaultUserDetails } from "../Constant";
import ReplayIcon from "@mui/icons-material/Replay";

function Home() {
  const [userDetails, setUserDetails] = useState<UserDetail>(defaultUserDetails);
  const fetchFromStorage: UserDetail = JSON.parse(localStorage.getItem("userDetails") ?? "");
  function refreshUser() {
    getUserDetails().then((data: UserDetail) => {
      if (data) {
        setUserDetails(data);
        localStorage.setItem("userDetails", JSON.stringify(data));
      }
    });
  }

  useEffect(() => {
    if (fetchFromStorage.firstName) {
      setUserDetails(fetchFromStorage);
    } else refreshUser();
  }, []);

  return (
    <>
      <Typography fontWeight={600} fontSize="40px" color="#ffffff" textAlign="center">
        EastVantage Assignment
      </Typography>
      <Stack width="100vw" height="600px" alignItems="center">
        {userDetails.firstName ? (
          <>
            <Card
              sx={{
                width: "600px",
                height: "500px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "20px 0",
                backgroundColor: "#101418",
              }}
            >
              <Avatar
                sx={{ height: "400px", width: "400px" }}
                alt="profile"
                src={userDetails.image}
              />
              <CardContent>
                <Typography
                  fontWeight={600}
                  gutterBottom
                  variant="h5"
                  component="div"
                  color="#ffffff"
                >
                  {userDetails.title + " " + userDetails.firstName + " " + userDetails.lastName}
                </Typography>
                <Typography variant="body2" color="#ffffff">
                  {userDetails.email}
                </Typography>
              </CardContent>
            </Card>
            <Button
              variant="contained"
              startIcon={<ReplayIcon />}
              onClick={() => {
                refreshUser();
              }}
            >
              Refresh User
            </Button>
          </>
        ) : (
          <Skeleton variant="rectangular" width="600px" height="500px" />
        )}
      </Stack>
    </>
  );
}

export default Home;
