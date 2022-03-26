exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('hello').del()
    .then(function () {
      // Inserts seed entries
      return knex('hello').insert([
        { id: 1, greeting: 'Hello', language: 'English', pronounciation: 'Heh·low' },
        { id: 2, greeting: 'Kia Ora', language: 'Māori', pronounciation: 'Ki·ao·ra' },
        { id: 3, greeting: 'Talofa', language: 'Samoan', pronounciation: 'Ta·luh·fuh' },
        { id: 4, greeting: 'Hola', language: 'Spanish', pronounciation: 'Oh·la' },
        { id: 5, greeting: 'Salve', language: 'Italian', pronounciation: 'Sàl·ve' },
        { id: 6, greeting: 'Konnichiwa', language: 'Nihongo', pronounciation: 'Kon·nee·chee·wah' },
        { id: 7, greeting: 'Nǐ Hǎo', language: 'Mandarin', pronounciation: 'Nee·haow' },
        { id: 8, greeting: 'Asalaam Alaikum', language: 'Arabic', pronounciation: 'as·sa·la·mu a·laj·kum' },
        { id: 9, greeting: 'Guten Tag', language: 'Deutsch', pronounciation: 'gu·tn tak' },
        { id: 10, greeting: 'добрий день', language: "Ukraïns'ka mova (Ukrainian)", pronounciation: 'dob·reh·dain' },
        { id: 11, greeting: 'Namaste', language: 'Hindi', pronounciation: 'na·mas·tei' },
        { id: 12, greeting: 'Annyeonghaseyo', language: 'Korean', pronounciation: 'an·yung·ha·say·o' }
      ])
    })
}
