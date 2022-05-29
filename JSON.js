const todos =[
    {
        id: 1,
        description: "Estudar programacao",
        isCompleted: false,
    },
    {
        id: 2,
        description: "Ler",
        isCompleted: true,
    },
    {
        id: 3,
        description: "Treinar",
        isCompleted: true,
    },
    ];

    const todosJSON = JSON.stringify(todos); // Transforma para envio
    const todosList = JSON.parse(todosJSON) // transforma em dado JS manipulavel
    console.log(todosJSON);