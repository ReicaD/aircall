import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaArchive, FaPhone, FaPhoneSlash } from "react-icons/fa";
import axios from "axios";
import { faArchive } from "@fortawesome/free-solid-svg-icons";

const Card = styled.div`
  display: flex;
  // border: 2px solid #b6b6b4;
  margin: 10px;
  border-radius: 10px;
`;

const Details = styled.div`
  flex-grow: 1;
  //  border: 2px solid orange;
  padding-left: 15px;
  line-height: 6px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40px;
  //  border: 2px solid red;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  //  border: 2px solid green;
  width: 55px;
  padding-right: 10px;
`;

const Image = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;

function ActivityDetails({ logs, allCalls, archived }) {
  const [callDetails, setCallDetails] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get(
  //         "https://cerulean-marlin-wig.cyclic.app/activities"
  //       );
  //       console.log("data@", response.data);
  //       setCallDetails(response.data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
      {/* {console.log("calls@", logs)}/ */}
      {/* {logs.map((call) => { */}
      {/* return ( */}
      {/* logs.is_archived === true && ( */}
      {allCalls && (
        <>
          {/* {logs.is_archived === false && ( */}
            <Card key={logs.id}>
              {/* <button></button> */}
              <Icon>
                <FaArchive />
              </Icon>
              <Icon>
                {logs.call_type ? (
                  <FaPhone color="red" />
                ) : (
                  <FaPhone color="green" />
                )}
              </Icon>
              <Details>
                {!logs.via ? (
                  <p style={{ fontWeight: "bold" }}>Unknown Caller</p>
                ) : (
                  <p style={{ fontWeight: "bold" }}>{logs.via}</p>
                )}
                <p style={{ color: "#949494" }}>
                  missed call from <strong>{logs.from}</strong>
                </p>
              </Details>
              <Time>
                {" "}
                <Image src="./images/three-dots.png" alt="" />
                <p style={{ color: "#FF4500" }}>7:45am</p>
              </Time>
            </Card>
          {/* // )} */}
        </>
      )}

      {archived && (
        <>
          {logs.is_archived === true ? (
            <Card key={logs.id}>
              <p>Archived</p>
              <Icon>
                {logs.call_type ? (
                  <FaPhone color="red" />
                ) : (
                  <FaPhone color="green" />
                )}
              </Icon>
              <Details>
                {!logs.via ? (
                  <p style={{ fontWeight: "bold" }}>Unknown Caller</p>
                ) : (
                  <p style={{ fontWeight: "bold" }}>{logs.via}</p>
                )}
                <p style={{ color: "red" }}>
                  missed call from <strong>{logs.from}</strong>
                </p>
              </Details>
              <Time>
                {" "}
                <Image src="./images/three-dots.png" alt="" />
                <p style={{ color: "#FF4500" }}>7:45am</p>
              </Time>
            </Card>
          ) : (
            <p>No Archived Calls</p>
          )}
        </>
      )}
    </>
  );
}
{
  /* ) */
}

//
{
  /* // ) */
}
{
  /* ); */
}
{
  /* })} */
}
export default ActivityDetails;
