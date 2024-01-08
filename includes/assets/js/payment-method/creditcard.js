import { getSetting } from '@woocommerce/settings';
import { decodeEntities } from '@wordpress/html-entities';
import { registerPaymentMethod  } from '@woocommerce/blocks-registry';
import PaymentMethodLabel from './../components/PaymentMethodLabel';
import './styles.scss';

const id = 'moneyspace';
const settings = getSetting( `${id}_data`, {} );
const label = decodeEntities( settings.title );

/**
 * Content component
 */
const Content = () => {
	return decodeEntities( settings.description || '' );
};

const CreditCardPaymentForm = () => {
	return (<div>
		<h1>hello world</h1>
	</div>);
}

const options = {
	name: id,
	label: <PaymentMethodLabel
			id={id}
			title={label}
			icons={settings.icons}/>,
	content: <CreditCardPaymentForm />,
	edit:  <Content />,
	ariaLabel: label,
	paymentMethodId: id,
	canMakePayment: () => true,
	supports: {
		features: settings.supports,
	},
};

registerPaymentMethod( options );