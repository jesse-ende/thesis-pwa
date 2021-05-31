// const puppeteer = require('puppeteer');
// const fs = require('fs')
// const { Worker } = require('worker_threads')
// const axios = require("axios");
const child_process = require('child_process');
const { exit } = require('process');
const fs = require('fs');

function startDetection() {
    // if (!fs.existsSync(ouputFolder)){
    //     fs.mkdirSync(ouputFolder);
    // }
    // var urls = fs.readFileSync("./top-1m.csv", 'utf8' , (err) => {
    //     if (err) {
    //         console.error(err)
    //         return
    //     }
    // });
    // urls = urls.split("\n");
    // console.log(urls.slice(0, 250000).length);
    // part = urls.slice(0, 250000);
    var numchild  = require('os').cpus().length;
    
    console.log("cores available:", numchild)
    numchild=4;
    console.log("childs", numchild);
    urls_processed = 0
    var csv_urls = fs.readFileSync("./top-1m.csv", 'utf8' , (err) => {
        if (err) {
            console.error(err)
            return
        }
    });
    csv_urls = csv_urls.split("\n");
    urls = []
    for (let i = 0; i < csv_urls.length; i++) {
        urls.push(csv_urls[i].split(",")[1]);
    }
    var done = 0;

    for (var i = 0; i < numchild; i++){
        (function(i) {
            var child = child_process.fork('./thread.js');
            child.send(`${i},start`);
            child.on('message', function(message) {
                console.log('[parent] received message from child:', message);
                if (message.includes("start") || message.includes("processed")) {
                    child.send(`http://${urls[done]}`);
                    done++;
                }
                if (done === 10) {
                    console.log('[parent] received all results');
                    child.kill()
                    exit(0);
                }
            });
            // child.on('close', function (code) {
            //     console.log('child process exited with code ' + code);
            //  });
        })(i);
        
    }

    // var worker = new Worker('./thread.js');
    // worker.on('message', message => console.log(message));      
    // worker.postMessage( "hoi" );

    // return new Promise((resolve, reject) => {
    //     const worker = new Worker('./thread.js');
    //     worker.postMessage({workerData: [0, 250000]});
    //     worker.on('message', resolve);
    //     worker.on('error', reject);
    //     worker.on('exit', (code) => {
    //       if (code !== 0)
    //         reject(new Error(`Worker stopped with exit code ${code}`));
    //     })
    //   })
   
};

async function run() {
    const result = await startDetection();
}
  
run().catch(err => console.error(err))