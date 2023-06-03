export default function handler(req, res) {
    res.status(200).json([
        { name: 'Aero', endpoint: 'aero' },
        { name: 'Software', endpoint: 'soft' }])
}
