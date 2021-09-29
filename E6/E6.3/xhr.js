const xhr = new XMLHttpRequest();

xhr.onload = function(){
    console.log(`XHR Status ${xhr.status}; Result ${xhr.response}`)
};

xhr.onprogress = function(){
    console.log("onprogress")
};

xhr.onerror = function(){
    console.log('Error')
};

xhr.open("get", "https://picsum.photos/v2/list", true);
xhr.send();
