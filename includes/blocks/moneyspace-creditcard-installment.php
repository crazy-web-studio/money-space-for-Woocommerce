<?php

namespace MoneySpace\Payments;

use MoneySpace\MoneySpacePayment;
use Automattic\WooCommerce\Blocks\Payments\Integrations\AbstractPaymentMethodType;
use Automattic\WooCommerce\Blocks\Assets\Api;

/**
 * Class MoneySpace_CreditCard_Installment
 *
 * @package MoneySpace\Payments
 */
class MoneySpace_CreditCard_Installment extends AbstractPaymentMethodType {

	public $name = MNS_ID_INSTALLMENT;

	/**
	 * The gateway instance.
	 *
	 * @var MNS_Payment_Gateway_INSTALLMENT
	 */
	private $gateway;
	
	public function __construct( ) {
	}

	/**
	 * Initializes the payment method type.
	 */
	public function initialize() {
		$this->settings = get_option( 'woocommerce_'.$this->name.'_settings', [] );
		$gateways       = WC()->payment_gateways->payment_gateways();
		$this->gateway  = $gateways[ $this->name ];
	}

	/**
	 * Returns if this payment method should be active. If false, the scripts will not be enqueued.
	 *
	 * @return boolean
	 */
	public function is_active() {
		return filter_var( $this->get_setting( 'enabled', false ), FILTER_VALIDATE_BOOLEAN );
	}

	/**
	 * Returns an array of scripts/handles to be registered for this payment method.
	 *
	 * @return array
	 */
	public function get_payment_method_script_handles() {
		$script_path       = '/assets/js/frontend/blocks-ms-creditcard-installment.js';
		$script_asset_path = MoneySpacePayment::plugin_abspath() . 'assets/js/frontend/blocks-ms-creditcard-installment.asset.php';
		$script_asset      = file_exists( $script_asset_path )
			? require( $script_asset_path )
			: array(
				'dependencies' => array(),
				'version'      => '1.0.0'
			);
		$script_url        = MoneySpacePayment::plugin_url() . $script_path;
		wp_register_script(
			'wc-moneyspace-creditcard-installment',
			$script_url,
			$script_asset[ 'dependencies' ],
			$script_asset[ 'version' ],
			true
		);

		return [ 'wc-moneyspace-creditcard-installment' ];
	}

	/**
	 * Returns an array of key=>value pairs of data made available to the payment methods script.
	 *
	 * @return array
	 */
	public function get_payment_method_data() {
		$gateways = WC()->payment_gateways->get_available_payment_gateways();
		$id = "moneyspace_installment";
		$ktc_enabled = $gateways[$id]->settings['ktc_enabled'] ?? "yes";
        $bay_enabled = $gateways[$id]->settings['bay_enabled'] ?? "yes";
        $fcy_enabled = $gateways[$id]->settings['fcy_enabled'] ?? "yes";
		$ktc_max_months_setting = $gateways[$id]->settings['ktc_max_months_setting']; 
        $bay_max_months_setting = $gateways[$id]->settings['bay_max_months_setting']; 
        $fcy_max_months_setting = $gateways[$id]->settings['fcy_max_months_setting']; 
		$msfee = $gateways[$id]->settings['fee_setting'] ?? "include";
		if ($msfee == "include"){
            $KTC = [ 3, 4, 5, 6, 7, 8, 9, 10];
            $BAY = [ 3, 4, 6, 9, 10];
            $FCY = [ 3, 4, 6, 9, 10];
        } else if ($msfee == "exclude") {
            $KTC = [ 3, 4, 5, 6, 7, 8, 9, 10];
            $BAY = [ 3, 4, 6, 9, 10];
            $FCY = [ 3, 4, 6, 9, 10, 12, 18, 24, 36];
        }

		return [
			'title'       => $this->get_setting( 'title' ),
			'description' => $this->get_setting( 'description' ),
			'icons'		  => [$this->get_payment_method_icons()],
			'msfee' => $msfee,
			'ccIns' => [
				array(
					"code" => "ktc",
					"isEnabled" => $ktc_enabled,
					"label" => "เคทีซี (KTC)",
					"maxMonth" => $ktc_max_months_setting,
					"icon" => MNS_ROOT_URL . 'includes/images/installment/ktc-logo.png',
					"months" => $KTC,

				),
				array(
					"code" => "bay",
					"isEnabled" => $bay_enabled,
					"label" => "กรุงศรีฯ วีซ่า , เซ็นทรัล , เทสโก้โลตัส",
					"maxMonth" => $bay_max_months_setting,
					"icon" => MNS_ROOT_URL . 'includes/images/installment/bay_central_lotus.png',
					"months" => $BAY,
				),
				array(
					"code" => "fcy",
					"isEnabled" => $fcy_enabled,
					"label" => "กรุงศรีเฟิร์สช้อยส์ , โฮมโปร , เมกาโฮม",
					"maxMonth" => $fcy_max_months_setting,
					"icon" => MNS_ROOT_URL . 'includes/images/installment/fcy-logo.png',
					"months" => $FCY,
				),
			],
			'supports'    => array_filter( $this->gateway->supports, [ $this->gateway, 'supports' ] )
		];
	}

	public function get_payment_method_icons() {
		return [
			'id'  => 'moneyspace',
			'src' => $this->gateway->icon,
			'alt' => 'moneyspace'
		];
	}
}
