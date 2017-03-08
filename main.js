
(function()
{
	var list = document.querySelector('#list'),
	saveAll = document.querySelector('#saveAll'),
	clearAll = document.querySelector('#clearAll');

	function emptyStorage(e)
	{
		localStorage.clear();
	}

	function fillStorage()
	{
		localStorage.setItem('todoList', list.innerHTML);
	}

	function loadToDo()
	{
		if(window.localStorage)
		{
			if(localStorage.getItem('todoList'))
			{
				list.innerHTML = localStorage.getItem('todoList');
			}
		}
		else
		{
			console.log('Please update you\'re browser');
		}
	}

	clearAll.addEventListener('click', emptyStorage, false);
	saveAll.addEventListener('click', fillStorage, false);

	loadToDo();

})();
