interface Germany {
    type: 'germany',
    flyingSpeed: number;
}

interface France {
    type: 'france',
    runningSpeed: number;
}

type Euro = Germany | France 

function moveNations(nation: Euro) {
    let speed;
    switch (nation.type) {
       case 'germany':
          speed = nation.flyingSpeed;
          break ;
       case 'france':
          speed = nation.runningSpeed;
    }
    console.log('Moving to nations: '+ speed)
}

moveNations({type: 'germany', flyingSpeed: 10})