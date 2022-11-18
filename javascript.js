var player = true;
var board = 
[
	[document.getElementById(1), document.getElementById(2), document.getElementById(3)],
	[document.getElementById(4), document.getElementById(5), document.getElementById(6)],
	[document.getElementById(7), document.getElementById(8), document.getElementById(9)],
];

function turn()
{
	if(player == true)
	{
		player = false;
	}
	else
	{
		player = true;
	}

	victory();
}

function victory()
{
	for (let x = 0; x < 3; x++) 
	{
  		for (let y = 0; y < 3; y++)
  		{

		}
	}
}
