import React, { useState, useEffect } from "react";
import ActivityDetails from "./ActivityDetails";
import axios, { all } from "axios";
import styled from "styled-components";
import ArchivedCalls from "../components/ArchivedCalls";

const DottedLine = styled.div`
  border-bottom: 3px dotted #eaeaea;
`;
const Button = styled.button`
  width: 50%;
  height: 50px;
  border: none;
  color: inherit;
  font-size: 14px;
  background: #27ae60;
  line-height: 14px;
  font-weight: bold;
  cursor: pointer;
`;

function ActivityFeed() {
  const [logs, setLogs] = useState([]);
  const [allCalls, setAllCalls] = useState(true);
  const [archived, setArchived] = useState(false);

  const showCalls = (e) => {
    e.preventDefault(e);
    setAllCalls(true);
    setArchived(false);
  };
  const showArchived = (e) => {
    e.preventDefault(e);
    setArchived(true);
    setAllCalls(false);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://cerulean-marlin-wig.cyclic.app/activities"
        );
        console.log("data@", response.data);
        setLogs(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData()
  }, []);

  return (
    <div>
      <Button onClick={showCalls} style={{ color: "black" }}>
        All Calls
      </Button>
      <Button onClick={showArchived} style={{ color: "black" }}>
        Archived{" "}
      </Button>
      {console.log("looogs", logs)}

      {logs.map((log) => (
        <ActivityDetails logs={log} allCalls={allCalls} archived={archived} />
      // <DottedLine />
      ))}
      {/* {allCalls && <ActivityDetails />}
      {archived && <ArchivedCalls />} */}
    </div>
  );
}

export default ActivityFeed;
