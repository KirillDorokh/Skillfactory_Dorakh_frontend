const result = document.querySelector('.result');

if (window.Worker) {
    const myWorker = new Worker("worker.js");

    setTimeout(function() {
        myWorker.postMessage([10, 15]);
        console.log('1 second left posted to worker');
    }, 1000);

    setTimeout(function() {
        myWorker.postMessage([4, 7]);
        console.log('2 second left posted to worker');
    }, 3000);

    myWorker.onmessage = function(e) {
        result.textContent = e.data;
        console.log('Message received from worker');
    }
} else {
    console.log('Your browser doesn\'t support web workers.')
}