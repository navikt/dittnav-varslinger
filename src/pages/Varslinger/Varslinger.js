import React from "react";
import { useIsFetching } from "react-query";
import useIsError from "../../hooks/useIsError";
import AdvarselBox from "./alerts/AdvarselBox";
import Tittel from "../../components/common/Tittel";
import AktiveVarsler from "./varsler/AktiveVarsler";
import InaktiveVarsler from "./varsler/InaktiveVarsler";
import PageBase from "../PageBase";
import DelayedSpinner from "../../components/common/DelayedSpinner";
import Brodsmuler from "../../utils/brodsmuler";
import "./Varslinger.less";
import InformasjonBox from "./alerts/InformasjonBox";

const Varslinger = () => {
  const isError = useIsError();
  const isFetching = useIsFetching();

  return (
    <PageBase uniqueErrors={isError} breadcrumbs={Brodsmuler.varslinger}>
      <div className="row">
        <div className="maincontent side-innhold">
          <div className="col-md-12" id="dittnav-main-container">
            <Tittel className="varslinger-tittel" tittelId="varslinger.tittel" />
            {isFetching ? <DelayedSpinner delay={500} spinnerClass="header-spinner" /> : null}
            <section className="infomeldinger-list">
              <AdvarselBox />
              <AktiveVarsler />
              <InaktiveVarsler />
              <InformasjonBox />
            </section>
          </div>
        </div>
      </div>
    </PageBase>
  );
};

export default Varslinger;
