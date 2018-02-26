import React from 'react';
import { injectIntl } from 'react-intl'


export function injectIntlPhrase() {
    return function (WrappedComponent) {
        class InjectPhrase extends React.Component {
            constructor(props, context) {
                super(props, context);
                this.render = this.render.bind(this);
                this.translate = this.translate.bind(this);

                this.state = { errors: {} };
            }

            translate(keyName) {
                if (!window.PHRASEAPP_DISABLED) {
                    let escapedString = keyName.replace("<", "[[[[[[html_open]]]]]]").replace(">", "[[[[[[html_close]]]]]]");
                    return "{{__phrase_" + escapedString + "__}}";
                } else {
                    return this.props.intl.formatMessage({ "id": keyName })
                }
            }

            render() {
                return (
                    React.createElement(
                        WrappedComponent, {
                            ref: "component",
                            errors: this.state.errors,
                            translate: this.translate
                        }, this.props)
                    );
            }
        }
        return injectIntl(InjectPhrase);
    };
}