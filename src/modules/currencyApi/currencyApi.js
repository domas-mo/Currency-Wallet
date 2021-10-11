import {apiKey} from '../../data/apiKey'

class CurrencyApi {
	apiUrl = 'http://api.exchangeratesapi.io/v1/';
	currency = 'EUR';

	handleErrors(resp) {
		if (!resp.ok) {
			throw Error('Error fetching currency');
		}
		return resp;
	}

	getExchangeRate(base = 'EUR', purchaseDate) {
		return fetch(
			`${this.apiUrl}${
				purchaseDate ? purchaseDate : 'latest'
			}&base=EUR?access_key=${apiKey}`
		)
			.then(this.handleErrors)
			.then(resp => resp.json())
			.then(resp => resp.rates[this.currency] / resp.rates[base]);
	}

	getCurrentRates() {
		return fetch(`${this.apiUrl}latest?access_key=${apiKey}`)
			.then(this.handleErrors)
			.then(resp => resp.json())
			.then(resp => resp.rates);
	}
};

export default CurrencyApi; 