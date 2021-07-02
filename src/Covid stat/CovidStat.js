import React from "react";
import "./CovidStat.css";
import { Typography } from "@material-ui/core";
import CountUp from "react-countup";

const CovidStat = ({ data }) => {
  let date = new Date();

  return (
    <div>
      <div className="Card">
        <div className="Card_inner active">
          <h3>Confirm Cases</h3>
          <Typography className="inner">
            {
              <CountUp
                start={0}
                end={data.confirmed.value}
                duration={3}
                separator=","
              />
            }
          </Typography>
          <p>
            Dated: {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
          </p>
        </div>
        <div className="Card_inner recover">
          <h3>Recovries</h3>
          <Typography className="inner">
            {
              <CountUp
                start={0}
                end={data.recovered.value}
                duration={3}
                separator=","
              />
            }
          </Typography>
          <p>
            Dated: {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
          </p>
        </div>
        <div className="Card_inner death">
          <h3>Deaths</h3>
          <Typography className="inner">
            {
              <CountUp
                start={0}
                end={data.deaths.value}
                duration={3}
                separator=","
              />
            }
          </Typography>
          <p>
            Dated: {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CovidStat;
