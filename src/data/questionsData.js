const tasks = [
    {
        id: 0,
        question: "Ваш пол:",
        answers: [
            { key: "male", value: "Мужчина" },
            { key: "female", value: "Женщина" },
        ],
    },
    {
        id: 1,
        question: "Укажите ваш возраст:",
        answers: [
            { key: "<18", value: "До 18" },
            { key: "18-28", value: "От 18 до 28" },
            { key: "29-35", value: "От 29 до 35" },
            { key: "36>", value: "От 36" },
        ],
    },
    {
        id: 2,
        question: "Выберите лишнее",
        answers: [
            { key: "house", value: "Дом" },
            { key: "hovel", value: "Шалаш" },
            { key: "bungalow", value: "Бунгало" },
            { key: "bench", value: "Скамейка" },
            { key: "hut", value: "Хижина" },
        ],
    },
    {
        id: 3,
        question: "Продолжите числовой ряд:",
        modifier: "span",
        subTask: ["18", "20", "24", "32"],
        small: true,
        name: "numbers",
        answers: [
            { key: "62", value: "62" },
            { key: "48", value: "48" },
            { key: "74", value: "74" },
            { key: "57", value: "57" },
            { key: "60", value: "60" },
            { key: "77", value: "77" },
        ],
    },
    {
        id: 4,
        question: "Выберите цвет, который сейчас наиболее вам приятен:",
        modifier: "pick-color",
        answers: [
            { key: "#A8A8A8" },
            { key: "#0000A9" },
            { key: "#00A701" },
            { key: "#F60100" },
            { key: "#FDFF19" },
            { key: "#A95403" },
            { key: "#000000" },
            { key: "#850068" },
            { key: "#46B2AC" },
        ],
    },
    {
        id: 5,
        question: "Отдохните пару секунд, ещё раз выберите цвет, который сейчас наиболее вам приятен:",
        modifier: "pick-color",
        answers: [
            { key: "#A8A8A8" },
            { key: "#46B2AC" },
            { key: "#A95403" },
            { key: "#00A701" },
            { key: "#000000" },
            { key: "#F60100" },
            { key: "#850068" },
            { key: "#FDFF19" },
            { key: "#0000A9" },
        ],
    },
    {
        id: 6,
        question: "Какой из городов лишний?",
        small: true,
        answers: [
            { key: "Washington", value: "Вашингтон" },
            { key: "London", value: "Лондон" },
            { key: "Paris", value: "Париж" },
            { key: "New-York", value: "Нью-Йорк" },
            { key: "Moscow", value: "Москва" },
            { key: "Ottawa", value: "Оттава" },
        ],
    },
    {
        id: 7,
        question: "Выберите правильную фигуру из четырех пронумерованных.",
        img: true,
        imgSizes: {
            width: "185px",
            height: "235px"
        },
        modifier: "row",
        answers: [
            { key: "1", value: "1" },
            { key: "2", value: "2" },
            { key: "3", value: "3" },
            { key: "4", value: "4" },
        ],
    },
    {
        id: 8,
        question: "Вам привычнее и важнее",
        answers: [
            {
                key: "pleasure",
                value: "Наслаждаться каждой минутой проведенного времени",
            },
            { key: "future", value: "Быть устремлемнным мыслями в будущее" },
            {
                key: "experience",
                value: "Учитывать в ежедневной практике прошлый опыт",
            },
        ],
    },
    {
        id: 9,
        question: "Какое определениe, по-Вашему, больше подходит к этому геометрическому изображению:",
        img: true,
        imgSizes: {
            width: "173px",
            height: "115px"
        },
        answers: [
            { key: "spiky", value: "Оно остроконечное" },
            { key: "steady", value: "Оно устойчиво" },
            { key: "stable", value: "Оно находится в состоянии равновесия" },
        ],
    },
    {
        id: 10,
        question: "Вставьте подходящее число",
        img: true,
        imgSizes: {
            width: "228px",
            height: "207px"
        },
        modifier: "row",
        answers: [
            { key: "34", value: "34" },
            { key: "36", value: "36" },
            { key: "53", value: "53" },
            { key: "44", value: "44" },
            { key: "66", value: "66" },
            { key: "42", value: "42" },
        ],
    },
];

export default tasks;