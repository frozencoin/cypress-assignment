import dayjs from 'dayjs'

cy.helper = {
    getCalendarDateFromToday: (days) => {
        return dayjs().add(days, 'day').format("MM/DD/YYYY")
    }
}