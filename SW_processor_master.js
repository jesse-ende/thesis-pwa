const child_process = require('child_process');
const { exit } = require('process');
const fs = require('fs');
const escomplex = require('escomplex');
const { dir } = require('console');

function startProcessing() {
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
    // numchild=4;
    console.log("childs", numchild);
    
    const sw_folder = __dirname + "/SWsbrowser";
    const iterateDir = (sw_folder) => {

        const files = [],
            dirs = [];
    
        function dirIt(sw_folder) {
            file_inclusion = "beautified"

            try {
                if (fs.statSync(sw_folder).isFile()) {
                    if (sw_folder.includes(file_inclusion))
                        files.push(sw_folder)
                    return
                }

                let dirContent = fs.readdirSync(sw_folder);
    
                dirContent.forEach( path => {
                    const fullPath = sw_folder + "/" + path
    
                    if ( fs.statSync(fullPath).isFile() && !fullPath.includes(file_inclusion))
                        files.push(fullPath);
                    else {
                        dirs.push(fullPath);
                        // console.log("fullpath dir", fullPath)
                    }
                });
                
                while ( dirs.length !== 0 )
    
                    dirIt(dirs.pop());
    
                return files;
    
            } catch(ex) {
                console.log(ex);
                return false;
            }
        };
        return dirIt(sw_folder);
    };
    sw_paths = iterateDir(sw_folder);
    
    var done = 0;
    for (var i = 0; i < numchild; i++){
        (function(i) {
            var child = child_process.fork('./SW_processor_slave.js');
            child.send(sw_paths[done]);
            done++
            child.on('message', function(message) {
                // console.log('[parent] received message from child:', message);
                if (message.includes("processed") && done !== 1000) {
                    if (message.split(",")[2] != 1) {
                        console.log('[parent] received message from child:', message);
                    }
                    child.send(sw_paths[done]);
                    done++;
                }
                else if (done === 1000) {
                    console.log('[parent] received all results', done);
                    child.send("stop child")
                    // child.disconnect()
                    child.kill()
                    // continue
                    // exit(0)
                }
            });
            // child.on('close', function (code) {
            //     console.log('child process exited with code ' + code);
            //  });
        })(i);
        
    }
   
};

async function run() {
    const result = await startProcessing();
}
  
run().catch(err => console.error(err))