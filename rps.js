function getComputerChoice(){
    let cpunum = Math.random();
    if (cpunum > 0 && cpunum < (1/3)){
        cpuchoice = "rock"
    } else if (cpunum > (1/3) && cpunum< (2/3)){
        cpuchoice="paper"
    } else cpuchoice="scissors";

    return cpuchoice;  
}