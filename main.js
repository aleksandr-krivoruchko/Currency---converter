const refs = {
	usdEl: document.querySelector('[data-value="USD"]'),
	eurEl: document.querySelector('div[data-value="EUR"]'),
	uahEl: document.querySelector('div[data-value="UAH"]'),
giveEl: document.querySelector("#give-value"),
takeEl: document.querySelector("#take-value"),
selectEl: document.querySelector("#select")
}

refs.giveEl.addEventListener("input", onGiveInput);
refs.takeEl.addEventListener("input", onTakeInput);
refs.selectEl.addEventListener("input", onSelectInput);

const rates= {
}

getCurrencies().then(setExchangeRate);


async function getCurrencies() {
	try {
	const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js");
	const currencies = await response.json();

		   rates.UAH = currencies.Valute.UAH.Value;
			rates.USD = currencies.Valute.USD.Value;
		   rates.EUR = currencies.Valute.EUR.Value;

	return currencies;
  } catch (error) {
    console.log(error.message);
  }
}

function setExchangeRate(currencies) {
	const {USD, EUR, UAH} = currencies.Valute;

refs.usdEl.textContent = USD.Value.toFixed(2);
refs.eurEl.textContent = EUR.Value.toFixed(2);
refs.uahEl.textContent = UAH.Value.toFixed(2);

rateDirection(USD, refs.usdEl)
rateDirection(EUR, refs.eurEl)
rateDirection(UAH, refs.uahEl)

}

function rateDirection(currency, element) {
	if(currency.Previous > currency.Value){
element.classList.add("bottom")
	} else {
		element.classList.add("top")
	}
}

function onGiveInput(e) {
	let currentCurrency = refs.selectEl.value;

			refs.takeEl.value = parseFloat(refs.giveEl.value / rates[currentCurrency]).toFixed(2);
}

function onTakeInput(e) {
	let currentCurrency = refs.selectEl.value;

			refs.giveEl.value = parseFloat(refs.takeEl.value * rates[currentCurrency]).toFixed(2);
}

function onSelectInput() {
	onGiveInput()
}