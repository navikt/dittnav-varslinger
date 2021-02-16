import React from "react";
import AlertStripe from "nav-frontend-alertstriper";
import { Normaltekst, Undertittel } from "nav-frontend-typografi";
import { FormattedMessage } from "react-intl";
import Lenke from "nav-frontend-lenker";
import { minInnboksUrl, saksoversiktUrl } from "../../../utils/lenker";
import { GoogleAnalyticsAction, GoogleAnalyticsCategory, trackEvent } from "../../../utils/googleAnalytics";

const AdvarselBox = () => (
  <div className="alertbox">
    <AlertStripe type="advarsel" className="infomelding">
      <Undertittel>
        <FormattedMessage id="varslinger.under.utvikling.tittel" />
      </Undertittel>
      <Normaltekst>
        <FormattedMessage
          id="varslinger.under.utvikling.ingress"
          values={{
            innboks: (
              <Lenke
                href={minInnboksUrl}
                onClick={() =>
                  trackEvent(GoogleAnalyticsCategory.Varslinger, GoogleAnalyticsAction.Innboks, minInnboksUrl)
                }
              >
                innboksen
              </Lenke>
            ),
            saksoversikt: (
              <Lenke
                href={saksoversiktUrl}
                onClick={() =>
                  trackEvent(GoogleAnalyticsCategory.Varslinger, GoogleAnalyticsAction.DineSaker, saksoversiktUrl)
                }
              >
                Dine saker
              </Lenke>
            ),
          }}
        />
      </Normaltekst>
    </AlertStripe>
  </div>
);

export default AdvarselBox;
