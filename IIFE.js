//self invoked function

(function iife(){
    console.log('iife is a function that is calling itself');
})();



var username = " Javascript ";

(function js(name){

    console.log('The console before display since its iife function');
    function display(name)
    {
       console.log('The display function prints' + name + 'only after display func is called as it is not iife');
    }

    display(name);

})(username);