AppController = RootController.extend({
  data: {

  }
});

AppController.events({
    "click #menuBtn": function (e, tmpl) {
		if(window.location.pathname == '/'){
			window.location.href = '/app';
		}
        var menu = document.getElementById('menu');
		menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    }
});
