const questionsData = [
    // {
    //     id: 0,
    //     question: "Ваш пол:",
    //     type:"text-task",
    //     img: false,
    //     answers: [
    //         { value: "male", label: "Мужчина" },
    //         { value: "female", label: "Женщина" },
    //     ],
    // },
    // {
    //     id: 1,
    //     question: "Укажите ваш возраст:",
    //     type:"text-task",
    //     img: false,
    //     answers: [
    //         { value: "<18", label: "До 18" },
    //         { value: "18-28", label: "От 18 до 28" },
    //         { value: "29-35", label: "От 29 до 35" },
    //         { value: "36>", label: "От 36" },
    //     ],
    // },
    // {
    //     id: 2,
    //     question: "Выберите лишнее:",
    //     type:"text-task",
    //     img: false,
    //     answers: [
    //         { value: "house", label: "Дом" },
    //         { value: "hovel", label: "Шалаш" },
    //         { value: "bungalow", label: "Бунгало" },
    //         { value: "bench", label: "Скамейка" },
    //         { value: "hut", label: "Хижина" },
    //     ],
    // },
    // {
    //     id: 3,
    //     question: "Продолжите числовой ряд: \"18\", \"20\", \"24\", \"32\"",
    //     type: "text-task",
    //     img: false,
    //     answers: [
    //         { value: "62", label: "62" },
    //         { value: "48", label: "48" },
    //         { value: "74", label: "74" },
    //         { value: "57", label: "57" },
    //         { value: "60", label: "60" },
    //         { value: "77", label: "77" },
    //     ],
    // },
    // {
    //     id: 4,
    //     question: "Выберите цвет, который сейчас наиболее вам приятен:",
    //     type: "pick-color",
    //     img: false,
    //     answers: [
    //         { value: "#A8A8A8" },
    //         { value: "#0000A9" },
    //         { value: "#00A701" },
    //         { value: "#F60100" },
    //         { value: "#FDFF19" },
    //         { value: "#A95403" },
    //         { value: "#000000" },
    //         { value: "#850068" },
    //         { value: "#46B2AC" },
    //     ],
    // },
    {
        id: 5,
        question: "Отдохните пару секунд, ещё раз выберите цвет, который сейчас наиболее вам приятен:",
        type: "pick-color",
        img: false,
        answers: [
            { value: "#A8A8A8" },
            { value: "#46B2AC" },
            { value: "#A95403" },
            { value: "#00A701" },
            { value: "#000000" },
            { value: "#F60100" },
            { value: "#850068" },
            { value: "#FDFF19" },
            { value: "#0000A9" },
        ],
    },
    // {
    //     id: 6,
    //     question: "Какой из городов лишний?",
    //     type: "text-task",
    //     img: false,
    //     answers: [
    //         { value: "Washington", label: "Вашингтон" },
    //         { value: "London", label: "Лондон" },
    //         { value: "Paris", label: "Париж" },
    //         { value: "New-York", label: "Нью-Йорк" },
    //         { value: "Moscow", label: "Москва" },
    //         { value: "Ottawa", label: "Оттава" },
    //     ],
    // },
    {
        id: 7,
        question: "Выберите правильную фигуру из четырех пронумерованных.",
        img: true,
        imgSrc:"image1.png",
        imgSizes: {
            width: "185px",
            height: "235px"
        },
        type: "pick-image",
        answers: [
            { value: "1", label: "1" },
            { value: "2", label: "2" },
            { value: "3", label: "3" },
            { value: "4", label: "4" },
        ],
    },
    {
        id: 8,
        question: "Вам привычнее и важнее",
        type: "text-task",
        img: false,
        answers: [
            {
                value: "pleasure",
                label: "Наслаждаться каждой минутой проведенного времени",
            },
            { value: "future", label: "Быть устремлемнным мыслями в будущее" },
            {
                value: "experience",
                label: "Учитывать в ежедневной практике прошлый опыт",
            },
        ],
    },
    {
        id: 9,
        question: "Какое определениe, по-Вашему, больше подходит к этому геометрическому изображению:",
        img: true,
        imgSrc:"image2.png",
        type: "text-task",
        imgSizes: {
            width: "173px",
            height: "115px"
        },
        answers: [
            { value: "spiky", label: "Оно остроконечное" },
            { value: "steady", label: "Оно устойчиво" },
            { value: "stable", label: "Оно находится в состоянии равновесия" },
        ],
    },
    {
        id: 10,
        question: "Вставьте подходящее число:",
        img: true,
        imgSrc:"image3.png",
        imgSizes: {
            width: "228px",
            height: "207px"
        },
        type: "pick-image",
        answers: [
            { value: "34", label: "34" },
            { value: "36", label: "36" },
            { value: "53", label: "53" },
            { value: "44", label: "44" },
            { value: "66", label: "66" },
            { value: "42", label: "42" },
        ],
    },
];

export default questionsData;