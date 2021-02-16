import React from "react";
import Panel from "nav-frontend-paneler";
import { Normaltekst } from "nav-frontend-typografi";
import { FormattedMessage } from "react-intl";
import Lenke from "nav-frontend-lenker";
import { minInnboksUrl } from "../../../utils/lenker";
import { GoogleAnalyticsAction, GoogleAnalyticsCategory, trackEvent } from "../../../utils/googleAnalytics";

const InformasjonBox = () => (
  <Panel className="mininnboks-panel">
    <Normaltekst>
      <FormattedMessage
        id="varslinger.mininnboks.melding"
        values={{
          innboksen: (
            <Lenke
              href={minInnboksUrl}
              onClick={() =>
                trackEvent(GoogleAnalyticsCategory.Varslinger, GoogleAnalyticsAction.Innboks, minInnboksUrl)
              }
            >
              innboksen
            </Lenke>
          ),
        }}
      />
    </Normaltekst>
  </Panel>
);

export default InformasjonBox;
