* API backend

Чтобы обратиться к методу API, Вам необходимо выполнить `GET` запрос такого вида: ``example.com/tasks`` 

В ответ на такой запрос Вы получите ответ в формате **JSON:**
```json
{
  "tasks": [
    {
      "id": 1,
      "title": "",
      "description": "",
      "body": "",
      "done": false,
      "data": "09.06.2019",
      "img": [
        "urls",
	"..."
      ],
      "tag": [
        "city",
        "life"
      ]
    }
  ]
}
```
