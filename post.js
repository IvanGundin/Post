//создание пространства куда будем добавлять наши посты:
const сontainer = document.querySelector('.posts');
//обработка промиса ч/з «async/await»:
const getPosts = async () => {
        //куда отправляем запрос:
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        //JSON-форматированние ответа (преобразование к нужному формату тела ответа) + await (для обработки промиса)
        const data = await response.json();
        //преобразуем посты, перебирая из объекта в строку, дабавив теги для структурирования текста
        const result = data.map(post =>  `<p class = card_id>id: ${post.id}</p><h3>${post.title}</h2><p>${post.body}</p>`);
        //добавление в наше пространство постов + 
        сontainer.innerHTML += result.join(' ');
};
getPosts()