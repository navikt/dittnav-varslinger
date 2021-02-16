import React from "react";
import { shape, any, node, func, string } from "prop-types";
import { LenkepanelBase } from "nav-frontend-lenkepanel";
import { Element, Undertekst } from "nav-frontend-typografi";
import { trackEvent } from "../../utils/googleAnalytics";
import "./LenkePanelMedIkon.less";

class LenkepanelMedIkon extends React.Component {
  render() {
    const { href, className, overskrift, etikett, gaCategory, gaAction, gaUrl, children } = this.props;

    return (
      <LenkepanelBase
        className={className}
        href={href}
        onClick={() => trackEvent(gaCategory, gaAction, gaUrl || href)}
        border
      >
        <div className="lenkepanel__innhold">
          <div className="lenkepanel__ikon">{children}</div>
          <div>
            <Element>{overskrift}</Element>
            <Undertekst className="lenkepanel__etikett">{etikett}</Undertekst>
          </div>
        </div>
      </LenkepanelBase>
    );
  }
}

LenkepanelMedIkon.propTypes = {
  href: string.isRequired,
  onClick: func,
  className: string,
  overskrift: string.isRequired,
  ingress: shape({ root: any }),
  etikett: string,
  gaCategory: string,
  gaAction: string,
  gaUrl: string,
  children: node.isRequired,
};

LenkepanelMedIkon.defaultProps = {
  onClick: null,
  className: "",
  ingress: null,
  etikett: null,
  gaCategory: null,
  gaAction: null,
  gaUrl: null,
};

export default LenkepanelMedIkon;
