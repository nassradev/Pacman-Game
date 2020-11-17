    const width = 28
    const grid = document.querySelector('.grid')
    const score = document.querySelector('#score')
    let squares = []

    //28 * 28 = 784
    // 0 - food
    // 1 - wall
    // 2 - ghost-lair
    // 3 - super food
    // 4 - empty


    const layout = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 

    ]

    const createBoard = function (){
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement('div')
            grid.appendChild(square)
            squares.push(square)

            if (layout[i] === 0){
    squares[i].classList.add('food')
            }  else if(layout[i] === 1){
    squares[i].classList.add('wall')
            } else if(layout[i] === 2){
    squares[i].classList.add('ghost-lair')
            } else if(layout[i] === 3){
    squares[i].classList.add('power-up')
            } else {
                squares[i].classList.add('empty')
            }
        }


    }

    createBoard()

    //pacman starts at beginning 
    let pacmanStart = 391
    squares[pacmanStart].classList.add('pacman')
    //if the space is equal to 1 he cant go anywhere 
    //if the space next to him is = 0 or 4 pacman can move 

    //Key up
    document.addEventListener('keyup', function (userKey){
    if (userKey.key === 'ArrowUp')
    {
            if (pacmanStart - width >=0) {
            squares[pacmanStart].classList.remove('pacman')  
            pacmanStart -= width
            squares[pacmanStart].classList.add('pacman')   
                if (squares[pacmanStart].classList.contains('food')){
                console.log('hello') 
            squares[pacmanStart].classList.remove('food')
            squares[pacmanStart].classList.add('pacman')   
                }
                 if (squares[pacmanStart].classList.contains('power-up')){
                            console.log('hello') 
                        squares[pacmanStart].classList.remove('power-up')
               
                        squares[pacmanStart].classList.add('pacman')  
                       
                         }
 
            }}   
         
          
    })

    //Key down 
    document.addEventListener('keyup', function (userKey){
    if (userKey.key === 'ArrowDown')
    {
        if (pacmanStart + width < width * width){
           
            squares[pacmanStart].classList.remove('pacman')
            pacmanStart += width
            squares[pacmanStart].classList.add('pacman')
                //If it is a food pacman will replace the div (and eat the food)
              if (squares[pacmanStart].classList.contains('food')){
                console.log('hello') 
            squares[pacmanStart].classList.remove('food')
            squares[pacmanStart].classList.add('pacman')   
                } else 
                //If it is a power up pacman will replace thediv
                //change to power up
                if (squares[pacmanStart].classList.contains('power-up')){
                            console.log('hello') 
                        squares[pacmanStart].classList.remove('power-up')

                        squares[pacmanStart].classList.add('pacman')  
                       
                         } 

                
            }  }   
    })

    //Key left
    document.addEventListener('keyup', function (userKey){
        if (userKey.key === 'ArrowLeft'){
    if (pacmanStart % width !== 0){
    squares[pacmanStart].classList.remove('pacman')    
    pacmanStart -=1
        squares[pacmanStart].classList.add('pacman')
          if (squares[pacmanStart].classList.contains('food')){
                console.log('hello') 
            squares[pacmanStart].classList.remove('food')
            squares[pacmanStart].classList.add('pacman')   
                }
    }}
    })


    //Key right
    document.addEventListener('keyup', function (userKey){
    if (userKey.key === 'ArrowRight'){
        console.log('key right pressed')
        if (pacmanStart  % width < width -1){
    squares[pacmanStart].classList.remove('pacman')
    pacmanStart +=1
        squares[pacmanStart].classList.add('pacman')
          if (squares[pacmanStart].classList.contains('food')){
                console.log('hello') 
            squares[pacmanStart].classList.remove('food')
            squares[pacmanStart].classList.add('pacman')   
                }
    }}
    })