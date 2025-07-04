// дата сеансу
// час сеансу
// зала в якій проходить фільм

const date = 'Mon 26';
const time = '19:30';
const room = 'blue';
const title = 'Lilo and Stitch';

if(date === 'Mon 26'){
    if(time === '19:30'){
        if(room === 'red'){
            if(title === 'Lilo and Stitch'){
                console.log('проходьте вам дозволено')
            } else{
    console.log('вам не дозволено пройти')
}
        } else{
    console.log('вам не дозволено пройти')
}
    } else{
    console.log('вам не дозволено пройти')
}
} else{
    console.log('вам не дозволено пройти')
}

if(date === 'Mon 26' && time === '19:30' && (room === 'red' || room === 'blue') && title === 'Lilo and Stitch'){
    console.log('дозволено')
} else {
    console.log('не дозволено')
}


function movieController(date, time, room, title){
    const isValidDate = date === 'Mon 26';
    const isValidTime = time === '19:30';
    const isValidRoom = room === 'red' || room === 'blue';
    const isValidTitle = title === 'Lilo and Stitch';

    if(isValidDate && isValidTime && isValidRoom && isValidTitle){
        console.log('дозволено')
    } else {
    console.log('не дозволено')
    }
}

function movieController(date, time, room, title){
    if(date !== 'Mon 26'){
        return 'Не дозволено'
    }
  
    if(time !== '19:30') {
       return 'Не дозволено'
    }

    if(room !== 'red' && room !== 'blue'){
        console.log('1')
       return 'Не дозволено'
    }

    if(title !== 'Lilo and Stitch'){
        return 'Не дозволено'
    }

  return 'дозволено';
}

// movieController('Mon 26', '19:30', 'red', 'Lilo and Stitch');
// movieController('Mon 26', '19:30', 'blue', 'MineCraft');


console.log(movieController('Mon 26', '19:30', 'red', 'Lilo and Stitch'))





