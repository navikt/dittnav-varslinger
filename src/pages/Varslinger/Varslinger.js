import React from "react";
import { FormattedMessage } from "react-intl";
import Panel from "nav-frontend-paneler";
import Lenke from "nav-frontend-lenker";
import { Normaltekst } from "nav-frontend-typografi";
import { useIsFetching } from "react-query";
import useIsError from "../../hooks/useIsError";
import AdvarselBox from "./alerts/AdvarselBox";
import Tittel from "../../components/common/Tittel";
import AktiveVarsler from "./varsler/AktiveVarsler";
import InaktiveVarsler from "./varsler/InaktiveVarsler";
import { GoogleAnalyticsAction, GoogleAnalyticsCategory, trackEvent } from "../../utils/googleAnalytics";
import PageBase from "../PageBase";
import DelayedSpinner from "../../components/common/DelayedSpinner";
import Brodsmuler from "../../utils/brodsmuler";
import { lenker } from "../../utils/lenker";
import "./Varslinger.less";

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
              <Panel className="mininnboks-panel">
                <Normaltekst>
                  <FormattedMessage
                    id="varslinger.mininnboks.melding"
                    values={{
                      innboksen: (
                        <Lenke
                          href={lenker.innboks.url}
                          onClick={() =>
                            trackEvent(
                              GoogleAnalyticsCategory.Varslinger,
                              GoogleAnalyticsAction.Innboks,
                              lenker.innboks.url
                            )
                          }
                        >
                          innboksen
                        </Lenke>
                      ),
                    }}
                  />
                </Normaltekst>
              </Panel>
            </section>
          </div>
        </div>
      </div>
    </PageBase>
  );
};

export default Varslinger;
