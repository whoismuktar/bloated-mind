export default function handler(req, res) {
    const rooms = [
        {
            id: 1,
            name: "Ease your mind",
            capacity: 0,
            waiting: [],
            admitted: [],
            paired: []
        },
        {
            id: 2,
            name: "Make a friend",
            capacity: 0,
            waiting: [],
            admitted: [],
            paired: []
        },
        {
            id: 3,
            name: "Rant",
            capacity: 0,
            waiting: [],
            admitted: [],
            paired: []
        }
    ]
    res.status(200).json({ rooms })
}
