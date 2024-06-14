const{create,destroy,update,show,index}=require(`../src/helpers`)
const { nanoid } = require("nanoid");




test(`check if correct data is inserted`,()=>{
    expect(create([],`Ayyoub`,5,6)).toEqual([{name:`Ayyoub`,amount:5,donation:6}])
    


})

test(`check if destroying the right object`,()=>{
    expect(destroy([{id:`123`},{id:`456`}],`123`)).toEqual([{id:`456`}])
    


})
test(`check if updating the right object with the right values`,()=>{
    expect(update([{id:`123`,name:`Ayyoub`,amount:33,donation:22},{id:`333`}],`123`,`John`,55,11)).toEqual([{id:`123`,name:`John`,amount:55,donation:11},{id:`333`}])
    


})
test(`showing all the purchases`,()=>{
    expect(index([{id:`123`,name:`Ayyoub`,amount:33,donation:22}],`123`)).toEqual("id 123 name Ayyoub amount 33 donation 22")
    


})

