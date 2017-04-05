import {createElement} from 'react';
import {
    FormattedMessage as IntlFormattedMessage,
    FormattedNumber as IntlFormattedNumber,
    FormattedRelative as IntlFormattedRelative,
    FormattedPlural as IntlFormattedPlural,
    FormattedTime as IntlFormattedTime,
    FormattedDate as IntlFormattedDate,
    FormattedHTMLMessage as IntlFormattedHTMLMessage,
} from 'react-intl';

export class FormattedMessage extends IntlFormattedMessage {
    constructor(props: any, context: any) {
        console.log("what da fuck: ", props.id);
        super(props, context);
    }

    render() {  
        if (!(<any>window).PHRASEAPP_DISABLED) {
            let nodes = ['{{__phrase_' + this.props.id + '__}}'];
            return createElement("span", null, ...nodes);
            
        } else {
            return super.render();
        }    
    }
}

export class FormattedNumber extends IntlFormattedNumber {
    constructor(props: any, context: any) {
        super(props, context);
    }
}

export class FormattedRelative extends IntlFormattedRelative {
    constructor(props: any, context: any) {
        super(props, context);
    }
}

export class FormattedPlural extends IntlFormattedPlural {
    constructor(props: any, context: any) {
        super(props, context);
    }
}

export class FormattedTime extends IntlFormattedTime {
    constructor(props: any, context: any) {
        super(props, context);
    }
}

export class FormattedDate extends IntlFormattedDate {
    constructor(props: any, context: any) {
        super(props, context);
    }
}

export class FormattedHTMLMessage extends IntlFormattedHTMLMessage {
    constructor(props: any, context: any) {
        super(props, context);
    }

    render() {  
        if (!(<any>window).PHRASEAPP_DISABLED) {
            let nodes = ['{{__phrase_' + this.props.id + '__}}'];
            return createElement("span", null, ...nodes);
            
        } else {
            return super.render();
        }    
    }
}