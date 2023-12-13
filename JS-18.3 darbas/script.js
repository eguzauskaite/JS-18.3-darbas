// 3. Organizuojate vestuves - pasiimkite informaciją iš "https://party-wedding.glitch.me/v1/wedding" ir atvaizduokite lentelėje: vardą, plusOne ir attending. Parašykite taip, kad plusOne ir attending būtų ne true/false, bet "+" arba "-".
// Names	Attending	Plus One
// Kristupas Lapeika	+	+
// Jonas Jonaitis	+	-
// Petras Petraitis	-	+
// Ona Onaitė	-	-
// Marija Marijaitė	+	+
// Rimas Rimaitis	+	-
// Dalia Dalienė	-	+
// Gintaras Gintaraitis	+	-
// Egle Eglaitė	-	+
// Andrius Andriaitis	+	-

const apiUrl = 'https://party-wedding.glitch.me/v1/wedding'

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const table = document.querySelector('table')

        // sukuriamas lentelės eilutės
        data.forEach(person => {
            const row = table.insertRow()

            const nameCell = row.insertCell(0)
            nameCell.textContent = person.name

            const plusOneCell = row.insertCell(1)
            plusOneCell.textContent = person.plusOne === true ? '+' : '-'

            const attendingCell = row.insertCell(2);
            attendingCell.textContent = person.attending === true ? '+' : '-'

            // spausdinam info į konsolę
            console.log(`${person.name} | Plus One: ${person.plusOne === true ? '+' : '-'}, Attending: ${person.attending === true ? '+' : '-'}`)
        })
    })
    .catch(error => console.error('Klaida gaunant duomenis:', error))