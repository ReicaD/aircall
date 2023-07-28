import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaPhone, FaPhoneSlash } from "react-icons/fa";
import axios from "axios";

const Card = styled.div`
  display: flex;
  border: 2px solid #b6b6b4;
  margin: 10px;
  border-radius: 10px;
`;

const Details = styled.div`
  flex-grow: 1;
  // border: 2px solid orange;
  padding-left: 15px;
  line-height: 6px;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 40px;
  // border: 2px solid red;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  // border: 2px solid green;
  width: 55px;
  padding-right: 10px;
`;

const Image = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;

function ArchivedDetails() {
  const [callDetails, setCallDetails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://cerulean-marlin-wig.cyclic.app/activities"
        );
        console.log("data@", response.data);
        setCallDetails(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <p>nothing here yet!</p>
      {console.log("calls@", callDetails)}
      callDetails.is_archived === true && (
      {callDetails.map((call) => {
        return (
          <Card key={call.id}>
            <Icon>
              {call.call_type ? (
                <FaPhone color="red" />
              ) : (
                <FaPhone color="green" />
              )}
            </Icon>
            <Details>
              {!call.via ? (
                <p style={{ fontWeight: "bold" }}>Unknown Caller</p>
              ) : (
                <p style={{ fontWeight: "bold" }}>{call.via}</p>
              )}
              <p stle={{ color: "#949494" }}>
                tried to call from <strong>{call.from}</strong>
              </p>
            </Details>
            <Time>
              {" "}
              <Image src="./images/three-dots.png" alt="" />
              <p style={{ color: "#949494" }}>7:45am</p>
            </Time>
          </Card>
        );
      })}
      );
    </>
  );
}

{
}
export default ArchivedDetails;
