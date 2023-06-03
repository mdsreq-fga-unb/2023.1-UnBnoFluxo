export default function handler(req, res) {
    res.status(200).json([
        { name: 'ABCDEFGHIJ', period: 1, code: 'FGA1284' },
        { name: 'C1', period: 1, code: 'FGA1234' },
        { name: 'APC', period: 1, code: 'FGA1884' },
        { name: 'DIAC', period: 1, code: 'FGA1834' },
        { name: 'IE', period: 1, code: 'FGA1934' },
        { name: 'EA', period: 1, code: 'FGA3364' },
        { name: 'C2', period: 2, code: 'FGA9934' },
        { name: 'Metodos', period: 3, code: 'FGA1144' },
        { name: 'GPQ', period: 4, code: 'FGA1154' },
        { name: 'Felicidade', period: 5, code: 'FGA5724' },
        { name: 'MecSol', period: 5, code: 'FGA5755' },
        { name: 'CA', period: 5, code: 'FGA7824' },
        { name: 'Terapia', period: 0, code: 'FGA1554' }])
}
