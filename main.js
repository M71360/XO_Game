
let title = document.querySelector('.title');
let turn = 'x';
let square = [];
function end(n1,n2,n3)
{
    title.innerHTML = `${square[n1]} is winner`;
    document.getElementById('item'+n1).style.background = '#000';
    document.getElementById('item'+n2).style.background = '#000';
    document.getElementById('item'+n3).style.background = '#000';

    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000)
}
function winner()
{
    for(let i = 1; i<10; i++)
    {
        square[i] = document.getElementById('item' + i).innerHTML;
    }
    if(square[1] == square[2] && square[2] == square[3] && square[1] != '')
    {
        end(1,2,3)
    }
    else if(square[4] == square[5] && square[5] == square[6] && square[4] != '')
    {
        end(4,5,6)
    }
    else if(square[7] == square[8] && square[8] == square[9] && square[7] != '')
    {
        end(7,8,9)
    }
    else if(square[1] == square[4] && square[4] == square[7] && square[1] != '')
    {
        end(1,4,7)
    }
    else if(square[2] == square[5] && square[5] == square[8] && square[2] != '')
    {
        end(2,5,8)
    }
    else if(square[3] == square[6] && square[6] == square[9] && square[3] != '')
    {
        end(3,6,9)
    }
    else if(square[1] == square[5] && square[5] == square[9] && square[1] != '')
    {
        end(1,5,9)
    }
    else if(square[3] == square[5] && square[5] == square[7] && square[3] != '')
    {
        end(3,5,7)
    }
}
function game(id)
{
  let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML == '')
    {
     element.innerHTML = 'X';
     turn = 'o';
     title.innerHTML ='O';
    
    if (turn === 'o' )
    {
     computerMove();
     turn = 'x';
     title.innerHTML ='X';
    }
}
    winner();
}
function computerMove() 
{
    let emptySquares = [];
    for (let i = 1; i < 10; i++) {
      if (document.getElementById('item' + i).innerHTML == '') {
        emptySquares.push(i);
      }
    }
    let randomIndex = Math.floor(Math.random() * emptySquares.length);
    let move = emptySquares[randomIndex];
    document.getElementById('item' + move).innerHTML = 'O';
    
}
  