        const width = 28
        const grid = document.querySelector('.grid')
        let score = document.querySelector('#score')
        let pcScore = 0
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

//Eat dots function 
let eatDots = function (){
    if (squares[pacmanStart].classList.contains('food')){      
            pcScore++
            score.innerHTML = `Score: ${pcScore}` 
            console.log(`Score: ${pcScore}`)
            squares[pacmanStart].classList.remove('food')
            squares[pacmanStart].classList.add('pacman')   
    }}
//pacman starts at beginning 
let pacmanStart = 391
squares[pacmanStart].classList.add('pacman')

//Power up function 
let powerUp = function (){
                if (squares[pacmanStart].classList.contains('power-up')){
                    squares[pacmanStart].classList.remove('power-up')
                    squares[pacmanStart].classList.add('pacman')  
                    pcScore += 5
                    score.innerHTML = `Score: ${pcScore}` 
                    console.log(`Score: ${pcScore}`)  

            }}
//Out of bound left
let outOfBoundsLeft = function (){
         if (pacmanStart === 364) {
                    pacmanStart = 391
                    squares[pacmanStart].classList.remove('pacman') 
                }
}

//Out of bounds right 
let outOfBoundsRight = function(){
         if (pacmanStart === 391) {
                    pacmanStart = 364
                    squares[pacmanStart].classList.remove('pacman') 
                }
}


    
//Key up
document.addEventListener('keyup', function (userKey){
if (userKey.key === 'ArrowUp')
        {
        if (pacmanStart - width >=0 && !squares[pacmanStart - width].classList.contains('wall')) {
             squares[pacmanStart].classList.remove('pacman')  
                pacmanStart -= width
                squares[pacmanStart].classList.add('pacman')   
                eatDots()
                powerUp()
        }}
        })

//Key down 
document.addEventListener('keyup', function (userKey){
        if (userKey.key === 'ArrowDown')
        {
            if (pacmanStart + width < width * width && !squares[pacmanStart + width].classList.contains('wall')){
            if (!squares[pacmanStart + width].classList.contains('ghost-lair')){
                squares[pacmanStart].classList.remove('pacman')
                pacmanStart += width
                squares[pacmanStart].classList.add('pacman')
                eatDots()
                powerUp()   
                    
                }} 
            }
                
    })
        
//Key left
document.addEventListener('keyup', function (userKey){
    if (userKey.key === 'ArrowLeft')
    {
        if (pacmanStart % width !== 0 && !squares[pacmanStart-1].classList.contains('wall')){   
            squares[pacmanStart].classList.remove('pacman')    
            pacmanStart -=1
            outOfBoundsLeft()
            squares[pacmanStart].classList.add('pacman')
            eatDots()
            powerUp()
         }
    }
    })


//Key right
document.addEventListener('keyup', function (userKey){
    if (userKey.key === 'ArrowRight'){
        if (pacmanStart  % width < width -1 && !squares[pacmanStart+1].classList.contains('wall')){            squares[pacmanStart].classList.remove('pacman')
            pacmanStart +=1
            outOfBoundsRight()
            squares[pacmanStart].classList.add('pacman')
            eatDots()
            powerUp()
        }}
    })

