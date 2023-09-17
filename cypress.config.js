const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            allureWriter(on, config);
            return config;
        },
		appUrl: 'https://staging.bookings.vacayou.com',
		endpoints: {
			checkAvailability: '/checkout/105/check-availability',
			customizeExperience: '/checkout/105/customize'
		}
	},
})