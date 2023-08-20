import { exec } from 'child_process'
// const {exec} = require('child_process')

export function Suspender(){
    return exec('shutdown /h' , (error, stderr, stdout) => {
        if(error){
            console.log(`error: ${error}`);
            return ;
        }
        else if(stderr){
            console.log(`stderr: ${stderr}`);
            return;
        }
    
        console.log(stdout)
    })

    
}

export function Desligar(){
    exec('shutdown /s' , (error, stderr, stdout) => {
        if(error){
            console.log(`error: ${error}`);
            return ;
        }
        else if(stderr){
            console.log(`stderr: ${stderr}`);
            return;
        }
    
        console.log(stdout)
    })
}

export function Reiniciar(){
    exec('shutdown /r' , (error, stderr, stdout) => {
        if(error){
            console.log(`error: ${error}`);
            return ;
        }
        else if(stderr){
            console.log(`stderr: ${stderr}`);
            return;
        }
    
        console.log(stdout)
    })
}