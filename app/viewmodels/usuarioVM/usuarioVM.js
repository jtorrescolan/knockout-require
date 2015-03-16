define(['ko', 'models/usuario/usuario'], function(ko, Usuario){
	return function UsuarioVM(){

		var self = this;

		self.IdUsuario = ko.observable();
		self.NombreUsuario = ko.observable();
		self.Usuarios = ko.observableArray([
			new Usuario({Id_Usuario:1 , NombreUsuario:'Jorge'}),
			new Usuario({Id_Usuario:2 , NombreUsuario:'Javier'}),
			new Usuario({Id_Usuario:3 , NombreUsuario:'José'})
		]);

		self.Get = function(Id_Usuario){
			console.log(self);
		};

		self.Save = function(Usuario){
			console.log(self);
			console.log(ko.toJS(self));
		};

		self.GetAll = function(){

		};

		self.Delete = function(Id_Usuario){

		};
	}
});