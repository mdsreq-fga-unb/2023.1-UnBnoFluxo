export default function handler(req, res) {
    res.status(200).json([
        { name: 'Engenharia Aeroespacial', endpoint: 'aero' },
        { name: 'Engenharia de Software', endpoint: 'software' }])
}
