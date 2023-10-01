
export function call({name}){
    const spawner = require('child_process').spawn;

// Replace 'path/to/your_python_script.py' and provide any necessary arguments.
var x = {
    "name": name,
    "topThreeReplacements": undefined
}
    
const pythonProcess = spawner('python3', ['PSA-CodeSprint2023/internetwork/src/data/sbert.py', JSON.stringify(x)]);

let pythonOutput = ''; // Initialize an empty string to store the output

pythonProcess.stdout.on('data', (data) => {
  // Append the output data to the variable
  console.log(data)
  pythonOutput = data
});

pythonProcess.on('close', (code) => {
  // Code is the exit code of the Python script 
  console.log(`Python script exited with code ${code}`);

  // Now, you can access the Python script's output as 'pythonOutput'
  console.log('Python script output:');
  console.log(pythonOutput.toString());

  // You can further process 'pythonOutput' as needed.
});

pythonProcess.stderr.on('data', (data) => {
    pythonOutput += data.toString()
})

}
