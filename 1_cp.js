const cp=require('child_process')
// to run a file
console.log('output '+ cp.execSync('node test.js'))

// cp.execSync('calc')  # Opens calculator
// cp.execSync('start chrome') # Opens chrome
// Opens google in chrome
cp.execSync('start chrome www.google.com') 
cp.execSync('start chrome www.scaler.com')
