const escomplex = require('escomplex')
const { exit } = require('process');

async function process_SW(path) {
    const result = escomplex.analyse(path);
    if (result)
        return result;
}

process.on('message', async function(message) {
    if (message.includes("stop child")) {
        console.log("stopping")
        process.disconnect();
        process.kill();
        exit(0)
    }
    else {
        // console.log("child received", message)
        var result = await process_SW(message);
        var cyclomatic = result.aggregate.cyclomatic
        if (message.includes("zyro")) {
            console.log(result)
        }
        // console.log(message, "cyclomatic", cyclomatic);
        process.send(`processed, ${message}, ${cyclomatic}`);    
    }
    return
});