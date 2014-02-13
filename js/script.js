(function($){

    var myObject = {
        init: function() {
            $('#myButton').on('click', this.alertUser);
        },
        alertUser: function() {
            alert("This is my version");
        }
    };

    function alertWorld(el) {
        this.el = el;

        this.sayHi = function() {
            alert("I say hello world!");
        }

        this.el.on('click', this.sayHi);
    }

	$(function(){
        myObject.init();
        var theButton = alertWorld($('#myButton2'));
	});

})(jQuery);
