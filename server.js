const express = require('express')
const app = express()
const PORT = 8000

const presidents = {
    'tafawa balewa' : {
        'birthName': 'Abubakar Tafawa Balewa',
        'tenure':'1960 - 1966',
        'ethnicity': 'Gere',
        'stateOfOrigin': 'Bauchi'
    },
    'aguiyi ironsi':{
        'birthName': 'Aguiyi Ironsi',
        'tenure':'',
        'ethnicity':'', 
        'stateOfOrigin':''
    },
    'yakubu gowon':{
        'birthName': 'Yakubu Gowon',
        'tenure':'',
        'ethnicity':'', 
        'stateOfOrigin':''
    },
    'murtala mohammed':{
        'birthName': 'Muritala Rahmat Mohammed',
        'tenure':'',
        'ethnicity':'', 
        'stateOfOrigin':''
    },
    'olusegun obasanjo':{
        'birthName': 'Olusegun Obasanjo',
        'tenure':'',
        'ethnicity':'', 
        'stateOfOrigin':''
    },
    'sheu shagari':{
        'birthName': 'Sheu Shagari',
        'tenure':'',
        'ethnicity':'', 
        'stateOfOrigin':''
    },
    'muhammadu buhari':{
        'birthName': 'Muhammadu Buhari',
        'tenure':'',
        'ethnicity':'', 
        'stateOfOrigin':''
    },
    'ibrahim babangida':{
        'birthName': 'Ibrahim Badamasi Babangida',
        'tenure':'',
        'ethnicity':'', 
        'stateOfOrigin':''
    },
    'ernest shonekan':{
        'birthName': 'Ernest Shonekan',
        'tenure':'',
        'ethnicity':'', 
        'stateOfOrigin':''
    },
    'sanni abacha':{
        'birthName': 'Sanni Abacha',
        'tenure':'',
        'ethnicity':'', 
        'stateOfOrigin':''
    },
    'abdulsalam abubakar':{
        'birthName': 'Abdulsalam Abubakar',
        'tenure':'',
        'ethnicity':'', 
        'stateOfOrigin':''
    },
    'musa yar\'adua':{
        'birthName': 'Umar Musa Yar\'Adua',
        'tenure':'',
        'ethnicity':'', 
        'stateOfOrigin':''
    },
    'goodluck jonathan':{
        'birthName': 'Goodluck Ebele Jonathan',
        'tenure':'',
        'ethnicity':'', 
        'stateOfOrigin':''
    },
    'unkwown':{
        'birthName': 'Unknown',
        'tenure':'Unknown',
        'ethnicity':'Unknown', 
        'stateOfOrigin':'Unknown'
    }
}
app.get('/', (req, res)=>{
    res.sendFile(__dirname +'/index.html')
}) 
app.get('/api/:profile', (req,res)=>{
    const profile_search = req.params.profile.toLocaleLowerCase()
    if(presidents [profile_search]){
        res.json(presidents[profile_search])
    }else{
        res.json(presidents['unkwown'])
    }
})
    
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})